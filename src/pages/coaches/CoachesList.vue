<template>
    <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
        <p>{{ error }}</p>
    </BaseDialog>
    <section>
        <CoachFilter @changeFilter="setFilters"/>
    </section>  
    <section>
        <BaseCard>
        <div class="controls">
            <BaseButton mode="outline" @click="loadCoaches">Refresh</BaseButton>
            <BaseButton link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as a coach</BaseButton>
            <BaseButton link to="/register" v-if="isLoggedIn && !isLoading && !isCoach">Register as Coach</BaseButton>
        </div>
        <div v-if="isLoading">
            <BaseSpinner/>
        </div>
        <ul v-else-if="hasCoaches">
            <CoachesItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName" :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"/>
                
        </ul>
        <h3 v-else>No Coaches Found</h3>
    </BaseCard>
    </section>  

</template>

<script>
import CoachesItem from '../../components/coaches/CoachesItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    data:()=>({
        isLoading:false,
        error:null,
        activeFilter: {
            frontend:true,
            backend:true,
            career:true
        }
    }),
    computed:{
        isLoggedIn(){
            return this.$store.getters.isAuthenticated;
        },
        filteredCoaches(){
        const coaches =  this.$store.getters['coaches/coaches'];
        return coaches.filter(coach=>{
            if(this.activeFilter.frontend && coach.areas.includes('frontend')){
                return true;
            }
            if(this.activeFilter.backend && coach.areas.includes('backend')){
                return true;
            }
            if(this.activeFilter.career && coach.areas.includes('career')){
                return true;
            }
            return false;
        })
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
        
        isCoach(){
            return this.$store.getters['coaches/isCoach'];
        }
    
    },
    components:{
        CoachesItem,
        CoachFilter
    },
    created(){
        this.loadCoaches();
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilter = updatedFilters
        },
        async loadCoaches(){
            this.isLoading = true;
            try{
                await this.$store.dispatch('coaches/loadCoaches');
            }catch(error){
                this.error = error.message || 'Something went wrong';
            }
            this.isLoading=false;
        },
        handleError(){
            this.error = null;  
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
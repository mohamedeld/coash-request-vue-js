<template>
    <section>
        <CoachFilter @changeFilter="setFilters"/>
    </section>  
    <section>
        <BaseCard>
        <div class="controls">
            <BaseButton mode="outline">Refresh</BaseButton>
            <BaseButton link to="/register" v-if="!isCoach">Register as Coach</BaseButton>
        </div>
        <ul v-if="hasCoaches">
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
        activeFilter: {
            frontend:true,
            backend:true,
            career:true
        }
    }),
    computed:{
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
            return this.$store.getters['coaches/hasCoaches'];
        },
        
        isCoach(){
            return this.$store.getters['coaches/isCoach'];
        }
    
    },
    components:{
        CoachesItem,
        CoachFilter
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilter = updatedFilters
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
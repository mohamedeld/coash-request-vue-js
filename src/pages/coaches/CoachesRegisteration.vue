<template>
    <section>
        <BaseCard>
            <h2>Register as a coach now!</h2>
            <CoachForm @saveData="saveFormData"/>
        </BaseCard>
    </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
    components:{
        CoachForm
    },
    methods:{
        saveFormData(data){
            this.$store.dispatch('coaches/registerCoach',data);
            this.$router.replace('/coaches');
        }
    },
    
}
</script>

<style scoped>

</style>
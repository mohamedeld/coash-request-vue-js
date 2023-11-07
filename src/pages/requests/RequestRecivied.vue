<template>
    <section>
        <BaseCard>
            <header>
                <h2>Requests Received</h2>
            </header>
            <ul v-if="hasRequest">
                <RequestItem v-for="request in requests" :key="request.id" :email="request.email" :message="request.message"/>
            </ul>
            <h3 v-else>You haven't received any requests yet!</h3>
        </BaseCard>
    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    components:{
        RequestItem
    },
    computed:{
        requests(){
            return this.$store.getters['requests/requests'];
        },
        hasRequest(){ 
            return this.$store.getters['requests/hasRequest']
        }
    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
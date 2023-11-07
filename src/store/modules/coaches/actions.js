export default {
    async registerCoach(context,data){
        const userId = context.rootGetters.userId;
        const coachData = {
            // id:context.rootGetters.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate:data.hourlyRate,
            areas:data.areas
        };
        const token = context.rootGetters.token;
        const response = await fetch(`https://vue-auth-a1cd6-default-rtdb.firebaseio.com/${userId}.json?auth=${token}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(coachData)
        });
        
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'failed to fetch data');
            throw error;
        }
        // context.commit('registerCoach',responseData)
        context.commit('registerCoach',{
            ...coachData,
            id:userId
        })
    },
    async loadCoaches(context){
        if(!context.getters.shouldUpdate){
            return;
        }
        const response = await fetch(`http://localhost:3000/coaches`);
        const responseData = await response.json();
        
        if(!response.ok){
            const error = new Error(responseData.message || 'failed to fetch data');
            throw error;
        }
        context.commit('setCoaches',responseData);
        context.commit('setFetchTime');
    },

}
export default {
    async registerRequest(context,payload){
        const requestData = {
            coachId:payload.coachId,
            email:payload.email,
            message:payload.message
        }
        const response = await fetch(`http://localhost:3000/requests`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(requestData)
        });
        if(!response.ok){
            const error = new Error(response.message || 'Failed to fetch data');
            throw error;
        }
        const responseData = await response.json();
        context.commit('registerRequest',responseData);
    }
}
export default {
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCiAvpwC_dvQEFZEM8k5TM3Bo19sNq6j2Y',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'error with signup');
            throw error;
        }
        console.log(responseData);
        context.commit('setUser',{
            token:responseData.idToken,
            userId:responseData.localId,
            tokenExpiration:responseData.expiresIn
        });
    },
    async signup(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCiAvpwC_dvQEFZEM8k5TM3Bo19sNq6j2Y',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'error with signup');
            throw error;
        }
        console.log(responseData);
        context.commit('setUser',{
            token:responseData.idToken,
            userId:responseData.localId,
            tokenExpiration:responseData.expiresIn
        });
    },
    logout(context){
        context.commit('setUser',{
            token:null,
            userId:null,
            tokenExpiration:null
        })
    }
}
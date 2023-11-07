<template>
    <div>
        <base-dialog :show="!!error" title="an error occurred" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
        <base-dialog :show="isLoading" title="Authenticating...." fixed >
       <base-spinner></base-spinner>
    </base-dialog>
    <BaseCard>
    <form @submit.prevent="submitLogin">
            <div class="form-control">
                <label for="email">E-Mail</label>
                <input type="email" name="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model.trim="password">
            </div>
            <p v-if="!formIsValid">Please enter your data correctly</p>
            <BaseButton>{{submitButtonCaption}}</BaseButton>
            <BaseButton type="button" mode="flat" @click="switchMode">{{ switchModeButtonCaption }}</BaseButton>
        </form>
    </BaseCard>
</div>
</template>

<script>
export default {
    data:()=>({
        email:'',
        password:'',
        formIsValid:true,
        mode:'login',
        isLoading:false,
        error:null
    }),
    computed:{
        
        submitButtonCaption(){
            if(this.mode === 'login'){
                return 'Login'
            }else{
                return 'Signup'
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Signup instead'
            }else{
                return 'Login instead'
            }
        }
    },
    methods:{
        async submitLogin(){
        this.formIsValid = true;
        if(this.email === '' || !this.email.includes('@') || this.password.length < 6){
            this.formIsValid = false;
            return;
        }
        this.isLoading = true;
        try{
            if(this.mode === 'login'){
            this.$store.dispatch('login',{
                email:this.email,
                password:this.password
            })
        }else{
            await this.$store.dispatch('signup',{
                email:this.email,
                password:this.password
            })
        }
        const redirectURL = '/'+ (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectURL)
        }catch(error){
            this.error = error.message || 'Failed to authentication'
        }
        this.isLoading = false;
    },
    switchMode(){
        if(this.mode === 'login'){
            this.mode = 'signup';
        }else{
            this.mode= 'login';
        }
    },
    handleError(){
        this.error = null;
    }
    }
    
}
</script>

<style scoped>
form {
  margin: 1rem;
  
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
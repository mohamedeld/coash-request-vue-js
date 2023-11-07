<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Your E-mail</label>
            <input type="email" id="email" name="email" v-model.trim="email"/>
        </div>
        <div class="form-control">
            <label for="message">Your Message</label>
            <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p v-if="!formIsValid">Please enter a valid email or enter your message</p>
        <div class="actions">
            <BaseButton>Send Message</BaseButton>
        </div>
    </form>
</template>

<script>
export default {
    data:()=>({
        email:'',
        message:'',
        formIsValid:true
    }),
    methods:{
        submitForm(){
            this.formIsValid = true;
            if(this.email ==='' || !this.email.includes('@') || this.message ===''){
                this.formIsValid = false;
                return;
            }
        const formData = {
            coachId:this.$route.params.id,
            email:this.email,
            message:this.message
        }
        this.$store.dispatch('requests/registerRequest',formData);
        this.$router.replace('/coaches');
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
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

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
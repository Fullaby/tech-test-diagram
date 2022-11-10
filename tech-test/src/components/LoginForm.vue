<script>
import {mapActions, mapWritableState} from "pinia"
import {useCustomStore} from "../stores/custom"
export default{
    data(){
        return{
            username: "",
            password: ""
        }
    },
    methods:{
        ...mapActions(useCustomStore,["login"]),
        handleLogin(){
            this.login({
                username: this.username,
                password: this.password
            })
        }
    },
    computed:{
      ...mapWritableState(useCustomStore,["errorMessage"]),
      

    },
    created(){
      this.errorMessage= ""
    }
}
</script>

<template>
        <section class="vh-screen" style="background-color: #432C7A;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form @submit.prevent="handleLogin">
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                  </div>
                  
                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>
                  <p style="color:red" v-if="errorMessage">{{errorMessage}}</p>


                  <div class="form-outline mb-4">
                    <input type="text" name="username" v-model="username" id="form2Example17" class="form-control form-control-lg" placeholder="Username"/>
                    <label class="form-label" for="form2Example17">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" name="password" v-model="password" id="form2Example27" class="form-control form-control-lg" placeholder="Password"/>
                    <label class="form-label"  for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button  class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="/sign-up"
                      style="color: #393f81;">Sign Up here</a></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
</template>
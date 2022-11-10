<script>
import { mapActions, mapState } from 'pinia'
import { useCustomStore } from '../stores/custom'
export default{
  data(){
    return{
      username:"",
      password: ""
    }
  },
  methods:{
    ...mapActions(useCustomStore,["register"]),
    handleRegister(){
      this.register({
        username: this.username,
        password: this.password
      })
    }
  },
  computed:{
    ...mapState(useCustomStore,["registerErrorMessage"])
  },
  created(){
    this.registerErrorMessage=""
  }
}
</script>

<template>
   
        <section class="" style="background-color: #432C7A; padding-bottom: 100px;">
  <div class="container" style="height: 100%; width: 100%; padding-top: 20px;">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" @submit.prevent="handleRegister()">
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                  <p v-if="registerErrorMessage" style="color: red;">{{registerErrorMessage}}</p>
                      <input v-model="username" type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Username</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input v-model="password" type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>



                  <div class="form-check d-flex justify-content-center mb-5">
                    <label class="form-check-label" for="form2Example3">
                      Already Have Account? <a href="/sign-in">Sign-In</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
</template>
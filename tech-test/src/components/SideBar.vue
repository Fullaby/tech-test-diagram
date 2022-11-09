<script>
export default{
    data(){
        return{
            test: ""
        }
    },
    methods:{
        logOut(){
            localStorage.clear()
            this.$router.push('/sign-in')
        }
    },
    created(){
        this.test=localStorage.getItem("name")
    }
}
</script>

<template>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 600px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Company</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="/"></use></svg>
          Home
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="/" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>{{test}}</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><button class="dropdown-item" @click="logOut()">Sign out</button></li>
      </ul>
    </div>
  </div>
</template>
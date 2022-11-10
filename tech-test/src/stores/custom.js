import { defineStore } from 'pinia'
import axios from "axios"

export const useCustomStore = defineStore({
  id: "Custom",
  
  state: ()=>({
    baseUrl: "https://tech-test-backend.herokuapp.com",
    errorMessage: "",
    diagramDataMonth: "",
    diagramDataValue: "",
    registerErrorMessage: ""
  }),
  actions: {
    async login(value){
      try {
        let {data}= await axios(`${this.baseUrl}/users/login`,{
          method: "post",
          data:{
            username: value.username,
            password: value.password
          }
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.username)
        this.fetchDiagramData()
        this.router.push("/")
      } catch (error) {
        this.errorMessage= error.response.data.message
      }
    },
    async register(value){
        try {
            await axios(`${this.baseUrl}/users/register`,{
                method: 'post',
                data:{
                    username: value.username,
                    password: value.password
                  }
            })
            this.router.push('/sign-in')
        } catch (error) {
          this.registerErrorMessage= error.response.data.message
        }
    },
    async fetchDiagramData(){
        try {
            let {data}= await axios(`${this.baseUrl}/diagram-data`,{
                method: "get",
                headers:{
                    access_token: localStorage.getItem("access_token")
                }
            })
            this.diagramDataMonth=data.map(el=>el.month)
            this.diagramDataValue=data.map(el=>el.value)
        } catch (error) {
            console.log(error);
        }
    }
  }
})


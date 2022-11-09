<script>
import ChartData from "../components/ChartData.vue"
import SideBar from "../components/SideBar.vue"
export default{
    components:{
        ChartData,
        SideBar
    }
}
</script>

<template>
    <div class="d-flex justify-content-between">
     <SideBar/>
      <ChartData style="padding-right: 300px; padding-top: 20px;"/>
    </div>
</template>
<script>
  import {mapActions, mapWritableState, mapState} from "pinia"
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { useCustomStore } from '../stores/custom'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        
        chartOptions: {
          responsive: true
        }
      }
    },
    methods:{
      ...mapActions(useCustomStore,["fetchDiagramData"]),
      test(){
        return{
          labels: this.diagramDataMonth,
          datasets: [ {
             label: "Diagram Data",
             backgroundColor: '#f87979',
             data: this.diagramDataValue
             } ]
        }
      }
    },
    computed:{
      ...mapState(useCustomStore,["diagramDataMonth","diagramDataValue"])
    },
    created(){
      this.fetchDiagramData()
    }
  }
  </script>
<template>
  <div class="d-flex justify-content-center ">
    <div class="flex-column">
      <div>
      <h1 style="padding-left: 40px;">DIAGRAM OF COMPANY</h1>
      </div>
      <div>
      <Bar
      :chart-options="chartOptions"
      :chart-data="test()"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      style="width: 500px; height:300px"
    />
      </div>
    </div>
     
  </div>
  
  </template>
  
  
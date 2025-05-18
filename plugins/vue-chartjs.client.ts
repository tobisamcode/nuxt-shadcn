// plugins/vue-chartjs.client.ts
import { defineNuxtPlugin } from '#app'
import { Chart as ChartJS, registerables } from 'chart.js'

// register *all* the Chart.js controllers/elements/plugins/scales you’ll use
ChartJS.register(...registerables)

export default defineNuxtPlugin(() => {
  // nothing else needed here
})

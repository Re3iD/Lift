import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Lift from '@/components/Lift.vue'
import LiftCels from "@/components/LiftCels.vue"
const app = createApp(App)
app.component('lift',Lift)
app.component('lift-cels',LiftCels)
app.use(store).mount('#app')

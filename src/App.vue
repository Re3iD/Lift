<script>


import Lift from "./components/Lift.vue"
import LiftCels from "./components/LiftCels.vue"
export default {
  
  component:{
    Lift,LiftCels
  },
  data: ()=>{
    
    return{
      stages:[1,2,3,4,5,6,7,8,9],
      stageAim:0,
      queue:[],
      liftAim:0,
      time:0,
      wait:[]
    }
  },
  methods: {
    async setAim(n){
      this.liftAim = n
      this.wait.unshift(n);
      if(this.stageAim==0){
        console.log('rect',this.stageAim)
        await this.call(this.wait.shift())
      }
    },
    openDoor(n){
      this.$refs.lift[n].door();
    },
    async call(lock){
console.log('why')
      this.$refs.box.style.top = 156*(lock-1)+'px';
          this.$refs.box.style.transition = Math.abs(lock-this.stageAim)+'s';
          this.time = Math.abs(lock-this.stageAim)
          await this.delay(this.time*1000)
          this.openDoor(this.liftAim-1)
          await this.delay(5000)
          this.openDoor(this.liftAim-1)
        this.stageAim = lock;
        if(this.wait.length){
        await this.delay(1000).then(this.queue.push(lock))
        }else{
          this.stageAim = 0
        }
        

            
    },
    delay: async (ms) => await new Promise(resolve => setTimeout(resolve, ms)),
    
  },

  watch:{
    queue:{
      handler(oldVal,newVal){
         console.log('watch')
        if(newVal.length>0){
        let lock = newVal[newVal.length-1]
        
        this.call(lock)
        
        }
      },
      deep:true
    },
  }, 

}
</script>
<template>
<div class="cont">
  <transition name="liftBox">
  <div class="boxLift">
    <div ref="box" class="box"></div>
  </div>
  </transition>
<div>
  <div v-for="item in stages" :key="item" @click="queue.push(item)">
    <lift ref="lift" @custom="setAim(item)" :stages="stages" :stage="item">
     <div class="cels">
      <div @click="setAim(item)" class="btn" v-for="item in stages" :key="item">{{item}}</div>
  </div>
    </lift>
    </div>
</div>
<div :style="{color:'red'}">
  
</div>
<!-- <div v-for="item in queue" :style="{color:'green'}" :key="item">{{item}}</div> -->
</div>
</template>

<style>
.cels{
        display:grid;
       grid-template-columns: repeat(3, 30px);
        grid-template-rows: repeat(3,30px);
    }
    .btn{
        border: 1px black solid;
        cursor: pointer;
        
    }
    .btn:active{
      background: red;
    }
.cont{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.boxLift{
   height: calc(9*156px);
   position: relative;
   border: 2px solid green;
}

.box{
  position: relative;
  top: 0;
  width: 100px;
  height: 156px;
  border: 2px solid black;
  transition-delay: 1s;/* Специально сделана такая задержка, чтобы успевать наполнить очередь */
}


</style>

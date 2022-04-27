<template>
  <div class="cont">
      <div @click="setAim(item)" class="btn" v-for="item in stages" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
props:['stages'],
data:()=>{
    
    return{
        
    }
},
methods:{
    setAim(num){
        this.$store.dispatch('SET_AIM',num)
    }
}
}
</script>

<style scoped>
    .cont{
        display:grid;
       grid-template-columns: repeat(3, 3vw);
        grid-template-rows: repeat(3,3vw);
    }
    .btn{
        border: 1px black solid;
    }
</style>
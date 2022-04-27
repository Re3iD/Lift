<template>
  <div @click.prevent.stop class="lift-gr">
  
  <div  class="lift">
    <div @click="door()" ref = "door" class="door"></div>
    <div  class="behind">  
      <slot></slot>
    </div>
  </div>
  <div class="bttns-gr">
    <div class="stage">{{stage}}</div>
    <button @click="custom(n)">push me</button>>
  </div>
</div>
</template>

<script>
export default {
    name:'lift',
    props:['stage','stages'],
    date:()=>{
        return{
            bool:false
        }
    },
    methods: {
        custom(n){
            this.$emit('custom',n)
        },
        door(){
            const check =  this.$refs.door.style.left
            if(check.length<4){       
            this.$refs.door.style.left = '-100px'
            }else{
              this.$refs.door.style.left = 0  
            } 
           return 'work'
        },
        
    }
}
</script>

<style scoped>
.behind{
    z-index: 3;
    position: relative;
    top:20px;
    top:50%
}
    .btn:active{
      background: red;
    }
    .stage{
  border: 2px solid black;
  margin-bottom: 2vh;
}
.lift-gr{
  display: flex;
  flex-direction: row;
}
.bttns-gr{
  grid-area: 'bttns';
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: fit-content;
}

.door{
    background: gray;
  position: absolute;
  border: 2px solid black;
  width:100px;
  height: 100%;
  left:0;
  z-index:1000;
  transition: 4s;
  transition-delay: 0.5s;
}
.lift{
  position: relative;
  z-index: 100;
  display:flex;
  flex-direction: row;
  border: 3px solid black;
  width: 100px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
}

</style>
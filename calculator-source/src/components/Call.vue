<template>
  <div class="calculator">  
   <input type="text" name="" id="get-text"  v-model="list" placeholder="0">
   
    <button class="btn"  v-for= "i in but" v-bind:key="i" v-on:click="web(i)">{{i}}</button>
    <button class="btn" v-for = "o in operator" v-bind:key="o" v-on:click="web(o)">{{o}}</button>
    <button class="btn" @click="blank()">c</button>
    <button class="btn" @click="backspace()">backspace</button>
    <button class="btn long" @click="opration(list)"> = </button>
   </div>
</template>

<script>
export default {
    data:function(){		
    return{
        but:[0,1,2,3,4,5,6,7,8,9],
        operator:['+','-','*','/'],
        list:'',
          
    }
    },
    methods: {
        
        backspace(){
           this.list = this.list.substr(0,this.list.length-1);
        },
          web(val){
        this.list +=val;
          },
        opration(eq){  
            if(eq.split('+').length == 2){
              var  arr = eq.split("+", 2);
              this.list=parseFloat(arr[0]) + parseFloat(arr[1]);
            
            }
            if(eq.split('-').length == 2){
                arr = eq.split("-", 2);
             this.list=parseFloat(arr[0]) - parseFloat(arr[1]);
            }
            if(eq.split('*').length == 2){
                arr = eq.split("*", 2);
             this.list=parseFloat(arr[0]) * parseFloat(arr[1]);
            }
            if(eq.split('/').length == 2){
                arr = eq.split("/", 2);
            this.list=parseFloat(arr[0]) / parseFloat(arr[1]);
            }
        return parseFloat(this.eq);
         },
         blank(){
            this.list = ''
         }
    }
}
</script>

<style>
.calculator{
    width: 800px;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows:minmax(50px,auto);
}
.btn{
   margin-right: 20px;
   margin-bottom: 20px;
}
#get-text{
    grid-column: 1/5;
    margin-bottom: 10px;
    margin-right: 20px;
}

</style>

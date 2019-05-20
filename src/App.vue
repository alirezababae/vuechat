<template>
  <div id="app">


 <div>

<label>massenge:</label>
<input type="text" v-model="name"v-on:keyup.enter="subname()"/>

<!--<
<input type="file" v-on:change="im">
<button @click="subfile()">dfdf</button>
-->

<button @click="subname()" >Add</button>


 </div>
 <div>

<ul>

<li v-for="pasname of names"
 v-bind="pasname['.key']">
 <p>{{pasname.name}}</p>

<button @click="rem(pasname['.key'])


">rem</button>
 </li>

</ul>

 </div>


  </div>
</template>

<script>

import {namesRef} from './firbase';


export default {

  data () {
    return {
      name:'',
im:''
    }
  },
  firebase:{
  names:namesRef


  },
  methods:{
subname(){

namesRef.push({name:this.name,edit:false});

this.name = '';
},
/*
subfile(){

namesRef.push({im:this.im});

},
*/
rem(key){

namesRef.child(key).remove();
//namesRef.splice(namesRef);
//this.val.splice(this.val);
//this.namesRef.splice(this.names);
}



  }



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
color: whitesmoke;
font-size: 20px;
border-radius: 30px;
background-color: #EC407A;
width: 200px;
height: 50px;
margin: auto;
margin-top: 3%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

button{
background-color: aquamarine;
border: 2px solid;


}

</style>

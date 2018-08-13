<template lang="html">
  <div class="page40">
  <h1> Page 40 </h1>
  <p> Page filtered by Id depending on which command</p>

<p> Your are currently logged as User number <span class="span"> {{ this.ranges[0].id }} </span>  Buddy </p>

<p> Here is Range en RAW Mode </p>
<p> {{ ranges }}</p>

<div class="">
  <h2> Hello here are your different loggin informations </h2>

    <h3 v-for="range in ranges">
  <p> You are user number {{ range.id }}</p>
  <p> Your names is : {{range.name}}  </p>
<p> Your commands are just the following : {{range.command}}</p>
<li v-for="order in range.command ">
order number {{order.id}} corresponds to {{order.name}}

</li>



</h3>
</div>

<table class="list">
  <tr>
    <th> id </th>
    <th> name </th>
    <th> Command </th>
  </tr>



  <tr v-for="range in ranges">
<td> {{range.id}} </td>
<td> {{range.name}} </td>
<!-- <td> {{range.command}} </td> -->
<td>
<ul class="list">
  <li v-for="command in range.command">
    {{command.id}} : {{command.name}}
  </li>
</ul>
</td>
  </tr>
</table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Page40',
  data () {
    return {
      ranges:[]
    }
  },
  mounted:function(){
    console.log('mounted from page 40 Au mounted users-id');
    this.getUsersNameCommandById();
  },
  methods:{
    getUsersNameCommandById:function(id){
      axios.get('http://localhost:3007/users/name/'+ sessionStorage.user).then((response) => {
        //console.log('getUsersNameCommandById', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
          console.log('ERROR getUsersNameCommandById');
        } else {
          console.log('SUCESS SO', response.data.rows);
          this.ranges = response.data.rows;
          console.log('l id de luser est le suivant ', this.ranges[0].id);
          console.log('l id de luser est le suivant ', this.ranges.id);
          var loggedUser = this.ranges[0].id;
          console.log( ' loggedUser ==>', loggedUser );
          this.loggedUser = {};
        }
      })
    }
  }
}
</script>

<style>
table.list{
border: 2px solid;
width: 60vw;
height: auto;
margin: auto;
}

table.list th{
  background: #0f87ff;
  color: black;
  opacity: 0.5;
}


table li {
  list-style: none;
}

table.list ul.list{
  color: orangered;
  font-size: 1vw;
}

span.span{
  font-size: 2vw;
  color: orangered;
  font-weight: 900;
}
</style>

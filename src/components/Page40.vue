<template lang="html">
  <div class="page40">
  <h1> Page 40 </h1>
  <p> Page filtered by Id depending on which command</p>



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
    console.log('mounted from page 40');
    this.getUsersNameCommandById();
  },
  methods:{
    getUsersNameCommandById:function(){
      axios.get('http://localhost:3007/users/name/3').then((response) => {
        console.log('getUsersNameCommandById', response);
        if (response.data.error) {
          app.errorMessage = response.data.message;
          console.log('ERROR getUsersNameCommandById');
        } else {
          console.log('SUCESS SO', response.data.rows);
          this.ranges = response.data.rows;
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
</style>

<template lang="html">
  <div class="page30">
  <h1> Page 30  Table of Name Command </h1>

  <table class="list">
    <tr>
    <th> id </th>
    <th> name </th>
    <th> Commandes effectues </th>
    <th> Action One </th>
    <th> Action Two </th>
    </tr>



    <tr v-for="name in names">
      <td> {{name.id}} </td>
      <td> {{name.name}} </td>
      <td>
      <ul class="list">
      <li v-for="command in name.command">
      {{ command.name}}
      </li>
      </ul>
      </td>
      <td> Edit </td>
      <td> Delete </td>
    </tr>

  </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Page30',
  data () {
    return {
      names:[]
    }
  },
  mounted:function(){
    console.log('mounted from page 30');
    this.getUsersNameCommand();
  },
  methods:{
    getUsersNameCommand:function(){
      axios.get('http://localhost:3007/users/name').then((response) => {
        console.log('getUsersNameCommand', response);
        if (response.data.error) {
          app.errorMesssage = response.data.message;
        } else {
          console.log('sucess so', response.data.rows);
          this.names = response.data.rows;
        }
      })
    }
  }
}
</script>

<style lang="css">
table.list{
border: 2px solid;
width: 60vw;
height: auto;
margin: auto;
}


table.list th{
  background: lightpink;
  color: black;
  opacity: 0.5;
}

table.list td:nth-child(even){
  background: rgba(192,192,192,0.2);
  text-align: center;
}

table.list td:nth-child(odd){
  background: rgba(120,120,120,0.2);
  text-align: center;
}

table li {
  list-style: none;
}

table.list ul.list{
  color: red;
  font-size: 1vw;
}






</style>

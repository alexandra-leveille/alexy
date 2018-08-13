<template lang="html">
  <div class="page301">
  <h1> Table of Name Command </h1>
  <p> SIMPLE DISPLAY FROM OUR INNER JOIN </p>
  <p> Nice Try - Equiv de Page recapitulative</p>
  Need to create a special table
   </button>

  <table class="list">
    <tr>
    <th> id </th>
    <th> name </th>
    <th> Commandes effectues </th>
    <th> - EDIT - </th>
    <th> - DELETE - </th>
    </tr>

    <tr v-for="name in names">
      <td> {{name.id}} </td>
      <td> {{name.name}} </td>
      <td>
      <ul class="list">
      <li v-for="command in name.command">
      <!-- {{ command.id}} : {{ command.name}} -->
      {{command.id}} : {{command.name}}
      </li>
      </ul>
      </td>
      <td> <button type="button" name="button"> /...  </button>  </td>
      <td> <button type="button" name="button"> X </button> </td>
    </tr>
  </table>


<!-- /////////////////////////// showingAddModal /////////////////////////// -->

<!-- /////////////////////////////////////////////////////////////////////////////// -->















  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Page301',
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

<style>
table.list{
border: 2px solid;
width: 60vw;
height: auto;
margin: auto;
}


table.list th{
  background: coral;
  color: black;
  opacity: 0.5;
}

table.list td:nth-child(even){
  background: rgba(165,27,112,0.3);
  text-align: center;
}

table.list td:nth-child(odd){
  background: rgba(87,101,10,0.4);
  text-align: center;
}

table li {
  list-style: none;
}

table.list ul.list{
  color: red;
  font-size: 1vw;
}

table.list td button{
  background: none;
  color: black;
  font-size: 2vw;
  border: 1px solid;
  transition: 1s;
}

table.list td button:hover{
  transition: 1s;
  background: springgreen;
}

.modal#addModal{
  height: 40vh;
  width: 40vw;
  border: 2px solid;
  margin: auto;
  position: fixed;
  top: 0;
  background: rgba(210,114,16,0.3);
}

.modal .title{
  background: lightpink;
  color: white;
  text-align: center;
  margin-top: 0;
  font-size: 2vw;
}

.modal .fright.close{
  border: none;
  background: transparent;
  position: fixed;
top:4px;
left: 287px
}
</style>

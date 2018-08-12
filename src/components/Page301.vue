<template lang="html">
  <div class="page301">
  <h1> Page 30  Table of Name Command </h1>
  <p> Nice Try - Equiv de Page recapitulative</p>
  Need to create a special table
  <button class="fright addNew" @click="showingAddModal = true"> <i class="fas fa-plus-square"></i>
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
      {{ command.name}}
      </li>
      </ul>
      </td>
      <td> <button type="button" name="button"> /...  </button>  </td>
      <td> <button type="button" name="button"> X </button> </td>
    </tr>
  </table>


<!-- /////////////////////////// showingAddModal /////////////////////////// -->
<div class="modal" id="addModal" v-if="showingAddModal">
  <h2 class="title"> Add a New UserCommand <button class="fright close" @click="showingAddModal = false"> <i class="fas fa-times-circle"></i> </button> </h2>
<br>

<table class="form2">
<label for=""> id </label>
<input type="text" name="" value="" v-model="UsersNameCommand.id">
<br>
<label for=""> Name </label>
<input type="text" name="" value="" v-model="UsersNameCommand.name">
<br>
<label for=""> Comamnds </label>
<li v-for="rest in UsersNameCommand.command">
<input type="text" name="" value="" v-model="rest.name">
</li>

<button @click="showingAddModal = false; createUsersNameCommand()" type="button" name="button"> Save </button>
</table>
</div>

<!-- /////////////////////////////////////////////////////////////////////////////// -->


   <!-- {"id":3,"name":"ngbvb frbf b","command":[{"id":1,"name":"Alpha100"},{"id":4,"name":"Delta"}]} -->













  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Page301',
  data () {
    return {
      showingAddModal:false,
      //UsersNameCommand: {"id":3,"name":"ngbvb frbf b","command":[{"id":1,"name":"Alpha100"},{"id":4,"name":"Delta"}]},
      // create a table = insert dinnes => CRUD THEM
      UsersNameCommand: {id:'',name:'', command:[{id:'',name:''},{id:'',name: ''}]},
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
    },
    createUsersNameCommand: function(){
      // equiv of an insert inside of  A TABLE getUsersNameCommand() - a table which dos not exist AT ALL
      console.log("createUsersNameCommand");
      axios.post('http://localhost:3007/users/name', this.UsersNameCommand).then((response) => {
      console.log('ligne 104', response);
      //   this.UsersNameCommand = {id:'', name:'', command:[{id:'',name:''},{id:'',name: ''}]};
      //   if (response.data.error) {
      //     console.log('createUsersNameCommand  ERROR');
      //   } else {
      //     console.log('createUsersNameCommand NO ERROR');
      //     this.getUsersNameCommand();
      //   }
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

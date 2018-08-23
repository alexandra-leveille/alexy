<template lang="html">
  <div class="page30">
  <h1> Page 30  Table of Name Command </h1>
  <p> Wor out with our table display2_command </p>
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
      <td> {{name.user_id}} </td>
      <td> {{name.user_name}} </td>
      <td> {{name.command_name}} </td>
      <td> <button @click="showingEditModal = true;selectUsersNameCommand(name)" type="button" name="button"> /...  </button>  </td>
      <td> <button @click="showingDeleteModal = true;selectUsersNameCommand(name)" type="button" name="button"> X </button> </td>
    </tr>
  </table>


<!-- /////////////////////////// showingAddModal /////////////////////////// -->
<div class="modal" id="addModal" v-if="showingAddModal">
  <h2 class="title"> Add a New UserCommand <button class="fright close" @click="showingAddModal = false"> <i class="fas fa-times-circle"></i> </button> </h2>
<br>

<table class="form2">
<label for=""> id </label>
<input type="text" name="" value="" v-model="usersNameCommand.user_id">
<br>
<label for=""> Name </label>
<input type="text" name="" value="" v-model="usersNameCommand.user_name">
<br>
<label for=""> Comamnds </label>
<input type="text" name="" value="" v-model="usersNameCommand.command_name">

<button @click="showingAddModal = false; createUsersNameCommand()" type="button" name="button"> Save </button>
</table>
</div>

                  <!-- /////////////////////////////////////////////////////////////////////////////// -->
<div class="modal" id="editModal" v-if="showingEditModal">
  <h2 class="title"> Edit UsersNameCommand  <button class="fright close" @click="showingEditModal = false"> <i class="fas fa-times-circle"></i> </button> </h2>

<table class="form2">
  <label for=""> user_id </label>
  <input type="text" name="" value="" v-model="clickedUsersNameCommand.user_id">
<br>
  <label for=""> user_name </label>
  <input type="text" name="" value="" v-model="clickedUsersNameCommand.user_name">
<br>
  <label for=""> command_name </label>
  <input type="text" name="" value="" v-model="clickedUsersNameCommand.command_name">
<br>

<button @click="showingEditModal = false;updateUsersNameCommand()" type="button" name="button"> Update </button>

</table>


</div>

<!-- ///////////////////////////////////////////////////////////////////////// -->

<div class="modal" id="deleteModal" v-if="showingDeleteModal">
  <h2 class="title"> You are about to delete the following<button class="fright close" @click="showingDeleteModal = false"> <i class="far fa-times-circle"></i> </button> </h2>
<p> Do you want to Delete the command number <span> {{clickedUsersNameCommand.user_id}} </span> associated to <span> {{clickedUsersNameCommand.user_name}} </span> with the name <span> {{ clickedUsersNameCommand.command_name }} </span> for sure </p>
<button @click="showingDeleteModal = false;deleteUsersNameCommand()" type="button" name="button"> YES </button>
<button @click="showingDeleteModal = false" type="button" name="button"> NO </button>

</div>



  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Page30',
  data () {
    return {
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false,
      //UsersNameCommand: {"id":3,"name":"ngbvb frbf b","command":[{"id":1,"name":"Alpha100"},{"id":4,"name":"Delta"}]},
      // <!-- {"id":3,"name":"ngbvb frbf b","command":[{"id":1,"name":"Alpha100"},{"id":4,"name":"Delta"}]} -->
      // create a table = insert dinnes => CRUD THEM
      usersNameCommand: { user_id:'', user_name:'', command_name:''},
      names:[],
      clickedUsersNameCommand:{}
    }
  },
  mounted:function(){
    console.log('mounted from page 30');
    this.getUsersNameCommand2();
  },
  methods:{
    getUsersNameCommand2:function(){
      axios.get('http://localhost:3007/users/display/').then((response) => {
        console.log('getUsersNameCommand2', response);
        if (response.data.error) {
          app.errorMesssage = response.data.message;
        } else {
          console.log('sucess so', response.data.rows);
          this.names = response.data.rows;
        }
      })
    },
    createUsersNameCommand: function(){
      console.log('function createUsersNameCommand');
      var formData = this.toFormData(this.usersNameCommand);
      axios.post('http://localhost:3007/users/display/', this.usersNameCommand).then((response) => {
        console.log('createUsersNameCommand response is ', response);
        console.log('this.UsersNameCommand', this.usersNameCommand);
        console.log('2- toForm Data', formData);
        this.usersNameCommand = {  user_id:'', user_name:'', command_name:''};
        if (response.data.error) {
          console.log('///////// createUsersNameCommand error ////////////');
          app.errorMessage = response.data.message;
        } else {
          console.log('/// createUsersNameCommand NO ERROR ///');
          console.log('this.UsersNameCommand =', this.usersNameCommand);
          this.getUsersNameCommand2()
        }
      })
    },
    updateUsersNameCommand:function(){
      console.log('==== updateUsersNameCommand ===');
      console.log(this.clickedUsersNameCommand);
      console.log(this.clickedUsersNameCommand.user_id + this.clickedUsersNameCommand.user_name + this.clickedUsersNameCommand.command_name );
      axios.put('http://localhost:3007/users/display/'+ this.clickedUsersNameCommand.user_id, this.clickedUsersNameCommand).then((response) => {
        console.log('updateUsersNameCommand', response);
        this.clickedUsersNameCommand = {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN UPDATE');
          app.sucessMessage = response.data.message;
        }
      })
    },
    deleteUsersNameCommand: function(){
      console.log('=== deleteUsersNameCommand ===');
      axios.delete('http://localhost:3007/users/display/'+ this.clickedUsersNameCommand.user_id).then((response) => {
        this.clickedUsersNameCommand = {};
        if (response.data.error) {
          console.log('ERROR IN DELETE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN DELETE');
          this.getUsersNameCommand2();
          app.sucessMessage = response.data.message
        }
      })
    },
    selectUsersNameCommand(name){
      this.clickedUsersNameCommand = name;
      console.log('========= on a clicke sur ===========');
      console.log(name);
      console.log(name.user_id);
      console.log(name.user_name);
      console.log(name.command_name);
    },
    toFormData: function(obj){
      var form_data = new FormData();
      for (var key in obj) {
        form_data.append(key, obj[key])
      }
      return form_data;
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
  writing-mode: vertical-lr;
text-orientation: upright;
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
  background: lightpink;
}

.modal#addModal, .modal#editModal, .modal#deleteModal{
  height: 75vh;
  width: 40vw;
  border: 2px solid;
  margin: auto;
  position: fixed;
  top: 0;
  background: rgba(247,208,228,0.3);
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

.modal#deleteModal span{
  color: purple;
  font-weight: 800;
  text-decoration: underline;
}
</style>

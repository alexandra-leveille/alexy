<template>
  <div class="hellow">
    <h1>{{ msg }}</h1>
<p> {{ table }} </p>
<button class="fright addNew" @click="showingAddModal = true"> <i class="fas fa-plus-square"></i>

 </button>

<table class="list">
<tr>
<th> Id <i class="far fa-address-card"></i> </th>
<th> Users - lastname </th>
<th> Users - firstname </th>
<th> Edit </th>
<th> Delete </th>
</tr>

<tr v-for="user in users">
<td> {{user.id}} </td>
<td> {{user.lastname}}  </td>
<td> {{user.firstname}}  </td>
<td> <button @click="showingEditModal = true; selectUser(user)">   <i class="fas fa-pen-nib"></i> </button></td>
<td> <button @click="showingDeleteModal = true; selectUser(user)"> <i class="fas fa-trash"></i>  </button></td>
</tr>

</table>
<!-- //////////////////////////////////////////////////////////////////////////////// -->






<!-- ////////////////////////showingAddModal////////////////////////// -->
<div class="modal" id="addModal" v-if="showingAddModal">
<div class="modalContainer">
<div class="modalHeading"> <p class="fleft">  Add New User </p>
<button class="fright close" @click="showingAddModal = false"> <i class="fas fa-times-circle"></i> </button>
<div class="clear"></div>
</div>
  <div class="modalContent">
    <table class="form">

    <tr>
    <th> Username  - Firstname </th>
    <th> : </th>
    <td> <input type="text" name=""  v-model="newUser.firstname"> </td>
    </tr>

    <tr>
    <th> Username  - Lastname </th>
    <th> : </th>
    <td> <input type="text" name=""  v-model="newUser.lastname"> </td>
    </tr>


    <tr>
    <th></th>
    <th> </th>
    <td> <button @click="showingAddModal = false; createUser()"> Save </button> </td>
    </tr>

  </table> </div>
</div>
</div>
<!-- //////////////////////////////////////////////////////////////////////////////// -->

<!-- //////////////////////////showingEditModal////////////////////////////////// -->
<div class="modal" id="editModal" v-if="showingEditModal">
<div class="modalContainer">
<div class="modalHeading"> <p class="fleft">  Edit This User </p>
<button class="fright close" @click="showingEditModal = false"> <i class="far fa-times-circle"></i> </button>
<div class="clear"></div>
</div>
  <div class="modalContent">
    <table class="form">

    <tr>
    <th> Username  - lastname </th>
    <th> : </th>
    <td> <input type="text" name="" v-model="clickedUser.lastname"> </td>
    </tr>

    <tr>
    <th> Username  - firstname </th>
    <th> : </th>
    <td> <input type="text" name="" v-model="clickedUser.firstname"> </td>
    </tr>


    <tr>
    <th></th>
    <th> </th>
    <td> <button @click="showingEditModal = false; updateUser();"> Update </button> </td>
    </tr>

  </table> </div>
</div>
</div>
<!-- //////////////////////////////////////////////////////////////////////////////// -->

<!-- ///////////////////////////showingDeleteModal////////////////////////// -->
<div class="modal" id="deleteModal" v-if="showingDeleteModal">
<div class="modalContainer">
<div class="modalHeading"> <p class="fleft">  Are you really sure you want to DELETE {{ clickedUser.username }}  </p>
<button class="fright close" @click="showingDeleteModal = false"> <i class="far fa-times-circle"></i> </button>
<div class="clear"></div>
</div>
  <div class="modalContent">
    <p> You are going to delete ......  </p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button @click="showingDeleteModal = false; deleteUser()"> Yes </button>
    <button @click="showingDeleteModal = false"> No </button>
     </div>
</div>
</div>
<!-- //////////////////////////////////////////////////////////////////////////////// -->

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false,
      table : 'table of Users',
      msg: 'Welcome on FulFILL',
      users:[],
      newUser: {firstname:'', lastname:''},
      clickedUser:{}
    }
  },
  mounted:function(){
    console.log("mounted for now");
    this.getUsers();
    console.log('=====================ligne 145========================');
  },
  methods:{
    getUsers:function(){
      // comment faire la difference entre laction get post or ...
      axios.get('http://localhost:3007/users/').then((response) => {
        console.log('get Users',response);
        if (response.data.error){
          console.log('error');
          app.errorMessage = response.data.message;
        } else {
          //console.log('APP USERS',this);
          console.log('NO ERROR SO APP USERS CORRESPONDS TO',this.users);
          this.users = response.data.rows;
          console.log('sucess', response.data.rows);
          console.log('======================ligne 160=====================');
        }
      })
    },
    // saveUser: function(){
    createUser: function(){
      console.log('we are in createUser');

      var formData = this.toFormData(this.newUser);
      //console.log('formData voici',formData);
      // on a besoin de passer l'argument en deuxieme parametre
      axios.post('http://localhost:3007/users/', this.newUser).then((response) => {
      console.log(' 1- saveUser', response);
      console.log(' 2 - formData II',formData);
      console.log(' 3 - this.newUser LIGNE 173', this.newUser);
      this.newUser = {firstname:'', lastname:''};
        if (response.data.error) {
          console.log('/// error yes ///');
          app.errorMessage = response.data.message;
        } else {
          console.log('/// error nope tout est OK ///');
          this.getUsers();
        }
      })
    },
    deleteUser: function(){
      console.log('///////// deleteUser ////////////');
      console.log('from delete thisclickedUser',this.clickedUser);
      axios.delete('http://localhost:3007/users/'+ this.clickedUser.id).then((response) => {
        console.log('from delete response ',response);
        this.clickedUser = {};
        if (response.data.error) {
          console.log('ERROR IN DELETE');
            app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN DELETE');
          this.getUsers();
          app.sucessMessage = response.data.message
        }
      })
    },
    updateUser: function(){
      // dans un put en axios on a besoin d'envoyer un deuxieme argument en para
      console.log('///////// updateUser ////////////');
      console.log('from update this.clicked',this.clickedUser);
      console.log('from update this.clicked.id',this.clickedUser.id);
      console.log('this.clickedUser.firstname',this.clickedUser.firstname);
      console.log('this.clickedUser.lastname',this.clickedUser.lastname);
      axios.put('http://localhost:3007/users/'+ this.clickedUser.id, this.clickedUser).then((response) => {
        console.log('from update response', response);
          this.clickedUser =  {};
        if (response.data.error) {
          console.log('ERROR IN UPDATE');
          app.errorMessage = response.data.message;
        } else {
          console.log('NO ERROR IN UPDATE');
          //this.getUsers();
          app.sucessMessage = response.data.message;
        }
      })
    },
    selectUser(user){
      this.clickedUser = user;
      console.log('///////// selectUser ////////////');
      console.log('on est clicke dessus', user);
      console.log('user id', user.id);
      console.log('user last', user.firstname);
      console.log('user first', user.lastname);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.modal{
  background: rgba(0,0,0,0.4);
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0
}

.modalContainer{
  width: 40vw;
  background: purple;
  margin: auto;
  margin-top: 44px;
  border: 2px solid;
}


.modalHeading{
  padding:6px;
  background: grey;
  color: white;
}

.modalContent{
  min-height: 333px;
  padding: 44px;
}

table.list{
  width: 100%;
  margin-top: 33px;
}

table.list th{
  background: orangered;
  color: whitesmoke;
}

table.list td{
  padding:9px;
  background: lime;
  text-align: center;
}



table.form input, table.form td{
  padding:5px;
  width: 9vw;
}

table.form input{
  width: 9vw;
  border: none;
  border-bottom: 2px solid;
}

.fa-plus-square, .fa-times-circle{
  border: 2px solid;
  font-size: 4vw;
  color: deeppink;
}

button.fa-plus-square, button.fa-times-circle{
  background: none;
}

button .fa-pen-nib, button .fa-trash{
  height: 9vh;
  width: 8vh;
  border-radius: 50%;
  background: none;
  border: 2px solid;
  line-height: 9vh
}

.fa-pen-nib, .fa-trash{
  font-size: 30px;
  color: deeppink;
}



</style>

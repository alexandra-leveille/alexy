<template lang="html">
  <div class="page20">
  <h1> Page 20 </h1>


  <button class="map" type="button" name="button" @click="showingAddModal= true"> <i class="fas fa-map-marked-alt"></i></button>
  <table class="table">
    <thead>
      <tr>
        <th scope="col"># id </th>
        <th scope="col">name</th>
        <th scope="col">lieux</th>
        <th scope="col"> Edit </th>
        <th scope="col"> Erase </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cmd in command">
        <td> {{cmd.id}} </td>
        <td> {{cmd.name}} </td>
        <td> {{cmd.lieux}} </td>
        <td> <i class="fas fa-eraser"  @click="showingEditModal = true; selectCmd(cmd)"></i></td>
        <td> <i class="far fa-trash-alt" @click="showingDeleteModal = true; selectCmd(cmd)"></i> </td>
      </tr>

    </tbody>
  </table>
  <!-- ////////////////////////showingAddModal////////////////////////// -->

<div class="modal" id="addModal" v-if="showingAddModal">
  <p> Adding a New Command </p>
 <button @click="showingAddModal= false" type="button" name="button" class="close"> <i class="fas fa-times"></i></button>
<table class="form">


<tr>
  <th> Command name </th>
  <td> <input type="text" name="" value="" v-model="newCommand.name"> </td>
</tr>

<tr>
  <th> Command lieux </th>
  <td> <input type="text" name="" value="" v-model="newCommand.lieux"> </td>
</tr>

<tr>
  <td> <button @click="showingAddModal = false; createCommand()" type="button" name="button"> Save </button> </td>
</tr>
</table>
</div>

<!-- ////////////////////////editModal////////////////////////// -->




<!-- ///////////////////////deleteMODAL////////////////////////// -->
<div class="deleteModal" v-if="showingDeleteModal">
  <button @click="showingDeleteModal= false" type="button" name="button" class="close"> <i class="fas fa-times"></i></button>
<p> Are you sure you want to delete you command </p>
<button type="button" name="button" @click="showingDeleteModal = false; deleteCommand()"> Yes </button>
<button type="button" name="button" @click="showingDeleteModal = false"> No </button>
</div>



<!-- ///////////////////////END////////////////////////// -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Page20',
  data (){
    return {
    showingAddModal:false,
    showingDeleteModal:false,
    command:[],
    newCommand: {name:'', lieux:''},
    clickedCmd:{}
    }
  },
  mounted: function(){
    console.log("mounted for now");
    this.getCommand();
    console.log('=====================ligne 81==========================');
  },
  methods: {
  getCommand: function(){
    axios.get('http://localhost:3007/command/').then((response) => {
      console.log('get Command', response);
      if (response.data.error) {
        console.log('error');
      } else {
        console.log('NO ERROR SO APP COMMAND IS', this.command);
        this.command = response.data.rows;
        console.log('ligne 91 sucess', response.data.rows);
      }

    })
  },
createCommand: function(){
  console.log('we are in createCommand');
  axios.post('http://localhost:3007/command/', this.newCommand).then((response) => {
    console.log('1 - showCommand', response);
    this.newCommand = {name:'', lieux:''};
    if (response.data.error) {
      console.log('/// createCommand error /// ');
    } else {
      console.log('/// createCommand NOerror ///');
      this.getCommand();
    }
  })
},
selectCmd(cmd){
  this.clickedCmd = cmd;
  console.log('cmd.id',cmd.id);
  console.log('cmd.name',cmd.name);
  console.log('cmd.lieux',cmd.lieux);
},
deleteCommand:function(){
  console.log('/////// deleteCommand ///// ');
  axios.delete('http://localhost:3007/command/'+ this.clickedCmd.id).then((response) => {
    console.log('delete response', response);
    this.clickedCmd = {};
    if (response.data.error) {
      console.log('Error in Delete');
      app.errorMessage = response.data.message;
    } else {
      console.log('NO ERROR IN DELETE');
      this.getCommand();
      app.sucessMessage = response.data.message;
    }
  })
}
}
}
</script>

<style lang="css">

table.table{
border: 2px solid;
width: 60vw;
height: auto;
margin: auto;
}

table thead{
  background: cornflowerblue;
}
table thead tr th{
  color: whitesmoke
}

.fa-map-marked-alt{
  font-size: 30px;
}
button.map{
  border: none;
  height: 6vh;
  width: 10vw;
  float: right;
}

#addModal{
  height: 25vh;
  width: 35vw;;
  border: 2px solid;
  margin: auto;
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  background: cornflowerblue;

}

#addModal button.close{
  float: right;
margin-top: 0;
border: none;
margin-top: 100px;
background: red;
margin: 0;
margin-top: -56px;
}

#addModal table.form{
  margin: auto;
}
</style>

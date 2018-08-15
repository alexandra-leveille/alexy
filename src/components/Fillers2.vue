<template lang="html">
<div class="fillers2">
<h1> Page Fillers </h1>
<p> This page is filtered by fillers Id only and changes according to logged fillers </p>

<p> In order for it to work you need : </p>
<ol>
  <li> Have all the fillers gathered axios connect </li>
  <li> Create models and users that will filter by id </li>
</ol>

<h2> Here is the logged In {{ ranges }}</h2>
<h3 v-for="range in ranges">
<p> Your are currently logged as Filler number <span> {{range.id}} </span> </p>
<p> Your lastname is  <span> {{range.lastname }} </span> </p>
<p> Your firstname is <span>  {{range.firstname }} </span> </p>

<p> Here is the table summary of <span> {{range.firstname}} </span> AKA filler Number <span> {{range.id}} </span> </p>
</h3>



<table class="list">
  <tr>
    <th> ID </th>
    <th> Last Name </th>
    <th> First Name </th>
  </tr>

  <tr v-for="range in ranges">
    <td> {{ range.id }}</td>
    <td> {{ range.lastname }} </td>
    <td> {{ range.firstname}} </td>
  </tr>
</table>











</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Filers2',
  data () {
    return {
      ranges: []
    }
  },
  mounted: function (){
    console.log('mounted au mounted');
    this.getFillerById();
  },
  methods: {
    getFillerById:function(id){
      axios.get('http://localhost:3007/fillers/'+ sessionStorage.filler).then((response) => {
        if (response.data.error) {
          console.log('error fillerbyId');
        } else {
          console.log('SUCESS SO', response.data.rows);
           console.log(response.data.rows);
          this.ranges = response.data.rows;
          console.log('filler id is', this.ranges[0].id);
          console.log('filler lastname is', this.ranges[0].lastname);
          console.log('filler firstname id', this.ranges[0].firstname);
        }
      })
    }
  }
}
</script>

<style lang="css">
table.list{
  margin: auto;
}

table.list th{
background: cyan
}
span{
  font-weight: 600;
  color: orangered;
  font-style: italic;
}
</style>

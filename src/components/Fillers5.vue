<template>
  <div class="fill5">
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
      id="map"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
<hr>

<button  @click="showingAddModal = true" type="" name="button">
<i class="fas fa-address-card fa-5x"></i>
</button>

<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="purple" dark>
        <i class="fas fa-bars"></i>
        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>
          <i class="fas fa-search"></i>
      </v-toolbar>

      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :inset="item.inset"
            :key="index"
          ></v-divider>

          <v-list-tile
            v-else
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar class="edit">
                  <i class="fas fa-user-edit fa-0.5x" @click="showingEditModal=true; selectItem(item)"></i>
                  <i class="fas fa-trash-alt fa-0.5x" @click="showingDeleteModal=true; selectItem(item)"></i>
            </v-list-tile-avatar>

            <div class="mix">
                <p class="name">  {{item.name}} </p>
                <p class="type">  {{item.type}}  </p>
            </div>

            <v-list-tile-content class="bloc">
              <p class="skip" v-html="item.title"></p>
              <p class="bold"> {{item.activity}} </p>
              <p> {{item.price}} </p>
              <h6> Disponibilite de la personne : <p class="italic"> {{ item.dispo}} </p> </h6>
            </v-list-tile-content>

          </v-list-tile>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>

<!-- ////////////////////////////////////////////// Add Modal //////////////////////////////////////// -->
<!-- name, type, title, activity, price, dispo -->
<div class="modal" id="addModal" v-if="showingAddModal">
<button class="fright close" @click="showingAddModal = false"> CLOSE </button>
<table class="table">

<label for=""> Firstname </label>
<input type="text" name="" value="" v-model="newItem.name">
<hr>
<label for=""> Type </label>
<input type="text" name="" value="" v-model="newItem.type">
<select  v-model="newItem.type" class="" name="activite">
  <option   value="DIESE"> DIESEL </option>
  <option   value="Essence SP 98"> Essence SP 98 </option>
  <option   value="Essence SP 95"> Essence SP 95 </option>
  <option   value="Carburant GPL"> Carburant GPL </option>
</select>

<hr>
<label for=""> title-date </label>
<input type="date" name="" value="" v-model="newItem.title">
<hr>
<label for=""> activite </label>
<input type="text" name="" value="" v-model="newItem.activity">
<select v-model="newItem.activity" class="" name="activite">
  <option value="Faire le  Plein"> Faire le  Plein </option>
  <option value="Faire le 1/2"> Faire le 1/2 </option>
  <option value="Faire le 1/4"> Faire le 1/4 </option>
</select>

<hr>
<label for=""> Prix </label>

<input type="text" name="" value="" v-model="newItem.price">
<input type="range" name="points" min="0" max="300" v-model="newItem.price">

<hr>
<label for=""> disponibilite </label>
<input type="text" name="" value="" v-model="newItem.dispo">
 <select v-model="newItem.dispo" name="">
  <option value="YES"> YES </option>
  <option value="NO"> NO </option>
</select>
<hr>

</table>
<button @click="showingAddModal = false; createItem()" type="button" name="button"> CREER </button>
</div>

<!-- ////////////////////////////////////////////// Edit Modal //////////////////////////////////////// -->
<div class="modal" id="editModal" v-if="showingEditModal">
  <button class="fright close" @click="showingEditModal = false"> CLOSE </button>

  <label for=""> Firstname </label>
  <input type="text" name="" value="" v-model="clickedItem.name">
  <hr>
  <label for=""> Type </label>
  <input type="text" name="" value="" v-model="clickedItem.type">
  <select v-model="clickedItem.type" class="" name="activite">
    <option value="DIESEL"> DIESEL </option>
    <option value="Essence SP 98"> Essence SP 98 </option>
    <option value="Essence SP 95"> Essence SP 95 </option>
    <option value="Carburant GPL"> Carburant GPL </option>
  </select>
<hr>




  <hr>
  <label for=""> title-date </label>
  <input type="date" name="" value="" v-model="clickedItem.title">
  <hr>
  <label for=""> activite </label>
  <input v-model="clickedItem.activity" type="text" name="" value="">
  <select v-model="clickedItem.activity" class="" name="activite">
    <option value="Faire le  Plein"> Faire le  Plein </option>
    <option value="Faire le 1/2"> Faire le 1/2 </option>
    <option value="Faire le 1/4"> Faire le 1/4 </option>
  </select>

  <!-- <input type="text" name="" value="" v-model="newItem.activity"> -->
  <hr>
  <label for=""> Prix </label>
  <input type="text" name="" value="" v-model="clickedItem.price">
  <input type="range" name="points" min="0" max="300" v-model="clickedItem.price">

  <hr>
  <label for=""> disponibilite </label>
  <input type="text" name="" value="" v-model="clickedItem.dispo">
   <select v-model="clickedItem.dispo" class="" name="">
    <option value="YES"> YES </option>
    <option value="NO"> NO </option>
  </select>
  <hr>

  <hr>
  <button type="button" name="button" @click="showingEditModal = false; updateItem()"> UPDATE USER </button>
</div>

<!-- ////////////////////////////////////////////// Delete Modal //////////////////////////////////////// -->

<div class="modal" id="deleteModal" v-if="showingDeleteModal">
  <button class="fright close" @click="showingDeleteModal = false"> CLOSE </button>

<p> Are you sure that you want to delete this item </p>
<p> Attention, you are about to delete the command number {{this.clickedItem.id}}, which cost {{
  this.clickedItem.price}} </p>

<button  @click="showingDeleteModal = false; deleteItem()" type="button" name="button"> YES </button>
<button  @click="showingDeleteModal = false" type="button" name="button"> NO </button>


</div>


<!-- //////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      items: [ ],
      newItem:{name:'', type:'', title:'', activity:'', price:'', dispo:''},
      clickedItem:{},
      showingAddModal:false,
      showingEditModal:false,
      showingDeleteModal:false
    };
  },

  mounted() {
    this.geolocate();
    console.log('======== we are mounted at this time ============');
    this.getItems();
  },

  methods: {
getItems: function(){
  axios.get('http://localhost:3007/items/').then((response) => {
    console.log('getItems', response);
    if (response.data.error) {
      console.log('ERROR getItems');
      app.errorMessage = response.data.message;
    } else {
      console.log('NO ERROR', this.items);
      this.items = response.data.rows;
      console.log('================ ligne 123 ===============');
    }
  })
},
createItem: function() {
console.log('we are create Item');
axios.post('http://localhost:3007/items/', this.newItem).then((response) => {
  this.newItem = {name:'', type:'', title:'', activity:'', price:'', dispo:''};
  if (response.data.error) {
    console.log('error createItem');
    app.errorMessage = response.data.message;
  } else {
    console.log('NO error createItem');
    this.getItems();
  }
})
},
updateItem: function() {
  console.log(this.clickedItem);
  console.log(this.clickedItem.id);
  console.log(this.clickedItem.title);
    console.log(this.clickedItem.name);
    axios.put('http://localhost:3007/items/'+ this.clickedItem.id, this.clickedItem).then((response) => {
      console.log('from update', response);
      this.clickedItem = {};
      if (response.data.error) {
        console.log('ERROR IN UPDATE');
        app.errorMessage = response.data.message;
      } else {
        console.log('log this.clickedItem', this.clickedItem);
        console.log('log this.clickedItem.title', this.clickedItem.title);
        console.log('log this.clickedItem.name',this.clickedItem.name);
        console.log('NO ERROR IN UPDATE');
        app.sucessMessage = response.data.message;
      }
    })
},
deleteItem: function () {
  console.log('we do delete');
  console.log(this.clickedItem);
  axios.delete('http://localhost:3007/items/'+ this.clickedItem.id).then((response) => {
    console.log('delete from response', response);
    this.clickedItem = {};
    if (response.data.error) {
      console.log('ERROR IN DELETE');
      app.errorMessage = response.data.message;
    } else {
      console.log('NO ERROR IN DELETE');
      this.getItems();
      app.sucessMessage = response.data.message;
    }
  })
},
selectItem(item){
  this.clickedItem = item;
  console.log('////////selectItem//////');
  console.log('on a CLICKE SUR :', item);
},
// receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>


<style lang="css">

p.name{
  color: black;
  text-align: left;
  font-size: 0.9vw;
  font-weight: 600;
  margin-bottom:0

}
p.type{
  font-size: 0.80vw;
  font-weight: 100;
  text-align: left;

}
.bold{
  font-size: 0.80vw;
  font-weight: 100;
}
.bloc{
  color: black;
  text-align: left;
  font-size: 0.9vw;
  font-weight: 600;
  margin-left: 2vw;
}
.bloc p{
  margin-bottom:0
}
.mix{
position: relative;
}
.italic{
  font-style: italic;
}
p.skip{
  margin-bottom: 0.20vh;
}

.modal#addModal, .modal#deleteModal, .modal#editModal{
  height: 55vh;
  width: 25vw;
  border: 2px solid black;
  margin: auto;
  position: absolute;
  top:850px;
  right: 0;

}

.modal label{
  color: orangered;
}

.modal input{
  width: 10vw;
  border-bottom: 2px solid purple
}
.modal select{
  background: pink;
}

.modal option{
  background: yellow;
}

.modal button{
  border: 2px solid purple;
}
table.table{
  display: flex;
  justify-content: center;
  align-items:flex-start;
  flex-direction: column;
  padding: 1vh
}
</style>

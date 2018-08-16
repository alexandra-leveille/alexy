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
<label for=""> Firstname </label>
<input type="text" name="" value="" v-model="newItem.name">
<hr>
<label for=""> Type </label>
<!-- <input type="text" name="" value="" v-model="newItem.type"> -->
<select  class="" name="activite">
  <option  v-model="newItem.type" value="full"> DIESEL </option>
  <option  v-model="newItem.type" value="half"> Essence SP 98 </option>
  <option  v-model="newItem.type" value="quarter"> Essence SP 95 </option>
  <option  v-model="newItem.type" value="quarter"> Carburant GPL </option>
</select>

<hr>
<label for=""> title-date </label>
<input type="text" name="" value="" v-model="newItem.title">
<hr>
<label for=""> activite </label>
<select  class="" name="activite">
  <option  v-model="newItem.activity" value="full"> Faire le  Plein </option>
  <option  v-model="newItem.activity" value="half"> Faire le 1/2 </option>
  <option  v-model="newItem.activity" value="quarter"> Faire le 1/4 </option>
</select>

<!-- <input type="text" name="" value="" v-model="newItem.activity"> -->
<hr>
<label for=""> Prix </label>
<input type="text" name="" value="" v-model="newItem.price">
<hr>
<label for=""> disponibilite </label>
<input type="text" name="" value="" v-model="newItem.dispo">
<hr>
<button @click="showingAddModal = false; createItem()" type="button" name="button"> CREER </button>
</div>



<!-- ////////////////////////////////////////////// Edit Modal //////////////////////////////////////// -->
<div class="modal" id="editModal" v-if="showingEditModal">
  <button class="fright close" @click="showingEditModal = false"> CLOSE </button>

  <label for=""> Firstname </label>
  <input type="text" name="" value="" v-model="clickedItem.name">
  <hr>
  <label for=""> Type </label>
  <!-- <input type="text" name="" value="" v-model="newItem.type"> -->
  <select  class="" name="activite">
    <option  v-model="clickedItem.type" value="full"> DIESEL </option>
    <option  v-model="clickedItem.type" value="half"> Essence SP 98 </option>
    <option  v-model="clickedItem.type" value="quarter"> Essence SP 95 </option>
    <option  v-model="clickedItem.type" value="quarter"> Carburant GPL </option>
  </select>

  <hr>
  <label for=""> title-date </label>
  <input type="text" name="" value="" v-model="clickedItem.title">
  <hr>
  <label for=""> activite </label>
  <select  class="" name="activite">
    <option  v-model="clickedItem.activity" value="full"> Faire le  Plein </option>
    <option  v-model="clickedItem.activity" value="half"> Faire le 1/2 </option>
    <option  v-model="clickedItem.activity" value="quarter"> Faire le 1/4 </option>
  </select>

  <!-- <input type="text" name="" value="" v-model="newItem.activity"> -->
  <hr>
  <label for=""> Prix </label>
  <input type="text" name="" value="" v-model="clickedItem.price">
  <hr>
  <label for=""> disponibilite </label>
  <input type="text" name="" value="" v-model="clickedItem.dispo">
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
createItem: function(){
console.log('we are create Item');
axios.post('http://localhost:3007/items/',this.newItem).then((response) => {
  this.item = {name:'', type:'', title:'', activity:'', price:'', dispo:''};
  if (response.data.error) {
    console.log('error createItem');
    app.errorMessage = response.data.message;
  } else {
    console.log('NO error createItem');
    this.getItems();
  }
})
},
updateItem: function(){
  // console.log('//////// updateitem ////////////');
  // console.log(this.clickedItem);
  // console.log('this.clickedItem.ID:', this.clickedItem.id);
  // console.log('this.clickedItem.Name:', this.clickedItem.name);
  // console.log('this.clickedItem.type:', this.clickedItem.type);
  // console.log('this.clickedItem.title:', this.clickedItem.title);
  // console.log('this.clickedItem.activity:', this.clickedItem.activity);
  // console.log('this.clickedItem.price:', this.clickedItem.price);
  // console.log('this.clickedItem.dispo:', this.clickedItem.dispo);
  // axios.put('http://localhost:3007/items/'+ this.clickedItem.id, this.clickedItem).then((response) => {
  //   console.log('from update', response);
  //   this.clickedItem = {};
  //   if (response.data.error) {
  //     console.log('ERROR IN UPDATE');
  //     app.errorMessage = response.data.message;
  //   } else {
  //     console.log('NO ERROR IN UPDATE no response');
  //     app.sucessMessage = response.data.message;
  //   }
  // })
  console.log('PROMOTION');
},
deleteItem: function (){
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
updateItem: function(){

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
#map{
  border:2px solid purple;
}
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
  height: 70vh;
  width: 25vw;
  border: 2px solid black;
  margin: auto;
  position: absolute;
  top:850px;;
  right: 0;
}

</style>

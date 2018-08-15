<template lang="html">
  <div>
    <div>
      <h2> Search for your pick up place </h2>
      <label>
<gmap-autocomplete
@place_changed="setPlace">
</gmap-autocomplete>
<button @click="addMarker" type="button" name="button"> -Add- </button>
      </label>
      <br/>
    </div>

  <br>

  <gmap-map
:center="center"
:zoom="12"
style="width:100%; height:400px"
  >

<gmap-marker
:key="index"
v-for="(m, index) in markers"
:position="m.position"
@click="center=m.position"
:clickable="true"
:draggable="true"
></gmap-marker>
</gmap-map>
    </div>
</template>

<script>
export default {
  name:'GoogleMap',
  data(){
    return {
    center: {lat:48.858093, lng:2.294694},
    markers:[],
    places:[],
    currentPlace:null
  };
},
mounted(){
  console.log('this map mounted');
  this.geolocate();
},
methods: {
  setPlace(place){
    this.currentPlace = place;
  },
  addMarker(){
    if (this.currentPlace) {
      const marker = {
      lat: this.currentPlace.geometry.location.lat(),
      lng: this.currentPlace.geometry.location.lng()
    };
    this.markers.push({ position:marker });
    this.places.push(this.currentPlace);
    this.center = marker;
    this.currentPlace = null;
  }
},
geolocate: function(){
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
</style>

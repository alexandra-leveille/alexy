<template lang="html">
  <div class="global">
    <div>
      <h2> Localisez </h2>
      <br/>
      <!-- <label class="label">
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label> -->

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
<div class="center">
 <section class="box">

<img src="../assets/localize.png" alt="">
 </section>
</div>

<div class="bottom">
<p> Decriver votre situation </p>
<label for=""> Je me trouve : </label>
<input type="text" name="" value="" v-model="trouve">
<p> mon emplacement se trouve : {{trouve}}</p>
<br>
<label for=""> Rue :  </label>
  <gmap-autocomplete
    @place_changed="setPlace">
  </gmap-autocomplete>
  <button @click="addMarker">Connect</button>
</div>


  </div>
</template>

<script>
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
      trouve: ''
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
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

<style>
label.label{
  position:absolute;
  left: 20px;
  z-index: 1;
  margin-top: 90px;
}

#map{
  border: 2px solid purple;
}

.center{
  height: 40vh;
  width: auto;
  border: 2px solid lime;
  display: flex;
  justify-content: center;
  align-items: center;
}
section.box{
  width: auto;
  height: 30vh;
  border: 2px solid yellow;
  margin: auto;
  vertical-align: center;
}

section.box img{
  max-width: 100%;
  height: 30vh;
}
.bottom{
  height: 40vh;
  width: auto;
  border: 2px solid orange;
}
</style>

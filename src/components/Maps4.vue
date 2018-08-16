<template>
<div class="classik">



  <!-- <gmap-map
    :center="center"
    :zoom="12"
    style="width:100%;  height: 400px;"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map> -->

  <template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 2" :key="`6${i}`" xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card dark color="secondary">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 6" :key="`2${i}`" xs2>
          <v-card dark color="primary">
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 12" :key="`1${i}`" xs1>
          <v-card dark color="secondary">
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>



  <v-container fluid class="table">
    <v-layout row>
      <v-flex xs2 order-lg2>
        <v-card dark tile flat style="background:pink">
          <v-card-text style="font-size:1.5vw; font-weight:600"> Diesel </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat  >
          <v-card-text style="color:lightgrey"> Quart </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat >
          <v-card-text style="color:lightgrey"> Moitie </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text style="color:lightgrey"> Plein </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <hr>
    <v-layout row>
      <v-flex xs3 order-lg2>
        <v-card dark tile flat style="background:pink">
          <v-card-text style="font-size:1.5vw; font-weight:600"> Essence SP 98 </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text style="color:lightgrey"> Quart </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text style="color:lightgrey"> Moitie </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text style="color:lightgrey"> Plein </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  <hr>
    <v-layout row>
      <v-flex xs3 order-lg2>
        <v-card dark tile flat style="background:pink">
          <v-card-text style="font-size:1.5vw; font-weight:600"> Essence SP 95 </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text style="color:orange;"> Moitie </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-m2 order-xs1>
        <v-card dark tile flat >
          <v-card-text> Quart </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat >
          <v-card-text> Plein </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  <hr>
    <v-layout row>
      <v-flex xs3 order-lg2>
        <v-card dark tile flat style="background:pink">
          <v-card-text style="font-size:1.5vw; font-weight:600"> CarburantGPL </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat >
          <v-card-text style="color:lightgrey"> Quart </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat>
          <v-card-text style="color:lightgrey"> Moitie </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 order-md2 order-xs1>
        <v-card dark tile flat >
          <v-card-text style="color:lightgrey"> Plein </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  <hr>
  </v-container>
  <button type="button" name="button"> Connection </button>
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
      currentPlace: null
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

<style media="screen">
  .table{
    border: 2px solid red;
      font-size: 1.5vw;
  }
  .v-card__text {
    padding: 16px;
    width: 100%;
    height: 1.5vh;
}
#map{
  border: 2px solid purple;
}
</style>

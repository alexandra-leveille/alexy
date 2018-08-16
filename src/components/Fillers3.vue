<template lang="html">
<div class="fill3">
  <h2> Tableau recapitulatif des differente courses </h2>
  <ol>
    <li> Vuetify</li>
    <li> Create a table en back new or from fillers </li>
    <li> fillers id - Vehicule type - date - qty - prix - disponibilite  </li>
    <li> Axios select </li>
  </ol>



  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
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
              <v-list-tile-avatar>
                <img :src="item.avatar"/>
              </v-list-tile-avatar>

              <div class="mix">
                  <p class="name">  {{item.name}} </p>
                  <p class="type">  {{item.type}} </p>
              </div>

              <v-list-tile-content class="bloc">
                <p class="skip" v-html="item.title"></p>
                <p class="bold"> {{item.activity}} </p>
                <p> {{item.price}} </p>
                <p class="italic"> {{ item.dispo}} </p>
              </v-list-tile-content>

              <div class="mix">
                    <i class="fas fa-arrow-circle-right fa-3x"></i>
              </div>

            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
  export default {
    name:'Fillers3',
    data () {
      return {
        items: [
          { header: 'Listing pour la journee' },
          {
            name: 'Alphonse',
            type:'Wolswagen',
            avatar: '../assets/albertino.png',
            title: "lun 04 oct. 2017 <span class='bold'> à 8h </span>",
            subtitle: " ",
            activity: "Faire le plein",
            price:'50€',
            dispo:'Cette personne est disponible'
          },
          { divider: true, inset: true },
          {
            name: 'Bernard',
            type:'Lexus',
            avatar: '../assets/marc.png',
            title: "lun 04 oct. 2017 <span class='bold'> à 12h </span>",
            subtitle: "",
            activity: "Faire la 1/2",
            price:'35€',
            dispo:'Cette personne est disponible'
          },
          { divider: true, inset: true },
          {
            name: 'Celine',
            type:'Mercedes',
            avatar: '../assets/celine.png',
            title: "mer 06 oct. 2017 <span class='bold'> à 10h </span>",
            subtitle: "",
            activity: "Faire la 1/4",
            price:'15€',
            dispo:'Cette personne est disponible'
          },
          { divider: true, inset: true },
          {
            name: 'Daniel',
            type:'Wolswagen',
            avatar: '../assets/logo.png',
            title: "jeu 07 oct. 2017 <span class='bold'> à 11h </span>",
            subtitle: "",
            activity: "Faire la 1/2",
            price:'35€',
            dispo:'Cette personne est disponible'
          },
          { divider: true, inset: true },
          {
            name: 'Etienne',
            type:'Wolswagen',
            avatar: '../assets/benoit.png',
            title: "dim 10 oct. 2017 <span class='bold'> à 14h </span>",
            subtitle: "",
            activity: "Faire le plein",
            price:'55€',
            dispo:'Cette personne est disponible'
          }
        ]
      }
    }
  }
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
</style>

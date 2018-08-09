<template>
  <div id="app">
    <nav class="nav">
      <ul class="list">
        <li class="item"> <router-link  tag="li" to="/Home"> <a> <i class="fas fa-home"></i> </a> </router-link></li>
        <li class="item"> <router-link  tag="li" to="/HelloWorld"> <a> Users </a> </router-link></li>
        <li class="item"> <router-link  tag="li" to="/Page10"> <a> Page10 </a> </router-link></li>
        <li class="item"> <router-link  tag="li" to="/Page20"> <a> Page20 </a> </router-link></li>
        <li class="item"> <router-link  tag="li" to="/Page30"> <a> Page30 </a> </router-link></li>
        <li class="item"> <router-link  tag="li" to="/Page40"> <a> Page40 </a> </router-link></li>
        <li> <a href="#"></a>   </li>
      </ul>
    </nav>

      <p>  <router-link to="/Hello"> <a> - My Vue App - </a> </router-link> </p>
      <p id="nav_collapse">
      <nav class="nav2">
        <ul class="list2">
          <li class="item2"> <router-link to="/Hello">   -Hello- </router-link> </li>
          <li class="item2"> <router-link to="/posts-manager"> -Posts Manager- </router-link> </li>
          <li class="item2" href="#" @click.prevent="login" v-if="!activeUser">Login</li>
          <li class="item2" href="#" @click.prevent="logout" v-else>Logout</li>
          </ul>
        </nav>
      </p>



    <img id="full" src="./assets/fullfill_2_silver.png">
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      activeUser: null
    }
  },
  async created (){
    await this.refreshActiveUser()
  },
  watch:{
    '$route':'refreshActiveUser'
  },
  methods:{
    login(){
      this.$auth.loginRedirect()
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser()
    },
    async logout (){
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#full{
  max-width: 100%;
  height: auto;
}

nav.nav{
  margin-top: -40px;
  margin-bottom: 5%;
  width: 65vw;
  height: 30px;
}
nav ul.list {
  list-style: none;
}
 nav ul li.item2{
   background: yellow;
   display: inline;
   margin-right: 2vw;
 }
nav ul li.item{
  display: block;
  float: left;
  height: auto;
  max-width: auto;
  line-height: 9vh;
  text-align: center;
  margin-right: 1vw;
  border: 2px solid;
}

nav ul li.item a{
  color: black;
  text-decoration: none;
  font-size: 2vw;
  transition: 1s;
}
nav ul li.item a:hover{
  color: silver;
  transition: 1s;
}
</style>

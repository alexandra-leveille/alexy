<template lang="html">
  <div class="front">
<h1> Front </h1>

<img id="enter" src="../assets/pomp.jpeg">

<button id="enter" type="button" name="button"> <router-link to="/Home"> <a> Enter </a> </router-link></button>
  </div>
</template>

<script>
export default {
  name:'Front'
}
</script>

<style lang="css" scoped>
img#enter{
  display: block;
  margin: auto;
  margin-bottom: 5vh;
}

button#enter{
  background: gold;
  height: 5vh;
  width: 16vw;
  margin: auto;
  border: none;
font-family: 'Poppins', sans-serif;
text-decoration: none;
color: black;
font-size: 20px;
}

img#full{
  border: 2px solid cyan;
}

</style>

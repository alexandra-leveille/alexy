<template lang="html">
<div class="hello">
  <h1> Page Hello </h1>
<p clas="lead"> This is the Home page of Vue </p>




</div>
</template>

<script>
export default {
  name:'Hello'
}
</script>

<style lang="css" scoped>
.hello{
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid;
  display: block;
}

.hello .lead{
  font-weight: 200;
  font-size:1.5rem
}




</style>

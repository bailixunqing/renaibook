<template>
<div style="height:100%;width:100%;margin:0 auto;">
  <router-view />
</div>
</template>

<style>
html,
#app {
  min-width:1920px;
  /* overflow-x: hidden; */
  position: relative;
  width: auto;
  height: 100%;
  display: grid;
  grid-template: 0;
  
}
* {
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  name: "App",
  methods: {},
  mounted: function () {},
};
</script>

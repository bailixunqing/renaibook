<template>
<div style="height:100%;">
  <router-view />
</div>
</template>

<style>
html,
#app {
  /* min-width:1920px; */
  /* overflow-x: hidden; */
  height: 100%;
  width: 100%;
  display: grid;
  position: relative;

}
* {
  margin: 0 ;
  padding: 0;
}
</style>
<script>
export default {
  name: "App",
  methods: {},
  mounted: function () {
    window.scrollTo((document.body.scrollWidth-document.body.offsetWidth)/2,0)
  },
};
</script>

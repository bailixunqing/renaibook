<template>
  <router-view />
</template>

<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
   margin: 0;
  padding: 0;
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
  mounted: function () {
    document.body.style.zoom = 0.99;
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("token");
    });
  },
};
</script>

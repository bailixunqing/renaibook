<template>
<div style="height:100%;overflow:hidden ;">
  <router-view />
</div>
</template>

<style>
html,
#app {
  /* min-width:1920px; */
  /* overflow-x:hidden ; */
  height: 100%;
  width: 100%;
  display: grid;
  grid: repeat(0, 100%);
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
  methods: {
     handleScreen(){
        const m = this.detectZoom();
        console.log(m, 'MMMMMMMMMMMMMMM')
        document.body.style.zoom = 98/Number(m);
      },
      detectZoom () {
		      let ratio = 0,
		        screen = window.screen,
		        ua = navigator.userAgent.toLowerCase();
		      if (window.devicePixelRatio !== undefined) {
		        ratio = window.devicePixelRatio;
		      } else if (~ua.indexOf('msie')) {
		        if (screen.deviceXDPI && screen.logicalXDPI) {
		          ratio = screen.deviceXDPI / screen.logicalXDPI;
		        }
		      } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
		        ratio = window.outerWidth / window.innerWidth;
		      }
		      if (ratio) {
		        ratio = Math.round(ratio * 100);
		      }
		      return ratio;
		  }

  },
  mounted: function () {
   this.handleScreen();
  },
};
</script>

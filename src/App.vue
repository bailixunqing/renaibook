<template>
<div style="height:100%;">
  <div v-if="headshow" class="total_head" ><drop-menu /></div>
  
  <router-view :key="$route.fullPath"/>

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
.total_head{
  height:100px;
  width:100%;
  position:absolute;
  z-index: 999;
}

</style>
<script>
import DropMenu from "@/components/common/DropMenu";
export default {
  name: "App",
  components: { DropMenu },
  data()
  {
return {headshow:false}
  },
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
  watch:{
    $route(to,from)
    {
      if(this.$route.path=="/login"||this.$route.path=="/admin")
      {
        this.headshow=false;
      }
      else {
        this.headshow=true
      }
    }
  }
};
</script>

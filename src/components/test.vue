<template>
    <div class="screen">
    <div class="background">

      </div>


    </div>
</template>
<script>
export default {
  name: "test",
  data() {
    let value = "";
    return { value };
  },
  
  watch: {
    value:function(e)
    {

        console.log(e);
    }
  },
  methods: {
    test(e)
    {
        console.log("success");
        console.log(e);
    }
  },

  mounted: function () {},
};
</script>
<style  scoped>
.screen{
  display: flex;
  justify-content: center;
    background-image: linear-gradient(90deg,rgba(0, 47, 255, 0.1) 0,rgba(131, 26, 5, 0.1) 15%,rgba(167, 55, 87, 0.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%);
  width: 100%;
  height:100%;
}
.background{
  /* background-image: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%); */
}
</style>
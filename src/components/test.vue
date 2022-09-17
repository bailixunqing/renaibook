<template>
    <div class="screen">
    <div class="background">
        <img src="../assets/images/index.png" />
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
  background-color: #000;
  width: 100%;
  height:100%;
}
</style>
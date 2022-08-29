<template>
  <TEditor style="height: 400px" @input="test" ref="editor" v-model="value" />
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
</style>
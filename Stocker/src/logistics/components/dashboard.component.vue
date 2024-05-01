<script>
import sidebar2Component from "../../public/components/sidebar.component.vue";

export default {
  name: "dashboard2",
  components:{
    sidebar2: sidebar2Component
  }
}
</script>

<template>
  <div>
    <sidebar2/>
  </div>
</template>

<style scoped>
body{
  height: 100vh;
  width: 100%;
  background-color: darkcyan;
}
</style>
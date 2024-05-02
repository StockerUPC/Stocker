<script>
import hdSectionNotfoundComponent from "../../public/components/hd-section-notfound.component.vue";
export default {
  name: "notfound",
  components:{
    hdSectionNotfound: hdSectionNotfoundComponent
  }
}
</script>

<template>
  <hd-section-notfound/>
  <body>
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
    </div>
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  font-family: inherit;
  font-size: 4rem;
}

</style>
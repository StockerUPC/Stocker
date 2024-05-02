<script>
import sidebarComponent from "../../public/components/sidebar.component.vue";
export default {
  name: "stocker",
  components:{
    sidebar: sidebarComponent
  }
}
</script>

<template>
  <sidebar/>
  <div class="router">
    <router-view/>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.router {
  padding: 10px;
  color: #ffffff;
}
</style>
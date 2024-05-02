<script>
export default {
  name: "hd-section-notfound",
  data(){
    return {
      logoSrc: "logo_white.webp"
    }
  }
}
</script>

<template>
  <header id="landing-header">
    <div class="landing-div">
      <router-link to="/"><img :src="logoSrc" alt="logo" style="height: 25px; width: auto"></router-link>
    </div>
  </header>
</template>

<style scoped>
#landing-header {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 40;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #ffffff;
}
.landing-div{
  margin: 1rem;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
}
.landing-div img{
  height: 6rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 500ms;
}
</style>
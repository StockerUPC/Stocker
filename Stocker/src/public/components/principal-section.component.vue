<script>
export default {
  name: "principal-section.component",
  data() {
    return {
      headerColor: "white",
      videoSrc: "finance.mp4"
    };
  }
}
</script>

<template>
  <section class="landing-section" :data-header-color="headerColor">
    <div class="principal-div">
      <header class="principal-header">
        <h2>Disfrute de Stocker</h2>
        <p>Conozca todo lo que tenemos para ofrecerle.</p>
      </header>

      <footer class="principal-footer">
        <div>
          <pv-button><router-link to="/stocker/dashboard">Pruebe ahora</router-link></pv-button>        </div>
      </footer>
    </div>
    <div class="secondary-div">
      <video autoplay muted :src="videoSrc"></video>
    </div>
  </section>
</template>

<style scoped>
.landing-section{
  overflow: hidden;
  position: relative;
  width: auto;
  height: 100vh;
  text-align: center;
  background-color: #000000;
}
.principal-div{
  display: flex;
  position: relative;
  z-index: 30;
  flex-direction: column;
  height: 100%;

}
.principal-header h2{
  padding-top: 10rem;
  font-size: 4rem;
  line-height: 1;
  font-weight: 500;
  color: #ffffff;
}
.principal-header p{
  font-size: 1.05rem;
  line-height: 1.5rem;
  color: #ffffff;
}
.principal-footer{
  display: flex;
  padding-bottom: 6rem;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}
.principal-footer div{
  color: #ffffff;
}
.principal-footer div a{
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 500ms;
  border: 3px solid white;
}
.principal-footer div a:hover{
  color: #000000;
  background-color: #ffffff;
}
.secondary-div{
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.secondary-div::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
}
.secondary-div video{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
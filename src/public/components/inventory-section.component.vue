<script>
export default {
  name: "inventory-section",
  data() {
    return {
      pageTitle: 'Nuestros Servicios',
      pageDescription: 'Sepa exactamente qué posee en su negocio',
      headerColor: 'white'
    };
  }
}
</script>

<template>
  <section class="landing-section" :data-header-color="headerColor">
    <div class="inventory-div">
      <header>
        <h2>{{ pageTitle }}</h2>
        <p>{{ pageDescription }}</p>
      </header>
      <section class="InformacionGeneral">
        <div class="ContainerIG">
          <p class="texto-prop">
            Descubra cómo Stocker puede transformar la gestión de su inventario y llevar su negocio al siguiente nivel. Experimente la facilidad de uso, la precisión y la potencia de esta solución integral.

            No espere más, contacte con nosotros ahora mismo y dé un paso hacia una gestión de inventario optimizada y eficiente.<br><br>
          </p>

        </div>
      </section>
    </div>

    <div class="inventory-2-div">
      <img src="../../assets/images/almacen.jpg" alt="Model Y"/>
    </div>
  </section>
</template>

<style scoped>
.landing-section {
  overflow: hidden;
  position: relative;
  width: auto;
  height: 100vh;
  text-align: center;
  background-color: #000000;
}
.inventory-div{
  display: flex;
  position: relative;
  z-index: 30;
  flex-direction: column;
  height: 100%;

}
.inventory-div header h2{
  padding-top: 10rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
  color: #ffffff;
}
.inventory-div header p{
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
}
.InformacionGeneral {
  padding: 3rem 0;
}
.inventory-div footer{
  display: flex;
  padding-bottom: 6rem;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}
.inventory-2-div{
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.inventory-2-div::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
}
.inventory-2-div img{
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
.ContainerIG{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(18rem, 1fr));
  grid-gap: 2rem;
}

.texto-prop {

  text-align: center;
  font-family: 'Open Sans',"sans-serif";
  margin: .125rem 2rem;
  padding-bottom: .125rem;
  font-size: 1.5em;
  color: #ffffff;
}
</style>
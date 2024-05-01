<script>
export default {
  name: "stock-section",
  data() {
    return {
      headerColor: "white"
    };
  }
}
</script>

<template>
  <section class="landing-section" :data-header-color="headerColor">
    <div class="stock-div">
      <header>
        <h2>Información General</h2>
        <p>Ingresos y egresos de forma sencilla</p>
      </header>
      <section class="InformacionGeneral">
        <div class="ContainerIG">
          <div class="BoxIG">
            <p class="texto-prop">
              Stocker está diseñado para satisfacer las necesidades de los negocios pequeños, permitiendo el registro y gestión eficiente de clientes, proveedores, inventarios, ventas, compras, ganancias y perfiles comerciales.<br><br>
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="stock-2-div">
      <img src="../../assets/images/stock_graphic.jpeg" alt="Model Y" />
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
.stock-div{
  display: flex;
  position: relative;
  z-index: 30;
  flex-direction: column;
  height: 100%;
}
.stock-div header h2{
  padding-top: 10rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
  color: #ffffff;
}
.stock-div header p{
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
}
.stock-div footer{
  display: flex;
  padding-bottom: 6rem;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}
.stock-2-div{
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.stock-2-div img{
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
.contenedor-propuesta div {
  flex: 1;
  padding: 1rem;
}
.InformacionGeneral {
  padding: 3rem 0;
}
.ContainerIG{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(18rem, 1fr));
  grid-gap: 2rem;
}
.BoxIG{
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.BoxIG h2{
  margin: 2rem 2rem;
  text-align: center;
  padding-bottom: 2rem;
  font-size: 30px;
}
.BoxIG p{

  text-align: center;
  font-family: 'Open Sans',"sans-serif";
  margin: .125rem 2rem;
  padding-bottom: .125rem;
  font-size: 1.5em;
  color: #ffffff;
  backdrop-filter: blur(25px);
}
.texto-prop {
  padding: 1em;
  border-radius: 1em;
  font-family: 'Open Sans',"sans-serif";

}
</style>
<script>
export default {
  name: "client-section",
  data() {
    return {
      pageTitle: 'Nuestra propuesta',
      pageDescription: 'Ingresos y egresos de forma sencilla',
      headerColor: 'white'
    };
  }
}
</script>

<template>
  <section class="landing-section" :data-header-color="headerColor">
    <div class="client-div">
      <header>
        <h2>{{ pageTitle }}</h2>
        <p>{{ pageDescription }}</p>
      </header>
      <section class="InformacionGeneral">
        <div class="ContainerIG">
          <p class="texto-prop">
            Nuestro sistema se centra en ofrecer una solución integral y fácil de usar que apoya el crecimiento y la eficiencia operativa de los pequeños negocios.
          </p>
        </div>
      </section>
    </div>

    <div class="client-2-div">
      <img src="../../assets/images/clients.jpeg" alt="client"/>
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
.client-div{
  display: flex;
  position: relative;
  z-index: 30;
  flex-direction: column;
  height: 100%;
}
.client-div header h2{
  padding-top: 10rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
  color: #ffffff;
}
.client-div header p{
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
}
.client-div footer{
  display: flex;
  padding-bottom: 6rem;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}

.client-2-div{
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.client-2-div::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
}
.client-2-div img{
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
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

.texto-prop {
  text-align: center;
  font-family: 'Open Sans',"sans-serif";
  margin: .125rem 2rem;
  padding-bottom: .125rem;
  font-size: 1.5em;
  color: #ffffff;
}
</style>
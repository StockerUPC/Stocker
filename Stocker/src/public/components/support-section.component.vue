<script>
export default {
  name: "support-section",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      headerColor: 'white'
    };
  },
  methods: {
    submitForm() {
      console.log('Datos del formulario:', this.formData);
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
}
</script>

<template>
  <section class="landing-section" :data-header-color="headerColor">
    <section class="contacto">
      <div class="contenedor">
        <h2 class="titulo">Contáctanos</h2>
        <p class="parrafo">Comunícate con nosotros utilizando el formulario de contacto a continuación.
          Esperamos con ansias escucharte y ayudarte con tus necesidades.</p>
        <form @submit.prevent="submitForm" class="form">
          <input type="text" id="name" v-model="formData.name" required class="input" placeholder="Ingrese Nombre">
          <input type="email" id="email" v-model="formData.email" required class="input" placeholder="Ingrese Email">
          <textarea id="message" v-model="formData.message" required class="input" placeholder="Ingrese Mensaje"></textarea>
          <button type="submit" class="input">Enviar</button>
        </form>
      </div>
    </section>
  </section>
</template>

<style scoped>
.landing-section {
  overflow: hidden;
  position: relative;
  width: auto;
  height: 100vh;
  background: linear-gradient(45deg, #05161A, #072E33, #0C7075, #0F969C, #6DA5C0, #294D61);
  font-family: system-ui, sans-serif;
}
.contacto{
  display: flex;
  position: relative;
  z-index: 30;
  flex-direction: column;
  height: 100%;
}
.contenedor{
  width: 80%;
  max-width: 1000px;
  overflow: hidden;
  margin: auto;
  padding: 0 0 80px 0;
  padding: 80px 0;
}
.titulo {
  font-size: 35px;
  margin-bottom: 20px;
  color: #ffffff;
}
.parrafo{
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #ffffff;
}
.form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input{
  background: #6DA5C0;
  border: 0;
  color: black;
  outline: none;
  padding: 20px 10px;
  border-radius: 5px;
}
.input:hover{
  background: #6290ac;
  transition-duration: .3s;
}
.input::placeholder{
  color: #ffffff;
  font-family: system-ui, sans-serif;
}
input[type="text"],
input[type="email"]{
  display: inline-block;
  width: 49%;
  margin-bottom: 30px;

}
.form textarea{
  width: 100%;
  height: 250px;
  margin-bottom: 15px;
}
.form button{
  text-align: center;
  padding: 14px 0;
  width: 120px;
  height: 60px;
  border: none;
  background: #1f4f8a;
  color: #ffffff;
}
.form button:hover{
  background: #3374bf;
}
</style>
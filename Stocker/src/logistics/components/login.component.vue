<script>
import hdSectionLoginComponent from '../../public/components/hd-section-login.component.vue';
export default {
  name: 'login',
  components: {
    hdSectionLogin: hdSectionLoginComponent
  },
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: ''
      },
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register() {
      console.log('Registrando usuario:', this.registerForm);

    },
    login() {
      console.log('Iniciando sesión con:', this.loginForm);
    }
  }
}
</script>

<template>
  <hd-section-login/>
  <body>
  <div class="main">
    <input type="checkbox" id="chk" aria-hidden="true">
    <div class="signUp">
      <form @submit.prevent="register">
        <label for="chk" aria-hidden="true">Sign Up</label>
        <input type="text" v-model="registerForm.name" placeholder="Nombre" required/>
        <input type="email" v-model="registerForm.email" placeholder="Correo electrónico" required/>
        <input type="password" v-model="registerForm.password" placeholder="Contraseña" required/>
        <button type="submit">Registrarse</button>
      </form>
    </div>
    <div class="signIn">
      <form @submit.prevent="login">
        <label for="chk" aria-hidden="true">Login</label>
        <input type="email" v-model="loginForm.email" placeholder="Correo electrónico" required/>
        <input type="password" v-model="loginForm.password" placeholder="Contraseña" required>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
  </body>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: linear-gradient(to top, #05161A, #072E33, #0C7075, #0F969C, #6DA5C0, #294D61);
}
.main{
  width: 350px;
  height: 500px;
  background: #1C3A52;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}
#chk{
  display: none;
}
.signUp{
  position:relative;
  width: 100%;
  height: 100%;
}
label{
  color: #fff;
  font-size: 2.3em;
  justify-content:center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}
input{
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content:center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button{
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #1f4f8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: .2s ease-in;
  cursor: pointer;
}
button:hover{
  background: #3374bf;
}
.signIn{
  height: 460px;
  background: #eee;
  border-radius: 60%/10%;
  transform: translateY(-180px);
  transition: .8s ease-in-out;
}
.signIn label{
  color: #1c354a;
  transform: scale(.6);
}
#chk:checked ~ .signIn{
  transform: translateY(-500px);
}
#chk:checked ~ .signIn label{
  transform: scale(1);
}
#chk:checked ~ .signUp label{
  transform: scale(.6);
}
</style>
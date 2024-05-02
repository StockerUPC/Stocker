<script>
export default {
  name: "ft-section",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<template>
  <section class="landing-section">
    <section class="footer">
      <div class="footer-container">
        <small>
          Copyright &copy; {{ currentYear }} - Stocker<br>
          Todos los derechos reservados
        </small>
      </div>
    </section>
  </section>
</template>

<style scoped>
.landing-section {
  overflow: hidden;
  position: relative;
  font-family: system-ui, sans-serif;
}
.footer {
  background-color: #072E33;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  padding: 30px;
  text-align: center;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}
small {
  font-size: 15px;
}
</style>
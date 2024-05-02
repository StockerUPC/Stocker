<script>
export default {
  name: "hd-section",
  data() {
    return {
      logoSrc: "logo_white.webp",
      products: [
        { name: 'Nuestra Propuesta', link: '/'},
        { name: 'Información General', link: '/' },
        { name: 'Nuestros Servicios', link: '/' },

      ],
      navigationOptions: [
        { name: 'Cuenta', link: '/login' },
      ],
      backdropStyle: {
        position: 'absolute',
        backgroundColor: '#205265',
        borderRadius: '0.25rem',
        transitionProperty: 'all',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        opacity: 0,
        zIndex: -10,
        left: '0px',
        top: '0px',
        width: '0px',
        height: '0px'
      }
    }
  },
  mounted() {
    const listItem = document.querySelectorAll("#landing-header li");
    const menuBackDrop = document.querySelector("#menu-backdrop");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        this.backdropStyle.left = `${left}px`;
        this.backdropStyle.top = `${top}px`;
        this.backdropStyle.width = `${width}px`;
        this.backdropStyle.height = `${height}px`;
        this.backdropStyle.opacity = 1;
      });

      item.addEventListener("mouseleave", () => {
        this.backdropStyle.opacity = 0;
      });
    });

    const $header = document.querySelector("#landing-header");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          $header.style.color = color;
        }
      });
    }, observerOptions);

    const $sections = document.querySelectorAll(".landing-section");
    $sections.forEach((section) => observer.observe(section));
  }
}
</script>

<template>
  <header id="landing-header">
    <div class="landing-div">
      <router-link to="/"><pv-button><img :src="logoSrc" alt="logo" style="height: 25px; width: auto"></pv-button></router-link>
    </div>

    <nav class="landing-nav-2">
      <ul>
        <li v-for="(option, index) in navigationOptions" :key="index">
          <router-link :to="option.link">
            <i class="pi pi-sign-in"></i>
            <a>Iniciar Sesión</a>
          </router-link>
        </li>
      </ul>
    </nav>
    <nav id="menu-backdrop" :style="backdropStyle"></nav>
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
  height: 100px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 500ms;
}
.landing-nav ul {
  transition-property: color;
  transition-duration: 0.5s;
  display: flex;
  font-size: 0.875rem;
}
.landing-nav ul li {
  display: inline-block;
}
.landing-nav ul li a {
  color: currentColor;
  padding: 0.5rem 1rem;
}
.landing-nav-2{
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  justify-content: flex-end;
}
.landing-nav-2 ul {
  display: flex;
  font-size: 0.875rem;
}
.landing-nav-2 ul li {
  display: inline-block;
}
.landing-nav-2 ul li a {
  color: currentColor;
  padding: 0.5rem 0.5rem;
  transition-property: color;
  transition-duration: 0.5s;
  font-weight: 500;
}
</style>
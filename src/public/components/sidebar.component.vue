<script>
export default {
  name: "sidebar",
  mounted() {
    let script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(script1);

    let script2 = document.createElement('script');
    script2.setAttribute('nomodule', '');
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.body.appendChild(script2);
    //
    const barraLateral = document.querySelector(".barra-lateral");
    const menu = document.querySelector(".menu");
    const main = document.querySelector("main");
    //
  menu.addEventListener("click",()=>{
      barraLateral.classList.toggle("max-barra-lateral");
      if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
      }
      else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
      }
      if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");

      }
    });
  }
}
</script>

<template>
   <div class="sidebar">
     <div class="menu">
       <ion-icon name="menu-outline"></ion-icon>
       <ion-icon name="close-outline"></ion-icon>
     </div>

     <div class="barra-lateral">
       <div>
          <router-link to="/">
            <div class="nombre-pagina">
              <img id="logo" src="../../assets/images/logo_white.webp">
              <span id="stocker">Stocker</span>
            </div>
          </router-link>
       </div>

       <nav class="navegacion">
         <ul>
           <li>
             <router-link to="/stocker/dashboard" active-class="active-link">
               <ion-icon name="home-outline"></ion-icon>
               <span>Dashboard</span>
             </router-link>
           </li>
           <li>

               <router-link to="/stocker/inventory" active-class="active-link">
                 <ion-icon name="reader-outline"></ion-icon>
                 <span>Inventario</span>
               </router-link>

           </li>
           <li>
             <router-link to="/stocker/reports" active-class="active-link">
               <ion-icon name="bar-chart-outline"></ion-icon>
               <span>Reportes</span>
             </router-link>
           </li>
           <li>
             <router-link to="/stocker/suppliers" active-class="active-link">
               <ion-icon name="person-circle-outline"></ion-icon>
               <span>Proveedores</span>
              </router-link>
           </li>
           <li>
             <router-link to="/stocker/orders" active-class="active-link">
               <ion-icon name="cube-outline"></ion-icon>
               <span>Órdenes</span>
             </router-link>
           </li>
         </ul>
       </nav>
       <div>
         <div class="linea"></div>
         <nav class="navegacion">
           <ul>
             <li>
               <router-link to="#">
                 <ion-icon name="cog-outline"></ion-icon>
                 <span>Configuración</span>
               </router-link>
             </li>
             <li>
               <router-link to="/login">
                 <ion-icon name="log-out-outline"></ion-icon>
                 <span>Cerrar Sesión</span>
               </router-link>
             </li>
           </ul>
         </nav>
       </div>
       <div>
         <div class="linea"></div>
         <div class="usuario">
           <img src="../../assets/images/Avatar.png" alt="">
           <div class="info-usuario">
             <div class="nombre-email">
               <span class="nombre">User</span>
               <span class="email">user@gmail.com</span>
             </div>
           </div>
         </div>
       </div>

     </div>
   </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');
@import url('https://fonts.cdnfonts.com/css/tesla-2');
.sidebar{
  --color-barra-lateral:rgb(44,45,49);

  --color-texto:rgb(255,255,255);
  --color-texto-menu:rgb(110,110,117);

  --color-menu-hover: rgb(180, 255, 88);
  --color-menu-hover-texto: rgb(0, 0, 0);

  --color-boton:rgb(255,255,255);
  --color-boton-texto:rgb(0,0,0);

  --color-linea:rgb(90,90,90);

  --color-scroll:rgb(68,69,74);
  --color-scroll-hover:rgb(85,85,85);
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
}
.menu{
  position: fixed;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--color-boton);
  color: var(--color-boton-texto);
  right: 15px;
  top: 15px;
  z-index: 100;
}
.active-link{
  background-color: var(--color-menu-hover);
  color: var(--color-menu-hover-texto) !important;
}
.barra-lateral{
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100%;
  overflow: hidden;
  padding: 20px 15px;
  background-color: var(--color-barra-lateral);
  transition: width 0.5s ease,background-color 0.3s ease,left 0.5s ease;
  z-index: 50;
}

.mini-barra-lateral{
  width: 80px;
}
.barra-lateral span{
  width: 100px;
  white-space: nowrap;
  font-size: 18px;
  text-align: left;
  opacity: 1;
  transition: opacity 0.5s ease,width 0.5s ease;
}
.barra-lateral span.oculto{
  opacity: 0;
  width: 0;
}

.barra-lateral .nombre-pagina{
  width: 100%;
  height: 45px;
  color: var(--color-texto);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}
.barra-lateral .nombre-pagina img{
  width: 50px;
  min-width: 50px;
  cursor: pointer;
}
.barra-lateral .nombre-pagina ion-icon{
  min-width: 50px;
  font-size: 40px;
  cursor: pointer;
}
.barra-lateral .nombre-pagina span{
  margin-left: 5px;
  font-size: 25px;
}
#stocker{
  padding-top: 10px;
  padding-left: 10px;
  font-family: 'TESLA', sans-serif;
}

.barra-lateral .boton{
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: var(--color-boton);
  color: var(--color-boton-texto);
}
.barra-lateral .boton ion-icon{
  min-width: 50px;
  font-size: 25px;
}

.barra-lateral .navegacion{
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.barra-lateral .navegacion::-webkit-scrollbar{
  width: 5px;
}
.barra-lateral .navegacion::-webkit-scrollbar-thumb{
  background-color: var(--color-scroll);
  border-radius: 5px;
}
.barra-lateral .navegacion::-webkit-scrollbar-thumb:hover{
  background-color: var(--color-scroll-hover);
}
.barra-lateral .navegacion li{
  list-style: none;
  display: flex;
  margin-bottom: 5px;
}
.barra-lateral .navegacion a{
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  color: var(--color-texto-menu);
}
.barra-lateral .navegacion a:hover{
  background-color: var(--color-menu-hover);
  color: var(--color-menu-hover-texto);
}
.barra-lateral .navegacion ion-icon{
  min-width: 50px;
  font-size: 20px;
}

.barra-lateral .linea{
  width: 100%;
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: var(--color-linea);
}


/*---------------> Usuario*/
.barra-lateral .usuario{
  padding: 10px;
  width: 100%;
  display: flex;
}
.barra-lateral .usuario img{
  width: 50px;
  min-width: 50px;
  border-radius: 10px;
}
.barra-lateral .usuario .info-usuario{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-texto);
  overflow: hidden;
}
.barra-lateral .usuario .nombre-email{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.barra-lateral .usuario .nombre{
  font-size: 15px;
  font-weight: 600;
}
.barra-lateral .usuario .email{
  font-size: 13px;
}
.barra-lateral .usuario ion-icon{
  font-size: 20px;
}


/*-------------main*/

#inbox{
  background-color: var(--color-menu-hover);
  color: var(--color-menu-hover-texto);
}

main{
  margin-left: 250px;
  padding: 20px;
  transition: margin-left 0.5s ease;
}
main.min-main{
  margin-left: 80px;
}
/*-------------usuario*/
.barra-lateral .usuario{
  width: 100%;
  display: flex;
}
.barra-lateral .usuario img{
  width: 50px;
  min-width: 50px;
  border-radius: 10px;
}
.barra-lateral .usuario .info-usuario{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-texto);
  overflow: hidden;
}
.barra-lateral .usuario .nombre-email{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.barra-lateral .usuario .nombre{
  font-size: 15px;
  font-weight: 600;
}
.barra-lateral .usuario .email{
  font-size: 13px;
}
.barra-lateral .usuario ion-icon{
  font-size: 20px;
}


/*------------------> Responsive*/
@media (max-height: 660px){
  .barra-lateral .nombre-pagina{
    margin-bottom: 5px;
  }
  .barra-lateral .modo-oscuro{
    margin-bottom: 3px;
  }
}
@media (max-width: 600px){
  .barra-lateral{
    position: fixed;
    left: -250px;
  }
  .max-barra-lateral{
    left: 0;
  }
  .menu{
    display: flex;
  }
  .menu ion-icon:nth-child(2){
    display: none;
  }
  main{
    margin-left: 0;
  }
  main.min-main{
    margin-left: 0;
  }

}
</style>
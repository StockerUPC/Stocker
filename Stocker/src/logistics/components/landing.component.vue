<script>
import hdSectionComponent from '../../public/components/hd-section.component.vue';
import principalSectionComponent from "../../public/components/principal-section.component.vue";
import ftSectionComponent from "../../public/components/ft-section.component.vue";
import clientSectionComponent from "../../public/components/client-section.component.vue";
import stockSectionComponent from "../../public/components/stock-section.component.vue";
import inventorySectionComponent from "../../public/components/inventory-section.component.vue";
import supportSectionComponent from "../../public/components/support-section.component.vue";
export default {
  name: "landing",
  components:{
    hdSection: hdSectionComponent,
    principalSection: principalSectionComponent,
    ftSection: ftSectionComponent,
    clientSection: clientSectionComponent,
    stockSection: stockSectionComponent,
    inventorySection: inventorySectionComponent,
    supportSection: supportSectionComponent
  }
}
</script>

<template>
  <hd-section/>
  <main>
    <div><principal-section/></div>
    <div><client-section/></div>
    <div><stock-section/></div>
    <div><inventory-section/></div>
    <div><support-section/></div>
    <div><ft-section/></div>
  </main>

</template>

<style scoped>
main{
  overflow: auto;
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
}
div{
  scroll-snap-align: center;
}
</style>

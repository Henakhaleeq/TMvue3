<template>
  <div class="home">
    <HeaderDesktop />
    <navbar/>
    <Bodysection1 />
      <!-- <desktopslider /> -->
      
      <bodysection2/>
      <bodysection3/>
      <bodysection4/>
      <Footer1/>

  </div>
</template>

<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
// import desktopslider from '@/components/desktopslider.vue';
import  Bodysection1 from '@/components/Body-section1.vue';
import  bodysection2 from '@/components/body-section2.vue';
import bodysection3 from '@/components/body-section3.vue';
import bodysection4 from '@/components/body-section4.vue';
import Footer1 from '@/components/Footer1.vue';
import  navbar from '@/components/nav-bar.vue';

export default {
  name: 'HomeView',
  components: {
  HeaderDesktop,
  navbar,
  Bodysection1,
  bodysection2,
 bodysection3,
 bodysection4,
 Footer1

  },
};
</script>

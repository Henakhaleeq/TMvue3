<template>
  <div class="showroom">
    <HeaderDesktop />
    <navbar/>
    <Bodysection1 />
      <desktopslider />
     <showroombodysection2/>
      <showroombodysection3/>
      <showroombodysection4/>
      <Footer1/>

  </div>
</template>

<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import  Bodysection1 from '@/components/Body-section1.vue';
import  showroombodysection2 from '@/components/showroombody-section2.vue';
import showroombodysection3 from '@/components/showroombody-section3.vue';
import showroombodysection4 from '@/components/showroombody-section4.vue';
import Footer1 from '@/components/Footer1.vue';
import  navbar from '@/components/nav-bar.vue';

export default {
  name: 'HomeView',
  components: {
  HeaderDesktop,
  navbar,
  Bodysection1,
  showroombodysection2, 
  showroombodysection3,
  showroombodysection4, 
 Footer1

  },
};
</script>

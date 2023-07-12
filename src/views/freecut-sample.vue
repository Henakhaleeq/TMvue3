<template>
  <div class="freecut-sample">
    <HeaderDesktop />
    <navbar/>
    <Bodysection1 />
    <freecutsection2/>
    <freecutsection3/>
    <freecutsection4/>
    <bodysection4/>
    <Footer1/>

  </div>
</template>

<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import  Bodysection1 from '@/components/Body-section1.vue';
import  freecutsection2 from '@/components/freecut-section2.vue';
import  freecutsection3 from '@/components/freecut-section3.vue';
import  freecutsection4 from '@/components/freecut-section4.vue';
import bodysection4 from '@/components/body-section4.vue';
import Footer1 from '@/components/Footer1.vue';
import  navbar from '@/components/nav-bar.vue';

export default {
  name: 'freecut-sample',
  components: {
  HeaderDesktop,
  navbar,
  Bodysection1,
   freecutsection2,
  freecutsection3,
  freecutsection4, 
 bodysection4,
 Footer1

  },
};
</script>

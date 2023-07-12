<template>
  <div class="clearance&offers">
    <HeaderDesktop />
    <navbar/>
    <Bodysection1 />   
      <clearanceofferssection2/>
      <bodysection4/>
      <Footer1/>

  </div>
</template>

<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import  Bodysection1 from '@/components/Body-section1.vue';
import clearanceofferssection2 from '@/components/clearance&offers-section2.vue';
import bodysection4 from '@/components/body-section4.vue';
import Footer1 from '@/components/Footer1.vue';
import  navbar from '@/components/nav-bar.vue';

export default {
  name: 'clearance-offers',
  components: {
  HeaderDesktop,
  navbar,
  Bodysection1,
clearanceofferssection2,
 bodysection4,
 Footer1

  },
};
</script>

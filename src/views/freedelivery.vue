<template>
  <div class="freedelivery">
    <HeaderDesktop />
    <navbar/>
    <Bodysection1 />
    <deliveryinformation />
    <freedeliverysection3 />
    <bodysection4/>
      <Footer1/>

  </div>
</template>

<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import  navbar from '@/components/nav-bar.vue';
import  Bodysection1 from '@/components/Body-section1.vue';
import  deliveryinformation from '@/components/deliveryinformation.vue';
import  freedeliverysection3 from '@/components/freedeliverysection3.vue';
import bodysection4 from '@/components/body-section4.vue';
import Footer1 from '@/components/Footer1.vue';


export default {
  name: 'free-delivery',
  components: {
  HeaderDesktop,
  navbar,
  Bodysection1,
  deliveryinformation,
  freedeliverysection3,
  bodysection4,
 Footer1

  },
};
</script>

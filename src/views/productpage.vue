<template>
    <div class="product" >
<HeaderDesktop />
<navbar/>
 <bodysection1/>
 <productbodysection2/>
 <productbodysection3/>
  <productbodysection4/>
 <bodysection4/>
   <Footer1/>
    </div>
</template>
<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import navbar from '@/components/nav-bar.vue';
import  Bodysection1 from '@/components/Body-section1.vue';
import  productbodysection2 from '@/components/productbody-section2.vue';
import  productbodysection3 from '@/components/productbody-section3.vue';
import  productbodysection4 from '@/components/productbody-section4.vue';
import bodysection4 from '@/components/body-section4.vue';
import Footer1 from '@/components/Footer1.vue';
import { defineComponent } from "vue";


export default defineComponent({
    name: 'product-page',
    components: {
  HeaderDesktop,
  navbar,
   Bodysection1,
   productbodysection2,
   productbodysection3,
   productbodysection4,
   bodysection4,
   Footer1,
    }
})
</script>
<style>
</style>


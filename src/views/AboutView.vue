<template>
  <div class="about-view">
<HeaderDesktop />
<navbar/>
<Bodysection1/>
<cetagorysection2 />
<Wholesection />
<Categorytext/>
<bodysection4/>
<Footer1/>

  </div>
</template>
<script>
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import navbar from '@/components/nav-bar.vue';
import Bodysection1 from '@/components/Body-section1.vue';
import cetagorysection2 from '@/components/cetagory-section2.vue';
import Wholesection from '@/components/Whole-section.vue';
import Categorytext from '@/components/Category-text.vue';
import bodysection4 from '@/components/body-section4.vue';
import Footer1 from '@/components/Footer1.vue';


export default ({
  name: 'about-view',
  components: {
  HeaderDesktop,
  navbar,
  Bodysection1,
  cetagorysection2,
  Wholesection,
  Categorytext,
  bodysection4,
   Footer1,
  }
})
</script>


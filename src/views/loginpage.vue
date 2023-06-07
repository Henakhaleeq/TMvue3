<template>
  <div class="loginpage">
    <HeaderDesktop />
    <navbar />
    <Bodysection1 />
    <loginsection />
    <bodysection4 />
    <Footer1 />
  </div>
</template>

<script>
import HeaderDesktop from "@/components/HeaderDesktop.vue";
// import desktopslider from '@/components/desktopslider.vue';
import Bodysection1 from "@/components/Body-section1.vue";
import loginsection from "@/components/login-section.vue";
import bodysection4 from "@/components/body-section4.vue";
import Footer1 from "@/components/Footer1.vue";
import navbar from "@/components/nav-bar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "login-page",
  components: {
    HeaderDesktop,
    navbar,
    Bodysection1,
    loginsection,
    bodysection4,
    Footer1,
  },
});
</script>
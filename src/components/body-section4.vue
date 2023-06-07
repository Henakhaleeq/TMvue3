<template>
  <div class="container mx-auto  mobile-only:bg-[#e0dfdf] ">
    <ul class=" mobile-only:px-[0px] mobile-only:pt-[12px] mobile-only:flex-wrap mobile-only:pb-[14px] flex Lap-only:justify-between Tab-only:justify-between xl:justify-between py-[10px] px-[10px] items-center mobile-only:justify-around mobile-only:w-[75%] mobile-only:ml-[50px]">
      <li class="mobile-only:order-[3]">
        <a href="">
            <p class="xl:text-[28px] Lap-only:text-[28px] Tab-only:text-[16px] text-[Arial] font-bold text-[#29275b] mobile-only:text-[15px]">
                Our customers love us!
            </p>
        </a>
      </li>
      <li class="mobile-only:order-[4]">
        <a href="">
        <img class="h-[48px] xl:w-[200px] Lap-only:w-[180px] Tab-only:w-[134px] mobile-only:w-[106px] mobile-only:h-[38px]" src="../assets/stars-trust.svg" alt="">
        </a>
      </li>
      <li class="mobile-only:order-[2]">
        <a href="">
            <p class="xl:text-[28px] Lap-only:text-[28px] Tab-only:text-[16px] text-[Arial] font-bold text-[#29275b] mobile-only:text-[12px] mobile-only:mt-[9px]">
             4.6 out of 5 - Rated EXcellent!
            </p>
            
        </a>
      </li>
      <li class="mobile-only:order-[1]">
     <a href="">
           <img class="h-[48px] xl:w-[200px] Lap-only:w-[180px] Tab-only:w-[134px] mobile-only:w-[106px] mobile-only:h-[38px] mobile-only:ml-[4px] " src="../assets/trustpilot-logo.svg" alt=""> 
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'body-section4',
  props: {
    message: {

    },
  },
});
</script>

<style></style>

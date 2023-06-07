<template>
  <div class="container mx-auto ">
    <div class="md:flex Lap-only:justify-between Tab-only:justify-end mobile-only:block">
        <div class="text-start md:w-[50%] mobile-only:w-[95%] mobile-only:container mobile-only:mx-automobile-only:container mobile-only:mx-auto">
           <h3 class="mt-[42px] text-[#29275b] text-[Arial] font-bold mb-[14px] Tab-only:text-[14px] Lap-only:text-[24px] lg:text-[24px]">
                    Style & Advice
                </h3>
                <h1 class="lg:text-[38px] vmd:text-[22px] text-[#59595b] text-[Arial] font-bold leading-[1.4] m-[0] mobile-only:text-[20px] mb-[8px]">
                    Tiling tips with Craig Phillips
                </h1>
                <p class="lg:text-[18px] md:text-[15px] Tab-only:my-[16px] Lap-only:my-[17px] lg:my-[18px] leading-[1.6] md:pb-[32px] text-[#59595b] Tab-only:pr[0px] Lap-only:pr-[119px] mobile-only:text-[13px]">
                    As one of the UK’s leading DIY and home improvement TV
                    experts, Craig Phillips is the perfect person to bring you our
                    series of ‘How To’ videos. These handy tutorials are designed
                    to answer your most frequently asked questions about tiling."
                </p>
                <a class="text-start mobile-only:hidden  " href="">
        <button class="text-center border-[0] h-[47px] Lap-only:leading-1 Lap-only:py-[15px] Lap-only:px-[47px] lg:py-[15px] lg:px-[47px] Lap-only:text-[14px] rounded-[4px] bg-[#29275b] text-[#ffffff] mb-[10px] Tab-only:py-[12px] Tab-only:px-[30px] Tab-only:text-[12px] leading-[auto] "> WATCH THE VIDEOS</button>
        </a> 
        </div>
        <div class="md:w-[49%] mobile-only:w-[95%] mobile-only:container mobile-only:mx-auto">
            <a href="">
                <img class=" mt-[1.5rem] " src="../assets/video-img.jpg" alt="">
            </a>
        </div>
        <div class="md:hidden mobile-only:block ">
<a class="decoration-0" href="">
        <button class="text-[12px] text-center border-[0] text-[Arial] font-bold h-[47px] leading-[1px] py-[14px] px-[27px] rounded-[4px] bg-[#29275b] text-[#ffffff] mb-[30px] mt-[30px] w-[63%]"> WATCH THE VIDEOS</button>
        </a> 
        </div>
        
    </div>
    <div >
        
    </div>
    


     
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'body-section3',
  props: {
    message: {

    },
  },
});
</script>

<style>

</style>
<template>
<div class="bg-[#F5F4F4]">
<div class="container mx-auto mobile-only:hidden pt-[14px] pb-[8px]">
<Ul class="flex justify-between">
  <router-link to="freedelivery">
    <li >
        <a href="" class="flex justify-between">
            <img class="h-[24px]" src="../assets/truck.png" alt="">
            <p  @click="alertFunction()" class="Lap-only:text-[13.7px] text-[Arial] font-bold text-[ #4a4a4a] ml-[7px] mt-[4px] mb-[0rem] Lap-only:pr-[20px] Tab-only:text-[10px] Tab-only:ml-[6px] Tab-only:mt-[5px] Tab-only:pr-[16px]">
Free Delievery
            </p>
        </a>
    </li>
    </router-link>
    <router-link to="freecut-sample">
     <li>
        <a href="" class="flex justify-between">
            <img class="h-[24px]" src="../assets/sample.png" alt="">
            <p class="Lap-only:text-[13.7px] text-[Arial] font-bold text-[ #4a4a4a] ml-[7px] mt-[4px] mb-[0rem] Lap-only:pr-[20px] Tab-only:text-[10px] Tab-only:ml-[6px] Tab-only:mt-[5px] Tab-only:pr-[16px]">
               Totaly free cut samples dispatched sameday 
            </p>
        </a>
     </li>
     </router-link>
      <li>
         <a href="" class="flex justify-between">
            <img class="h-[24px]" src="../assets/star.png" alt="">
            <p class="Lap-only:text-[13.7px] text-[Arial] font-bold text-[ #4a4a4a] ml-[7px] mt-[4px] mb-[0rem] Lap-only:pr-[20px] Tab-only:text-[10px] Tab-only:ml-[6px] Tab-only:mt-[5px] Tab-only:pr-[16px]">
                5 star trustpillot Review 
            </p>
        </a>
      </li>
       <li>
         <a href="" class="flex justify-between">
            <img class="h-[24px]" src="../assets/flag.png" alt="">
            <p class="Lap-only:text-[13.7px] text-[Arial] font-bold text-[ #4a4a4a] ml-[7px] mt-[4px] mb-[0rem] Lap-only:pr-[20px] Tab-only:text-[10px] Tab-only:ml-[6px] Tab-only:mt-[5px] Tab-only:pr-[16px]">
               Visit Our Flagship Showrooms  
            </p>
        </a>
      </li>
</Ul>
  </div>
</div>
  
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Body-section1',
  props: {
    message: {

    },
  },
});
</script>
<style>
</style>

<template>
<div>
  <nav class="container mx-auto">
    <div class="flex items-center  Tab-only:gap-0 mobile-only:gap-0 justify-between">
      <router-link to="/">
      <div class="mian-logo">
        <a href="" class="h-[auto] my-[8px]"></a>
        <img
          class="
            mobile-only:max-w-[120px] mobile-only:w-full mobile-only:pl-2.5
            w-[156px]
            h-[68px]
            Tab-only:h-[54px]
            Tab-only:w-[134px]
          "
          src="../assets/tile-mountain-logo.svg"
          alt=""
        />
      </div>
       </router-link>
       <div
          class="
            border-none
            h-[2.625rem]
            mobile-only:hidden mobile-only:max-w-full
            p-0
            sf-header__search
            sf-input sf-search-bar
            text-sm
          "
        >
          <label for="">
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value=""
              class="
                h-[46px]
                border-black
                min-w-[406px]
                Tab-only:min-w-[288px]
                Lap-only:min-w-[300px]
                w-[100%]
                text-[15px]
                pl-[0.8rem]
                border-[1px] border-[solid] border-[#b3b6b4]
                leeading-[1px]
                text-[
                #777]
                bg-[#e5ebee]
              "
            />
            <!-- <span class="item ml-[15px] mt-[-41px]"> What are you looking for? </span> -->
          </label>

          <!-- <div class=".item">
            <p class="animat-11 ">What are you looking for?</p>
          </div> -->
        </div>
      <div
        class="
          flex
          items-center
          Lap-only:ml-[0%]
          Tab-only:ml-[0%]
          mobile-only:ml-[16%]
        "
      >
       
        <div
          class=" flex items-center  gap-[3rem] Tab-only:gap-[2rem] mobile-only:gap-[15px]
          "
        >
          <div class="Tab-only:flex flex  mobile-only:block">
            <a href=""><img class="w-[27px] h-[23px]" src="../assets/phone.tilemountain.svg" alt="" /></a>
            <a
              class="
                font-sans
                mobile-only:hidden
                Tab-only: text-[12px]
                text-[#29275b]
                font-bold
                text-[18px]
                font-[Arial]
              "
              href=""
              >0151 548 1554</a
            >
          </div>
          <div
            class="
              flex
              gap-14
              Tab-only:gap-[1.5rem]
              mobile-only:gap-[0.9rem]
              mt-[10px]
            "
          >
            <div class="">
              <img
                class="w-[23px] h-[23px] mobile-only:inline-block ml-[9px] mobile-only:ml-[0px]"
                src="../assets/location.tilemountain.svg"
                alt=""
              />
              <p class="Tab-only:text-[11px]">
                 showroom
              </p>
            </div>
            <router-link to="/loginpage">
            <div class="">
              <img
                class="w-[23px] h-[23px] mobile-only:inline-block ml-[8px]  mobile-only:ml-[0px]"
                src="../assets/user.tilemountain.svg"
                alt=""
              />
            </div>
             </router-link>
            <div class="Tab-only:hidden">
              <img
                class="w-[29px] h-[25px] mobile-only:inline-block "
                src="../assets/basket.tm.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</div>
  
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HeaderDesktop ',
  props: {
    message: {

    },
  },
});
</script>
<style scoped>

/* .item { */
  /* width: 300px;
  height: 200px;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
}

@keyframes animat-11 {
  from {
    transform: rotateY(85deg);
    transform-origin: left;
    opacity: 0;
  }
  to {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  } */

</style>
<template>
  <div
    class="container mx-auto mobile-only:flex mobile-only:flex mobile-only:justify-between pt-[14px] pb-[8px] border-b border-gray-200 mobile-only:sticky mobile-only:top-[0px] mobile-only:bg-white mobile-only:z-[1]"
  >
    <Ul class="flex justify-between Tab-only: flex justify-center items-center">
      <li class="mt-[4px]">
        <a
          href=""
          class="flex justify-between mobile-only:flex mobile-only:items-center"
        >
          <img
            class="h-[24px] Tab-only:w-[28px] Tab-only:h-[27px] mobile-only:w-[28px] mobile-only:ml-[6px] mobile-only:h-[33px]"
            src="../assets/filter.svg"
            alt=""
          />
          <p
            class="text-[17px] mobile-only:text-[11.37px] mobile-only:mt-[0px] mobile-only:mr-[0px] mobile-only:mb-[0px] mobile-only:ml-[8px] mobile-only:pt-[0px] mobile-only:pr-[0px] mobile-only:pb-[0px] mobile-only:pl-[0px] Tab-only:mt-[4px] Tab-only:text-[13px] text-[Arial] font-bold text-[ #4a4a4a] ml-[12px] mt-[0px] mb-[0rem] Tab-only:pl-[11px] Lap-only:pr-[20px] Tab-only:mt-[5px] Tab-only:pr-[0px]"
          >
            Refine by
          </p>
        </a>
      </li>
      <li>
        <a href="">
          <p
            class="text-[30px] text-[Arial] mobile-only:hidden Tab-only-[20px] Tab-only:text-[20px] Tab-only:pl-[60px] Tab-only:flex Tab-only:flex-grow-0 Tab-only:flex-shrink-0 Tab-only:flex-basis-40p Tab-only:max-w-40p font-bold text-[ #2a285a] Tab-only:ml-[0px] Tab-only:mr-[0px] pl-[170px] mt-[0px] mb-[0rem] p-[0px] text-center Lap-only:text-[20px] text-[Arial] font-bold text-[ #2a285a] ml-[0px] mt-[0px] mb-[0rem] p-[0px] text-center"
          >
            Floor Tiles
          </p>
        </a>
      </li>
      <li>
        <a
          href=""
          class="flex mobile-only:flex mobile-only:items-center mobile-only:pl-[56px] pt-[4px]"
        >
          <p
            class="pr-[12px] text-[17px] text-[Arial] font-bold text-[ #2a285a] ml-[0px] mt-[0px] mb-[0rem] p-[0px] text-center mobile-only:text-[11.37px] mobile-only:mt-[0px] mobile-only:mr-[0px] mobile-only:mb-[0px] mobile-only:ml-[0px] mobile-only:pt-[0px] mobile-only:pr-[4px] mobile-only:pb-[0px] mobile-only:pl-[0px] Lap-only:text-[20px] text-[Arial] font-bold text-[ #2a285a] ml-[0px] mt-[0px] mb-[0rem] p-[0px] text-center Tab-only:text-[13px] Tab-only:mt-[9px] Tab-only:mr-[0px] Tab-only:mb-[0px] Tab-only:ml-[5px] Tab-only:pt-[0px] Tab-only:pr-[12px] Tab-only:pb-[0px] Tab-only:pl-[0px]"
          >
            Sort by:
          </p>
          <!-- <div class="relative inline-block text-left">
            <button
              type="button"
              @click="toggleButton"
              class="flex gap-[7px] text-[14px] w-fit-content pr-[4px] py-2 text-[Arial] text-sm font-normal rounded bg-transparent text-[#606063] mr-[0px] border border-gray-700 h-[33px] leading-8 pl-[5px] mobile-only:h-[26px] mobile-only:w-[113px] mobile-only:text-[10px] mobile-only:mt-[0px] mobile-only:mr-[0px] mobile-only:mb-[0px] mobile-only:ml-[0px] mobile-only:pt-[0px] mobile-only:pr-[18px] mobile-only:pb-[0px] mobile-only:pl-[5px] mobile-only:bg-white"
            >
              <div class="mt-[-7px] ">Recommended</div>
              <div>
                <svg width="15" height="17" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <title>background</title>
                    <rect
                      fill="none"
                      id="canvas_background"
                      height="402"
                      width="582"
                      y="-1"
                      x="-1"
                    />
                  </g>
                  <g>
                    <title>Layer 1</title>
                    <path
                      stroke="null"
                      fill="#2a285a"
                      id="svg_1"
                      d="m4.544563,11.954199l4.707795,5l4.707795,-5l-0.941559,-1l-3.766236,4l-3.766236,-4l-0.941559,1z"
                    />
                    <path
                      transform="rotate(-180 9.252358436584473,3.966108322143555) "
                      stroke="null"
                      fill="#2a285a"
                      id="svg_3"
                      d="m4.544563,1.966108l4.707795,5l4.707795,-5l-0.941559,-1l-3.766236,4l-3.766236,-4l-0.941559,1z"
                    />
                  </g>
                </svg>
              </div>
            </button>

            <div v-if="buttonState">
              <ul>
                <li>low to high</li>
                <li>high to low</li>
              </ul>
            </div>
          </div> -->
<div class="border-[1px] border-[black] rounded-[3px] pt-[4px] pl-[6px] pr-[6px]  h-[32px] "> 
<form >
  <select class=" outline-none button-style bg-cover options-table "  name="fliter" id="fliter">
    <option class="p-[3px]" value="Recommended">Recommended</option>
    <option  class="p-[3px]"  value="High">Price:High to Low</option>
    <option  class="p-[3px]"  value="Low">Price:Low to High</option>
    <option  class="p-[3px]"   value="Latest">Latest</option>
  </select>
</form>
</div>

          <p
            class="pl-[17px] text-[17px] text-[Arial] font-bold text-[ #2a285a] ml-[0px] mt-[0px] mb-[0rem] p-[0px] text-center mobile-only:text-[11.37px] mobile-only:mt-[0px] mobile-only:mr-[0px] mobile-only:mb-[0px] mobile-only:ml-[0px] mobile-only:pt-[0px] mobile-only:pr-[0px] mobile-only:pb-[0px] mobile-only:pl-[12px] Lap-only:text-[20px] text-[Arial] font-bold text-[ #2a285a] ml-[0px] mt-[0px] mb-[0rem] p-[0px] text-center Tab-only:text-[13px] Tab-only:mt-[7px] Tab-only:mr-[0px] Tab-only:mb-[0px] Tab-only:ml-[0px] Tab-only:pl-[0px]"
          >
            241 Results
          </p>
        </a>
      </li>
    </Ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref,  } from "vue";

export default defineComponent({
  name: "cetagory-section2",
  setup() {
    const buttonState = ref(false);
    const dataLoaded = ref(true);
    const myData = ref([]);
    const loadData = async () => {
      dataLoaded.value = true;
    };

    function toggleButton() {
      buttonState.value = !buttonState.value;
    }

    return {
      dataLoaded,
      myData,
      loadData,
      buttonState,
      toggleButton,
    };
  },
});
</script>
<style>
 .options-table > options
 {
 padding: 4px;
 }
.button-style
{
 appearance: none !important;
background:url(../assets/arrows1.svg) no-repeat right;  
}
</style>

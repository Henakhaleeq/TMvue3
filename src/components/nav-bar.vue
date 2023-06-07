<template>
  <div class="mt-[15px]">
    <div
      class=" Tab-only:bg-[#24224d] Lap-only:bg-[#24224d] xl:bg-[#24224d] Lap-only:mt-[2px] Tab-only:mt-[2px] xl:mt-[2px] mobile-only:bg-[white] mobile-only:block mt-[10px] "
    >
      <div class="Lap-only:hidden Tab-only:hidden mobile-only:flex xl:hidden">
        <button
          @click="showMenu()"
          class="text-[1.25rem] leading-[1px] bg-white hover:bg-[#292758] px-[1rem] mx-[0px] border-[1px] border-[solid] border-[#b3b6b4] hover:border-[#292758] rounded-[0px]"
        >
          <span class="inline-block bg-center w-[1em] h-[1em] bg-no-repeat navbar relative flex flex-wrap items-center justify-between hambeger-img"></span>
        </button>
        <div class="flex items-center w-[100%]">
          <input
            class="border-[1px] border-[#b3b6b4] bg-[#e5ebee] text-[15px] w-[100%] h-[46px] text-[ #777777] pl-[0.6rem] font-[Arial] font-bold leading-[1px]"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div
        class="container mx-auto mobile-only:block mobile-only:border-[2px] border-solid border-[#292758] mobile-only:w-[100vh] mobile-only:fixed mobile-only:z-10 mobile-only:bg-[white] mobile-only:max-w-[230px] mobile-only:mx-0 Lap-only:block Tab-only:block"
        :class="
          this.showMobileMenu
            ? 'open-menu'
            : 'closed-menu mobile-only:h-0 mobile-only:p-0 mobile-only:opacity-0'
        "
      >
        <ul
          class="flex items-center justify-around list-none mobile-only:block"
        >
          <li
            class=" mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px]  navbar-item menu-element mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >All Tiles</a
            >
            <!-- <div class="class-checking">

            </div> -->
           <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            /> 
            <div
              class=" navbar-dropdown dropdown-menu container z-10 mx-auto bg-[ #fff]  absolute pr-0 pl-0 hidden"
            >
              <div class="flex w-full">
                <div
                  class="bg-[white] border-l-[5px] border-l-[#0fa897] border-r-[3px] border-solid pl-[10px] pr-[8px] pt-[37px] min-h-[280px] w-[15.81%] md:w-[19.81%] border-y-[5px] border-y-[#0fa897]"
                >
                  <p
                    class="text-start text-[17px] font[Arial] text-[#2a285a] font-bold pl-[10px]"
                  >
                    <span> Divan Beds </span>
                  </p>
                  <ul
                    class="font[Arial] leading-7 list-none text[#000000] text-left p-0 pl-[10px] block m-0 border-none font-normal"
                  >
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Pocket Sprung
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Open Coil
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Memory Foam
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Latex
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Orthopeadic
                    </li>
                     <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Ottomen Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Adjustable
                    </li>
                     <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Hotel beds
                    </li>
                     <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Devan bases
                    </li>
                     <li
                      class="xl:text-[13px] font[Arial] list-none text[#000000] leading-7 font-bold "
                    >
                    View All Devan Beds
                    </li>
                
                  </ul>
                </div>
                <div
                  class="bg-[white] border-r-[3px] border-solid pl-[10px] pr-[8px] pt-[37px] min-h-[280px] w-[15.81%] md:w-[19.81%] border-y-[5px] border-y-[#0fa897]"
                >
                  <p
                    class="text-[17px] font[Arial] text-[#2a285a] font-bold pl-[10px] text-start"
                  >
                    <span> Bed Frames </span>
                  </p>
                  <ul
                    class="font[Arial] leading-7 list-none text[#000000] text-left p-0 pl-[10px] block m-0 border-none font-normal"
                  >
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Leather And Fabric Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Metal Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Wooden Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Ottoman Bed Frames
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Sleigh Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      TV beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Day Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Guest Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Bunk beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Kids Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Sofa beds
                    </li>
                    <li
                      class="xl:text-[13px]  font[Arial] list-none text[#000000] leading-7 font-bold"
                    >
                    View All Bed Frames
                    </li>
                  </ul>
                </div>
                <div
                  class="bg-[white] border-r-[3px] border-solid pl-[10px] pr-[8px] pt-[37px] min-h-[280px] w-[15.81%] md:w-[19.81%] border-y-[5px] border-y-[#0fa897]"
                >
                  <p
                    class="text-start text-[17px] font[Arial] text-[#2a285a] font-bold pl-[10px]"
                  >
                    <span> Ottomen Beds</span>
                  </p>
                  <ul
                    class="font[Arial] leading-7 list-none text[#000000] text-left p-0 pl-[10px] block m-0 border-none font-normal"
                  >
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Ottoman Divan Beds
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                      Ottoman Divan Bases
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Ottoman Bed Frames
                    </li>
                     <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Wooden Ottoman Beds
                    </li>
                      <li
                      class="xl:text-[13px]  font[Arial] list-none text[#000000] leading-7 font-bold "
                    >
                     View All Ottoman Beds
                    </li>
                  
                  </ul>
                </div>
                <div
                  class="bg-[white] border-r-[3px]  border-r-[#0fa897] border-solid pl-[10px] pr-[8px] pt-[37px] min-h-[280px] w-[15.81%] md:w-[19.81%] border-y-[5px] border-y-[#0fa897]"
                >
                  <p
                    class="text-[17px] font[Arial] text-[#2a285a] font-bold pl-[10px] text-start"
                  >
                    <span> Bed By Size </span>
                  </p>
                  <ul
                    class="font[Arial] leading-7 list-none text[#000000] text-left p-0 pl-[10px] block m-0 border-none font-normal"
                  >
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Single
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Small Double
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                     Double
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    King Size
                    </li>
                    <li
                      class="xl:text-[13px] font-normal font[Arial] list-none text[#000000] leading-7"
                    >
                    Super king
                    </li>
                  </ul>
                </div>
              
                <div class="Tab-only:hidden z-10">
                  <a href="">
                    <img
                      class="h-[100%] border-[5px] border-solid border-[#0fa897]"
                      src="../assets/bedfdivan-beds-menu.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

             
            </div>
          </li>
          <li
            class="mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-grow flex-shrink group sb-menu nav-item level0 nav-1 level-top nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Bathroom
            </a>
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class=" flex-grow mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex flex-shrink group sb-menu nav-item level0 nav-1 level-top first nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3 Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Kitchen</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class="mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex flex-grow flex-shrink group sb-menu nav-item level0 nav-1 level-top first nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Floor</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class="mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex flex-grow flex-shrink group sb-menu nav-item level0 nav-1 level-top first nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Wall</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class="mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex flex-grow flex-shrink group sb-menu nav-item level0 nav-1 level-top first nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >luxury Vinyl</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class=" py-[12px] mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex flex-grow flex-shrink group sb-menu nav-item level0 nav-1 level-top first nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897] "
          >
            <a
              href=""
              class="mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3 Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Laminate</a
            >

            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
            <li
            class="mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] mobile-only:pr-[20px] mobile-only:flex flex-grow flex-shrink group sb-menu nav-item level0 nav-1 level-top first nav-item--parent mega nav-item--only-blocks parent hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-start mobile-only:text-[black] my-3 Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Real Wood</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class="  mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-start mobile-only:text-[black] my-3 Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Outdoor</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
           class=" mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle bg-[#00adef]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >New</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class=" mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Adhesive</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
           class=" mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle hover:bg-[#0fa897]"
          >
            <a
              href=""
               class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Accessories</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class=" mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle bg-[red]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-start mobile-only:text-[black] my-3  Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Sale</a
            >
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
          <li
            class=" mobile-only:justify-between mobile-only:items-center mobile-only:border-b-[1px] border-b-[#f2f2f2] mobile-only:pl-[25px] grow  mobile-only:pr-[20px] mobile-only:flex basis-[auto] flex-shrink nav-item--parent mega nav-item--only-blocks red-triangle hover:bg-[#0fa897]"
          >
            <a
              href=""
              class=" py-[12px] mobile-only:text-[#434343] mobile-only:font[Arial] mobile-only:font-bold mobile-only:text-[10.59px] font-sans text-sm font-bold  level-top sb-forward text-center block text-white mobile-only:text-start mobile-only:text-[black] my-3 Lap-only:text-[15px] Lap-only:my-3 Tab-only:text-[10px]"
              >Style & Advice</a>
            <img
              class="w-[7px] h-[15px] hidden mobile-only:block"
              src="../assets/right-arrow.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      document.getElementsByTagName('BODY')[0].classList.toggle('overflow')
      document.querySelector(".Close").classList.toggle("Show");
    
    },
  },
};
</script>
<style>
@media screen and (max-width: 767px) {
  .Show {
    display: block !important;
  }
}
     .menu-element:hover~.dropdown-menu 
    {
        display: block;
    }
    .overflow{
      overflow: hidden !important;
    }
    .hambeger-img
    {
      background-image: url(../assets/bars-blue.svg);
    }
    .hambeger-img:hover
    {
    background-image: url(../assets/bars-white.svg);
    }

    /* {
    -webkit-clip-path: polygon(50% 99%,0 0,100% 0);
    clip-path: polygon(50% 99%,0 0,100% 0);
    background-color: #0fa897;
    } */
    /* .class-checking{ */
        /* width: 5.4%;
    height: 23px;
    position: absolute;
    left:15.3%;
    content: "";
    /* bottom: 344px; */
    /* z-index: 99;
    -webkit-clip-path: polygon(50% 99%,0 0,100% 0);
    clip-path: polygon(50% 99%,0 0,100% 0);
    background-color: #0fa897; */
    /* }  */
</style>

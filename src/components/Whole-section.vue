<template>
  <div
    class="container mx-auto mobile-only:block pt-[10px] pl-[9px] mobile-only:px-[7px] flex gap-8"
  >
    <div
      class="sticky top-[0px] max-w-[240px] pl-[8px] h-[830px] top-[70px] w-[100%] overflow-hidden overflow-x-hidden Tab-only:w-[80%] Tab-only:sticky Tab-only:max-w-xs Tab-only:pl-[8px] Tab-only:h-[830px] mobile-only:hidden"
    >
      <div class="w-[100%] pt-[12] pb-[13] border-b border-gray-400">
        <h4 class="text-[14px] text-[#2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
        >
          Type
        </h4>
        <div class="flex mt-[13px]">
          <div class=" pink-radiobutton flex flex-col justify-around pb-[2px] pr-[12px]">
          <input
              type="radio"
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              :checked="isSelected(option.value)"
              @change="handleOptionChange(option.value)"
            />
          </div>
          <div class="flex flex-col items-start">
            <label v-for="option in options" :key="option.value">{{
              option.label
            }}</label>
          </div>

          <!-- <label
            class="block relative pl-[29px] text-left mb-[12px] cursor-pointer text-[14px] font-Arial, Helvetica, sans-serif"
          >
            <input
              id="default-checkbox"
              type="checkbox"
              code="Type"
              codesingle="floor"
              value="floor"
              class="not-active absolute opacity-0 cursor-pointer h-0 w-0"
            />
            <span
              class="text-[#434343] leading-6 text-[14px] Tab-only:text-[13px]"
              >Floor</span
            >
            <span
              class="absolute top-[0px] left-[0px] h-[14px] w-[14px] bg-[#fff] border border-gray-700 h-[18px] w-[18px] rounded-full"
            ></span>
            <span class="text-[#8d8d8d] Tab-only:text-[13px]">(227)</span>
          </label>
          <label
            class="block relative pl-[29px] text-left mb-[12px] cursor-pointer text-[14px] font-Arial, Helvetica, sans-serif"
          >
            <input
              id="default-checkbox"
              type="checkbox"
              code="Type"
              codesingle="Floors & Walls"
              value="Floors & Walls"
              class="not-active absolute opacity-0 cursor-pointer h-0 w-0"
            />
            <span
              class="text-[#434343] leading-6 text-[14px] Tab-only:text-[13px]"
              >Floors & Walls</span
            >
            <span
              class="absolute top-[0px] left-[0px] h-[14px] w-[14px] bg-[#fff] border border-gray-700 h-[18px] w-[18px] rounded-full"
            ></span>
            <span class="text-[#8d8d8d] Tab-only:text-[13px]">(11)</span>
          </label>
          <label
            class="block relative pl-[29px] text-left mb-[12px] cursor-pointer text-[14px] font-Arial, Helvetica, sans-serif"
          >
            <input
              id="default-checkbox"
              type="checkbox"
              code="Type"
              codesingle="Floors & Walls"
              value="Floors & Walls"
              class="not-active absolute opacity-0 cursor-pointer h-0 w-0"
            />
            <span
              class="text-[#434343] leading-6 text-[14px] Tab-only:text-[13px]"
              >Wall</span
            >
            <span
              class="absolute top-[0px] left-[0px] h-[14px] w-[14px] bg-[#fff] border border-gray-700 h-[18px] w-[18px] rounded-full"
            ></span>
            <span class="text-[#8d8d8d] Tab-only:text-[13px]">(3)</span>
          </label> -->
        </div>
      </div>

      <div class="border-b border-gray-300">
        <button
          @click="toggleButton"
          class="w-[100%] pb-[7px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Colour
          </h4>
          <div>
            <img
              v-if="buttonState"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState">
          <ul class="flex flex-col items-start">
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]">
                Beige
              </span>
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]">
                Cream
              </span>
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Black</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Black and White</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Charcoal</span
              >
            </li>

            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Blue</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Purple</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]">
                Brown</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Cream</span
              >
            </li>

            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Dark Grey</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Green</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Grey</span
              >
            </li>

            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Ivory</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton0"
          class="w-[100%] pb-[7px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Finish
          </h4>
          <div>
            <img
              v-if="buttonState0"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState0">
          <ul class="flex flex-col items-start">
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Gloss</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Matt</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Polished</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton1"
          class="w-[100%] pb-[7px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Special Feature
          </h4>
          <div>
            <img
              v-if="buttonState1"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState1">
          <ul class="flex flex-col items-start">
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Concrete Effect</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Hexagon</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Marble Effect</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Slip Effect</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Stone Effect</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Wood Effect</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton2"
          class="w-[100%] pb-[7px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Material
          </h4>
          <div>
            <img
              v-if="buttonState2"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState2">
          <ul class="flex flex-col items-start">
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Ceramic</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Procelain</span
              >
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px] colour-[#434343] leading-[0.6px]"
                >Vitrified Ceramic</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton3"
          class="w-[100%] pb-[7px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Rectified
          </h4>
          <div>
            <img
              v-if="buttonState3"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState3">
          <ul class="flex flex-col items-start">
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px]">No</span>
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px]">Yes</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton4"
          class="w-[100%] pb-[7px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Width
          </h4>
          <div>
            <img
              v-if="buttonState4"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState4">
          <div class="block mt-[13px]">
            <label
              class="pl-[0px] mb-[0px] block relative pl-[29px] mb-[12px] cursor-pointer text-[14px] font-Arial, Helvetica, sans-serif"
            >
              <div
                label="price label"
                class="w-[93%] pb-[50px] relative z-[0] pr-[6px]"
              >
                <div class="w-auto p-[0px] relative box-border">
                  <div
                    class="h-[2px] bg-gray-300 relative block rounded-lg before-content absolute left-[-20px] top-[0px] w-[100%] h-[100%] z-[2]"
                  >
                    <div
                      class="block w-[16px] h-[16px] top-[-7px] duration-0 transform-translate-x--8 left-[-14px] absolute transition-none will-change-transform cursor-pointer z-[5]"
                    >
                      <div
                        class="w-[100%] h-[100%] rounded-full bg-[#da2f89] shadow-md"
                      ></div>
                      <div
                        class="inherit-visibility block ml-[0px] left-[2px] transform-translate-y-full right-auto bottom-[-40px] whitespace-nowrap absolute z-[9] cursor-pointer"
                      >
                        <span
                          class="text-[13px] text-[#434343] font-bold py-[4px] px-[5px] fit-content-min-width block text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900 Tab-only:text-[13px]"
                        >
                          116 mm
                        </span>
                      </div>
                    </div>
                    <div
                      class="block w-[16px] h-[16px] top-[-7px] duration-0 transform-translate-x-202 left-[199px] absolute transition-none will-change-transform cursor-pointer z-[5]"
                    >
                      <div
                        class="w-[100%] h-[100%] rounded-full bg-[#da2f89] shadow-md"
                      ></div>
                      <div
                        class="inherit-visibility block ml-[0px] right-[0px] transform-translate-y-full left-auto whitespace-nowrap bottom-[-40px] absolute z-[9] cursor-pointer"
                      >
                        <span
                          class="text-[13px] text-[#434343] font-bold py-[4px] px-[5px] fit-content-min-width block text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900 Tab-only:text-[13px]"
                        >
                          1200 mm
                        </span>
                      </div>
                    </div>
                    <ul
                      class="absolute w-[100%] p-[0px] m-[0px] left-[0px] top-[0px] h-[100%] list-none"
                    ></ul>
                    <div
                      class="font-bold duration-0 w-[210px] left-[-10px] bg-[#2a285a] h-[4px] p-[0px] top-[0px] absolute rounded-lg transition-none z-[1] block"
                    >
                      <div
                        class="bottom--16 invisible transform translate-y-full right-[-5px] left-auto animate-fadeIn absolute z-[9]"
                      >
                        <span
                          class="text-[13px] text-[#434343] font-bold px-[4px] py-[5px] fit-content-min-width block whitespace-nowrap text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton5"
          class="w-[100%] pb-[13px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Hieght
          </h4>
          <div>
            <img
              v-if="buttonState5"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState5">
          <div class="block mt-[13px]">
            <label
              class="pl-[0px] mb-[0px] block relative pl-[29px] mb-[12px] cursor-pointer text-[14px] font-Arial, Helvetica, sans-serif"
            >
              <div
                label="price label"
                class="w-[93%] pb-[50px] relative z-[0] pr-[6px]"
              >
                <div class="w-auto p-[0px] relative box-border">
                  <div
                    class="h-[2px] bg-gray-300 relative block rounded-lg before-content absolute left-[-20px] top-[0px] w-[100%] h-[100%] z-[2]"
                  >
                    <div
                      class="block w-[16px] h-[16px] top-[-7px] duration-0 transform-translate-x--8 left-[-14px] absolute transition-none will-change-transform cursor-pointer z-[5]"
                    >
                      <div
                        class="w-[100%] h-[100%] rounded-full bg-[#da2f89] shadow-md"
                      ></div>
                      <div
                        class="inherit-visibility block ml-[0px] left-[2px] transform-translate-y-full right-auto bottom-[-40px] whitespace-nowrap absolute z-[9] cursor-pointer"
                      >
                        <span
                          class="text-[13px] text-[#434343] font-bold py-[4px] px-[5px] fit-content-min-width block text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900 Tab-only:text-[13px]"
                        >
                          101 mm
                        </span>
                      </div>
                    </div>
                    <div
                      class="block w-[16px] h-[16px] top-[-7px] duration-0 transform-translate-x-202 left-[199px] absolute transition-none will-change-transform cursor-pointer z-[5]"
                    >
                      <div
                        class="w-[100%] h-[100%] rounded-full bg-[#da2f89] shadow-md"
                      ></div>
                      <div
                        class="inherit-visibility block ml-[0px] right-[0px] transform-translate-y-full left-auto whitespace-nowrap bottom-[-40px] absolute z-[9] cursor-pointer"
                      >
                        <span
                          class="text-[13px] text-[#434343] font-bold py-[4px] px-[5px] fit-content-min-width block text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900 Tab-only:text-[13px]"
                          >1510 mm</span
                        >
                      </div>
                    </div>
                    <ul
                      class="absolute w-[100%] p-[0px] m-[0px] left-[0px] top-[0px] h-[100%] list-none"
                    ></ul>
                    <div
                      class="font-bold duration-0 w-[210px] left-[-10px] bg-[#2a285a] h-[4px] p-[0px] top-[0px] absolute rounded-lg transition-none z-[1] block"
                    >
                      <div
                        class="bottom--16 invisible transform translate-y-full right-[-5px] left-auto animate-fadeIn absolute z-[9]"
                      >
                        <span
                          class="text-[13px] text-[#434343] font-bold px-[4px] py-[5px] fit-content-min-width block whitespace-nowrap text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-300">
        <button
          @click="toggleButton6"
          class="w-[100%] pb-[13px] pt-[12px] flex justify-between items-center"
        >
          <h4
            class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] Tab-only:text-[12px]"
          >
            Style
          </h4>
          <div>
            <img
              v-if="buttonState6"
              alt=""
              src="../assets/minusminus.png"
              class="plus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
            <img
              v-else
              alt=""
              src="../assets/plusplus.png"
              class="minus-img Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%]"
              lazy="loaded"
              style=""
            />
          </div>
        </button>
        <div v-if="buttonState6">
          <ul class="flex flex-col items-start">
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px]">Concrete Effect</span>
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px]">Marble Effect</span>
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px]">Stone Effect</span>
            </li>
            <li>
              <input type="checkbox" v-model="isChecked" />
              <span class="pl-[10px]">Wood Effect</span>
            </li>
          </ul>
        </div>
      </div>
 <div class="w-[100%] pb-[13px] pt-[12px] border-b border-gray-300  items-center">
                <h4 class="text-[14px] text-[ #2a285a] font-bold font-Arial mb-[0px] cursor-pointer capitalize h-[25px] pl-[2px] flex items-center mt-[0px] w-[97%] Tab-only:text-[12px]">Price</h4>
               
                <div class="block mt-[13px]">
                    <label class="pl-[0px] mb-[0px] block relative pl-[29px] mb-[12px] cursor-pointer text-[14px] font-Arial, Helvetica, sans-serif ">
                        <div label="price label" class="w-[93%] pb-[50px] relative z-[0] pr-[6px]">
                            <div class="w-auto p-[0px] relative box-border">
                                <div class="h-[2px] bg-gray-300 relative block rounded-lg before-content absolute left-[-20px] top-[0px] w-[100%] h-[100%] z-[2]">
                                    <div class="block w-[16px] h-[16px] top-[-7px] duration-0 transform-translate-x--8 left-[-14px] absolute transition-none will-change-transform cursor-pointer z-[5]">
                                        <div class="w-[100%] h-[100%] rounded-full bg-[#da2f89] shadow-md"></div>
                                        <div class="inherit-visibility block ml-[0px] left-[2px] transform-translate-y-full right-auto bottom-[-40px] whitespace-nowrap absolute z-[9] cursor-pointer">
                                            <span class="text-[13px] text-[#434343] font-bold py-[4px] px-[5px] fit-content-min-width block text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900 Tab-only:text-[13px]"> £ 15 </span>
                                        </div>
                                    </div>
                                    <div class="block w-[16px] h-[16px] top-[-7px] duration-0 transform-translate-x-202 left-[199px] absolute transition-none will-change-transform cursor-pointer z-[5]">
                                        <div class="w-[100%] h-[100%] rounded-full bg-[#da2f89] shadow-md"></div>
                                        <div class="inherit-visibility block ml-[0px] right-[0px] transform-translate-y-full left-auto whitespace-nowrap bottom-[-40px] absolute z-[9] cursor-pointer">
                                            <span class="text-[13px] text-[#434343] font-bold py-[4px] px-[5px] fit-content-min-width block text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900 Tab-only:text-[13px]"> £ 75 </span>
                                        </div>
                                    </div>
                                    <ul class="absolute w-[100%] p-[0px] m-[0px] left-[0px] top-[0px] h-[100%] list-none"></ul>
                                    <div class="font-bold duration-0 w-[210px] left-[-10px] bg-[#2a285a] h-[4px] p-[0px] top-[0px] absolute rounded-lg transition-none z-[1] block">
                                        <div class="bottom--16 invisible transform translate-y-full right-[-5px] left-auto animate-fadeIn absolute z-[9]">
                                            <span class="text-[13px] text-[#434343] font-bold px-[4px] py-[5px] fit-content-min-width block whitespace-nowrap text-center rounded-md border border-solid border-blue-500 bg-[#ffffff] border border-blue-900"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div> 
      <!-- <price-slider />  -->
    </div>
    <div>
    <router-link to="/productpage">
      <div
        class="grid grid-cols-3 gap-[14px] mobile-only:grid mobile-only:grid-cols-1"
      >
        <div
          v-for="(product, index) in myData"
          :key="index"
          class="Tab-only:pb-[20px] mobile-only:flex mobile-only:p-[9px] mobile-only:border-b border-gray-200 border-b-0.5"
        >
          <img
            alt=""
            :src="product.image"
            class="Tab-only:w-[86%] Tab-only:h-[auto] mobile-only:w-[44%] mobile-only:h-[100%] max-w-[50%]"
            lazy="loaded"
            style=""
          />
          <div class="mobile-only:pl-[23px]">
            <p
              class="text-[17px] w-[100%] text-left pb-[6px] mb-[4px] mt-[20px] text-[#434343] font-Arial font-thin leading-5 h-[46px] overflow-hidden Tab-only:text-[13px] mobile-only:text-[14.48px]"
            >
              {{ product.title }}
            </p>
            <p
              class="font-Arial text-[14.44px] text-left Tab-only:text-[12px] mobile-only:text-[12px]"
            >
              Size: 605x605x8mm
            </p>
            <span
              data-v-2246d8ac=""
              class="flex text-[#828282] font-bold text-left pl-[0px] w-[100%] font-family-Arial, Helvetica, sans-serif mobile-only:flex mobile-only:flex-col"
            >
              <p
                class="font-bold text-[12px] text-left w-[60%] font-Arial pt-[2px] pr-[2px] pl-[0px] pb-[0px] flex items-center mobile-only:pt-[12px]"
              >
                <span
                  class="priceprod text-[17px] text-[#2a285a] font-bold text-left w-[100%] font-Arial Tab-only:text-[11px] mobile-only:text-[14.625px]"
                >
                  £17.95
                  <span
                    class="ml-[-5px] text-[17px] Tab-only:text-[11px] mobile-only:text-[14.625px]"
                    >/</span
                  >
                  <span
                    class="text-[17px] Tab-only:text-[11px] mobile-only:text-[14.625px]"
                    >sqm</span
                  >
                </span>
              </p>
              <div
                class="w-[100%] text-right block text-[#828282] font-bold font-family-Arial, Helvetica, sans-serif"
              >
                <ul
                  class="mt-[15px] flex list-none pl-[61px] pt-[10px] Tab-only:pl-[0px] Tab-only:pt-[0px] mobile-only:pl-[0px] mobile-only:pt-[0px]"
                >
                  <li class="pl-[2.5px] inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 250 250"
                      version="1.1"
                      class="w-[15px] h-[16px] fill-yellow-300"
                    >
                      <g id="#000000ff">
                        <path
                          opacity="1.00"
                          d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z"
                        ></path>
                      </g>
                    </svg>
                  </li>
                  <li class="pl-[2.5px] inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 250 250"
                      version="1.1"
                      class="w-[15px] h-[16px] fill-yellow-300"
                    >
                      <g id="#000000ff">
                        <path
                          opacity="1.00"
                          d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z"
                        ></path>
                      </g>
                    </svg>
                  </li>
                  <li class="pl-[2.5px] inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 250 250"
                      version="1.1"
                      class="w-[15px] h-[16px] fill-yellow-300"
                    >
                      <g id="#000000ff">
                        <path
                          opacity="1.00"
                          d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z"
                        ></path>
                      </g>
                    </svg>
                  </li>
                  <li class="pl-[2.5px] inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 250 250"
                      version="1.1"
                      class="w-[15px] h-[16px] fill-yellow-300"
                    >
                      <g id="#000000ff">
                        <path
                          opacity="1.00"
                          d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z"
                        ></path>
                      </g>
                    </svg>
                  </li>
                  <li class="pl-[2.5px] inline-block">
                    <svg
                      class="w-[15px] h-[16px] fill-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60.031 60"
                    >
                      <path
                        d="M828.776,237.723l-11.4,8.657a3,3,0,0,0-.993,1.3,2.948,2.948,0,0,0-.162,1.618l3.078,17.135a3,3,0,0,1-1.275,3.011,3.161,3.161,0,0,1-3.326.147l-13.174-7.409a3.156,3.156,0,0,0-3.09,0L785.257,269.6a3.164,3.164,0,0,1-1.55.4,3.13,3.13,0,0,1-1.777-.551,3,3,0,0,1-1.274-3.011l3.076-17.135a2.929,2.929,0,0,0-.16-1.618,3,3,0,0,0-.993-1.3l-11.4-8.657a3,3,0,0,1-1.117-3.085,3.069,3.069,0,0,1,2.391-2.285l14.654-2.967a3.129,3.129,0,0,0,1.28-.577,3.02,3.02,0,0,0,.885-1.074l7.914-16.018a3.131,3.131,0,0,1,5.586,0l7.91,16.018a3.028,3.028,0,0,0,.884,1.074,3.162,3.162,0,0,0,1.281.577l14.655,2.967a3.07,3.07,0,0,1,2.394,2.285A3,3,0,0,1,828.776,237.723Zm-17.121-2.454a9.22,9.22,0,0,1-3.713-1.675,9.12,9.12,0,0,1-2.647-3.216L800,219.658v36.125a9.188,9.188,0,0,1,4.451,1.166l7.839,4.409-1.976-10.994a9.01,9.01,0,0,1,3.454-8.781l6.122-4.647Z"
                        data-name="half rating"
                        id="half_rating"
                        transform="translate(-769.969 -210)"
                        class="cls-1"
                      ></path>
                    </svg>
                  </li>
                </ul>
                <span
                  class="text-[13px] m-[0px] relative top-[-20px] font-Arial text-[#828282] font-thin Tab-only:text-[10px] Tab-only:right-[73px] Tab-only:top-[0px] mobile-only:right-[64px] mobile-only:text-[11px] mobile-only:top-[-20px]"
                >
                  (122)
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </router-link>
      <div>
        <div class="text-center mt-[75px]">
          <span
            class="pt-[23px] pb-[23px] pr-[110px] pl-[110px] border-2 border-gray-700 text-[ #7A7A7A] cursor-pointer font-normal TEXT-2px m-[40px] font-sans text-center"
            >LOAD NEXT 28</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { reactive } from 'vue';
export default defineComponent({
  name: "Whole-section",
  setup() {
    const buttonState = ref(false);
    const buttonState0 = ref(false);
    const buttonState1 = ref(false);
    const buttonState2 = ref(false);
    const buttonState3 = ref(false);
    const buttonState4 = ref(false);
    const buttonState5 = ref(false);
    const buttonState6 = ref(false);
    const selectedOption = ref('');
    const options = [
      { value: 'option1', label: 'Floor' },
      { value: 'option2', label: 'Flooring' },
      { value: 'option3', label: 'Floors & Walls'},
      { value: 'option4', label: 'Wall'}
    ];
    
    const state = reactive({
      stateValue: ''
    });
 
    const isSelected = (value) => {
      return selectedOption.value === value;
    };

    const handleOptionChange = (value) => {
      selectedOption.value = value;
      state.stateValue = value;
    };
    const dataLoaded = ref(true);
    const myData = ref([]);
    const loadData = async () => {
      dataLoaded.value = true;
    const response = await axios.get(
        "https://fakestoreapi.com/products?limit=9"
      );
      myData.value = response.data;
      console.log("response data:", myData.value);
    };
  
    onMounted(loadData);
    function toggleButton() {
      buttonState.value = !buttonState.value;
    }

    function toggleButton0() {
      buttonState0.value = !buttonState0.value;
    }

    function toggleButton1() {
      buttonState1.value = !buttonState1.value;
    }

    function toggleButton2() {
      buttonState2.value = !buttonState2.value;
    }

    function toggleButton3() {
      buttonState3.value = !buttonState3.value;
    }

    function toggleButton4() {
      buttonState4.value = !buttonState4.value;
    }
    function toggleButton5() {
      buttonState5.value = !buttonState5.value;
    }
    function toggleButton6() {
      buttonState6.value = !buttonState6.value;
    }
 

    return {
      dataLoaded,
      myData,
      loadData,
      buttonState,
      buttonState0,
      buttonState1,
      buttonState2,
      buttonState3,
      buttonState4,
      buttonState5,
      buttonState6,
      toggleButton,
      toggleButton0,
      toggleButton1,
      toggleButton2,
      toggleButton3,
      toggleButton4,
      toggleButton5,
      toggleButton6,
            options,
      isSelected,
      handleOptionChange,
      stateValue: state.stateValue
    };
  },
});
</script>
 <style>
 .pink-radiobutton::after input{
  fill: pink !important;
 }

.background-colour-pink {
  background-color: pink;
}
</style>  
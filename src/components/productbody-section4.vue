<template>
  <div class="pt-[40px] pb-[50px]">
    <div class="container border-box ml-[auto] mr-[auto] pr-[8px] pl-[8px]">
      <h4 class="text-[26px] font-arial font-bold text-center text-[#4a4a4a] mt-[0px] mb-[12px]">
        Shop the collection
      </h4>
      <div>
        <div>
           <div>
    <carousel :items-to-show="4" class="max-w-[1272px]">
      <slide v-for="product in myData" :key="product.image" @click="selectedImage = product.image">
          <div class="flex flex-col relative">
              <div class="flex flex-row">
                  <div class="pt-[20px] pb-[20px] pl-[0px] pr-[0px]">
                    <a href="/p/carrara-white-gloss-floor-tile.html" class="text-[#4f4f4f] relative no-underline">
                      <div class="relative pr-[17px] pl-[17px]">
                        <div
                          class="block no-underline border-0 pb-[0] relative pr-[17px] pl-[17px]">
                          <div class="mt-[0px] mb-[0px] mr-[auto] ml-[auto] pt-[0px] pb-[0px] pr-[15px] pl-[15px] text-[#4f4f4f]">
                            <img src="" alt="Carrara White Gloss Marble Effect Rectified Vitrified Ceramic Floor Tile"
                              style="display: none;"
                              class="max-w-[100%] w-[auto] p-[0px] max-h-[100%] h-[auto] absolute left-[50%] top-[50%]">
                             <div  class="w-[50%] h-[185px]" >
          <img  :src="product.image" />
        </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[90%] m-[auto] text-[#4f4f4f] cusor-pointer">
                        <div class="h-[100%] min-h-[115px]  ml-[4px]">
                          <p
                            class="mb-[0px] text-[#29275b] text-left leading-7 text-[15px] font-[500] min-h-[54px] font-Arial w-[74%]">
                            Carrara White Gloss Marble Effect Rectified Vitrified Ceramic Floor Tile
                          </p>
                          <p
                            class="mt-[0px] mr-[0px] mb-[-9px] ml-[0px] text-[#29275b] text-left leading-tight text-[13px] font-arial">
                            Size: 600x600x9.5mm
                          </p>
                          <div class="h-[100%] min-h-[92px]">
                            <p
                              class="text-[#29275b] font-Arial text-left font-[500] text-[15px] mt-[21px] block w-[auto]">
                              <span>
                                <span>
                                  <span>
                                    <span
                                      class="text-[#29275b] font-Arial text-left font-[500] text-[15px] mt-[21px] inline-block w-[auto]">£20.95</span>
                                    <span
                                      class="text-[#29275b] font-Arial text-left font-[500] text-[15px] ">/
                                      <span>m<sup>2</sup>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span>
                              </span>
                            </p>
                            <div class="text-right mt-[-23px]">
                 <ul class="inline-block w-auto">
                   <li class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 250 250" version="1.1" width="16" height="16" class="fill-[#f5da00]">
                       <g id="#000000ff">
                         <path opacity="1.00"
                           d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z">
                         </path>
                       </g>
                     </svg></li>
                   <li class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 250 250" version="1.1" width="16" height="16" class="fill-[#f5da00]">
                       <g id="#000000ff">
                         <path opacity="1.00"
                           d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z">
                         </path>
                       </g>
                     </svg></li>
                   <li class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 250 250" version="1.1" width="16" height="16" class="fill-[#f5da00]">
                       <g id="#000000ff">
                         <path opacity="1.00"
                           d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z">
                         </path>
                       </g>
                     </svg></li>
                   <li class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 250 250" version="1.1" width="16" height="16" class="fill-[#f5da00]">
                       <g id="#000000ff">
                         <path opacity="1.00"
                           d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z">
                         </path>
                       </g>
                     </svg></li>
                   <li class="inline-block"><svg width="16" height="16"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.031 60" class="fill-[#f5da00]">
                       <path 
                         d="M828.776,237.723l-11.4,8.657a3,3,0,0,0-.993,1.3,2.948,2.948,0,0,0-.162,1.618l3.078,17.135a3,3,0,0,1-1.275,3.011,3.161,3.161,0,0,1-3.326.147l-13.174-7.409a3.156,3.156,0,0,0-3.09,0L785.257,269.6a3.164,3.164,0,0,1-1.55.4,3.13,3.13,0,0,1-1.777-.551,3,3,0,0,1-1.274-3.011l3.076-17.135a2.929,2.929,0,0,0-.16-1.618,3,3,0,0,0-.993-1.3l-11.4-8.657a3,3,0,0,1-1.117-3.085,3.069,3.069,0,0,1,2.391-2.285l14.654-2.967a3.129,3.129,0,0,0,1.28-.577,3.02,3.02,0,0,0,.885-1.074l7.914-16.018a3.131,3.131,0,0,1,5.586,0l7.91,16.018a3.028,3.028,0,0,0,.884,1.074,3.162,3.162,0,0,0,1.281.577l14.655,2.967a3.07,3.07,0,0,1,2.394,2.285A3,3,0,0,1,828.776,237.723Zm-17.121-2.454a9.22,9.22,0,0,1-3.713-1.675,9.12,9.12,0,0,1-2.647-3.216L800,219.658v36.125a9.188,9.188,0,0,1,4.451,1.166l7.839,4.409-1.976-10.994a9.01,9.01,0,0,1,3.454-8.781l6.122-4.647Z"
                         data-name="half rating" id="half_rating" transform="translate(-769.969 -210)" class="cls-1">
                       </path>
                     </svg></li>
                 </ul>
                 <p class="text-[#7e7979] text-[12px] inline-block w-auto">
                   (134)
                 </p>
               </div>
                          </div>
                        </div>
                        <p
                          class="mb-[0px] text-[#29275b] text-left leading-7 text-[15px] font-[500] min-h-[54px] font-Arial">
                          <a href="/p/carrara-white-gloss-floor-tile.html"
                            class="w-[100%] bg-[#29275b] border-none text-white rounded-md block text-center pt-[13px] pr-[0px] pb-[14px] pl-[0px] mt-[-5px] box-border max-w-[]">
                            <b>VIEW</b>
                          </a>
                        </p>
                      </div>
                    </a>
                  </div>
            
              </div>
          
           
            <!---->
          </div>
       
      </slide>

      <template #addons>
        <navigation class="m-t[-10px]" />

      </template>
    </carousel>


  </div>
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { defineComponent, ref, onMounted } from 'vue';
import axios from "axios";
export default defineComponent({
  name: "productbody-section4",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const dataLoaded = ref(true);
    const myData = ref([]);
    const selectedImage = ref(null);

    const loadData = async () => {
      dataLoaded.value = true;
      console.log("before get call!!");
      const response = await axios.get("https://fakestoreapi.com/products?limit=9");
      console.log("response:", response.data);
      myData.value = response.data;
      console.log("response data:", myData);

      // Set the selectedImage to the first item's image URL
      if (myData.value.length > 0) {
        selectedImage.value = myData.value[0].image;
      }
    };

    onMounted(loadData);

    return {
      dataLoaded,
      myData,
      selectedImage,
      loadData,
    };
  },
});
</script>

<style>
.carousel__prev.carousel__prev {
    left: -48px;
}
.carousel__next.carousel__next
{
  right:-48px;
}
</style>
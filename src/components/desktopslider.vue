// <template>
//   <div class="">
//     <carousel :arrows="true" :dots="true" :autoplay="true" :navigation-click="true" >
//       <div class=" grey-background">
//         <img class="desktopslider-1 " src="../assets/slider11.jpg" alt="slider1" />
//         <img class="mobile-slider w-[100%]" src="../assets/mob-slider-1.jpg" alt="slider1"/>
//         </div>
//       <div class="grey-background"><img class="desktopslider-1" src="../assets/slider2.jpg" alt="slider1" />
//       <img class=" mobile-slider w-[100%]" src="../assets/mobile-slide-2.jpg" alt="slider1"/>
//       </div>
//       <div class="grey-background"><img class=" desktopslider-1" src="../assets/slider3.jpg" alt="slider1" />
//       <img class=" mobile-slider w-[100%]" src="../assets/mobile-slider-2.jpg" alt="slider1"/>
//       </div>
//       <div class="grey-background"><img class=" desktopslider-1" src="../assets/slider44.jpg" alt="slider1" />
//       <img class=" mobile-slider w-[100%]" src="../assets/mobile-slider-4.jpg" alt="slider1"/>
//       </div>
//       <div class="grey-background"><img class=" desktopslider-1" src="../assets/slider55.jpg" alt="slider1" />
//       <img class=" mobile-slider w-[100%]" src="../assets/mobile-slider-5.jpg" alt="slider1"/>
//       </div>
//       <div class="grey-background"><img class=" desktopslider-1" src="../assets/slidder66.jpg" alt="slider1" />
//       <img class="mobile-slider w-[100%]" src="../assets/mobile-slider-6.jpg" alt="slider1"/>
//       </div>
//     </carousel>
//   </div>
// </template>

<script>
import { Carousel } from 'vue-carousel';

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'desktop-slider',
  props: {
    message: {

    },
  },
});

</script>
<style>
.grey-background
{
  background-color: #f1f1f1 ;
 padding-bottom:20px;
}
ul.slick-dots {
  position: absolute;
  bottom: 35px;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75 !important;
  color: #e10081 !important;
}
.slick-dots li button:before {
  font-size: 12px !important;
  color: white !important;
  opacity: 1;
}
.slick-prev{
  z-index: 1;
  left: 0;
}
.slick-next{
  z-index: 1;
  right: 0;
}

 @media screen and (max-width: 767px)
{
 .mobile-slider
 {
  display: block !important;
 }
 .desktopslider-1
 {
display: none !important;
 }
 .slick-dots
 {
  display: none !important;
 }
}
@media screen and (min-width: 768px) and (max-width: 1023px)
{
 .mobile-slider
 {
  display: none !important;
 }
 .desktopslider-1
 {
display: block !important;
 }
 .slick-prev{
  display:none;
 }
 .slick-next{
   display:none;
 }
}
@media screen and (min-width: 1024px) and (max-width: 1279px)
{
 .mobile-slider
 {
  display:none !important;
 }
 .desktopslider-1
 {
display: block !important;
 } 
} 
@media screen and (min-width:  1279px) 
{
 .mobile-slider
 {
  display:none !important;
 }
 .desktopslider-1
 {
display: block !important;
 }
 
}
@media screen and (min-width:767px) 
{
.slick-prev{
  display:none !important;
 }
 .slick-next{
   display:none !important;
 }
}
</style>
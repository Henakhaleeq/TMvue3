<template>

  <carousel :items-to-show="3" class="max-w-[580px] mt-[83%]" >
   
    <slide v-for="product in myData" :key="product.image" >
      <!-- <img v-for="(product, index) in myData" :key="index"  :src="product.image"/> -->
      <div class="w-[30%] h-[25%]" >
   <img  :src="product.image"/>
      </div>
   
      {{ slide }}
    </slide>

    <template #addons>
      <navigation class="m-t[-10px]" />
      <ariaGallery />
     
    </template>
  </carousel>
</template>
 
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide,Navigation,ariaGallery } from 'vue3-carousel'
 
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import axios from "axios";

export default defineComponent({
     name: "productslick-slider",
   components: {
    Carousel,
    Slide,
    ariaGallery,
    Navigation,
  },
  setup()
  {
    const dataLoaded = ref(true);
    const myData = ref([]);
    const loadData = async () => {
      dataLoaded.value = true;
      console.log("before get call!!")
    const response = await axios.get("https://fakestoreapi.com/products?limit=9");
      console.log("response:", response.data);
      myData.value = response.data;
      console.log("response data:", myData);
    };
      onMounted(loadData);
    return{
       dataLoaded,
      myData,
      loadData,
    }
  }
})

</script> 


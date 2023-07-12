<template>

  <carousel :items-to-show="1" class="" :dots="true" >
   
    <slide v-for="product in myData" :key="product.image" >
      <!-- <img v-for="(product, index) in myData" :key="index"  :src="product.image"/> -->
      <div class=" h-[470px] w-[25%]  flex items-center" >
   <img  :src="product.image"/>
      </div>
   
      {{ slide }}
    </slide>

    <template #addons>
      <navigation class="m-t[-10px]" />
     
    </template>
  </carousel>
</template>
 
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide,Navigation } from 'vue3-carousel'
 
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import axios from "axios";

export default defineComponent({
     name: "productslick-slider",
   components: {
    Carousel,
    Slide,
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


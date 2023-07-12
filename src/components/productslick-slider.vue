<template>
  <div>
    <div class="mt-4 min-h-[500px] flex justify-center items-center">
      <img :src="selectedImage" v-if="selectedImage" class="max-w-[300px] mx-auto" />
    </div>
    <carousel :items-to-show="3" class="max-w-[580px]">
      <slide v-for="product in myData" :key="product.image" @click="selectedImage = product.image">
        <div class="w-[30%] h-[25%]">
          <img :src="product.image" />
        </div>
      </slide>

      <template #addons>
        <navigation class="m-t[-10px]" />

      </template>
    </carousel>


  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { defineComponent, ref, onMounted } from 'vue';
import axios from "axios";

export default defineComponent({
  name: "productslick-slider",
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

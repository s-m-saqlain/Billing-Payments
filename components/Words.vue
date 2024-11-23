<template>
  <div class="bg-[#FFF9E8] lg:h-[145vh] sm:h-[230vh] h-[100vh]">
    <h1
      class="text-center sm:text-5xl text-3xl lg:pt-[13rem] sm:pt-[35rem] sm:pt-[50rem] pt-14 font-bold"
    >
      Don't take our word
    </h1>
    <h1 class="text-center sm:text-5xl text-3xl font-bold">
      for it, take theirs
    </h1>

    <!-- For Laptop -->

    <div class="lg:block hidden">
      <div class="flex justify-center gap-12 pt-[4rem]">
        <div>
          <img
            :src="selectedImage"
            class="w-[250px] h-64 rounded-tl-[120px] rounded-tr-[120px]"
          />

          <div class="flex justify-center gap-12 pt-8">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              @click="selectImage(image)"
              :class="{
                'opacity-100': selectedImage === image.src,
                'opacity-40': selectedImage !== image.src,
              }"
              class="cursor-pointer w-14 h-14 rounded-tl-[120px] rounded-tr-[120px] transition-opacity duration-300"
            />
          </div>
        </div>
        <div>
          <div v-if="selectedContent" class="pt-8 w-[350px]">
            <p class="font-normal text-3xl">{{ selectedContent }}</p>
            <p class="font-bold pt-12">{{ selectedContent2 }}</p>
            <p class="font-semibold text-gray-500">{{ selectedContent3 }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- For Tablet -->
    <div class="lg:hidden">
      <swiper
        :pagination="true"
        :modules="modules"
        class="mySwiper sm:mt-0 mt-[2rem]"
      >
        <swiper-slide>
          <div class="sm:w-96 w-64 mx-auto">
            <p class="font-normal text-4xl pt-12">
              FreshBooks has really helped me to be more efficient throughout
              the year so that tax time…it’s less stressful
            </p>
            <div class="flex items-center gap-4 pt-12">
              <img
                src="~/assets/images/word1.png"
                class="w-14 h-14 rounded-tl-[22px] rounded-tr-[22px]"
              />
              <div>
                <p class="font-bold">Damona Hoffman</p>
                <p class="font-semibold text-gray-500">Dear Mrs D, Inc.</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="sm:w-96 w-64 mx-auto">
            <p class="font-normal text-4xl pt-12">
              Accounting’s not that scary. It can be easy or easy-ish.
              FreshBooks definitely makes it easier for us ‘non-numbers’ people.
            </p>
            <div class="flex items-center gap-4 pt-12">
              <img
                src="~/assets/images/word2.png"
                class="w-14 h-14 rounded-tl-[22px] rounded-tr-[22px]"
              />
              <div>
                <p class="font-bold">Carolina Ramirez Herrera</p>
                <p class="font-semibold text-gray-500">CHR Collective</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="sm:w-96 w-64 mx-auto">
            <p class="font-normal text-4xl pt-12">
              FreshBooks has really helped me to be more efficient throughout
              the year so that tax time…it’s less stressful
            </p>
            <div class="flex items-center gap-4 pt-12">
              <img
                src="~/assets/images/word3.png"
                class="w-14 h-14 rounded-tl-[22px] rounded-tr-[22px]"
              />
              <div>
                <p class="font-bold">Zachary Martz</p>
                <p class="font-semibold text-gray-500">Zmartz Marketing</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import word1 from "~/assets/images/word1.png";
import word2 from "~/assets/images/word2.png";
import word3 from "~/assets/images/word3.png";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "~/assets/css/style.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const modules = [Pagination];

import { ref } from "vue";

interface ImageData {
  src: string;
  content: string;
  content2: string;
  content3: string;
}

const images = ref<ImageData[]>([
  {
    src: word1,
    content:
      "FreshBooks has really helped me to be more efficient throughout the year so that tax time…it’s less stressful.",
    content2: "Damona Hoffman",
    content3: "Dear Mrs D, Inc.",
  },
  {
    src: word2,
    content:
      "Accounting’s not that scary. It can be easy or easy-ish. FreshBooks definitely makes it easier for us ‘non-numbers’ people.",
    content2: "Carolina Ramirez Herrera",
    content3: "CHR Collective",
  },
  {
    src: word3,
    content:
      "We’re basically saving $2000 a month. And that doesn’t include all the things that we were able to do in place of all that admin.",
    content2: "Zachary Martz",
    content3: "Zmartz Marketing",
  },
]);

const selectedImage = ref(images.value[0].src);
const selectedContent = ref(images.value[0].content);
const selectedContent2 = ref(images.value[0].content2);
const selectedContent3 = ref(images.value[0].content3);

function selectImage(image: ImageData) {
  selectedImage.value = image.src;
  selectedContent.value = image.content;
  selectedContent2.value = image.content2;
  selectedContent3.value = image.content3;
}
</script>

<style>
</style>

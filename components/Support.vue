<template>
  <div
    class="sm:flex justify-between items-center gap-4 lg:pt-[7rem] pt-12 lg:px-[4rem] sm:px-7 px-6"
  >
    <div
      class="bg-[#FFF9E8] rounded-md lg:h-[67vh] sm:h-[60vh] sm:px-7 sm:py-0 py-4"
    >
      <h1
        class="lg:text-5xl sm:text-3xl text-3xl sm:text-start text-center font-bold lg:pt-12 pt-3 sm:px-0 px-7"
      >
        Support that actually supports you 💙
      </h1>
      <div class="lg:flex items-center gap-3 pt-8 sm:px-0 px-[6rem] lg:mt-12">
        <button
          class="border-[1.5px] border-black font-bold rounded-md sm:w-[14rem] w-44 px-4 py-3 hover:bg-[#001B40] hover:text-white lg::my-0"
        >
          Contact Us
        </button>
        <button
          class="border-[1.5px] border-black font-bold rounded-md sm:w-[14rem] w-44 px-4 py-3 hover:bg-[#001B40] hover:text-white lg:my-0 sm:my-4 sm:mt-0 mt-4"
        >
          Help Center
        </button>
      </div>
    </div>
    <img src="~/assets/images/support.png" class="lg:block hidden w-[33rem]" />
    <img
      src="~/assets/images/supporttablet.png"
      class="lg:hidden sm:block w-96 sm:mt-0 mt-6"
    />
  </div>
  <div
    class="sm:flex justify-between items-center lg:gap-5 gap-4 lg:pt-6 sm:pt-4 lg:px-[4rem] sm:px-8 px-6 sm:mt-0 mt-4"
  >
    <div
      class="sm:block hidden bg-[#0075DD] rounded-md lg:h-[49.5vh] sm:h-[65vh] h-[50vh] lg:w-[465px] lg:pt-12 pt-8 px-8"
    >
      <img src="~/assets/images/smile.svg" />
      <p class="text-white lg:text-3xl text-2xl font-semibold lg:pt-6 sm:pt-4">
        Help From Start to Finish
      </p>
      <p class="text-white pt-5">
        Our Support team is knowledgeable and never transfers you to other
        departments.
      </p>
    </div>
    <div
      class="sm:block hidden bg-[#002D79] rounded-md lg:h-[49.5vh] sm:h-[65vh] h-[50vh] lg:w-[465px] lg:pt-12 pt-8 px-8 sm:mt-0 mt-4"
    >
      <img src="~/assets/images/star1.svg" />
      <p class="text-white lg:text-3xl text-2xl font-semibold lg:pt-6 sm:pt-4">
        4.8/5.0 Star Reviews
      </p>
      <p class="text-white pt-5">
        Yup, that’s our Support team approval rating across 120,000+ reviews
      </p>
    </div>
    <div
      class="sm:block hidden bg-[#0075DD] rounded-md lg:h-[49.5vh] sm:h-[65vh] h-[50vh] lg:w-[465px] lg:pt-12 pt-8 px-8 sm:mt-0 mt-4"
    >
      <img src="~/assets/images/message.svg" />
      <p class="text-white lg:text-3xl text-2xl font-semibold lg:pt-6 sm:pt-4">
        Global Support
      </p>
      <p class="text-white pt-5">
        We’ve got over 100 Support staff working across North America and Europe
      </p>
    </div>
  </div>
  <div class="sm:hidden">
    <swiper :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class="bg-[#0075DD] rounded-md h-[35vh] pt-8 px-8 mx-5">
          <img src="~/assets/images/smile.svg" />
          <p class="text-white text-2xl font-semibold">
            Help From Start to Finish
          </p>
          <p class="text-white pt-5">
            Our Support team is knowledgeable and never transfers you to other
            departments.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg-[#002D79] rounded-md h-[35vh] pt-8 px-8 mx-5">
          <img src="~/assets/images/star1.svg" />
          <p class="text-white text-2xl font-semibold">4.8/5.0 Star Reviews</p>
          <p class="text-white pt-5">
            Yup, that’s our Support team approval rating across 120,000+ reviews
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bg-[#0075DD] rounded-md h-[35vh] pt-8 px-8 mx-5">
          <img src="~/assets/images/message.svg" />
          <p class="text-white text-2xl font-semibold">Global Support</p>
          <p class="text-white pt-5">
            We’ve got over 100 Support staff working across North America and
            Europe
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "~/assets/css/style.css";
import { Pagination } from "swiper/modules";

const modules = [Pagination];
</script>
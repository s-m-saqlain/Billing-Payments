<template>
  <div class="bg-blue-900 bg-section bg-no-repeat">
    <div class="lg:flex justify-between 2xl:mt-[5rem] xl:mt-[5rem] lg:mt-[2rem] pt-[6rem]">
      <div>
        <p
          class="lg:text-7xl sm:text-7xl text-5xl font-medium text-white lg:px-12 px-6"
        >
          Welcome to Billing Payments Dashboard
        </p>
        <div
          class="sm:flex justify-start items-center gap-6 lg:px-12 px-6 pt-12"
        >
          <button
            class="bg-green-600 text-white px-6 py-3 text-xl rounded-md font-bold"
          >
            Buy Now & Save
          </button>
          <div class="sm:mt-0 mt-4">
            <p class="font-bold text-white">Fall Offer</p>
            <p class="font-bold text-white">70% Off for 3 Months</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="~/assets/images/bills.png"
          class="lg:block hidden border-[12px] border-black rounded-md w-[83rem] h-[22rem]"
        />
        <img
          src="~/assets/images/bills.png"
          class="lg:hidden sm:block hidden mt-6 border-[12px] border-black rounded-md h-[23rem] mx-auto"
        />
        <img
          src="~/assets/images/bills.png"
          class="sm:hidden mt-6 border-[12px] border-black rounded-md h-[13rem] mx-auto"
        />
      </div>
    </div>

    <p class="text-white lg:px-12 sm:px-6 px-2 font-bold sm:text-2xl text-xl">
      Billing Revenue Over Time
    </p>
    <div class="ticker-container overflow-hidden whitespace-nowrap">
      <div class="ticker-content flex items-center gap-14">
        <!-- Duplicate the items to make the scroll seamless -->
        <div v-for="index in 10" :key="index">
          <div class="flex items-center gap-2 px-12 mt-6">
            <p class="text-white">4.5 Excellent</p>
            <img src="~/assets/images/star.svg" alt="star" />
          </div>
          <p class="px-12 text-white">G2.com</p>
        </div>
        <!-- Repeat the same items for seamless scrolling -->
        <div
          v-for="index in 10"
          :key="'duplicate-' + index"
          class="flex items-center gap-3 px-12 mt-6"
        >
          <p class="text-white">4.5 Excellent</p>
          <img src="~/assets/images/star.svg" alt="star" />
          <p class="px-12 text-white">G2.com</p>
        </div>
      </div>
    </div>
    <Features />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Features from "~/components/Features.vue";
</script>

<style scoped>
.ticker-container {
  width: 100%;
  overflow: hidden;
}

.ticker-content {
  display: flex;
  width: 200%; /* Set width to accommodate duplicated content */
  animation: scroll-left 25s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

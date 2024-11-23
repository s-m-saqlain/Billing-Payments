<template>
  <div
    class="lg:flex justify-center items-center gap-12 bg-[#0075DD] sm:py-[6rem] py-12"
  >
    <div>
      <p class="lg:text-start text-center uppercase text-gray-300 font-medium">
        What else?
      </p>
      <h1
        class="lg:text-start text-center text-white font-medium sm:text-4xl text-xl lg:w-64 pt-6"
      >
        Do Even More With Mileage Tracking
      </h1>
      <button
        class="lg:block hidden mt-12 lg:bg-green-600 w-64 text-white rounded-md py-3 font-semibold text-2xl"
      >
        Try It Free
      </button>
      <div class="lg:hidden block">
        <div class="flex justify-center">
          <button
            class="mt-12 lg:bg-green-600 bg-[#36A900] w-64 text-white rounded-md py-3 font-semibold text-2xl"
          >
            Try It Free
          </button>
        </div>
      </div>
      <p class="lg:text-start text-center pt-2 text-gray-300 text-sm text-base">
        No credit card required. Cancel anytime.
      </p>
    </div>
    <div class="sm:hidden accordion-group mt-14">
      <div
        v-for="(item, index) in accordionItems"
        :key="index"
        class="accordion border-blue-400 border-b p-4 transition duration-500 py-5 mx-1 lg:p-4"
        :class="{
          'accordion-active:bg-indigo-50 accordion-active:border-indigo-600':
            activeIndex === index,
        }"
      >
        <button
          class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
          @click="toggleAccordion(index)"
        >
          <h5 class="text-white text-xl font-semibold">
            {{ item.question }}
          </h5>
          <svg
            class="w-6 h-6 transition duration-500 text-white"
            :class="{
              'transform rotate-45': activeIndex === index,
              'transform rotate-0': activeIndex !== index,
            }"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18M12 18V6"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div
          v-if="activeIndex === index"
          class="accordion-content w-full overflow-hidden pr-4"
        >
          <p class="text-base font-medium leading-6 pt-2 text-base text-sm text-[#76B5ED]">
            {{ item.answer }}
          </p>
           <div v-html="item.answer1"></div>
        </div>
      </div>
    </div>
    <div class="sm:block hidden">
      <div class="flex justify-center lg:mt-0 sm:mt-14">
        <div
          class="bg-[#232465] hover:bg-[#0069C7] pt-8 px-6 border-r border-blue-600"
        >
          <p class="text-white font-bold text-xl">Handy Reports</p>
          <p class="pt-2 text-gray-300 text-sm text-base w-[20rem]">
            Easily download and share insightful reports with your team
          </p>
          <div class="rounded-xl bg-white w-[19rem] mt-4 mx-auto">
            <p class="font-bold text-center pt-4">Mileage Report Sent</p>
            <p class="font-medium text-base text-sm text-center">
              Your 2020 report has been sent
            </p>
            <hr class="mt-4 font-bold border-gray-400 border-t" />
            <p class="text-blue-500 text-center font-bold py-2">OK</p>
          </div>
        </div>
        <div class="flex">
          <div>
            <div
              class="bg-[#232465] hover:bg-[#0069C7] h-48 w-44 border-b border-r border-blue-600"
            >
              <p class="pt-6 px-6 text-white text-xl font-bold w-[11rem]">
                Edit and Adjust Trip Details
              </p>
              <p class="pt-2 text-gray-300 text-sm text-base px-6">
                Manually edit trips in case of any discrepancy
              </p>
            </div>
            <div class="border-t border-blue-600"></div>
            <div class="bg-[#232465] hover:bg-[#0069C7] h-48 w-44">
              <p class="pt-6 px-6 text-white text-xl font-bold w-[11rem]">
                Local Rates In-App
              </p>
              <p class="pt-2 text-gray-300 text-sm text-base px-6">
                Check mileage allowance rates for your country
              </p>
            </div>
          </div>
          <div>
            <div
              class="bg-[#232465] hover:bg-[#0069C7] h-48 w-44 border-b border-r border-blue-600"
            >
              <p class="pt-6 px-6 text-white text-xl font-bold w-[11rem]">
                Easy On/Off Toggle
              </p>
              <p class="pt-2 text-gray-300 text-sm text-base px-6">
                Easily turn Mileage Tracking on and off at anytime
              </p>
            </div>
            <div class="border-t border-blue-600"></div>
            <div
              class="bg-[#232465] hover:bg-[#0069C7] h-48 w-44 border-l border-blue-600"
            >
              <p class="pt-6 px-6 text-white text-xl font-bold w-[11rem]">
                Easily Find Logged Trips
              </p>
              <p class="pt-2 text-gray-300 text-sm text-base px-6">
                Sort and filter all trips by date range
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface AccordionItem {
  question: string;
  answer: string;
  answer1: string;
}

const accordionItems: AccordionItem[] = [
  {
    question: "Handy Reports",
    answer:
      "Easily download and share insightful reports with your team",
    answer1: `
      <div class="rounded-xl bg-white  mt-4 mx-auto">
        <p class="font-bold text-center pt-4">Mileage Report Sent</p>
        <p class="font-medium text-base text-sm text-center">
          Your 2020 report has been sent
        </p>
        <hr class="mt-4 font-bold border-gray-400 border-t" />
        <p class="text-blue-500 text-center font-bold py-2">OK</p>
      </div>
    `  
  },
  {
    question: "Edit and Adjust Trip Details",
    answer:
      "Manually edit trips in case of any discrepancy",
      answer1:""
  },
  {
    question: "Easy On/Off Toggle",
    answer:
      "Easily turn Mileage Tracking on and off at anytime",
    answer1:""
  },
  {
    question: "Local Rates In-App",
    answer:
      "Check Mileage allowance rates for your country",
      answer1:""
  },
  {
    question: "Easily Find Logged Trips",
    answer:
      "Sort and filter all trips by date range",
      answer1:""
  }
];

const activeIndex = ref<number | null>(null);

const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.accordion-active {
  background-color: #e0f2fe;
  border-color: #2563eb;
}
</style>
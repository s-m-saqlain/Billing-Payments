<template>
  <div class="relative">
    <div
      class="lg:bg-freshbook sm:bg-freshbooktablet bg-freshbookmobile bg-no-repeat bg-cover h-screen mt-[6rem]"
    >
      <h1
        class="font-bold text-6xl pt-[12rem] lg:px-[8rem] sm:px-14 sm:block hidden"
      >
        Use FreshBooks
      </h1>
      <p
        class="font-bold text-6xl text-blue-600 pt-2 lg:px-[8rem] px-14 sm:block hidden"
      >
        your way
      </p>
    </div>
    <div class="lg:block hidden">
      <div
        class="absolute inset-0 top-[23rem] flex justify-between rounded-md bg-[#002D79] h-[300px] mx-[6rem] px-12 py-4 pt-8"
      >
        <div>
          <p class="text-white text-3xl font-semibold">Freelancers</p>
          <p class="text-white font-normal text-[14px] pt-4">
            Keep your books in check, your clients happy, and your work on
            track.
          </p>
          <div class="flex items-center pt-[5rem] cursor-pointer">
            <p class="text-white font-semibold">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="pt-1 w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div class="border-blue-600 border-l mx-6"></div>
        <div class="w-[700px]">
          <p class="text-white text-3xl font-semibold">Solopreneurs</p>
          <p class="text-white font-normal text-[14px] pt-4">
            Keep your books in check, your clients happy, and your work on
            track. Invest in accounting software that respects your time so you
            can spend it on building your business, not crunching numbers.
          </p>
          <div class="flex items-center pt-9 cursor-pointer">
            <p class="text-white font-semibold">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="pt-1 w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div class="border-blue-600 border-l mx-6"></div>
        <div>
          <p class="text-white text-3xl font-semibold">
            Businesses with employees
          </p>
          <p class="text-white font-normal text-[14px] pt-4">
            Save time (and money!) by using FreshBooks to collaborate with your
            team while handling accounting, billing, and payroll.
          </p>
          <div class="flex items-center pt-11 cursor-pointer">
            <p class="text-white font-semibold">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="pt-1 w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div class="border-blue-600 border-l mx-6"></div>
        <div>
          <p class="text-white text-3xl font-semibold">
            Businesses with contractors
          </p>
          <p class="text-white font-normal text-[14px] pt-4">
            Stay organized and informed about your daily operations, and keep
            everyone you work with on the same page.
          </p>
          <div class="flex items-center pt-11 cursor-pointer">
            <p class="text-white font-semibold">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="pt-1 w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- For tablet -->

    <div class="lg:hidden sm:block hidden">
      <div
        class="absolute inset-0 top-[23rem] rounded-md bg-[#002D79] h-[550px] mx-[2rem] py-4 pt-8"
      >
        <div class="flex justify-between px-12">
          <div>
            <p class="text-white text-3xl font-semibold">Freelancers</p>
            <p class="text-white font-normal text-[14px] pt-4">
              Keep your books in check, your clients happy, and your work on
              track.
            </p>
            <div class="flex items-center pt-[6rem] cursor-pointer">
              <p class="text-white font-semibold">Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="pt-1 w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div class="border-blue-600 border-l mx-6"></div>
          <div class="w-[390px]">
            <p class="text-white text-3xl font-semibold">Solopreneurs</p>
            <p class="text-white font-normal text-[14px] pt-4">
              Keep your books in check, your clients happy, and your work on
              track. Invest in accounting software that respects your time so
              you can spend it on building your business, not crunching numbers.
            </p>
            <div class="flex items-center py-7 cursor-pointer">
              <p class="text-white font-semibold">Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="pt-1 w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="border-blue-600 border-t"></div>
        <div class="flex justify-between px-12">
          <div class="pt-5">
            <p class="text-white text-3xl font-semibold">
              Businesses with employees
            </p>
            <p class="text-white font-normal text-[14px] pt-4">
              Save time (and money!) by using FreshBooks to collaborate with
              your team while handling accounting, billing, and payroll.
            </p>
            <div class="flex items-center pt-11 cursor-pointer">
              <p class="text-white font-semibold">Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="pt-1 w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div class="border-blue-600 border-l mx-6"></div>
          <div class="pt-5">
            <p class="text-white text-3xl font-semibold">
              Businesses with contractors
            </p>
            <p class="text-white font-normal text-[14px] pt-4">
              Stay organized and informed about your daily operations, and keep
              everyone you work with on the same page.
            </p>
            <div class="flex items-center pt-11 cursor-pointer">
              <p class="text-white font-semibold">Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="pt-1 w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- For Mobile -->
    <div class="sm:hidden">
      <section
        class="absolute inset-0 top-[15rem] py-24 bg-[#002D79] h-[90vh] mx-6 rounded-md"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-16">
            <h2
              class="text-white text-4xl font-manrope text-center font-bold leading-[3.25rem]"
            >
              Use FreshBooks your way
            </h2>
          </div>
          <div class="accordion-group">
            <div
              v-for="(item, index) in accordionItems"
              :key="index"
              class="accordion border-blue-500 border-t p-4 transition duration-500 mb-8 lg:p-4"
              :class="{
                'accordion-active:bg-indigo-50 accordion-active:border-indigo-600':
                  activeIndex === index,
              }"
            >
              <button
                class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                @click="toggleAccordion(index)"
              >
                <h5 class="text-white text-2xl font-bold">
                  {{ item.question }}
                </h5>
                <svg
                  class="w-6 h-6 transition duration-500 text-blue-500"
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
                <p class="text-base text-white font-normal leading-6 pt-6">
                  {{ item.answer }}
                </p>
                <div class="flex items-center pt-[2rem] cursor-pointer">
                  <p class="text-white font-semibold">Learn More</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="pt-1 w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionItems: AccordionItem[] = [
  {
    question: "Freelancers",
    answer:
      "Keep your books in check, your clients happy, and your work on track.",
  },
  {
    question: "Solopreneurs",
    answer:
      "Keep your books in check, your clients happy, and your work on track. Invest in accounting software that respects your time so you can spend on it on building your business, not crunching numbers.",
  },
  {
    question: "Businesses with employees",
    answer:
      "Save time (and money !) by using Freshbooks to collaborate with your team while handling accounting, billing, and payroll.",
  },
  {
    question: "Businesses with contractors",
    answer:
      "Stay organized and informed about your daily operations, and keep everyone you work with on the same page.",
  },
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
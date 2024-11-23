<template>
  <h1 class="lg:text-6xl sm:text-5xl text-3xl text-center font-bold mt-[6rem]">
    Frequently Asked Questions
  </h1>
  <section class="pt-8 lg:mx-6 rounded-md">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="accordion-group">
        <div
          v-for="(item, index) in accordionItems"
          :key="index"
          class="accordion p-4 transition duration-500 lg:p-1 border-t border-b"
          :class="{
            'accordion-active:bg-indigo-50 accordion-active:border-indigo-600':
              activeIndex === index,
          }"
        >
          <button
            class="accordion-toggle py-4 sm:px-9 px-2 rounded-md group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500"
            @click="toggleAccordion(index)"
          >
            <h5 class="text-md text-blue-500 px-2">{{ item.question }}</h5>
            <svg
              class="sm:w-6 sm:h-6 w-12 h-5 transition duration-500"
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
            class="accordion-content w-full overflow-hidden pr-4 pb-12 rounded-bl-md rounded-br-md"
          >
            <p class="text-base font-normal leading-6 pt-6 px-8">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionItems: AccordionItem[] = [
  {
    question: "Does FreshBooks Really Track Mileage Automatically?",
    answer:
      "Absolutely! All you need to do is set up Mileage Tracking on the FreshBooks mobile app, then sit back and the app will log all your trips. You can classify each trip as business or personal, at your convenience.",
  },
  {
    question: "How Do I Get Mileage Tracking Reports?",
    answer:
      "You can either send the report to your email address directly from the mobile app or download the report from the Reports section on FreshBooks desktop.You can generate a mileage tracking report from the app as a CSV file by tapping the “More…” button at the bottom right, then tapping Mileage Tracking, then tapping the paper plane icon. From here, you can select the year to date, and then send a copy of the file to the email that’s associated with your FreshBooks account. It’s essentially a mileage expense report.",
  },
  {
    question: "How Much Does This Feature Cost? And Who Uses It?",
    answer:
      "Zero! The Mileage Tracker app is a free feature that is built-in with all our packages, including during the trial period. When it comes to business expenses, business mileage is essential to lowering your taxable income at tax time. Mileage trackers like FreshBooks mileage tracking app ensure you have a record of all business mileage.Whether you’re self-employed or not, we think this is the best mileage tracker out there. Everyone from real estate agents to rideshare drivers to home services use it to track mileage and create mileage reports. Keeping daily mileage logs on paper can get messy. Mileage tracking apps like FreshBooks Mileage Tracker lets you swipe left and right to sort logged trips as business or personal, it’s that easy. You’ll never miss out on tracking mileage or business deductions for work purposes again.",
  },
  {
    question: "How Does the Mileage Tracker App Work?",
    answer:
      "The FreshBooks mileage tracker app keeps a record of every time you drive your vehicle for business, whether it’s purchasing work supplies or meeting clients. The mileage is logged so it can then be submitted with your tax return for a tax deduction or reimbursement as a cost of running your business.You can set up your mileage tracker by clicking the “Try the New Mileage Tracking” button from your Dashboard. You can also tap the “More…” button at the bottom right and then select Mileage Tracking. You’ll be prompted to turn on Location Services, for which you can select “Allow While Using App”. You can read more about how to adjust your settings to use the mileage tracker here.Once you’ve enabled automatic mileage tracking, your trips will appear in the Unreviewed Trips tab. You can mark each trip as Personal or Business.",
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
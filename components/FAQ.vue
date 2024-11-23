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
          class="accordion p-4 transition duration-500 lg:p-4"
          :class="{
            'accordion-active:bg-indigo-50 accordion-active:border-indigo-600':
              activeIndex === index,
          }"
        >
          <button
            class="accordion-toggle bg-blue-50 py-4 sm:px-9 px-2 rounded-md group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:bg-blue-100"
            @click="toggleAccordion(index)"
          >
            <h5 class="text-md font-semibold px-2">{{ item.question }}</h5>
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
            class="accordion-content w-full overflow-hidden pr-4 bg-blue-50 pb-12 rounded-bl-md rounded-br-md"
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
    question: "What do I get in my 30-day free trial of FreshBooks?",
    answer:
      "During a trial, small business owners get access to all FreshBooks features except Advanced Payments (like FreshBooks invoicing, time tracking, and expensing). So you’ll know exactly why it’s the accounting software used by over 30 million business owners. That doesn’t mean your small business doesn’t get access to some online payment features, you can still craft time-saving workflows.But, once you sign up for a FreshBooks plan, check out our Advanced Payments feature, which includes recurring billing. Advanced Payments lets your small business accept credit cards online and accept payments like bank transfers, payments over the phone, and invoice-free payments with Checkout Links.Also, check out this article about how service-based businesses can make the most of a free 30-Day FreshBooks trial.",
  },
  {
    question: "Which FreshBooks plan is right for me?",
    answer:
      "At the end of your free 30-day FreshBooks trial, you get to choose a plan specifically built for small business owners. But which one is right for small businesses? How do you know which accounting software features are right for your small business, to save you time and get you paid faster?First off, you don’t need to worry about your business being interrupted when you transition from a free trial to a paid plan. FreshBooks plans are as follows:Lite Plan (add up to five clients)Plus Plan (our most popular plan)Premium Plan (lots of advanced features)Select Plan (a customizable plan for growing businesses)All of your information stays in your account.Want to know how much FreshBooks costs? We know every small business is different, which is why there are different plans to choose from. You can review them here. Our advice? Take a moment and take stock of:Where your small business is todayWhere you hope to grow your business in the next 6 monthsYour overall income and expensesThe features you need to help your business accomplish all its goalsDo you need business health reports?Do you need mobile mileage tracking?Read this article for even more information to help you choose the right FreshBooks plan for your business: Wondering Which FreshBooks Plan Will Be Right For You?",
  },
  {
    question: "What is accounting software?",
    answer:
      "Accounting software is a tool that allows you to track and manage the day-to-day finances of your businesses. It should allow you to create professional invoices, manage expense tracking, run double-entry accounting reports, accept online payments, and monitor all parts of your business’s money – both in and out.FreshBooks accounting software allows you to do all of this – and more. It includes invoicing features, expense tracking, time tracking, online payments, industry-standard double-entry accounting, balance sheets, mileage tracking, project profitability, bank reconciliation, client retainers, and the list goes on. It’s the reason we’re one of those most popular small business invoicing software – having been used by over 30 million people worldwide.All features are built to be easy to use for small business owners and their teams, clients, and accountants. Plus, as a cloud accounting software – your data is stored and ready to be accessed wherever you are in the world.Learn more about our accounting features here.",
  },
  {
    question: "How does FreshBooks work?",
    answer:
      "FreshBooks accounting software gives you instant access to the tools you need to manage your finances. It’s perfect for everyone from self-employed professionals to growing business owners.All you have to do is sign up for a FreshBooks account, add your business details, and you’re ready to go. From the FreshBooks dashboard, you can explore the invoicing features, add billable clients, choose to accept credit card payments with FreshBooks payments, run accounting reports, discover the project management tools, and a whole lot more.Plus, if you prefer to manage your business on the go with a mobile device, you can download the FreshBooks mobile app – and handle your accounting from anywhere.",
  },
  {
    question: "Does FreshBooks work on all of my devices?",
    answer:
      "FreshBooks works in any web browser on all your devices (desktop computer, laptop, tablet, or phone). There’s also a FreshBooks mobile app for both iPhone and Android, which includes mileage tracking.Do much more than just bill clients. Small businesses can run their business, create invoices, set up recurring invoices, log expenses, track financial data,  get paid online, track revenue streams, connect bank accounts, and easily create new customers in their account…all on the mobile app.Learn more about FreshBooks on mobile here.",
  },
  {
    question: "Does FreshBooks offer support to its customers?",
    answer:
      "FreshBooks offers small businesses amazing support. Our customer support team has won 11 Stevie Awards, which are international awards given out to the absolute best customer support department in the world. While we all think our support team is the best, they have the hardware to prove it. Get in touch with customer support here.We also have a massive help center that has answers to just about every question we’ve ever been asked by our customers. Check it out here.",
  },
  {
    question: "How do I work with my accountant on FreshBooks?",
    answer:
      "Invite up to 10 Accountants per business at no extra cost, on Plus and Premium plans. If your Accountant wants to learn more and familiarize themselves with FreshBooks’ accounting features, they can sign up for the Accounting Partner Program to become a FreshBooks certified partner, which comes with a bunch of cool benefits. If you don’t have an Accountant yet, reach out to us and we can help you get matched with one of our partners based on your geographical location, industry, and your accounting needs.If you’re not sure about things like accounts receivable, general ledger, balance sheets, or doing your business taxes, not to worry. Getting your accountant on board and working with you in FreshBooks can be done in just a few clicks.Learn more about working effectively with your accountant on FreshBooks in this great article.",
  },
  {
    question: "Can FreshBooks help me transfer my data?",
    answer:
      "Yes! It’s called Easy Switch, and you can chat with a specialist to learn about your options today.",
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
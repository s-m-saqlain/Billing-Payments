<template>
  <div class="bg-white w-full lg:rounded-tl-[200px] overflow-hidden mt-12">
    <p class="text-center sm:text-5xl text-3xl font-bold sm:pt-[6rem] pt-14">
      The <span class="text-blue-500">features</span> you need.
    </p>
    <p class="text-center sm:text-5xl text-3xl font-bold">All in one place.</p>
    <div class="lg:block hidden">
      <div class="flex justify-between items-center px-[72px]">
        <div
          class="flex justify-between cursor-pointer bg-[#FFF9E8] mt-12 gap-12 rounded-md w-[600px]"
        >
          <div class="px-6 pt-12">
            <p class="text-2xl font-bold">Invoicing</p>
            <p class="pt-4 font-normal text-[14px]">
              Create professional invoices in minutes. Automatically add tracked
              time and expenses, calculate taxes, and customize your payment
              options.
            </p>
            <div class="flex items-center cursor-pointer pt-5">
              <p class="font-bold text-[14px]">Learn about Invoicing</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
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
          <div class="relative z-10 py-[2rem] mr-14">
            <img
              src="~/assets/images/feature1.png"
              class="h-64 w-[900px] rounded-md shadow-md"
            />
            <img
              src="~/assets/images/feature2.png"
              class="absolute w-48 h-44 top-[6rem] left-[92px] shadow-md rounded-md"
            />
          </div>
        </div>
        <div
          class="flex justify-between items-center cursor-pointer bg-blue-500 mt-12 gap-12 rounded-md"
        >
          <div class="w-64">
            <p class="text-2xl font-bold text-white px-6">
              Billing and Payments
            </p>
            <p class="pt-4 font-normal text-[14px] w-64 text-white px-6">
              Bill fast, get paid even faster, and automate the rest with
              recurring invoices, online payments, and late payment reminders.
            </p>
            <div class="flex items-center cursor-pointer pt-5">
              <p class="font-bold text-[12px] text-white px-5">
                Learn about Billing and Payments
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6 text-white"
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
          <div class="py-[72px]">
            <img
              src="~/assets/images/feature3.png"
              class="h-44 w-48 rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center gap-5 px-[72px] pt-6">
        <div
          class="flex justify-between bg-[#EEF6FC] rounded-md w-96 h-96 cursor-pointer"
        >
          <div class="pt-14 px-8">
            <p class="text-2xl font-bold">Expenses</p>
            <p class="pt-4 font-normal text-[14px] w-44">
              Keep track of your expenses with mobile receipt scanning, bank
              account imports, and automated expense categorization.
            </p>
            <div class="flex items-center cursor-pointer pt-5">
              <p class="font-bold text-[14px]">Learn about Expenses</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
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
          <div class="relative z-10 py-[2rem]">
            <img src="~/assets/images/expenses.png" class="h-44" />
            <img
              src="~/assets/images/expenses.png"
              class="absolute h-44 top-[14rem] right-[2rem]"
            />
          </div>
        </div>
        <div class="bg-[#002D79] rounded-md w-96 h-96 px-10 cursor-pointer">
          <p class="text-2xl font-bold text-white pt-10">Accounting</p>
          <p class="pt-4 font-normal text-[14px] text-white">
            Know where you stand in real-time with double-entry accounting
            tools, powerful financial reports, and easy access for your
            accountant.
          </p>
          <div class="flex items-center cursor-pointer pt-5">
            <p class="font-bold text-[14px] text-white">
              Learn about Accounting
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5l7 7-7 7"
              />
            </svg>
          </div>
          <div class="relative">
            <img
              src="~/assets/images/accounting1.png"
              class="absolute inset-0 left-[8rem] top-6 w-44 shadow-md"
            />
            <img src="~/assets/images/accounting2.png" class="w-64 pt-14" />
          </div>
        </div>
        <div
          class="bg-[#FFC414] rounded-md w-96 h-96 px-10 cursor-pointer pt-12"
        >
          <img src="~/assets/images/logo.svg" class="w-8 shadow-lg" />
          <p class="text-3xl font-semibold pt-10">More features</p>
          <div class="flex flex-wrap justify-between">
            <div
              v-for="(group, index) in groupedItems"
              :key="index"
              class="w-full md:w-1/2 lg:w-1/1 mt-4"
            >
              <div
                v-for="item in group"
                :key="item.name"
                class="flex items-center cursor-pointer pt-3"
              >
                <p class="font-semibold text-[13px]">{{ item.name }}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-6 ml-2"
                >
                  <path
                    :d="item.iconPath"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div
            class="sm:flex justify-between cursor-pointer bg-[#FFF9E8] mt-12 rounded-md mx-8"
          >
            <div class="px-6 pt-8">
              <p class="text-2xl font-bold text-start">Invoicing</p>
              <p class="pt-4 font-normal text-[14px] text-start w-44">
                Create professional invoices in minutes. Automatically add
                tracked time and expenses, calculate taxes, and customize your
                payment options.
              </p>
              <div class="flex items-center cursor-pointer pt-5">
                <p class="font-bold text-[14px]">Learn about Invoicing</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
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
            <div class="relative z-10 py-[2rem] px-6">
              <img
                src="~/assets/images/featuretablet1.png"
                class="w-48 h-48 rounded-md shadow-lg"
              />
              <img
                src="~/assets/images/featuretablet2.png"
                class="absolute top-[7rem] left-[7rem] w-[8rem] shadow-lg rounded-md"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="sm:flex justify-between items-center cursor-pointer bg-blue-500 mt-12 gap-12 rounded-md mx-6"
          >
            <div class="">
              <p
                class="sm:text-2xl text-xl font-bold text-white px-6 sm:pt-0 pt-4"
              >
                Billing and Payments
              </p>
              <p class="pt-4 font-normal text-[17px] w-64 text-white px-6">
                Bill fast, get paid even faster, and automate the rest with
                recurring invoices, online payments, and late payment reminders.
              </p>
              <div class="flex items-center cursor-pointer pt-5">
                <p class="font-bold text-[12px] text-white px-5">
                  Learn about Billing and Payments
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
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
            <div class="pt-12">
              <img
                src="~/assets/images/feature3.png"
                class="sm:h-64 h-44 sm:w-64 rounded-md shadow-md sm:mx-0 mx-auto"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="sm:flex justify-between bg-[#EEF6FC] rounded-md cursor-pointer mt-12 mx-6"
          >
            <div class="pt-14 sm:px-8 px-6">
              <p class="text-2xl font-bold">Expenses</p>
              <p class="pt-4 font-normal text-[17px] sm:w-64">
                Keep track of your expenses with mobile receipt scanning, bank
                account imports, and automated expense categorization.
              </p>
              <div class="flex items-center cursor-pointer pt-5">
                <p class="font-bold text-[14px]">Learn about Expenses</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
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
            <div class="sm:block hidden">
              <div class="relative z-10 py-[2rem]">
                <img src="~/assets/images/expenses1.svg" class="h-44" />
                <img
                  src="~/assets/images/expenses.svg"
                  class="absolute h-44 top-[14rem] right-[2rem]"
                />
              </div>
            </div>
            <div class="sm:hidden">
              <div class="relative flex items-end mt-12">
                <img
                  src="~/assets/images/expenses1.svg"
                  class="ml-12 w-[6rem]"
                />
                <img
                  src="~/assets/images/expenses.svg"
                  class="absolute h-[182px] inset-0 w-[7rem] left-[8rem] top-[-2rem]"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-[#002D79] rounded-md px-10 cursor-pointer mt-12">
            <div class="sm:flex justify-between">
              <div>
                <p class="text-2xl font-bold text-white pt-10">Accounting</p>
                <p class="pt-4 font-normal text-[17px] text-white w-64">
                  Know where you stand in real-time with double-entry accounting
                  tools, powerful financial reports, and easy access for your
                  accountant.
                </p>
                <div class="flex items-center cursor-pointer pt-5">
                  <p class="font-bold text-[14px] text-white">
                    Learn about Accounting
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
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
              <div class="relative mt-[1rem]">
                <img
                  src="~/assets/images/feature4.png"
                  class="absolute inset-0 left-[6rem] top-6 w-44 shadow-md"
                />
                <img src="~/assets/images/feature5.png" class="w-64 pt-14" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "assets/css/style.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const modules = [Pagination];

interface MenuItem {
  name: string;
  iconPath: string;
}

const items = ref<MenuItem[]>([
  { name: "Orders", iconPath: "M12 5l7 7-7 7" },
  { name: "Invoices", iconPath: "M12 5l7 7-7 7" },
  { name: "Returns", iconPath: "M12 5l7 7-7 7" },
  { name: "Opening Stocks", iconPath: "M12 5l7 7-7 7" },
  { name: "Quotations", iconPath: "M12 5l7 7-7 7" },
  { name: "Sales Returns", iconPath: "M12 5l7 7-7 7" },
  { name: "Transfers", iconPath: "M12 5l7 7-7 7" },
  { name: "Bank Payments", iconPath: "M12 5l7 7-7 7" },
  { name: "Bank Receipts", iconPath: "M12 5l7 7-7 7" },
  { name: "Expense", iconPath: "M12 5l7 7-7 7" },
  // { name: "Opening Accounts", iconPath: "M12 5l7 7-7 7" },
  // { name: "Journal Vouchers", iconPath: "M12 5l7 7-7 7" },
  // { name: "Bank Transfer", iconPath: "M12 5l7 7-7 7" },
  // { name: "Party Ledger Report", iconPath: "M12 5l7 7-7 7" },
  // { name: "Ledger Report", iconPath: "M12 5l7 7-7 7" },
  // { name: "Stock Report", iconPath: "M12 5l7 7-7 7" },
  // { name: "Cutomers", iconPath: "M12 5l7 7-7 7" },
  // { name: "Suppliers", iconPath: "M12 5l7 7-7 7" },
  // { name: "Warehouses", iconPath: "M12 5l7 7-7 7" },
  // { name: "Categories", iconPath: "M12 5l7 7-7 7" },
  // { name: "Unit", iconPath: "M12 5l7 7-7 7" },
  // { name: "Material", iconPath: "M12 5l7 7-7 7" },
  // { name: "Brands", iconPath: "M12 5l7 7-7 7" },
  // { name: "Products", iconPath: "M12 5l7 7-7 7" },
  // { name: "Chart Of Accounts", iconPath: "M12 5l7 7-7 7" },
]);

const chunkSize = 5;
const groupedItems = ref<MenuItem[][]>([]);

groupedItems.value = items.value.reduce(
  (resultArray: MenuItem[][], item: MenuItem, index: number) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  },
  []
);
</script>

<style>
</style>
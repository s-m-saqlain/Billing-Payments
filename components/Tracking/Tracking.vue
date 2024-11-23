<template>
  <div
    class="bg-[#FFFAEA] sm:mt-[5rem] mt-12 lg:rounded-tr-[450px] lg:h-[200vh] sm:h-[210vh] h-[210vh] lg:rounded-bl-[450px]"
  >
    <div class="relative group pt-14">
      <div class="flex justify-center items-center cursor-pointer">
        <a
          href="#"
          class="block py-2 font-normal text-[#005DAB] font-semibold dark:text-white uppercase"
          >Mileage Tracking</a
        >
        <svg
          class="w-2.5 ms-1 mt-1.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      <div
        class="absolute left-0 hidden lg:mx-[40rem] sm:mx-[15rem] group-hover:block py-2 w-[320px] px-6 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
      >
        <div class="flex gap-12">
          <div>
            <NuxtLink to="/accounting">
              <p class="text-[16px] cursor-pointer">Accounting</p>
            </NuxtLink>
            <NuxtLink to="/bookkeeping">
              <p class="text-[16px] mt-1 cursor-pointer">Bookkeeping</p>
            </NuxtLink>
            <NuxtLink to="/timetracking">
              <p class="text-[16px] mt-1 cursor-pointer">Estimates</p>
            </NuxtLink>
            <NuxtLink to="/timetracking">
              <p class="text-[16px] mt-1 cursor-pointer">Invoicing</p>
            </NuxtLink>
            <NuxtLink to="/timetracking">
              <p class="text-[16px] mt-1 cursor-pointer">Mobile</p>
            </NuxtLink>
            <NuxtLink to="/timetracking">
              <p class="text-[16px] mt-1 cursor-pointer">Project</p>
            </NuxtLink>
            <NuxtLink to="/timetracking">
              <p class="text-[16px] mt-1 cursor-pointer">Reporting</p>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/expenses">
              <p class="text-[16px] mt-1 cursor-pointer">App Store</p>
            </NuxtLink>
            <NuxtLink to="/reports">
              <p class="text-[16px] mt-1 cursor-pointer">Clients</p>
            </NuxtLink>
            <NuxtLink to="/tracking">
              <p class="text-[16px] mt-1 cursor-pointer">Expenses</p>
            </NuxtLink>
            <NuxtLink to="/tracking">
              <p class="text-[16px] mt-1 cursor-pointer">Mileage Tracking</p>
            </NuxtLink>
            <NuxtLink to="/tracking">
              <p class="text-[16px] mt-1 cursor-pointer">Payments</p>
            </NuxtLink>
            <NuxtLink to="/tracking">
              <p class="text-[16px] mt-1 cursor-pointer">Proposals</p>
            </NuxtLink>
            <NuxtLink to="/tracking">
              <p class="text-[16px] mt-1 cursor-pointer">Time Tracking</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <h1 class="sm:block hidden text-center lg:text-6xl sm:text-5xl lg:font-bold sm:font-semibold mt-4">
      Never Miss a Trip With Our
    </h1>
    <h1 class="sm:block hidden text-center lg:text-6xl sm:text-5xl lg:font-bold sm:font-semibold pt-3">
      Automated Mileage Tracker App
    </h1>
    <h1 class="sm:hidden text-[#001B40] text-center text-3xl w-64 font-bold pt-3 mx-auto">
      Never Miss a Trip With Our Automated Mileage Tracker App
    </h1>
    <div class="flex justify-center items-center gap-2 mt-8">
      <p class="font-medium">Excellent</p>
      <img src="~/assets/images/fivestar.svg" />
        <p class="sm:block hidden text-[12.5px]">
          (Based on
          <NuxtLink to="" class="cursor-pointer hover:border-b border-black"
            >4,400 GetApp reviews</NuxtLink
          >)
        </p>
    </div>
    <p class="sm:hidden text-[12.5px] text-center">
          (Based on
          <NuxtLink to="" class="cursor-pointer hover:border-b border-black"
            >4,400 GetApp reviews</NuxtLink
          >)
        </p>
    <div class="flex justify-center mt-6">
      <button
        class="sm:bg-green-600 bg-[#36A900] text-white text-[24px] font-semibold sm:w-48 w-64 rounded-md py-3"
      >
        Try It Free
      </button>
    </div>
    <p class="text-center mt-2 text-[13.5px] text-gray-600 sm:font-normal font-medium">
      Try it Free for 30 Days! No credit card required. Cancel anytime.
    </p>
    <img
      src="~/assets/images/trackingmobile.png"
      class="lg:w-[63rem] sm:w-[42rem] sm:w-96 w-[18rem] mx-auto mt-[5rem]"
    />
    <p class="text-center font-medium lg:pt-12 pt-44">
      BUSINESS OWNERS LOVE FRESHBOOKS MILEAGE TRACKER APP
    </p>
    <div class="sm:flex justify-center gap-12 items-center mt-6 lg:mx-0 sm:mx-14">
      <div class="sm:w-64">
        <h1 class="sm:text-6xl text-4xl text-[#0075DD] font-semibold italic text-center">
          40hrs
        </h1>
        <p class="text-center text-[13.5px] text-gray-600 font-normal pt-2">
          Save up to 40 hours every year on filing taxes by using FreshBooks
        </p>
      </div>
      <div class="sm:w-64 sm:mt-0 mt-6">
        <h1 class="sm:text-6xl text-4xl text-[#0075DD] font-semibold italic text-center">
          28%
        </h1>
        <p class="text-center text-[13.5px] text-gray-600 font-normal pt-2">
          Filing taxes up to 28% faster by using FreshBooks accounting and tax
          features
        </p>
      </div>
      <div class="sm:w-64 sm:mt-0 mt-6">
        <h1 class="sm:text-6xl text-4xl text-[#0075DD] font-semibold italic text-center">
          553hrs
        </h1>
        <p class="text-center text-[13.5px] text-gray-600 font-normal pt-2">
          Save up to 553 hours a year with FreshBooks for accounting and
          invoicing
        </p>
      </div>
    </div>
  </div>
</template>
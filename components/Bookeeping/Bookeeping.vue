<template>
  <div
    class="bg-[#FFFAEA] sm:mt-[5rem] mt-12 lg:rounded-tr-[450px] lg:h-[200vh] sm:h-[210vh] h-[210vh] lg:rounded-bl-[450px]"
  >
    <div class="relative group pt-14">
      <div class="flex justify-center items-center cursor-pointer">
        <a
          href="#"
          class="block py-2 font-normal text-[#005DAB] font-semibold dark:text-white uppercase"
          >Bookkeeping</a
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
    <h1
      class="sm:block hidden text-center lg:text-6xl sm:text-5xl lg:font-bold sm:font-semibold mt-4"
    >
      Protect Your Profits and Your
    </h1>
    <h1
      class="sm:block hidden text-center lg:text-6xl sm:text-5xl lg:font-bold sm:font-semibold pt-3"
    >
      Time With Bookkeeping Services
    </h1>
    <h1
      class="sm:hidden text-[#001B40] text-center text-3xl w-64 font-bold pt-3 mx-auto"
    >
      Protect Your Profits and Your Time With Bookkeeping Services
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
        class="sm:bg-green-600 bg-[#36A900] text-white text-[24px] font-semibold sm:w-64 w-64 rounded-md py-3"
      >
        Talk to a Specialist
      </button>
    </div>
    <p
      class="text-center mt-2 text-[13.5px] text-gray-600 sm:font-normal font-medium"
    >
      Get 20% off Bench for your first 6 months
    </p>
    <img
      src="~/assets/images/bookeeping.png"
      class="lg:w-[63rem] sm:w-[42rem] sm:w-96 w-[18rem] mx-auto mt-[5rem]"
    />
    <div
      class="sm:flex justify-center lg:items-start sm:items-center lg:gap-14 sm:gap-4 mt-6 lg:mx-0 sm:mx-14 lg:mt-14"
    >
      <div>
        <p
          class="lg:w-[30rem] sm:w-full w-64 text-2xl text-[#2F445F] font-normal sm:mx-0 mx-auto"
        >
          Bench saves me at least two to four hours per month, which translates
          to between $3,600 to $7,200 worth of my time back to focus on building
          the business.
        </p>
        <p
          class="sm:block hidden text-[#2F445F] font-bold uppercase pt-10 text-[14px]"
        >
          Kahl Orr
        </p>
        <p
          class="sm:block hidden text-[#2F445F] font-bold uppercase pt-2 text-[14px]"
        >
          Founder, Rise Marketing Agency
        </p>
        <p
          class="sm:block hidden text-[#2F445F] font-bold uppercase text-[14px]"
        >
          Philadelphia, PA
        </p>
      </div>
      <img src="~/assets/images/rise.png" class="lg:block hidden w-64" />
      <img
        src="~/assets/images/risetablet.png"
        class="lg:hidden sm:block hidden w-[150px] h-[150px]"
      />
    </div>

    <div class="sm:hidden">
      <div class="flex gap-2 mt-14 w-64 mx-auto">
        <img src="~/assets/images/risetablet.png" class="w-[50px] h-[50px]" />
        <div>
          <p class="text-[#2F445F] uppercase text-[14px]">Kahl Orr</p>
          <p class="text-[#2F445F] uppercase text-[14px]">
            Founder, Rise Marketing Agency
          </p>
          <p class="text-[#2F445F] uppercase text-[14px]">Philadelphia, PA</p>
        </div>
      </div>
    </div>
  </div>
</template>
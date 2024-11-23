<template>
  <div class="sm:flex justify-center lg:gap-64 mt-12">
    <div class="flex lg:gap-12">
      <div class="lg:block hidden">
        <div class="rounded-full px-3 py-3 bg-[#4D9EE7]"></div>
        <div class="border-r-2 border-[#4D9EE7] h-[100vh] lg:mr-2.5"></div>
      </div>
      <div class="sm:w-96">
        <h1 class="lg:text-4xl text-3xl sm:text-start text-center lg:font-bold font-medium text-[#001B40]">
          Be Tax Compliant and Get Your Best Return
        </h1>
        <p class="pt-8 text-[18px] sm:text-start text-center">
          FreshBooks Mileage Tracking shows potential tax deductions for every
          business trip. Download accurate and ready-to-be-filed reports to
          deduct every mile and reduce your taxable income.
        </p>
        <button
          class="sm:block hidden lg:bg-green-500 sm:bg-[#36A900] text-white text-xl font-semibold rounded-md px-8 py-3 mt-10"
        >
          Try It Free
        </button>
        <div class="sm:hidden">
            <div class="flex justify-center">
                <button
          class="bg-[#36A900] text-white text-xl font-semibold w-64 rounded-md px-8 py-3 mt-10"
        >
          Try It Free
        </button>
            </div>
        </div>
      </div>
    </div>
    <img src="~/assets/images/taxmap.png" class="lg:w-96 sm:w-[22rem] w-64 sm:mx-0 mx-auto h-full sm:mt-0 mt-14" />
  </div>
</template>
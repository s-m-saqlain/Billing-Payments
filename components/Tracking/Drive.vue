<template>
  <div class="sm:flex justify-center lg:gap-64 sm:mt-44 mt-14">
    <div class="flex lg:gap-12">
      <div class="lg:block hidden">
        <div class="rounded-full px-3 py-3 bg-[#4D9EE7] mt-[4rem]"></div>
        <div class="border-r-2 border-[#4D9EE7] h-[100vh] lg:mr-2.5"></div>
      </div>
      <div class="w-96 mt-14">
        <h1
          class="lg:text-4xl text-3xl sm:text-start text-center lg:font-bold font-medium text-[#001B40]"
        >
          Log Trips as You Drive, Hands-Free
        </h1>
        <p class="pt-8 text-[18px] sm:text-start text-center">
          Every time your car moves in the name of business it’s an expense you
          can claim at tax time. FreshBooks Mileage Tracking automatically logs
          each trip and also saves your travel history.
        </p>
        <button
          class="sm:block hidden lg:bg-green-500 bg-[#36A900] text-white text-xl font-semibold rounded-md px-8 py-3 mt-10"
        >
          Try It Free
        </button>
        <div class="sm:hidden">
            <div class="flex justify-center">
                 <button
          class="lg:bg-green-500 bg-[#36A900] text-white text-xl font-semibold w-64 rounded-md px-8 py-3 mt-10"
        >
          Try It Free
        </button>
            </div>
        </div>
      </div>
    </div>
    <img
      src="~/assets/images/drivemap.png"
      class="lg:w-96 sm:w-[22rem] w-64 h-full sm:mx-0 mx-auto sm:mt-0 mt-14"
    />
  </div>
</template>
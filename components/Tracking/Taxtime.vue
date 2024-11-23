<template>
  <div class="bg-[#FFFAEA]">
    <div class="lg:flex justify-center gap-12 lg:mx-[10rem]">
      <img
        src="~/assets/images/taxtime.png"
        class="lg:block hidden lg:h-[85vh] lg:w-[66rem] sm:mt-0 mt-14"
      />
      <div class="lg:mx-0 sm:mx-14 mx-8 lg:py-0 sm:py-14">
        <h1
          class="sm:text-4xl text-2xl sm:font-bold font-medium sm:text-start text-center text-[#001B40] lg:pt-4 sm:pt-0 pt-14"
        >
          Resources to Help You Save More at Tax Time
        </h1>

        <!-- For Laptop and Tablet -->

        <div class="flex lg:justify-center sm:justify-between items-center sm:gap-44 gap-12 mt-8">
          <p class="text-gray-600 sm:w-44 w-20">
            Mileage Tracking For FreshBooks iOS and Android Apps
          </p>
          <button
            class="bg-[#FFFAEA] hover:bg-[#001B40] border-2 border-[#001B40] rounded-md text-[#001B40] text-[20px] font-bold hover:text-white sm:w-44 w-[8rem] h-12"
          >
            Read More
          </button>
        </div>

        <div class="flex lg:justify-center sm:justify-between items-center sm:gap-44 gap-12 mt-8">
          <p class="text-gray-600 sm:w-44 w-20">How to Claim Mileage on U.S. Taxes</p>
          <button
            class="bg-[#FFFAEA] hover:bg-[#001B40] border-2 border-[#001B40] rounded-md text-[#001B40] text-[20px] font-bold hover:text-white sm:w-44 w-[8rem] h-12"
          >
            Read More
          </button>
        </div>

        <div class="flex lg:justify-center sm:justify-between items-center sm:gap-44 gap-12 mt-8">
          <p class="text-gray-600 sm:w-44 w-20">
            Mileage Tracking For FreshBooks iOS and Android Apps
          </p>
          <button
            class="bg-[#FFFAEA] hover:bg-[#001B40] border-2 border-[#001B40] rounded-md text-[#001B40] text-[20px] font-bold hover:text-white sm:w-44 w-[8rem] h-12"
          >
            Read More
          </button>
        </div>

        <p
          class="text-xl font-bold mt-8 pt-3 leading-6 border-gray-300 border-t"
        >
          Get a newsletter that helps you think differently about your business
        </p>

        <div class="flex mt-4">
          <input
            type="email"
            placeholder="Email Address"
            class="py-2 px-2 border-gray-400 border-t border-b border-l rounded-tl-md rounded-bl-md"
          />
          <button
            class="bg-[#36A900] text-white font-medium w-24 rounded-tr-md rounded-br-md"
          >
            Subscribe
          </button>
        </div>
        <div class="flex gap-4">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            class=""
          />
          <p class="text-[11px] leading-3 font-medium pt-4 w-64">
            Yes, I would like FreshBooks to send me helpful tips on how to grow
            my business and let me know about offers and promotions.
          </p>
        </div>
        <p class="text-[11px] leading-3 font-medium pt-4 w-64">
          By clicking the button above I confirm that I have read and agree to
          the FreshBooks
          <NuxtLink to="/" class="border-gray-500 border-b text-blue-700"
            >privacy policy</NuxtLink
          >.
        </p>
        <!-- For Mobile -->

        <div class="sm:hidden">
          <div class="flex justify-center">
            <button
              class="mt-6 bg-[#FFFAEA] hover:bg-[#001B40] border-2 border-[#001B40] rounded-md text-[#001B40] text-[18px] font-bold hover:text-white w-64 py-3"
            >
              Talk to a Specialist
            </button>
          </div>
        </div>
      </div>
      <img
        src="~/assets/images/taxtime.png"
        class="lg:hidden lg:h-[85vh] lg:w-[66rem] sm:mt-0 mt-14"
      />
    </div>
  </div>
</template>
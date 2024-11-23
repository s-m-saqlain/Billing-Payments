<template>
  <div class="bg-[#FFFAEA]">
    <div class="lg:flex justify-center gap-12 lg:mx-[10rem]">
      <div class="lg:mx-0 sm:mx-14 mx-8 lg:py-0 sm:py-14">
        <h1
          class="sm:text-4xl text-2xl sm:font-bold font-medium sm:text-start text-center text-[#001B40] lg:pt-2 sm:pt-0 pt-14"
        >
          Have Lots of Clients and Want to Save on Transaction Fees?
        </h1>
        <p class="pt-4 text-gray-600 sm:text-start text-center">
          Our FreshBooks Select Plan could be the solution for you, saving you
          time and money.
        </p>
        <p class="text-[#001B40] font-bold my-8 sm:text-start text-center">
          The Select Plan includes:
        </p>
        <div class="flex gap-2">
          <p class="font-bold text-4xl">.</p>
          <p class="pt-5">
            Exclusive access to our Select Support and Onboarding teams to train
            your team and migrate your books from other platforms.
          </p>
        </div>
        <div class="flex gap-2 mt-1">
          <p class="font-bold text-4xl">.</p>
          <p class="pt-5">
            Access to lower credit card fees and transaction rates
          </p>
        </div>
        <div class="flex gap-2 mt-1">
          <p class="font-bold text-4xl">.</p>
          <p class="pt-5">2 free team member accounts</p>
        </div>

        <!-- For Laptop and Tablet -->

        <button
          class="sm:block hidden mt-6 bg-[#FFFAEA] hover:bg-[#001B40] border-2 border-[#001B40] rounded-md text-[#001B40] text-[18px] font-bold hover:text-white w-[14rem] py-3"
        >
          Talk to a Specialist
        </button>

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
        src="~/assets/images/transaction.png"
        class="lg:h-[60vh] lg:w-[52rem] sm:mt-0 mt-14"
      />
    </div>
  </div>
</template>
<template>
  <div class="bg-blue-900 bg-section bg-no-repeat sm:h-[75vh]">
    <div class="sm:flex justify-between items-center mt-14 pt-[4rem]">
      <div class="lg:px-12 sm:px-1">
        <h1
          class="text-white lg:text-6xl sm:text-5xl text-4xl sm:text-start text-center font-semibold"
        >
          Ready to get started?
        </h1>
        <div class="sm:block hidden">
          <div class="sm:flex sm:items-center sm:gap-5 pt-10">
            <button
              class="text-white text-2xl font-medium lg:w-64 sm:w-48 w-64 bg-green-700 rounded-md lg:py-3.5 py-2"
            >
              Buy Now & Save
            </button>
            <button
              class="text-white text-2xl font-medium lg:w-44 sm:w-[10rem] w-64 border-2 rounded-md lg:py-3 py-1.5 hover:bg-white hover:text-black sm:my-0 my-6"
            >
              Try It Free
            </button>
          </div>
        </div>
        <div class="sm:hidden mt-6">
          <div class="flex justify-center">
            <button
              class="text-white text-2xl font-medium lg:w-64 sm:w-48 w-64 bg-green-700 rounded-md lg:py-3.5 py-2"
            >
              Buy Now & Save
            </button>
          </div>
        </div>
        <div class="sm:hidden">
          <div class="flex justify-center">
            <button
              class="text-white text-2xl font-medium lg:w-44 sm:w-[10rem] w-64 border-2 rounded-md lg:py-3 py-1.5 hover:bg-white hover:text-black sm:my-0 my-6"
            >
              Try It Free
            </button>
          </div>
        </div>
      </div>
      <img src="~/assets/images/banner.png" class="lg:w-[35rem] sm:w-96" />
    </div>
  </div>
</template>
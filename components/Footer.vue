<template>
  <div
    class="sm:flex justify-between items-center sm:mx-7 mx-5 sm:mt-[7rem] mt-14"
  >
    <img src="~/assets/images/footerlogo.svg" class="w-44" />
    <form>
      <select
        ref="countries"
        class="sm:my-0 my-6 border-2 border-gray-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-48 p-2.5"
        @change="makeBold"
      >
        <option value="US">United States</option>
        <option value="AU">Australia</option>
        <option value="CA">Canada</option>
        <option value="EU">European Union</option>
        <option value="MX">Mexico</option>
        <option value="ZA">South Africa</option>
        <option value="UK">United Kingdom</option>
      </select>
    </form>
  </div>
  <div class="sm:block hidden border border-t sm:mt-8 sm:mx-8"></div>
  <div class="lg:block hidden">
    <div class="lg:flex lg:gap-12 sm:mx-8 sm:mt-10">
      <div v-for="section in sections" :key="section.title">
        <h2 class="text-xl font-bold">{{ section.title }}</h2>
        <div v-for="(item, index) in section.items" :key="index">
          <p
            class="pt-5 text-blue-500 cursor-pointer"
            :class="{ 'pt-5': index === 0 }"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:hidden">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-12 mx-8 mt-10"
    >
      <div v-for="section in sections" :key="section.title">
        <h2 class="text-xl font-bold">{{ section.title }}</h2>
        <div v-for="(item, index) in section.items" :key="index">
          <p
            class="pt-5 text-blue-500 cursor-pointer"
            :class="{ 'pt-5': index === 0 }"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="border border-t sm:mt-8 mx-8 sm:my-0 my-6"></div>
  <div class="flex justify-between items-center lg:mx-7 lg:my-7">
    <div class="lg:block hidden">
      <div class="flex justify-between items-center">
        <p>© 2024 FreshBooks</p>
        <div class="border border-l border-black lg:mx-3 lg:h-[14px]"></div>
        <div>Call Toll Free: 1-888-674-3175</div>
      </div>
    </div>
    <div class="sm:block hidden lg:mx-0 mx-auto">
      <div
        class="flex justify-between items-center gap-4 lg:mt-0 sm:mt-8 lg:mx-0 sm:mx-auto"
      >
        <img
          src="~/assets/images/appstore.png"
          class="sm:w-[9rem] cursor-pointer"
        />
        <img
          src="~/assets/images/googleplay.png"
          class="sm:w-[9rem] cursor-pointer"
        />
        <img
          src="~/assets/images/twitter.png"
          class="sm:w-[3rem] cursor-pointer"
        />
        <img
          src="~/assets/images/facebook.png"
          class="sm:w-[2rem] cursor-pointer"
        />
        <img
          src="~/assets/images/youtube.png"
          class="sm:w-[2rem] cursor-pointer"
        />
        <img
          src="~/assets/images/instagram.png"
          class="sm:w-[2rem] cursor-pointer"
        />
      </div>
    </div>
    <div class="sm:hidden mx-auto">
      <div class="flex justify-between items-center gap-4">
        <img
          src="~/assets/images/appstore.png"
          class="sm:w-[9rem] w-[7rem] cursor-pointer"
        />
        <img
          src="~/assets/images/googleplay.png"
          class="sm:w-[9rem] w-[7rem] cursor-pointer"
        />
      </div>
      <div class="flex justify-center items-center gap-2 mt-4">
        <img
          src="~/assets/images/twitter.png"
          class="sm:w-[3rem] w-[2rem] cursor-pointer"
        />
        <img
          src="~/assets/images/facebook.png"
          class="w-[2rem] cursor-pointer"
        />
        <img
          src="~/assets/images/youtube.png"
          class="w-[2rem] cursor-pointer"
        />
        <img
          src="~/assets/images/instagram.png"
          class="w-[2rem] cursor-pointer"
        />
      </div>
    </div>
  </div>
  <div class="lg:hidden sm:block hidden lg:my-0 sm:py-6">
    <div class="flex justify-center items-center gap-4">
      <p>© 2024 FreshBooks</p>
      <div class="border border-l border-black lg:mx-3 sm:h-[14px]"></div>
      <div>Call Toll Free: 1-888-674-3175</div>
    </div>
  </div>
  <div class="sm:hidden my-6">
    <p class="text-center">© 2024 FreshBooks</p>
    <div class="text-center">Call Toll Free: 1-888-674-3175</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const countries = ref<HTMLSelectElement | null>(null);

const makeBold = () => {
  if (countries.value) {
    // Loop through options and update the font-weight based on selection
    for (let i = 0; i < countries.value.options.length; i++) {
      countries.value.options[i].style.fontWeight = countries.value.options[i]
        .selected
        ? "bold"
        : "normal";
    }

    // Bold the displayed value after selection
    countries.value.style.fontWeight = "bold";
  }
};

const sections = ref([
  {
    title: "Features",
    items: [
      "About",
      "Our Story",
      "Careers",
      "Diversity and Inclusivity",
      "Press Center",
      "Contact",
      "Blog",
    ],
  },
  {
    title: "Product",
    items: [
      "Invoice Software",
      "Expenses and Receipts",
      "Accounting",
      "Time Tracking",
      "Managing Projects",
      "Estimating Software",
      "Online Payments",
      "Financial Reports",
      "Mobile Apps",
      "Pricing",
      "High volume Billing",
      "All FreshBooks Features",
    ],
  },
  {
    title: "Who It’s For",
    items: [
      "Freelancers",
      "Business With Contractors",
      "Business With Employees",
      "Self-Employed Professionals",
      "Accountants",
      "Construction",
      "IT and Technology",
      "Legal",
      "Marketing and Agencies",
      "Creative",
      "Professional Services",
    ],
  },
  {
    title: "Partners",
    items: [
      "Integrations",
      "Education",
      "Business With Employees",
      "Referral Program",
      "Affiliate Program",
      "Reseller Program",
      "Developers",
    ],
  },
  {
    title: "Helpful Links",
    items: [
      "Login",
      "Support",
      "Sitemap",
      "QuickBooks Alternative",
      "Support Webinars",
      "Accounting Software",
      "Invoice Template",
      "Accounting Templates",
      "Resource Hub",
      "Tools",
    ],
  },
  {
    title: "Policies",
    items: [
      "Accessibility",
      "Privacy Policy",
      "Terms of Service",
      "Security Safeguards",
    ],
  },
]);

// Make the default selected value bold when the component is mounted
onMounted(() => {
  makeBold();
});
</script>

<style scoped>
</style>
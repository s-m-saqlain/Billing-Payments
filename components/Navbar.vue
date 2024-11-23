<template>
  <nav
    class="fixed z-30 top-0 right-0 left-0 bg-blue-900 border-gray-200 dark:bg-gray-900"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 px-6"
    >
      <div class="flex justify-start items-center gap-2">
        <p class="text-bold text-white font-bold text-2xl">AlAzam</p>
        <p class="text-bold text-white font-bold text-xl">Traders</p>
      </div>
      <div class="lg:block hidden" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <div class="flex justify-between items-center gap-6">
            <li class="relative group">
              <div class="flex items-center cursor-pointer">
                <a
                  href="#"
                  class="block py-2 text-white font-normal dark:text-white"
                  >Features</a
                >
                <svg
                  class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
                class="absolute left-0 hidden group-hover:block mt-2 py-2 w-[800px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
              >
                <div class="flex justify-between">
                  <div>
                    <p>Bill and Get Paid</p>
                    <NuxtLink to="/invoice">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                      >
                        Invoicing
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/payments">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Payments
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/timetracking">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Time Tracking
                      </p>
                    </NuxtLink>
                  </div>
                  <div>
                    <p>Accounting & Taxes</p>
                    <NuxtLink to="/accounting">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                      >
                        Accounting
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/expenses">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Expenses and Receipts
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/reports">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Reports
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/tracking">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Mileage Tracking App
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/bookkeeping">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Bookkeeping
                      </p>
                    </NuxtLink>
                  </div>
                  <div>
                    <p>Client Communication</p>
                    <NuxtLink to="/project">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                      >
                        Project
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/proposals">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Proposals
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/estimates">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Estimates
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/clients">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Clients
                      </p>
                    </NuxtLink>
                  </div>
                  <div>
                    <p>Enable Your Team</p>
                    <NuxtLink to="/payroll">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                      >
                        Payroll
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/team">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        Team Management
                      </p>
                    </NuxtLink>
                    <p class="mt-2">Business Apps</p>
                    <NuxtLink to="/appstore">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                      >
                        AppStore
                      </p>
                    </NuxtLink>
                    <NuxtLink to="/apps">
                      <p
                        class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                      >
                        iOS & Android Apps
                      </p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group">
              <div class="flex items-center cursor-pointer">
                <a
                  href="#"
                  class="block py-2 text-white dark:text-white font-normal"
                  >Small Businesses</a
                >
                <svg
                  class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
                class="absolute left-0 hidden group-hover:block mt-2 py-2 w-[500px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
              >
                <div class="flex gap-12">
                  <div>
                    <p>Business Size</p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                    >
                      Freelancers
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Self-Employed Professional
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Businesses With Employees
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Businesses With Contractors
                    </p>
                  </div>
                  <div>
                    <p>Industry Types</p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                    >
                      Marketing & Agencies
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Creatives
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Construction & Trades
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Consulting
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      IT & Technology
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Legal
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Business & Prof. Services
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group">
              <div class="flex items-center cursor-pointer">
                <a
                  href="#"
                  class="block py-2 text-white dark:text-white font-normal"
                  >Accountants</a
                >
                <svg
                  class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
                class="absolute left-0 hidden group-hover:block mt-2 py-2 w-[300px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
              >
                <p
                  class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                >
                  Accounting Partner Program
                </p>
                <p
                  class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                >
                  Collaborative Accounting
                </p>
                <p
                  class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                >
                  Accountant Hub
                </p>
              </div>
            </li>
            <li class="relative group">
              <div class="flex items-center cursor-pointer">
                <a
                  href="#"
                  class="block py-2 text-white dark:text-white font-normal"
                  >Resources</a
                >
                <svg
                  class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
                class="absolute left-0 hidden group-hover:block mt-2 py-2 w-[500px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
              >
                <div class="flex justify-between">
                  <div>
                    <p>Learning</p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                    >
                      Blog
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Glossary
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Hub
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Reports Library
                    </p>
                  </div>
                  <div>
                    <p>Compare</p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                    >
                      Fresh Books Vs Quick Books
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Fresh Books Vs Honey Books
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Fresh Books Vs Wave
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Fresh Books Vs Xero
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Fresh Books Vs Xero
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative group">
              <div class="flex items-center cursor-pointer">
                <a
                  href="#"
                  class="block py-2 text-white dark:text-white font-normal"
                  >Pricing</a
                >
              </div>
            </li>
            <li class="relative group">
              <div class="flex items-center cursor-pointer">
                <a
                  href="#"
                  class="block py-2 text-white dark:text-white font-normal"
                  >Contact Us</a
                >
                <svg
                  class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
                class="absolute left-0 hidden group-hover:block mt-2 py-2 w-[200px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
              >
                <div class="flex justify-between">
                  <div>
                    <p>Support</p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                    >
                      Help Center
                    </p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      Contact Us
                    </p>
                    <hr class="my-4" />
                    <p>Contact Sale</p>
                    <p
                      class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                    >
                      1-888-674-3175
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div class="lg:block hidden">
        <div class="flex justify-center items-center gap-12 w-96">
          <p
            class="text-white font-semibold cursor-pointer hover:bg-white hover:text-black hover:rounded-md hover:py-2 w-22 hover:px-1"
          >
            Login
          </p>
          <p
            class="text-white font-semibold cursor-pointer bg-green-700 rounded-md px-3 py-2 hover:bg-green-800 w-full text-center"
          >
            Buy Now & Save
          </p>
          <p
            class="text-white font-semibold cursor-pointer hover:bg-white hover:text-black hover:rounded-md w-64 border text-center py-1 hover:bg-white hover:text-black rounded-md"
          >
            Try It Free
          </p>
        </div>
      </div>
      <div class="lg:hidden">
        <div class="flex justify-end items-center">
          <p
            class="sm:block hidden text-white font-semibold cursor-pointer bg-green-700 rounded-md px-3 py-2 hover:bg-green-800 w-full text-center"
          >
            Buy Now & Save
          </p>
          <button
            v-if="isMobileOrTablet"
            @click="toggleNavbar"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            :aria-expanded="isNavbarOpen"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        :class="[
          'lg:hidden fixed inset-y-0 right-0 w-full bg-gray-50 lg:bg-transparent transition-transform duration-300 ease-in-out transform',
          isNavbarOpen ? 'translate-x-0' : 'translate-x-full',
        ]"
        id="navbar-default"
      >
        <!-- Cancel button inside the navbar -->
        <div class="flex justify-end p-4 bg-blue-900 sm:px-12">
          <button
            @click="toggleNavbar"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul
          class="px-12 font-medium p-4 sm:mt-4 rtl:space-x-reverse md:mt-0 md:border-0 h-screen bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <p class="text-bold text-white font-bold text-xl bg-blue-900">
            FreshBooks
          </p>
          <li class="relative group sm:mt-12 mt-6">
            <div class="flex items-center cursor-pointer">
              <a
                href="#"
                class="block py-2 text-white font-normal dark:text-white"
                >Features</a
              >
              <svg
                class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
              class="sm:overflow-x-auto overflow-x-hidden sm:h-100 h-64 absolute left-0 hidden group-hover:block mt-2 py-2 sm:w-[700px] w-64 px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
            >
              <div class="sm:flex justify-between">
                <div>
                  <p>Bill and Get Paid</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Invoicing
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Payments
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Time Tracking
                  </p>
                </div>
                <div>
                  <p>Accounting & Taxes</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Accounting
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Expenses and Receipts
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Reports
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Mileage Tracking App
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Bookkeeping
                  </p>
                </div>
                <div>
                  <p>Client Communication</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Project
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Proposals
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Estimates
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Clients
                  </p>
                </div>
                <div>
                  <p>Enable Your Team</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Payroll
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Team Management
                  </p>
                  <p class="mt-2">Business Apps</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    AppStore
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    iOS & Android Apps
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group">
            <div class="flex items-center cursor-pointer">
              <a
                href="#"
                class="block py-2 text-white dark:text-white font-normal"
                >Small Businesses</a
              >
              <svg
                class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
              class="sm:overflow-x-auto overflow-x-hidden sm:h-100 h-44 absolute left-0 hidden group-hover:block mt-2 py-2 sm:w-[500px] w-64 px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
            >
              <div class="sm:flex gap-12">
                <div>
                  <p>Business Size</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Freelancers
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Self-Employed Professional
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Businesses With Employees
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Businesses With Contractors
                  </p>
                </div>
                <div>
                  <p>Industry Types</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Marketing & Agencies
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Creatives
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Construction & Trades
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Consulting
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    IT & Technology
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Legal
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Business & Prof. Services
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group">
            <div class="flex items-center cursor-pointer">
              <a
                href="#"
                class="block py-2 text-white dark:text-white font-normal"
                >Accountants</a
              >
              <svg
                class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
              class="absolute left-0 hidden group-hover:block mt-2 py-2 sm:w-[300px] w-[250px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
            >
              <p
                class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
              >
                Accounting Partner Program
              </p>
              <p
                class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
              >
                Collaborative Accounting
              </p>
              <p
                class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
              >
                Accountant Hub
              </p>
            </div>
          </li>
          <li class="relative group">
            <div class="flex items-center cursor-pointer">
              <a
                href="#"
                class="block py-2 text-white dark:text-white font-normal"
                >Resources</a
              >
              <svg
                class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
              class="sm:overflow-x-auto overflow-x-hidden sm:h-100 h-[150px] absolute left-0 hidden group-hover:block mt-2 py-2 sm:w-[500px] w-64 px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
            >
              <div class="sm:flex justify-between">
                <div>
                  <p>Learning</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Blog
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Glossary
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Hub
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Reports Library
                  </p>
                </div>
                <div>
                  <p>Compare</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Fresh Books Vs Quick Books
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Fresh Books Vs Honey Books
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Fresh Books Vs Wave
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Fresh Books Vs Xero
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Fresh Books Vs Xero
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group">
            <div class="flex items-center cursor-pointer">
              <a
                href="#"
                class="block py-2 text-white dark:text-white font-normal"
                >Pricing</a
              >
            </div>
          </li>
          <li class="relative group">
            <div class="flex items-center cursor-pointer">
              <a
                href="#"
                class="block py-2 text-white dark:text-white font-normal"
                >Contact Us</a
              >
              <svg
                class="w-1.5 ms-1 mt-1.5 text-gray-200"
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
              class="absolute left-0 hidden group-hover:block mt-2 py-2 w-[200px] px-12 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg"
            >
              <div class="flex justify-between">
                <div>
                  <p>Support</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-3 cursor-pointer"
                  >
                    Help Center
                  </p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    Contact Us
                  </p>
                  <hr class="my-4" />
                  <p>Contact Sale</p>
                  <p
                    class="text-blue-600 font-thin text-[15px] mt-1 cursor-pointer"
                  >
                    1-888-674-3175
                  </p>
                </div>
              </div>
            </div>
          </li>
          <div
            class="sm:flex justify-start items-center gap-12 w-100 mt-[8rem]"
          >
            <div class="flex sm:justify-between items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="w-5 h-5 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14c4.418 0 8-1.79 8-4V7a8 8 0 10-16 0v3c0 2.21 3.582 4 8 4z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14c-4.418 0-8 1.79-8 4v1c0 2.21 3.582 4 8 4s8-1.79 8-4v-1c0-2.21-3.582-4-8-4z"
                />
              </svg>
              <p
                class="text-white font-semibold cursor-pointer hover:bg-white hover:text-black hover:rounded-md hover:py-2 w-22 hover:px-1"
              >
                Login
              </p>
            </div>

            <p
              class="text-white font-semibold cursor-pointer bg-green-700 rounded-md px-3 py-2 sm:mt-0 mt-4 hover:bg-green-800 text-center"
            >
              Buy Now & Save
            </p>
            <p
              class="text-white font-semibold cursor-pointer hover:bg-white hover:text-black hover:rounded-md border text-center py-2 px-4 sm:mt-0 mt-4 hover:bg-white hover:text-black rounded-md"
            >
              Try It Free
            </p>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
  <script setup lang="ts">
import logo from "~/assets/images/logo.svg";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isNavbarOpen = ref(false);
const isMobileOrTablet = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

const checkScreenSize = () => {
  const width = window.innerWidth;
  isMobileOrTablet.value = width < 1024;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>
  
  
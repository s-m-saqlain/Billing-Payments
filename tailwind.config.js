/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section': "url('~/assets/images/section.svg')",
        'freshbook': "url('~/assets/images/freshbooks.jpeg')",
        'freshbooktablet': "url('~/assets/images/freshbookstablet.jpeg')",
        'freshbookmobile': "url('~/assets/images/freshbooksmobile.jpeg')",
        'f': "url('~/assets/images/f.svg')",
        'f1': "url('~/assets/images/f1.svg')"
      },
    },
  },
  plugins: [],
}


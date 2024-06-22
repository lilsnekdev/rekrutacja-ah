export default {
  ssr: false,
  head: {
    title: "rekrutacja-ah",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
      },
    ],
  },
  css: ["@/assets/css/tailwind.css"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/proxy"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api/": {
      target: "http://chuck.animalhotels.com",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },
  build: {},
};

// import { defineConfig } from 'cypress'

// export default defineConfig({
//   e2e: {
//     baseUrl: 'https://apres-ski-fe.vercel.app/',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },

//   component: {
//     devServer: {
//       framework: 'react',
//       bundler: 'vite',
//     },
//   },
// })



import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'https://apres-ski-fe.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)

      return config
    },
  },
})
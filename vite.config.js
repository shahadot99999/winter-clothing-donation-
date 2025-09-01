import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// console.log("VITE_a from env:", process.env.VITE_a);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'

// // Load variables from .env (or .env.local)
// dotenv.config()

// console.log("Loaded VITE_a:", process.env.VITE_a) // should show "shahadot"

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     // Expose env variable to client
//     'import.meta.env.VITE_a': JSON.stringify(process.env.VITE_a),
//   },
// })

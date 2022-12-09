import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/api': 'http://http.ntlm.internetpsa.inetpsa.com:8080',
  // }}

});

// module.exports = {
//   proxy: {
//     "/api": "http://http.ntlm.internetpsa.inetpsa.com:8080"
//   }
// };


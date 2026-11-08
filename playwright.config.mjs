import { defineConfig } from '@playwright/test';
export default defineConfig({
 testDir:'./tests',timeout:30000,retries:1,workers:1,
 use:{baseURL:'http://127.0.0.1:8080',browserName:'chromium',locale:'en-AU',trace:'retain-on-failure'},
 reporter:[['line'],['html',{open:'never'}]],
 webServer:{command:'python3 -m http.server 8080 --bind 127.0.0.1',url:'http://127.0.0.1:8080',reuseExistingServer:!process.env.CI}
});

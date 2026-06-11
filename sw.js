const CACHE_NAME = 'aztomiq-v1.5.2';
const IS_DEV = false;
  const STATIC_ASSETS = [
  './',
  './manifest.json',
  './assets/css/global.css',
  './assets/js/global.js',
      './vi/',
            './vi/index.html',
            './en/',
            './en/index.html',
            './assets/features/blog/style.css',
            './vi/blog/',
            './en/blog/',
            './assets/features/bmi/logic.js',
            './assets/features/bmi/logic.test.js',
            './assets/features/bmi/script.js',
            './assets/features/bmi/style.css',
            './vi/bmi/',
            './en/bmi/',
            './assets/features/bookmark-creator/script.js',
            './assets/features/bookmark-creator/style.css',
            './vi/bookmark-creator/',
            './en/bookmark-creator/',
            './assets/features/business-tax/logic.js',
            './assets/features/business-tax/logic.test.js',
            './assets/features/business-tax/script.js',
            './assets/features/business-tax/style.css',
            './vi/business-tax/',
            './en/business-tax/',
            './assets/features/compound-interest/logic.js',
            './assets/features/compound-interest/logic.test.js',
            './assets/features/compound-interest/script.js',
            './assets/features/compound-interest/style.css',
            './vi/compound-interest/',
            './en/compound-interest/',
            './assets/features/cron-parser/script.js',
            './assets/features/cron-parser/style.css',
            './vi/cron-parser/',
            './en/cron-parser/',
            './assets/features/dap-heo/script.js',
            './assets/features/dap-heo/style.css',
            './vi/dap-heo/',
            './assets/features/date-time-master/script.js',
            './assets/features/date-time-master/style.css',
            './vi/date-time-master/',
            './en/date-time-master/',
            './assets/features/date-toolkit/script.js',
            './assets/features/date-toolkit/style.css',
            './vi/date-toolkit/',
            './en/date-toolkit/',
            './assets/features/dev-memes/script.js',
            './assets/features/dev-memes/style.css',
            './vi/dev-memes/',
            './en/dev-memes/',
            './vi/dev-toolkit/',
            './en/dev-toolkit/',
            './assets/features/freelancer-tax/logic.js',
            './assets/features/freelancer-tax/logic.test.js',
            './assets/features/freelancer-tax/script.js',
            './assets/features/freelancer-tax/style.css',
            './vi/freelancer-tax/',
            './en/freelancer-tax/',
            './assets/features/glassmorphism-generator/script.js',
            './assets/features/glassmorphism-generator/style.css',
            './vi/glassmorphism-generator/',
            './en/glassmorphism-generator/',
            './assets/features/hash-toolkit/script.js',
            './assets/features/hash-toolkit/style.css',
            './vi/hash-toolkit/',
            './en/hash-toolkit/',
            './assets/features/inflation-calculator/logic.js',
            './assets/features/inflation-calculator/logic.test.js',
            './assets/features/inflation-calculator/script.js',
            './assets/features/inflation-calculator/style.css',
            './vi/inflation-calculator/',
            './en/inflation-calculator/',
            './assets/features/investment-calc/logic.js',
            './assets/features/investment-calc/logic.test.js',
            './assets/features/investment-calc/script.js',
            './assets/features/investment-calc/style.css',
            './vi/investment-calc/',
            './en/investment-calc/',
            './assets/features/json-toolkit/script.js',
            './assets/features/json-toolkit/style.css',
            './vi/json-toolkit/',
            './en/json-toolkit/',
            './assets/features/jwt-toolkit/script.js',
            './assets/features/jwt-toolkit/style.css',
            './vi/jwt-toolkit/',
            './en/jwt-toolkit/',
            './assets/features/li-xi/script.js',
            './vi/li-xi/',
            './assets/features/loan-calculator/logic.js',
            './assets/features/loan-calculator/logic.test.js',
            './assets/features/loan-calculator/script.js',
            './assets/features/loan-calculator/style.css',
            './vi/loan-calculator/',
            './en/loan-calculator/',
            './assets/features/lorem-ipsum/script.js',
            './assets/features/lorem-ipsum/style.css',
            './vi/lorem-ipsum/',
            './en/lorem-ipsum/',
            './assets/features/lucky-wheel/script.js',
            './vi/lucky-wheel/',
            './assets/features/lunar-calendar/script.js',
            './assets/features/lunar-calendar/style.css',
            './vi/lunar-calendar/',
            './assets/features/ot-calculator/logic.js',
            './assets/features/ot-calculator/logic.test.js',
            './assets/features/ot-calculator/script.js',
            './assets/features/ot-calculator/style.css',
            './vi/ot-calculator/',
            './en/ot-calculator/',
            './assets/features/password-generator/script.js',
            './assets/features/password-generator/style.css',
            './vi/password-generator/',
            './en/password-generator/',
            './assets/features/percentage-calculator/logic.js',
            './assets/features/percentage-calculator/logic.test.js',
            './assets/features/percentage-calculator/script.js',
            './assets/features/percentage-calculator/style.css',
            './vi/percentage-calculator/',
            './en/percentage-calculator/',
            './assets/features/qr-generator/script.js',
            './assets/features/qr-generator/style.css',
            './vi/qr-generator/',
            './en/qr-generator/',
            './assets/features/racing-horse/script.js',
            './vi/racing-horse/',
            './assets/features/random-toolkit/script.js',
            './assets/features/random-toolkit/style.css',
            './vi/random-toolkit/',
            './en/random-toolkit/',
            './assets/features/salary-tax-master/script.js',
            './assets/features/salary-tax-master/style.css',
            './vi/salary-tax-master/',
            './en/salary-tax-master/',
            './assets/features/savings-interest/logic.js',
            './assets/features/savings-interest/logic.test.js',
            './assets/features/savings-interest/script.js',
            './assets/features/savings-interest/style.css',
            './vi/savings-interest/',
            './en/savings-interest/',
            './assets/features/social-insurance/logic.js',
            './assets/features/social-insurance/logic.test.js',
            './assets/features/social-insurance/script.js',
            './assets/features/social-insurance/style.css',
            './vi/social-insurance/',
            './en/social-insurance/',
            './assets/features/tax/logic.js',
            './assets/features/tax/logic.test.js',
            './assets/features/tax/script.js',
            './assets/features/tax/style.css',
            './vi/tax/',
            './assets/features/text-diff/script.js',
            './assets/features/text-diff/style.css',
            './vi/text-diff/',
            './en/text-diff/',
            './assets/features/text-formatter/script.js',
            './assets/features/text-formatter/style.css',
            './vi/text-formatter/',
            './en/text-formatter/',
            './assets/features/timestamp-converter/script.js',
            './assets/features/timestamp-converter/style.css',
            './vi/timestamp-converter/',
            './en/timestamp-converter/',
            './assets/features/unit-converter/logic.js',
            './assets/features/unit-converter/logic.test.js',
            './assets/features/unit-converter/script.js',
            './assets/features/unit-converter/style.css',
            './vi/unit-converter/',
            './en/unit-converter/',
            './assets/features/url-toolkit/script.js',
            './assets/features/url-toolkit/style.css',
            './vi/url-toolkit/',
            './en/url-toolkit/',
            './assets/features/uuid-generator/script.js',
            './assets/features/uuid-generator/style.css',
            './vi/uuid-generator/',
            './en/uuid-generator/',
            './assets/features/web-playground/script.js',
            './assets/features/web-playground/style.css',
            './vi/web-playground/',
            './en/web-playground/',
            './assets/features/word-counter/logic.js',
            './assets/features/word-counter/logic.test.js',
            './assets/features/word-counter/script.js',
            './assets/features/word-counter/style.css',
            './vi/word-counter/',
            './en/word-counter/'
                  ];

          // Install Event
          self.addEventListener('install', (e) => {
          if (IS_DEV) {
          self.skipWaiting();
          return;
          }
          console.log('[SW] Installing...');
          e.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
          console.log('[SW] Caching App Shell (Resilient Mode)');
          const cachePromises = STATIC_ASSETS.map(url => {
          return fetch(url).then(response => {
          if (!response.ok) {
          console.warn(`[SW] Skip caching missing file: ${url}`);
          return;
          }
          return cache.put(url, response);
          }).catch(err => {
          console.warn(`[SW] Cache fail for ${url}:`, err);
          });
          });
          return Promise.all(cachePromises);
          })
          );
          self.skipWaiting();
          });

          // Activate Event
          self.addEventListener('activate', (e) => {
          console.log('[SW] Activating...');
          e.waitUntil(
          caches.keys().then((keys) =>
          Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
          )
          )
          );
          self.clients.claim();
          });

          // Fetch Event
          self.addEventListener('fetch', (e) => {
          if (IS_DEV) return; // Skip cache in dev mode

          const url = new URL(e.request.url);

          // 1. Bypass Service Worker for external tracking/insights (like Vercel) to prevent network failure loops
          if (url.hostname.includes('vercel.com') || url.hostname.includes('_vercel') ||
          url.pathname.includes('/insights/')) {
          return;
          }

          // 2. Bypass Service Worker for dynamic API routes
          if (url.pathname.startsWith('/api/')) {
          return;
          }

          if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
          return;
          }

          e.respondWith(
          caches.open(CACHE_NAME).then(async (cache) => {
          const cachedResponse = await cache.match(e.request);
          if (cachedResponse) return cachedResponse;

          try {
          const networkResponse = await fetch(e.request);
          // Prevent caching partial content (206) which causes errors
          if (networkResponse && networkResponse.ok && networkResponse.status !== 206) {
          cache.put(e.request, networkResponse.clone());
          } else if (!networkResponse) {
          // Fallback if fetch returns nothing
          return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
          }
          return networkResponse;
          } catch (err) {
          console.warn('[SW] Network fail:', err);
          // Return a safe fallback response instead of undefined/null
          return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
          }
          })
          );
          });
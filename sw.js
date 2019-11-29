let cacheName = 'ahs.app-01'
let cacheURLs = [
 'index.html',
 'assets/calendar.json',
 'assets/globe.svg',
 'ibm-plex/sans-variable.woff2',
 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC6G_LCSmfd9q34BMao87E0g',
 'https://www.youtube-nocookie.com/embed/videoseries?list=PL07a5R_B4sI7cZtG4nhbpNbknXayBvVJo&amp;index=0',
 'https://www.youtube-nocookie.com/embed/videoseries?list=PL07a5R_B4sI7cZtG4nhbpNbknXayBvVJo&amp;index=1',
 'https://www.youtube-nocookie.com/embed/videoseries?list=PL07a5R_B4sI7cZtG4nhbpNbknXayBvVJo&amp;index=2',
 'https://www.youtube-nocookie.com/embed/videoseries?list=PL07a5R_B4sI7cZtG4nhbpNbknXayBvVJo&amp;index=3',
 'https://rss.bloople.net/?url=https%3A%2F%2Ftheapachepowwow.net%2Ffeed&amp;showtitle=false&amp;type=js',
 'https://platform.twitter.com/widgets.js'
]

self.addEventListener('install', (e) => {
   e.waitUntil(caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheURLs)
   }))
})

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => {
    if(response)
      return response
    else
      return fetch(e.request)
   }))
})
const BASE=new URL('./',self.location.href),PREFIX='shun:'+BASE.pathname+':',CACHE=PREFIX+"shun-index-DT9U7Xd4.css|index-DR0FdSWd.js|chart.worker-Ccx-cFjV.js", ASSETS=["","index.html","manifest.webmanifest","icon.svg","index-DT9U7Xd4.css","index-DR0FdSWd.js","chart.worker-Ccx-cFjV.js"].map(x=>new URL(x,BASE).href);
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==BASE.origin||!u.pathname.startsWith(BASE.pathname)||u.pathname.startsWith('/api/'))return;
 if(e.request.mode==='navigate'){
   e.respondWith(fetch(e.request).then(r=>{if(!r.ok)throw new Error('offline');return r;}).catch(()=>caches.open(CACHE).then(c=>c.match(new URL('index.html',BASE).href))));return;
 }
 e.respondWith(caches.open(CACHE).then(async c=>{
   const saved=await c.match(e.request);if(saved)return saved;
   const response=await fetch(e.request);
   if(response.ok&&u.pathname.startsWith(BASE.pathname+'assets/')&&!response.headers.get('content-type')?.includes('text/html'))await c.put(e.request,response.clone());
   return response;
 }));
});
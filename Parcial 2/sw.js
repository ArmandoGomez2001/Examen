self.addEventListener('install', event => {
    console.log("Instalando service worker")
    const installing = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Instalacion finalizada")
        }, 1000);
        self.skipWaiting();
        resolve();
    })
    event.waitUntil(installing)
})

self.addEventListener('activate', event => {
    console.log("Service Worker is active")
})

self.addEventListener('fetch', event => {
    console.log(event.request.url)
    const url = new URL(event.request.url);
    if (url.pathname.startsWith('/img/')) {
      event.respondWith(fetch('http://127.0.0.1:8080/img/NFL-logo.png'));
    } else if (url.pathname === '/todos') {
      event.respondWith(responderPendientes(event.request));
    }
  });
  
  async function responderPendientes(request) {
    const response = await fetch(request);
    const data = await response.json();
    const dataModificado = data.map(pendiente => {
      return {
        ...pendiente,
        id: `${pendiente.id} @`,
      };
    });
    return new Response(JSON.stringify(dataModificado), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
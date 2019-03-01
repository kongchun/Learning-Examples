self.importScripts('global.js');
self.addEventListener('message', (e) => {
    if (e.data === 'calc') {
        self.postMessage(calc());
    }
})
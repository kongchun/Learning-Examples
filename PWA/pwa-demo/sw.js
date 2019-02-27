//ServiceWorkerGlobalScope.self
self.importScripts('js/data.js');

//缓存版本号
const version = 'v1';
//app shell
const appShellList = [
    '/pwa-demo/',
    '/pwa-demo/index.html',
    '/pwa-demo/images/placeholder.jpg',
    '/pwa-demo/images/web.png',
    '/pwa-demo/js/app.js',
    '/pwa-demo/js/data.js',
    '/pwa-demo/pwa-demo.webmanifest'
];

//需要缓存的列表
let cacheList = imageData.concat(appShellList);

//install事件
self.addEventListener('install', (e) => {
    console.log('Service Worker installing...');
    //等待异步方法完成 入参是一个Promise
    e.waitUntil(
        //caches是一个全局的CacheStorage对象
        caches.open(version).then((cache) => {
            return cache.addAll(cacheList);
        })
    );
    console.log('Service Worker cached all.');
});

//fetch事件
self.addEventListener('fetch', (e) => {
    console.log('Service Worker fetching...');
    //拦截请求 自定义响应
    e.respondWith(
        (async () => {
            let response = await caches.match(e.request);
            if (!response) {
                //如果缓存中不存在相符则重新请求
                response = await fetch(e.request);
                //并存入缓存
                let cache = await caches.open(version);
                await cache.put(e.request, response.clone());
                console.log(`Service Worker cached missing resource: ${e.request.url}`);
            }
            return response;
        })()
    );
});

//activate事件
self.addEventListener('activate', (e) => {
    //在service worker生效时触发 触发激活实际上其它所有版本的service worker都已经冗余了
    console.log('Service Worker activate triggered.');
    e.waitUntil(
        (async () => {
            let keyList = await caches.keys();
            return Promise.all(
                keyList.map(async (key) => {
                    if (version !== key) {
                        //删除其它所有版本缓存
                        let result = await caches.delete(key);
                        console.log('Service Worker deleted cache: ' + key);
                        return result;
                    }
                })
            )
        })()
    )
});

//push事件
self.addEventListener('push', (e) => {
    //获取后台推送的内容 不一定非得是文本 这里只是例子
    let payload = e.data ? e.data.text() : 'no payload';
    e.waitUntil(
        self.registration.showNotification('Push Demo', {
            body: payload,
        })
    );
});

//sync事件 Chrome独有
self.addEventListener('sync', (e) => {
    console.log(e.tag);
    //比较sync的标签 用于区分不同业务
    if (e.tag === syncTag) {
        e.waitUntil(
            (async () => {
                let res = await fetch('/push-server/sync');
                let data = await res.text();
                self.registration.showNotification('Sync Demo', {
                    body: data,
                });
            })()
        );
    } else {
        console.log('Sync tag does not match, skipped.');
    }
});

//message事件
self.addEventListener('message', async (e) => {
    if (e.data === 'calc') {
        let result = calc();
        //获取WindowClient
        let clientList = await self.clients.matchAll();
        clientList.forEach((client) => {
            client.postMessage(result);
        });
    }
});
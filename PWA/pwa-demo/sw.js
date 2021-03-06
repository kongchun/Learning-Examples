//ServiceWorkerGlobalScope.self
self.importScripts('js/global.js');

//缓存版本号
const version = 'v1';
//app shell
const appShellList = [
    './',
    'index.html',
    'images/placeholder.jpg',
    'images/web.png',
    'js/app.js',
    'js/global.js',
    'js/worker.js',
    'pwa-demo.webmanifest'
];

//install事件
self.addEventListener('install', (e) => {
    console.log('Service Worker installing...');
    //等待异步方法完成 入参是一个Promise
    e.waitUntil(
        //caches是一个全局的CacheStorage对象
        caches.open(version).then((cache) => {
            return cache.addAll(appShellList);
        })
    );
    //跳过等待直接激活
    //self.skipWaiting();
    console.log('Service Worker cached app shell.');
});

//fetch事件
self.addEventListener('fetch', (e) => {
    if (!e.request.url.includes('/push-server/')) {
        console.log('Service Worker fetching...');
        //拦截请求 自定义响应
        e.respondWith(
            (async () => {
                let response = await caches.match(e.request);
                if (!response) {
                    //如果缓存中不存在相符则重新请求
                    response = await fetch(e.request, {
                        cache: "reload"
                    });
                    //并存入缓存
                    if (response.ok) {
                        let cache = await caches.open(version);
                        await cache.put(e.request, response.clone());
                        console.log(`Service Worker cached missing resource: ${e.request.url}`);
                    }
                }
                return response;
            })()
        );
    }
});

//activate事件
self.addEventListener('activate', (e) => {
    //在service worker生效时触发 触发激活实际上其它所有版本的service worker都已经冗余了
    console.log('Service Worker activate triggered.');
    e.waitUntil(
        (async () => {
            //声明接管所有客户端
            await self.clients.claim();
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
            );
        })()
    )
});

//notificationclick事件
self.addEventListener('notificationclick', (e) => {
    console.log(`Notification "${e.notification.title}" clicked.`);
});
//notificationclose事件
self.addEventListener('notificationclose', (e) => {
    console.log(`Notification "${e.notification.title}" closed.`);
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

//pushsubscriptionchange事件 实际上指的是各种原因导致订阅丢失
self.addEventListener('pushsubscriptionchange', (e) => {
    console.log('Push Subscription Changed.');
    e.waitUntil(
        (async () => {
            try {
                //重新获取公钥
                let res = await fetch('/push-server/getKey');
                let publicKey = await res.arrayBuffer();
                //订阅
                let subscription = await self.registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: publicKey
                });
                console.log(subscription.toJSON());
            } catch (e) {
                console.warn(e.message);
            }
        })()
    );
})

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
self.addEventListener('message', e => {
    if (hiText === e.data) { //通过MessageChannel
        e.ports[0].postMessage('hi from sw');
    } else if (helloText === e.data) { //通过ServiceWorker本身
        e.source.postMessage('hello to source'); //找到源发送消息
        self.clients.matchAll().then((clientList) => {
            for (let client of clientList) {
                client.postMessage('hello from sw'); //广播给所有客户端
            }
        });
    }
});
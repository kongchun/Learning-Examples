//生成内容模板 简单的img标签 先显示placeholder tmp存入来自data.js的实际路径
let content = '';
for (let path of imageData) {
    content += `<div class="img-container"><img src="/pwa-demo/images/placeholder.jpg" tmp="${path}"/></div>`;
}
document.querySelector('#content').innerHTML = content;

//注册Service Worker
document.querySelector('#register').addEventListener('click', async () => {
    await navigator.serviceWorker.register('/pwa-demo/sw.js');
    console.log('Service Worker registered.');
});

//取消注册当前域下所有Service Worker
document.querySelector('#unregister').addEventListener('click', async () => {
    let registrations = await navigator.serviceWorker.getRegistrations();
    console.log('Unregistering all service worker...');
    for (let reg of registrations) {
        reg.unregister();
    }
});

//清除当前欲下所有缓存
document.querySelector('#clear').addEventListener('click', async () => {
    let keyList = await caches.keys();
    console.log('Clearing all caches...');
    for (let key of keyList) {
        caches.delete(key);
    }
});

//生成一个通知样例
document.querySelector('#notification').addEventListener('click', async () => {
    let result = await Notification.requestPermission();
    if (result === 'granted') {
        new Notification('Notification Demo', {
            body: 'Hello, World!',
            icon: '/pwa-demo/images/web.png'
        });
    }
});

//订阅发布服务 这里实际上只兼容Firefox 因为Mozilla Autopush最接近标准
document.querySelector('#subscribe').addEventListener('click', async () => {
    try {
        let registration = await navigator.serviceWorker.ready;
        //从服务端获取公钥
        let res = await fetch('/push-server/getKey');
        let publicKey = await res.arrayBuffer();
        //订阅
        let subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true, //总是显示通知
            applicationServerKey: publicKey
        });
        console.log(subscription.toJSON());
    } catch (e) {
        console.warn(e.message);
    }
});

//触发一次推送
document.querySelector('#push').addEventListener('click', async () => {
    try {
        let registration = await navigator.serviceWorker.ready;
        let subscription = await registration.pushManager.getSubscription();
        //发出推送请求
        let res = await fetch('/push-server/push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscription.toJSON())
        });
        let data = await res.text();
        console.log(data);
    } catch (e) {
        console.warn(e.message);
    }
});

//取消当前订阅
document.querySelector('#unsubscribe').addEventListener('click', async () => {
    try {
        let registration = await navigator.serviceWorker.ready;
        let subscription = await registration.pushManager.getSubscription();
        await subscription.unsubscribe();
        console.log('Unsubscribed.');
    } catch (e) {
        console.warn(e.message);
    }
});

//点击按钮触发同步
document.querySelector('#sync').addEventListener('click', triggerSync);
//关闭页面触发同步
window.addEventListener('beforeunload', triggerSync);

async function triggerSync() {
    try {
        let registration = await navigator.serviceWorker.ready;
        //注册同步并指定标签
        registration.sync.register(syncTag);
    } catch (e) {
        console.warn(e.message);
    }
}

//在主线程计算
document.querySelector('#calcMain').addEventListener('click', () => {
    console.time('main');
    console.log('From Main: ' + calc());
    console.timeEnd('main');
});
//在Service Worker计算
document.querySelector('#calcServiceWorker').addEventListener('click', () => {
    console.time('serviceworker');
    //这只是演示 如果真要进行复杂计算 应该单开一个Worker线程
    navigator.serviceWorker.controller.postMessage('calc');
});
//message事件 service worker
navigator.serviceWorker.addEventListener('message', (e) => {
    if (e.origin === location.origin) {
        console.log('From Service Worker: ' + e.data);
        console.timeEnd('serviceworker');
    }
});

//在Worker计算 (推荐)
let calcWorker = new Worker('js/worker.js');
document.querySelector('#calcWorker').addEventListener('click', () => {
    console.time('worker');
    calcWorker.postMessage('calc');
});
calcWorker.addEventListener('message', (e) => {
    console.log('From Worker: ' + e.data);
    console.timeEnd('worker');
});

//按需加载图片
let observer = new IntersectionObserver((entries, observer)=>{
    for (let entry of entries) {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.setAttribute('src', img.getAttribute('tmp'));
            img.onload = () => {
                img.removeAttribute('tmp');
            };
            observer.unobserve(img);
        }
    }
});
let imgNodes = document.querySelectorAll('img[tmp]');
for (let img of imgNodes) {
    observer.observe(img);
}
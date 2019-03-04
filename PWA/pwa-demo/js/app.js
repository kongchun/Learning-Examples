//生成内容模板 简单的img标签 先显示placeholder tmp存入实际路径
const imageData = [
    'images/archlinux/archlinux-aftermath.jpg',
    'images/archlinux/archlinux-aqua-vines.jpg',
    'images/archlinux/archlinux-arrival.jpg',
    'images/archlinux/archlinux-berry.jpg',
    'images/archlinux/archlinux-burn.jpg',
    'images/archlinux/archlinux-carbonite-knight.jpg',
    'images/archlinux/archlinux-deep-aurora.jpg',
    'images/archlinux/archlinux-ekisho-carbonite.jpg',
    'images/archlinux/archlinux-elation.jpg',
    'images/archlinux/archlinux-firestarter.jpg',
    'images/archlinux/archlinux-luminous-uber.jpg',
    'images/archlinux/archlinux-poison.jpg',
    'images/archlinux/archlinux-poolclouds.jpg',
    'images/archlinux/archlinux-simplyblack.png',
    'images/archlinux/archlinux-tribute.jpg',
    'images/archlinux/archlinux-underground.jpg'
];
let content = '';
for (let path of imageData) {
    content += `<div class="img-container"><img src="images/placeholder.jpg" tmp="${path}"/></div>`;
}
document.querySelector('#content').innerHTML = content;

//注册Service Worker
document.querySelector('#register').addEventListener('click', async () => {
    await navigator.serviceWorker.register('sw.js');
    console.log('Service Worker registered.');
});

//取消注册当前域下所有Service Worker
document.querySelector('#unregister').addEventListener('click', async () => {
    let registrations = await navigator.serviceWorker.getRegistrations();
    console.log('Unregistering all service worker...');
    for (let reg of registrations) {
        reg.unregister();
    }
    clearCaches();
});

document.querySelector('#clear').addEventListener('click', clearCaches);

//清除所有缓存
async function clearCaches() {
    let keyList = await caches.keys();
    console.log('Clearing all caches...');
    for (let key of keyList) {
        caches.delete(key);
    }
}

//构造方法生成一个通知样例
document.querySelector('#notification').addEventListener('click', async () => {
    let result = await Notification.requestPermission();
    if (result === 'granted') {
        new Notification('Notification Demo', {
            body: '"Hello, World!" from Notification constructor.',
            icon: 'images/web.png'
        });
    }
});

//ServiceWorkerRegistration.showNotification()生成一个通知样例
document.querySelector('#showNotification').addEventListener('click', async () => {
    let result = await Notification.requestPermission();
    if (result === 'granted') {
        let registration = await navigator.serviceWorker.ready;
        registration.showNotification('Notification Demo', {
            body: '"Hello, World!" from ServiceWorkerRegistration.showNotification()',
            icon: 'images/web.png'
        });
    }
});

//订阅发布服务 这里实际上只兼容Firefox 因为Mozilla Autopush最接近标准
document.querySelector('#subscribe').addEventListener('click', async () => {
    let registration = await navigator.serviceWorker.ready;
    subscribe(registration);
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
        if (res.ok) {
            let data = await res.text();
            console.log(`HTTP status code from push service: ${data}`);
            if (data === '401') {
                console.log('Push Service returned unauthorized, trying to fetch new key...');
                //很可能是key失效 尝试再次订阅
                await subscribe(registration);
            }
            if (!data.startsWith('20')) {
                new Notification('Push Demo', {
                    body: 'Error from push service, Please try again.'
                });
            }
        } else {
            console.warn(res.statusText);
        }
    } catch (e) {
        console.warn(e.message);
    }
});

async function subscribe(registration) {
    try {
        let subscription = await registration.pushManager.getSubscription();
        if (!!subscription) {
            console.log('Re-subscribing...');
            //if exists a subscription, unsubscribe first
            await subscription.unsubscribe();
        }
        //get public key
        let res = await fetch('/push-server/getKey');
        if (res.ok) {
            let publicKey = await res.arrayBuffer();
            //subscribe to push service
            subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicKey
            });
            console.log(subscription.toJSON());
        } else {
            console.warn(res.statusText);
        }
    } catch (e) {
        console.warn(e.message);
    }
}

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
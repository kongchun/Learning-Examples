const imageData = [
    '/pwa-demo/images/archlinux/archlinux-aftermath.jpg',
    '/pwa-demo/images/archlinux/archlinux-aqua-vines.jpg',
    '/pwa-demo/images/archlinux/archlinux-arrival.jpg',
    '/pwa-demo/images/archlinux/archlinux-berry.jpg',
    '/pwa-demo/images/archlinux/archlinux-burn.jpg',
    '/pwa-demo/images/archlinux/archlinux-carbonite-knight.jpg',
    '/pwa-demo/images/archlinux/archlinux-deep-aurora.jpg',
    '/pwa-demo/images/archlinux/archlinux-ekisho-carbonite.jpg',
    '/pwa-demo/images/archlinux/archlinux-elation.jpg',
    '/pwa-demo/images/archlinux/archlinux-firestarter.jpg',
    '/pwa-demo/images/archlinux/archlinux-luminous-uber.jpg',
    '/pwa-demo/images/archlinux/archlinux-poison.jpg',
    '/pwa-demo/images/archlinux/archlinux-poolclouds.jpg',
    '/pwa-demo/images/archlinux/archlinux-simplyblack.png',
    '/pwa-demo/images/archlinux/archlinux-tribute.jpg',
    '/pwa-demo/images/archlinux/archlinux-underground.jpg'
];

const syncTag = 'testSync';

function calc() {
    let sum = 0;
    for (let i = 0; i < 5000000000; i++) {
        sum += i;
    }
    return sum;
}
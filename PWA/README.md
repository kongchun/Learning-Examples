# PWA
PWA范例
## 简介
展示了PWA的主要功能，并不真正符合“渐进式”思想，因此不能在老浏览器运行。推荐最新版本**Chrome**和**Firefox**。  

要运行demo，将`pwa-demo/`部署在一个服务器下。如果要测试推送（本范例仅支持Firefox）或同步（只有Chrome支持这个特性）功能，需要启动`server-demo`项目(SpringBoot)：
```shell
java -jar server-demo-*.java
```
并将8080端口代理到和静态页面相同的端口，nginx最简配置参考：
```
    ...
    upstream push-server {
        server 127.0.0.1:8080;
    }

    server {
        ...
        location /pwa-demo {
            alias D:/git/Learning-Examples/PWA/pwa-demo/;
        }
        location /push-server {
            proxy_pass http://push-server;
        }
        ...
    }
    ...
```
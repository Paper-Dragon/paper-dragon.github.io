# Docker不死进程

## 问题描述

执行docker run image-id bash后，容器退出

## 解决方法

docker容器的主线程（dockfile中CMD执行的命令）结束，容器会退出

有以下几种解决方法：

使主进程无法结束 

```bash
docker run -d centos /bin/bash -c "while true;do echo hello docker;sleep 1;done"
```



使用交互式启动 

 ```bash
 docker run -i [CONTAINER_NAME or CONTAINER_ID]
 ```



使用后台模式和tty选项 

```bash
 docker run -dit [CONTAINER_NAME or CONTAINER_ID]
```


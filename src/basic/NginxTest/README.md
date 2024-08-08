---
sidebarDepth: 2
---

# 认识 Nginx

```text
sudo yum install -y epel-release
sudo yum -y update
```
二、安装 Nginx
```text
sudo yum install -y nginx
```
安装成功后，默认的网站目录为： /usr/share/nginx/html

默认的配置文件为：/etc/nginx/nginx.conf

自定义配置文件目录为: /etc/nginx/conf.d/

## 操作 Nginx
1.启动 Nginx
```test
systemctl start nginx
```
2.停止 Nginx
```js
systemctl stop nginx
```
3.重启 Nginx
```js
systemctl restart nginx
```
4.查看 Nginx 状态
```js
systemctl status nginx
```
5.启用开机启动 Nginx
```js
systemctl enable nginx
```
6.禁用开机启动 Nginx
```js
systemctl disable nginx
```

## 安装git 
```text
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
yum install gcc-c++ perl-ExtUtils-MakeMaker
```
```text
yum install git
git --version
# 移除安装的git
yum remove git

```
## 安装node

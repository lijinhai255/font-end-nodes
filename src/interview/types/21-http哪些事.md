---
sidebarDepth: 10
---

# Http哪些事

## 当我们输入网址后发生了什么

### Http 请求模型 

![alt text](./assets/http.png)

![alt text](./assets/http_2.png)

![alt text](./assets/http_3.png)

![alt text](./assets/http_4.png)

![alt text](./assets/http_5.png)

![alt text](./assets/http_6.png)

![alt text](./assets/http_7.png)

![alt text](./assets/http_8.png)

![alt text](./assets/http_9.png)

![alt text](./assets/http_10.png)

- no-cache 和no-store

```js
// no-cache 示例: 内容可以缓存，但每次使用前需要验证
app.get('/profile', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.json({ user: 'John', lastUpdate: new Date() });
});

// no-store 示例: 内容完全不缓存，适合敏感数据
app.get('/creditcard', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ cardNumber: '****', cvv: '***' });
});
```

## HTTP协议详解

## Cookie与Session

## HTTP缓存机制

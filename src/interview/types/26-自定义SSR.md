---
sidebarDepth: 2
---

# 自定义SSR

### 使用场景

#### 使用的公司

阿里淘宝、字节、今日头条、币安、okx、bybit、bitget

#### 1. 复杂的项目

- 微前端，Next.js MF
  - **Monorepo**
  - **分布式并发渲染**
- 老项目迁移，CSR（4年前 React 项目 CRA），保证业务日常顺利迭代
  - **路径**：Next.js 约定式路由
  - **目录结构**
  - **数据预取**

#### 2. 极致的性能

- Lambda 冷启动
- 每次请求的响应速度
- 高并发
- Debug 速度快

#### 3. 服务降级



#### 数据预取 

react-query 


#### React Query 介绍及使用指南

`@tanstack/react-query` 是一个强大的 React 数据管理库，用于处理数据获取、缓存、同步和更新操作，适合与 RESTful API、GraphQL 等服务交互。

---

## 核心功能

### 1. `QueryClient`
- 用于创建和管理 React Query 的客户端实例。
- 负责数据的缓存、请求的管理以及配置全局选项。

### 2. `QueryClientProvider`
- 提供上下文，将 `QueryClient` 实例注入到 React 组件树中。
- 必须将所有使用 React Query 的组件包裹在 `QueryClientProvider` 中。

### 3. `dehydrate`
- 将 `QueryClient` 中的数据序列化为可传输的 JSON 格式。
- 常用于服务端渲染（SSR），将预取的数据注入到客户端。

### 4. `Hydrate`
- 将 `dehydrate` 序列化的数据重新注入到客户端的 React Query 中。
- 确保服务端预取的数据能够无缝应用于客户端。

---

## 使用示例

### 1. 基本设置（前端 SPA 应用）

```tsx
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

// 创建 QueryClient 实例
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataFetchingComponent />
    </QueryClientProvider>
  );
}

function DataFetchingComponent() {
  const { data, isLoading, error } = useQuery(["key"], fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
}

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  return response.json();
}

export default App;
```

---

### 2. 服务端渲染（SSR）使用 `dehydrate` 和 `Hydrate`

#### 服务端代码

```tsx
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchData } from "./api";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // 预取数据
  await queryClient.prefetchQuery(["key"], fetchData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // 序列化数据
    },
  };
}
```

#### 客户端代码

```tsx
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
```

---

## 使用步骤详解

1. **创建 `QueryClient` 实例**：
   用于管理数据缓存和查询的生命周期。

2. **使用 `QueryClientProvider`**：
   提供 React Query 上下文，使子组件能够访问 `QueryClient`。

3. **预取数据（SSR 场景）**：
   使用 `prefetchQuery` 在服务端获取数据，并通过 `dehydrate` 序列化数据。

4. **注入客户端（SSR 场景）**：
   在客户端通过 `Hydrate` 将预取的数据恢复到 React Query。

---

## 优点

- **简单易用**：封装了复杂的数据管理逻辑。
- **自动缓存**：请求的数据会被缓存，并根据需要重新验证。
- **支持 SSR**：通过 `dehydrate` 和 `Hydrate` 实现服务端数据的无缝注入。
- **自动重试和状态管理**：内置错误重试机制和加载状态管理。

---
2. HTTP 服务
   1. koa 服务
   2. cloudflare worker

3. 应用本身
   1. 数据预取（CSR、服务降级）
   2. server 路由
      1. 开发环境静态资源处理
      2. 页面路由（安全问题）
   3. middleware
      1. 错误处理
         1. sentry
         2. 301/302
      2. 日志
         1. 日志分级：info、warn、error、debug
      3. cookie、headers
   4. 渲染
      1. jsx -> HTML string
      2. TDK
      3. 路由：路由懒加载
      4. hydrate

1. 错误处理
   1. sentry
   2. 301/302
   3. 日志
      1. 日志分级：info、warn、error、debug
   4. cookie、headers

2. 渲染
   1. jsx - 转 HTML string
   2. TDK
   3. 路由：路由懒加载
   4. hydrate
      1. 数据
      2. dom
   5. css
      1. css-in-js
         1. styled-components
         2. emotion
      2. css module

3. 服务降级、CSR

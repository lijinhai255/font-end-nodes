# IoC 原理、Nest.js CRUD 应用和 Next.js 应用搭建指南

## 1. IoC (控制反转) 原理

IoC (Inversion of Control) 是一种设计原则,其核心思想是将对象的创建、配置和生命周期管理的控制权从代码中转移到外部容器。

### 主要概念:

1. **依赖注入 (DI)**: IoC 的一种实现方式,通过外部注入依赖而不是在类内部创建。
2. **控制反转容器**: 负责对象的创建和管理,也称为 IoC 容器。
3. **解耦**: 降低组件之间的依赖,提高代码的可维护性和可测试性。

### 工作原理:

1. 定义接口或抽象类
2. 创建 IoC 容器
3. 注册依赖关系
4. 解析依赖并注入

### 优势:

- 提高模块化程度
- 简化单元测试
- 提高代码重用性
- 使应用更容易扩展和维护

## 2. 搭建 Nest.js 应用并实现 CRUD

Nest.js 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架,它内置了 IoC 容器。

### 步骤 1: 安装 Nest.js

```bash
npm i -g @nestjs/cli
nest new my-nest-project
cd my-nest-project
```

### 步骤 2: 创建模块、控制器和服务

```bash
nest g module users
nest g controller users
nest g service users
```

### 步骤 3: 实现 CRUD 操作

编辑 `src/users/users.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  create(user: any) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updatedUser: any) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }
}
```

编辑 `src/users/users.controller.ts`:

```typescript
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
```

### 步骤 4: 运行应用

```bash
npm run start:dev
```

现在,您可以使用 Postman 或其他 API 测试工具来测试这些 CRUD 操作。

## 3. 搭建 Next.js 应用

Next.js 是一个流行的 React 框架,用于构建服务器端渲染和静态网站。

### 步骤 1: 创建 Next.js 应用

```bash
npx create-next-app@latest my-next-app
cd my-next-app
```

### 步骤 2: 运行开发服务器

```bash
npm run dev
```

### 步骤 3: 创建页面

在 `pages` 目录下创建新的 `.js` 或 `.tsx` 文件来添加新页面。例如,创建 `pages/about.js`:

```jsx
export default function About() {
  return <h1>About Us</h1>
}
```

### 步骤 4: 添加动态路由

创建 `pages/posts/[id].js`:

```jsx
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}
```

### 步骤 5: 添加 API 路由

创建 `pages/api/hello.js`:

```javascript
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
```

### 步骤 6: 构建和部署

```bash
npm run build
npm run start
```

这个 Next.js 应用现在已经准备好进行进一步开发和部署了。


```text
docker-compose down
docker-compose build
docker-compose up
```
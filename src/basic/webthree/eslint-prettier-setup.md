# ESLint 和 Prettier 配置指南

## 配置文件

### 1. ESLint 配置 (.eslintrc)

```json
{
    "extends": [
        "airbnb-typescript",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest",
        "import"
    ],
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.eslint.json"
    },
    "rules": {}
}
```

### 2. Prettier 配置 (.prettierrc)

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxBracketSameLine": false
}
```

### 3. TypeScript ESLint 配置 (tsconfig.eslint.json)

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.tsx", "**/*.js"]
}
```

## 配置说明

### ESLint 配置说明

- `extends`: 继承的配置规则集
  - airbnb-typescript: Airbnb 的 TypeScript 规则
  - react-hooks: React Hooks 的推荐规则
  - typescript-eslint: TypeScript 的推荐规则
  - jest: Jest 测试的推荐规则
  - prettier: Prettier 格式化规则
  
- `plugins`: 启用的插件
  - react: React 语法支持
  - typescript-eslint: TypeScript 支持
  - jest: Jest 测试支持
  - import: 导入语句检查

- `env`: 环境配置
  - browser: 浏览器环境
  - es6: ES6 语法支持
  - jest: Jest 测试环境

### Prettier 配置说明

- `semi`: 使用分号
- `tabWidth`: 2空格缩进
- `printWidth`: 每行最大100字符
- `singleQuote`: 使用单引号
- `trailingComma`: ES5风格的尾随逗号
- `jsxBracketSameLine`: JSX结束标签换行

## 依赖安装

```bash
# ESLint 和 Prettier 核心依赖
yarn add -D eslint-config-prettier eslint-plugin-prettier prettier

# TypeScript 相关依赖
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript
```

## 常见问题解决

### 问题：找不到 prettier 配置

错误信息：
```
ESLint couldn't find the config "prettier" to extend from. Please check that the name of the config is correct.
```

解决方案：
1. 安装必要的依赖：
```bash
yarn add -D eslint-config-prettier eslint-plugin-prettier prettier
```

2. 确保 package.json 中的 scripts 配置正确：
```json
{
  "scripts": {
    "lint:fix": "tsc --noEmit & eslint ./src --ext .ts,.tsx,.js --fix"
  }
}
```

## 使用说明

1. 将上述配置文件放在项目根目录
2. 安装所需依赖
3. 运行 lint 命令：
```bash
yarn lint:fix
```

## 推荐的 IDE 设置

建议在 VS Code 中安装以下插件：
- ESLint
- Prettier - Code formatter

并在 VS Code 的 settings.json 中添加：
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

这样可以在保存文件时自动格式化代码。



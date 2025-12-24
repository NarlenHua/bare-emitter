# Bare Emitter

轻量简单的事件触发器

[![npm version](https://badge.fury.io/js/bare-emitter.svg)](https://badge.fury.io/js/bare-emitter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 描述

`bare-emitter` 是一个轻量级的事件驱动编程库，提供简单易用的事件监听、触发和移除功能。适用于需要事件驱动架构的JavaScript/TypeScript项目。

## 特性

- 🚀 轻量级：无外部依赖，代码简洁
- 📦 TypeScript支持：完整的类型定义
- 🔧 简单API：易于学习和使用
- 🎯 多种监听模式：支持普通监听、一次性监听
- 🛡️ 类型安全：TypeScript编写，提供完善的类型提示

## 安装

```bash
npm install bare-emitter
```

或

```bash
yarn add bare-emitter
```

## 使用

### 基本用法

```typescript
import BareEmitter from 'bare-emitter';

// 创建事件发射器实例
const emitter = new BareEmitter();

// 监听事件
emitter.on('greet', (name: string) => {
  console.log(`Hello, ${name}!`);
});

// 触发事件
emitter.emit('greet', 'World'); // 输出: Hello, World!
```

### 一次性监听

```typescript
emitter.once('start', () => {
  console.log('This will only run once');
});

emitter.emit('start'); // 输出: This will only run once
emitter.emit('start'); // 没有输出
```

### 移除监听器

```typescript
const handler = (data: any) => console.log(data);

emitter.on('data', handler);
emitter.emit('data', 'test'); // 输出: test

// 移除特定监听器
emitter.off('data', handler);
emitter.emit('data', 'test'); // 没有输出

// 移除所有监听器
emitter.on('data', () => console.log('another'));
emitter.off('data'); // 移除所有 'data' 事件的监听器
```

### 传递多个参数

```typescript
emitter.on('user', (name: string, age: number, active: boolean) => {
  console.log(`${name} is ${age} years old and ${active ? 'active' : 'inactive'}`);
});

emitter.emit('user', 'Alice', 30, true); // 输出: Alice is 30 years old and active
```

## API 文档

### 类：BareEmitter

#### 属性

- `author: string` - 作者信息
- `version: string` - 版本号
- `description: string` - 描述
- `license: string` - 许可证

#### 方法

##### `on(eventName: string, listener: Listener): void`

为指定事件添加监听器。

- `eventName`: 事件名称
- `listener`: 事件触发时调用的回调函数

##### `off(eventName: string, listener?: Listener): void`

移除指定事件的监听器。

- `eventName`: 事件名称
- `listener`: 可选，要移除的特定监听器。如果不提供，则移除该事件的所有监听器

##### `once(eventName: string, listener: Listener): void`

为指定事件添加一次性监听器。

- `eventName`: 事件名称
- `listener`: 事件触发时调用的回调函数（只执行一次）

##### `emit(eventName: string, ...args: any[]): boolean`

触发指定事件。

- `eventName`: 事件名称
- `...args`: 传递给监听器的参数
- 返回值: 如果至少有一个监听器被调用则返回 `true`，否则返回 `false`

## 类型定义

```typescript
type Listener = (...args: any[]) => void;
```

## 构建

```bash
npm run build
```

## 开发

```bash
npm run dev
```

## 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情

## 作者

Narlen

## 贡献

欢迎提交 Issue 和 Pull Request！

## 相关链接

- [GitHub 仓库](https://github.com/NarlenHua/bare-emitter)
- [npm 包](https://www.npmjs.com/package/bare-emitter)
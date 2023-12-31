<p align="center">
@pureadmin/release  
<br />
超简单的发包工具（修改版本号并提交git、自动打包、发布npm、计算并显示打包后文件大小）
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/release" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/release?color=a1b858&label=" alt="NPM version"></a>
</p>

简体中文 | [English](./README.en-US.md)

## 📦 安装

```bash
npm install @pureadmin/release -D
# or
yarn add @pureadmin/release -D
# or
pnpm add @pureadmin/release -D
```

## ⚙️ 用法

1. 在 `package.json` 的 `scripts` 中加入下面代码

```json
"scripts": {
  "pub": "pub"
}
```

2. 执行自动发版命令

```bash
npm run pub
# or
yarn pub
# or
pnpm pub
```

## ⚠️ 注意

1. 请确保在执行自动发版命令前，清空当前 `git` 暂存区
2. 默认会使用 `npm run build` 打包，如当前打包命令不是 `build` ，比如是 `npm run lib` ，修改 `package.json` 的 `scripts` 如下面代码

```json
"scripts": {
  "pub": "pub lib"
}
```

## License

[MIT © 2022-present, pure-admin](./LICENSE)
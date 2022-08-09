<p align="center">
@pureadmin/release  
<br />
超简单的发包工具（根据所选版本，自动打包、计算并显示打包后文件大小、发布npm、提交git）
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/release" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/release?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/release" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/release?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.en-US.md) 

## 📦 安装

```bash
npm install @pureadmin/release -D
or
pnpm add @pureadmin/release -D
```

## 🦄 用法

1.在`package.json`的`scripts`中加入下面代码

```json
"scripts": {
  "pub": "pub"
}
```

2.执行自动发版命令

```bash
npm run pub
or
pnpm pub
```

## 🌞 注意

- 请确保在执行自动发版命令前，清空当前`git`暂存区

## 许可证

[MIT © xiaoxian521-2022](./LICENSE)
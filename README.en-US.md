<p align="center">
@pureadmin/release  
<br />
Super simple package tool (according to the selected version, automatically package, calculate and display the packaged file size, publish npm, submit git)
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/release" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/release?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@pureadmin/release" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@pureadmin/release?color=50a36f&label="></a>
</p>

**English** | [中文](./README.md)

## 📦 Install

```bash
npm install @pureadmin/release -D
or
pnpm add @pureadmin/release -D
```

## 🦄 Usage

1. Add the following code in `scripts` of `package.json`

```json
"scripts": {
  "pub": "pub"
}
```

2. Execute the automatic release command

```bash
npm run pub
or
pnpm pub
```

## 🌞 Attention

1. Please make sure that the current `git` temporary storage area is cleared before executing the automatic release command
2. By default, `npm run build` will be used for packaging. If the current packaging command is not `build`, such as `npm run lib`, modify the `scripts` of `package.json` as follows

```json
"scripts": {
  "pub": "pub lib"
}
```

## LICENSE

[MIT © xiaoxian521-Latest](./LICENSE)

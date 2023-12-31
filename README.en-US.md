<p align="center">
@pureadmin/release  
<br />
Super simple package distribution tool (modify version number and submit to git, automatically package, publish to npm, calculate and display the packaged file size)
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/release" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/release?color=a1b858&label=" alt="NPM version"></a>
</p>

English | [简体中文](./README.md)

## 📦 Install

```bash
npm install @pureadmin/release -D
# or
yarn add @pureadmin/release -D
# or
pnpm add @pureadmin/release -D
```

## ⚙️ Usage

1. Add the following code in `scripts` of `package.json`

```json
"scripts": {
  "pub": "pub"
}
```

2. Execute the automatic release command

```bash
npm run pub
# or
yarn pub
# or
pnpm pub
```

## ⚠️ Attention

1. Please make sure that the current `git` temporary storage area is cleared before executing the automatic release command
2. By default, `npm run build` will be used for packaging. If the current packaging command is not `build`, such as `npm run lib`, modify the `scripts` of `package.json` as follows

```json
"scripts": {
  "pub": "pub lib"
}
```
## License

[MIT © 2022-present, pure-admin](./LICENSE)
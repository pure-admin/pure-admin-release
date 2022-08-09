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

1.Add the following code to `scripts` of `package.json`

```json
"scripts": {
  "pub": "pub"
}
```

2.Execute the automatic release command

```bash
npm run pub
or
pnpm pub
```

## 🌞 Attention

- Please make sure to clear the current `git` staging area before executing the auto-release command

## LICENSE

[MIT © xiaoxian521-2022](./LICENSE)


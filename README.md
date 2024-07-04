# @rsbuild/plugin-eslint

An Rsbuild plugin to run ESLint checks during the compilation.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-eslint">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-eslint?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-eslint -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginExample } from "@rsbuild/plugin-eslint";

export default {
  plugins: [pluginExample()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginExample({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).

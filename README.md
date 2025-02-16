# @rsbuild/plugin-eslint

An Rsbuild plugin to run ESLint checks during the compilation.

The plugin has integrated [eslint-rspack-plugin](https://www.npmjs.com/package/eslint-rspack-plugin) internally.

> We do not recommend using the `@rsbuild/plugin-eslint` plugin, as running ESLint during the build process will significantly increase the build time. Instead, we recommend using a separate `lint` command to run ESLint checks.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-eslint">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-eslint?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/@rsbuild/plugin-eslint?minimal=true"><img src="https://img.shields.io/npm/dm/@rsbuild/plugin-eslint.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

<img width="1496" alt="Screenshot 2025-02-16 at 18 56 32" src="https://github.com/user-attachments/assets/ee4b1915-92ce-4032-834d-b2321f02f1d2" />

## Usage

Install:

```bash
npm add @rsbuild/plugin-eslint -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginEslint } from "@rsbuild/plugin-eslint";

export default {
  plugins: [pluginEslint()],
};
```

## Example Projects

- [React + ESLint project](https://github.com/rspack-contrib/rspack-examples/tree/main/rsbuild/react-eslint)
- [Vue 3 + ESLint project](https://github.com/rspack-contrib/rspack-examples/tree/main/rsbuild/vue3-eslint)

## Options

### enable

Whether to enable ESLint checking.

- **Type:** `boolean`
- **Default:** `true`
- **Example:**

Disable ESLint checking:

```js
pluginEslint({
  enable: false,
});
```

Enable ESLint checking only during production builds:

```js
pluginEslint({
  enable: process.env.NODE_ENV === "production",
});
```

Enable ESLint checking only during development builds:

```js
pluginEslint({
  enable: process.env.NODE_ENV === "development",
});
```

### eslintPluginOptions

To modify the options of `eslint-rspack-plugin`, please refer to [eslint-rspack-plugin - README](https://github.com/rspack-contrib/eslint-rspack-plugin#readme) to learn about available options.

- **Type:** [Options](https://github.com/rspack-contrib/eslint-rspack-plugin/blob/master/types/options.d.ts)
- **Default:**

```ts
const defaultOptions = {
  extensions: ["js", "jsx", "mjs", "cjs", "ts", "tsx", "mts", "cts"],
  exclude: [
    "node_modules",
    "dist", // -> rsbuildConfig.output.distPath.root
  ],
};
```

The `eslintPluginOptions` object will be shallowly merged with the default configuration object.

- For example, enable ESLint v9's flat config:

```ts
pluginEslint({
  eslintPluginOptions: {
    cwd: __dirname,
    configType: "flat",
  },
});
```

- For example, exclude some files using `exclude`:

```ts
pluginEslint({
  eslintPluginOptions: {
    exclude: ["node_modules", "dist", "./src/foo.js"],
  },
});
```

- Extend `extensions` to validate `.vue` or `.svelte` files:

```ts
pluginEslint({
  eslintPluginOptions: {
    extensions: ["js", "jsx", "mjs", "cjs", "ts", "tsx", "mts", "cts", "vue"],
  },
});
```

## License

[MIT](./LICENSE).

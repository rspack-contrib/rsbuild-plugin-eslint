import path from 'node:path';
import type { RsbuildPlugin } from '@rsbuild/core';
import type { Options } from 'eslint-rspack-plugin';

export type PluginEslintOptions = {
	/**
	 * Whether to enable ESLint checking.
	 * @default true
	 */
	enable?: boolean;
	/**
	 * To modify the options of `eslint-rspack-plugin`.
	 * @see https://github.com/rspack-contrib/eslint-rspack-plugin
	 */
	eslintPluginOptions?: Options;
};

export const PLUGIN_ESLINT_NAME = 'rsbuild:eslint';

export const pluginEslint = (
	options: PluginEslintOptions = {},
): RsbuildPlugin => ({
	name: PLUGIN_ESLINT_NAME,

	setup(api) {
		const { enable = true, eslintPluginOptions } = options;

		if (!enable) {
			return;
		}

		api.modifyBundlerChain(async (chain, { environment }) => {
			const { distPath } = environment;
			// If there is multiple environment, only apply eslint plugin to the first target
			// to avoid multiple eslint running at the same time
			if (environment.index !== 0) {
				return;
			}

			const ESLintPluginModule = await import('eslint-rspack-plugin');
			// Fix ESM-CJS interop issue
			const ESLintPlugin = ESLintPluginModule.default || ESLintPluginModule;

			const defaultOptions = {
				extensions: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx', 'mts', 'cts'],
				exclude: [
					'node_modules',
					path.relative(api.context.rootPath, distPath),
				],
			};

			chain.plugin('eslint').use(ESLintPlugin, [
				{
					...defaultOptions,
					...eslintPluginOptions,
				},
			]);
		});
	},
});

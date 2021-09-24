const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		'main': ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: path.join(__dirname, '/docs'),
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod
					}
				}
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					!prod ? "style-loader" : MiniCssExtractPlugin.loader,
                    require.resolve('css-loader'),
                    require.resolve('postcss-loader'),
                ],
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			},
			{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                include: path.resolve(__dirname, 'src/images'),
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                include: path.resolve(__dirname, 'src/fonts'),
                type: 'asset/resource',
            },
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
            title: 'Svelte',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
		new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: "localhost:8080",
        })
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		hot: true
	},
};

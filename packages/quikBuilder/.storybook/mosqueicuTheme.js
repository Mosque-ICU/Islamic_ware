import { create } from '@storybook/theming/create';

export default create({
	base: 'light',
	brandTitle: 'Mosqueicu Storybook',
	brandUrl:
		'https://storybook.mosqueicu.so',
	brandImage:
		'images/mosqueicu-logo.svg',
	brandTarget: '_self',
	//
	colorSecondary: '#3b82f6',

	// UI
	appBg: '#ffffff',
	appContentBg: '#ffffff',
	//   appBorderColor: '#585C6D',
	appBorderRadius: 0,
	//
	barTextColor: '#9E9E9E',
	barSelectedColor: '#3b82f6',
	barBg: '#ffffff',
});

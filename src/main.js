import './global.css';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'tiny tiny'
	}
});

export default app;

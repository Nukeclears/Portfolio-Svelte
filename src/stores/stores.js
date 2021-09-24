import { writable } from 'svelte/store';

export let cartArray = writable([]);
export let variantIndex = writable(Number);
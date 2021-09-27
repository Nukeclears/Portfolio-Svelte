import { writable } from 'svelte/store';
import { productItemTYPE } from '../types/productTPE'; // eslint-disable-line

export const cartArray = writable<Array<productItemTYPE>>([]);

export const variantIndex = writable(0);
(()=>{"use strict";var t={83:(t,e,n)=>{t.exports=n.p+"576fae332ec3e23ff1af.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"})(),(()=>{function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function u(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function a(t){return 0===Object.keys(t).length}new Set;let f,d=!1;function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t){f=t}new Set;const v=[],_=[],E=[],C=[],S=Promise.resolve();let T=!1;function j(t){E.push(t)}let A=!1;const L=new Set;function N(){if(!A){A=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];w(e),O(e.$$)}for(w(null),v.length=0;_.length;)_.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];L.has(e)||(L.add(e),e())}E.length=0}while(v.length);for(;C.length;)C.pop()();T=!1,A=!1,L.clear()}}function O(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const q=new Set;let H;function M(t,e){t&&t.i&&(q.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),undefined.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function P(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],s=e[c];if(s){for(const t in i)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[c]=s}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function D(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:u,after_update:a}=t.$$;s&&s.m(e,n),r||j((()=>{const e=l.map(o).filter(i);u?u.push(...e):c(e),t.$$.on_mount=[]})),a.forEach(j)}function G(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(e,n,o,i,s,l,u,a=[-1]){const p=f;w(e);const $=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:n.context||[]),callbacks:r(),dirty:a,skip_bound:!1,root:n.target||p.$$.root};u&&u($.root);let m=!1;if($.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&s($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),T||(T=!0,S.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],$.update(),m=!0,c($.before_update),$.fragment=!!i&&i($.ctx),n.target){if(n.hydrate){d=!0;const t=(g=n.target,Array.from(g.childNodes));$.fragment&&$.fragment.l(t),t.forEach(h)}else $.fragment&&$.fragment.c();n.intro&&M(e.$$.fragment),D(e,n.target,n.anchor,n.customElement),d=!1,N()}var g;w(p)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){c(this.$$.on_disconnect)}$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class J{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var K=n(83);function Q(e){let n,o,r,c,i,s,l,a,f;return{c(){n=m("div"),o=m("h1"),r=g(e[0]),c=b(),i=m("p"),s=g(e[1]),l=b(),a=m("img"),u(a.src,f=e[2])||x(a,"src",f),x(a,"alt","blockimage")},m(t,e){$(t,n,e),p(n,o),p(o,r),p(n,c),p(n,i),p(i,s),p(n,l),p(n,a)},p(t,[e]){1&e&&k(r,t[0]),2&e&&k(s,t[1]),4&e&&!u(a.src,f=t[2])&&x(a,"src",f)},i:t,o:t,d(t){t&&h(n)}}}function R(t,e,n){let{blocktitle:o}=e,{blockdescription:r}=e,{src:c}=e;return t.$$set=t=>{"blocktitle"in t&&n(0,o=t.blocktitle),"blockdescription"in t&&n(1,r=t.blockdescription),"src"in t&&n(2,c=t.src)},[o,r,c]}const U=class extends J{constructor(t){super(),I(this,t,R,Q,s,{blocktitle:0,blockdescription:1,src:2})}};function V(t){let n,o,r,c,i;const s=[t[1]];let l={};for(let t=0;t<s.length;t+=1)l=e(l,s[t]);return c=new U({props:l}),{c(){n=m("p"),o=g(t[0]),r=b(),z(c.$$.fragment),x(n,"class","text-6xl text-blue-500")},m(t,e){$(t,n,e),p(n,o),$(t,r,e),D(c,t,e),i=!0},p(t,[e]){(!i||1&e)&&k(o,t[0]);const n=2&e?P(s,[F(t[1])]):{};c.$set(n)},i(t){i||(M(c.$$.fragment,t),i=!0)},o(t){B(c.$$.fragment,t),i=!1},d(t){t&&h(n),t&&h(r),G(c,t)}}}function W(t,e,n){let{title:o="placeholdertitle"}=e,r={blocktitle:"title1",blockdescription:"description1",src:K};return t.$$set=t=>{"title"in t&&n(0,o=t.title)},[o,r]}const X=class extends J{constructor(t){super(),I(this,t,W,V,s,{title:0})}};function Y(e){let n,o,r;return{c(){n=m("button"),n.textContent="de-activate",x(n,"class","bg-red-500 text-white px-6 py-2")},m(t,c){$(t,n,c),o||(r=y(n,"click",e[3]),o=!0)},p:t,d(t){t&&h(n),o=!1,r()}}}function Z(e){let n,o,r;return{c(){n=m("button"),n.textContent="activate",x(n,"class","bg-blue-500 text-white px-6 py-2")},m(t,c){$(t,n,c),o||(r=y(n,"click",e[3]),o=!0)},p:t,d(t){t&&h(n),o=!1,r()}}}function tt(t){let n,o,r,c,i,s,l,u,a,f,d,y,w;u=new X({props:{number:"2"}});const v=[t[2]];let _={};for(let t=0;t<v.length;t+=1)_=e(_,v[t]);function E(t,e){return t[1].status?Z:Y}f=new X({props:_});let C=E(t),S=C(t);return{c(){n=m("main"),o=m("div"),r=m("h1"),c=g("Hello "),i=g(t[0]),s=g("!"),l=b(),z(u.$$.fragment),a=b(),z(f.$$.fragment),d=b(),y=m("div"),S.c(),x(r,"class","text-red-500 text-6xl"),x(o,"class","container mx-auto flex flex-col justify-center gap-y-4")},m(t,e){$(t,n,e),p(n,o),p(o,r),p(r,c),p(r,i),p(r,s),p(o,l),D(u,o,null),p(o,a),D(f,o,null),p(o,d),p(o,y),S.m(y,null),w=!0},p(t,[e]){(!w||1&e)&&k(i,t[0]);const n=4&e?P(v,[F(t[2])]):{};f.$set(n),C===(C=E(t))&&S?S.p(t,e):(S.d(1),S=C(t),S&&(S.c(),S.m(y,null)))},i(t){w||(M(u.$$.fragment,t),M(f.$$.fragment,t),w=!0)},o(t){B(u.$$.fragment,t),B(f.$$.fragment,t),w=!1},d(t){t&&h(n),G(u),G(f),S.d()}}}function et(t,e,n){let o={status:!1},{name:r}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name)},[r,o,{number:"44",description:"the value is"},function(){n(1,o.status=!o.status,o)}]}new class extends J{constructor(t){super(),I(this,t,et,tt,s,{name:0})}}({target:document.body,props:{name:"tiny tiny"}})})()})();
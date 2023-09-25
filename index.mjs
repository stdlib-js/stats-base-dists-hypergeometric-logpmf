// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorialln@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function o(t,a,o,l){var j,p,f,h;return e(t)||e(a)||e(o)||e(l)||!s(a)||!s(o)||!s(l)||a===d||o===d||o>a||l>a?NaN:(h=i(0,l+o-a),f=r(o,l),s(t)&&h<=t&&t<=f?(p=n(l)+n(o)+n(a-l)+n(a-o),j=n(a)+n(t)+n(l-t),p-(j+=n(o-t)+n(a-o+t-l))):m)}function l(t,o,l){var j,p;return e(t)||e(o)||e(l)||!s(t)||!s(o)||!s(l)||t===d||o===d||o>t||l>t?a(NaN):(p=i(0,l+o-t),j=r(o,l),function(i){var r,d;if(e(i))return NaN;if(s(i)&&p<=i&&i<=j)return d=n(l)+n(o)+n(t-l)+n(t-o),r=n(t)+n(i)+n(l-i),r+=n(o-i)+n(t-o+i-l),d-r;return m})}t(o,"factory",l);export{o as default,l as factory};
//# sourceMappingURL=index.mjs.map

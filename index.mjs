// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,i,r){return n(t)||n(i)||n(r)||i>=r?NaN:t<i||t>r?e:-s(r-i)}function d(t,r){return n(t)||n(r)||t>=r?i(NaN):function(i){if(n(i))return NaN;if(i<t||i>r)return e;return-s(r-t)}}t(r,"factory",d);export{r as default,d as factory};
//# sourceMappingURL=index.mjs.map
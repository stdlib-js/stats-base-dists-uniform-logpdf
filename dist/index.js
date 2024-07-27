"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=a(function(O,f){
var i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/constants-float64-ninf/dist');function l(e,r,t){return i(e)||i(r)||i(t)||r>=t?NaN:e<r||e>t?N:-v(t-r)}f.exports=l
});var c=a(function(R,s){
var p=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ninf/dist');function F(e,r){if(u(e)||u(r)||e>=r)return p(NaN);return t;function t(n){return u(n)?NaN:n<e||n>r?d:-y(r-e)}}s.exports=F
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),I=c();g(q,"factory",I);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

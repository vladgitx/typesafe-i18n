"use strict";var s=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var x=(r,e)=>{for(var o in e)s(r,o,{get:e[o],enumerable:!0})},u=(r,e,o,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of l(e))!y.call(r,t)&&t!==o&&s(r,t,{get:()=>e[t],enumerable:!(p=c(e,t))||p.enumerable});return r};var a=r=>u(s({},"__esModule",{value:!0}),r);var f={};x(f,{initLocalStorageDetector:()=>n,localStorageDetector:()=>P});module.exports=a(f);var i=r=>!!r;var n=(r="lang")=>()=>[window?.localStorage?.getItem(r)].filter(i),P=n();

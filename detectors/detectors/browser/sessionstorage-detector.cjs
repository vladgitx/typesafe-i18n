"use strict";var s=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var l=(e,r)=>{for(var o in r)s(e,o,{get:r[o],enumerable:!0})},u=(e,r,o,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of y(r))!x.call(e,t)&&t!==o&&s(e,t,{get:()=>r[t],enumerable:!(p=c(r,t))||p.enumerable});return e};var a=e=>u(s({},"__esModule",{value:!0}),e);var f={};l(f,{initSessionStorageDetector:()=>n,sessionStorageDetector:()=>P});module.exports=a(f);var i=e=>!!e;var n=(e="lang")=>()=>[window?.sessionStorage?.getItem(e)].filter(i),P=n();
"use strict";var s=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var x=(r,e)=>{for(var o in e)s(r,o,{get:e[o],enumerable:!0})},l=(r,e,o,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of c(e))!y.call(r,t)&&t!==o&&s(r,t,{get:()=>e[t],enumerable:!(p=n(e,t))||p.enumerable});return r};var u=r=>l(s({},"__esModule",{value:!0}),r);var P={};x(P,{initRequestParametersDetector:()=>a});module.exports=u(P);var i=r=>!!r;var a=(r,e="lang")=>()=>[r?.params?.[e]].filter(i);

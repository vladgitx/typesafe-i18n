"use strict";var p=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var d=(e,r)=>{for(var o in r)p(e,o,{get:r[o],enumerable:!0})},P=(e,r,o,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of u(r))!a.call(e,t)&&t!==o&&p(e,t,{get:()=>r[t],enumerable:!(i=y(r,t))||i.enumerable});return e};var f=e=>P(p({},"__esModule",{value:!0}),e);var S={};d(S,{detectLocale:()=>m});module.exports=f(S);var n=e=>!!e;var c=e=>Array.from(new Set(e));var m=(e,r,...o)=>{for(let i of o){let t=N(r,i);if(t)return t}return e},N=(e,r)=>{let o=r().map(s=>s.toLowerCase()),i=c(o.flatMap(s=>[s,s.split("-")[0]])),t=e.map(s=>s.toLowerCase());return i.map(s=>{let x=t.findIndex(l=>l===s);return x>=0&&e[x]}).find(n)};

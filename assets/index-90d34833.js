import{g as s}from"./index-74dea35a.js";var c=function u(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var f,e,o;if(Array.isArray(r)){if(f=r.length,f!=t.length)return!1;for(e=f;e--!==0;)if(!u(r[e],t[e]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(o=Object.keys(r),f=o.length,f!==Object.keys(t).length)return!1;for(e=f;e--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[e]))return!1;for(e=f;e--!==0;){var n=o[e];if(!u(r[n],t[n]))return!1}return!0}return r!==r&&t!==t};const p=s(c);export{p as d};

import{y as M}from"./provider-browser-5807d46b.js";var A={},c={};Object.defineProperty(c,"__esModule",{value:!0});c.EthereumProviderError=c.EthereumRpcError=void 0;const F=M;class O extends Error{constructor(r,s,n){if(!Number.isInteger(r))throw new Error('"code" must be an integer.');if(!s||typeof s!="string")throw new Error('"message" must be a nonempty string.');super(s),this.code=r,n!==void 0&&(this.data=n)}serialize(){const r={code:this.code,message:this.message};return this.data!==void 0&&(r.data=this.data),this.stack&&(r.stack=this.stack),r}toString(){return F.default(this.serialize(),V,2)}}c.EthereumRpcError=O;class z extends O{constructor(r,s,n){if(!J(r))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(r,s,n)}}c.EthereumProviderError=z;function J(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}function V(e,r){if(r!=="[Circular]")return r}var b={},m={};Object.defineProperty(m,"__esModule",{value:!0});m.errorValues=m.errorCodes=void 0;m.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}};m.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.serializeError=e.isValidCode=e.getMessageFromCode=e.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const r=m,s=c,n=r.errorCodes.rpc.internal,f="Unspecified error message. This is a bug, please report it.",w={code:n,message:h(n)};e.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.";function h(t,a=f){if(Number.isInteger(t)){const E=t.toString();if(p(r.errorValues,E))return r.errorValues[E].message;if(_(t))return e.JSON_RPC_SERVER_ERROR_MESSAGE}return a}e.getMessageFromCode=h;function P(t){if(!Number.isInteger(t))return!1;const a=t.toString();return!!(r.errorValues[a]||_(t))}e.isValidCode=P;function I(t,{fallbackError:a=w,shouldIncludeStack:E=!1}={}){var v,R;if(!a||!Number.isInteger(a.code)||typeof a.message!="string")throw new Error("Must provide fallback error with integer number code and string message.");if(t instanceof s.EthereumRpcError)return t.serialize();const d={};if(t&&typeof t=="object"&&!Array.isArray(t)&&p(t,"code")&&P(t.code)){const u=t;d.code=u.code,u.message&&typeof u.message=="string"?(d.message=u.message,p(u,"data")&&(d.data=u.data)):(d.message=h(d.code),d.data={originalError:S(t)})}else{d.code=a.code;const u=(v=t)===null||v===void 0?void 0:v.message;d.message=u&&typeof u=="string"?u:a.message,d.data={originalError:S(t)}}const C=(R=t)===null||R===void 0?void 0:R.stack;return E&&t&&C&&typeof C=="string"&&(d.stack=C),d}e.serializeError=I;function _(t){return t>=-32099&&t<=-32e3}function S(t){return t&&typeof t=="object"&&!Array.isArray(t)?Object.assign({},t):t}function p(t,a){return Object.prototype.hasOwnProperty.call(t,a)}})(b);var l={};Object.defineProperty(l,"__esModule",{value:!0});l.ethErrors=void 0;const y=c,j=b,o=m;l.ethErrors={rpc:{parse:e=>i(o.errorCodes.rpc.parse,e),invalidRequest:e=>i(o.errorCodes.rpc.invalidRequest,e),invalidParams:e=>i(o.errorCodes.rpc.invalidParams,e),methodNotFound:e=>i(o.errorCodes.rpc.methodNotFound,e),internal:e=>i(o.errorCodes.rpc.internal,e),server:e=>{if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:r}=e;if(!Number.isInteger(r)||r>-32005||r<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(r,e)},invalidInput:e=>i(o.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>i(o.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>i(o.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>i(o.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>i(o.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>i(o.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>g(o.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>g(o.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>g(o.errorCodes.provider.unsupportedMethod,e),disconnected:e=>g(o.errorCodes.provider.disconnected,e),chainDisconnected:e=>g(o.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:r,message:s,data:n}=e;if(!s||typeof s!="string")throw new Error('"message" must be a nonempty string');return new y.EthereumProviderError(r,s,n)}}};function i(e,r){const[s,n]=N(r);return new y.EthereumRpcError(e,s||j.getMessageFromCode(e),n)}function g(e,r){const[s,n]=N(r);return new y.EthereumProviderError(e,s||j.getMessageFromCode(e),n)}function N(e){if(e){if(typeof e=="string")return[e];if(typeof e=="object"&&!Array.isArray(e)){const{message:r,data:s}=e;if(r&&typeof r!="string")throw new Error("Must specify string message.");return[r||void 0,s]}}return[]}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getMessageFromCode=e.serializeError=e.EthereumProviderError=e.EthereumRpcError=e.ethErrors=e.errorCodes=void 0;const r=c;Object.defineProperty(e,"EthereumRpcError",{enumerable:!0,get:function(){return r.EthereumRpcError}}),Object.defineProperty(e,"EthereumProviderError",{enumerable:!0,get:function(){return r.EthereumProviderError}});const s=b;Object.defineProperty(e,"serializeError",{enumerable:!0,get:function(){return s.serializeError}}),Object.defineProperty(e,"getMessageFromCode",{enumerable:!0,get:function(){return s.getMessageFromCode}});const n=l;Object.defineProperty(e,"ethErrors",{enumerable:!0,get:function(){return n.ethErrors}});const f=m;Object.defineProperty(e,"errorCodes",{enumerable:!0,get:function(){return f.errorCodes}})})(A);export{A as d};

import{y as h,z as g,C as l,i as m,q as a,D as f,E as p,F as E,G as u,H as w,I as A,k as C}from"./home-d7fbda9a.js";import{b as T}from"./solanaProvider.esm-b31210d1.js";class y extends h{async init(e){this.chainConfig||(this.chainConfig=g(l.SOLANA,1))}async authenticateUser(){if(!this.provider||this.status!==m.CONNECTED)throw a.notConnectedError();const{chainNamespace:e,chainId:o}=this.chainConfig,s=await this.provider.request({method:"getAccounts"});if(s&&s.length>0){const n=f(s[0],this.name);if(n&&!p(n))return{idToken:n};const c={domain:window.location.origin,uri:window.location.href,address:s[0],chainId:parseInt(o,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},t=await E(c,e),r=new TextEncoder().encode(t),d=await this.provider.request({method:"signMessage",params:{message:r,display:"utf8"}}),i=await u(e,T.encode(d),t,this.name,this.sessionTime,this.clientId,this.web3AuthNetwork);return w(s[0],this.name,i),{idToken:i}}throw a.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnectSession(){super.checkDisconnectionRequirements();const e=await this.provider.request({method:"getAccounts"});e&&e.length>0&&A(e[0],this.name)}async disconnect(){this.rehydrated=!1,this.emit(C.DISCONNECTED)}}export{y as B};

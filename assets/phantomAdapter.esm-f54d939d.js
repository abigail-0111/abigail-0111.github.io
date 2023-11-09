import{ag as q,ah as B,O as v,R as l,U as p,ai as $,aj as U,ak as W,al as L,am as z,an as Y,T as w,_ as g,ao as M,a as C,d,ap as I,aq as x,ar as f,as as y,at as N,au as G,Q as A,N as F,P as V,av as T,V as J}from"./provider-browser-5807d46b.js";import{b as _,n as k,K as Q,V as S}from"./nacl-fast-b95fbcd5.js";import"./index-c463d612.js";import"./bn-07c2e7c8.js";import"./index-8fffa698.js";class X extends q{async init(e){this.chainConfig||(this.chainConfig=B(v.SOLANA,1))}async authenticateUser(){if(!this.provider||this.status!==l.CONNECTED)throw p.notConnectedError();const{chainNamespace:e,chainId:t}=this.chainConfig,n=await this.provider.request({method:"getAccounts"});if(n&&n.length>0){const i=$(n[0],this.name);if(i&&!U(i))return{idToken:i};const c={domain:window.location.origin,uri:window.location.href,address:n[0],chainId:parseInt(t,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},r=await W(c,e),o=new TextEncoder().encode(r),s=await this.provider.request({method:"signMessage",params:{message:o,display:"utf8"}}),h=await L(e,_.encode(s),r,this.name,this.sessionTime,this.clientId,this.web3AuthNetwork);return z(n[0],this.name,h),{idToken:h}}throw p.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnectSession(){super.checkDisconnectionRequirements();const e=await this.provider.request({method:"getAccounts"});e&&e.length>0&&Y(e[0],this.name)}async disconnect(){this.rehydrated=!1,this.emit(w.DISCONNECTED)}}const m=k.lowlevel;function Z(a){let e;typeof a=="string"?e=Buffer.from(a,"hex"):e=a;const t=new Uint8Array(64),n=[m.gf(),m.gf(),m.gf(),m.gf()],i=new Uint8Array([...new Uint8Array(e),...new Uint8Array(32)]),c=new Uint8Array(32);m.crypto_hash(t,i,32),t[0]&=248,t[31]&=127,t[31]|=64,m.scalarbase(n,t),m.pack(c,n);for(let r=0;r<32;r+=1)i[r+32]=c[r];return{sk:Buffer.from(i),pk:Buffer.from(c)}}function j(a){return(e,t,n,i)=>e.method==="solana_chainId"?(t.result=a,i()):n()}function ee(a){return(e,t,n,i)=>e.method==="solana_provider_config"?(t.result=a,i()):n()}function D(a){const{chainId:e}=a;return y([j(e),ee(a)])}function te(a){const{rpcTarget:e}=a,t=G({rpcTarget:e});return{networkMiddleware:y([D(a),t]),fetchMiddleware:t}}function ne(a){let{getAccounts:e}=a;return N(async(t,n,i)=>{const{method:c}=t;if(c!=="getAccounts")return i();if(!e)throw new Error("WalletMiddleware - opts.getAccounts not provided");const r=await e(t);n.result=r})}function ie(a){let{requestAccounts:e}=a;return N(async(t,n,i)=>{const{method:c}=t;if(c!=="requestAccounts")return i();if(!e)throw new Error("WalletMiddleware - opts.requestAccounts not provided");const r=await e(t);n.result=r})}function u(a,e){return N(async(t,n,i)=>{const{method:c}=t;if(c!==a)return i();if(!e)throw new Error(`WalletMiddleware - ${a} not provided`);const r=await e(t);n.result=r})}function K(a){const{getAccounts:e,requestAccounts:t,signTransaction:n,signAndSendTransaction:i,signAllTransactions:c,signMessage:r,getPrivateKey:o,getSecretKey:s}=a;return y([ie({requestAccounts:t}),ne({getAccounts:e}),u("signTransaction",n),u("signAndSendTransaction",i),u("signAllTransactions",c),u("signMessage",r),u("solanaPrivateKey",o),u("private_key",o),u("solanaSecretKey",s)])}function ae(a){let{addNewChainConfig:e,switchSolanaChain:t}=a;return y([u("addSolanaChain",e),u("switchSolanaChain",t)])}function re(a){let{updatePrivatekey:e}=a;return y([u("updateAccount",e)])}class se extends M{constructor(e){let{config:t,state:n}=e;super({config:{chainConfig:C(C({},t.chainConfig),{},{chainNamespace:v.SOLANA})},state:n})}async switchChain(e){throw p.unsupportedOperation("Chain switching is not supported by this adapter")}async setupProvider(e){const t=new I,n=this.getProviderHandlers(e),i=K(n);t.push(i);const c=D(this.config.chainConfig);t.push(c);const r=this.getInjectedProviderProxy(e);r&&t.push(r);const o=x(t);this.updateProviderEngineProxy(o),await this.lookupNetwork()}async lookupNetwork(){const{chainConfig:e}=this.config;return this.update({chainId:e.chainId}),e.chainId||""}getInjectedProviderProxy(e){}}const oe=a=>({requestAccounts:async()=>a.publicKey?[_.encode(a.publicKey.toBytes())]:[],getAccounts:async()=>a.publicKey?[_.encode(a.publicKey.toBytes())]:[],getPrivateKey:async()=>{throw d.rpcErrors.methodNotSupported()},getSecretKey:async()=>{throw d.rpcErrors.methodNotSupported()},signTransaction:async t=>await a.signTransaction(t.params.message),signMessage:async t=>(await a.signMessage(t.params.message,t.params.display)).signature,signAllTransactions:async t=>{var n,i;if(!((n=t.params)!==null&&n!==void 0&&n.message)||!((i=t.params)!==null&&i!==void 0&&i.message.length))throw d.rpcErrors.invalidParams("message");return await a.signAllTransactions(t.params.message)},signAndSendTransaction:async t=>({signature:(await a.signAndSendTransaction(t.params.message)).signature})});function ce(a){return N(async(e,t,n)=>{const i=await a.request(e);t.result=i})}class de extends se{getProviderHandlers(e){return oe(e)}getInjectedProviderProxy(e){return ce(e)}}async function he(a){let{privKey:e,getProviderEngineProxy:t}=a;const n=()=>Q.fromSecretKey(Buffer.from(e,"hex"));if(typeof e!="string")throw f.invalidParams("privKey must be a string");const i=n();return{requestAccounts:async()=>[i.publicKey.toBase58()],getAccounts:async()=>[i.publicKey.toBase58()],getPrivateKey:async()=>e,getSecretKey:async()=>_.encode(i.secretKey),signTransaction:async r=>{var o;if(!((o=r.params)!==null&&o!==void 0&&o.message))throw d.rpcErrors.invalidParams("message");const s=r.params.message;return s.version!==void 0||s instanceof S?s.sign([i]):s.partialSign(i),s},signMessage:async r=>{var o;if(!((o=r.params)!==null&&o!==void 0&&o.message))throw d.rpcErrors.invalidParams("message");return k.sign.detached(r.params.message,i.secretKey)},signAndSendTransaction:async r=>{var o;if(!((o=r.params)!==null&&o!==void 0&&o.message))throw d.rpcErrors.invalidParams("message");const s=t();if(!s)throw d.providerErrors.custom({message:"Provider is not initialized",code:4902});const h=r.params.message;return h.version!==void 0||h instanceof S?h.sign([i]):h.partialSign(i),{signature:await s.request({method:"sendTransaction",params:[Buffer.from(h.serialize()).toString("base64"),{encoding:"base64",preflightCommitment:"confirmed"}]})}},signAllTransactions:async r=>{var o,s,h;if(!((o=r.params)!==null&&o!==void 0&&o.message)||!((s=r.params)!==null&&s!==void 0&&s.message.length))throw d.rpcErrors.invalidParams("message");const P=(h=r.params)===null||h===void 0?void 0:h.message;for(const H of P||[]){const E=H;E.version!==void 0||E instanceof S?E.sign([i]):E.partialSign(i)}return P}}}var R;class O extends M{constructor(e){let{config:t,state:n}=e;super({config:{chainConfig:C(C({},t.chainConfig),{},{chainNamespace:v.SOLANA})},state:n})}async enable(){if(!this.state.privateKey)throw d.providerErrors.custom({message:"Private key is not found in state, plz pass it in constructor state param",code:4902});return await this.setupProvider(this.state.privateKey),this._providerEngineProxy.request({method:"eth_accounts"})}getEd25519Key(e){return Z(e).sk.toString("hex").padStart(128,"0")}async setupProvider(e){const t=await he({privKey:e,getProviderEngineProxy:this.getProviderEngineProxy.bind(this)}),n=K(t),i=new I,{networkMiddleware:c}=te(this.config.chainConfig);i.push(this.getChainSwitchMiddleware()),i.push(this.getAccountMiddleware()),i.push(n),i.push(c);const r=x(i);this.updateProviderEngineProxy(r),await this.lookupNetwork()}async updateAccount(e){if(!this._providerEngineProxy)throw d.providerErrors.custom({message:"Provider is not initialized",code:4902});await this._providerEngineProxy.request({method:"solanaPrivateKey"})!==e.privateKey&&(await this.setupProvider(e.privateKey),this.emit("accountsChanged",{accounts:await this._providerEngineProxy.request({method:"requestAccounts"})}))}async switchChain(e){if(!this._providerEngineProxy)throw d.providerErrors.custom({message:"Provider is not initialized",code:4902});const t=this.getChainConfig(e.chainId);this.update({chainId:"loading"}),this.configure({chainConfig:t});const n=await this._providerEngineProxy.request({method:"solanaPrivateKey"});await this.setupProvider(n)}async lookupNetwork(){if(!this._providerEngineProxy)throw d.providerErrors.custom({message:"Provider is not initialized",code:4902});const e=await this._providerEngineProxy.request({method:"getHealth",params:[]}),{chainConfig:t}=this.config;if(e!=="ok")throw f.rpcConnectionError(`Failed to lookup network for following rpc target: ${t.rpcTarget}`);return this.update({chainId:t.chainId}),this.state.chainId!==t.chainId&&(this.emit("chainChanged",this.state.chainId),this.emit("connect",{chainId:this.state.chainId})),this.state.chainId}getChainSwitchMiddleware(){return ae({addNewChainConfig:async n=>{if(!n.params)throw d.rpcErrors.invalidParams("Missing request params");const{chainId:i,chainName:c,rpcUrls:r,blockExplorerUrls:o,nativeCurrency:s}=n.params;if(!i)throw d.rpcErrors.invalidParams("Missing chainId in chainParams");if(!r||r.length===0)throw d.rpcErrors.invalidParams("Missing rpcUrls in chainParams");if(!s)throw d.rpcErrors.invalidParams("Missing nativeCurrency in chainParams");this.addChain({chainNamespace:v.SOLANA,chainId:i,ticker:(s==null?void 0:s.symbol)||"SOL",tickerName:(s==null?void 0:s.name)||"Solana",displayName:c,rpcTarget:r[0],blockExplorer:(o==null?void 0:o[0])||"",decimals:(s==null?void 0:s.decimals)||9})},switchSolanaChain:async n=>{if(!n.params)throw d.rpcErrors.invalidParams("Missing request params");if(!n.params.chainId)throw d.rpcErrors.invalidParams("Missing chainId");await this.switchChain(n.params)}})}getAccountMiddleware(){return re({updatePrivatekey:async t=>{if(!t.params)throw d.rpcErrors.invalidParams("Missing request params");if(!t.params.privateKey)throw d.rpcErrors.invalidParams("Missing privateKey");const{privateKey:n}=t.params;await this.updateAccount({privateKey:n})}})}}R=O;g(O,"getProviderInstance",async a=>{const e=new R({config:{chainConfig:a.chainConfig}});return await e.setupProvider(a.privKey),e});function b(a,e,t){return new Promise((n,i)=>{t>0?setTimeout(async()=>{const c=await a();c&&n(c),c||b(a,e,t-1).then(r=>(n(r),r)).catch(r=>i(r))},e):n(!1)})}const le=async function(){var a;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{interval:1e3,count:3};return typeof window<"u"&&!!((a=window.solana)!==null&&a!==void 0&&a.isPhantom)||await b(()=>{var i;return(i=window.solana)===null||i===void 0?void 0:i.isPhantom},e.interval,e.count)?window.solana:null};class fe extends X{constructor(){super(...arguments),g(this,"name",A.PHANTOM),g(this,"adapterNamespace",F.SOLANA),g(this,"currentChainNamespace",v.SOLANA),g(this,"type",V.EXTERNAL),g(this,"status",l.NOT_READY),g(this,"_wallet",null),g(this,"phantomProvider",null),g(this,"_onDisconnect",()=>{this._wallet&&(this._wallet.off("disconnect",this._onDisconnect),this.rehydrated=!1,this.status=this.status===l.CONNECTED?l.READY:l.NOT_READY,this.emit(w.DISCONNECTED))})}get isWalletConnected(){var e;return!!((e=this._wallet)!==null&&e!==void 0&&e.isConnected&&this.status===l.CONNECTED)}get provider(){return this.status!==l.NOT_READY&&this.phantomProvider?this.phantomProvider:null}set provider(e){throw new Error("Not implemented")}async init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(await super.init(e),super.checkInitializationRequirements(),this._wallet=await le({interval:500,count:3}),!this._wallet)throw f.notInstalled();this.phantomProvider=new de({config:{chainConfig:this.chainConfig}}),this.status=l.READY,this.emit(w.READY,A.PHANTOM);try{T.debug("initializing phantom adapter"),e.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(t){T.error("Failed to connect with cached phantom provider",t),this.emit("ERRORED",t)}}async connect(){var e=this;try{if(super.checkConnectionRequirements(),this.status=l.CONNECTING,this.emit(w.CONNECTING,{adapter:A.PHANTOM}),!this._wallet)throw f.notInstalled();if(this._wallet.isConnected)await this.connectWithProvider(this._wallet);else{const t=this._wallet._handleDisconnect;try{await new Promise((n,i)=>{const c=async()=>{await this.connectWithProvider(this._wallet),n(this.provider)};if(!this._wallet){i(f.notInstalled());return}this._wallet.once("connect",c),this._wallet._handleDisconnect=function(){i(f.windowClosed());for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t.apply(e._wallet,o)},this._wallet.connect().catch(r=>{i(r)})})}catch(n){throw n instanceof J?n:p.connectionError(n==null?void 0:n.message)}finally{this._wallet._handleDisconnect=t}}if(!this._wallet.publicKey)throw p.connectionError();return this._wallet.on("disconnect",this._onDisconnect),this.provider}catch(t){throw this.status=l.READY,this.rehydrated=!1,this.emit(w.ERRORED,t),t}}async disconnect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{cleanup:!1};await super.disconnectSession();try{var t;await((t=this._wallet)===null||t===void 0?void 0:t.disconnect()),e.cleanup&&(this.status=l.NOT_READY,this.phantomProvider=null,this._wallet=null),await super.disconnect()}catch(n){this.emit(w.ERRORED,p.disconnectionError(n==null?void 0:n.message))}}async getUserInfo(){if(!this.isWalletConnected)throw p.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async addChain(e){var t;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;super.checkAddChainRequirements(e,n),(t=this.phantomProvider)===null||t===void 0||t.addChain(e),this.addChainConfig(e)}async switchChain(e){var t;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;super.checkSwitchChainRequirements(e,n),await((t=this.phantomProvider)===null||t===void 0?void 0:t.switchChain(e)),this.setAdapterSettings({chainConfig:this.getChainConfig(e.chainId)})}async connectWithProvider(e){if(!this.phantomProvider)throw p.connectionError("No phantom provider");return await this.phantomProvider.setupProvider(e),this.status=l.CONNECTED,this.emit(w.CONNECTED,{adapter:A.PHANTOM,reconnected:this.rehydrated}),this.provider}}export{fe as PhantomAdapter};
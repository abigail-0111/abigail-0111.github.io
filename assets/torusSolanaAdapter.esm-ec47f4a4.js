import{l as ee,_ as a,a as v,a7 as z,a0 as K,S as G,X as te,Y as H,Z as ie,J as se,$ as ne,a2 as re,a8 as oe,v as ae,C as V,n as m,a6 as N,a9 as de,aa as ce,ab as le,ac as he,ad as ue,ae as ge,A as S,i as R,a4 as me,u as pe,h as W,W as O,a5 as B}from"./provider-browser-5807d46b.js";import{P as $,b as fe}from"./nacl-fast-b95fbcd5.js";import{C as p,P as we,c as _e,a as A,b as x}from"./home-86ad132c.js";import{d as I}from"./index-cded5acf.js";import{d as ye}from"./index-cb27d7f3.js";import{TorusInjectedProvider as Ie}from"./solanaProvider.esm-908d4a10.js";import"./index-c463d612.js";import"./bn-07c2e7c8.js";import"./index-8fffa698.js";import"./_plugin-vue_export-helper-c27b6911.js";var Te="2.0.0";function Y(r){return r!==null&&typeof r=="object"&&typeof r.pipe=="function"}function ve(r){return Y(r)&&r.writable!==!1&&typeof r._write=="function"&&typeof r._writableState=="object"}function Ee(r){return Y(r)&&r.readable!==!1&&typeof r._read=="function"&&typeof r._readableState=="object"}function Ae(r){return ve(r)&&Ee(r)}var f={errors:{disconnected:()=>"Torus: Lost connection to Torus.",permanentlyDisconnected:()=>"Torus: Disconnected from iframe. Page reload required.",unsupportedSync:r=>`Torus: The Torus Ethereum provider does not support synchronous methods like ${r} without a callback parameter.`,invalidDuplexStream:()=>"Must provide a Node.js-style duplex stream.",invalidOptions:r=>`Invalid options. Received: { maxEventListeners: ${r}}`,invalidRequestArgs:()=>"Expected a single, non-array, object argument.",invalidRequestMethod:()=>"'args.method' must be a non-empty string.",invalidRequestParams:()=>"'args.params' must be an object or array if provided.",invalidLoggerObject:()=>"'args.logger' must be an object if provided.",invalidLoggerMethod:r=>`'args.logger' must include required method '${r}'.`},info:{connected:r=>`Torus: Connected to chain with ID "${r}".`},warnings:{}};const Se={PRODUCTION:"production",DEVELOPMENT:"development",TESTING:"testing"},C={BOTTOM_LEFT:"bottom-left",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",TOP_RIGHT:"top-right"},M={GOOGLE:"google",FACEBOOK:"facebook",REDDIT:"reddit",DISCORD:"discord",TWITCH:"twitch",APPLE:"apple",LINE:"line",GITHUB:"github",KAKAO:"kakao",LINKEDIN:"linkedin",TWITTER:"twitter",WEIBO:"weibo",WECHAT:"wechat",EMAIL_PASSWORDLESS:"email_passwordless"},Ce={en:{embed:{continue:"Continue",actionRequired:"Authorization required",pendingAction:"Click continue to proceed with your request in a popup",cookiesRequired:"Cookies Required",enableCookies:"Please enable cookies in your browser preferences to access Torus",clickHere:"More Info"}},de:{embed:{continue:"Fortsetzen",actionRequired:"Autorisierung erforderlich",pendingAction:"Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",cookiesRequired:"Cookies benötigt",enableCookies:"Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",clickHere:"Mehr Info"}},ja:{embed:{continue:"継続する",actionRequired:"認証が必要です",pendingAction:"続行をクリックして、ポップアップでリクエストを続行します",cookiesRequired:"必要なクッキー",enableCookies:"Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",clickHere:"詳しくは"}},ko:{embed:{continue:"계속하다",actionRequired:"승인 필요",pendingAction:"팝업에서 요청을 진행하려면 계속을 클릭하십시오.",cookiesRequired:"쿠키 필요",enableCookies:"브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",clickHere:"더 많은 정보"}},zh:{embed:{continue:"继续",actionRequired:"需要授权",pendingAction:"单击继续以在弹出窗口中继续您的请求",cookiesRequired:"必填Cookie",enableCookies:"请在您的浏览器首选项中启用cookie以访问Torus。",clickHere:"更多信息"}}};var F={supportedVerifierList:[M.GOOGLE,M.REDDIT,M.DISCORD],api:"https://api.tor.us",translations:Ce,prodTorusUrl:"",localStorageKeyPrefix:"torus-"},c=ee.getLogger("solana-embed");function be(){return(r,e,t)=>{(typeof r.method!="string"||!r.method)&&(e.error=I.ethErrors.rpc.invalidRequest({message:"The request 'method' must be a non-empty string.",data:r})),t(i=>{const{error:s}=e;return s&&c.error(`Torus - RPC Error: ${s.message}`,s),i()})}}function Pe(r,e,t){let i=`Torus: Lost connection to "${r}".`;e!=null&&e.stack&&(i+=`
${e.stack}`),c.warn(i),t&&t.listenerCount("error")>0&&t.emit("error",i)}const L=()=>Math.random().toString(36).slice(2),Z=async r=>{let e,t;switch(r){case"testing":e="https://solana-testing.tor.us",t="debug";break;case"development":e="http://localhost:8080",t="debug";break;default:e="https://solana.tor.us",t="error";break}return{torusUrl:e,logLevel:t}},Re=()=>{let r=window.navigator.language||"en-US";const e=r.split("-");return r=Object.prototype.hasOwnProperty.call(F.translations,e[0])?e[0]:"en",r},Oe={height:660,width:375},Le={height:740,width:1315},ke={height:700,width:1200},J={height:600,width:400};function Ne(r){let e;try{e=window[r];const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){const i=t;return i&&(i.code===22||i.code===1014||i.name==="QuotaExceededError"||i.name==="NS_ERROR_DOM_QUOTA_REACHED")&&e&&e.length!==0}}function b(r){let{width:e,height:t}=r;const i=window.screenLeft!==void 0?window.screenLeft:window.screenX,s=window.screenTop!==void 0?window.screenTop:window.screenY,n=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,o=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,d=1,h=Math.abs((n-e)/2/d+i),l=Math.abs((o-t)/2/d+s);return`titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${t/d},width=${e/d},top=${l},left=${h}`}class X extends G{constructor(e,t){let{maxEventListeners:i=100,jsonRpcStreamName:s="provider"}=t;if(super(),a(this,"isTorus",void 0),a(this,"_rpcEngine",void 0),a(this,"jsonRpcConnectionEvents",void 0),a(this,"_state",void 0),!Ae(e))throw new Error(f.errors.invalidDuplexStream());this.isTorus=!0,this.setMaxListeners(i),this._handleConnect=this._handleConnect.bind(this),this._handleDisconnect=this._handleDisconnect.bind(this),this._handleStreamDisconnect=this._handleStreamDisconnect.bind(this),this._rpcRequest=this._rpcRequest.bind(this),this._initializeState=this._initializeState.bind(this),this.request=this.request.bind(this),this.sendAsync=this.sendAsync.bind(this);const n=new te;H(e,n,e,this._handleStreamDisconnect.bind(this,"Torus")),n.ignoreStream("phishing");const o=ie();H(o.stream,n.createStream(s),o.stream,this._handleStreamDisconnect.bind(this,"Torus RpcProvider"));const d=new se;d.push(ne()),d.push(be()),d.push(_e({origin:location.origin})),d.push(o.middleware),this._rpcEngine=d,this.jsonRpcConnectionEvents=o.events}async request(e){if(!e||typeof e!="object"||Array.isArray(e))throw I.ethErrors.rpc.invalidRequest({message:f.errors.invalidRequestArgs(),data:e});const{method:t,params:i}=e;if(typeof t!="string"||t.length===0)throw I.ethErrors.rpc.invalidRequest({message:f.errors.invalidRequestMethod(),data:e});if(i!==void 0&&!Array.isArray(i)&&(typeof i!="object"||i===null))throw I.ethErrors.rpc.invalidRequest({message:f.errors.invalidRequestParams(),data:e});return new Promise((s,n)=>{this._rpcRequest({method:t,params:i},z(s,n))})}send(e,t){this._rpcRequest(e,t)}sendAsync(e){return new Promise((t,i)=>{this._rpcRequest(e,z(t,i))})}_handleStreamDisconnect(e,t){Pe(e,t,this),this._handleDisconnect(!1,t?t.message:void 0)}}const E=r=>{const e=window.document.createElement("template"),t=r.trim();return e.innerHTML=t,e.content.firstChild};function k(r){return r.version===void 0}class Q extends G{constructor(e){let{url:t,target:i,features:s,timeout:n=3e4}=e;super(),a(this,"url",void 0),a(this,"target",void 0),a(this,"features",void 0),a(this,"window",void 0),a(this,"windowTimer",void 0),a(this,"iClosedWindow",void 0),a(this,"timeout",void 0),this.url=t,this.target=i||"_blank",this.features=s||b(ke),this.window=void 0,this.windowTimer=void 0,this.iClosedWindow=!1,this.timeout=n,this._setupTimer()}_setupTimer(){this.windowTimer=Number(setInterval(()=>{this.window&&this.window.closed&&(clearInterval(this.windowTimer),setTimeout(()=>{this.iClosedWindow||this.emit("close"),this.iClosedWindow=!1,this.window=void 0},this.timeout)),this.window===void 0&&clearInterval(this.windowTimer)},500))}open(){var e;return this.window=window.open(this.url.href,this.target,this.features),(e=this.window)!=null&&e.focus&&this.window.focus(),Promise.resolve()}close(){this.iClosedWindow=!0,this.window&&this.window.close()}redirect(e){e?window.location.replace(this.url.href):window.location.href=this.url.href}}class D extends X{constructor(e,t){let{maxEventListeners:i=100,jsonRpcStreamName:s="provider"}=t;super(e,{maxEventListeners:i,jsonRpcStreamName:s}),a(this,"embedTranslations",void 0),a(this,"torusUrl",void 0),a(this,"dappStorageKey",void 0),a(this,"windowRefs",void 0),a(this,"tryWindowHandle",void 0),a(this,"torusAlertContainer",void 0),a(this,"torusIframe",void 0),this._state=v({},D._defaultState),this.torusUrl="",this.dappStorageKey="";const n=F.translations[Re()];this.embedTranslations=n.embed,this.windowRefs={},this.on("connect",()=>{this._state.isConnected=!0});const o=d=>{const{method:h,params:l}=d;if(h===A.IFRAME_STATUS){const{isFullScreen:u,rid:g}=l;this._displayIframe({isFull:u,rid:g})}else if(h===A.CREATE_WINDOW){const{windowId:u,url:g}=l;this._createPopupBlockAlert(u,g)}else if(h===A.CLOSE_WINDOW)this._handleCloseWindow(l);else if(h===A.USER_LOGGED_IN){const{currentLoginProvider:u}=l;this._state.isLoggedIn=!0,this._state.currentLoginProvider=u}else h===A.USER_LOGGED_OUT&&(this._state.isLoggedIn=!1,this._state.currentLoginProvider=null,this._displayIframe())};this.jsonRpcConnectionEvents.on("notification",o)}get isLoggedIn(){return this._state.isLoggedIn}get isIFrameFullScreen(){return this._state.isIFrameFullScreen}isConnected(){return this._state.isConnected}async _initializeState(e){try{const{torusUrl:t,dappStorageKey:i,torusAlertContainer:s,torusIframe:n}=e;this.torusUrl=t,this.dappStorageKey=i,this.torusAlertContainer=s,this.torusIframe=n,this.torusIframe.addEventListener("load",()=>{this._state.isIFrameFullScreen||this._displayIframe()});const{currentLoginProvider:o,isLoggedIn:d}=await this.request({method:p.GET_PROVIDER_STATE,params:[]});this._handleConnect(o,d)}catch(t){c.error("Torus: Failed to get initial state. Please report this bug.",t)}finally{c.info("initialized communication state"),this._state.initialized=!0,this.emit("_initialized")}}_handleWindow(e){let{url:t,target:i,features:s}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new URL(t||`${this.torusUrl}/redirect?windowId=${e}`);this.dappStorageKey&&(n.hash?n.hash+=`&dappStorageKey=${this.dappStorageKey}`:n.hash=`#dappStorageKey=${this.dappStorageKey}`);const o=new Q({url:n,target:i,features:s});if(o.open(),!o.window){this._createPopupBlockAlert(e,n.href);return}this.windowRefs[e]=o,this.request({method:p.OPENED_WINDOW,params:{windowId:e}}),o.once("close",()=>{delete this.windowRefs[e],this.request({method:p.CLOSED_WINDOW,params:{windowId:e}})})}_displayIframe(){let{isFull:e=!1,rid:t=""}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i={};if(e)i.display="block",i.width="100%",i.height="100%",i.top="0px",i.right="0px",i.left="0px",i.bottom="0px";else switch(i.display=this._state.torusWidgetVisibility?"block":"none",i.height="70px",i.width="70px",this._state.buttonPosition){case C.TOP_LEFT:i.top="0px",i.left="0px",i.right="auto",i.bottom="auto";break;case C.TOP_RIGHT:i.top="0px",i.right="0px",i.left="auto",i.bottom="auto";break;case C.BOTTOM_RIGHT:i.bottom="0px",i.right="0px",i.top="auto",i.left="auto";break;case C.BOTTOM_LEFT:default:i.bottom="0px",i.left="0px",i.top="auto",i.right="auto";break}Object.assign(this.torusIframe.style,i),this._state.isIFrameFullScreen=e,this.request({method:p.IFRAME_STATUS,params:{isIFrameFullScreen:e,rid:t}})}hideTorusButton(){this._state.torusWidgetVisibility=!1,this._displayIframe()}showTorusButton(){this._state.torusWidgetVisibility=!0,this._displayIframe()}_rpcRequest(e,t){const i=t,s=e;Array.isArray(s)||s.jsonrpc||(s.jsonrpc="2.0"),this.tryWindowHandle(s,i)}_handleConnect(e,t){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{currentLoginProvider:e,isLoggedIn:t}),c.debug(f.info.connected(e)))}_handleDisconnect(e,t){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!e){this._state.isConnected=!1;let i;e?(i=new I.EthereumRpcError(1013,t||f.errors.disconnected()),c.debug(i)):(i=new I.EthereumRpcError(1011,t||f.errors.permanentlyDisconnected()),c.error(i),this._state.currentLoginProvider=null,this._state.isLoggedIn=!1,this._state.torusWidgetVisibility=!1,this._state.isIFrameFullScreen=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",i)}}_handleCloseWindow(e){const{windowId:t}=e;this.windowRefs[t]&&(this.windowRefs[t].close(),delete this.windowRefs[t])}async _createPopupBlockAlert(e,t){const i=this.getLogoUrl(),s=E(`<div id="torusAlert" class="torus-alert--v2"><div id="torusAlert__logo"><img src="${i}" /></div><div><h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1><p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p></div></div>`),n=E(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`),o=E('<div id="torusAlert__btn-container"></div>');o.appendChild(n),s.appendChild(o);const d=()=>{n.addEventListener("click",()=>{this._handleWindow(e,{url:t,target:"_blank",features:b(J)}),s.remove(),this.torusAlertContainer.children.length===0&&(this.torusAlertContainer.style.display="none")})};(()=>{this.torusAlertContainer.appendChild(s)})(),d(),this.torusAlertContainer.style.display="block"}getLogoUrl(){return`${this.torusUrl}/images/torus_icon-blue.svg`}}a(D,"_defaultState",{buttonPosition:"bottom-left",currentLoginProvider:null,isIFrameFullScreen:!1,hasEmittedConnection:!1,torusWidgetVisibility:!1,initialized:!1,isLoggedIn:!1,isPermanentlyDisconnected:!1,isConnected:!1});class U extends X{constructor(e,t){let{maxEventListeners:i=100,jsonRpcStreamName:s="provider"}=t;super(e,{maxEventListeners:i,jsonRpcStreamName:s}),a(this,"chainId",void 0),a(this,"selectedAddress",void 0),a(this,"tryWindowHandle",void 0),this._state=v({},U._defaultState),this.selectedAddress=null,this.chainId=null,this._handleAccountsChanged=this._handleAccountsChanged.bind(this),this._handleChainChanged=this._handleChainChanged.bind(this),this._handleUnlockStateChanged=this._handleUnlockStateChanged.bind(this),this.on("connect",()=>{this._state.isConnected=!0});const n=o=>{const{method:d,params:h}=o;d===x.ACCOUNTS_CHANGED?this._handleAccountsChanged(h):d===x.UNLOCK_STATE_CHANGED?this._handleUnlockStateChanged(h):d===x.CHAIN_CHANGED&&this._handleChainChanged(h)};this.jsonRpcConnectionEvents.on("notification",n)}isConnected(){return this._state.isConnected}async _initializeState(){try{const{accounts:e,chainId:t,isUnlocked:i}=await this.request({method:we.GET_PROVIDER_STATE,params:[]});this.emit("connect",{chainId:t}),this._handleChainChanged({chainId:t}),this._handleUnlockStateChanged({accounts:e,isUnlocked:i}),this._handleAccountsChanged(e)}catch(e){c.error("Torus: Failed to get initial state. Please report this bug.",e)}finally{c.info("initialized provider state"),this._state.initialized=!0,this.emit("_initialized")}}_rpcRequest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=t;const n=e;if(!Array.isArray(n)){if(n.jsonrpc||(n.jsonrpc="2.0"),n.method==="solana_accounts"||n.method==="solana_requestAccounts")s=(o,d)=>{this._handleAccountsChanged(d.result||[],n.method==="solana_accounts",i),t(o,d)};else if(n.method==="wallet_getProviderState"){this._rpcEngine.handle(e,s);return}}this.tryWindowHandle(n,s)}_handleConnect(e){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{chainId:e}),c.debug(f.info.connected(e)))}_handleDisconnect(e,t){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!e){this._state.isConnected=!1;let i;e?(i=new I.EthereumRpcError(1013,t||f.errors.disconnected()),c.debug(i)):(i=new I.EthereumRpcError(1011,t||f.errors.permanentlyDisconnected()),c.error(i),this.chainId=null,this._state.accounts=null,this.selectedAddress=null,this._state.isUnlocked=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",i)}}_handleAccountsChanged(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=e;Array.isArray(s)||(c.error("Torus: Received non-array accounts parameter. Please report this bug.",s),s=[]);for(const n of e)if(typeof n!="string"){c.error("Torus: Received non-string account. Please report this bug.",e),s=[];break}ye(this._state.accounts,s)||(t&&Array.isArray(this._state.accounts)&&this._state.accounts.length>0&&!i&&c.error('Torus: "solana_accounts" unexpectedly updated accounts. Please report this bug.',s),this._state.accounts=s,this.emit("accountsChanged",s)),this.selectedAddress!==s[0]&&(this.selectedAddress=s[0]||null)}_handleChainChanged(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!e){c.error("Torus: Received invalid network parameters. Please report this bug.",{chainId:e});return}e==="loading"?this._handleDisconnect(!0):(this._handleConnect(e),e!==this.chainId&&(this.chainId=e,this._state.initialized&&this.emit("chainChanged",this.chainId)))}_handleUnlockStateChanged(){let{accounts:e,isUnlocked:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof t!="boolean"){c.error("Torus: Received invalid isUnlocked parameter. Please report this bug.",{isUnlocked:t});return}t!==this._state.isUnlocked&&(this._state.isUnlocked=t,this._handleAccountsChanged(e||[]))}}a(U,"_defaultState",{accounts:null,isConnected:!1,isUnlocked:!1,initialized:!1,isPermanentlyDisconnected:!1,hasEmittedConnection:!1});function j(r){return new Promise((e,t)=>{try{const i=document.createElement("img");i.onload=()=>e(!0),i.onerror=()=>e(!1),i.src=r}catch(i){t(i)}})}const De=r=>{const{document:e}=r,t=e.querySelector('head > meta[property="og:site_name"]');if(t)return t.content;const i=e.querySelector('head > meta[name="title"]');return i?i.content:e.title&&e.title.length>0?e.title:r.location.hostname};async function Ue(r){try{const{document:e}=r;let t=e.querySelector('head > link[rel="shortcut icon"]');return t&&await j(t.href)||(t=Array.from(e.querySelectorAll('head > link[rel="icon"]')).find(i=>!!i.href),t&&await j(t.href))?t.href:""}catch{return""}}const qe=async()=>({name:De(window),icon:await Ue(window)}),We=["send_transaction","sign_transaction","sign_all_transactions","sign_message","connect"],xe=[p.SET_PROVIDER],Me=Ne("localStorage");(async function(){try{if(typeof document>"u")return;const e=document.createElement("link"),{torusUrl:t}=await Z("production");e.href=`${t}/frame`,e.crossOrigin="anonymous",e.type="text/html",e.rel="prefetch",e.relList&&e.relList.supports&&e.relList.supports("prefetch")&&document.head.appendChild(e)}catch(e){c.warn(e)}})();class ze{constructor(){let{modalZIndex:e=99999}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};a(this,"isInitialized",void 0),a(this,"torusAlert",void 0),a(this,"modalZIndex",void 0),a(this,"alertZIndex",void 0),a(this,"requestedLoginProvider",void 0),a(this,"provider",void 0),a(this,"communicationProvider",void 0),a(this,"dappStorageKey",void 0),a(this,"isTopupHidden",!1),a(this,"torusAlertContainer",void 0),a(this,"torusUrl",void 0),a(this,"torusIframe",void 0),a(this,"styleLink",void 0),this.torusUrl="",this.isInitialized=!1,this.requestedLoginProvider=null,this.modalZIndex=e,this.alertZIndex=e+1e3,this.dappStorageKey=""}get isLoggedIn(){return this.communicationProvider?this.communicationProvider.isLoggedIn:!1}async init(){let{buildEnv:e=Se.PRODUCTION,enableLogging:t=!1,network:i,showTorusButton:s=!1,useLocalStorage:n=!1,buttonPosition:o=C.BOTTOM_LEFT,apiKey:d="torus-default",extraParams:h={},whiteLabel:l}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.isInitialized)throw new Error("Already initialized");re(d);const{torusUrl:u,logLevel:g}=await Z(e);c.enableAll(),c.info(u,"url loaded"),c.info(`Solana Embed Version :${Te}`),this.torusUrl=u,c.setDefaultLevel(g),t?c.enableAll():c.disableAll();const w=this.handleDappStorageKey(n),_=new URL(u);_.pathname.endsWith("/")?_.pathname+="frame":_.pathname+="/frame";const y=new URLSearchParams;return w&&y.append("dappStorageKey",w),y.append("origin",window.location.origin),_.hash=y.toString(),this.torusIframe=E(`<iframe
        id="torusIframe"
        class="torusIframe"
        src="${_.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex.toString()}"
      ></iframe>`),this.torusAlertContainer=E(`<div id="torusAlertContainer" style="display:none; z-index: ${this.alertZIndex.toString()}"></div>`),this.styleLink=E(`<link href="${u}/css/widget.css" rel="stylesheet" type="text/css">`),new Promise((q,P)=>{try{this.torusIframe.addEventListener("load",async()=>{const T=await qe();this.torusIframe.contentWindow.postMessage({buttonPosition:o,apiKey:d,network:i,dappMetadata:T,extraParams:h,whiteLabel:l},_.origin),await this._setupWeb3({torusUrl:u}),s&&this.showTorusButton(),l!=null&&l.topupHide?this.isTopupHidden=l.topupHide:this.hideTorusButton(),this.isInitialized=!0,window.torus=this,q()}),window.document.head.appendChild(this.styleLink),window.document.body.appendChild(this.torusIframe),window.document.body.appendChild(this.torusAlertContainer)}catch(T){P(T)}})}async login(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.isInitialized)throw new Error("Call init() first");try{this.requestedLoginProvider=e.loginProvider||null,this.requestedLoginProvider||this.communicationProvider._displayIframe({isFull:!0});const t=await new Promise((i,s)=>{this.provider._rpcRequest({method:"solana_requestAccounts",params:[this.requestedLoginProvider,e.login_hint]},z(i,s))});if(Array.isArray(t)&&t.length>0)return t;throw new Error("Login failed")}catch(t){throw c.error("login failed",t),t}finally{this.communicationProvider.isIFrameFullScreen&&this.communicationProvider._displayIframe()}}async loginWithPrivateKey(e){if(!this.isInitialized)throw new Error("Call init() first");const{privateKey:t,userInfo:i}=e,{success:s}=await this.communicationProvider.request({method:"login_with_private_key",params:{privateKey:t,userInfo:i}});if(!s)throw new Error("Login Failed")}async logout(){if(!this.communicationProvider.isLoggedIn)throw new Error("Not logged in");await this.communicationProvider.request({method:p.LOGOUT,params:[]}),this.requestedLoginProvider=null}async cleanUp(){this.communicationProvider.isLoggedIn&&await this.logout(),this.clearInit()}clearInit(){function e(t){return t instanceof Element||t instanceof Document}e(this.styleLink)&&window.document.body.contains(this.styleLink)&&(this.styleLink.remove(),this.styleLink=void 0),e(this.torusIframe)&&window.document.body.contains(this.torusIframe)&&(this.torusIframe.remove(),this.torusIframe=void 0),e(this.torusAlertContainer)&&window.document.body.contains(this.torusAlertContainer)&&(this.torusAlert=void 0,this.torusAlertContainer.remove(),this.torusAlertContainer=void 0),this.isInitialized=!1}hideTorusButton(){this.communicationProvider.hideTorusButton()}showTorusButton(){this.communicationProvider.showTorusButton()}async setProvider(e){await this.communicationProvider.request({method:p.SET_PROVIDER,params:v({},e)})}async showWallet(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=await this.communicationProvider.request({method:p.WALLET_INSTANCE_ID,params:[]}),s=e?`/${e}`:"",n=new URL(`${this.torusUrl}/wallet${s}`);n.searchParams.append("instanceId",i),Object.keys(t).forEach(d=>{n.searchParams.append(d,t[d])}),this.dappStorageKey&&(n.hash=`#dappStorageKey=${this.dappStorageKey}`),new Q({url:n,features:b(Le)}).open()}async getUserInfo(){return await this.communicationProvider.request({method:p.USER_INFO,params:[]})}async initiateTopup(e,t){if(!this.isInitialized)throw new Error("Torus is not initialized");const i=L();return this.communicationProvider._handleWindow(i),await this.communicationProvider.request({method:p.TOPUP,params:{provider:e,params:t,windowId:i}})}async getAccounts(){return await this.provider.request({method:"getAccounts",params:[]})}async sendTransaction(e){const t=k(e),i=t?e.serialize({requireAllSignatures:!1}).toString("hex"):Buffer.from(e.serialize()).toString("hex");return await this.provider.request({method:"send_transaction",params:{message:i,isLegacyTransaction:t}})}async signAndSendTransaction(e,t){const i=k(e),s=i?e.serialize({requireAllSignatures:!1}).toString("hex"):Buffer.from(e.serialize()).toString("hex");return{signature:await this.provider.request({method:"send_transaction",params:{message:s,options:t,isLegacyTransaction:i}})}}async signTransaction(e){const t=k(e),i=t?e.serializeMessage().toString("hex"):Buffer.from(e.message.serialize()).toString("hex"),s=await this.provider.request({method:"sign_transaction",params:{message:i,messageOnly:!0,isLegacyTransaction:t}}),n=JSON.parse(s),o={publicKey:new $(n.publicKey),signature:Buffer.from(n.signature,"hex")};return e.addSignature(o.publicKey,o.signature),e}async signAllTransactions(e){let t;const i=e.map(o=>(t=k(o),t?o.serializeMessage().toString("hex"):Buffer.from(o.message.serialize()).toString("hex"))),n=(await this.provider.request({method:"sign_all_transactions",params:{message:i,messageOnly:!0,isLegacyTransaction:t}})).map(o=>{const d=JSON.parse(o);return{publicKey:new $(d.publicKey),signature:Buffer.from(d.signature,"hex")}});return e.forEach((o,d)=>(o.addSignature(n[d].publicKey,n[d].signature),o)),e}async signMessage(e){return await this.provider.request({method:"sign_message",params:{data:e}})}async getGaslessPublicKey(){return await this.provider.request({method:"get_gasless_public_key",params:[]})}handleDappStorageKey(e){const t=`${F.localStorageKeyPrefix}${window.location.hostname}`;let i="";if(Me&&e){const s=window.localStorage.getItem(t);if(s)i=s;else{const n=`torus-app-${L()}`;window.localStorage.setItem(t,n),i=n}}return this.dappStorageKey=i,i}async _setupWeb3(e){c.info("setupWeb3 running");const t=new K({name:"embed_torus",target:"iframe_torus",targetWindow:this.torusIframe.contentWindow}),i=new K({name:"embed_communication",target:"iframe_communication",targetWindow:this.torusIframe.contentWindow}),s=new U(t,{}),n=new D(i,{});s.tryWindowHandle=(l,u)=>{const g=l;if(!Array.isArray(g)&&We.includes(g.method)){if(!this.communicationProvider.isLoggedIn)throw new Error("User Not Logged In");const w=L();n._handleWindow(w,{target:"_blank",features:b(J)}),g.windowId=w}s._rpcEngine.handle(g,u)},n.tryWindowHandle=(l,u)=>{const g=l;if(!Array.isArray(g)&&xe.includes(g.method)){const w=L();n._handleWindow(w,{target:"_blank",features:b(Oe)}),g.params.windowId=w}n._rpcEngine.handle(g,u)};const o=l=>{const u=s[l],g=this;s[l]=function(_,y){const{method:q,params:P=[]}=_;if(q==="solana_requestAccounts"){if(!y)return g.login({loginProvider:P[0]});g.login({loginProvider:P[0]}).then(T=>y(null,T)).catch(T=>y(T))}return u.apply(this,[_,y])}};o("request"),o("sendAsync"),o("send");const d=new Proxy(s,{deleteProperty:()=>!0}),h=new Proxy(n,{deleteProperty:()=>!0});this.provider=d,this.communicationProvider=h,await Promise.all([s._initializeState(),n._initializeState(v(v({},e),{},{dappStorageKey:this.dappStorageKey,torusAlertContainer:this.torusAlertContainer,torusIframe:this.torusIframe}))]),c.debug("Torus - injected provider")}}class Fe extends oe{async init(e){this.chainConfig||(this.chainConfig=ae(V.SOLANA,1))}async authenticateUser(){if(!this.provider||this.status!==m.CONNECTED)throw N.notConnectedError();const{chainNamespace:e,chainId:t}=this.chainConfig,i=await this.provider.request({method:"getAccounts"});if(i&&i.length>0){const s=de(i[0],this.name);if(s&&!ce(s))return{idToken:s};const n={domain:window.location.origin,uri:window.location.href,address:i[0],chainId:parseInt(t,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},o=await le(n,e),d=new TextEncoder().encode(o),h=await this.provider.request({method:"signMessage",params:{message:d,display:"utf8"}}),l=await he(e,fe.encode(h),o,this.name,this.sessionTime,this.clientId,this.web3AuthNetwork);return ue(i[0],this.name,l),{idToken:l}}throw N.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnectSession(){super.checkDisconnectionRequirements();const e=await this.provider.request({method:"getAccounts"});e&&e.length>0&&ge(e[0],this.name)}async disconnect(){this.rehydrated=!1,this.emit(S.DISCONNECTED)}}class Xe extends Fe{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(e),a(this,"name",R.TORUS_SOLANA),a(this,"adapterNamespace",me.SOLANA),a(this,"currentChainNamespace",V.SOLANA),a(this,"type",pe.EXTERNAL),a(this,"status",m.NOT_READY),a(this,"torusInstance",null),a(this,"torusWalletOptions",void 0),a(this,"initParams",void 0),a(this,"loginSettings",{}),a(this,"solanaProvider",null),this.torusWalletOptions=e.adapterSettings||{},this.initParams=e.initParams||{},this.loginSettings=e.loginSettings||{}}get provider(){return this.status!==m.NOT_READY&&this.solanaProvider?this.solanaProvider:null}set provider(e){throw new Error("Not implemented")}async init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};await super.init(e),super.checkInitializationRequirements();const{chainId:t,blockExplorer:i,displayName:s,rpcTarget:n,ticker:o,tickerName:d}=this.chainConfig,h={chainId:t,rpcTarget:n,blockExplorerUrl:i,displayName:s,tickerName:d,ticker:o,logo:""};this.torusInstance=new ze(this.torusWalletOptions),W.debug("initializing torus solana adapter init"),await this.torusInstance.init(v(v({showTorusButton:!1},this.initParams),{},{network:h})),this.solanaProvider=new Ie({config:{chainConfig:this.chainConfig}}),this.status=m.READY,this.emit(S.READY,R.TORUS_SOLANA);try{W.debug("initializing torus solana adapter"),e.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(l){W.error("Failed to connect with cached torus solana provider",l),this.emit(S.ERRORED,l)}}async connect(){if(super.checkConnectionRequirements(),!this.torusInstance)throw O.notReady("Torus wallet is not initialized");if(!this.solanaProvider)throw O.notReady("Torus wallet is not initialized");this.status=m.CONNECTING,this.emit(S.CONNECTING,{adapter:R.TORUS_SOLANA});try{await this.torusInstance.login(this.loginSettings);try{const e=this.torusInstance.provider;e.sendTransaction=this.torusInstance.sendTransaction.bind(this.torusInstance),e.signAllTransactions=this.torusInstance.signAllTransactions.bind(this.torusInstance),e.signMessage=this.torusInstance.signMessage.bind(this.torusInstance),e.signTransaction=this.torusInstance.signTransaction.bind(this.torusInstance),await this.solanaProvider.setupProvider(e)}catch(e){if(e instanceof B&&e.code===5010){const{chainId:t,blockExplorer:i,displayName:s,rpcTarget:n,ticker:o,tickerName:d}=this.chainConfig,h={chainId:t,rpcTarget:n,blockExplorerUrl:i,displayName:s,tickerName:d,ticker:o,logo:""};await this.torusInstance.setProvider(h)}else throw e}return this.status=m.CONNECTED,this.torusInstance.showTorusButton(),this.emit(m.CONNECTED,{adapter:R.TORUS_SOLANA,reconnected:this.rehydrated}),this.provider}catch(e){throw this.status=m.READY,this.rehydrated=!1,this.emit(S.ERRORED,e),e instanceof B?e:N.connectionError("Failed to login with torus solana wallet")}}async disconnect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{cleanup:!1};if(await super.disconnectSession(),!this.torusInstance)throw O.notReady("Torus wallet is not initialized");await this.torusInstance.logout(),e.cleanup?(this.status=m.NOT_READY,this.torusInstance=null,this.solanaProvider=null):this.status=m.READY,await super.disconnect()}async getUserInfo(){if(this.status!==m.CONNECTED)throw N.notConnectedError("Not connected with wallet");if(!this.torusInstance)throw O.notReady("Torus wallet is not initialized");return await this.torusInstance.getUserInfo()}async addChain(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;super.checkAddChainRequirements(e,t),this.addChainConfig(e)}async switchChain(e){var t;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;super.checkSwitchChainRequirements(e,i);const s=this.getChainConfig(e.chainId);await((t=this.torusInstance)===null||t===void 0?void 0:t.setProvider({rpcTarget:s.rpcTarget,chainId:s.chainId,displayName:s.displayName,blockExplorerUrl:s.blockExplorer,ticker:s.ticker,tickerName:s.tickerName,logo:"https://images.web3auth.io/login-torus-solana.svg"})),this.setAdapterSettings({chainConfig:this.getChainConfig(e.chainId)})}}export{Xe as SolanaWalletAdapter};

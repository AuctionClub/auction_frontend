(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9617],{93840:function(e,t,n){Promise.resolve().then(n.bind(n,97485))},97485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var s=n(57437),r=n(2265),i=n(39296),c=n(18785),a=n(20703),o=n(47907);function l(e){let{item:t}=e;(0,o.usePathname)();let[n,i]=(0,r.useState)(t.img);return(0,s.jsxs)("div",{className:"w-[250px] rounded-lg shadow-lg overflow-hidden mr-5 last:mr-0 cursor-pointer relative top-0 hover:-top-2 transition-[top] duration-100 ease-in",children:[(0,s.jsx)(a.default,{src:n,width:250,height:250,alt:"Picture of the author",onError:()=>i("https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000")}),(0,s.jsxs)("div",{className:"px-2 py-4  relative pt-4",children:[(0,s.jsx)("p",{className:"font-bold text-lg mb-1",children:t.name}),(0,s.jsx)("div",{className:"text-xs",children:(0,s.jsxs)("div",{className:"flex mt-0.5",children:[(0,s.jsx)("p",{children:"类型："}),(0,s.jsx)("p",{children:t.tags.join(" \xb7 ")})]})})]})]})}var d=n(50995);let u=async e=>{let t=await fetch(e);if(!t.ok)throw Error("Failed to fetch: ".concat(t.statusText));return t.json()},h=async e=>u(e);var f=e=>{let[t,n]=(0,r.useState)([]),[s,i]=(0,r.useState)(!0),[c,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{try{let t=(await u("https://testnets-api.opensea.io/api/v2/chain/sepolia/account/".concat(e.toString(),"/nfts"))).nfts.map(async e=>{if(!e.metadata_url)return{tokenId:e.identifier,contractAddress:e.contract_address,img:"",price:"N/A",tags:[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:"Unknown",description:"No description available"};let t=await h(e.metadata_url);return{tokenId:e.identifier,contractAddress:e.contract_address,img:t.image||"",price:"N/A",tags:t.attributes?t.attributes.map(e=>"".concat(e.trait_type||"N/A",":").concat(e.value||"N/A")):[],currentBid:"N/A",currentBidder:"N/A",deadline:"N/A",name:t.name||"Unknown",description:t.description||"No description available"}}),s=await Promise.all(t);n(s)}catch(e){a(e.message)}finally{i(!1)}})()},[e]),{nfts:t,loading:s,error:c}},x=()=>{let e=(0,i.m)(),{nfts:t,loading:n,error:r}=f(null==e?void 0:e.address);return(console.log(t),n)?(0,s.jsxs)("div",{className:"h-full flex justify-center items-center",children:[(0,s.jsx)(c.$j,{size:"3"}),(0,s.jsx)(c.xv,{size:"2",className:"text-gray-500 font-bold",children:"loading..."})]}):r?(0,s.jsxs)("div",{children:["Error:",r]}):(0,s.jsx)("div",{className:"p-5 hover:shadow-lg shadow-md flex flex-col h-full",children:(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"flex justify-between font-bold text-lg",children:(0,s.jsx)("div",{children:"My NFT"})}),(0,s.jsx)(c.xr,{size:"1",type:"always",scrollbars:"horizontal",children:(0,s.jsx)("div",{className:"flex justify-between",children:t.map((e,t)=>(0,s.jsx)(d.default,{className:"ml-2 mr-2",item:e,children:(0,s.jsx)(l,{item:e},t)},t))})})]})})},m=n(83825),g=()=>(0,s.jsxs)("div",{className:"p-5 hover:shadow-lg shadow-md flex flex-col h-full ",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)("div",{className:"flex justify-between font-bold text-lg",children:(0,s.jsx)("div",{children:"My Balance"})})}),(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsxs)(m.fC,{className:"w-[260px]",children:[(0,s.jsxs)(m.gN,{className:"grid mb-[10px]",name:"balance",children:[(0,s.jsxs)("div",{className:"flex items-baseline justify-between",children:[(0,s.jsx)(m.__,{className:"text-[15px] font-medium leading-[35px]",children:"Balance:"}),(0,s.jsx)(m.v0,{className:"text-[13px] opacity-[0.8] text-red-600",match:"valueMissing",children:"Please enter your email"})]}),(0,s.jsx)(m.oT,{asChild:!0,children:(0,s.jsxs)("span",{className:"box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6",children:[1e3," ","ETH"]})})]}),(0,s.jsx)(m.k4,{asChild:!0,children:(0,s.jsx)("button",{className:"box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]",children:"Withdraw"})})]})})]}),v=()=>(0,s.jsxs)("div",{className:"p-5 hover:shadow-lg shadow-md flex flex-col h-full",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)("div",{className:"flex justify-between font-bold text-lg",children:(0,s.jsx)("div",{children:"Initiated Auction Record"})})}),(0,s.jsx)(c.xr,{type:"always",scrollbars:"vertical",style:{height:"35vh"},children:(0,s.jsxs)(c.iA.fC,{variant:"surface",size:"2",children:[(0,s.jsx)(c.iA.h4,{children:(0,s.jsxs)(c.iA.X2,{children:[(0,s.jsx)(c.iA.Ni,{children:"Index"}),(0,s.jsx)(c.iA.Ni,{children:"Starting Price"}),(0,s.jsx)(c.iA.Ni,{children:"Final Price"})]})}),(0,s.jsx)(c.iA.uT,{children:[...Array(20)].map((e,t)=>(0,s.jsxs)(c.iA.X2,{children:[(0,s.jsx)(c.iA.x0,{children:t+1}),(0,s.jsxs)(c.iA.bL,{children:[3+.1*t," ","ETH"]}),(0,s.jsxs)(c.iA.bL,{children:["+",.5+.05*t," ","ETH"]})]},t))})]})})]}),j=()=>(0,s.jsxs)("div",{className:"p-5 hover:shadow-lg shadow-md flex flex-col h-full",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)("div",{className:"flex justify-between font-bold text-lg",children:(0,s.jsx)("div",{children:"My Bid Record"})})}),(0,s.jsx)(c.xr,{type:"always",scrollbars:"vertical",style:{height:"35vh"},children:(0,s.jsxs)(c.iA.fC,{variant:"surface",size:"2",children:[(0,s.jsx)(c.iA.h4,{children:(0,s.jsxs)(c.iA.X2,{children:[(0,s.jsx)(c.iA.Ni,{children:"Index"}),(0,s.jsx)(c.iA.Ni,{children:"Bid Amount"}),(0,s.jsx)(c.iA.Ni,{children:"Bid Revenue"}),(0,s.jsx)(c.iA.Ni,{children:"Auction Type"})]})}),(0,s.jsx)(c.iA.uT,{children:[...Array(20)].map((e,t)=>(0,s.jsxs)(c.iA.X2,{children:[(0,s.jsx)(c.iA.x0,{children:t+1}),(0,s.jsxs)(c.iA.bL,{children:[3+.1*t," ","ETH"]}),(0,s.jsxs)(c.iA.bL,{children:["+",.5+.05*t," ","ETH"]}),(0,s.jsx)(c.iA.bL,{children:t%2==0?"Dutch Auction":"English Auction"})]},t))})]})})]}),p=()=>{var e;let t=(0,i.m)();return(0,s.jsx)(s.Fragment,{children:(null==t?void 0:t.isConnected)&&(null==t?void 0:null===(e=t.chain)||void 0===e?void 0:e.name)==="Sepolia"?(0,s.jsxs)("div",{className:"flex flex-wrap w-full h-[92vh]",children:[(0,s.jsx)("div",{className:"w-1/2 flex flex-col",children:(0,s.jsx)("div",{className:"text-center flex-grow",children:(0,s.jsx)(x,{})})}),(0,s.jsx)("div",{className:"w-1/2 flex flex-col",children:(0,s.jsx)(g,{})}),(0,s.jsx)("div",{className:"w-1/2 flex flex-col",children:(0,s.jsx)("div",{className:"text-center flex-grow",children:(0,s.jsx)(j,{})})}),(0,s.jsx)("div",{className:"w-1/2 flex flex-col",children:(0,s.jsx)("div",{className:"text-center flex-grow",children:(0,s.jsx)(v,{})})})]}):(0,s.jsx)("div",{className:"h-full w-full text-center text-red-500 mt-[15%]",children:(0,s.jsx)(c.X6,{children:"Please connect wallet and switch to Sepolia..."})})})}},50995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(57437),r=n(2265),i=n(18785),c=n(47907),a=n(8792);let o=(0,n(22020).Ue)(e=>({CurrentNFT:null,setCurrentNFT:t=>e({CurrentNFT:t})}));var l=n(12165),d=e=>{let{children:t,item:n,...d}=e;return(0,c.useRouter)(),o(e=>e.setCurrentNFT),console.log(n.tokenId,"@@@##"),(0,r.useEffect)(()=>{},[]),(0,s.jsxs)(i.J2.Root,{children:[(0,s.jsx)(i.J2.Trigger,{children:(0,s.jsx)("div",{...d,children:t})}),(0,s.jsxs)(i.J2.Content,{size:"2",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.zx,{color:"indigo",variant:"soft",style:{width:"100%",marginBottom:".5rem"},children:"Bid"})}),(0,s.jsx)("div",{children:(0,s.jsx)(i.zx,{variant:"soft",style:{width:"100%"},children:(0,s.jsx)(a.default,{href:{pathname:"/detail/".concat(n.tokenId)},color:"indigo",style:{width:"100%"},onClick:()=>l.Z.setLocalStorage("currentNFT",n),children:"View"})})})]})]})}},12165:function(e,t){"use strict";class n{static setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}static getLocalStorage(e){{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}static removeLocalStorage(e){localStorage.removeItem(e)}static setSessionStorage(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getSessionStorage(e){{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}}static removeSessionStorage(e){sessionStorage.removeItem(e)}static setCookie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;{let s=new Date;s.setTime(s.getTime()+864e5*n);let r="expires=".concat(s.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(r,"; path=/")}}static getCookie(e){{let t="".concat(e,"="),n=document.cookie.split(";");for(let e=0;e<n.length;e++){let s=n[e];for(;" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null}}static deleteCookie(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")}}t.Z=n},40204:function(e,t,n){"use strict";function s(e){let t=e.state.current,n=e.state.connections.get(t),s=n?.accounts,r=s?.[0],i=e.chains.find(e=>e.id===n?.chainId),c=e.state.status;switch(c){case"connected":return{address:r,addresses:s,chain:i,chainId:n?.chainId,connector:n?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:c};case"reconnecting":return{address:r,addresses:s,chain:i,chainId:n?.chainId,connector:n?.connector,isConnected:!!r,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:c};case"connecting":return{address:r,addresses:s,chain:i,chainId:n?.chainId,connector:n?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:c};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:c}}}n.d(t,{D:function(){return s}})},53350:function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var s=n(69022),r=n(40204);function i(e,t){let{onChange:n}=t;return e.subscribe(()=>(0,r.D)(e),n,{equalityFn(e,t){let{connector:n,...r}=e,{connector:i,...c}=t;return(0,s.v)(r,c)&&n?.id===i?.id&&n?.uid===i?.uid}})}},1257:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var s,r,i=n(33816);let c=()=>`@wagmi/core@${i.i}`;var a=function(e,t,n,s){if("a"===n&&!s)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?s:"a"===n?s.call(e):s?s.value:t.get(e)};class o extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return c()}constructor(e,t={}){super(),s.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let n=t.cause instanceof o?t.cause.details:t.cause?.message?t.cause.message:t.details,r=t.cause instanceof o&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...r?[`Docs: ${this.docsBaseUrl}${r}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=r,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return a(this,s,"m",r).call(this,this,e)}}s=new WeakSet,r=function e(t,n){return n?.(t)?t:t.cause?a(this,s,"m",e).call(this,t.cause,n):t}},69022:function(e,t,n){"use strict";n.d(t,{v:function(){return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){let s,r;if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)&&Array.isArray(n)){if((s=t.length)!==n.length)return!1;for(r=s;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();let i=Object.keys(t);if((s=i.length)!==Object.keys(n).length)return!1;for(r=s;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,i[r]))return!1;for(r=s;0!=r--;){let s=i[r];if(s&&!e(t[s],n[s]))return!1}return!0}return t!=t&&n!=n}}})},33816:function(e,t,n){"use strict";n.d(t,{i:function(){return s}});let s="2.9.7"},60604:function(e,t,n){"use strict";n.d(t,{V:function(){return a},F:function(){return o}});var s=n(2265);let r=!1;async function i(e,t={}){let n;if(r)return[];r=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let s=[];if(t.connectors?.length)for(let n of t.connectors){let t;t="function"==typeof n?e._internal.connectors.setup(n):n,s.push(t)}else s.push(...e.connectors);try{n=await e.storage?.getItem("recentConnectorId")}catch{}let i={};for(let[,t]of e.state.connections)i[t.connector.id]=1;n&&(i[n]=0);let c=Object.keys(i).length>0?[...s].sort((e,t)=>(i[e.id]??10)-(i[t.id]??10)):s,a=!1,o=[],l=[];for(let t of c){let n=await t.getProvider();if(!n||l.some(e=>e===n)||!await t.isAuthorized())continue;let s=await t.connect({isReconnecting:!0}).catch(()=>null);s&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let n=new Map(a?e.connections:new Map).set(t.uid,{accounts:s.accounts,chainId:s.chainId,connector:t});return{...e,current:a?e.current:t.uid,connections:n}}),o.push({accounts:s.accounts,chainId:s.chainId,connector:t}),l.push(n),a=!0)}return("reconnecting"===e.state.status||"connecting"===e.state.status)&&(a?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:null,status:"disconnected"}))),r=!1,o}function c(e){let{children:t,config:n,initialState:r,reconnectOnMount:c=!0}=e,{onMount:a}=function(e,t){let{initialState:n,reconnectOnMount:s}=t;return n&&!e._internal.store.persist.hasHydrated()&&e.setState({...n,connections:s?n.connections:new Map,status:s?"reconnecting":"disconnected"}),{async onMount(){if(e._internal.ssr){await e._internal.store.persist.rehydrate();let t=e._internal.mipd?.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);e._internal.connectors.setState(e=>[...e,...t??[]])}s?i(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(n,{initialState:r,reconnectOnMount:c});n._internal.ssr||a();let o=(0,s.useRef)(!0);return(0,s.useEffect)(()=>{if(o.current&&n._internal.ssr)return a(),()=>{o.current=!1}},[]),t}let a=(0,s.createContext)(void 0);function o(e){let{children:t,config:n}=e;return(0,s.createElement)(c,e,(0,s.createElement)(a.Provider,{value:n},t))}},39296:function(e,t,n){"use strict";n.d(t,{m:function(){return d}});var s=n(53350),r=n(40204),i=n(42887),c=n(69022),a=n(2265),o=n(29292);let l=e=>"object"==typeof e&&!Array.isArray(e);function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.Z)(e);return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c.v,r=(0,a.useRef)([]),i=(0,o.useSyncExternalStoreWithSelector)(e,t,n,e=>e,(e,t)=>{if(l(e)&&l(t)&&r.current.length){for(let n of r.current)if(!s(e[n],t[n]))return!1;return!0}return s(e,t)});if(l(i)){let e={...i};return Object.defineProperties(e,Object.entries(e).reduce((e,t)=>{let[n,s]=t;return{...e,[n]:{configurable:!1,enumerable:!0,get:()=>(r.current.includes(n)||r.current.push(n),s)}}},{})),e}return i}(e=>(0,s.u)(t,{onChange:e}),()=>(0,r.D)(t))}},42887:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(2265),r=n(60604),i=n(1257);let c=()=>"wagmi@2.8.7";class a extends i.G{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return c()}}class o extends a{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function l(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null!==(e=t.config)&&void 0!==e?e:(0,s.useContext)(r.V);if(!n)throw new o;return n}}},function(e){e.O(0,[643,1749,4856,5422,2971,8069,1744],function(){return e(e.s=93840)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{55620:function(e,t,n){Promise.resolve().then(n.bind(n,19721)),Promise.resolve().then(n.bind(n,87654))},87654:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(57437),a=n(2265),s=n(20703),r=n(18785),u=n(83825),l=n(24793),d=n(12165),o=n(62177),p=n(39768),c=n(37161),m=n(54900),y=n(75378),x=n(60508),h=n(89539),b=n.n(h),f=n(59549);n(25566).env.NEXT_PUBLIC_OKLINK_KEY;let g={abi:[{inputs:[{internalType:"address payable",name:"_platformAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"}],name:"AuctionCancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"startingPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_startTime",type:"uint256"}],name:"AuctionCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"winner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"HighestBidIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ReserveAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"RewardDistributed",type:"event"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"auctionIdQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"nftTokenId",type:"uint256"},{internalType:"uint256",name:"startingPrice",type:"uint256"},{internalType:"uint256",name:"currentHighestBid",type:"uint256"},{internalType:"address",name:"currentHighestBidder",type:"address"},{internalType:"bool",name:"ended",type:"bool"},{internalType:"uint256",name:"totalBidAmount",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"interval",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_itemId",type:"uint256"},{internalType:"uint256",name:"bitAmount",type:"uint256"}],name:"bid",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_itemId",type:"uint256"}],name:"cancelAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"checkUpkeep",outputs:[{internalType:"bool",name:"upkeepNeeded",type:"bool"},{internalType:"bytes",name:"performData",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_startingPrice",type:"uint256"},{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"nftTokenId",type:"uint256"},{internalType:"uint256",name:"interval",type:"uint256"}],name:"createAuction",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isOnAuction",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextAuctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"pendingReturns",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"performData",type:"bytes"}],name:"performUpkeep",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"platformAddress",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"reserve",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],address:"0x02a86950abd2959B2517ffbC3EE711Ce88d34704"},T={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"finalPrice",type:"uint256"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"}],name:"AuctionFailed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"reservePrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startTime",type:"uint256"}],name:"AuctionStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"FEE_PERCENTAGE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"auctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"auctionIdQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address payable",name:"seller",type:"address"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"startPrice",type:"uint256"},{internalType:"uint256",name:"reservePrice",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"price_decay_interval",type:"uint256"},{internalType:"uint256",name:"price_decay_amount",type:"uint256"},{internalType:"uint256",name:"reserve_duration",type:"uint256"},{internalType:"bool",name:"isActive",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"bid",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"checkUpkeep",outputs:[{internalType:"bool",name:"upkeepNeeded",type:"bool"},{internalType:"bytes",name:"performData",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"finalizeAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"getCurrentPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isOnAuction",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"performData",type:"bytes"}],name:"performUpkeep",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"startPrice",type:"uint256"},{internalType:"uint256",name:"reservePrice",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"price_decay_interval",type:"uint256"},{internalType:"uint256",name:"price_decay_amount",type:"uint256"},{internalType:"uint256",name:"reserve_duration",type:"uint256"}],name:"startAuction",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],address:"0xEDD95F71e9Ec4a2347d01Ebb6C371c659E427Cd5"};var v=()=>{let{data:e,error:t,writeContract:n,isError:i,isPending:a,isSuccess:s,failureReason:r}=(0,f.S)();return{createBritish:e=>{n({...g,functionName:"createAuction",args:e})},createDutch:e=>{n({...T,functionName:"startAuction",args:e})},error:t,isError:i,isPending:a,isSuccess:s,data:e,failureReason:r}},j=n(39617),N=n(69908),w=n(52926),A=n(60989),I=e=>{let t=(0,j.N)({contracts:[{...g,functionName:"isOnAuction",args:[e.contractAddress,e.tokenId]},{...T,functionName:"isOnAuction",args:[e.contractAddress,e.tokenId]}]}),n=(0,N.u)({...g,functionName:"auctionIdQuery",args:[e.contractAddress,Number(e.tokenId)]}),i=(0,N.u)({...g,functionName:"auctions",args:[n.data]}),s=(0,N.u)({...T,functionName:"auctionIdQuery",args:[e.contractAddress,Number(e.tokenId)]});(0,N.u)({...T,functionName:"auctions",args:[s.data],query:{enabled:!!s.data}});let{auctionsInfoBritis:r}=(0,a.useMemo)(()=>{let e={};if(i.data){let[t,n,a,s,r,u,l,d,o,p,c]=i.data;e={seller:t,nftAddress:n,nftTokenId:a,startingPrice:(0,w.d)(s),currentHighestBid:(0,w.d)(s),currentHighestBidder:u,ended:l,totalBidAmount:(0,w.d)(d),startTime:(0,A.b)(o,0),endTime:(0,A.b)(p,0),interval:(0,A.b)(c,0)}}return{auctionsInfoBritis:e}},[i]),{isOnAuctionBritish:u,isOnAuctionDutch:l}=(0,a.useMemo)(()=>{let e=!1,n=!1;return t.isSuccess&&(e=t.data[0].result,n=t.data[1].result),{isOnAuctionBritish:e,isOnAuctionDutch:n}},[t]);return{isOnAuctionBritish:u,isOnAuctionDutch:l,auctionsInfoBritis:r}},C=n(75504),k=n(86343);let M=e=>{let{isOnAuctionBritish:t,isOnAuctionDutch:n,auctionsInfoBritis:a}=e;return(t||n)&&t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Final Price:"," ",(0,i.jsx)("span",{className:"text-indigo-600",children:"N/A"})]}),(0,i.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Starting Price:"," ",(0,i.jsx)("span",{className:"text-indigo-600",children:a.startingPrice})]}),(0,i.jsxs)("p",{className:"text-lg font-bold mb-2",children:["start time:"," ",(0,i.jsx)(r.Ct,{size:"3",color:"orange",children:b()(1e3*a.startTime).format("YYYY-MM-DD HH:mm")})]}),(0,i.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Deadline:"," ",(0,i.jsx)(r.Ct,{size:"3",color:"orange",children:Number(a.endTime)||"N/A"})]}),(0,i.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Auction Type:"," ",(0,i.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:"British"})]})]}):null},S=e=>{let{isOnAuctionBritish:t,isOnAuctionDutch:n,auctionsInfoBritis:a}=e;return(t||n)&&t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex justify-between items-center w-full mb-4",children:[(0,i.jsx)("div",{children:(0,i.jsx)(l.Z,{iconAttr:{width:35,height:35}})}),(0,i.jsxs)(r.xu,{className:"flex-1 overflow-hidden",children:[(0,i.jsxs)(r.xu,{className:"text-gray-700",children:["起拍价:"," ",a.currentHighestBid," ","ETH"]}),(0,i.jsxs)(r.xu,{className:"text-gray-700 truncate overflow-hidden",children:["来自:"," ",a.currentHighestBidder]})]})]}),(0,i.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,i.jsxs)("div",{className:"bg-gray-100 text-center font-bold p-2 rounded shadow-md hover:shadow-lg",children:[(0,i.jsxs)("div",{className:"text-indigo-600",children:[" ",a.currentHighestBid," ","ETH"]}),(0,i.jsx)("div",{children:"Lowest"})]}),(0,i.jsxs)("div",{className:"bg-gray-100 text-center font-bold p-2 rounded shadow-md hover:shadow-lg",children:[(0,i.jsxs)("div",{className:"text-green-600",children:[" ",a.totalBidAmount," ","ETH"]}),(0,i.jsx)("div",{children:"Markup"})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)(r.xv,{size:"4",className:"font-bold text-lg",children:"Best Bid"}),(0,i.jsx)(r.xv,{as:"p",size:"2",className:"text-gray-500",children:"Top Price from"}),(0,i.jsx)(r.xv,{as:"p",size:"1",className:"text-gray-700",children:a.currentHighestBidder}),(0,i.jsxs)(r.xv,{as:"p",className:"text-blue-600 font-bold",children:[a.currentHighestBid," ","ETH"]})]})]}):null};var B=()=>{let e=d.Z.getLocalStorage("currentNFT"),[t,n]=(0,a.useState)("Info"),[l,h]=(0,a.useState)("british"),[f,g]=(0,a.useState)(""),[T,j]=(0,a.useState)(""),[N,w]=(0,a.useState)(""),[A,B]=(0,a.useState)(""),[_,O]=(0,a.useState)(""),[P,E]=(0,a.useState)(""),[D,H]=(0,a.useState)(""),[z,Y]=(0,a.useState)(!1),[V,Q]=a.useState((0,x.Aj)(b()().format())),{isOnAuctionBritish:L,isOnAuctionDutch:U,auctionsInfoBritis:q}=I(e),{createBritish:F,createDutch:R,isError:K,isPending:Z,isSuccess:J,data:G,error:W,failureReason:X}=v();(0,a.useEffect)(()=>{(null==W?void 0:W.message)?H(W.shortMessage||(null==W?void 0:W.message)):J&&Y(!1)},[K,Z,J,W,X]);let $=()=>{if(Z)return;H("");let t=b()(V.toDate()).unix();"british"===l?F([(0,k.f)(f),Number(t),e.contractAddress,Number(e.tokenId),Number(A)]):R([e.contractAddress,Number(e.tokenId),(0,k.f)(f),(0,k.f)(T),Number(t),Number(_),(0,k.f)(P),Number(N)])};return(0,i.jsxs)("div",{className:"flex w-full h-[93vh] ",children:[(0,i.jsx)("div",{className:"w-[70%] flex justify-center items-center",children:(0,i.jsx)("div",{className:"p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer",children:(0,i.jsx)(s.default,{src:e.img,width:400,height:400,alt:"Picture of the author",className:"rounded-lg "})})}),(0,i.jsx)("div",{className:"w-[30%] h-[96.5%] my-[1%]  hover:shadow-2xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg p-5",children:(0,i.jsxs)(r.mQ.Root,{defaultValue:"Info",value:t,className:"w-full",onValueChange:e=>{n(e)},children:[(0,i.jsxs)(r.mQ.List,{className:"flex space-x-2",children:[(0,i.jsx)(r.mQ.Trigger,{value:"Info",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Info"}),!e.isOwner&&(0,i.jsx)(r.mQ.Trigger,{value:"Bid",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Bid"}),(0,i.jsx)(r.mQ.Trigger,{value:"Auction",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Auction"})]}),(0,i.jsxs)("div",{className:"pt-3",children:[(0,i.jsx)(r.mQ.Content,{value:"Info",children:(0,i.jsxs)("div",{className:"text-gray-900 py-3",children:[(0,i.jsx)("h1",{className:"text-3xl font-bold mb-2",children:e.name}),(0,i.jsx)(r.xv,{size:"2",className:"font-bold mb-2 text-gray-500",as:"p",children:e.description}),(0,i.jsx)(M,{isOnAuctionBritish:L,isOnAuctionDutch:U,auctionsInfoBritis:q})]})}),(0,i.jsx)(r.mQ.Content,{value:"Bid",children:(0,i.jsxs)(u.fC,{className:"",children:[(0,i.jsxs)(u.gN,{className:"grid mb-4",name:"bidPrice",children:[(0,i.jsxs)("div",{className:"flex items-baseline justify-between",children:[(0,i.jsx)(u.__,{className:"text-sm font-medium leading-8",children:"Bid Price"}),(0,i.jsx)(u.v0,{className:"text-xs text-gray-500",match:"valueMissing",children:"Please enter your Bid Price"})]}),(0,i.jsx)(u.oT,{asChild:!0,children:(0,i.jsx)("input",{className:"w-full bg-white shadow-sm rounded px-3 py-2 text-sm leading-none outline-none focus:ring-2 focus:ring-indigo-600",required:!0})})]}),(0,i.jsxs)(u.gN,{className:"grid mb-4",name:"count",children:[(0,i.jsxs)("div",{className:"flex items-baseline justify-between",children:[(0,i.jsx)(u.__,{className:"text-sm font-medium leading-8",children:"Count"}),(0,i.jsx)(u.v0,{className:"text-xs text-gray-500",match:"valueMissing",children:"Please enter a count"})]}),(0,i.jsx)(u.oT,{asChild:!0,children:(0,i.jsx)("input",{className:"w-full bg-white shadow-sm rounded px-3 py-2 text-sm leading-none outline-none focus:ring-2 focus:ring-indigo-600",required:!0})})]}),(0,i.jsxs)(r.xv,{children:["Your Balance:",(0,i.jsxs)(r.cK,{children:[1e3,"ETH"]})]}),(0,i.jsx)(u.k4,{asChild:!0,children:(0,i.jsx)(r.zx,{style:{width:"100%",marginTop:"1rem"},children:"Confirm"})})]})}),(0,i.jsxs)(r.mQ.Content,{value:"Auction",children:[(0,i.jsx)(r.xv,{size:"4",className:"font-bold text-lg",children:"Auction Detail"}),(0,i.jsx)(S,{isOnAuctionBritish:L,isOnAuctionDutch:U,auctionsInfoBritis:q}),L||U?(0,i.jsx)(r.zx,{className:"!bg-[#ccc]",style:{width:"100%",marginBottom:"1rem"},children:"Under auction"}):(0,i.jsxs)(r.Vq.Root,{open:z,onOpenChange:Y,children:[(0,i.jsx)(r.Vq.Trigger,{children:(0,i.jsx)(r.zx,{style:{width:"100%",marginBottom:"1rem"},children:"Auction"})}),(0,i.jsxs)(r.Vq.Content,{maxWidth:"380px",minHeight:"600px",children:[(0,i.jsxs)(r.kC,{justify:"between",align:"center",className:"mb-2",children:[(0,i.jsx)("span",{className:"font-bold text-lg",children:e.name}),(0,i.jsx)(r.Vq.Close,{children:(0,i.jsx)(o.ypG,{className:"cursor-pointer"})})]}),(0,i.jsxs)(p.n,{fullWidth:!0,size:"md","aria-label":"Tabs form",selectedKey:l,onSelectionChange:h,children:[(0,i.jsxs)(c.r,{title:"British",children:[(0,i.jsx)(m.Y,{label:"start price",value:f,onValueChange:g}),(0,i.jsx)(y.N,{granularity:"second",label:"start time",className:"mt-3",value:V,onChange:Q}),(0,i.jsx)(m.Y,{label:"interval",className:"mt-3",value:A,onValueChange:B,description:"In seconds"})]},"british"),(0,i.jsxs)(c.r,{title:"Dutch",children:[(0,i.jsx)(m.Y,{label:"start price",value:f,onValueChange:g}),(0,i.jsx)(m.Y,{value:T,onValueChange:j,label:"floor price",className:"mt-3"}),(0,i.jsx)(m.Y,{label:"reserve duration",value:N,onValueChange:w,className:"mt-3",description:"In seconds"}),(0,i.jsx)(y.N,{granularity:"second",label:"start time",className:"mt-3",value:V,onChange:Q}),(0,i.jsx)(m.Y,{value:_,onValueChange:O,label:"decay interval",className:"mt-3"}),(0,i.jsx)(m.Y,{value:P,onValueChange:E,label:"decay amount",className:"mt-3"})]},"dutch")]}),D&&(0,i.jsx)(r.xu,{className:"text-[#dc2626] my-2",children:D}),(0,i.jsxs)(r.kC,{justify:"center",align:"center",onClick:()=>$(),className:(0,C.Z)("w-full bg-blue-700 rounded-md py-2 font-bold text-center text-[#fff] mt-5 cursor-pointer",Z&&"!bg-[#ccc]"),children:[Z&&(0,i.jsx)(r.$j,{className:"mr-2"}),(0,i.jsx)(r.xu,{children:"submit auction"})]})]})]})]})]})]})})]})}},24793:function(e,t,n){"use strict";var i=n(57437);n(2265);var a=n(12178),s=n(62177);t.Z=e=>(0,i.jsx)("div",{className:"flex gap-5 ",...e,children:(0,i.jsx)(a.fC,{className:"bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle",children:(0,i.jsx)(a.NY,{className:"text-violet11 leading-1 flex h-full w-full items-center justify-center  text-[15px] font-medium",children:(0,i.jsx)(s.Tk0,{width:null==e?void 0:e.iconAttr.width,height:null==e?void 0:e.iconAttr.height})})})})},12165:function(e,t){"use strict";class n{static setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}static getLocalStorage(e){{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}static removeLocalStorage(e){localStorage.removeItem(e)}static setSessionStorage(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getSessionStorage(e){{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}}static removeSessionStorage(e){sessionStorage.removeItem(e)}static setCookie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;{let i=new Date;i.setTime(i.getTime()+864e5*n);let a="expires=".concat(i.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(a,"; path=/")}}static getCookie(e){{let t="".concat(e,"="),n=document.cookie.split(";");for(let e=0;e<n.length;e++){let i=n[e];for(;" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null}}static deleteCookie(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")}}t.Z=n}},function(e){e.O(0,[8310,643,8268,6564,3825,8342,2971,8069,1744],function(){return e(e.s=55620)}),_N_E=e.O()}]);
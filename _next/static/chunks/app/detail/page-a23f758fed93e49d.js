(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{55620:function(e,t,n){Promise.resolve().then(n.bind(n,19721)),Promise.resolve().then(n.bind(n,87654))},87654:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(57437),i=n(2265),s=n(20703),r=n(18785),l=n(24793),d=n(12165),u=n(62177),o=n(54900),c=n(39768),p=n(37161),m=n(75378),y=n(60508),x=n(89539),h=n.n(x),b=n(78589),g=n(49334);n(25566).env.NEXT_PUBLIC_OKLINK_KEY;let f={abi:[{inputs:[{internalType:"address payable",name:"_platformAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"}],name:"AuctionCancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"startingPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_startTime",type:"uint256"},{indexed:!1,internalType:"address",name:"nftAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"AuctionCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"winner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"HighestBidIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ReserveAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"RewardDistributed",type:"event"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"auctionIdQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"nftTokenId",type:"uint256"},{internalType:"uint256",name:"startingPrice",type:"uint256"},{internalType:"uint256",name:"currentHighestBid",type:"uint256"},{internalType:"address",name:"currentHighestBidder",type:"address"},{internalType:"bool",name:"ended",type:"bool"},{internalType:"uint256",name:"totalBidAmount",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"interval",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_itemId",type:"uint256"},{internalType:"uint256",name:"bitAmount",type:"uint256"}],name:"bid",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_itemId",type:"uint256"}],name:"cancelAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"checkUpkeep",outputs:[{internalType:"bool",name:"upkeepNeeded",type:"bool"},{internalType:"bytes",name:"performData",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_startingPrice",type:"uint256"},{internalType:"uint256",name:"_startTime",type:"uint256"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"nftTokenId",type:"uint256"},{internalType:"uint256",name:"interval",type:"uint256"}],name:"createAuction",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isOnAuction",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextAuctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"pendingReturns",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"performData",type:"bytes"}],name:"performUpkeep",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"platformAddress",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"reserve",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],address:"0xA1c7AEaBCB8C7F64d03382cbeEA2cE124d5A26Ff"},T={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"finalPrice",type:"uint256"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"}],name:"AuctionFailed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"auctionId",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"reservePrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"startTime",type:"uint256"},{indexed:!1,internalType:"address",name:"nftAddress",type:"address"}],name:"AuctionStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"FEE_PERCENTAGE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"auctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"auctionIdQuery",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"auctions",outputs:[{internalType:"address payable",name:"seller",type:"address"},{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"startPrice",type:"uint256"},{internalType:"uint256",name:"reservePrice",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"price_decay_interval",type:"uint256"},{internalType:"uint256",name:"price_decay_amount",type:"uint256"},{internalType:"uint256",name:"reserve_duration",type:"uint256"},{internalType:"bool",name:"isActive",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"bid",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"bytes",name:"",type:"bytes"}],name:"checkUpkeep",outputs:[{internalType:"bool",name:"upkeepNeeded",type:"bool"},{internalType:"bytes",name:"performData",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"finalizeAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"auctionId",type:"uint256"}],name:"getCurrentPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"isOnAuction",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"performData",type:"bytes"}],name:"performUpkeep",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"startPrice",type:"uint256"},{internalType:"uint256",name:"reservePrice",type:"uint256"},{internalType:"uint256",name:"startTime",type:"uint256"},{internalType:"uint256",name:"price_decay_interval",type:"uint256"},{internalType:"uint256",name:"price_decay_amount",type:"uint256"},{internalType:"uint256",name:"reserve_duration",type:"uint256"}],name:"startAuction",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],address:"0xfb03236F8C0eff846f9aD2aF7d9fd05c2AE142f8"};var v=()=>{let{data:e,error:t,writeContract:n,isError:a,isPending:i,isSuccess:s,failureReason:r}=(0,b.S)();return{createBritish:e=>{n({...f,functionName:"createAuction",args:e})},createDutch:e=>{n({...T,functionName:"startAuction",args:e})},bidBritish:e=>{n({...f,functionName:"bid",args:e})},useBidDutch:(e,t)=>{var n;let a=(0,g.G)({...T,functionName:"bid",args:t,value:e});return console.log(e,t,null===(n=a.error)||void 0===n?void 0:n.message,"调用了出价"),a},cancelBritish:e=>{n({...f,functionName:"cancelAuction",args:e})},cancelDutch:e=>{n({...T,functionName:"finalizeAuction",args:e})},error:t,isError:a,isPending:i,isSuccess:s,data:e,failureReason:r}},j=n(39617),N=n(69908),A=n(52926),w=n(60989),I=(e,t)=>{let n=(0,j.N)({contracts:[{...f,functionName:"isOnAuction",args:[e.contractAddress,e.tokenId]},{...T,functionName:"isOnAuction",args:[e.contractAddress,e.tokenId]}]}),{isOnAuctionBritish:a,isOnAuctionDutch:s}=(0,i.useMemo)(()=>{console.log("isOnAuction2333",n.data);let e=!1,t=!1;return n.isSuccess&&(e=n.data[0].result,t=n.data[1].result),{isOnAuctionBritish:e,isOnAuctionDutch:t}},[n]),r=(0,N.u)({...f,functionName:"auctionIdQuery",args:[e.contractAddress,Number(e.tokenId)],query:{enabled:!!a}}),l=(0,N.u)({...T,functionName:"auctionIdQuery",args:[e.contractAddress,Number(e.tokenId)],query:{enabled:!!s}}),{auctionIdBritis:d,auctionIdDutch:u}=(0,i.useMemo)(()=>({auctionIdBritis:r.data,auctionIdDutch:l.data}),[r,l]),o=(0,N.u)({...f,functionName:"auctions",args:[d],query:{enabled:!!d}}),c=(0,N.u)({...T,functionName:"auctions",args:[u],query:{enabled:!!u}}),{auctionsInfoBritis:p,auctionsInfoDutch:m}=(0,i.useMemo)(()=>{let e={},t={};if(console.log("看下装",o),o.data){let[t,n,a,i,s,r,l,d,u,c,p]=o.data;e={seller:t,nftAddress:n,nftTokenId:a,startingPrice:(0,A.d)(i),currentHighestBid:(0,A.d)(s),currentHighestBidder:r,ended:l,totalBidAmount:(0,A.d)(d),startTime:(0,w.b)(u,0),endTime:(0,w.b)(c,0),interval:(0,w.b)(p,0)}}if(c.data){let[e,n,a,i,s,r,l,d,u,o,p]=c.data;t={seller:e,nftAddress:n,nftTokenId:(0,w.b)(a,0),startingPrice:(0,A.d)(i),reservePrice:(0,A.d)(s),startTime:(0,w.b)(r,0),endTime:(0,w.b)(l,0),price_decay_interval:(0,w.b)(d,0),price_decay_amount:(0,A.d)(u),reserve_duration:(0,w.b)(o,0),isActive:p}}return console.log("_auctionsInfoDutch;",t),{auctionsInfoBritis:e,auctionsInfoDutch:t}},[o,c]),y=(0,N.u)({...T,functionName:"balances",args:[t],query:{enabled:!!t}});return{isOnAuctionBritish:a,isOnAuctionDutch:s,auctionsInfoBritis:p,auctionsInfoDutch:m,auctionIdBritis:d,auctionIdDutch:u,isOnAuction:n,balances:(0,i.useMemo)(()=>{let e="0";return y.isSuccess&&(e=(0,A.d)(y.data)),e},[y]),getCurrentPrice:(0,N.u)({...T,functionName:"getCurrentPrice",args:[e.auctionId]}),auctionsInfoBritisSuccess:o.isSuccess,auctionsInfoDutchSuccess:c.isSuccess}},C=n(75504),S=n(39296),k=n(13694),M=n(86343);let _=i.memo(e=>{let{isOnAuctionBritish:t,isOnAuctionDutch:n,auctionsInfoBritis:i,auctionsInfoDutch:s}=e;return t||n?t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Final Price:"," ",(0,a.jsx)("span",{className:"text-indigo-600",children:"N/A"})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Starting Price:"," ",(0,a.jsx)("span",{className:"text-indigo-600",children:i.startingPrice})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["start time:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*i.startTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Deadline:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:Number(i.endTime)||"N/A"})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Auction Type:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:"British"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["final price:"," ",(0,a.jsx)("span",{className:"text-indigo-600",children:"N/A"})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["starting price:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.startingPrice," ","ETH"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["floor price:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.reservePrice," ","ETH"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["price decay interval:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.price_decay_interval," ","s"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["price decay amount:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.price_decay_amount," ","ETH"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["reserve duration:"," ",(0,a.jsxs)("span",{className:"text-indigo-600",children:[s.reserve_duration," ","s"]})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["start time:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*s.startTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Deadline:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"orange",children:h()(1e3*s.endTime).format("YYYY-MM-DD HH:mm")})]}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Auction Type:"," ",(0,a.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:"Dutch"})]})]}):null}),B=e=>{let{isOnAuctionBritish:t,isOnAuctionDutch:n,auctionsInfoBritis:i,auctionsInfoDutch:s}=e;return t||n?t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-full mb-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.Z,{iconAttr:{width:35,height:35}})}),(0,a.jsx)(r.xu,{className:"flex-1 overflow-hidden",children:(0,a.jsxs)(r.xu,{className:"text-gray-700",children:["起拍价:"," ",i.startingPrice," ","ETH"]})})]}),(0,a.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,a.jsxs)("div",{className:"bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-indigo-600",children:[" ",i.currentHighestBid," ","ETH"]}),(0,a.jsx)("div",{children:"Lowest"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-center  p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-green-600",children:[" ",i.totalBidAmount," ","ETH"]}),(0,a.jsx)("div",{children:"Markup"})]})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)(r.xv,{size:"4",className:" text-lg",children:"Best Bid"}),(0,a.jsx)(r.xv,{as:"p",size:"2",className:"text-gray-500",children:"Top Price from"}),(0,a.jsx)(r.xv,{as:"p",size:"1",className:"text-gray-700",children:i.currentHighestBidder}),(0,a.jsxs)(r.xv,{as:"p",className:"text-blue-600 ",children:[i.currentHighestBid," ","ETH"]})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-full mb-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.Z,{iconAttr:{width:35,height:35}})}),(0,a.jsx)(r.xu,{className:"flex-1 overflow-hidden",children:(0,a.jsxs)(r.xu,{className:"text-gray-700",children:["起拍价:"," ",s.startingPrice," ","ETH"]})})]}),(0,a.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,a.jsxs)("div",{className:"bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-indigo-600",children:[" ",s.startingPrice," ","ETH"]}),(0,a.jsx)("div",{children:"current"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-green-600",children:[" ",s.price_decay_amount," ","ETH"]}),(0,a.jsx)("div",{children:"decay amount"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 text-center p-2 rounded shadow-md hover:shadow-lg",children:[(0,a.jsxs)("div",{className:"text-green-600",children:[" ",s.price_decay_interval," ","ETH"]}),(0,a.jsx)("div",{children:"decay interval"})]})]})]}):null};var P=()=>{let e=d.Z.getLocalStorage("currentNFT"),[t,n]=(0,i.useState)("Info"),[l,x]=(0,i.useState)(!0),[b,g]=(0,i.useState)("british"),[j,N]=(0,i.useState)(""),[A,P]=(0,i.useState)(""),[E,O]=(0,i.useState)(""),[D,H]=(0,i.useState)(""),[Y,z]=(0,i.useState)(""),[F,V]=(0,i.useState)(""),[L,Q]=(0,i.useState)(""),[q,Z]=(0,i.useState)(""),[G,U]=(0,i.useState)(!1),[R,K]=i.useState((0,y.Aj)(h()().format())),{isOnAuction:$,isOnAuctionBritish:J,isOnAuctionDutch:W,auctionsInfoBritis:X,auctionIdBritis:ee,auctionIdDutch:et,auctionsInfoDutch:en,balances:ea,getCurrentPrice:ei,auctionsInfoBritisSuccess:es,auctionsInfoDutchSuccess:er}=I(e,(0,S.m)().address);(0,k.G)({...f,eventName:"AuctionCancelled",onLogs(e){console.log("AuctionCancelled!",e),$.refetch()}}),(0,k.G)({...T,eventName:"AuctionFailed",onLogs(e){console.log("AuctionFailed!",e),$.refetch()}}),(0,k.G)({...f,eventName:"AuctionCreated",onLogs(e){console.log("AuctionCreated!",e),$.refetch()}}),(0,k.G)({...T,eventName:"AuctionStarted",onLogs(e){console.log("AuctionStarted!",e),$.refetch()}});let{createBritish:el,createDutch:ed,bidBritish:eu,useBidDutch:eo,cancelBritish:ec,cancelDutch:ep,isError:em,isPending:ey,isSuccess:ex,data:eh,error:eb,failureReason:eg}=v(),[ef,eT]=(0,i.useState)({value:"",args:[]}),{data:ev}=eo(ef.value,ef.args);(0,i.useEffect)(()=>{(J&&es||W&&er)&&x(!1)},[J,W,es,er]),(0,i.useEffect)(()=>{console.log("error====>",null==eb?void 0:eb.message),(null==eb?void 0:eb.message)?Z(eb.shortMessage||(null==eb?void 0:eb.message)):ex&&U(!1)},[em,ey,ex,eb,eg]);let ej=()=>{(et||ee)&&(Z(""),J?(console.log("cansh",(0,w.b)(ee,0),(0,M.f)(A)),eu([(0,w.b)(ee,0),(0,M.f)(A)])):W&&(eT({value:(0,w.b)(ei.data,0),args:(0,w.b)(et,0)}),console.log("竞拍结果",(0,w.b)(et,0))))};(0,i.useEffect)(()=>{Z("")},[b]);let eN=()=>{if(ey)return;Z("");let t=h()(R.toDate()).unix();"british"===b?el([(0,M.f)(j),Number(t),e.contractAddress,Number(e.tokenId),Number(Y)]):ed([e.contractAddress,Number(e.tokenId),(0,M.f)(j),(0,M.f)(E),Number(t),Number(F),(0,M.f)(L),Number(D)])},eA=async()=>{J?await ec([ee]):W&&await ep([et])};return(0,a.jsxs)("div",{className:"flex w-full h-[93vh] ",children:[(0,a.jsx)("div",{className:"w-[70%] flex justify-center items-center",children:(0,a.jsx)("div",{className:"p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer",children:(0,a.jsx)(s.default,{src:e.img,width:400,height:400,alt:"Picture of the author",className:"rounded-lg "})})}),(0,a.jsx)("div",{className:"w-[30%] h-[96.5%] my-[1%]  hover:shadow-2xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg p-5",children:(0,a.jsxs)(r.mQ.Root,{defaultValue:"Info",value:t,className:"w-full",onValueChange:e=>{n(e)},children:[(0,a.jsxs)(r.mQ.List,{className:"flex space-x-2",children:[(0,a.jsx)(r.mQ.Trigger,{value:"Info",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Info"}),!e.isOwner&&(0,a.jsx)(r.mQ.Trigger,{value:"Bid",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Bid"}),(0,a.jsx)(r.mQ.Trigger,{value:"Auction",className:"px-3 py-1.5 text-sm font-medium text-gray-600  rounded ",children:"Auction"})]}),(0,a.jsxs)("div",{className:"pt-3",children:[(0,a.jsx)(r.mQ.Content,{value:"Info",children:(0,a.jsxs)("div",{className:"text-gray-900 py-3",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-2",children:e.name}),(0,a.jsx)(r.xv,{size:"2",className:"font-bold mb-2 text-gray-500",as:"p",children:e.description}),(0,a.jsxs)("p",{className:"text-lg font-bold mb-2",children:["Collect Type:"," ",e.tags.map(e=>(0,a.jsx)(r.Ct,{size:"3",color:"indigo",className:"font-bold mr-1",children:e},e))]})]})}),(0,a.jsx)(r.mQ.Content,{value:"Bid",children:l?(0,a.jsx)(r.$j,{size:"3",className:"mx-auto my-auto"}):(0,a.jsxs)(a.Fragment,{children:[" ",J&&(0,a.jsx)(o.Y,{label:"Please enter your Bid Price",value:A,onValueChange:P}),(0,a.jsxs)(r.xv,{children:[" ","Your Balance:",(0,a.jsxs)(r.cK,{children:[ea,"ETH"]})]}),q&&(0,a.jsx)(r.xu,{className:"text-[#dc2626] my-2",children:q}),(0,a.jsxs)(r.zx,{onClick:()=>ej(),style:{width:"100%",marginTop:"1rem"},className:(0,C.Z)(ey&&"!bg-[#ccc]"),children:[ey&&(0,a.jsx)(r.$j,{className:"mr-2"}),(0,a.jsx)(r.xu,{children:"Confirm"})]})]})}),(0,a.jsx)(r.mQ.Content,{value:"Auction",children:l?(0,a.jsx)(r.$j,{size:"3",className:"mx-auto my-auto"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_,{isOnAuctionBritish:J,isOnAuctionDutch:W,auctionsInfoBritis:X,auctionsInfoDutch:en}),(0,a.jsx)(B,{isOnAuctionBritish:J,isOnAuctionDutch:W,auctionsInfoBritis:X,auctionsInfoDutch:en}),e.isOwner&&(J||W?(0,a.jsxs)(r.zx,{onClick:()=>eA(),className:(0,C.Z)(ey&&"!bg-[#ccc]"),style:{width:"100%",marginBottom:"1rem"},children:[ey&&(0,a.jsx)(r.$j,{className:"mr-2"})," ","cancel auction"]}):(0,a.jsxs)(r.Vq.Root,{open:G,onOpenChange:U,children:[(0,a.jsx)(r.Vq.Trigger,{children:(0,a.jsx)(r.zx,{style:{width:"100%",marginBottom:"1rem"},children:"Auction"})}),(0,a.jsxs)(r.Vq.Content,{maxWidth:"380px",minHeight:"600px",children:[(0,a.jsxs)(r.kC,{justify:"between",align:"center",className:"mb-2",children:[(0,a.jsx)("span",{className:"font-bold text-lg",children:e.name}),(0,a.jsx)(r.Vq.Close,{children:(0,a.jsx)(u.ypG,{className:"cursor-pointer"})})]}),(0,a.jsxs)(c.n,{fullWidth:!0,size:"md","aria-label":"Tabs form",selectedKey:b,onSelectionChange:g,children:[(0,a.jsxs)(p.r,{title:"British",children:[(0,a.jsx)(o.Y,{label:"start price",value:j,onValueChange:N}),(0,a.jsx)(m.N,{granularity:"second",label:"start time",className:"mt-3",value:R,onChange:K}),(0,a.jsx)(o.Y,{label:"interval",className:"mt-3",value:Y,onValueChange:z,description:"In seconds"})]},"british"),(0,a.jsxs)(p.r,{title:"Dutch",children:[(0,a.jsx)(o.Y,{label:"start price",value:j,onValueChange:N}),(0,a.jsx)(o.Y,{value:E,onValueChange:O,label:"floor price",className:"mt-3"}),(0,a.jsx)(o.Y,{label:"reserve duration",value:D,onValueChange:H,className:"mt-3",description:"In seconds"}),(0,a.jsx)(m.N,{granularity:"second",label:"start time",className:"mt-3",value:R,onChange:K}),(0,a.jsx)(o.Y,{value:F,onValueChange:V,label:"decay interval",className:"mt-3"}),(0,a.jsx)(o.Y,{value:L,onValueChange:Q,label:"decay amount",className:"mt-3"})]},"dutch")]}),q&&(0,a.jsx)(r.xu,{className:"text-[#dc2626] my-2",children:q}),(0,a.jsxs)(r.kC,{justify:"center",align:"center",onClick:()=>eN(),className:(0,C.Z)("w-full bg-blue-700 rounded-md py-2 font-bold text-center text-[#fff] mt-5 cursor-pointer",ey&&"!bg-[#ccc]"),children:[ey&&(0,a.jsx)(r.$j,{className:"mr-2"}),(0,a.jsx)(r.xu,{children:"submit auction"})]})]})]}))]})})]})]})})]})}},24793:function(e,t,n){"use strict";var a=n(57437);n(2265);var i=n(12178),s=n(62177);t.Z=e=>(0,a.jsx)("div",{className:"flex gap-5 ",...e,children:(0,a.jsx)(i.fC,{className:"bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle",children:(0,a.jsx)(i.NY,{className:"text-violet11 leading-1 flex h-full w-full items-center justify-center  text-[15px] font-medium",children:(0,a.jsx)(s.Tk0,{width:null==e?void 0:e.iconAttr.width,height:null==e?void 0:e.iconAttr.height})})})})},12165:function(e,t){"use strict";class n{static setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}static getLocalStorage(e){{let t=localStorage.getItem(e);return t?JSON.parse(t):null}}static removeLocalStorage(e){localStorage.removeItem(e)}static setSessionStorage(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getSessionStorage(e){{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}}static removeSessionStorage(e){sessionStorage.removeItem(e)}static setCookie(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;{let a=new Date;a.setTime(a.getTime()+864e5*n);let i="expires=".concat(a.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(i,"; path=/")}}static getCookie(e){{let t="".concat(e,"="),n=document.cookie.split(";");for(let e=0;e<n.length;e++){let a=n[e];for(;" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null}}static deleteCookie(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")}}t.Z=n}},function(e){e.O(0,[8310,643,9198,673,6772,2971,8069,1744],function(){return e(e.s=55620)}),_N_E=e.O()}]);
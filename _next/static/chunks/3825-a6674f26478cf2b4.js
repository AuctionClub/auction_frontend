"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3825],{83825:function(e,t,r){r.d(t,{oT:function(){return x},gN:function(){return H},__:function(){return U},v0:function(){return z},fC:function(){return B},k4:function(){return G}});var n=r(14749),l=r(2265),a=r(44991),i=r(61266),o=r(84104),d=r(38687),u=r(29586);let s=(0,l.forwardRef)((e,t)=>(0,l.createElement)(u.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),[c,m]=(0,o.b)("Form"),v="Form",[f,h]=c(v),[F,E]=c(v),C=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,onClearServerErrors:o=()=>{},...d}=e,s=(0,l.useRef)(null),c=(0,i.e)(t,s),[m,v]=(0,l.useState)({}),h=(0,l.useCallback)(e=>m[e],[m]),E=(0,l.useCallback)((e,t)=>v(r=>{var n;return{...r,[e]:{...null!==(n=r[e])&&void 0!==n?n:{},...t}}}),[]),C=(0,l.useCallback)(e=>{v(t=>({...t,[e]:void 0})),w(t=>({...t,[e]:{}}))},[]),[g,p]=(0,l.useState)({}),b=(0,l.useCallback)(e=>{var t;return null!==(t=g[e])&&void 0!==t?t:[]},[g]),y=(0,l.useCallback)((e,t)=>{p(r=>{var n;return{...r,[e]:[...null!==(n=r[e])&&void 0!==n?n:[],t]}})},[]),M=(0,l.useCallback)((e,t)=>{p(r=>{var n;return{...r,[e]:(null!==(n=r[e])&&void 0!==n?n:[]).filter(e=>e.id!==t)}})},[]),[_,w]=(0,l.useState)({}),k=(0,l.useCallback)(e=>{var t;return null!==(t=_[e])&&void 0!==t?t:{}},[_]),R=(0,l.useCallback)((e,t)=>{w(r=>{var n;return{...r,[e]:{...null!==(n=r[e])&&void 0!==n?n:{},...t}}})},[]),[V,I]=(0,l.useState)({}),T=(0,l.useCallback)((e,t)=>{I(r=>{let n=new Set(r[e]).add(t);return{...r,[e]:n}})},[]),Z=(0,l.useCallback)((e,t)=>{I(r=>{let n=new Set(r[e]);return n.delete(t),{...r,[e]:n}})},[]),S=(0,l.useCallback)(e=>{var t;return Array.from(null!==(t=V[e])&&void 0!==t?t:[]).join(" ")||void 0},[V]);return(0,l.createElement)(f,{scope:r,getFieldValidity:h,onFieldValidityChange:E,getFieldCustomMatcherEntries:b,onFieldCustomMatcherEntryAdd:y,onFieldCustomMatcherEntryRemove:M,getFieldCustomErrors:k,onFieldCustomErrorsChange:R,onFieldValiditionClear:C},(0,l.createElement)(F,{scope:r,onFieldMessageIdAdd:T,onFieldMessageIdRemove:Z,getFieldDescription:S},(0,l.createElement)(u.WV.form,(0,n.Z)({},d,{ref:c,onInvalid:(0,a.M)(e.onInvalid,e=>{let t=O(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:(0,a.M)(e.onSubmit,o,{checkForDefaultPrevented:!1}),onReset:(0,a.M)(e.onReset,o)}))))}),g="FormField",[p,b]=c(g),y=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,name:a,serverInvalid:i=!1,...o}=e,s=h(g,r).getFieldValidity(a),c=(0,d.M)();return(0,l.createElement)(p,{scope:r,id:c,name:a,serverInvalid:i},(0,l.createElement)(u.WV.div,(0,n.Z)({"data-valid":q(s,i),"data-invalid":N(s,i)},o,{ref:t})))}),M="FormLabel",_=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,...a}=e,i=h(M,r),o=b(M,r),d=a.htmlFor||o.id,u=i.getFieldValidity(o.name);return(0,l.createElement)(s,(0,n.Z)({"data-valid":q(u,o.serverInvalid),"data-invalid":N(u,o.serverInvalid)},a,{ref:t,htmlFor:d}))}),w="FormControl",k=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,...o}=e,d=h(w,r),s=b(w,r),c=E(w,r),m=(0,l.useRef)(null),v=(0,i.e)(t,m),f=o.name||s.name,F=o.id||s.id,C=d.getFieldCustomMatcherEntries(f),{onFieldValidityChange:g,onFieldCustomErrorsChange:p,onFieldValiditionClear:y}=d,M=(0,l.useCallback)(async e=>{if(P(e.validity)){g(f,L(e.validity));return}let t=e.form?new FormData(e.form):new FormData,r=[e.value,t],n=[],l=[];C.forEach(e=>{"AsyncFunction"===e.match.constructor.name||(0,e.match)(...r) instanceof Promise?l.push(e):"Function"===e.match.constructor.name&&n.push(e)});let a=Object.fromEntries(n.map(({id:e,match:t})=>[e,t(...r)])),i=Object.values(a).some(Boolean);if(e.setCustomValidity(i?R:""),g(f,L(e.validity)),p(f,a),!i&&l.length>0){let t=l.map(({id:e,match:t})=>t(...r).then(t=>[e,t])),n=Object.fromEntries(await Promise.all(t)),a=Object.values(n).some(Boolean);e.setCustomValidity(a?R:""),g(f,L(e.validity)),p(f,n)}},[C,f,p,g]);(0,l.useEffect)(()=>{let e=m.current;if(e){let t=()=>M(e);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}},[M]);let _=(0,l.useCallback)(()=>{let e=m.current;e&&(e.setCustomValidity(""),y(f))},[f,y]);(0,l.useEffect)(()=>{var e;let t=null===(e=m.current)||void 0===e?void 0:e.form;if(t)return t.addEventListener("reset",_),()=>t.removeEventListener("reset",_)},[_]),(0,l.useEffect)(()=>{let e=m.current,t=null==e?void 0:e.closest("form");if(t&&s.serverInvalid){let r=O(t);r===e&&r.focus()}},[s.serverInvalid]);let k=d.getFieldValidity(f);return(0,l.createElement)(u.WV.input,(0,n.Z)({"data-valid":q(k,s.serverInvalid),"data-invalid":N(k,s.serverInvalid),"aria-invalid":!!s.serverInvalid||void 0,"aria-describedby":c.getFieldDescription(f),title:""},o,{ref:v,id:F,name:f,onInvalid:(0,a.M)(e.onInvalid,e=>{M(e.currentTarget)}),onChange:(0,a.M)(e.onChange,e=>{_()})}))}),R="This value is not valid",V={badInput:R,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},I="FormMessage",T=(0,l.forwardRef)((e,t)=>{let{match:r,name:a,...i}=e,o=b(I,e.__scopeForm),d=null!=a?a:o.name;return void 0===r?(0,l.createElement)(D,(0,n.Z)({},i,{ref:t,name:d}),e.children||R):"function"==typeof r?(0,l.createElement)(S,(0,n.Z)({match:r},i,{ref:t,name:d})):(0,l.createElement)(Z,(0,n.Z)({match:r},i,{ref:t,name:d}))}),Z=(0,l.forwardRef)((e,t)=>{let{match:r,forceMatch:a=!1,name:i,children:o,...d}=e,u=h(I,d.__scopeForm).getFieldValidity(i);return a||(null==u?void 0:u[r])?(0,l.createElement)(D,(0,n.Z)({ref:t},d,{name:i}),null!=o?o:V[r]):null}),S=(0,l.forwardRef)((e,t)=>{let{match:r,forceMatch:a=!1,name:o,id:u,children:s,...c}=e,m=h(I,c.__scopeForm),v=(0,l.useRef)(null),f=(0,i.e)(t,v),F=(0,d.M)(),E=null!=u?u:F,C=(0,l.useMemo)(()=>({id:E,match:r}),[E,r]),{onFieldCustomMatcherEntryAdd:g,onFieldCustomMatcherEntryRemove:p}=m;(0,l.useEffect)(()=>(g(o,C),()=>p(o,C.id)),[C,o,g,p]);let b=m.getFieldValidity(o),y=m.getFieldCustomErrors(o)[E];return a||b&&!P(b)&&y?(0,l.createElement)(D,(0,n.Z)({id:E,ref:f},c,{name:o}),null!=s?s:R):null}),D=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,id:a,name:i,...o}=e,s=E(I,r),c=(0,d.M)(),m=null!=a?a:c,{onFieldMessageIdAdd:v,onFieldMessageIdRemove:f}=s;return(0,l.useEffect)(()=>(v(i,m),()=>f(i,m)),[i,m,v,f]),(0,l.createElement)(u.WV.span,(0,n.Z)({id:m},o,{ref:t}))}),A=(0,l.forwardRef)((e,t)=>{let{__scopeForm:r,...a}=e;return(0,l.createElement)(u.WV.button,(0,n.Z)({type:"submit"},a,{ref:t}))});function L(e){let t={};for(let r in e)t[r]=e[r];return t}function W(e){return e instanceof HTMLElement}function j(e){return"validity"in e&&(!1===e.validity.valid||"true"===e.getAttribute("aria-invalid"))}function O(e){let[t]=Array.from(e.elements).filter(W).filter(j);return t}function P(e){let t=!1;for(let r in e)if("valid"!==r&&"customError"!==r&&e[r]){t=!0;break}return t}function q(e,t){if((null==e?void 0:e.valid)===!0&&!t)return!0}function N(e,t){if((null==e?void 0:e.valid)===!1||t)return!0}let B=C,H=y,U=_,x=k,z=T,G=A}}]);
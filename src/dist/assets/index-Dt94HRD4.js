var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var w=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(w,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(w,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,w=ae.port2;ae.port1.onmessage=re,ie=function(){w.postMessage(null)}}else ie=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),w=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function ge(e,t){pe++,fe[pe]=e.current,e.current=t}var _e=me(null),ve=me(null),ye=me(null),be=me(null);function xe(e,t){switch(ge(ye,t),ge(ve,e),ge(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(_e),ge(_e,e)}function Se(){he(_e),he(ve),he(ye)}function Ce(e){e.memoizedState!==null&&ge(be,e);var t=_e.current,n=Hd(t,e.type);t!==n&&(ge(ve,e),ge(_e,n))}function we(e){ve.current===e&&(he(_e),he(ve)),be.current===e&&(he(be),Qf._currentValue=de)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);default:return``}}function je(e){try{var t=``,n=null;do t+=Ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Me=Object.prototype.hasOwnProperty,Ne=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,Fe=t.unstable_shouldYield,Ie=t.unstable_requestPaint,Le=t.unstable_now,Re=t.unstable_getCurrentPriorityLevel,ze=t.unstable_ImmediatePriority,Be=t.unstable_UserBlockingPriority,Ve=t.unstable_NormalPriority,He=t.unstable_LowPriority,Ue=t.unstable_IdlePriority,We=t.log,Ge=t.unstable_setDisableYieldValue,Ke=null,qe=null;function Je(e){if(typeof We==`function`&&Ge(e),qe&&typeof qe.setStrictMode==`function`)try{qe.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function it(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function st(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ct(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ye(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ut(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ut(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ft(e,t){var n=t&-t;return n=n&42?1:pt(n),(n&(e.suspendedLanes|t))===0?n:0}function pt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ht(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function gt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var _t=Math.random().toString(36).slice(2),vt=`__reactFiber$`+_t,yt=`__reactProps$`+_t,bt=`__reactContainer$`+_t,xt=`__reactEvents$`+_t,St=`__reactListeners$`+_t,Ct=`__reactHandles$`+_t,wt=`__reactResources$`+_t,Tt=`__reactMarker$`+_t;function Et(e){delete e[vt],delete e[yt],delete e[xt],delete e[St],delete e[Ct]}function Dt(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[vt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ot(e){if(e=e[vt]||e[bt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function At(e){var t=e[wt];return t||=e[wt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function jt(e){e[Tt]=!0}var Mt=new Set,Nt={};function Pt(e,t){Ft(e,t),Ft(e+`Capture`,t)}function Ft(e,t){for(Nt[e]=t,e=0;e<t.length;e++)Mt.add(t[e])}var It=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Lt={},Rt={};function zt(e){return Me.call(Rt,e)?!0:Me.call(Lt,e)?!1:It.test(e)?Rt[e]=!0:(Lt[e]=!0,!1)}function Bt(e,t,n){if(zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Vt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ht(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ut(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Wt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Gt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kt(e){if(!e._valueTracker){var t=Wt(e)?`checked`:`value`;e._valueTracker=Gt(e,t,``+e[t])}}function qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Wt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Jt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Yt=/[\n"\\]/g;function Xt(e){return e.replace(Yt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ut(t)):e.value!==``+Ut(t)&&(e.value=``+Ut(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):$t(e,o,Ut(n)):$t(e,o,Ut(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ut(s):e.removeAttribute(`name`)}function Qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Kt(e);return}n=n==null?``:``+Ut(n),t=t==null?n:``+Ut(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Kt(e)}function $t(e,t,n){t===`number`&&Jt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tn(e,t,n){if(t!=null&&(t=``+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ut(n)}function nn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ut(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Kt(e)}function rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var an=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function on(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||an.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function sn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&on(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&on(e,o,t[o])}function cn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var ln=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),un=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dn(e){return un.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function fn(){}var pn=null;function mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hn=null,gn=null;function _n(e){var t=Ot(e);if(t&&(e=t.stateNode)){var n=e[yt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Xt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[yt]||null;if(!a)throw Error(i(90));Zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&qt(r)}break a;case`textarea`:tn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}}}var vn=!1;function yn(e,t,n){if(vn)return e(t,n);vn=!0;try{return e(t)}finally{if(vn=!1,(hn!==null||gn!==null)&&(bu(),hn&&(t=hn,e=gn,gn=hn=null,_n(t),e)))for(t=0;t<e.length;t++)_n(e[t])}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[yt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var xn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),Sn=!1;if(xn)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Sn=!0}}),window.addEventListener(`test`,Cn,Cn),window.removeEventListener(`test`,Cn,Cn)}catch{Sn=!1}var wn=null,Tn=null,En=null;function Dn(){if(En)return En;var e,t=Tn,n=t.length,r,i=`value`in wn?wn.value:wn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return En=i.slice(e,1<r?1-r:void 0)}function On(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kn(){return!0}function An(){return!1}function jn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?kn:An,this.isPropagationStopped=An,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=jn(Mn),Pn=m({},Mn,{view:0,detail:0}),Fn=jn(Pn),In,Ln,Rn,zn=m({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Rn&&(Rn&&e.type===`mousemove`?(In=e.screenX-Rn.screenX,Ln=e.screenY-Rn.screenY):Ln=In=0,Rn=e),In)},movementY:function(e){return`movementY`in e?e.movementY:Ln}}),Bn=jn(zn),Vn=jn(m({},zn,{dataTransfer:0})),Hn=jn(m({},Pn,{relatedTarget:0})),Un=jn(m({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0})),Wn=jn(m({},Mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),D=jn(m({},Mn,{data:0})),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=jn(m({},Pn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=On(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?On(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?On(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Zn=jn(m({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Qn=jn(m({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn})),$n=jn(m({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=jn(m({},zn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=jn(m({},Mn,{newState:0,oldState:0})),nr=[9,13,27,32],rr=xn&&`CompositionEvent`in window,ir=null;xn&&`documentMode`in document&&(ir=document.documentMode);var ar=xn&&`TextEvent`in window&&!ir,or=xn&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function O(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=Dn(),En=Tn=wn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){hn?gn?gn.push(r):gn=[r]:hn=r,t=Td(t,`onChange`),0<t.length&&(n=new Nn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){vd(e,0)}function yr(e){if(qt(kt(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(xn){var Sr;if(xn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,mn(e)),yn(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Me.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=xn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Jt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Td(Vr,`onSelect`),0<r.length&&(t=new Nn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};xn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),k=Yr(`animationiteration`),Zr=Yr(`animationstart`),Qr=Yr(`transitionrun`),$r=Yr(`transitionstart`),ei=Yr(`transitioncancel`),ti=Yr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),Pt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ye(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=_i(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=_i(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=_i(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function Ci(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:je(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:je(t)}}var Di=[],Oi=0,ki=null,Ai=0,j=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Ii(e,t,n){j[ji++]=Ni,j[ji++]=Pi,j[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var a=32-Ye(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ye(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Mi;)Mi=j[--ji],j[ji]=null,Pi=j[--ji],j[ji]=null,Ni=j[--ji],j[ji]=null}function M(e,t){j[ji++]=Ni,j[ji++]=Pi,j[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var N=null,zi=null,P=!1,F=null,Bi=!1,Vi=Error(i(519));function I(e){throw Ki(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[vt]=e,t[yt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),nn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=fn),t=!0):t=!1,t||I(e,!0)}function Ui(e){for(N=e.return;N;)switch(N.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:N=N.return}}function Wi(e){if(e!==N)return!1;if(!P)return Ui(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&zi&&I(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));zi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));zi=uf(e)}else t===27?(t=zi,Zd(e.type)?(e=lf,lf=null,zi=e):zi=t):zi=N?cf(e.stateNode.nextSibling):null;return!0}function Gi(){zi=N=null,P=!1}function L(){var e=F;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),F=null),e}function Ki(e){F===null?F=[e]:F.push(e)}var qi=me(null),Ji=null,Yi=null;function Xi(e,t,n){ge(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,he(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return R(Ji,e)}function ia(e,t){return Ji===null&&na(e),R(e,t)}function R(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,z=null;function ma(e,t){if(da===null){var n=da=[];fa=0,pa=ud(),z={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ha,ha),t}function ha(){if(--fa===0&&da!==null){z!==null&&(z.status=`fulfilled`);var e=da;da=null,pa=0,z=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var B=T.S;T.S=function(e,t){eu=Le(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),B!==null&&B(e,t)};var _a=me(null);function va(){var e=_a.current;return e===null?Ll.pooledCache:e}function ya(e,t){t===null?ge(_a,_a.current):ge(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:ca._currentValue,pool:e}}var xa=Error(i(460)),V=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(fn,fn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then(fn,fn);else{if(e=Ll,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,xa}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,xa):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===xa||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function H(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=A(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Ea(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Ea(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===S)return f(e,ia(e,t),n);H(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Ea(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===S)return p(e,t,ia(e,n),r);H(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Ea(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===S)return m(e,t,n,ia(t,r),i);H(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Ea(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===S)return b(e,r,ia(e,o),c);H(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===xa||t===Sa)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Fa=Pa(!0),Ia=Pa(!1),La=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Il&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dt(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wa=!1;function Ga(){if(Wa){var e=z;if(e!==null)throw e}}function Ka(e,t,n,r){Wa=!1;var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===pa&&(Wa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:La=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ja(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qa(n[e],t)}var Ya=me(null),Xa=me(0);function Za(e,t){e=Ul,ge(Xa,e),ge(Ya,t),Ul=e|t.baseLanes}function Qa(){ge(Xa,Ul),ge(Ya,Ya.current)}function $a(){Ul=Xa.current,he(Ya),he(Xa)}var eo=me(null),to=null;function no(e){var t=e.alternate;ge(so,so.current&1),ge(eo,e),to===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){ge(so,so.current),ge(eo,e),to===null&&(to=e)}function io(e){e.tag===22?(ge(so,so.current),ge(eo,e),to===null&&(to=e)):ao(e)}function ao(){ge(so,so.current),ge(eo,eo.current)}function oo(e){he(eo),to===e&&(to=null),he(so)}var so=me(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,uo=null,fo=null,W=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){T.H=Ls;var t=uo!==null&&uo.next!==null;if(lo=0,fo=uo=U=null,W=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&ta(e)&&(nc=!0))}function Co(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,fo=uo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(uo===null?null:uo.memoizedState)!==e&&(U.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(W){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}W=!1}lo=0,fo=uo=U=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?U.memoizedState=fo=e:fo=fo.next=e,fo}function ko(){if(uo===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=uo.next;var t=fo===null?U.memoizedState:fo.next;if(t!==null)fo=t,uo=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));uo=e,e={memoizedState:uo.memoizedState,baseState:uo.baseState,baseQueue:uo.baseQueue,queue:uo.queue,next:null},fo===null?U.memoizedState=fo=e:fo=fo.next=e}return fo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=Ta(_o,e,t),t=U,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===S)return ra(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=w;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),uo,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((lo&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Gl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Mr(o,e.memoizedState)&&(nc=!0,d&&(n=z,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=U,a=ko(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Mr((uo||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),Ll===null)throw Error(i(349));o||lo&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Ao(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Uo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,uo,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(P){var n=Ll.formState;if(n!==null){a:{var r=U;if(P){if(zi){b:{for(var i=zi,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){zi=cf(i.nextSibling),r=i.data===`F!`;break a}}I(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,U,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,U,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),uo,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===xa?Sa:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=uo;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=Ao(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;uo!==null&&r!==null&&bo(r,uo.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(U.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Ao(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(Il&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||lo&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),U.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return Mr(n,t)?n:Ya.current===null?!(lo&42)||lo&1073741824&&!(X&261930)?(nc=!0,e.memoizedState=n):(e=mu(),U.lanes|=e,Gl|=e,t):(e=ys(e,n,r),Mr(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ns(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,ga(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,de,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return ra(Qf)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ba(n);var r=Va(t,e,n);r!==null&&(hu(r,t,n),Ha(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return ui(e,t,i,0),Ll===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===U||t!==null&&t===U}function Fs(e,t){po=W=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dt(e,n)}}var Ls={readContext:ra,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:ra,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,U,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Oo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ll===null)throw Error(i(349));X&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=Ll.identifierPrefix;if(P){var n=Pi,r=Ni;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,U)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(Il&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:ra,use:Mo,useCallback:_s,useContext:ra,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),uo.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),uo,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:ra,use:Mo,useCallback:_s,useContext:ra,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return uo===null?ys(n,e,t):bs(n,uo.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return uo===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,uo,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ba(n);r.tag=2,t!=null&&(r.callback=t),t=Va(e,r,n),t!==null&&(hu(t,e,n),Ha(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){ai(e)}function qs(e){console.error(e)}function Js(e){ai(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ba(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=eo.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Eu():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Eu(),!1}if(P)return t=eo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ki(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=Zs(e.stateNode,r,a),Ua(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ki(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ua(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ua(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Ec(e,t,i)):(P&&s&&Li(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=A(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref){if(nc=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Ec(e,t,i)}}return K(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return G(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?Qa():Za(t,a),io(t);else return r=t.lanes=536870912,G(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),Qa(),ao(t)):(ya(t,a.cachePool),Za(t,a),ao(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function G(e,t,n,r,i){var a=va();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),Qa(),io(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Fa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,cc(null,e);if(ro(t),(e=zi)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,N=t,zi=null)):e=null,e===null)throw I(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a){if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(nc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=Ll,r!==null&&(s=ft(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),tc;Eu(),t=uc(e,t,n)}else e=o.treeContext,zi=cf(s.nextSibling),N=t,P=!0,F=null,Bi=!1,e!==null&&M(t,e),t=lc(t,r),t.flags|=4096;return t}return e=A(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function K(e,t,n,r,i){return na(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Ec(e,t,i)):(P&&r&&Li(t),t.flags|=1,rc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Ec(e,t,a)):(P&&r&&Li(t),t.flags|=1,rc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ra(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ka(t,r,a,i),Ga(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),La=!1;var f=t.memoizedState;a.state=f,Ka(t,r,a,i),Ga(),l=t.memoizedState,s||f!==l||La?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=La||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,za(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),La=!1,f=t.memoizedState,a.state=f,Ka(t,r,a,i),Ga();var p=t.memoizedState;o!==d||f!==p||La||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=La||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Gi(),t.flags|=256,rc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ba()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(so.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(a?no(t):ao(t),(e=zi)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,N=t,zi=null)):e=null,e===null)throw I(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,cc(null,r)):(no(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Fa(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=cc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(nc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=Ll,s!==null&&(r=ft(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),tc;af(c)||Eu(),t=Sc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,zi=cf(c.nextSibling),N=t,P=!0,F=null,Bi=!1,e!==null&&M(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=A(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=A(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=ba():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,cc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=A(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Fa(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,ge(so,o),rc(e,t,r,n),r=P?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=A(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=A(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Oc(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Xi(t,ca,e.memoizedState.cache),Gi();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(so,so.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Xi(t,ca,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!Dc(e,n)&&!(t.flags&128))return nc=!1,Oc(e,t,n);nc=!!(e.flags&131072)}}else nc=!1,P&&t.flags&1048576&&Ii(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Gs(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=K(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=ic(null,t,e,r,n);break a}if(a===re){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return K(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,za(e,t),Ka(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,ca,r),r!==o.cache&&$i(t,[ca],n,!0),Ga(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}if(r!==a){a=Ei(Error(i(424)),t),Ki(a),t=hc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(zi=cf(e.firstChild),N=t,P=!0,F=null,Bi=!0,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ec(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(ye.current).createElement(n),r[vt]=t,r[yt]=e,Pd(r,n,e),jt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,ye.current),N=t,Bi=!0,a=zi,Zd(t.type)?(lf=a,zi=cf(r.firstChild)):zi=a),rc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=zi)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,N=t,zi=cf(r.firstChild),Bi=!1,a=!0)),a||I(t)),Ce(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),fc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=zi)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,N=t,zi=null,e=!0)),e||I(t)),null;case 13:return yc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return dc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(ca),e===null?(a=va(),a===null&&(a=Ll,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ra(t),Xi(t,ca,a)):((e.lanes&n)!==0&&(za(e,t),Ka(t,null,null,n),Ga()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,ca,r),r!==a.cache&&$i(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,ca,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw Da=Ca,V}}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(Cu())e.flags|=8192;else throw Da=Ca,V}}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ot(),e.lanes|=t,Yl|=t)}function Pc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(ca),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,L())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(we(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=_e.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(we(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=_e.current,Wi(t))Hi(t,o);else{var s=Bd(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[vt]=t,o[yt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=N,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||I(t,!0)}else e=Bd(e).createTextNode(r),e[vt]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[vt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=L(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[vt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=L(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return Se(),e===null&&xd(t.stateNode.containerInfo),Fc(t),null;case 10:return Zi(t.type),Fc(t),null;case 19:if(he(so),r=t.memoizedState,r===null)return Fc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Pc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return ge(so,so.current&1|2),P&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Le()>tu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return Fc(t),null}else 2*Le()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Le(),e.sibling=null,n=so.current,ge(so,a?n&1|2:n&1),P&&Fi(t,r.treeForkCount),e);case 22:case 23:return oo(t),$a(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(ca),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(ca),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(so),null;case 4:return Se(),null;case 10:return Zi(t.type),null;case 22:case 23:return oo(t),$a(),e!==null&&he(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(ca),null;case 25:return null;default:return null}}function Rc(e,t){switch(Ri(t),t.tag){case 3:Zi(ca),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:he(so);break;case 10:Zi(t.type);break;case 22:case 23:oo(t),$a(),e!==null&&he(_a);break;case 24:Zi(ca)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Wu(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Wu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Wu(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ja(t,n)}catch(t){Wu(e,e.return,t)}}}function Hc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Wu(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Wu(e,t,n)}}function q(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Wu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Wu(e,t,n)}else n.current=null}}function Wc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Wu(e,e.return,t)}}function Gc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[yt]=t}catch(t){Wu(e,e.return,t)}}function Kc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[vt]=e,t[yt]=n}catch(t){Wu(e,e.return,t)}}var Zc=!1,Qc=!1,$c=!1,el=typeof WeakSet==`function`?WeakSet:Set,tl=null;function nl(e,t){if(e=e.containerInfo,Rd=sp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,tl=t;tl!==null;)if(t=tl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,tl=e;else for(;tl!==null;){switch(t=tl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Wu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,tl=e;break}tl=t.return}}function rl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:vl(e,n),r&4&&zc(5,n);break;case 1:if(vl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Wu(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Wu(n,n.return,e)}}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(vl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ja(e,t)}catch(e){Wu(n,n.return,e)}}break;case 27:t===null&&r&4&&Xc(n);case 26:case 5:vl(e,n),t===null&&r&4&&Wc(n),r&512&&Uc(n,n.return);break;case 12:vl(e,n);break;case 31:vl(e,n),r&4&&ll(e,n);break;case 13:vl(e,n),r&4&&ul(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Zc,!r){t=t!==null&&t.memoizedState!==null||Qc,i=Zc;var a=Qc;Zc=r,(Qc=t)&&!a?bl(e,n,!!(n.subtreeFlags&8772)):vl(e,n),Zc=i,Qc=a}break;case 30:break;default:vl(e,n)}}function il(e){var t=e.alternate;t!==null&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Et(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var al=null,ol=!1;function sl(e,t,n){for(n=n.child;n!==null;)cl(e,t,n),n=n.sibling}function cl(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount==`function`)try{qe.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:Qc||q(n,t),sl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Qc||q(n,t);var r=al,i=ol;Zd(n.type)&&(al=n.stateNode,ol=!1),sl(e,t,n),pf(n.stateNode),al=r,ol=i;break;case 5:Qc||q(n,t);case 6:if(r=al,i=ol,al=null,sl(e,t,n),al=r,ol=i,al!==null){if(ol)try{(al.nodeType===9?al.body:al.nodeName===`HTML`?al.ownerDocument.body:al).removeChild(n.stateNode)}catch(e){Wu(n,t,e)}else try{al.removeChild(n.stateNode)}catch(e){Wu(n,t,e)}}break;case 18:al!==null&&(ol?(e=al,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(al,n.stateNode));break;case 4:r=al,i=ol,al=n.stateNode.containerInfo,ol=!0,sl(e,t,n),al=r,ol=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),Qc||Bc(4,n,t),sl(e,t,n);break;case 1:Qc||(q(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),sl(e,t,n);break;case 21:sl(e,t,n);break;case 22:Qc=(r=Qc)||n.memoizedState!==null,sl(e,t,n),Qc=r;break;default:sl(e,t,n)}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Wu(t,t.return,e)}}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Wu(t,t.return,e)}}function dl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new el),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new el),t;default:throw Error(i(435,e.tag))}}function fl(e,t){var n=dl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function pl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){al=c.stateNode,ol=!1;break a}break;case 5:al=c.stateNode,ol=!1;break a;case 3:case 4:al=c.stateNode.containerInfo,ol=!0;break a}c=c.return}if(al===null)throw Error(i(160));cl(o,s,a),al=null,ol=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hl(t,e),t=t.sibling}var ml=null;function hl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pl(t,e),gl(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:pl(t,e),gl(e),r&512&&(Qc||n===null||q(n,n.return)),r&64&&Zc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ml;if(pl(t,e),gl(e),r&512&&(Qc||n===null||q(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Tt]||o[vt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[vt]=e,jt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[vt]=e,jt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:pl(t,e),gl(e),r&512&&(Qc||n===null||q(n,n.return)),n!==null&&r&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pl(t,e),gl(e),r&512&&(Qc||n===null||q(n,n.return)),e.flags&32){a=e.stateNode;try{rn(a,``)}catch(t){Wu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Gc(e,a,n===null?a:n.memoizedProps)),r&1024&&($c=!0);break;case 6:if(pl(t,e),gl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Wu(e,e.return,t)}}break;case 3:if(Bf=null,a=ml,ml=gf(t.containerInfo),pl(t,e),ml=a,gl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Wu(e,e.return,t)}$c&&($c=!1,_l(e));break;case 4:r=ml,ml=gf(e.stateNode.containerInfo),pl(t,e),gl(e),ml=r;break;case 12:pl(t,e),gl(e);break;case 31:pl(t,e),gl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 13:pl(t,e),gl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Le()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Zc,d=Qc;if(Zc=u||a,Qc=d||l,pl(t,e),Qc=d,Zc=u,gl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Zc||Qc||yl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Wu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Wu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Wu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,fl(e,n))));break;case 19:pl(t,e),gl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 30:break;case 21:break;default:pl(t,e),gl(e)}}function gl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Kc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Yc(e,qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(rn(o,``),n.flags&=-33),Yc(e,qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Jc(e,qc(e),s);break;default:throw Error(i(161))}}catch(t){Wu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _l(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_l(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function vl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rl(e,t.alternate,t),t=t.sibling}function yl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),yl(t);break;case 1:q(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),yl(t);break;case 27:pf(t.stateNode);case 26:case 5:q(t,t.return),yl(t);break;case 22:t.memoizedState===null&&yl(t);break;case 30:yl(t);break;default:yl(t)}e=e.sibling}}function bl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:bl(i,a,n),zc(4,a);break;case 1:if(bl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Wu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)qa(c[i],s)}catch(e){Wu(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Xc(a);case 26:case 5:bl(i,a,n),n&&r===null&&o&4&&Wc(a),Uc(a,a.return);break;case 12:bl(i,a,n);break;case 31:bl(i,a,n),n&&o&4&&ll(i,a);break;case 13:bl(i,a,n),n&&o&4&&ul(i,a);break;case 22:a.memoizedState===null&&bl(i,a,n),Uc(a,a.return);break;case 30:break;default:bl(i,a,n)}t=t.sibling}}function xl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Sl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function Cl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wl(e,t,n,r),t=t.sibling}function wl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Cl(e,t,n,r),i&2048&&zc(9,t);break;case 1:Cl(e,t,n,r);break;case 3:Cl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){Cl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Wu(t,t.return,e)}}else Cl(e,t,n,r);break;case 31:Cl(e,t,n,r);break;case 13:Cl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Cl(e,t,n,r):(a._visibility|=2,Tl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Cl(e,t,n,r):El(e,t),i&2048&&xl(o,t);break;case 24:Cl(e,t,n,r),i&2048&&Sl(t.alternate,t);break;default:Cl(e,t,n,r)}}function Tl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Tl(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Tl(a,o,s,c,i)):u._visibility&2?Tl(a,o,s,c,i):El(a,o),i&&l&2048&&xl(o.alternate,o);break;case 24:Tl(a,o,s,c,i),i&&l&2048&&Sl(o.alternate,o);break;default:Tl(a,o,s,c,i)}t=t.sibling}}function El(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:El(n,r),i&2048&&xl(r.alternate,r);break;case 24:El(n,r),i&2048&&Sl(r.alternate,r);break;default:El(n,r)}t=t.sibling}}var Dl=8192;function Ol(e,t,n){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)kl(e,t,n),e=e.sibling}function kl(e,t,n){switch(e.tag){case 26:Ol(e,t,n),e.flags&Dl&&e.memoizedState!==null&&Gf(n,ml,e.memoizedState,e.memoizedProps);break;case 5:Ol(e,t,n);break;case 3:case 4:var r=ml;ml=gf(e.stateNode.containerInfo),Ol(e,t,n),ml=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Dl,Dl=16777216,Ol(e,t,n),Dl=r):Ol(e,t,n));break;default:Ol(e,t,n)}}function J(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tl=r,Nl(r,e)}J(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jl(e),e=e.sibling}function jl(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):Al(e);break;default:Al(e)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tl=r,Nl(r,e)}J(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function Nl(e,t){for(;tl!==null;){var n=tl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,tl=r;else a:for(n=e;tl!==null;){r=tl;var i=r.sibling,a=r.return;if(il(r),r===n){tl=null;break a}if(i!==null){i.return=a,tl=i;break a}tl=a}}}var Pl={getCacheForType:function(e){var t=ra(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(ca).controller.signal}},Fl=typeof WeakMap==`function`?WeakMap:Map,Il=0,Ll=null,Y=null,X=0,Rl=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return Il&2&&X!==0?X&-X:T.T===null?ht():ud()}function mu(){if(Jl===0){if(!(X&536870912)||P){var e=et;et<<=1,!(et&3932160)&&(et=262144),Jl=e}else Jl=536870912}return e=eo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Ll&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,X,Jl,!1)),ct(e,n),(!(Il&2)||e!==Ll)&&(e===Ll&&(!(Il&2)&&(Kl|=n),Wl===4&&yu(e,X,Jl,!1)),nd(e))}function gu(e,t,n){if(Il&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||it(e,t),a=r?ku(e,t):Du(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Du(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Du(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Le(),10<a)){if(yu(r,t,Jl,!Bl),rt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);nd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fn},kl(t,a,d);var m=(a&62914560)===a?$l-Le():(a&4194048)===a?eu-Le():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Iu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Iu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ye(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ut(e,n,t)}function bu(){return Il&6?!0:(rd(0,!1),!1)}function xu(){if(Y!==null){if(Rl===0)var e=Y.return;else e=Y,Yi=Ji=null,Do(e),Aa=null,ja=0,e=Y;for(;e!==null;)Rc(e.alternate,e),e=e.return;Y=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Ll=e,Y=n=A(e.current,null),X=t,Rl=0,zl=null,Bl=!1,Vl=it(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ye(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,li(),n}function Z(e,t){U=null,T.H=Ls,t===xa||t===Sa?(t=Oa(),Rl=3):t===V?(t=Oa(),Rl=4):Rl=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,Y===null&&(Wl=1,Ys(e,Ei(t,e.current)))}function Cu(){var e=eo.current;return e===null?!0:(X&4194048)===X?to===null:(X&62914560)===X||X&536870912?e===to:!1}function wu(){var e=T.H;return T.H=Ls,e===null?Ls:e}function Tu(){var e=T.A;return T.A=Pl,e}function Eu(){Wl=4,Bl||(X&4194048)!==X&&eo.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Ll===null||yu(Ll,X,Jl,!1)}function Du(e,t,n){var r=Il;Il|=2;var i=wu(),a=Tu();(Ll!==e||X!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(Rl!==0&&Y!==null){var s=Y,c=zl;switch(Rl){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var l=Rl;if(Rl=0,zl=null,Nu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=Rl,Rl=0,zl=null,Nu(e,s,c,l)}}Ou(),o=Wl;break}catch(t){Z(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,Il=r,T.H=i,T.A=a,Y===null&&(Ll=null,X=0,li()),o}function Ou(){for(;Y!==null;)ju(Y)}function ku(e,t){var n=Il;Il|=2;var r=wu(),a=Tu();Ll!==e||X!==t?(nu=null,tu=Le()+500,Su(e,t)):Vl=it(e,t);a:do try{if(Rl!==0&&Y!==null){t=Y;var o=zl;b:switch(Rl){case 1:Rl=0,zl=null,Nu(e,t,o,1);break;case 2:case 9:if(wa(o)){Rl=0,zl=null,Mu(t);break}t=function(){Rl!==2&&Rl!==9||Ll!==e||(Rl=7),nd(e)},o.then(t,t);break a;case 3:Rl=7;break a;case 4:Rl=5;break a;case 7:wa(o)?(Rl=0,zl=null,Mu(t)):(Rl=0,zl=null,Nu(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Wf(s):c.stateNode.complete){Rl=0,zl=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,Pu(u))}break b}}Rl=0,zl=null,Nu(e,t,o,5);break;case 6:Rl=0,zl=null,Nu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}Au();break}catch(t){Z(e,t)}while(1);return Yi=Ji=null,T.H=r,T.A=a,Il=n,Y===null?(Ll=null,X=0,li(),Wl):0}function Au(){for(;Y!==null&&!Fe();)ju(Y)}function ju(e){var t=kc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Pu(e):Y=t}function Mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:Do(t);default:Rc(n,t),t=Y=yi(t,Ul),t=kc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Pu(e):Y=t}function Nu(e,t,n,r){Yi=Ji=null,Do(t),Aa=null,ja=0;var i=t.return;try{if(ec(e,i,t,n,X)){Wl=1,Ys(e,Ei(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;Wl=1,Ys(e,Ei(n,e.current)),Y=null;return}t.flags&32768?(P||r===1?e=!0:Vl||X&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fu(t,e)):Pu(t)}function Pu(e){var t=e;do{if(t.flags&32768){Fu(t,Bl);return}e=t.return;var n=Ic(t.alternate,t,Ul);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Wl===0&&(Wl=5)}function Fu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);Wl=6,Y=null}function Iu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Vu();while(iu!==0);if(Il&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,lt(e,n,o,s,c,l),e===Ll&&(Y=Ll=null,X=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ve,function(){return Hu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=Il,Il|=4;try{nl(e,t,n)}finally{Il=s,E.p=a,T.T=r}}iu=1,Lu(),Ru(),zu()}}function Lu(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=Il;Il|=4;try{hl(t,e);var a=zd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{Il=i,E.p=r,T.T=n}}e.current=t,iu=2}}function Ru(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=Il;Il|=4;try{rl(e,t.alternate,t)}finally{Il=i,E.p=r,T.T=n}}iu=3}}function zu(){if(iu===4||iu===3){iu=0,Ie();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Bu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),mt(n),t=t.stateNode,qe&&typeof qe.onCommitFiberRoot==`function`)try{qe.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Vu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,rd(0,!1)}}function Bu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Vu(){return Lu(),Ru(),zu(),Hu()}function Hu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=mt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,Il&6)throw Error(i(331));var c=Il;if(Il|=4,jl(o.current),wl(o,o.current,s,n),Il=c,rd(0,!1),qe&&typeof qe.onPostCommitFiberRoot==`function`)try{qe.onPostCommitFiberRoot(Ke,o)}catch{}return!0}finally{E.p=a,T.T=r,Bu(e,t)}}function Uu(e,t,n){t=Ei(n,t),t=Zs(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(ct(e,2),nd(e))}function Wu(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ei(n,e),n=Qs(2),r=Va(t,n,2),r!==null&&($s(n,r,t,e),ct(r,2),nd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ll===e&&(X&n)===n&&(Wl===4||Wl===3&&(X&62914560)===X&&300>Le()-$l?!(Il&2)&&Su(e,0):ql|=n,Yl===X&&(Yl=0)),nd(e)}function qu(e,t){t===0&&(t=ot()),e=fi(e,t),e!==null&&(ct(e,t),nd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ne(e,t)}var Q=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Q=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Q;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ye(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=X,a=rt(r,r===Ll?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||it(r,a)||(n=!0,cd(r,a))}r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Le(),n=null,r=Q;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Q=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}iu!==0&&iu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ye(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=at(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ll,n=X,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||it(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Pe(r),mt(n)){case 2:case 8:n=Be;break;case 32:n=Ve;break;case 268435456:n=Ue;break;default:n=Ve}return r=sd.bind(null,e),n=Ne(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var r=X;return r=rt(e,e===Ll?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),od(e,Le()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Vu())return null;gu(e,t,!0)}function ld(){Yd(function(){Il&6?Ne(ze,id):ad()})}function ud(){if(td===0){var e=pa;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:dn(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[yt]||null).action),o=r.submitter;o&&(t=(t=o[yt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Nn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<ri.length;md++){var hd=ri[md];ii(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}ii(Xr,`onAnimationEnd`),ii(k,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Ft(`onMouseEnter`,[`mouseout`,`mouseover`]),Ft(`onMouseLeave`,[`mouseout`,`mouseover`]),Ft(`onPointerEnter`,[`pointerout`,`pointerover`]),Ft(`onPointerLeave`,[`pointerout`,`pointerover`]),Pt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Pt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Pt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Pt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Pt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Pt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[xt];n===void 0&&(n=t[xt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,Mt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!Sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Dt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}yn(function(){var r=a,i=mn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=Nn,u=e;switch(e){case`keypress`:if(On(n)===0)break a;case`keydown`:case`keyup`:l=Xn;break;case`focusin`:u=`focus`,l=Hn;break;case`focusout`:u=`blur`,l=Hn;break;case`beforeblur`:case`afterblur`:l=Hn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Bn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Vn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Qn;break;case Xr:case k:case Zr:l=Un;break;case ti:l=$n;break;case`scroll`:case`scrollend`:l=Fn;break;case`wheel`:l=er;break;case`copy`:case`cut`:case`paste`:l=Wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Zn;break;case`toggle`:case`beforetoggle`:l=tr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=bn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==pn&&(u=n.relatedTarget||n.fromElement)&&(Dt(u)||u[bt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Dt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Bn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:kt(l),h=u==null?c:kt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Dt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?kt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=br;else if(mr(c)){if(xr)v=Ar;else{v=Or;var y=Dr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&cn(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&$t(c,`number`,c.value)}switch(y=r?kt(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(s,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(s,n,i)}var b;if(rr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else dr?lr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(or&&n.locale!==`ko`&&(dr||x!==`onCompositionStart`?x===`onCompositionEnd`&&dr&&(b=Dn()):(wn=i,Tn=`value`in wn?wn.value:wn.textContent,dr=!0)),y=Td(r,x),0<y.length&&(x=new D(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ur(n),b!==null&&(x.data=b)))),(b=ar?fr(e,n):O(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new D(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=bn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=bn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=bn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=bn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||rn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&rn(e,``+r);break;case`className`:Vt(e,`class`,r);break;case`tabIndex`:Vt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Vt(e,n,r);break;case`style`:sn(e,r,o);break;case`data`:if(t!==`object`){Vt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=dn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=dn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=fn);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=dn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Bt(e,`popover`,r);break;case`xlinkActuate`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Bt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=ln.get(n)||n,Bt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:sn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?rn(e,r):(typeof r==`number`||typeof r==`bigint`)&&rn(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=fn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Nt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[yt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Bt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&en(e,!!r,n,!0):en(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}nn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(cn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?en(e,!!n,n?[]:``,!1):en(e,!!n,t,!0)):en(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}tn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(cn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Tt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Et(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Tt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Et(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ot(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Xt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),jt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Xt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Xt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Xt(n.imageSizes)+`"]`)):i+=`[href="`+Xt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),jt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Xt(r)+`"][href="`+Xt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),jt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=At(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);jt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=At(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),jt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=At(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),jt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ye.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=At(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=At(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=At(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Xt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),jt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Xt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Xt(n.href)+`"]`);if(r)return t.instance=r,jt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),jt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,jt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),jt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,jt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),jt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Tt]||a[vt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,jt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),jt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ra(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ba(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Va(e,r,t),n!==null&&(hu(n,e,t),Ha(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=pt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ot(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ye(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Il&6)&&(tu=Le()+500,rd(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=mn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Dt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Re()){case ze:return 2;case Be:return 8;case Ve:case He:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ot(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Dt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,gt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,gt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pn=r,n.target.dispatchEvent(r),pn=null}else return t=Ot(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ot(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[yt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[yt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[bt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ht();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ke=zp.inject(Rp),qe=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[bt]=t.current,xd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/`+e},ee={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=x(t,n),t=s(t),t in ee)return;ee[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:b,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,te=/^[\\/]{2}/;function ne(e,t){return t+e.replace(/\\/g,`/`)}var re=`popstate`;function ie(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ae(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return le(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ue(t)}return E(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function oe(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function se(){return Math.random().toString(36).substring(2,10)}function ce(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function le(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?T(t):t,state:n,key:t&&t.key||r||se(),mask:i}}function ue({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function T(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function E(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ie(e)?e:le(h.location,e,t);n&&n(r,e),l=u()+1;let d=ce(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ie(e)?e:le(h.location,e,t);n&&n(r,e),l=u();let i=ce(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return de(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(re,d),c=e,()=>{i.removeEventListener(re,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function de(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ue(t);return i=i.replace(/ $/,`%20`),!n&&te.test(i)&&(i=r+i),new URL(i,r)}function fe(e,t,n=`/`){return pe(e,t,n,!1)}function pe(e,t,n,r,i){let a=Me((typeof t==`string`?T(t):t).pathname||`/`,n);if(a==null)return null;let o=i??me(e),s=null,c=je(a);for(let e=0;s==null&&e<o.length;++e)s=De(o[e],c,r);return s}function me(e){let t=he(e);return _e(t),t}function he(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Be([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),he(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Te(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ae(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ge(e.path))a(e,t,!0,n)}),t}function ge(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ge(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function _e(e){e.sort((e,t)=>e.score===t.score?Ee(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ve=/^:[\w-]+$/,ye=3,be=2,xe=1,Se=10,Ce=-2,we=e=>e===`*`;function Te(e,t){let n=e.split(`/`),r=n.length;return n.some(we)&&(r+=Ce),t&&(r+=be),n.filter(e=>!we(e)).reduce((e,t)=>e+(ve.test(t)?ye:t===``?xe:Se),r)}function Ee(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function De(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ke(u,l,s.matcher,s.compiledParams):Oe(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Oe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Be([a,d.pathname]),pathnameBase:He(Be([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Be([a,d.pathnameBase]))}return o}function Oe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ae(e.path,e.caseSensitive,e.end);return ke(e,t,n,r)}function ke(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ae(e,t=!1,n=!0){oe(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function je(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return oe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Me(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ne(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?T(e):e,a;return n?(n=ze(n),a=n.startsWith(`/`)?Pe(n.substring(1),`/`):Pe(n,t)):a=t,{pathname:a,search:Ue(r),hash:We(i)}}function Pe(e,t){let n=Ve(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Fe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ie(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Le(e){let t=Ie(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Re(e,t,n,r=!1){let i;typeof e==`string`?i=T(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Fe(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Fe(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Fe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ne(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ze=e=>e.replace(/[\\/]{2,}/g,`/`),Be=e=>ze(e.join(`/`)),Ve=e=>e.replace(/\/+$/,``),He=e=>Ve(e).replace(/^\/*/,`/`),Ue=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,We=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ge=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ke(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function qe(e){return Be(e.map(e=>e.route.path).filter(Boolean))||`/`}var Je=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ye(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Je)try{let e=new URL(window.location.href),r=te.test(n)?new URL(ne(n,e.protocol)):new URL(n),a=Me(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{oe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Xe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Xe);var Ze=[`GET`,...Xe];new Set(Ze);var Qe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function $e(e){try{return Qe.includes(new URL(e).protocol)}catch{return!1}}var et=v.createContext(null);et.displayName=`DataRouter`;var tt=v.createContext(null);tt.displayName=`DataRouterState`;var nt=v.createContext(!1);function rt(){return v.useContext(nt)}var it=v.createContext({isTransitioning:!1});it.displayName=`ViewTransition`;var at=v.createContext(new Map);at.displayName=`Fetchers`;var ot=v.createContext(null);ot.displayName=`Await`;var st=v.createContext(null);st.displayName=`Navigation`;var ct=v.createContext(null);ct.displayName=`Location`;var lt=v.createContext({outlet:null,matches:[],isDataRoute:!1});lt.displayName=`Route`;var ut=v.createContext(null);ut.displayName=`RouteError`;var dt=`REACT_ROUTER_ERROR`,ft=`REDIRECT`,pt=`ROUTE_ERROR_RESPONSE`;function mt(e){if(e.startsWith(`${dt}:${ft}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ht(e){if(e.startsWith(`${dt}:${pt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ge(t.status,t.statusText,t.data)}catch{}}function gt(e,{relative:t}={}){w(_t(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(st),{hash:i,pathname:a,search:o}=Ct(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Be([n,a])),r.createHref({pathname:s,search:o,hash:i})}function _t(){return v.useContext(ct)!=null}function vt(){return w(_t(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(ct).location}var yt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function bt(e){v.useContext(st).static||v.useLayoutEffect(e)}function xt(){let{isDataRoute:e}=v.useContext(lt);return e?Bt():St()}function St(){w(_t(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(et),{basename:t,navigator:n}=v.useContext(st),{matches:r}=v.useContext(lt),{pathname:i}=vt(),a=JSON.stringify(Le(r)),o=v.useRef(!1);return bt(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(oe(o.current,yt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Re(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Be([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function Ct(e,{relative:t}={}){let{matches:n}=v.useContext(lt),{pathname:r}=vt(),i=JSON.stringify(Le(n));return v.useMemo(()=>Re(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function wt(e,t){return Tt(e,t)}function Tt(e,t,n){w(_t(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(st),{matches:i}=v.useContext(lt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ht(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=vt(),d;if(t){let e=typeof t==`string`?T(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):fe(e,{pathname:p});oe(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),oe(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Mt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Be([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Be([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(ct.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Et(){let e=zt(),t=Ke(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Dt=v.createElement(Et,null),Ot=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ht(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(lt.Provider,{value:this.props.routeContext},v.createElement(ut.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(At,{error:e},t):t}};Ot.contextType=nt;var kt=new WeakMap;function At({children:e,error:t}){let{basename:n}=v.useContext(st);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=mt(t.digest);if(e){let r=kt.get(t);if(r)throw r;let i=Ye(e.location,n),a=i.absoluteURL||i.to;if($e(a))throw Error(`Invalid redirect location`);if(Je&&!kt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw kt.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function jt({routeContext:e,match:t,children:n}){let r=v.useContext(et);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(lt.Provider,{value:e},n)}function Mt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:qe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Dt,o&&(s<0&&c===0?(Ht(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(jt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(Ot,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pt(e){let t=v.useContext(et);return w(t,Nt(e)),t}function Ft(e){let t=v.useContext(tt);return w(t,Nt(e)),t}function It(e){let t=v.useContext(lt);return w(t,Nt(e)),t}function Lt(e){let t=It(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Rt(){return Lt(`useRouteId`)}function zt(){let e=v.useContext(ut),t=Ft(`useRouteError`),n=Lt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Bt(){let{router:e}=Pt(`useNavigate`),t=Lt(`useNavigate`),n=v.useRef(!1);return bt(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{oe(n.current,yt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Vt={};function Ht(e,t,n){!t&&!Vt[e]&&(Vt[e]=!0,oe(!1,n))}v.memo(Ut);function Ut({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Tt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Wt({to:e,replace:t,state:n,relative:r}){w(_t(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=v.useContext(st);oe(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=v.useContext(lt),{pathname:o}=vt(),s=xt(),c=Re(e,Le(a),o,r===`path`),l=JSON.stringify(c);return v.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Gt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Kt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!_t(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=T(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Me(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return oe(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(st.Provider,{value:c},v.createElement(ct.Provider,{children:t,value:h}))}function qt({children:e,location:t}){return wt(Jt(e),t)}v.Component;function Jt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Jt(e.props.children,i));return}w(e.type===Gt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Jt(e.props.children,i)),n.push(a)}),n}var Yt=`get`,Xt=`application/x-www-form-urlencoded`;function Zt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Qt(e){return Zt(e)&&e.tagName.toLowerCase()===`button`}function $t(e){return Zt(e)&&e.tagName.toLowerCase()===`form`}function en(e){return Zt(e)&&e.tagName.toLowerCase()===`input`}function tn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nn(e,t){return e.button===0&&(!t||t===`_self`)&&!tn(e)}var rn=null;function an(){if(rn===null)try{new FormData(document.createElement(`form`),0),rn=!1}catch{rn=!0}return rn}var on=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function sn(e){return e!=null&&!on.has(e)?(oe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xt}"`),null):e}function cn(e,t){let n,r,i,a,o;if($t(e)){let o=e.getAttribute(`action`);r=o?Me(o,t):null,n=e.getAttribute(`method`)||Yt,i=sn(e.getAttribute(`enctype`))||Xt,a=new FormData(e)}else if(Qt(e)||en(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Me(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Yt,i=sn(e.getAttribute(`formenctype`))||sn(o.getAttribute(`enctype`))||Xt,a=new FormData(o,e),!an()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Zt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Yt,r=null,i=Xt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function ln(e,t){if(e===!1||e==null)throw Error(t)}function un(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Me(i.pathname,t)===`/`?`${Ve(t)}/_root.${r}`:`${Ve(i.pathname)}.${r}`,i}async function dn(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fn(e){return e!=null&&typeof e.page==`string`}function pn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function mn(e,t,n){return yn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await dn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(pn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function hn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function gn(e,t,{includeHydrateFallback:n}={}){return _n(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function _n(e){return[...new Set(e)]}function vn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function yn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!fn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(vn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function bn(){let e=v.useContext(et);return ln(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function xn(){let e=v.useContext(tt);return ln(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Sn=v.createContext(void 0);Sn.displayName=`FrameworkContext`;function Cn(){let e=v.useContext(Sn);return ln(e,`You must render this element inside a <HydratedRouter> element`),e}function wn(e,t){let n=v.useContext(Sn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Tn(s,p),onBlur:Tn(c,m),onMouseEnter:Tn(l,p),onMouseLeave:Tn(u,m),onTouchStart:Tn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Tn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function En({page:e,...t}){let n=rt(),{nonce:r}=Cn(),{router:i}=bn(),a=v.useMemo(()=>fe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(On,{page:e,matches:a,...t}):v.createElement(kn,{page:e,matches:a,...t})):null}function Dn(e){let{manifest:t,routeModules:n}=Cn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return mn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function On({page:e,matches:t,...n}){let r=vt(),{future:i}=Cn(),{basename:a}=bn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=un(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function kn({page:e,matches:t,...n}){let r=vt(),{future:i,manifest:a,routeModules:o}=Cn(),{basename:s}=bn(),{loaderData:c,matches:l}=xn(),u=v.useMemo(()=>hn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>hn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=un(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>gn(d,a),[d,a]),m=Dn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function An(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{jn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function Mn({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=ae({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Kt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Nn=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(st),y=typeof l==`string`&&C.test(l),b=Ye(l,h);l=b.to;let x=gt(l,{relative:r}),ee=vt(),S=null;if(o){let e=Re(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Be([h,e.pathname])),S=g.createHref(e)}let[te,ne,re]=wn(n,p),ie=Rn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ae(t){e&&e(t),t.defaultPrevented||ie(t)}let w=!(b.isExternal||i),oe=v.createElement(`a`,{...p,...re,href:(w?S:void 0)||b.absoluteURL||x,onClick:w?ae:e,ref:An(m,ne),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return te&&!y?v.createElement(v.Fragment,null,oe,v.createElement(En,{page:x})):oe});Nn.displayName=`Link`;var Pn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ct(a,{relative:c.relative}),d=vt(),f=v.useContext(tt),{navigator:p,basename:m}=v.useContext(st),h=f!=null&&Un(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Me(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return v.createElement(Nn,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Pn.displayName=`NavLink`;var Fn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Yt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(st),g=Vn(),_=Hn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&C.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Fn.displayName=`Form`;function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ln(e){let t=v.useContext(et);return w(t,In(e)),t}function Rn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=xt(),d=vt(),f=Ct(e,{relative:o});return v.useCallback(p=>{if(nn(p,t)){p.preventDefault();let t=n===void 0?ue(d)===ue(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var zn=0,Bn=()=>`__${String(++zn)}__`;function Vn(){let{router:e}=Ln(`useSubmit`),{basename:t}=v.useContext(st),n=Rt(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=cn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Bn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Hn(e,{relative:t}={}){let{basename:n}=v.useContext(st),r=v.useContext(lt);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ct(e||`.`,{relative:t})},o=vt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Be([n,a.pathname])),ue(a)}function Un(e,{relative:t}={}){let n=v.useContext(it);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ln(`useViewTransitionState`),i=Ct(e,{relative:t});if(!n.isTransitioning)return!1;let a=Me(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Me(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Oe(i.pathname,o)!=null||Oe(i.pathname,a)!=null}var Wn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),D=o(((e,t)=>{t.exports=Wn()}))();function Gn(){return(0,D.jsx)(`div`,{className:`flex min-h-screen items-center justify-center bg-slate-950 text-slate-100`,children:(0,D.jsx)(`div`,{className:`rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-slate-300 shadow-2xl shadow-slate-900/40`,children:`Đang kiểm tra đăng nhập...`})})}var Kn=`/api`,qn=(e={})=>{let t=localStorage.getItem(`token`),n=new Headers(e);return t&&n.set(`Authorization`,`Bearer ${t}`),n},Jn=async(e,t={})=>{let{headers:n,body:r,...i}=t,a=qn(n);!(r instanceof FormData)&&!a.has(`Content-Type`)&&a.set(`Content-Type`,`application/json`);let o=await fetch(`${Kn}${e}`,{...i,headers:a,body:r}),s=await o.json().catch(()=>({}));if(!o.ok)throw Error(s.message||`Thao tác thất bại`);return s},Yn=async({username:e,password:t})=>Jn(`/auth/login`,{method:`POST`,body:JSON.stringify({username:e,password:t})}),Xn=async e=>{let t=await fetch(`${Kn}/auth/me`,{headers:{Authorization:`Bearer ${e}`}}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message||`Không thể lấy thông tin người dùng`);return n},Zn=(0,v.createContext)(null);function Qn({children:e}){let[t,n]=(0,v.useState)(null),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(``),l=async e=>{try{let t=await Xn(e);n(t),o(``)}catch(e){localStorage.removeItem(`token`),n(null),o(e.message)}finally{i(!1)}};(0,v.useEffect)(()=>{let e=localStorage.getItem(`token`);if(!e){i(!1);return}l(e)},[]);let u=async e=>{let t=await Yn(e);localStorage.setItem(`token`,t.token),await l(t.token),c(`Đăng nhập thành công`)},d=()=>{localStorage.removeItem(`token`),n(null),o(``),c(``)},f=(0,v.useMemo)(()=>({user:t,loading:r,error:a,success:s,setError:o,setSuccess:c,login:u,logout:d,fetchUser:l}),[t,r,a,s]);return(0,D.jsx)(Zn.Provider,{value:f,children:e})}function $n(){return(0,v.useContext)(Zn)}function er({mode:e,form:t,onChange:n,onSubmit:r,loading:i,error:a,success:o}){return xt(),(0,D.jsx)(`div`,{className:`flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100`,children:(0,D.jsxs)(`div`,{className:`w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl shadow-slate-950/60`,children:[(0,D.jsx)(`div`,{className:`mb-6 text-center`,children:(0,D.jsx)(`h1`,{className:`mt-2 text-3xl font-bold`,children:`Đăng nhập`})}),(0,D.jsxs)(`form`,{onSubmit:r,className:`space-y-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`label`,{className:`mb-2 block text-sm text-slate-300`,children:`Tên đăng nhập`}),(0,D.jsx)(`input`,{type:`text`,name:`username`,value:t.username,onChange:n,placeholder:`Nhập tên đăng nhập`,className:`w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400`,required:!0})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`label`,{className:`mb-2 block text-sm text-slate-300`,children:`Mật khẩu`}),(0,D.jsx)(`input`,{type:`password`,name:`password`,value:t.password,onChange:n,placeholder:`Nhập mật khẩu`,className:`w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400`,required:!0})]}),a&&(0,D.jsx)(`div`,{className:`rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300`,children:a}),o&&(0,D.jsx)(`div`,{className:`rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300`,children:o}),(0,D.jsx)(`button`,{type:`submit`,disabled:i,className:`w-full rounded-xl bg-sky-500 px-4 py-3 font-medium text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70`,children:i?`Đang xử lý...`:e===`login`?`Đăng nhập`:`Đăng ký`})]})]})})}function tr(){let e=xt(),{login:t,user:n,error:r,setError:i,success:a,setSuccess:o}=$n(),[s,c]=(0,v.useState)({username:``,password:``,confirmPassword:``}),[l,u]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{n&&e(`/admin`,{replace:!0})},[n,e]),(0,D.jsx)(er,{mode:`login`,form:s,onChange:e=>{let{name:t,value:n}=e.target;c(e=>({...e,[t]:n}))},onSubmit:async n=>{n.preventDefault(),u(!0),i(``),o(``);try{await t({username:s.username,password:s.password}),e(`/admin`,{replace:!0})}catch(e){i(e.message)}finally{u(!1)}},loading:l,error:r,success:a})}var nr=async({name:e,affiliateUrl:t,affiliateCode:n,image:r})=>{let i=new FormData;return i.append(`name`,e),i.append(`affiliateUrl`,t),i.append(`affiliateCode`,n),i.append(`image`,r),Jn(`/products`,{method:`POST`,body:i})},rr=async(e=``)=>{let t=new URLSearchParams;e&&t.append(`search`,e);let n=t.toString();return(await Jn(n?`/products?${n}`:`/products`,{method:`GET`})).data||[]},ir=async(e,{name:t,affiliateUrl:n,affiliateCode:r,image:i})=>{let a=new FormData;return a.append(`name`,t),a.append(`affiliateUrl`,n),a.append(`affiliateCode`,r),i instanceof File&&a.append(`image`,i),Jn(`/products/${e}`,{method:`PUT`,body:a})},ar=async e=>Jn(`/products/${e}`,{method:`DELETE`});function or(){let e=xt(),{user:t,logout:n}=$n(),[r,i]=(0,v.useState)([]),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)(null),[p,m]=(0,v.useState)(null),[h,g]=(0,v.useState)(!1),[_,y]=(0,v.useState)(!0),[b,x]=(0,v.useState)(``),[ee,S]=(0,v.useState)(``),C=()=>{o(``),c(``),u(``),f(null),m(null)},te=async()=>{try{y(!0);let e=await rr();i(e)}catch(e){x(e.message)}finally{y(!1)}};if((0,v.useEffect)(()=>{t&&te()},[t]),!t)return(0,D.jsx)(Wt,{to:`/login`,replace:!0});let ne=()=>{n(),e(`/login`,{replace:!0})},re=async e=>{if(e.preventDefault(),!a.trim()){x(`Vui lòng nhập tên sản phẩm`);return}if(!s.trim()){x(`Vui lòng nhập liên kết sản phẩm`);return}if(!l.trim()){x(`Vui lòng nhập mã sản phẩm`);return}if(!p&&!d){x(`Vui lòng chọn ảnh sản phẩm`);return}try{g(!0),x(``),S(``),p?(await ir(p,{name:a.trim(),affiliateUrl:s.trim(),affiliateCode:l.trim(),image:d}),S(`Cập nhật sản phẩm thành công`)):(await nr({name:a.trim(),affiliateUrl:s.trim(),affiliateCode:l.trim(),image:d}),S(`Thêm sản phẩm thành công`)),C(),e.target.reset(),await te()}catch(e){x(e.message)}finally{g(!1)}},ie=e=>{m(e._id),o(e.name),c(e.affiliateUrl||``),u(e.affiliateCode||``),f(null),x(``),S(``)},ae=async e=>{if(window.confirm(`Bạn có chắc muốn xóa sản phẩm này?`))try{x(``),S(``),await ar(e),i(t=>t.filter(t=>t._id!==e)),p===e&&C(),S(`Xóa sản phẩm thành công`)}catch(e){x(e.message)}};return(0,D.jsx)(`div`,{className:`min-h-screen bg-slate-950 px-4 py-8 text-slate-100`,children:(0,D.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,D.jsxs)(`div`,{className:`mb-6 flex items-center justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-xl shadow-slate-950/50`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`p`,{className:`text-sm uppercase tracking-[0.2em] text-sky-400`,children:`Dashboard`}),(0,D.jsxs)(`h1`,{className:`mt-2 text-2xl font-bold`,children:[`Xin chào, `,t.username]})]}),(0,D.jsx)(`button`,{type:`button`,onClick:ne,className:`rounded-xl bg-rose-500 px-4 py-2 font-medium text-white transition hover:bg-rose-400`,children:`Đăng xuất`})]}),(0,D.jsxs)(`div`,{className:`grid gap-6 lg:grid-cols-[380px_1fr]`,children:[(0,D.jsxs)(`form`,{onSubmit:re,className:`rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-slate-950/50`,children:[(0,D.jsxs)(`div`,{className:`mb-5 flex items-center justify-between`,children:[(0,D.jsx)(`h2`,{className:`text-xl font-semibold`,children:p?`Cập nhật sản phẩm`:`Thêm sản phẩm`}),p&&(0,D.jsx)(`button`,{type:`button`,onClick:C,className:`text-sm text-slate-300 hover:text-white`,children:`Hủy`})]}),(0,D.jsxs)(`div`,{className:`space-y-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`label`,{className:`mb-2 block text-sm text-slate-300`,children:`Tên sản phẩm`}),(0,D.jsx)(`input`,{type:`text`,value:a,onChange:e=>o(e.target.value),placeholder:`Nhập tên sản phẩm`,className:`w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`label`,{className:`mb-2 block text-sm text-slate-300`,children:`Mã sản phẩm`}),(0,D.jsx)(`input`,{type:`text`,value:l,onChange:e=>u(e.target.value),placeholder:`Nhập mã sản phẩm`,className:`w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`label`,{className:`mb-2 block text-sm text-slate-300`,children:`Liên kết`}),(0,D.jsx)(`input`,{type:`text`,value:s,onChange:e=>c(e.target.value),placeholder:`Nhập link affiliate`,className:`w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`label`,{className:`mb-2 block text-sm text-slate-300`,children:p?`Ảnh mới (tuỳ chọn)`:`Hình ảnh`}),(0,D.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>f(e.target.files[0]),className:`w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-3 text-sm text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-sky-500 file:px-3 file:py-2 file:font-medium file:text-white`})]}),b&&(0,D.jsx)(`div`,{className:`rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300`,children:b}),ee&&(0,D.jsx)(`div`,{className:`rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300`,children:ee}),(0,D.jsx)(`button`,{type:`submit`,disabled:h,className:`w-full rounded-xl bg-sky-500 px-4 py-3 font-medium text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70`,children:h?`Đang xử lý...`:p?`Cập nhật sản phẩm`:`Thêm sản phẩm`})]})]}),(0,D.jsxs)(`div`,{className:`rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-slate-950/50`,children:[(0,D.jsxs)(`div`,{className:`mb-5 flex items-center justify-between`,children:[(0,D.jsx)(`h2`,{className:`text-xl font-semibold`,children:`Danh sách sản phẩm`}),(0,D.jsxs)(`span`,{className:`rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300`,children:[r.length,` mục`]})]}),_?(0,D.jsx)(`div`,{className:`rounded-2xl border border-slate-700 bg-slate-800 p-5 text-slate-300`,children:`Đang tải sản phẩm...`}):r.length===0?(0,D.jsx)(`div`,{className:`rounded-2xl border border-dashed border-slate-700 bg-slate-800 p-8 text-center text-slate-400`,children:`Chưa có sản phẩm nào.`}):(0,D.jsx)(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-3`,children:r.map(e=>(0,D.jsxs)(`div`,{className:`overflow-hidden rounded-2xl border border-slate-700 bg-slate-800`,children:[(0,D.jsx)(`img`,{src:e.image,alt:e.name,className:`h-48 w-full object-cover`}),(0,D.jsxs)(`div`,{className:`p-4`,children:[(0,D.jsx)(`h3`,{className:`line-clamp-2 text-lg font-semibold text-white`,children:e.name}),(0,D.jsxs)(`p`,{className:`mt-2 text-sm text-sky-300`,children:[`Mã: `,e.affiliateCode]}),(0,D.jsx)(`a`,{href:e.affiliateUrl,target:`_blank`,rel:`noreferrer`,className:`block mt-2 text-sm text-slate-300 underline break-all`,children:e.affiliateUrl}),(0,D.jsxs)(`div`,{className:`mt-4 flex gap-2`,children:[(0,D.jsx)(`button`,{type:`button`,onClick:()=>ie(e),className:`flex-1 rounded-xl bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-400`,children:`Sửa`}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>ae(e._id),className:`flex-1 rounded-xl bg-rose-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-rose-400`,children:`Xóa`})]})]})]},e._id))})]})]})]})})}var sr=globalThis,cr=sr.ShadowRoot&&(sr.ShadyCSS===void 0||sr.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,lr=Symbol(),ur=new WeakMap,dr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(cr&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ur.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ur.set(t,e))}return e}toString(){return this.cssText}},fr=e=>new dr(typeof e==`string`?e:e+``,void 0,lr),O=(e,...t)=>new dr(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,lr),pr=(e,t)=>{if(cr)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=sr.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},mr=cr?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return fr(t)})(e):e,{is:hr,defineProperty:gr,getOwnPropertyDescriptor:_r,getOwnPropertyNames:vr,getOwnPropertySymbols:yr,getPrototypeOf:br}=Object,xr=globalThis,Sr=xr.trustedTypes,Cr=Sr?Sr.emptyScript:``,wr=xr.reactiveElementPolyfillSupport,Tr=(e,t)=>e,Er={toAttribute(e,t){switch(t){case Boolean:e=e?Cr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Dr=(e,t)=>!hr(e,t),Or={attribute:!0,type:String,converter:Er,reflect:!1,useDefault:!1,hasChanged:Dr};Symbol.metadata??=Symbol(`metadata`),xr.litPropertyMetadata??=new WeakMap;var kr=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Or){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&gr(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=_r(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Or}static _$Ei(){if(this.hasOwnProperty(Tr(`elementProperties`)))return;let e=br(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tr(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tr(`properties`))){let e=this.properties,t=[...vr(e),...yr(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(mr(e))}else e!==void 0&&t.push(mr(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Er:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Er:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Dr)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};kr.elementStyles=[],kr.shadowRootOptions={mode:`open`},kr[Tr(`elementProperties`)]=new Map,kr[Tr(`finalized`)]=new Map,wr?.({ReactiveElement:kr}),(xr.reactiveElementVersions??=[]).push(`2.1.2`);var Ar=globalThis,jr=e=>e,Mr=Ar.trustedTypes,Nr=Mr?Mr.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Pr=`$lit$`,Fr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ir=`?`+Fr,Lr=`<${Ir}>`,Rr=document,zr=()=>Rr.createComment(``),Br=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Vr=Array.isArray,Hr=e=>Vr(e)||typeof e?.[Symbol.iterator]==`function`,Ur=`[ 	
\f\r]`,Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gr=/-->/g,Kr=/>/g,qr=RegExp(`>|${Ur}(?:([^\\s"'>=/]+)(${Ur}*=${Ur}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Jr=/'/g,Yr=/"/g,Xr=/^(?:script|style|textarea|title)$/i,k=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Zr=Symbol.for(`lit-noChange`),Qr=Symbol.for(`lit-nothing`),$r=new WeakMap,ei=Rr.createTreeWalker(Rr,129);function ti(e,t){if(!Vr(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Nr===void 0?t:Nr.createHTML(t)}var ni=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Wr;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Wr?c[1]===`!--`?o=Gr:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=qr):(Xr.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=qr):o=Kr:o===qr?c[0]===`>`?(o=i??Wr,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?qr:c[3]===`"`?Yr:Jr):o===Yr||o===Jr?o=qr:o===Gr||o===Kr?o=Wr:(o=qr,i=void 0);let d=o===qr&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Wr?n+Lr:l>=0?(r.push(s),n.slice(0,l)+Pr+n.slice(l)+Fr+d):n+Fr+(l===-2?t:d)}return[ti(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ri=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ni(t,n);if(this.el=e.createElement(l,r),ei.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ei.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Pr)){let t=u[o++],n=i.getAttribute(e).split(Fr),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ci:r[1]===`?`?li:r[1]===`@`?ui:si}),i.removeAttribute(e)}else e.startsWith(Fr)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Xr.test(i.tagName)){let e=i.textContent.split(Fr),t=e.length-1;if(t>0){i.textContent=Mr?Mr.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],zr()),ei.nextNode(),c.push({type:2,index:++a});i.append(e[t],zr())}}}else if(i.nodeType===8){if(i.data===Ir)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Fr,e+1))!==-1;)c.push({type:7,index:a}),e+=Fr.length-1}}a++}}static createElement(e,t){let n=Rr.createElement(`template`);return n.innerHTML=e,n}};function ii(e,t,n=e,r){if(t===Zr)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Br(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ii(e,i._$AS(e,t.values),i,r)),t}var ai=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Rr).importNode(t,!0);ei.currentNode=r;let i=ei.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new oi(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new di(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ei.nextNode(),a++)}return ei.currentNode=Rr,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},oi=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Qr,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ii(this,e,t),Br(e)?e===Qr||e==null||e===``?(this._$AH!==Qr&&this._$AR(),this._$AH=Qr):e!==this._$AH&&e!==Zr&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Hr(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Qr&&Br(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rr.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ri.createElement(ti(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ai(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=$r.get(e.strings);return t===void 0&&$r.set(e.strings,t=new ri(e)),t}k(t){Vr(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(zr()),this.O(zr()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=jr(e).nextSibling;jr(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},si=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Qr,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Qr}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ii(this,e,t,0),a=!Br(e)||e!==this._$AH&&e!==Zr,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ii(this,r[n+o],t,o),s===Zr&&(s=this._$AH[o]),a||=!Br(s)||s!==this._$AH[o],s===Qr?e=Qr:e!==Qr&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Qr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ci=class extends si{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qr?void 0:e}},li=class extends si{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Qr)}},ui=class extends si{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ii(this,e,t,0)??Qr)===Zr)return;let n=this._$AH,r=e===Qr&&n!==Qr||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Qr&&(n===Qr||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},di=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ii(this,e)}},fi={M:Pr,P:Fr,A:Ir,C:1,L:ni,R:ai,D:Hr,V:ii,I:oi,H:si,N:li,U:ui,B:ci,F:di},pi=Ar.litHtmlPolyfillSupport;pi?.(ri,oi),(Ar.litHtmlVersions??=[]).push(`3.3.3`);var mi=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new oi(t.insertBefore(zr(),e),e,void 0,n??{})}return i._$AI(e),i},hi=globalThis,gi=class extends kr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Zr}};gi._$litElement$=!0,gi.finalized=!0,hi.litElementHydrateSupport?.({LitElement:gi});var _i=hi.litElementPolyfillSupport;_i?.({LitElement:gi}),(hi.litElementVersions??=[]).push(`4.2.2`);var vi=O`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,A=O`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,yi=Object.defineProperty,bi=Object.defineProperties,xi=Object.getOwnPropertyDescriptor,Si=Object.getOwnPropertyDescriptors,Ci=Object.getOwnPropertySymbols,wi=Object.prototype.hasOwnProperty,Ti=Object.prototype.propertyIsEnumerable,Ei=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),Di=e=>{throw TypeError(e)},Oi=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ki=(e,t)=>{for(var n in t||={})wi.call(t,n)&&Oi(e,n,t[n]);if(Ci)for(var n of Ci(t))Ti.call(t,n)&&Oi(e,n,t[n]);return e},Ai=(e,t)=>bi(e,Si(t)),j=(e,t,n,r)=>{for(var i=r>1?void 0:r?xi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&yi(t,n,i),i},ji=(e,t,n)=>t.has(e)||Di(`Cannot `+n),Mi=(e,t,n)=>(ji(e,t,`read from private field`),n?n.call(e):t.get(e)),Ni=(e,t,n)=>t.has(e)?Di(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Pi=(e,t,n,r)=>(ji(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Fi=function(e,t){this[0]=e,this[1]=t},Ii=e=>{var t=e[Ei(`asyncIterator`)],n=!1,r,i={};return t==null?(t=e[Ei(`iterator`)](),r=e=>i[e]=n=>t[e](n)):(t=t.call(e),r=e=>i[e]=r=>{if(n){if(n=!1,e===`throw`)throw r;return r}return n=!0,{done:!1,value:new Fi(new Promise(n=>{var i=t[e](r);i instanceof Object||Di(`Object expected`),n(i)}),1)}}),i[Ei(`iterator`)]=()=>i,r(`next`),`throw`in t?r(`throw`):i.throw=e=>{throw e},`return`in t&&r(`return`),i},Li={attribute:!0,type:String,converter:Er,reflect:!1,hasChanged:Dr},Ri=(e=Li,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function M(e){return(t,n)=>typeof n==`object`?Ri(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function N(e){return M({...e,state:!0,attribute:!1})}function zi(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}var P=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function F(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return P(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return P(n,r,{get(){return a(this)}})}}function Bi(e){return(t,n)=>P(t,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Vi,I=class extends gi{constructor(){super(),Ni(this,Vi,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,ki({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){Mi(this,Vi)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Pi(this,Vi,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Vi=new WeakMap,I.version=`2.20.1`,I.dependencies={},j([M()],I.prototype,`dir`,2),j([M()],I.prototype,`lang`,2);var Hi=class extends I{render(){return k` <slot></slot> `}};Hi.styles=[A,vi];var Ui=new Set([`children`,`localName`,`ref`,`style`,`className`]),Wi=new WeakMap,Gi=(e,t,n,r,i)=>{let a=i?.[t];a===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=Wi.get(e);r===void 0&&Wi.set(e,r=new Map);let i=r.get(t);n===void 0?i!==void 0&&(r.delete(t),e.removeEventListener(t,i)):i===void 0?(r.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n})(e,a,n)},L=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{let a=new Set(Object.keys(r??{})),o=e.forwardRef(((i,o)=>{let s=e.useRef(new Map),c=e.useRef(null),l={},u={};for(let[e,t]of Object.entries(i))Ui.has(e)?l[e===`className`?`class`:e]=t:a.has(e)||e in n.prototype?u[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(c.current===null)return;let e=new Map;for(let t in u)Gi(c.current,t,i[t],s.current.get(t),r),s.current.delete(t),e.set(t,i[t]);for(let[e,t]of s.current)Gi(c.current,e,void 0,t,r);s.current=e})),e.useLayoutEffect((()=>{c.current?.removeAttribute(`defer-hydration`)}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e.useCallback((e=>{c.current=e,typeof o==`function`?o(e):o!==null&&(o.current=e)}),[o])})}));return o.displayName=i??n.name,o};Hi.define(`sl-visually-hidden`),L({tagName:`sl-visually-hidden`,elementClass:Hi,react:v,events:{},displayName:`SlVisuallyHidden`});var Ki=O`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,qi=O`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Ji=``;function Yi(e){Ji=e}function Xi(e=``){if(!Ji){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-shoelace`));if(t)Yi(t.getAttribute(`data-shoelace`));else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),Yi(n.split(`/`).slice(0,-1).join(`/`))}}return Ji.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var Zi={name:`default`,resolver:e=>Xi(`assets/icons/${e}.svg`)},Qi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},$i=[Zi,{name:`system`,resolver:e=>e in Qi?`data:image/svg+xml,${encodeURIComponent(Qi[e])}`:``}],ea=[];function ta(e){ea.push(e)}function na(e){ea=ea.filter(t=>t!==e)}function ra(e){return $i.find(t=>t.name===e)}var ia=O`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function R(e,t){let n=ki({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var{I:aa}=fi,oa=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,sa=e=>e.strings===void 0,ca={},la=(e,t=ca)=>e._$AH=t,ua=Symbol(),da=Symbol(),fa,pa=new Map,z=class extends I{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=k`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?ua:da}catch{return da}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if((t?.tagName)?.toLowerCase()!==`svg`)return ua;fa||=new DOMParser;let r=fa.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):ua}catch{return ua}}connectedCallback(){super.connectedCallback(),ta(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),na(this)}getIconSource(){let e=ra(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){var e;let{url:t,fromLibrary:n}=this.getIconSource(),r=n?ra(this.library):void 0;if(!t){this.svg=null;return}let i=pa.get(t);if(i||(i=this.resolveIcon(t,r),pa.set(t,i)),!this.initialRender)return;let a=await i;if(a===da&&pa.delete(t),t===this.getIconSource().url){if(oa(a)){if(this.svg=a,r){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof r.mutator==`function`&&e&&r.mutator(e)}return}switch(a){case da:case ua:this.svg=null,this.emit(`sl-error`);break;default:this.svg=a.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit(`sl-load`)}}}render(){return this.svg}};z.styles=[A,ia],j([N()],z.prototype,`svg`,2),j([M({reflect:!0})],z.prototype,`name`,2),j([M()],z.prototype,`src`,2),j([M()],z.prototype,`label`,2),j([M({reflect:!0})],z.prototype,`library`,2),j([R(`label`)],z.prototype,`handleLabelChange`,1),j([R([`name`,`src`,`library`])],z.prototype,`setIcon`,1);var ma={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ha=e=>(...t)=>({_$litDirective$:e,values:t}),ga=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},B=ha(class extends ga{constructor(e){if(super(e),e.type!==ma.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Zr}}),_a=Symbol.for(``),va=e=>{if(e?.r===_a)return e?._$litStatic$},ya=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:_a}),ba=new Map,xa=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=va(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=ba.get(e))===void 0&&(o.raw=o,ba.set(e,t=o)),n=s}return e(t,...n)})(k),V=e=>e??Qr,Sa=class extends I{constructor(){super(...arguments),this.hasFocus=!1,this.label=``,this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?ya`a`:ya`button`;return xa`
      <${t}
        part="base"
        class=${B({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:`button`)}
        href=${V(e?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e&&this.target?`noreferrer noopener`:void 0)}
        role=${V(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${V(this.name)}
          library=${V(this.library)}
          src=${V(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Sa.styles=[A,qi],Sa.dependencies={"sl-icon":z},j([F(`.icon-button`)],Sa.prototype,`button`,2),j([N()],Sa.prototype,`hasFocus`,2),j([M()],Sa.prototype,`name`,2),j([M()],Sa.prototype,`library`,2),j([M()],Sa.prototype,`src`,2),j([M()],Sa.prototype,`href`,2),j([M()],Sa.prototype,`target`,2),j([M()],Sa.prototype,`download`,2),j([M()],Sa.prototype,`label`,2),j([M({type:Boolean,reflect:!0})],Sa.prototype,`disabled`,2);var Ca=new Set,wa=new Map,Ta,Ea=`ltr`,Da=`en`,Oa=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Oa){let e=new MutationObserver(Aa);Ea=document.documentElement.dir||`ltr`,Da=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function ka(...e){e.map(e=>{let t=e.$code.toLowerCase();wa.has(t)?wa.set(t,Object.assign(Object.assign({},wa.get(t)),e)):wa.set(t,e),Ta||=e}),Aa()}function Aa(){Oa&&(Ea=document.documentElement.dir||`ltr`,Da=document.documentElement.lang||navigator.language),[...Ca.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var ja=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ca.add(this.host)}hostDisconnected(){Ca.delete(this.host)}dir(){return`${this.host.dir||Ea}`.toLowerCase()}lang(){let e=`${this.host.lang||Da}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ta?Ta.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=wa.get(`${n}-${r}`),a=wa.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ta&&Ta[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ta&&Ta[e])i=Ta[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ma={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`};ka(Ma);var Na=Ma,H=class extends ja{};ka(Na);var Pa=0,Fa=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.attrId=++Pa,this.componentId=`sl-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`sl-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.tabIndex=this.disabled&&!this.active?-1:0}render(){return this.id=this.id.length>0?this.id:this.componentId,k`
      <div
        part="base"
        class=${B({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </div>
    `}};Fa.styles=[A,Ki],Fa.dependencies={"sl-icon-button":Sa},j([F(`.tab`)],Fa.prototype,`tab`,2),j([M({reflect:!0})],Fa.prototype,`panel`,2),j([M({type:Boolean,reflect:!0})],Fa.prototype,`active`,2),j([M({type:Boolean,reflect:!0})],Fa.prototype,`closable`,2),j([M({type:Boolean,reflect:!0})],Fa.prototype,`disabled`,2),j([M({type:Number,reflect:!0})],Fa.prototype,`tabIndex`,2),j([R(`active`)],Fa.prototype,`handleActiveChange`,1),j([R(`disabled`)],Fa.prototype,`handleDisabledChange`,1),Fa.define(`sl-tab`),L({tagName:`sl-tab`,elementClass:Fa,react:v,events:{onSlClose:`sl-close`},displayName:`SlTab`});var Ia=O`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,La=O`
  :host {
    display: contents;
  }
`,Ra=class extends I{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit(`sl-resize`,{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector(`slot`);if(e!==null){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return k` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ra.styles=[A,La],j([M({type:Boolean,reflect:!0})],Ra.prototype,`disabled`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],Ra.prototype,`handleDisabledChange`,1);function za(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ba=new Set;function Va(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ha(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function Ua(e){if(Ba.add(e),!document.documentElement.classList.contains(`sl-scroll-lock`)){let e=Va()+Ha(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--sl-scroll-lock-gutter`,t),document.documentElement.classList.add(`sl-scroll-lock`),document.documentElement.style.setProperty(`--sl-scroll-lock-size`,`${e}px`)}}function Wa(e){Ba.delete(e),Ba.size===0&&(document.documentElement.classList.remove(`sl-scroll-lock`),document.documentElement.style.removeProperty(`--sl-scroll-lock-size`))}function Ga(e,t,n=`vertical`,r=`smooth`){let i=za(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Ka=class extends I{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new H(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement=`top`,this.activation=`auto`,this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let e=Promise.all([customElements.whenDefined(`sl-tab`),customElements.whenDefined(`sl-tab-panel`)]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest(`sl-tab-group`)!==this)return!1;let t=e.tagName.toLowerCase();return t===`sl-tab`||t===`sl-tab-panel`});if(t.length!==0){if(t.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`sl-tab`).map(e=>e.target).find(e=>e.active);e&&this.setActiveTab(e)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:[`active`,`disabled`,`name`,`panel`],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()===`sl-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`sl-tab`);t?.closest(`sl-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`sl-tab`);if(t?.closest(`sl-tab-group`)===this&&([`Enter`,` `].includes(e.key)&&t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault()),[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`sl-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`,`bottom`].includes(this.placement)&&Ga(r,this.nav,`horizontal`),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t=ki({emitEvents:!0,scrollBehavior:`auto`},t),e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),this.syncIndicator(),[`top`,`bottom`].includes(this.placement)&&Ga(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.emit(`sl-tab-hide`,{detail:{name:n.panel}}),this.emit(`sl-tab-show`,{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}repositionIndicator(){let e=this.getActiveTab();if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=this.localize.dir()===`rtl`,i=this.getAllTabs(),a=i.slice(0,i.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case`top`:case`bottom`:this.indicator.style.width=`${t}px`,this.indicator.style.height=`auto`,this.indicator.style.translate=r?`${-1*a.left}px`:`${a.left}px`;break;case`start`:case`end`:this.indicator.style.width=`auto`,this.indicator.style.height=`${n}px`,this.indicator.style.translate=`0 ${a.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()===`rtl`?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.hasScrollControls=!this.noScrollControls&&[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display=`block`,this.repositionIndicator()):this.indicator.style.display=`none`}show(e){let t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:`smooth`})}render(){let e=this.localize.dir()===`rtl`;return k`
      <div
        part="base"
        class=${B({"tab-group":!0,"tab-group--top":this.placement===`top`,"tab-group--bottom":this.placement===`bottom`,"tab-group--start":this.placement===`start`,"tab-group--end":this.placement===`end`,"tab-group--rtl":this.localize.dir()===`rtl`,"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?k`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${B({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?`chevron-right`:`chevron-left`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToStart`)}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:``}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?k`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${B({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?`chevron-left`:`chevron-right`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToEnd`)}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:``}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Ka.styles=[A,Ia],Ka.dependencies={"sl-icon-button":Sa,"sl-resize-observer":Ra},j([F(`.tab-group`)],Ka.prototype,`tabGroup`,2),j([F(`.tab-group__body`)],Ka.prototype,`body`,2),j([F(`.tab-group__nav`)],Ka.prototype,`nav`,2),j([F(`.tab-group__indicator`)],Ka.prototype,`indicator`,2),j([N()],Ka.prototype,`hasScrollControls`,2),j([N()],Ka.prototype,`shouldHideScrollStartButton`,2),j([N()],Ka.prototype,`shouldHideScrollEndButton`,2),j([M()],Ka.prototype,`placement`,2),j([M()],Ka.prototype,`activation`,2),j([M({attribute:`no-scroll-controls`,type:Boolean})],Ka.prototype,`noScrollControls`,2),j([M({attribute:`fixed-scroll-controls`,type:Boolean})],Ka.prototype,`fixedScrollControls`,2),j([zi({passive:!0})],Ka.prototype,`updateScrollButtons`,1),j([R(`noScrollControls`,{waitUntilFirstUpdate:!0})],Ka.prototype,`updateScrollControls`,1),j([R(`placement`,{waitUntilFirstUpdate:!0})],Ka.prototype,`syncIndicator`,1),Ka.define(`sl-tab-group`),L({tagName:`sl-tab-group`,elementClass:Ka,react:v,events:{onSlTabShow:`sl-tab-show`,onSlTabHide:`sl-tab-hide`},displayName:`SlTabGroup`});var qa=O`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Ja=0,Ya=class extends I{constructor(){super(...arguments),this.attrId=++Ja,this.componentId=`sl-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return k`
      <slot
        part="base"
        class=${B({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ya.styles=[A,qa],j([M({reflect:!0})],Ya.prototype,`name`,2),j([M({type:Boolean,reflect:!0})],Ya.prototype,`active`,2),j([R(`active`)],Ya.prototype,`handleActiveChange`,1),Ya.define(`sl-tab-panel`),L({tagName:`sl-tab-panel`,elementClass:Ya,react:v,events:{},displayName:`SlTabPanel`});var Xa=O`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Za=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.variant=`neutral`,this.size=`medium`,this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit(`sl-remove`)}render(){return k`
      <span
        part="base"
        class=${B({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?k`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </span>
    `}};Za.styles=[A,Xa],Za.dependencies={"sl-icon-button":Sa},j([M({reflect:!0})],Za.prototype,`variant`,2),j([M({reflect:!0})],Za.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],Za.prototype,`pill`,2),j([M({type:Boolean})],Za.prototype,`removable`,2),Za.define(`sl-tag`),L({tagName:`sl-tag`,elementClass:Za,react:v,events:{onSlRemove:`sl-remove`},displayName:`SlTag`});var Qa=O`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,$a=(e=`value`)=>(t,n)=>{let r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,a,o){let s=r.getPropertyOptions(e);if(t===(typeof s.attribute==`string`?s.attribute:e)){let t=s.converter||Er,r=(typeof t==`function`?t:t?.fromAttribute??Er.fromAttribute)(o,s.type);this[e]!==r&&(this[n]=r)}i.call(this,t,a,o)}},eo=O`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,to=new WeakMap,no=new WeakMap,ro=new WeakMap,io=new WeakSet,ao=new WeakMap,oo=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`sl-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))},this.handleFormSubmit=e=>{var t;let n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=to.get(this.form))==null||t.forEach(e=>{this.setUserInteracted(e,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ao.set(this.host,[])},this.handleInteraction=e=>{let t=ao.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ki({form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`sl-input`]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),ao.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ao.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,to.has(this.form)?to.get(this.form).add(this.host):to.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),no.has(this.form)||(no.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ro.has(this.form)||(ro.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=to.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),no.has(this.form)&&(this.form.reportValidity=no.get(this.form),no.delete(this.form)),ro.has(this.form)&&(this.form.checkValidity=ro.get(this.form),ro.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?io.add(e):io.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let n=document.createElement(`button`);n.type=e,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.clipPath=`inset(50%)`,n.style.overflow=`hidden`,n.style.whiteSpace=`nowrap`,t&&(n.name=t.name,n.value=t.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!io.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`sl-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},so=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),co=Object.freeze(Ai(ki({},so),{valid:!1,valueMissing:!0})),lo=Object.freeze(Ai(ki({},so),{valid:!1,customError:!0})),U=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`sl-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}};function uo(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var fo=ha(class extends ga{constructor(e){if(super(e),e.type!==ma.PROPERTY&&e.type!==ma.ATTRIBUTE&&e.type!==ma.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sa(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Zr||t===Qr)return t;let n=e.element,r=e.name;if(e.type===ma.PROPERTY){if(t===n[r])return Zr}else if(e.type===ma.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Zr}else if(e.type===ma.ATTRIBUTE&&n.getAttribute(r)===t+``)return Zr;return la(e),t}}),W=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new U(this,`help-text`,`label`),this.hasFocus=!1,this.title=``,this.name=``,this.value=``,this.size=`medium`,this.filled=!1,this.label=``,this.helpText=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.defaultValue=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return k`
      <div
        part="form-control"
        class=${B({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${B({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${V(this.name)}
              .value=${fo(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${V(this.placeholder)}
              rows=${V(this.rows)}
              minlength=${V(this.minlength)}
              maxlength=${V(this.maxlength)}
              autocapitalize=${V(this.autocapitalize)}
              autocorrect=${V(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${V(this.spellcheck)}
              enterkeyhint=${V(this.enterkeyhint)}
              inputmode=${V(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};W.styles=[A,eo,Qa],j([F(`.textarea__control`)],W.prototype,`input`,2),j([F(`.textarea__size-adjuster`)],W.prototype,`sizeAdjuster`,2),j([N()],W.prototype,`hasFocus`,2),j([M()],W.prototype,`title`,2),j([M()],W.prototype,`name`,2),j([M()],W.prototype,`value`,2),j([M({reflect:!0})],W.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],W.prototype,`filled`,2),j([M()],W.prototype,`label`,2),j([M({attribute:`help-text`})],W.prototype,`helpText`,2),j([M()],W.prototype,`placeholder`,2),j([M({type:Number})],W.prototype,`rows`,2),j([M()],W.prototype,`resize`,2),j([M({type:Boolean,reflect:!0})],W.prototype,`disabled`,2),j([M({type:Boolean,reflect:!0})],W.prototype,`readonly`,2),j([M({reflect:!0})],W.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],W.prototype,`required`,2),j([M({type:Number})],W.prototype,`minlength`,2),j([M({type:Number})],W.prototype,`maxlength`,2),j([M()],W.prototype,`autocapitalize`,2),j([M()],W.prototype,`autocorrect`,2),j([M()],W.prototype,`autocomplete`,2),j([M({type:Boolean})],W.prototype,`autofocus`,2),j([M()],W.prototype,`enterkeyhint`,2),j([M({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],W.prototype,`spellcheck`,2),j([M()],W.prototype,`inputmode`,2),j([$a()],W.prototype,`defaultValue`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],W.prototype,`handleDisabledChange`,1),j([R(`rows`,{waitUntilFirstUpdate:!0})],W.prototype,`handleRowsChange`,1),j([R(`value`,{waitUntilFirstUpdate:!0})],W.prototype,`handleValueChange`,1),W.define(`sl-textarea`),L({tagName:`sl-textarea`,elementClass:W,react:v,events:{onSlBlur:`sl-blur`,onSlChange:`sl-change`,onSlFocus:`sl-focus`,onSlInput:`sl-input`,onSlInvalid:`sl-invalid`},displayName:`SlTextarea`});var po=O`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,mo=O`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,ho=Math.min,go=Math.max,_o=Math.round,vo=Math.floor,yo=e=>({x:e,y:e}),bo={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function xo(e,t,n){return go(e,ho(t,n))}function So(e,t){return typeof e==`function`?e(t):e}function Co(e){return e.split(`-`)[0]}function wo(e){return e.split(`-`)[1]}function To(e){return e===`x`?`y`:`x`}function Eo(e){return e===`y`?`height`:`width`}function Do(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Oo(e){return To(Do(e))}function ko(e,t,n){n===void 0&&(n=!1);let r=wo(e),i=Oo(e),a=Eo(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Ro(o)),[o,Ro(o)]}function Ao(e){let t=Ro(e);return[jo(e),t,jo(t)]}function jo(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Mo=[`left`,`right`],No=[`right`,`left`],Po=[`top`,`bottom`],Fo=[`bottom`,`top`];function Io(e,t,n){switch(e){case`top`:case`bottom`:return n?t?No:Mo:t?Mo:No;case`left`:case`right`:return t?Po:Fo;default:return[]}}function Lo(e,t,n,r){let i=wo(e),a=Io(Co(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(jo)))),a}function Ro(e){let t=Co(e);return bo[t]+e.slice(t.length)}function zo(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Bo(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:zo(e)}function Vo(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ho(e,t,n){let{reference:r,floating:i}=e,a=Do(t),o=Oo(t),s=Eo(o),c=Co(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=wo(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Uo(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=So(t,e),p=Bo(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Vo(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Vo(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Wo=50,Go=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Uo},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ho(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Wo&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Ho(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ko=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=So(e,t)||{};if(l==null)return{};let d=Bo(u),f={x:n,y:r},p=Oo(i),m=Eo(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],ee=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),S=ee?ee[y]:0;(!S||!await(o.isElement==null?void 0:o.isElement(ee)))&&(S=s.floating[y]||a.floating[m]);let C=b/2-x/2,te=S/2-h[m]/2-1,ne=ho(d[_],te),re=ho(d[v],te),ie=S-h[m]-re,ae=S/2-h[m]/2+C,w=xo(ne,ae,ie),oe=!c.arrow&&wo(i)!=null&&ae!==w&&a.reference[m]/2-(ae<ne?ne:re)-h[m]/2<0,se=oe?ae<ne?ae-ne:ae-ie:0;return{[p]:f[p]+se,data:{[p]:w,centerOffset:ae-w-se,...oe&&{alignmentOffset:se}},reset:oe}}}),qo=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=So(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Co(r),_=Do(o),v=Co(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Ro(o)]:Ao(o)),x=p!==`none`;!d&&x&&b.push(...Lo(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),C=[],te=i.flip?.overflows||[];if(l&&C.push(S[g]),u){let e=ko(r,a,y);C.push(S[e[0]],S[e[1]])}if(te=[...te,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===Do(t)||te.every(e=>Do(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:te},reset:{placement:t}};let n=te.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=te.filter(e=>{if(x){let t=Do(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},Jo=new Set([`left`,`top`]);async function Yo(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Co(n),s=wo(n),c=Do(n)===`y`,l=Jo.has(o)?-1:1,u=a&&c?-1:1,d=So(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Xo=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Yo(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Zo=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=So(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Do(i),p=To(f),m=u[p],h=u[f],g=(e,t)=>xo(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Qo=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=So(e,t),c=await i.detectOverflow(t,s),l=Co(n),u=wo(n),d=Do(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=ho(p-c[m],g),y=ho(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,S=y;b!=null&&b.enabled.x&&(S=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?S=f-2*go(c.left,c.right):ee=p-2*go(c.top,c.bottom)),await o({...t,availableWidth:S,availableHeight:ee});let C=await i.getDimensions(a.floating);return f!==C.width||p!==C.height?{reset:{rects:!0}}:{}}}};function $o(){return typeof window<`u`}function es(e){return rs(e)?(e.nodeName||``).toLowerCase():`#document`}function ts(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ns(e){return((rs(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function rs(e){return $o()?e instanceof Node||e instanceof ts(e).Node:!1}function is(e){return $o()?e instanceof Element||e instanceof ts(e).Element:!1}function as(e){return $o()?e instanceof HTMLElement||e instanceof ts(e).HTMLElement:!1}function os(e){return!$o()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof ts(e).ShadowRoot}function ss(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=vs(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function cs(e){return/^(table|td|th)$/.test(es(e))}function ls(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var us=/transform|translate|scale|rotate|perspective|filter/,ds=/paint|layout|strict|content/,fs=e=>!!e&&e!==`none`,ps;function ms(e){let t=is(e)?vs(e):e;return fs(t.transform)||fs(t.translate)||fs(t.scale)||fs(t.rotate)||fs(t.perspective)||!gs()&&(fs(t.backdropFilter)||fs(t.filter))||us.test(t.willChange||``)||ds.test(t.contain||``)}function hs(e){let t=bs(e);for(;as(t)&&!_s(t);){if(ms(t))return t;if(ls(t))return null;t=bs(t)}return null}function gs(){return ps??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),ps}function _s(e){return/^(html|body|#document)$/.test(es(e))}function vs(e){return ts(e).getComputedStyle(e)}function ys(e){return is(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function bs(e){if(es(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||os(e)&&e.host||ns(e);return os(t)?t.host:t}function xs(e){let t=bs(e);return _s(t)?(e.ownerDocument||e).body:as(t)&&ss(t)?t:xs(t)}function Ss(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=xs(e),i=r===e.ownerDocument?.body,a=ts(r);if(i){let e=Cs(a);return t.concat(a,a.visualViewport||[],ss(r)?r:[],e&&n?Ss(e):[])}return t.concat(r,Ss(r,[],n))}function Cs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ws(e){let t=vs(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=as(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=_o(n)!==a||_o(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Ts(e){return is(e)?e:e.contextElement}function Es(e){let t=Ts(e);if(!as(t))return yo(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ws(t),o=(a?_o(n.width):n.width)/r,s=(a?_o(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Ds=yo(0);function Os(e){let t=ts(e);return!gs()||!t.visualViewport?Ds:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ks(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===ts(e)}function As(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Ts(e),o=yo(1);t&&(r?is(r)&&(o=Es(r)):o=Es(e));let s=ks(a,n,r)?Os(a):yo(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=ts(a),t=is(r)?ts(r):r,n=e,i=Cs(n);for(;i&&t!==n;){let e=Es(i),t=i.getBoundingClientRect(),r=vs(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=ts(i),i=Cs(n)}}return Vo({width:u,height:d,x:c,y:l})}function js(e,t){let n=ys(e).scrollLeft;return t?t.left+n:As(ns(e)).left+n}function Ms(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-js(e,n),y:n.top+t.scrollTop}}function Ns(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=ns(r),s=t?ls(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=yo(1),u=yo(0),d=as(r);if((d||!a)&&((es(r)!==`body`||ss(o))&&(c=ys(r)),d)){let e=As(r);l=Es(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Ms(o,c):yo(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Ps(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Fs(e){let t=ys(e),n=e.ownerDocument.body,r=go(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=go(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+js(e),o=-t.scrollTop;return vs(n).direction===`rtl`&&(a+=go(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var Is=25;function Ls(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=ts(e),a=ns(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!gs()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(js(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Is&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Rs(e,t){let n=As(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Es(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function zs(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Ls(e,n,t);else if(t===`document`)r=Fs(ns(e));else if(is(t))r=Rs(t,n);else{let n=Os(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Vo(r)}function Bs(e,t){let n=t.get(e);if(n)return n;let r=Ss(e,[],!1).filter(e=>is(e)&&es(e)!==`body`),i=null,a=vs(e).position===`fixed`,o=a?bs(e):e;for(;is(o)&&!_s(o);){let e=vs(o),t=ms(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=bs(o)}return t.set(e,r),r}function Vs(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?ls(t)?[]:Bs(t,this._c):[].concat(n),r],o=zs(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=zs(t,a[e],i);s=go(n.top,s),c=ho(n.right,c),l=ho(n.bottom,l),u=go(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Hs(e){let{width:t,height:n}=ws(e);return{width:t,height:n}}function Us(e,t,n){let r=as(t),i=ns(t),a=n===`fixed`,o=As(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=yo(0);if((r||!a)&&((es(t)!==`body`||ss(i))&&(s=ys(t)),r)){let e=As(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=js(i));let l=i&&!r&&!a?Ms(i,s):yo(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Ws(e){return vs(e).position===`static`}function Gs(e,t){if(!as(e)||vs(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return ns(e)===n&&(n=n.ownerDocument.body),n}function Ks(e,t){let n=ts(e);if(ls(e))return n;if(!as(e)){let t=bs(e);for(;t&&!_s(t);){if(is(t)&&!Ws(t))return t;t=bs(t)}return n}let r=Gs(e,t);for(;r&&cs(r)&&Ws(r);)r=Gs(r,t);return r&&_s(r)&&Ws(r)&&!ms(r)?n:r||hs(e)||n}var qs=async function(e){let t=this.getOffsetParent||Ks,n=this.getDimensions,r=await n(e.floating);return{reference:Us(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Js(e){return vs(e).direction===`rtl`}var Ys={convertOffsetParentRelativeRectToViewportRelativeRect:Ns,getDocumentElement:ns,getClippingRect:Vs,getOffsetParent:Ks,getElementRects:qs,getClientRects:Ps,getDimensions:Hs,getScale:Es,isElement:is,isRTL:Js};function Xs(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Zs(e,t,n){let r=null,i,a=ns(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=vo(d),h=vo(a.clientWidth-(u+f)),g=vo(a.clientHeight-(d+p)),_=vo(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:go(0,ho(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Xs(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=ts(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Qs(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Ts(e),u=i||a?[...l?Ss(l):[],...t?Ss(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Zs(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?As(e):null;c&&g();function g(){let t=As(e);h&&!Xs(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var $s=Xo,ec=Zo,tc=qo,nc=Qo,rc=Ko,ic=(e,t,n)=>{let r=new Map,i=n??{},a={...Ys,...i.platform,_c:r};return Go(e,t,{...i,platform:a})};function ac(e){return sc(e)}function oc(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function sc(e){for(let t=e;t;t=oc(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=oc(e);t;t=oc(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||ms(e)||t.tagName===`BODY`))return t}return null}function cc(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var G=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.active=!1,this.placement=`top`,this.strategy=`absolute`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||cc(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Qs(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[$s({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(nc({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``),this.flip&&e.push(tc({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ec({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(nc({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(rc({element:this.arrowEl,padding:this.arrowPadding}));let t=this.strategy===`absolute`?e=>Ys.getOffsetParent(e,ac):Ys.getOffsetParent;ic(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ai(ki({},Ys),{getOffsetParent:t})}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`sl-reposition`)}render(){return k`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${B({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${B({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy===`fixed`,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?k`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};G.styles=[A,mo],j([F(`.popup`)],G.prototype,`popup`,2),j([F(`.popup__arrow`)],G.prototype,`arrowEl`,2),j([M()],G.prototype,`anchor`,2),j([M({type:Boolean,reflect:!0})],G.prototype,`active`,2),j([M({reflect:!0})],G.prototype,`placement`,2),j([M({reflect:!0})],G.prototype,`strategy`,2),j([M({type:Number})],G.prototype,`distance`,2),j([M({type:Number})],G.prototype,`skidding`,2),j([M({type:Boolean})],G.prototype,`arrow`,2),j([M({attribute:`arrow-placement`})],G.prototype,`arrowPlacement`,2),j([M({attribute:`arrow-padding`,type:Number})],G.prototype,`arrowPadding`,2),j([M({type:Boolean})],G.prototype,`flip`,2),j([M({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],G.prototype,`flipFallbackPlacements`,2),j([M({attribute:`flip-fallback-strategy`})],G.prototype,`flipFallbackStrategy`,2),j([M({type:Object})],G.prototype,`flipBoundary`,2),j([M({attribute:`flip-padding`,type:Number})],G.prototype,`flipPadding`,2),j([M({type:Boolean})],G.prototype,`shift`,2),j([M({type:Object})],G.prototype,`shiftBoundary`,2),j([M({attribute:`shift-padding`,type:Number})],G.prototype,`shiftPadding`,2),j([M({attribute:`auto-size`})],G.prototype,`autoSize`,2),j([M()],G.prototype,`sync`,2),j([M({type:Object})],G.prototype,`autoSizeBoundary`,2),j([M({attribute:`auto-size-padding`,type:Number})],G.prototype,`autoSizePadding`,2),j([M({attribute:`hover-bridge`,type:Boolean})],G.prototype,`hoverBridge`,2);var lc=new Map,uc=new WeakMap;function dc(e){return e??{keyframes:[],options:{duration:0}}}function fc(e,t){return t.toLowerCase()===`rtl`?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function K(e,t){lc.set(e,dc(t))}function pc(e,t,n){let r=uc.get(e);if(r?.[t])return fc(r[t],n.dir);let i=lc.get(t);return i?fc(i,n.dir):{keyframes:[],options:{duration:0}}}function mc(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function hc(e,t,n){return new Promise(r=>{if(n?.duration===1/0)throw Error(`Promise-based animations must be finite.`);let i=e.animate(t,Ai(ki({},n),{duration:_c()?0:n.duration}));i.addEventListener(`cancel`,r,{once:!0}),i.addEventListener(`finish`,r,{once:!0})})}function gc(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e):e.indexOf(`s`)>-1?parseFloat(e)*1e3:parseFloat(e)}function _c(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function vc(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function yc(e,t){return e.map(e=>Ai(ki({},e),{height:e.height===`auto`?`${t}px`:e.height}))}var bc=class extends I{constructor(){super(),this.localize=new H(this),this.content=``,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.hoist=!1,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=gc(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=gc(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit(`sl-show`),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await vc(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:n}=pc(this,`tooltip.show`,{dir:this.localize.dir()});await hc(this.popup.popup,t,n),this.popup.reposition(),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await vc(this.body);let{keyframes:e,options:n}=pc(this,`tooltip.hide`,{dir:this.localize.dir()});await hc(this.popup.popup,e,n),this.popup.active=!1,this.body.hidden=!0,this.emit(`sl-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,mc(this,`sl-after-hide`)}render(){return k`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${B({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        arrow
        hover-bridge
      >
        ${``}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${``}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?`polite`:`off`}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};bc.styles=[A,po],bc.dependencies={"sl-popup":G},j([F(`slot:not([name])`)],bc.prototype,`defaultSlot`,2),j([F(`.tooltip__body`)],bc.prototype,`body`,2),j([F(`sl-popup`)],bc.prototype,`popup`,2),j([M()],bc.prototype,`content`,2),j([M()],bc.prototype,`placement`,2),j([M({type:Boolean,reflect:!0})],bc.prototype,`disabled`,2),j([M({type:Number})],bc.prototype,`distance`,2),j([M({type:Boolean,reflect:!0})],bc.prototype,`open`,2),j([M({type:Number})],bc.prototype,`skidding`,2),j([M()],bc.prototype,`trigger`,2),j([M({type:Boolean})],bc.prototype,`hoist`,2),j([R(`open`,{waitUntilFirstUpdate:!0})],bc.prototype,`handleOpenChange`,1),j([R([`content`,`distance`,`hoist`,`placement`,`skidding`])],bc.prototype,`handleOptionsChange`,1),j([R(`disabled`)],bc.prototype,`handleDisabledChange`,1),K(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),K(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}}),bc.define(`sl-tooltip`),L({tagName:`sl-tooltip`,elementClass:bc,react:v,events:{onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`},displayName:`SlTooltip`});var xc=O`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Sc=O`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Cc=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new U(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit(`sl-change`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return k`
      <div
        class=${B({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${B({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${V(this.value)}
            .indeterminate=${fo(this.indeterminate)}
            .checked=${fo(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?k`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:``}
            ${!this.checked&&this.indeterminate?k`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Cc.styles=[A,eo,Sc],Cc.dependencies={"sl-icon":z},j([F(`input[type="checkbox"]`)],Cc.prototype,`input`,2),j([N()],Cc.prototype,`hasFocus`,2),j([M()],Cc.prototype,`title`,2),j([M()],Cc.prototype,`name`,2),j([M()],Cc.prototype,`value`,2),j([M({reflect:!0})],Cc.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],Cc.prototype,`disabled`,2),j([M({type:Boolean,reflect:!0})],Cc.prototype,`checked`,2),j([M({type:Boolean,reflect:!0})],Cc.prototype,`indeterminate`,2),j([$a(`checked`)],Cc.prototype,`defaultChecked`,2),j([M({reflect:!0})],Cc.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],Cc.prototype,`required`,2),j([M({attribute:`help-text`})],Cc.prototype,`helpText`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],Cc.prototype,`handleDisabledChange`,1),j([R([`checked`,`indeterminate`],{waitUntilFirstUpdate:!0})],Cc.prototype,`handleStateChange`,1);var wc=O`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Tc=class extends I{constructor(){super(...arguments),this.localize=new H(this)}render(){return k`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Tc.styles=[A,wc];function Ec(e,t,n){return e?t(e):n?.(e)}var Dc=class e extends I{constructor(){super(...arguments),this.localize=new H(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute(`role`)===`treeitem`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`treeitem`),this.setAttribute(`tabindex`,`-1`),this.isNestedItem()&&(this.slot=`children`)}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?`auto`:`0`,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit(`sl-collapse`),await vc(this.childrenContainer);let{keyframes:e,options:t}=pc(this,`tree-item.collapse`,{dir:this.localize.dir()});await hc(this.childrenContainer,yc(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit(`sl-after-collapse`)}isNestedItem(){let t=this.parentElement;return!!t&&e.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has(`selected`)&&!e.has(`indeterminate`)&&(this.indeterminate=!1)}async animateExpand(){this.emit(`sl-expand`),await vc(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:e,options:t}=pc(this,`tree-item.expand`,{dir:this.localize.dir()});await hc(this.childrenContainer,yc(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height=`auto`,this.emit(`sl-after-expand`)}handleLoadingChange(){this.setAttribute(`aria-busy`,this.loading?`true`:`false`),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleExpandedChange(){this.isLeaf?this.removeAttribute(`aria-expanded`):this.setAttribute(`aria-expanded`,this.expanded?`true`:`false`)}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit(`sl-lazy-load`)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit(`sl-lazy-change`)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(n=>e.isTreeItem(n)&&(t||!n.disabled)):[]}render(){let e=this.localize.dir()===`rtl`,t=!this.loading&&(!this.isLeaf||this.lazy);return k`
      <div
        part="base"
        class="${B({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()===`rtl`})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?`item--disabled`:``}
            ${this.expanded?`item--expanded`:``}
            ${this.indeterminate?`item--indeterminate`:``}
            ${this.selected?`item--selected`:``}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${B({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${Ec(this.loading,()=>k` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
          </div>

          ${Ec(this.selectable,()=>k`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${fo(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Dc.styles=[A,xc],Dc.dependencies={"sl-checkbox":Cc,"sl-icon":z,"sl-spinner":Tc},j([N()],Dc.prototype,`indeterminate`,2),j([N()],Dc.prototype,`isLeaf`,2),j([N()],Dc.prototype,`loading`,2),j([N()],Dc.prototype,`selectable`,2),j([M({type:Boolean,reflect:!0})],Dc.prototype,`expanded`,2),j([M({type:Boolean,reflect:!0})],Dc.prototype,`selected`,2),j([M({type:Boolean,reflect:!0})],Dc.prototype,`disabled`,2),j([M({type:Boolean,reflect:!0})],Dc.prototype,`lazy`,2),j([F(`slot:not([name])`)],Dc.prototype,`defaultSlot`,2),j([F(`slot[name=children]`)],Dc.prototype,`childrenSlot`,2),j([F(`.tree-item__item`)],Dc.prototype,`itemElement`,2),j([F(`.tree-item__children`)],Dc.prototype,`childrenContainer`,2),j([F(`.tree-item__expand-button slot`)],Dc.prototype,`expandButtonSlot`,2),j([R(`loading`,{waitUntilFirstUpdate:!0})],Dc.prototype,`handleLoadingChange`,1),j([R(`disabled`)],Dc.prototype,`handleDisabledChange`,1),j([R(`selected`)],Dc.prototype,`handleSelectedChange`,1),j([R(`expanded`,{waitUntilFirstUpdate:!0})],Dc.prototype,`handleExpandedChange`,1),j([R(`expanded`,{waitUntilFirstUpdate:!0})],Dc.prototype,`handleExpandAnimation`,1),j([R(`lazy`,{waitUntilFirstUpdate:!0})],Dc.prototype,`handleLazyChange`,1);var Oc=Dc;K(`tree-item.expand`,{keyframes:[{height:`0`,opacity:`0`,overflow:`hidden`},{height:`auto`,opacity:`1`,overflow:`hidden`}],options:{duration:250,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}}),K(`tree-item.collapse`,{keyframes:[{height:`auto`,opacity:`1`,overflow:`hidden`},{height:`0`,opacity:`0`,overflow:`hidden`}],options:{duration:200,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}}),Oc.define(`sl-tree-item`),L({tagName:`sl-tree-item`,elementClass:Oc,react:v,events:{onSlExpand:`sl-expand`,onSlAfterExpand:`sl-after-expand`,onSlCollapse:`sl-collapse`,onSlAfterCollapse:`sl-after-collapse`,onSlLazyChange:`sl-lazy-change`,onSlLazyLoad:`sl-lazy-load`},displayName:`SlTreeItem`});var kc=O`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Ac(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}function jc(e,t=!1){function n(e){let t=e.getChildrenItems({includeDisabled:!1});if(t.length){let n=t.every(e=>e.selected),r=t.every(e=>!e.selected&&!e.indeterminate);e.selected=n,e.indeterminate=!n&&!r}}function r(e){let t=e.parentElement;Oc.isTreeItem(t)&&(n(t),r(t))}function i(e){for(let n of e.getChildrenItems())n.selected=t?e.selected||n.selected:!n.disabled&&e.selected,i(n);t&&n(e)}i(e),r(e)}var Mc=class extends I{constructor(){super(),this.selection=`single`,this.clickTarget=null,this.localize=new H(this),this.initTreeItem=e=>{e.selectable=this.selection===`multiple`,[`expand`,`collapse`].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(t=>{let n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute(`data-default`)&&n.replaceWith(r))})},this.handleTreeChanged=e=>{for(let t of e){let e=[...t.addedNodes].filter(Oc.isTreeItem),n=[...t.removedNodes].filter(Oc.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{let t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{let t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Oc.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.addEventListener(`sl-lazy-change`,this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tree`),this.setAttribute(`tabindex`,`0`),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){let t=(e===`expand`?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){let n=t.cloneNode(!0);return[n,...n.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),n.setAttribute(`data-default`,``),n.slot=`${e}-icon`,n}return null}selectItem(e){let t=[...this.selectedItems];if(this.selection===`multiple`)e.selected=!e.selected,e.lazy&&(e.expanded=!0),jc(e);else if(this.selection===`single`||e.isLeaf){let t=this.getAllTreeItems();for(let n of t)n.selected=n===e}else this.selection===`leaf`&&(e.expanded=!e.expanded);let n=this.selectedItems;(t.length!==n.length||n.some(e=>!t.includes(e)))&&Promise.all(n.map(e=>e.updateComplete)).then(()=>{this.emit(`sl-selection-change`,{detail:{selection:n}})})}getAllTreeItems(){return[...this.querySelectorAll(`sl-tree-item`)]}focusItem(e){e?.focus()}handleKeyDown(e){if(![`ArrowDown`,`ArrowUp`,`ArrowRight`,`ArrowLeft`,`Home`,`End`,`Enter`,` `].includes(e.key)||e.composedPath().some(e=>[`input`,`textarea`].includes((e?.tagName)?.toLowerCase())))return;let t=this.getFocusableItems(),n=this.localize.dir()===`ltr`,r=this.localize.dir()===`rtl`;if(t.length>0){e.preventDefault();let i=t.findIndex(e=>e.matches(`:focus`)),a=t[i],o=e=>{let n=t[Ac(e,0,t.length-1)];this.focusItem(n)},s=e=>{a.expanded=e};e.key===`ArrowDown`?o(i+1):e.key===`ArrowUp`?o(i-1):n&&e.key===`ArrowRight`||r&&e.key===`ArrowLeft`?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?o(i+1):s(!0):n&&e.key===`ArrowLeft`||r&&e.key===`ArrowRight`?!a||a.disabled||a.isLeaf||!a.expanded?o(i-1):s(!1):e.key===`Home`?o(0):e.key===`End`?o(t.length-1):(e.key===`Enter`||e.key===` `)&&(a.disabled||this.selectItem(a))}}handleClick(e){let t=e.target,n=t.closest(`sl-tree-item`),r=e.composedPath().some(e=>(e?.classList)?.contains(`tree-item__expand-button`));!n||n.disabled||t!==this.clickTarget||(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let e=this.selection===`multiple`,t=this.getAllTreeItems();this.setAttribute(`aria-multiselectable`,e?`true`:`false`);for(let n of t)n.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(`:scope > sl-tree-item`)].forEach(e=>jc(e,!0)))}get selectedItems(){return this.getAllTreeItems().filter(e=>e.selected)}getFocusableItems(){let e=this.getAllTreeItems(),t=new Set;return e.filter(e=>{if(e.disabled)return!1;let n=e.parentElement?.closest(`[role=treeitem]`);return n&&(!n.expanded||n.loading||t.has(n))&&t.add(e),!t.has(e)})}render(){return k`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Mc.styles=[A,kc],j([F(`slot:not([name])`)],Mc.prototype,`defaultSlot`,2),j([F(`slot[name=expand-icon]`)],Mc.prototype,`expandedIconSlot`,2),j([F(`slot[name=collapse-icon]`)],Mc.prototype,`collapsedIconSlot`,2),j([M()],Mc.prototype,`selection`,2),j([R(`selection`)],Mc.prototype,`handleSelectionChange`,1),Mc.define(`sl-tree`),L({tagName:`sl-tree`,elementClass:Mc,react:v,events:{onSlSelectionChange:`sl-selection-change`},displayName:`SlTree`});var Nc=O`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,Pc=`important`,Fc=` !important`,Ic=ha(class extends ga{constructor(e){if(super(e),e.type!==ma.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Fc);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Pc:``):n[e]=r}}return Zr}}),Lc=class extends ga{constructor(e){if(super(e),this.it=Qr,e.type!==ma.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===Qr||e==null)return this._t=void 0,this.it=e;if(e===Zr)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Lc.directiveName=`unsafeHTML`,Lc.resultType=1;var Rc=ha(Lc),zc=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.hoverValue=0,this.isHovering=!1,this.label=``,this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>`<sl-icon name="star-fill" library="system"></sl-icon>`}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){let t=this.localize.dir()===`rtl`,{left:n,right:r,width:i}=this.rating.getBoundingClientRect();return Ac(t?this.roundToPrecision((r-e)/i*this.max,this.precision):this.roundToPrecision((e-n)/i*this.max,this.precision),0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit(`sl-change`))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){let t=this.localize.dir()===`ltr`,n=this.localize.dir()===`rtl`,r=this.value;if(!(this.disabled||this.readonly)){if(e.key===`ArrowDown`||t&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`){let t=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-t),e.preventDefault()}if(e.key===`ArrowUp`||t&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`){let t=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+t),e.preventDefault()}e.key===`Home`&&(this.value=0,e.preventDefault()),e.key===`End`&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit(`sl-change`)}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit(`sl-change`),e.preventDefault()}roundToPrecision(e,t=.5){let n=1/t;return Math.ceil(e*n)/n}handleHoverValueChange(){this.emit(`sl-hover`,{detail:{phase:`move`,value:this.hoverValue}})}handleIsHoveringChange(){this.emit(`sl-hover`,{detail:{phase:this.isHovering?`start`:`end`,value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){let e=this.localize.dir()===`rtl`,t=Array.from(Array(this.max).keys()),n=0;return n=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,k`
      <div
        part="base"
        class=${B({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-readonly=${this.readonly?`true`:`false`}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?`-1`:`0`}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(t=>n>t&&n<t+1?k`
                <span
                  class=${B({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(n)===t+1})}
                  role="presentation"
                >
                  <div
                    style=${Ic({clipPath:e?`inset(0 ${(n-t)*100}% 0 0)`:`inset(0 0 0 ${(n-t)*100}%)`})}
                  >
                    ${Rc(this.getSymbol(t+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ic({clipPath:e?`inset(0 0 0 ${100-(n-t)*100}%)`:`inset(0 ${100-(n-t)*100}% 0 0)`})}
                  >
                    ${Rc(this.getSymbol(t+1))}
                  </div>
                </span>
              `:k`
              <span
                class=${B({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(n)===t+1,"rating__symbol--active":n>=t+1})}
                role="presentation"
              >
                ${Rc(this.getSymbol(t+1))}
              </span>
            `)}
        </span>
      </div>
    `}};zc.styles=[A,Nc],zc.dependencies={"sl-icon":z},j([F(`.rating`)],zc.prototype,`rating`,2),j([N()],zc.prototype,`hoverValue`,2),j([N()],zc.prototype,`isHovering`,2),j([M()],zc.prototype,`label`,2),j([M({type:Number})],zc.prototype,`value`,2),j([M({type:Number})],zc.prototype,`max`,2),j([M({type:Number})],zc.prototype,`precision`,2),j([M({type:Boolean,reflect:!0})],zc.prototype,`readonly`,2),j([M({type:Boolean,reflect:!0})],zc.prototype,`disabled`,2),j([M()],zc.prototype,`getSymbol`,2),j([zi({passive:!0})],zc.prototype,`handleTouchMove`,1),j([R(`hoverValue`)],zc.prototype,`handleHoverValueChange`,1),j([R(`isHovering`)],zc.prototype,`handleIsHoveringChange`,1),zc.define(`sl-rating`),L({tagName:`sl-rating`,elementClass:zc,react:v,events:{onSlChange:`sl-change`,onSlHover:`sl-hover`},displayName:`SlRating`});var Bc=[{max:276e4,value:6e4,unit:`minute`},{max:72e6,value:36e5,unit:`hour`},{max:5184e5,value:864e5,unit:`day`},{max:24192e5,value:6048e5,unit:`week`},{max:28512e6,value:2592e6,unit:`month`},{max:1/0,value:31536e6,unit:`year`}],Vc=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isoTime=``,this.relativeTime=``,this.date=new Date,this.format=`long`,this.numeric=`auto`,this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime=``,this.isoTime=``,``;let n=t.getTime()-e.getTime(),{unit:r,value:i}=Bc.find(e=>Math.abs(n)<e.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/i),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let e;e=Hc(r===`minute`?`second`:r===`hour`?`minute`:r===`day`?`hour`:`day`),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),e)}return k` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};j([N()],Vc.prototype,`isoTime`,2),j([N()],Vc.prototype,`relativeTime`,2),j([M()],Vc.prototype,`date`,2),j([M()],Vc.prototype,`format`,2),j([M()],Vc.prototype,`numeric`,2),j([M({type:Boolean})],Vc.prototype,`sync`,2);function Hc(e){let t={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return t-Date.now()%t}Vc.define(`sl-relative-time`),L({tagName:`sl-relative-time`,elementClass:Vc,react:v,events:{},displayName:`SlRelativeTime`}),Ra.define(`sl-resize-observer`),L({tagName:`sl-resize-observer`,elementClass:Ra,react:v,events:{onSlResize:`sl-resize`},displayName:`SlResizeObserver`});var Uc=O`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,q=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new U(this,`help-text`,`label`),this.localize=new H(this),this.typeToSelectString=``,this.hasFocus=!1,this.displayLabel=``,this.selectedOptions=[],this.valueHasChanged=!1,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.getTag=e=>k`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`sl-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`sl-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`sl-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`sl-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`sl-option`)||customElements.whenDefined(`sl-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>r.push(e.value)),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}))}getAllOptions(){return[...this.querySelectorAll(`sl-option`)]}getFirstOption(){return this.querySelector(`sl-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected);let t=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.displayLabel=this.placeholder&&this.value.length===0?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.value=e?.value??``,this.displayLabel=(e?.getTextLabel)?.call(e)??``}this.valueHasChanged=t,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return k`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?Rc(n):n}
        </div>`}return t===this.maxOptionsVisible?k`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`:k``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`sl-show`),this.addOpenListeners(),await vc(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=pc(this,`select.show`,{dir:this.localize.dir()});await hc(this.popup.popup,e,t),this.currentOption&&Ga(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await vc(this);let{keyframes:e,options:t}=pc(this,`select.hide`,{dir:this.localize.dir()});await hc(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,mc(this,`sl-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return k`
      <div
        part="form-control"
        class=${B({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${B({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            strategy=${this.hoist?`fixed`:`absolute`}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?k`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?k`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[A,eo,Uc],q.dependencies={"sl-icon":z,"sl-popup":G,"sl-tag":Za},j([F(`.select`)],q.prototype,`popup`,2),j([F(`.select__combobox`)],q.prototype,`combobox`,2),j([F(`.select__display-input`)],q.prototype,`displayInput`,2),j([F(`.select__value-input`)],q.prototype,`valueInput`,2),j([F(`.select__listbox`)],q.prototype,`listbox`,2),j([N()],q.prototype,`hasFocus`,2),j([N()],q.prototype,`displayLabel`,2),j([N()],q.prototype,`currentOption`,2),j([N()],q.prototype,`selectedOptions`,2),j([N()],q.prototype,`valueHasChanged`,2),j([M()],q.prototype,`name`,2),j([N()],q.prototype,`value`,1),j([M({attribute:`value`})],q.prototype,`defaultValue`,2),j([M({reflect:!0})],q.prototype,`size`,2),j([M()],q.prototype,`placeholder`,2),j([M({type:Boolean,reflect:!0})],q.prototype,`multiple`,2),j([M({attribute:`max-options-visible`,type:Number})],q.prototype,`maxOptionsVisible`,2),j([M({type:Boolean,reflect:!0})],q.prototype,`disabled`,2),j([M({type:Boolean})],q.prototype,`clearable`,2),j([M({type:Boolean,reflect:!0})],q.prototype,`open`,2),j([M({type:Boolean})],q.prototype,`hoist`,2),j([M({type:Boolean,reflect:!0})],q.prototype,`filled`,2),j([M({type:Boolean,reflect:!0})],q.prototype,`pill`,2),j([M()],q.prototype,`label`,2),j([M({reflect:!0})],q.prototype,`placement`,2),j([M({attribute:`help-text`})],q.prototype,`helpText`,2),j([M({reflect:!0})],q.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],q.prototype,`required`,2),j([M()],q.prototype,`getTag`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],q.prototype,`handleDisabledChange`,1),j([R([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],q.prototype,`handleValueChange`,1),j([R(`open`,{waitUntilFirstUpdate:!0})],q.prototype,`handleOpenChange`,1),K(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),K(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),q.define(`sl-select`),L({tagName:`sl-select`,elementClass:q,react:v,events:{onSlChange:`sl-change`,onSlClear:`sl-clear`,onSlInput:`sl-input`,onSlFocus:`sl-focus`,onSlBlur:`sl-blur`,onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`,onSlInvalid:`sl-invalid`},displayName:`SlSelect`}),Tc.define(`sl-spinner`),L({tagName:`sl-spinner`,elementClass:Tc,react:v,events:{},displayName:`SlSpinner`});var Wc=O`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Gc=class extends I{constructor(){super(...arguments),this.effect=`none`}render(){return k`
      <div
        part="base"
        class=${B({skeleton:!0,"skeleton--pulse":this.effect===`pulse`,"skeleton--sheen":this.effect===`sheen`})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Gc.styles=[A,Wc],j([M()],Gc.prototype,`effect`,2),Gc.define(`sl-skeleton`),L({tagName:`sl-skeleton`,elementClass:Gc,react:v,events:{},displayName:`SlSkeleton`});var Kc=O`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,qc=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new U(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`sl-change`),this.emit(`sl-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`sl-change`),this.emit(`sl-input`))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return k`
      <div
        class=${B({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${B({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${V(this.value)}
            .checked=${fo(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};qc.styles=[A,eo,Kc],j([F(`input[type="checkbox"]`)],qc.prototype,`input`,2),j([N()],qc.prototype,`hasFocus`,2),j([M()],qc.prototype,`title`,2),j([M()],qc.prototype,`name`,2),j([M()],qc.prototype,`value`,2),j([M({reflect:!0})],qc.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],qc.prototype,`disabled`,2),j([M({type:Boolean,reflect:!0})],qc.prototype,`checked`,2),j([$a(`checked`)],qc.prototype,`defaultChecked`,2),j([M({reflect:!0})],qc.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],qc.prototype,`required`,2),j([M({attribute:`help-text`})],qc.prototype,`helpText`,2),j([R(`checked`,{waitUntilFirstUpdate:!0})],qc.prototype,`handleCheckedChange`,1),j([R(`disabled`,{waitUntilFirstUpdate:!0})],qc.prototype,`handleDisabledChange`,1),qc.define(`sl-switch`),L({tagName:`sl-switch`,elementClass:qc,react:v,events:{onSlBlur:`sl-blur`,onSlChange:`sl-change`,onSlInput:`sl-input`,onSlFocus:`sl-focus`,onSlInvalid:`sl-invalid`},displayName:`SlSwitch`});var Jc=O`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Yc(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.scrollX,o=r.top+i.scrollY,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}var Xc=()=>null,Zc=class extends I{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new H(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue=``,this.snapFunction=Xc,this.snapThreshold=12}toSnapFunction(e){let t=e.split(` `);return({pos:n,size:r,snapThreshold:i,isRtl:a,vertical:o})=>{let s=n,c=1/0;return t.forEach(t=>{let l;if(t.startsWith(`repeat(`)){let t=e.substring(7,e.length-1),i=t.endsWith(`%`),s=Number.parseFloat(t),c=i?s/100*r:s;l=Math.round((a&&!o?r-n:n)/c)*c}else l=t.endsWith(`%`)?Number.parseFloat(t)/100*r:Number.parseFloat(t);a&&!o&&(l=r-l);let u=Math.abs(n-l);u<=i&&u<c&&(s=l,c=u)}),s}}set snap(e){this.snapValue=e??``,this.snapFunction=e?typeof e==`string`?this.toSnapFunction(e):e:Xc}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){let{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){let t=this.localize.dir()===`rtl`;this.disabled||(e.cancelable&&e.preventDefault(),Yc(this,{onMove:(e,n)=>{let r=this.vertical?n:e;this.primary===`end`&&(r=this.size-r),r=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical})??r,this.position=Ac(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`Enter`].includes(e.key)){let t=this.position,n=(e.shiftKey?10:1)*(this.primary===`end`?-1:1);if(e.preventDefault(),(e.key===`ArrowLeft`&&!this.vertical||e.key===`ArrowUp`&&this.vertical)&&(t-=n),(e.key===`ArrowRight`&&!this.vertical||e.key===`ArrowDown`&&this.vertical)&&(t+=n),e.key===`Home`&&(t=this.primary===`end`?100:0),e.key===`End`&&(t=this.primary===`end`?0:100),e.key===`Enter`){if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let e=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=e})}}this.position=Ac(t,0,100)}}handleResize(e){let{width:t,height:n}=e[0].contentRect;this.size=this.vertical?n:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.positionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit(`sl-reposition`)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let e=this.vertical?`gridTemplateRows`:`gridTemplateColumns`,t=this.vertical?`gridTemplateColumns`:`gridTemplateRows`,n=this.localize.dir()===`rtl`,r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i=`auto`;return this.primary===`end`?n&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:n&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]=``,k`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${V(this.disabled?void 0:`0`)}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term(`resize`)}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Zc.styles=[A,Jc],j([F(`.divider`)],Zc.prototype,`divider`,2),j([M({type:Number,reflect:!0})],Zc.prototype,`position`,2),j([M({attribute:`position-in-pixels`,type:Number})],Zc.prototype,`positionInPixels`,2),j([M({type:Boolean,reflect:!0})],Zc.prototype,`vertical`,2),j([M({type:Boolean,reflect:!0})],Zc.prototype,`disabled`,2),j([M()],Zc.prototype,`primary`,2),j([M({reflect:!0})],Zc.prototype,`snap`,1),j([M({type:Number,attribute:`snap-threshold`})],Zc.prototype,`snapThreshold`,2),j([R(`position`)],Zc.prototype,`handlePositionChange`,1),j([R(`positionInPixels`)],Zc.prototype,`handlePositionInPixelsChange`,1),j([R(`vertical`)],Zc.prototype,`handleVerticalChange`,1),Zc.define(`sl-split-panel`),L({tagName:`sl-split-panel`,elementClass:Zc,react:v,events:{onSlReposition:`sl-reposition`},displayName:`SlSplitPanel`});var Qc=O`
  :host {
    display: contents;
  }
`,$c=class extends I{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit(`sl-mutation`,{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let e=typeof this.attr==`string`&&this.attr.length>0,t=e&&this.attr!==`*`?this.attr.split(` `):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return k` <slot></slot> `}};$c.styles=[A,Qc],j([M({reflect:!0})],$c.prototype,`attr`,2),j([M({attribute:`attr-old-value`,type:Boolean,reflect:!0})],$c.prototype,`attrOldValue`,2),j([M({attribute:`char-data`,type:Boolean,reflect:!0})],$c.prototype,`charData`,2),j([M({attribute:`char-data-old-value`,type:Boolean,reflect:!0})],$c.prototype,`charDataOldValue`,2),j([M({attribute:`child-list`,type:Boolean,reflect:!0})],$c.prototype,`childList`,2),j([M({type:Boolean,reflect:!0})],$c.prototype,`disabled`,2),j([R(`disabled`)],$c.prototype,`handleDisabledChange`,1),j([R(`attr`,{waitUntilFirstUpdate:!0}),R(`attr-old-value`,{waitUntilFirstUpdate:!0}),R(`char-data`,{waitUntilFirstUpdate:!0}),R(`char-data-old-value`,{waitUntilFirstUpdate:!0}),R(`childList`,{waitUntilFirstUpdate:!0})],$c.prototype,`handleChange`,1),$c.define(`sl-mutation-observer`),L({tagName:`sl-mutation-observer`,elementClass:$c,react:v,events:{onSlMutation:`sl-mutation`},displayName:`SlMutationObserver`});var el=O`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,tl=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.indeterminate=!1,this.label=``}render(){return k`
      <div
        part="base"
        class=${B({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${V(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ic({width:`${this.value}%`})}>
          ${this.indeterminate?``:k` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};tl.styles=[A,el],j([M({type:Number,reflect:!0})],tl.prototype,`value`,2),j([M({type:Boolean,reflect:!0})],tl.prototype,`indeterminate`,2),j([M()],tl.prototype,`label`,2),tl.define(`sl-progress-bar`),L({tagName:`sl-progress-bar`,elementClass:tl,react:v,events:{},displayName:`SlProgressBar`});var nl=O`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,rl=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.label=``}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;this.indicatorOffset=`${n}px`}}render(){return k`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};rl.styles=[A,nl],j([F(`.progress-ring__indicator`)],rl.prototype,`indicator`,2),j([N()],rl.prototype,`indicatorOffset`,2),j([M({type:Number,reflect:!0})],rl.prototype,`value`,2),j([M()],rl.prototype,`label`,2),rl.define(`sl-progress-ring`),L({tagName:`sl-progress-ring`,elementClass:rl,react:v,events:{},displayName:`SlProgressRing`});var il=O`
  :host {
    display: inline-block;
  }
`,al=null,ol=class{};ol.render=function(e,t){al(e,t)},self.QrCreator=ol,(function(e){function t(t,n,r,i){var a={},o=e(r,n);o.u(t),o.J(),i||=0;var s=o.h(),c=o.h()+2*i;return a.text=t,a.level=n,a.version=r,a.O=c,a.a=function(e,t){return e-=i,t-=i,0>e||e>=s||0>t||t>=s?!1:o.a(e,t)},a}function n(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i,o,s,c){t?(e.lineTo(n+s,r+c),e.arcTo(n,r,i,o,a)):e.lineTo(n,r)}o?e.moveTo(t+a,n):e.moveTo(t,n),u(s,r,n,r,i,-a,0),u(c,r,i,t,i,0,-a),u(l,t,i,t,n,a,0),u(o,t,n,r,n,0,a)}function r(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i){e.moveTo(t+r,n),e.lineTo(t,n),e.lineTo(t,n+i),e.arcTo(t,n,t+r,n,a)}o&&u(t,n,a,a),s&&u(r,n,-a,a),c&&u(r,i,-a,-a),l&&u(t,i,a,-a)}function i(e,t){var n=t.fill;if(typeof n==`string`)e.fillStyle=n;else{var r=n.type,i=n.colorStops;if(n=n.position.map(e=>Math.round(e*t.size)),r===`linear-gradient`)var a=e.createLinearGradient.apply(e,n);else if(r===`radial-gradient`)a=e.createRadialGradient.apply(e,n);else throw Error(`Unsupported fill`);i.forEach(([e,t])=>{a.addColorStop(e,t)}),e.fillStyle=a}}function a(e,a){a:{var o=a.text,s=a.v,c=a.N,l=a.K,u=a.P;for(c=Math.max(1,c||1),l=Math.min(40,l||40);c<=l;c+=1)try{var d=t(o,s,c,u);break a}catch{}d=void 0}if(!d)return null;for(o=e.getContext(`2d`),a.background&&(o.fillStyle=a.background,o.fillRect(a.left,a.top,a.size,a.size)),s=d.O,l=a.size/s,o.beginPath(),u=0;u<s;u+=1)for(c=0;c<s;c+=1){var f=o,p=a.left+c*l,m=a.top+u*l,h=u,g=c,_=d.a,v=p+l,y=m+l,b=h-1,x=h+1,ee=g-1,S=g+1,C=Math.floor(Math.min(.5,Math.max(0,a.R))*l),te=_(h,g),ne=_(b,ee),re=_(b,g);b=_(b,S);var ie=_(h,S);S=_(x,S),g=_(x,g),x=_(x,ee),h=_(h,ee),p=Math.round(p),m=Math.round(m),v=Math.round(v),y=Math.round(y),te?n(f,p,m,v,y,C,!re&&!h,!re&&!ie,!g&&!ie,!g&&!h):r(f,p,m,v,y,C,re&&h&&ne,re&&ie&&b,g&&ie&&S,g&&h&&x)}return i(o,a),o.fill(),e}var o={minVersion:1,maxVersion:40,ecLevel:`L`,left:0,top:0,size:200,fill:`#000`,background:null,text:`no text`,radius:.5,quiet:0};al=function(e,t){var n={};Object.assign(n,o,e),n.N=n.minVersion,n.K=n.maxVersion,n.v=n.ecLevel,n.left=n.left,n.top=n.top,n.size=n.size,n.fill=n.fill,n.background=n.background,n.text=n.text,n.R=n.radius,n.P=n.quiet,t instanceof HTMLCanvasElement?((t.width!==n.size||t.height!==n.size)&&(t.width=n.size,t.height=n.size),t.getContext(`2d`).clearRect(0,0,t.width,t.height),a(t,n)):(e=document.createElement(`canvas`),e.width=n.size,e.height=n.size,n=a(e,n),t.appendChild(n))}})(function(){function e(e){var t=n.s(e);return{S:function(){return 4},b:function(){return t.length},write:function(e){for(var n=0;n<t.length;n+=1)e.put(t[n],8)}}}function t(){var e=[],t=0,n={B:function(){return e},c:function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(e,t){for(var r=0;r<t;r+=1)n.m((e>>>t-r-1&1)==1)},f:function(){return t},m:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n}function n(n,o){function c(e,t){for(var n=-1;7>=n;n+=1)if(!(-1>=e+n||f<=e+n))for(var r=-1;7>=r;r+=1)-1>=t+r||f<=t+r||(d[e+n][t+r]=0<=n&&6>=n&&(r==0||r==6)||0<=r&&6>=r&&(n==0||n==6)||2<=n&&4>=n&&2<=r&&4>=r)}function l(e,i){for(var o=f=4*n+17,l=Array(o),h=0;h<o;h+=1){l[h]=Array(o);for(var g=0;g<o;g+=1)l[h][g]=null}for(d=l,c(0,0),c(f-7,0),c(0,f-7),o=a.G(n),l=0;l<o.length;l+=1)for(h=0;h<o.length;h+=1){g=o[l];var _=o[h];if(d[g][_]==null)for(var v=-2;2>=v;v+=1)for(var y=-2;2>=y;y+=1)d[g+v][_+y]=v==-2||v==2||y==-2||y==2||v==0&&y==0}for(o=8;o<f-8;o+=1)d[o][6]??(d[o][6]=o%2==0);for(o=8;o<f-8;o+=1)d[6][o]??(d[6][o]=o%2==0);for(o=a.w(u<<3|i),l=0;15>l;l+=1)h=!e&&(o>>l&1)==1,d[6>l?l:8>l?l+1:f-15+l][8]=h,d[8][8>l?f-l-1:9>l?15-l:14-l]=h;if(d[f-8][8]=!e,7<=n){for(o=a.A(n),l=0;18>l;l+=1)h=!e&&(o>>l&1)==1,d[Math.floor(l/3)][l%3+f-8-3]=h;for(l=0;18>l;l+=1)h=!e&&(o>>l&1)==1,d[l%3+f-8-3][Math.floor(l/3)]=h}if(p==null){for(e=s.I(n,u),o=t(),l=0;l<m.length;l+=1)h=m[l],o.put(4,4),o.put(h.b(),a.f(4,n)),h.write(o);for(l=h=0;l<e.length;l+=1)h+=e[l].j;if(o.f()>8*h)throw Error(`code length overflow. (`+o.f()+`>`+8*h+`)`);for(o.f()+4<=8*h&&o.put(0,4);o.f()%8!=0;)o.m(!1);for(;!(o.f()>=8*h)&&(o.put(236,8),!(o.f()>=8*h));)o.put(17,8);var b=0;for(h=l=0,g=Array(e.length),_=Array(e.length),v=0;v<e.length;v+=1){var x=e[v].j,ee=e[v].o-x;for(l=Math.max(l,x),h=Math.max(h,ee),g[v]=Array(x),y=0;y<g[v].length;y+=1)g[v][y]=255&o.B()[y+b];for(b+=x,y=a.C(ee),x=r(g[v],y.b()-1).l(y),_[v]=Array(y.b()-1),y=0;y<_[v].length;y+=1)ee=y+x.b()-_[v].length,_[v][y]=0<=ee?x.c(ee):0}for(y=o=0;y<e.length;y+=1)o+=e[y].o;for(o=Array(o),y=b=0;y<l;y+=1)for(v=0;v<e.length;v+=1)y<g[v].length&&(o[b]=g[v][y],b+=1);for(y=0;y<h;y+=1)for(v=0;v<e.length;v+=1)y<_[v].length&&(o[b]=_[v][y],b+=1);p=o}for(e=p,o=-1,l=f-1,h=7,g=0,i=a.F(i),_=f-1;0<_;_-=2)for(_==6&&--_;;){for(v=0;2>v;v+=1)d[l][_-v]??(y=!1,g<e.length&&(y=(e[g]>>>h&1)==1),i(l,_-v)&&(y=!y),d[l][_-v]=y,--h,h==-1&&(g+=1,h=7));if(l+=o,0>l||f<=l){l-=o,o=-o;break}}}var u=i[o],d=null,f=0,p=null,m=[],h={u:function(t){t=e(t),m.push(t),p=null},a:function(e,t){if(0>e||f<=e||0>t||f<=t)throw Error(e+`,`+t);return d[e][t]},h:function(){return f},J:function(){for(var e=0,t=0,n=0;8>n;n+=1){l(!0,n);var r=a.D(h);(n==0||e>r)&&(e=r,t=n)}l(!1,t)}};return h}function r(e,t){if(e.length===void 0)throw Error(e.length+`/`+t);var n=function(){for(var n=0;n<e.length&&e[n]==0;)n+=1;for(var r=Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),i={c:function(e){return n[e]},b:function(){return n.length},multiply:function(e){for(var t=Array(i.b()+e.b()-1),n=0;n<i.b();n+=1)for(var a=0;a<e.b();a+=1)t[n+a]^=o.i(o.g(i.c(n))+o.g(e.c(a)));return r(t,0)},l:function(e){if(0>i.b()-e.b())return i;for(var t=o.g(i.c(0))-o.g(e.c(0)),n=Array(i.b()),a=0;a<i.b();a+=1)n[a]=i.c(a);for(a=0;a<e.b();a+=1)n[a]^=o.i(o.g(e.c(a))+t);return r(n,0).l(e)}};return i}n.s=function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);128>r?t.push(r):2048>r?t.push(192|r>>6,128|r&63):55296>r||57344<=r?t.push(224|r>>12,128|r>>6&63,128|r&63):(n++,r=65536+((r&1023)<<10|e.charCodeAt(n)&1023),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return t};var i={L:1,M:0,Q:3,H:2},a=function(){function e(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t}var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(t){for(var n=t<<10;0<=e(n)-e(1335);)n^=1335<<e(n)-e(1335);return(t<<10|n)^21522},A:function(t){for(var n=t<<12;0<=e(n)-e(7973);)n^=7973<<e(n)-e(7973);return t<<12|n},G:function(e){return t[e-1]},F:function(e){switch(e){case 0:return function(e,t){return(e+t)%2==0};case 1:return function(e){return e%2==0};case 2:return function(e,t){return t%3==0};case 3:return function(e,t){return(e+t)%3==0};case 4:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case 5:return function(e,t){return e*t%2+e*t%3==0};case 6:return function(e,t){return(e*t%2+e*t%3)%2==0};case 7:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw Error(`bad maskPattern:`+e)}},C:function(e){for(var t=r([1],0),n=0;n<e;n+=1)t=t.multiply(r([1,o.i(n)],0));return t},f:function(e,t){if(e!=4||1>t||40<t)throw Error(`mode: `+e+`; type: `+t);return 10>t?8:16},D:function(e){for(var t=e.h(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var a=0,o=e.a(r,i),s=-1;1>=s;s+=1)if(!(0>r+s||t<=r+s))for(var c=-1;1>=c;c+=1)0>i+c||t<=i+c||(s!=0||c!=0)&&o==e.a(r+s,i+c)&&(a+=1);5<a&&(n+=3+a-5)}for(r=0;r<t-1;r+=1)for(i=0;i<t-1;i+=1)a=0,e.a(r,i)&&(a+=1),e.a(r+1,i)&&(a+=1),e.a(r,i+1)&&(a+=1),e.a(r+1,i+1)&&(a+=1),(a==0||a==4)&&(n+=3);for(r=0;r<t;r+=1)for(i=0;i<t-6;i+=1)e.a(r,i)&&!e.a(r,i+1)&&e.a(r,i+2)&&e.a(r,i+3)&&e.a(r,i+4)&&!e.a(r,i+5)&&e.a(r,i+6)&&(n+=40);for(i=0;i<t;i+=1)for(r=0;r<t-6;r+=1)e.a(r,i)&&!e.a(r+1,i)&&e.a(r+2,i)&&e.a(r+3,i)&&e.a(r+4,i)&&!e.a(r+5,i)&&e.a(r+6,i)&&(n+=40);for(i=a=0;i<t;i+=1)for(r=0;r<t;r+=1)e.a(r,i)&&(a+=1);return n+=Math.abs(100*a/t/t-50)/5*10}}}(),o=function(){for(var e=Array(256),t=Array(256),n=0;8>n;n+=1)e[n]=1<<n;for(n=8;256>n;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;255>n;n+=1)t[e[n]]=n;return{g:function(e){if(1>e)throw Error(`glog(`+e+`)`);return t[e]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return e[t]}}}(),s=function(){function e(e,n){switch(n){case i.L:return t[4*(e-1)];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3]}}var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];return{I:function(t,n){var r=e(t,n);if(r===void 0)throw Error(`bad rs block @ typeNumber:`+t+`/errorCorrectLevel:`+n);t=r.length/3,n=[];for(var i=0;i<t;i+=1)for(var a=r[3*i],o=r[3*i+1],s=r[3*i+2],c=0;c<a;c+=1){var l=s,u={};u.o=o,u.j=l,n.push(u)}return n}}}();return n}());var sl=QrCreator,cl=class extends I{constructor(){super(...arguments),this.value=``,this.label=``,this.size=128,this.fill=`black`,this.background=`white`,this.radius=0,this.errorCorrection=`H`}firstUpdated(){this.generate()}generate(){this.hasUpdated&&sl.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){return k`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${Ic({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};cl.styles=[A,il],j([F(`canvas`)],cl.prototype,`canvas`,2),j([M()],cl.prototype,`value`,2),j([M()],cl.prototype,`label`,2),j([M({type:Number})],cl.prototype,`size`,2),j([M()],cl.prototype,`fill`,2),j([M()],cl.prototype,`background`,2),j([M({type:Number})],cl.prototype,`radius`,2),j([M({attribute:`error-correction`})],cl.prototype,`errorCorrection`,2),j([R([`background`,`errorCorrection`,`fill`,`radius`,`size`,`value`])],cl.prototype,`generate`,1),cl.define(`sl-qr-code`),L({tagName:`sl-qr-code`,elementClass:cl,react:v,events:{},displayName:`SlQrCode`});var ll=O`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,ul=O`
  ${ll}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,dl=class extends I{constructor(){super(...arguments),this.hasSlotController=new U(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size=`medium`,this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return xa`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?` button--checked`:``}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${B({button:!0,"button--default":!0,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
          aria-disabled=${this.disabled}
          type="button"
          value=${V(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};dl.styles=[A,ul],j([F(`.button`)],dl.prototype,`input`,2),j([F(`.hidden-input`)],dl.prototype,`hiddenInput`,2),j([N()],dl.prototype,`hasFocus`,2),j([M({type:Boolean,reflect:!0})],dl.prototype,`checked`,2),j([M()],dl.prototype,`value`,2),j([M({type:Boolean,reflect:!0})],dl.prototype,`disabled`,2),j([M({reflect:!0})],dl.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],dl.prototype,`pill`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],dl.prototype,`handleDisabledChange`,1),dl.define(`sl-radio-button`),L({tagName:`sl-radio-button`,elementClass:dl,react:v,events:{onSlBlur:`sl-blur`,onSlFocus:`sl-focus`},displayName:`SlRadioButton`});var fl=O`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,pl=class extends I{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size=`medium`,this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit(`sl-blur`)},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit(`sl-focus`)},this.addEventListener(`blur`,this.handleBlur),this.addEventListener(`click`,this.handleClick),this.addEventListener(`focus`,this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.setAttribute(`tabindex`,`-1`),this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleCheckedChange(){this.setAttribute(`aria-checked`,this.checked?`true`:`false`),this.setAttribute(`tabindex`,this.checked?`0`:`-1`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}render(){return k`
      <span
        part="base"
        class=${B({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size===`small`,"radio--medium":this.size===`medium`,"radio--large":this.size===`large`})}
      >
        <span part="${`control${this.checked?` control--checked`:``}`}" class="radio__control">
          ${this.checked?k` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:``}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};pl.styles=[A,fl],pl.dependencies={"sl-icon":z},j([N()],pl.prototype,`checked`,2),j([N()],pl.prototype,`hasFocus`,2),j([M()],pl.prototype,`value`,2),j([M({reflect:!0})],pl.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],pl.prototype,`disabled`,2),j([R(`checked`)],pl.prototype,`handleCheckedChange`,1),j([R(`disabled`,{waitUntilFirstUpdate:!0})],pl.prototype,`handleDisabledChange`,1),pl.define(`sl-radio`),L({tagName:`sl-radio`,elementClass:pl,react:v,events:{onSlBlur:`sl-blur`,onSlFocus:`sl-focus`},displayName:`SlRadio`});var ml=O`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,hl=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this),this.hasSlotController=new U(this,`help-text`,`label`),this.localize=new H(this),this.hasFocus=!1,this.hasTooltip=!1,this.title=``,this.name=``,this.value=0,this.label=``,this.helpText=``,this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip=`top`,this.tooltipFormatter=e=>e.toString(),this.form=``,this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit(`sl-change`)}handleInput(){this.value=parseFloat(this.input.value),this.emit(`sl-input`),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit(`sl-focus`)}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty(`--percent`,`${e*100}%`)}syncTooltip(e){if(this.output!==null){let t=this.input.offsetWidth,n=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue(`--thumb-size`),i=this.localize.dir()===`rtl`,a=t*e;if(i){let i=`${t-a}px + ${e} * ${r}`;this.output.style.translate=`calc((${i} - ${n/2}px - ${r} / 2))`}else{let t=`${a}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${n/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!==`none`&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return k`
      <div
        part="form-control"
        class=${B({"form-control":!0,"form-control--medium":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${B({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()===`rtl`,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip===`top`,"range--tooltip-bottom":this.tooltip===`bottom`})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${V(this.name)}
              ?disabled=${this.disabled}
              min=${V(this.min)}
              max=${V(this.max)}
              step=${V(this.step)}
              .value=${fo(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!==`none`&&!this.disabled?k`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter==`function`?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:``}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};hl.styles=[A,eo,ml],j([F(`.range__control`)],hl.prototype,`input`,2),j([F(`.range__tooltip`)],hl.prototype,`output`,2),j([N()],hl.prototype,`hasFocus`,2),j([N()],hl.prototype,`hasTooltip`,2),j([M()],hl.prototype,`title`,2),j([M()],hl.prototype,`name`,2),j([M({type:Number})],hl.prototype,`value`,2),j([M()],hl.prototype,`label`,2),j([M({attribute:`help-text`})],hl.prototype,`helpText`,2),j([M({type:Boolean,reflect:!0})],hl.prototype,`disabled`,2),j([M({type:Number})],hl.prototype,`min`,2),j([M({type:Number})],hl.prototype,`max`,2),j([M({type:Number})],hl.prototype,`step`,2),j([M()],hl.prototype,`tooltip`,2),j([M({attribute:!1})],hl.prototype,`tooltipFormatter`,2),j([M({reflect:!0})],hl.prototype,`form`,2),j([$a()],hl.prototype,`defaultValue`,2),j([zi({passive:!0})],hl.prototype,`handleThumbDragStart`,1),j([R(`value`,{waitUntilFirstUpdate:!0})],hl.prototype,`handleValueChange`,1),j([R(`disabled`,{waitUntilFirstUpdate:!0})],hl.prototype,`handleDisabledChange`,1),j([R(`hasTooltip`,{waitUntilFirstUpdate:!0})],hl.prototype,`syncRange`,1),hl.define(`sl-range`),L({tagName:`sl-range`,elementClass:hl,react:v,events:{onSlBlur:`sl-blur`,onSlChange:`sl-change`,onSlFocus:`sl-focus`,onSlInput:`sl-input`,onSlInvalid:`sl-invalid`},displayName:`SlRange`});var gl=O`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,_l=O`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,vl=class extends I{constructor(){super(...arguments),this.disableRole=!1,this.label=``}handleFocus(e){yl(e.target)?.toggleAttribute(`data-sl-button-group__button--focus`,!0)}handleBlur(e){yl(e.target)?.toggleAttribute(`data-sl-button-group__button--focus`,!1)}handleMouseOver(e){yl(e.target)?.toggleAttribute(`data-sl-button-group__button--hover`,!0)}handleMouseOut(e){yl(e.target)?.toggleAttribute(`data-sl-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=yl(t);r&&(r.toggleAttribute(`data-sl-button-group__button`,!0),r.toggleAttribute(`data-sl-button-group__button--first`,n===0),r.toggleAttribute(`data-sl-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-sl-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-sl-button-group__button--radio`,r.tagName.toLowerCase()===`sl-radio-button`))})}render(){return k`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};vl.styles=[A,_l],j([F(`slot`)],vl.prototype,`defaultSlot`,2),j([N()],vl.prototype,`disableRole`,2),j([M()],vl.prototype,`label`,2);function yl(e){let t=`sl-button, sl-radio-button`;return e.closest(t)??e.querySelector(t)}var bl=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this),this.hasSlotController=new U(this,`help-text`,`label`),this.customValidityMessage=``,this.hasButtonGroup=!1,this.errorMessage=``,this.defaultValue=``,this.label=``,this.helpText=``,this.name=`option`,this.value=``,this.size=`medium`,this.form=``,this.required=!1}get validity(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?co:so:lo}get validationMessage(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?this.validationInput.validationMessage:``:this.customValidityMessage}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`sl-radio, sl-radio-button`)]}handleRadioClick(e){let t=e.target.closest(`sl-radio, sl-radio-button`),n=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,n.forEach(e=>e.checked=e===t),this.value!==r&&(this.emit(`sl-change`),this.emit(`sl-input`)))}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key))return;let t=this.getAllRadios().filter(e=>!e.disabled),n=t.find(e=>e.checked)??t[0],r=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,i=this.value,a=t.indexOf(n)+r;a<0&&(a=t.length-1),a>t.length-1&&(a=0),this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,this.hasButtonGroup?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==i&&(this.emit(`sl-change`),this.emit(`sl-input`)),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){let e=this.getAllRadios();if(await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=e.some(e=>e.tagName.toLowerCase()===`sl-radio-button`),e.length>0&&!e.some(e=>e.checked)){if(this.hasButtonGroup){let t=e[0].shadowRoot?.querySelector(`button`);t&&t.setAttribute(`tabindex`,`0`)}else e[0].setAttribute(`tabindex`,`0`)}if(this.hasButtonGroup){let e=this.shadowRoot?.querySelector(`sl-button-group`);e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get(`sl-radio`)&&customElements.get(`sl-radio-button`)){this.syncRadioElements();return}customElements.get(`sl-radio`)?this.syncRadioElements():customElements.whenDefined(`sl-radio`).then(()=>this.syncRadios()),customElements.get(`sl-radio-button`)?this.syncRadioElements():customElements.whenDefined(`sl-radio-button`).then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let e=this.required&&!this.value,t=this.customValidityMessage!==``;return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?``:this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=``){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=k`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return k`
      <fieldset
        part="form-control"
        class=${B({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--radio-group":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?k`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};bl.styles=[A,eo,gl],bl.dependencies={"sl-button-group":vl},j([F(`slot:not([name])`)],bl.prototype,`defaultSlot`,2),j([F(`.radio-group__validation-input`)],bl.prototype,`validationInput`,2),j([N()],bl.prototype,`hasButtonGroup`,2),j([N()],bl.prototype,`errorMessage`,2),j([N()],bl.prototype,`defaultValue`,2),j([M()],bl.prototype,`label`,2),j([M({attribute:`help-text`})],bl.prototype,`helpText`,2),j([M()],bl.prototype,`name`,2),j([M({reflect:!0})],bl.prototype,`value`,2),j([M({reflect:!0})],bl.prototype,`size`,2),j([M({reflect:!0})],bl.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],bl.prototype,`required`,2),j([R(`size`,{waitUntilFirstUpdate:!0})],bl.prototype,`handleSizeChange`,1),j([R(`value`)],bl.prototype,`handleValueChange`,1),bl.define(`sl-radio-group`),L({tagName:`sl-radio-group`,elementClass:bl,react:v,events:{onSlChange:`sl-change`,onSlInput:`sl-input`,onSlInvalid:`sl-invalid`},displayName:`SlRadioGroup`});var xl=O`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Sl=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.position=50}handleDrag(e){let{width:t}=this.base.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.preventDefault(),Yc(this.base,{onMove:e=>{this.position=parseFloat(Ac(e/t*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){let t=this.localize.dir()===`ltr`,n=this.localize.dir()===`rtl`;if([`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key)){let r=e.shiftKey?10:1,i=this.position;e.preventDefault(),(t&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`)&&(i-=r),(t&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`)&&(i+=r),e.key===`Home`&&(i=0),e.key===`End`&&(i=100),i=Ac(i,0,100),this.position=i}}handlePositionChange(){this.emit(`sl-change`)}render(){let e=this.localize.dir()===`rtl`;return k`
      <div
        part="base"
        id="image-comparer"
        class=${B({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ic({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ic({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Sl.styles=[A,xl],Sl.scopedElement={"sl-icon":z},j([F(`.image-comparer`)],Sl.prototype,`base`,2),j([F(`.image-comparer__handle`)],Sl.prototype,`handle`,2),j([M({type:Number,reflect:!0})],Sl.prototype,`position`,2),j([R(`position`,{waitUntilFirstUpdate:!0})],Sl.prototype,`handlePositionChange`,1),Sl.define(`sl-image-comparer`),L({tagName:`sl-image-comparer`,elementClass:Sl,react:v,events:{onSlChange:`sl-change`},displayName:`SlImageComparer`});var Cl=O`
  :host {
    display: block;
  }
`,wl=new Map;function Tl(e,t=`cors`){let n=wl.get(e);if(n!==void 0)return Promise.resolve(n);let r=fetch(e,{mode:t}).then(async t=>{let n={ok:t.ok,status:t.status,html:await t.text()};return wl.set(e,n),n});return wl.set(e,r),r}var El=class extends I{constructor(){super(...arguments),this.mode=`cors`,this.allowScripts=!1}executeScript(e){let t=document.createElement(`script`);[...e.attributes].forEach(e=>t.setAttribute(e.name,e.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{let e=this.src,t=await Tl(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit(`sl-error`,{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll(`script`)].forEach(e=>this.executeScript(e)),this.emit(`sl-load`)}catch{this.emit(`sl-error`,{detail:{status:-1}})}}render(){return k`<slot></slot>`}};El.styles=[A,Cl],j([M()],El.prototype,`src`,2),j([M()],El.prototype,`mode`,2),j([M({attribute:`allow-scripts`,type:Boolean})],El.prototype,`allowScripts`,2),j([R(`src`)],El.prototype,`handleSrcChange`,1),El.define(`sl-include`),L({tagName:`sl-include`,elementClass:El,react:v,events:{onSlLoad:`sl-load`,onSlError:`sl-error`},displayName:`SlInclude`});var Dl=O`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Ol=class extends I{connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>t.includes((e?.getAttribute)?.call(e,`role`)||``));if(!r||n.find(e=>(e?.getAttribute)?.call(e,`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`sl-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`sl-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return k`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Ol.styles=[A,Dl],j([F(`slot`)],Ol.prototype,`defaultSlot`,2),Ol.define(`sl-menu`),L({tagName:`sl-menu`,elementClass:Ol,react:v,events:{onSlSelect:`sl-select`},displayName:`SlMenu`});var kl=O`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,J=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new U(this,`help-text`,`label`),this.localize=new H(this),this.hasFocus=!1,this.title=``,this.__numberInput=Object.assign(document.createElement(`input`),{type:`number`}),this.__dateInput=Object.assign(document.createElement(`input`),{type:`date`}),this.type=`text`,this.name=``,this.value=``,this.defaultValue=``,this.size=`medium`,this.filled=!1,this.pill=!1,this.label=``,this.helpText=``,this.clearable=!1,this.disabled=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form=``,this.required=!1,this.spellcheck=!0}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.emit(`sl-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return k`
      <div
        part="form-control"
        class=${B({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${B({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${V(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${V(this.placeholder)}
              minlength=${V(this.minlength)}
              maxlength=${V(this.maxlength)}
              min=${V(this.min)}
              max=${V(this.max)}
              step=${V(this.step)}
              .value=${fo(this.value)}
              autocapitalize=${V(this.autocapitalize)}
              autocomplete=${V(this.autocomplete)}
              autocorrect=${V(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${V(this.pattern)}
              enterkeyhint=${V(this.enterkeyhint)}
              inputmode=${V(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?k`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?k`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?k`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:k`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J.styles=[A,eo,kl],J.dependencies={"sl-icon":z},j([F(`.input__control`)],J.prototype,`input`,2),j([N()],J.prototype,`hasFocus`,2),j([M()],J.prototype,`title`,2),j([M({reflect:!0})],J.prototype,`type`,2),j([M()],J.prototype,`name`,2),j([M()],J.prototype,`value`,2),j([$a()],J.prototype,`defaultValue`,2),j([M({reflect:!0})],J.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],J.prototype,`filled`,2),j([M({type:Boolean,reflect:!0})],J.prototype,`pill`,2),j([M()],J.prototype,`label`,2),j([M({attribute:`help-text`})],J.prototype,`helpText`,2),j([M({type:Boolean})],J.prototype,`clearable`,2),j([M({type:Boolean,reflect:!0})],J.prototype,`disabled`,2),j([M()],J.prototype,`placeholder`,2),j([M({type:Boolean,reflect:!0})],J.prototype,`readonly`,2),j([M({attribute:`password-toggle`,type:Boolean})],J.prototype,`passwordToggle`,2),j([M({attribute:`password-visible`,type:Boolean})],J.prototype,`passwordVisible`,2),j([M({attribute:`no-spin-buttons`,type:Boolean})],J.prototype,`noSpinButtons`,2),j([M({reflect:!0})],J.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],J.prototype,`required`,2),j([M()],J.prototype,`pattern`,2),j([M({type:Number})],J.prototype,`minlength`,2),j([M({type:Number})],J.prototype,`maxlength`,2),j([M()],J.prototype,`min`,2),j([M()],J.prototype,`max`,2),j([M()],J.prototype,`step`,2),j([M()],J.prototype,`autocapitalize`,2),j([M()],J.prototype,`autocorrect`,2),j([M()],J.prototype,`autocomplete`,2),j([M({type:Boolean})],J.prototype,`autofocus`,2),j([M()],J.prototype,`enterkeyhint`,2),j([M({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],J.prototype,`spellcheck`,2),j([M()],J.prototype,`inputmode`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],J.prototype,`handleDisabledChange`,1),j([R(`step`,{waitUntilFirstUpdate:!0})],J.prototype,`handleStepChange`,1),j([R(`value`,{waitUntilFirstUpdate:!0})],J.prototype,`handleValueChange`,1),J.define(`sl-input`),L({tagName:`sl-input`,elementClass:J,react:v,events:{onSlBlur:`sl-blur`,onSlChange:`sl-change`,onSlClear:`sl-clear`,onSlFocus:`sl-focus`,onSlInput:`sl-input`,onSlInvalid:`sl-invalid`},displayName:`SlInput`});var Al=O`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,jl=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),jl(e,t);return!0},Ml=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Nl=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Il(t)}};function Pl(e){this._$AN===void 0?this._$AM=e:(Ml(this),this._$AM=e,Nl(this))}function Fl(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)jl(r[e],!1),Ml(r[e]);else r!=null&&(jl(r,!1),Ml(r))}else jl(this,e)}}var Il=e=>{e.type==ma.CHILD&&(e._$AP??=Fl,e._$AQ??=Pl)},Ll=class extends ga{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Nl(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(jl(this,e),Ml(this))}setValue(e){if(sa(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Y=()=>new X,X=class{},Rl=new WeakMap,zl=ha(class extends Ll{render(e){return Qr}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Qr}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Rl.get(t);n===void 0&&(n=new WeakMap,Rl.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?Rl.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Bl=class{constructor(e,t){this.popupRef=Y(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty(`--safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--safe-triangle-cursor-y`,`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e)}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`sl-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`sl-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-y`,`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`sl-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?k`
      <sl-popup
        ${zl(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:k` <slot name="submenu" hidden></slot> `}},Vl=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.type=`normal`,this.checked=!1,this.value=``,this.loading=!1,this.disabled=!1,this.hasSlotController=new U(this,`submenu`),this.submenuController=new Bl(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(this.cachedTextLabel===void 0){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return uo(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return k`
      <div
        id="anchor"
        part="base"
        class=${B({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?k` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:``}
      </div>
    `}};Vl.styles=[A,Al],Vl.dependencies={"sl-icon":z,"sl-popup":G,"sl-spinner":Tc},j([F(`slot:not([name])`)],Vl.prototype,`defaultSlot`,2),j([F(`.menu-item`)],Vl.prototype,`menuItem`,2),j([M()],Vl.prototype,`type`,2),j([M({type:Boolean,reflect:!0})],Vl.prototype,`checked`,2),j([M()],Vl.prototype,`value`,2),j([M({type:Boolean,reflect:!0})],Vl.prototype,`loading`,2),j([M({type:Boolean,reflect:!0})],Vl.prototype,`disabled`,2),j([R(`checked`)],Vl.prototype,`handleCheckedChange`,1),j([R(`disabled`)],Vl.prototype,`handleDisabledChange`,1),j([R(`type`)],Vl.prototype,`handleTypeChange`,1),Vl.define(`sl-menu-item`),L({tagName:`sl-menu-item`,elementClass:Vl,react:v,events:{},displayName:`SlMenuItem`});var Hl=O`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ul=class extends I{render(){return k` <slot part="base" class="menu-label"></slot> `}};Ul.styles=[A,Hl],Ul.define(`sl-menu-label`),L({tagName:`sl-menu-label`,elementClass:Ul,react:v,events:{},displayName:`SlMenuLabel`});var Wl=O`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Gl=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value=``,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`sl-select`).then(()=>{let e=this.closest(`sl-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replace(/ /g,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return k`
      <div
        part="base"
        class=${B({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Gl.styles=[A,Wl],Gl.dependencies={"sl-icon":z},j([F(`.option__label`)],Gl.prototype,`defaultSlot`,2),j([N()],Gl.prototype,`current`,2),j([N()],Gl.prototype,`selected`,2),j([N()],Gl.prototype,`hasHover`,2),j([M({reflect:!0})],Gl.prototype,`value`,2),j([M({type:Boolean,reflect:!0})],Gl.prototype,`disabled`,2),j([R(`disabled`)],Gl.prototype,`handleDisabledChange`,1),j([R(`selected`)],Gl.prototype,`handleSelectedChange`,1),j([R(`value`)],Gl.prototype,`handleValueChange`,1),Gl.define(`sl-option`),L({tagName:`sl-option`,elementClass:Gl,react:v,events:{},displayName:`SlOption`}),G.define(`sl-popup`),L({tagName:`sl-popup`,elementClass:G,react:v,events:{onSlReposition:`sl-reposition`},displayName:`SlPopup`});var Kl=O`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,ql=class extends I{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}};ql.styles=[A,Kl],j([M({type:Boolean,reflect:!0})],ql.prototype,`vertical`,2),j([R(`vertical`)],ql.prototype,`handleVerticalChange`,1),ql.define(`sl-divider`),L({tagName:`sl-divider`,elementClass:ql,react:v,events:{},displayName:`SlDivider`});var Jl=O`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Yl(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Ii(Yl(e.shadowRoot.activeElement))))}function Xl(){return[...Yl()].pop()}var Zl=new WeakMap;function Ql(e){let t=Zl.get(e);return t||(t=window.getComputedStyle(e,null),Zl.set(e,t)),t}function $l(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=Ql(e);return t.visibility!==`hidden`&&t.display!==`none`}function eu(e){let{overflowY:t,overflowX:n}=Ql(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function tu(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return $l(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:eu(e):!1}function nu(e){let t=iu(e);return{start:t[0]??null,end:t[t.length-1]??null}}function ru(e,t){return e.getRootNode({composed:!0})?.host!==t}function iu(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),!n.includes(i)&&tu(i)&&n.push(i),i instanceof HTMLSlotElement&&ru(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var au=[],ou=class{constructor(e){this.tabDirection=`forward`,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if(e.key!==`Tab`||this.isExternalActivated||!this.isActive())return;let n=Xl();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;this.tabDirection=e.shiftKey?`backward`:`forward`;let r=iu(this.element),i=r.findIndex(e=>e===n);this.previousFocus=this.currentFocus;let a=this.tabDirection===`forward`?1:-1;for(;;){i+a>=r.length?i=0:i+a<0?i=r.length-1:i+=a,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection===`backward`&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(t=this.currentFocus)==null||t.focus({preventScroll:!1});let o=[...Yl()];if(o.includes(this.currentFocus)||!o.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection=`forward`},this.element=e,this.elementsWithTabbableControls=[`iframe`]}activate(){au.push(this.element),document.addEventListener(`focusin`,this.handleFocusIn),document.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keyup`,this.handleKeyUp)}deactivate(){au=au.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener(`focusin`,this.handleFocusIn),document.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keyup`,this.handleKeyUp)}isActive(){return au[au.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=iu(this.element);if(!this.element.matches(`:focus-within`)){let t=e[0],n=e[e.length-1],r=this.tabDirection===`forward`?t:n;typeof r?.focus==`function`&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute(`controls`)}},su=e=>{var t;let{activeElement:n}=document;n&&e.contains(n)&&((t=document.activeElement)==null||t.blur())};function cu(e){return e.charAt(0).toUpperCase()+e.slice(1)}var lu=class extends I{constructor(){super(...arguments),this.hasSlotController=new U(this,`footer`),this.localize=new H(this),this.modal=new ou(this),this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ua(this)))}disconnectedCallback(){super.disconnectedCallback(),Wa(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=pc(this,`drawer.denyClose`,{dir:this.localize.dir()});hc(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener(`keydown`,this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ua(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([vc(this.drawer),vc(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=pc(this,`drawer.show${cu(this.placement)}`,{dir:this.localize.dir()}),n=pc(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([hc(this.panel,t.keyframes,t.options),hc(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{su(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Wa(this)),await Promise.all([vc(this.drawer),vc(this.overlay)]);let e=pc(this,`drawer.hide${cu(this.placement)}`,{dir:this.localize.dir()}),t=pc(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([hc(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),hc(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ua(this)),this.open&&this.contained&&(this.modal.deactivate(),Wa(this))}async show(){if(!this.open)return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,mc(this,`sl-after-hide`)}render(){return k`
      <div
        part="base"
        class=${B({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement===`top`,"drawer--end":this.placement===`end`,"drawer--bottom":this.placement===`bottom`,"drawer--start":this.placement===`start`,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()===`rtl`,"drawer--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${V(this.noHeader?this.label:void 0)}
          aria-labelledby=${V(this.noHeader?void 0:`title`)}
          tabindex="0"
        >
          ${this.noHeader?``:k`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click=${()=>this.requestClose(`close-button`)}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};lu.styles=[A,Jl],lu.dependencies={"sl-icon-button":Sa},j([F(`.drawer`)],lu.prototype,`drawer`,2),j([F(`.drawer__panel`)],lu.prototype,`panel`,2),j([F(`.drawer__overlay`)],lu.prototype,`overlay`,2),j([M({type:Boolean,reflect:!0})],lu.prototype,`open`,2),j([M({reflect:!0})],lu.prototype,`label`,2),j([M({reflect:!0})],lu.prototype,`placement`,2),j([M({type:Boolean,reflect:!0})],lu.prototype,`contained`,2),j([M({attribute:`no-header`,type:Boolean,reflect:!0})],lu.prototype,`noHeader`,2),j([R(`open`,{waitUntilFirstUpdate:!0})],lu.prototype,`handleOpenChange`,1),j([R(`contained`,{waitUntilFirstUpdate:!0})],lu.prototype,`handleNoModalChange`,1),K(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),K(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),K(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),K(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),K(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),K(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),K(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),K(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),K(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),K(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),K(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),lu.define(`sl-drawer`),L({tagName:`sl-drawer`,elementClass:lu,react:v,events:{onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`,onSlInitialFocus:`sl-initial-focus`,onSlRequestClose:`sl-request-close`},displayName:`SlDrawer`});var uu=O`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,du=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`sl-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?Xl():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`sl-menu`&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`sl-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>nu(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`sl-button`:case`sl-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,mc(this,`sl-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener(`sl-select`,this.handlePanelSelect),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener(`sl-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`sl-show`),this.addOpenListeners(),await vc(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=pc(this,`dropdown.show`,{dir:this.localize.dir()});await hc(this.popup.popup,e,t),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await vc(this);let{keyframes:e,options:t}=pc(this,`dropdown.hide`,{dir:this.localize.dir()});await hc(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}render(){return k`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${V(this.sync?this.sync:void 0)}
        class=${B({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};du.styles=[A,uu],du.dependencies={"sl-popup":G},j([F(`.dropdown`)],du.prototype,`popup`,2),j([F(`.dropdown__trigger`)],du.prototype,`trigger`,2),j([F(`.dropdown__panel`)],du.prototype,`panel`,2),j([M({type:Boolean,reflect:!0})],du.prototype,`open`,2),j([M({reflect:!0})],du.prototype,`placement`,2),j([M({type:Boolean,reflect:!0})],du.prototype,`disabled`,2),j([M({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],du.prototype,`stayOpenOnSelect`,2),j([M({attribute:!1})],du.prototype,`containingElement`,2),j([M({type:Number})],du.prototype,`distance`,2),j([M({type:Number})],du.prototype,`skidding`,2),j([M({type:Boolean})],du.prototype,`hoist`,2),j([M({reflect:!0})],du.prototype,`sync`,2),j([R(`open`,{waitUntilFirstUpdate:!0})],du.prototype,`handleOpenChange`,1),K(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),K(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),du.define(`sl-dropdown`),L({tagName:`sl-dropdown`,elementClass:du,react:v,events:{onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`},displayName:`SlDropdown`});var fu=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.date=new Date,this.hourFormat=`auto`}render(){let e=new Date(this.date),t=this.hourFormat===`auto`?void 0:this.hourFormat===`12`;if(!isNaN(e.getMilliseconds()))return k`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};j([M()],fu.prototype,`date`,2),j([M()],fu.prototype,`weekday`,2),j([M()],fu.prototype,`era`,2),j([M()],fu.prototype,`year`,2),j([M()],fu.prototype,`month`,2),j([M()],fu.prototype,`day`,2),j([M()],fu.prototype,`hour`,2),j([M()],fu.prototype,`minute`,2),j([M()],fu.prototype,`second`,2),j([M({attribute:`time-zone-name`})],fu.prototype,`timeZoneName`,2),j([M({attribute:`time-zone`})],fu.prototype,`timeZone`,2),j([M({attribute:`hour-format`})],fu.prototype,`hourFormat`,2),fu.define(`sl-format-date`),L({tagName:`sl-format-date`,elementClass:fu,react:v,events:{},displayName:`SlFormatDate`});var pu=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.unit=`byte`,this.display=`short`}render(){if(isNaN(this.value))return``;let e=this.unit===`bit`?[``,`kilo`,`mega`,`giga`,`tera`]:[``,`kilo`,`mega`,`giga`,`tera`,`peta`],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),n=e[t]+this.unit,r=parseFloat((this.value/1e3**t).toPrecision(3));return this.localize.number(r,{style:`unit`,unit:n,unitDisplay:this.display})}};j([M({type:Number})],pu.prototype,`value`,2),j([M()],pu.prototype,`unit`,2),j([M()],pu.prototype,`display`,2),pu.define(`sl-format-bytes`),L({tagName:`sl-format-bytes`,elementClass:pu,react:v,events:{},displayName:`SlFormatBytes`});var mu=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.type=`decimal`,this.noGrouping=!1,this.currency=`USD`,this.currencyDisplay=`symbol`}render(){return isNaN(this.value)?``:this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};j([M({type:Number})],mu.prototype,`value`,2),j([M()],mu.prototype,`type`,2),j([M({attribute:`no-grouping`,type:Boolean})],mu.prototype,`noGrouping`,2),j([M()],mu.prototype,`currency`,2),j([M({attribute:`currency-display`})],mu.prototype,`currencyDisplay`,2),j([M({attribute:`minimum-integer-digits`,type:Number})],mu.prototype,`minimumIntegerDigits`,2),j([M({attribute:`minimum-fraction-digits`,type:Number})],mu.prototype,`minimumFractionDigits`,2),j([M({attribute:`maximum-fraction-digits`,type:Number})],mu.prototype,`maximumFractionDigits`,2),j([M({attribute:`minimum-significant-digits`,type:Number})],mu.prototype,`minimumSignificantDigits`,2),j([M({attribute:`maximum-significant-digits`,type:Number})],mu.prototype,`maximumSignificantDigits`,2),mu.define(`sl-format-number`),L({tagName:`sl-format-number`,elementClass:mu,react:v,events:{},displayName:`SlFormatNumber`}),z.define(`sl-icon`),L({tagName:`sl-icon`,elementClass:z,react:v,events:{onSlLoad:`sl-load`,onSlError:`sl-error`},displayName:`SlIcon`}),Sa.define(`sl-icon-button`),L({tagName:`sl-icon-button`,elementClass:Sa,react:v,events:{onSlBlur:`sl-blur`,onSlFocus:`sl-focus`},displayName:`SlIconButton`}),vl.define(`sl-button-group`),L({tagName:`sl-button-group`,elementClass:vl,react:v,events:{},displayName:`SlButtonGroup`});var hu=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener(`mouseenter`,this.pause),this.host.addEventListener(`mouseleave`,this.resume),this.host.addEventListener(`focusin`,this.pause),this.host.addEventListener(`focusout`,this.resume),this.host.addEventListener(`touchstart`,this.pause,{passive:!0}),this.host.addEventListener(`touchend`,this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener(`mouseenter`,this.pause),this.host.removeEventListener(`mouseleave`,this.resume),this.host.removeEventListener(`focusin`,this.pause),this.host.removeEventListener(`focusout`,this.resume),this.host.removeEventListener(`touchstart`,this.pause),this.host.removeEventListener(`touchend`,this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},gu=O`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*_u(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function*vu(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var yu=class extends I{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation=`horizontal`,this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new hu(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new H(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty(`scroll-snap-type`,`none`),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:`instant`})},this.handleMouseDragEnd=()=>{let e=this.scrollContainer;document.removeEventListener(`pointermove`,this.handleMouseDrag,{capture:!0});let t=e.scrollLeft,n=e.scrollTop;e.style.removeProperty(`scroll-snap-type`),e.style.setProperty(`overflow`,`hidden`);let r=e.scrollLeft,i=e.scrollTop;e.style.removeProperty(`overflow`),e.style.setProperty(`scroll-snap-type`,`none`),e.scrollTo({left:t,top:n,behavior:`instant`}),requestAnimationFrame(async()=>{(t!==r||n!==i)&&(e.scrollTo({left:r,top:i,behavior:_c()?`auto`:`smooth`}),await mc(e,`scrollend`)),e.style.removeProperty(`scroll-snap-type`),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(e=>[...e.addedNodes,...e.removedNodes].some(e=>this.isCarouselItem(e)&&!e.hasAttribute(`data-clone`)))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,this.localize.term(`carousel`))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has(`slidesPerMove`)||e.has(`slidesPerPage`))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:n,loop:r}=this,i=r?e/n:(e-t)/n+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute(`data-clone`)))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let t=Math.abs(this.dragStartPosition[0]-e.clientX),n=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+n*n)>=10&&e.preventDefault()}}handleKeyDown(e){if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=e.target,n=this.localize.dir()===`rtl`,r=t.closest(`[part~="pagination-item"]`)!==null,i=e.key===`ArrowDown`||!n&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`,a=e.key===`ArrowUp`||!n&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`;e.preventDefault(),a&&this.previous(),i&&this.next(),e.key===`Home`&&this.goToSlide(0),e.key===`End`&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`[part~="pagination-item--active"]`);e&&e.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener(`pointermove`,this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener(`pointerup`,this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let e=new IntersectionObserver(t=>{e.disconnect();for(let e of t){let t=e.target;t.toggleAttribute(`inert`,!e.isIntersecting),t.classList.toggle(`--in-view`,e.isIntersecting),t.setAttribute(`aria-hidden`,e.isIntersecting?`false`:`true`)}let n=t.find(e=>e.isIntersecting);if(!n)return;let r=this.getSlides({excludeClones:!1}),i=this.getSlides().length,a=r.indexOf(n.target),o=this.loop?a-this.slidesPerPage:a;if(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&n.target.hasAttribute(`data-clone`)){let e=Number(n.target.getAttribute(`data-clone`));this.goToSlide(e,`instant`)}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()===`sl-carousel-item`}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove(`--in-view`),e.classList.remove(`--is-active`),e.setAttribute(`role`,`group`),e.setAttribute(`aria-label`,this.localize.term(`slideNum`,t+1)),this.pagination&&(e.setAttribute(`id`,`slide-${t+1}`),e.setAttribute(`role`,`tabpanel`),e.removeAttribute(`aria-label`),e.setAttribute(`aria-labelledby`,`tab-${t+1}`)),e.hasAttribute(`data-clone`)&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,`auto`),this.synchronizeSlides()}createClones(){let e=this.getSlides(),t=this.slidesPerPage,n=e.slice(-t),r=e.slice(0,t);n.reverse().forEach((t,n)=>{let r=t.cloneNode(!0);r.setAttribute(`data-clone`,String(e.length-n-1)),this.prepend(r)}),r.forEach((e,t)=>{let n=e.cloneNode(!0);n.setAttribute(`data-clone`,String(t)),this.append(n)})}handleSlideChange(){let e=this.getSlides();e.forEach((e,t)=>{e.classList.toggle(`--is-active`,t===this.activeSlide)}),this.hasUpdated&&this.emit(`sl-slide-change`,{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){let e=this.getSlides(),t=this.slidesPerMove;e.forEach((e,n)=>{(n+t)%t===0?e.style.removeProperty(`scroll-snap-align`):e.style.setProperty(`scroll-snap-align`,`none`)})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e=`smooth`){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e=`smooth`){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t=`smooth`){let{slidesPerPage:n,loop:r}=this,i=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!i.length)return;let o=r?(e+i.length)%i.length:Ac(e,0,i.length-n);this.activeSlide=o;let s=this.localize.dir()===`rtl`,c=a[Ac(e+(r?n:0)+(s?n-1:0),0,a.length-1)];this.scrollToSlide(c,_c()?`auto`:t)}scrollToSlide(e,t=`smooth`){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let n=this.scrollContainer,r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),a=i.left-r.left,o=i.top-r.top;a||o?(this.pendingSlideChange=!0,n.scrollTo({left:a+n.scrollLeft,top:o+n.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:e,scrolling:t}=this,n=this.getPageCount(),r=this.getCurrentPage(),i=this.canScrollPrev(),a=this.canScrollNext(),o=this.localize.dir()===`ltr`;return k`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${B({carousel__slides:!0,"carousel__slides--horizontal":this.orientation===`horizontal`,"carousel__slides--vertical":this.orientation===`vertical`,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?`true`:`false`}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?k`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${B({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term(`previousSlide`)}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?`false`:`true`}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${o?`chevron-left`:`chevron-right`}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${B({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term(`nextSlide`)}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?`false`:`true`}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${o?`chevron-right`:`chevron-left`}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:``}
        ${this.pagination?k`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${_u(vu(n),t=>{let i=t===r;return k`
                    <button
                      part="pagination-item ${i?`pagination-item--active`:``}"
                      class="${B({"carousel__pagination-item":!0,"carousel__pagination-item--active":i})}"
                      role="tab"
                      id="tab-${t+1}"
                      aria-controls="slide-${t+1}"
                      aria-selected="${i?`true`:`false`}"
                      aria-label="${i?this.localize.term(`slideNum`,t+1):this.localize.term(`goToSlide`,t+1,n)}"
                      tabindex=${i?`0`:`-1`}
                      @click=${()=>this.goToSlide(t*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:``}
      </div>
    `}};yu.styles=[A,gu],yu.dependencies={"sl-icon":z},j([M({type:Boolean,reflect:!0})],yu.prototype,`loop`,2),j([M({type:Boolean,reflect:!0})],yu.prototype,`navigation`,2),j([M({type:Boolean,reflect:!0})],yu.prototype,`pagination`,2),j([M({type:Boolean,reflect:!0})],yu.prototype,`autoplay`,2),j([M({type:Number,attribute:`autoplay-interval`})],yu.prototype,`autoplayInterval`,2),j([M({type:Number,attribute:`slides-per-page`})],yu.prototype,`slidesPerPage`,2),j([M({type:Number,attribute:`slides-per-move`})],yu.prototype,`slidesPerMove`,2),j([M()],yu.prototype,`orientation`,2),j([M({type:Boolean,reflect:!0,attribute:`mouse-dragging`})],yu.prototype,`mouseDragging`,2),j([F(`.carousel__slides`)],yu.prototype,`scrollContainer`,2),j([F(`.carousel__pagination`)],yu.prototype,`paginationContainer`,2),j([N()],yu.prototype,`activeSlide`,2),j([N()],yu.prototype,`scrolling`,2),j([N()],yu.prototype,`dragging`,2),j([zi({passive:!0})],yu.prototype,`handleScroll`,1),j([R(`loop`,{waitUntilFirstUpdate:!0}),R(`slidesPerPage`,{waitUntilFirstUpdate:!0})],yu.prototype,`initializeSlides`,1),j([R(`activeSlide`)],yu.prototype,`handleSlideChange`,1),j([R(`slidesPerMove`)],yu.prototype,`updateSlidesSnap`,1),j([R(`autoplay`)],yu.prototype,`handleAutoplayChange`,1),yu.define(`sl-carousel`),L({tagName:`sl-carousel`,elementClass:yu,react:v,events:{onSlSlideChange:`sl-slide-change`},displayName:`SlCarousel`});var bu=O`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,xu=class extends I{connectedCallback(){super.connectedCallback()}render(){return k` <slot></slot> `}};xu.styles=[A,bu],xu.define(`sl-carousel-item`),L({tagName:`sl-carousel-item`,elementClass:xu,react:v,events:{},displayName:`SlCarouselItem`}),Cc.define(`sl-checkbox`),L({tagName:`sl-checkbox`,elementClass:Cc,react:v,events:{onSlBlur:`sl-blur`,onSlChange:`sl-change`,onSlFocus:`sl-focus`,onSlInput:`sl-input`,onSlInvalid:`sl-invalid`},displayName:`SlCheckbox`});var Su=O`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Z=class extends I{constructor(){super(...arguments),this.formControlController=new oo(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new U(this,`[default]`,`prefix`,`suffix`),this.localize=new H(this),this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`default`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}get validity(){return this.isButton()?this.button.validity:so}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?ya`a`:ya`button`;return xa`
      <${t}
        part="base"
        class=${B({button:!0,"button--default":this.variant==="default","button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:this.type)}
        title=${this.title}
        name=${V(e?void 0:this.name)}
        value=${V(e?void 0:this.value)}
        href=${V(e&&!this.disabled?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e?this.rel:void 0)}
        role=${V(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?xa` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:``}
        ${this.loading?xa`<sl-spinner part="spinner"></sl-spinner>`:``}
      </${t}>
    `}};Z.styles=[A,ll],Z.dependencies={"sl-icon":z,"sl-spinner":Tc},j([F(`.button`)],Z.prototype,`button`,2),j([N()],Z.prototype,`hasFocus`,2),j([N()],Z.prototype,`invalid`,2),j([M()],Z.prototype,`title`,2),j([M({reflect:!0})],Z.prototype,`variant`,2),j([M({reflect:!0})],Z.prototype,`size`,2),j([M({type:Boolean,reflect:!0})],Z.prototype,`caret`,2),j([M({type:Boolean,reflect:!0})],Z.prototype,`disabled`,2),j([M({type:Boolean,reflect:!0})],Z.prototype,`loading`,2),j([M({type:Boolean,reflect:!0})],Z.prototype,`outline`,2),j([M({type:Boolean,reflect:!0})],Z.prototype,`pill`,2),j([M({type:Boolean,reflect:!0})],Z.prototype,`circle`,2),j([M()],Z.prototype,`type`,2),j([M()],Z.prototype,`name`,2),j([M()],Z.prototype,`value`,2),j([M()],Z.prototype,`href`,2),j([M()],Z.prototype,`target`,2),j([M()],Z.prototype,`rel`,2),j([M()],Z.prototype,`download`,2),j([M()],Z.prototype,`form`,2),j([M({attribute:`formaction`})],Z.prototype,`formAction`,2),j([M({attribute:`formenctype`})],Z.prototype,`formEnctype`,2),j([M({attribute:`formmethod`})],Z.prototype,`formMethod`,2),j([M({attribute:`formnovalidate`,type:Boolean})],Z.prototype,`formNoValidate`,2),j([M({attribute:`formtarget`})],Z.prototype,`formTarget`,2),j([R(`disabled`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleDisabledChange`,1);function Cu(e,t){Tu(e)&&(e=`100%`);let n=Eu(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function wu(e){return Math.min(1,Math.max(0,e))}function Tu(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function Eu(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function Du(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ou(e){return Number(e)<=1?`${Number(e)*100}%`:e}function ku(e){return e.length===1?`0`+e:String(e)}function Au(e,t,n){return{r:Cu(e,255)*255,g:Cu(t,255)*255,b:Cu(n,255)*255}}function ju(e,t,n){e=Cu(e,255),t=Cu(t,255),n=Cu(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4}a/=6}return{h:a,s:o,l:s}}function Mu(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Nu(e,t,n){let r,i,a;if(e=Cu(e,360),t=Cu(t,100),n=Cu(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=Mu(s,o,e+1/3),i=Mu(s,o,e),a=Mu(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function Pu(e,t,n){e=Cu(e,255),t=Cu(t,255),n=Cu(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4}a/=6}return{h:a,s:c,v:o}}function Fu(e,t,n){e=Cu(e,360)*6,t=Cu(t,100),n=Cu(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function Iu(e,t,n,r){let i=[ku(Math.round(e).toString(16)),ku(Math.round(t).toString(16)),ku(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function Lu(e,t,n,r,i){let a=[ku(Math.round(e).toString(16)),ku(Math.round(t).toString(16)),ku(Math.round(n).toString(16)),ku(Bu(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function Ru(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function zu(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function Bu(e){return Math.round(parseFloat(e)*255).toString(16)}function Vu(e){return Hu(e)/255}function Hu(e){return parseInt(e,16)}function Uu(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Wu={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function Gu(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=qu(e)),typeof e==`object`&&(Ju(e.r)&&Ju(e.g)&&Ju(e.b)?(t=Au(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):Ju(e.h)&&Ju(e.s)&&Ju(e.v)?(r=Ou(e.s),i=Ou(e.v),t=Fu(e.h,r,i),o=!0,s=`hsv`):Ju(e.h)&&Ju(e.s)&&Ju(e.l)?(r=Ou(e.s),a=Ou(e.l),t=Nu(e.h,r,a),o=!0,s=`hsl`):Ju(e.c)&&Ju(e.m)&&Ju(e.y)&&Ju(e.k)&&(t=Ru(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=Du(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var Ku={CSS_UNIT:RegExp(`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`),rgb:RegExp(`rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),rgba:RegExp(`rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),hsl:RegExp(`hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),hsla:RegExp(`hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),hsv:RegExp(`hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),hsva:RegExp(`hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),cmyk:RegExp(`cmyk[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function qu(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Wu[e])e=Wu[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=Ku.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=Ku.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Ku.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=Ku.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Ku.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=Ku.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Ku.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=Ku.hex8.exec(e),n?{r:Hu(n[1]),g:Hu(n[2]),b:Hu(n[3]),a:Vu(n[4]),format:t?`name`:`hex8`}:(n=Ku.hex6.exec(e),n?{r:Hu(n[1]),g:Hu(n[2]),b:Hu(n[3]),format:t?`name`:`hex`}:(n=Ku.hex4.exec(e),n?{r:Hu(n[1]+n[1]),g:Hu(n[2]+n[2]),b:Hu(n[3]+n[3]),a:Vu(n[4]+n[4]),format:t?`name`:`hex8`}:(n=Ku.hex3.exec(e),n?{r:Hu(n[1]+n[1]),g:Hu(n[2]+n[2]),b:Hu(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function Ju(e){return typeof e==`number`?!Number.isNaN(e):Ku.CSS_UNIT.test(e)}var Yu=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=Uu(t)),this.originalInput=t;let r=Gu(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Du(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Pu(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Pu(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=ju(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=ju(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Iu(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return Lu(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(Cu(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(Cu(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...zu(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=zu(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+Iu(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(Wu))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=wu(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=wu(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=wu(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=wu(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100,o={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return new e(o)}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}},Xu=`EyeDropper`in window,Q=class extends I{constructor(){super(),this.formControlController=new oo(this),this.isSafeValue=!1,this.localize=new H(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue=``,this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value=``,this.defaultValue=``,this.label=``,this.format=`hex`,this.inline=!1,this.size=`medium`,this.noFormatToggle=!1,this.name=``,this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.form=``,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit(`sl-focus`)},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit(`sl-blur`)},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`color-picker__preview-color--copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`color-picker__preview-color--copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit(`sl-change`),this.emit(`sl-input`)}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__slider.color-picker__alpha`),n=t.querySelector(`.color-picker__slider-handle`),{width:r}=t.getBoundingClientRect(),i=this.value,a=this.value;n.focus(),e.preventDefault(),Yc(t,{onMove:e=>{this.alpha=Ac(e/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit(`sl-input`))},onStop:()=>{this.value!==i&&(i=this.value,this.emit(`sl-change`))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__slider.color-picker__hue`),n=t.querySelector(`.color-picker__slider-handle`),{width:r}=t.getBoundingClientRect(),i=this.value,a=this.value;n.focus(),e.preventDefault(),Yc(t,{onMove:e=>{this.hue=Ac(e/r*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit(`sl-input`))},onStop:()=>{this.value!==i&&(i=this.value,this.emit(`sl-change`))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__grid`),n=t.querySelector(`.color-picker__grid-handle`),{width:r,height:i}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Yc(t,{onMove:(e,t)=>{this.saturation=Ac(e/r*100,0,100),this.brightness=Ac(100-t/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit(`sl-input`))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit(`sl-change`))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=Ac(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=Ac(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=Ac(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=Ac(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=Ac(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=Ac(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=Ac(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=Ac(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value=``,this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit(`sl-change`),this.emit(`sl-input`)),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){let t=new Yu(e);if(!t.isValid)return null;let n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},i=t.toRgb(),a=t.toHexString(),o=t.toHex8String(),s=t.toHsv(),c={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(o)}}setColor(e){let t=this.parseColor(e);return t!==null&&(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.inputValue=this.format===`hsl`?this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.opacity?e.hsva.string:e.hsv.string:this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`color-picker__preview-color--copied`)}handleEyeDropper(){Xu&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&(this.emit(`sl-change`),this.emit(`sl-input`))}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit(`sl-change`),this.emit(`sl-input`)))}getHexString(e,t,n,r=100){let i=new Yu(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues())}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.dropdown?.open&&this.dropdown.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener(`sl-after-show`,()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(`;`).filter(e=>e.trim()!==``),r=k`
      <div
        part="base"
        class=${B({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-labelledby="label"
        tabindex=${this.inline?`0`:`-1`}
      >
        ${this.inline?k`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ic({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${B({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ic({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${V(this.disabled?void 0:`0`)}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Ic({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${V(this.disabled?void 0:`0`)}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?k`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ic({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ic({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${V(this.disabled?void 0:`0`)}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:``}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term(`copy`)}
            style=${Ic({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?``:this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`currentValue`)}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?``:k`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term(`toggleColorFormat`)}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Xu?k`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term(`selectAColorFromTheScreen`)}
                    ></sl-icon>
                  </sl-button>
                `:``}
          </sl-button-group>
        </div>

        ${n.length>0?k`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(e=>{let t=this.parseColor(e);return t?k`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${V(this.disabled?void 0:`0`)}
                      role="button"
                      aria-label=${e}
                      @click=${()=>this.selectSwatch(e)}
                      @keydown=${e=>!this.disabled&&e.key===`Enter`&&this.setColor(t.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ic({backgroundColor:t.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${e}"`,this),``)})}
              </div>
            `:``}
      </div>
    `;return this.inline?r:k`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?`true`:`false`}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${B({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size===`small`,"color-dropdown__trigger--medium":this.size===`medium`,"color-dropdown__trigger--large":this.size===`large`,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Ic({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};Q.styles=[A,Su],Q.dependencies={"sl-button-group":vl,"sl-button":Z,"sl-dropdown":du,"sl-icon":z,"sl-input":J,"sl-visually-hidden":Hi},j([F(`[part~="base"]`)],Q.prototype,`base`,2),j([F(`[part~="input"]`)],Q.prototype,`input`,2),j([F(`.color-dropdown`)],Q.prototype,`dropdown`,2),j([F(`[part~="preview"]`)],Q.prototype,`previewButton`,2),j([F(`[part~="trigger"]`)],Q.prototype,`trigger`,2),j([N()],Q.prototype,`hasFocus`,2),j([N()],Q.prototype,`isDraggingGridHandle`,2),j([N()],Q.prototype,`isEmpty`,2),j([N()],Q.prototype,`inputValue`,2),j([N()],Q.prototype,`hue`,2),j([N()],Q.prototype,`saturation`,2),j([N()],Q.prototype,`brightness`,2),j([N()],Q.prototype,`alpha`,2),j([M()],Q.prototype,`value`,2),j([$a()],Q.prototype,`defaultValue`,2),j([M()],Q.prototype,`label`,2),j([M()],Q.prototype,`format`,2),j([M({type:Boolean,reflect:!0})],Q.prototype,`inline`,2),j([M({reflect:!0})],Q.prototype,`size`,2),j([M({attribute:`no-format-toggle`,type:Boolean})],Q.prototype,`noFormatToggle`,2),j([M()],Q.prototype,`name`,2),j([M({type:Boolean,reflect:!0})],Q.prototype,`disabled`,2),j([M({type:Boolean})],Q.prototype,`hoist`,2),j([M({type:Boolean})],Q.prototype,`opacity`,2),j([M({type:Boolean})],Q.prototype,`uppercase`,2),j([M()],Q.prototype,`swatches`,2),j([M({reflect:!0})],Q.prototype,`form`,2),j([M({type:Boolean,reflect:!0})],Q.prototype,`required`,2),j([zi({passive:!1})],Q.prototype,`handleTouchMove`,1),j([R(`format`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleFormatChange`,1),j([R(`opacity`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleOpacityChange`,1),j([R(`value`)],Q.prototype,`handleValueChange`,1),Q.define(`sl-color-picker`),L({tagName:`sl-color-picker`,elementClass:Q,react:v,events:{onSlBlur:`sl-blur`,onSlChange:`sl-change`,onSlFocus:`sl-focus`,onSlInput:`sl-input`,onSlInvalid:`sl-invalid`},displayName:`SlColorPicker`});var Zu=O`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Qu=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isCopying=!1,this.status=`rest`,this.value=``,this.from=``,this.disabled=!1,this.copyLabel=``,this.successLabel=``,this.errorLabel=``,this.feedbackDuration=1e3,this.tooltipPlacement=`top`,this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){let t=this.getRootNode(),n=this.from.includes(`.`),r=this.from.includes(`[`)&&this.from.includes(`]`),i=this.from,a=``;n?[i,a]=this.from.trim().split(`.`):r&&([i,a]=this.from.trim().replace(/\]$/,``).split(`[`));let o=`getElementById`in t?t.getElementById(i):null;o?e=r?o.getAttribute(a)||``:n?o[a]||``:o.textContent||``:(this.showStatus(`error`),this.emit(`sl-error`))}if(!e)this.showStatus(`error`),this.emit(`sl-error`);else try{await navigator.clipboard.writeText(e),this.showStatus(`success`),this.emit(`sl-copy`,{detail:{value:e}})}catch{this.showStatus(`error`),this.emit(`sl-error`)}}async showStatus(e){let t=this.copyLabel||this.localize.term(`copy`),n=this.successLabel||this.localize.term(`copied`),r=this.errorLabel||this.localize.term(`error`),i=e===`success`?this.successIcon:this.errorIcon,a=pc(this,`copy.in`,{dir:`ltr`}),o=pc(this,`copy.out`,{dir:`ltr`});this.tooltip.content=e===`success`?n:r,await this.copyIcon.animate(o.keyframes,o.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await i.animate(o.keyframes,o.options).finished,i.hidden=!0,this.status=`rest`,this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){let e=this.copyLabel||this.localize.term(`copy`);return k`
      <sl-tooltip
        class=${B({"copy-button":!0,"copy-button--success":this.status===`success`,"copy-button--error":this.status===`error`})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Qu.styles=[A,Zu],Qu.dependencies={"sl-icon":z,"sl-tooltip":bc},j([F(`slot[name="copy-icon"]`)],Qu.prototype,`copyIcon`,2),j([F(`slot[name="success-icon"]`)],Qu.prototype,`successIcon`,2),j([F(`slot[name="error-icon"]`)],Qu.prototype,`errorIcon`,2),j([F(`sl-tooltip`)],Qu.prototype,`tooltip`,2),j([N()],Qu.prototype,`isCopying`,2),j([N()],Qu.prototype,`status`,2),j([M()],Qu.prototype,`value`,2),j([M()],Qu.prototype,`from`,2),j([M({type:Boolean,reflect:!0})],Qu.prototype,`disabled`,2),j([M({attribute:`copy-label`})],Qu.prototype,`copyLabel`,2),j([M({attribute:`success-label`})],Qu.prototype,`successLabel`,2),j([M({attribute:`error-label`})],Qu.prototype,`errorLabel`,2),j([M({attribute:`feedback-duration`,type:Number})],Qu.prototype,`feedbackDuration`,2),j([M({attribute:`tooltip-placement`})],Qu.prototype,`tooltipPlacement`,2),j([M({type:Boolean})],Qu.prototype,`hoist`,2),K(`copy.in`,{keyframes:[{scale:`.25`,opacity:`.25`},{scale:`1`,opacity:`1`}],options:{duration:100}}),K(`copy.out`,{keyframes:[{scale:`1`,opacity:`1`},{scale:`.25`,opacity:`0`}],options:{duration:100}});var $u=`sl-copy-button`;Qu.define(`sl-copy-button`);var ed=L({tagName:$u,elementClass:Qu,react:v,events:{onSlCopy:`sl-copy`,onSlError:`sl-error`},displayName:`SlCopyButton`}),td=O`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,nd=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?`auto`:`0`,this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit(`sl-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await vc(this.body);let{keyframes:e,options:t}=pc(this,`details.show`,{dir:this.localize.dir()});await hc(this.body,yc(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.emit(`sl-after-show`)}else{if(this.emit(`sl-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await vc(this.body);let{keyframes:e,options:t}=pc(this,`details.hide`,{dir:this.localize.dir()});await hc(this.body,yc(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.details.open=!1,this.emit(`sl-after-hide`)}}async show(){if(!(this.open||this.disabled))return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(!(!this.open||this.disabled))return this.open=!1,mc(this,`sl-after-hide`)}render(){let e=this.localize.dir()===`rtl`;return k`
      <details
        part="base"
        class=${B({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="content"
          aria-disabled=${this.disabled?`true`:`false`}
          tabindex=${this.disabled?`-1`:`0`}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};nd.styles=[A,td],nd.dependencies={"sl-icon":z},j([F(`.details`)],nd.prototype,`details`,2),j([F(`.details__header`)],nd.prototype,`header`,2),j([F(`.details__body`)],nd.prototype,`body`,2),j([F(`.details__expand-icon-slot`)],nd.prototype,`expandIconSlot`,2),j([M({type:Boolean,reflect:!0})],nd.prototype,`open`,2),j([M()],nd.prototype,`summary`,2),j([M({type:Boolean,reflect:!0})],nd.prototype,`disabled`,2),j([R(`open`,{waitUntilFirstUpdate:!0})],nd.prototype,`handleOpenChange`,1),K(`details.show`,{keyframes:[{height:`0`,opacity:`0`},{height:`auto`,opacity:`1`}],options:{duration:250,easing:`linear`}}),K(`details.hide`,{keyframes:[{height:`auto`,opacity:`1`},{height:`0`,opacity:`0`}],options:{duration:250,easing:`linear`}}),nd.define(`sl-details`),L({tagName:`sl-details`,elementClass:nd,react:v,events:{onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`},displayName:`SlDetails`});var rd=O`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,id=class extends I{constructor(){super(...arguments),this.hasSlotController=new U(this,`footer`),this.localize=new H(this),this.modal=new ou(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ua(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Wa(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=pc(this,`dialog.denyClose`,{dir:this.localize.dir()});hc(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ua(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([vc(this.dialog),vc(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=pc(this,`dialog.show`,{dir:this.localize.dir()}),n=pc(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([hc(this.panel,t.keyframes,t.options),hc(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{su(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([vc(this.dialog),vc(this.overlay)]);let e=pc(this,`dialog.hide`,{dir:this.localize.dir()}),t=pc(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([hc(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),hc(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Wa(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}async show(){if(!this.open)return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,mc(this,`sl-after-hide`)}render(){return k`
      <div
        part="base"
        class=${B({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${V(this.noHeader?this.label:void 0)}
          aria-labelledby=${V(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:k`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};id.styles=[A,rd],id.dependencies={"sl-icon-button":Sa},j([F(`.dialog`)],id.prototype,`dialog`,2),j([F(`.dialog__panel`)],id.prototype,`panel`,2),j([F(`.dialog__overlay`)],id.prototype,`overlay`,2),j([M({type:Boolean,reflect:!0})],id.prototype,`open`,2),j([M({reflect:!0})],id.prototype,`label`,2),j([M({attribute:`no-header`,type:Boolean,reflect:!0})],id.prototype,`noHeader`,2),j([R(`open`,{waitUntilFirstUpdate:!0})],id.prototype,`handleOpenChange`,1),K(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),K(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),K(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),K(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),K(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),id.define(`sl-dialog`),L({tagName:`sl-dialog`,elementClass:id,react:v,events:{onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`,onSlInitialFocus:`sl-initial-focus`,onSlRequestClose:`sl-request-close`},displayName:`SlDialog`});var ad=O`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,od=class extends I{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let e=document.createElement(`canvas`),{width:t,height:n}=this.animatedImage;e.width=t,e.height=n,e.getContext(`2d`).drawImage(this.animatedImage,0,0,t,n),this.frozenFrame=e.toDataURL(`image/gif`),this.isLoaded||=(this.emit(`sl-load`),!0)}handleError(){this.emit(`sl-error`)}handlePlayChange(){this.play&&(this.animatedImage.src=``,this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return k`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?`false`:`true`}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?k`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?`true`:`false`}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:``}
      </div>
    `}};od.styles=[A,ad],od.dependencies={"sl-icon":z},j([F(`.animated-image__animated`)],od.prototype,`animatedImage`,2),j([N()],od.prototype,`frozenFrame`,2),j([N()],od.prototype,`isLoaded`,2),j([M()],od.prototype,`src`,2),j([M()],od.prototype,`alt`,2),j([M({type:Boolean,reflect:!0})],od.prototype,`play`,2),j([R(`play`,{waitUntilFirstUpdate:!0})],od.prototype,`handlePlayChange`,1),j([R(`src`)],od.prototype,`handleSrcChange`,1),od.define(`sl-animated-image`),L({tagName:`sl-animated-image`,elementClass:od,react:v,events:{onSlLoad:`sl-load`,onSlError:`sl-error`},displayName:`SlAnimatedImage`});var sd=[{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.2,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.4,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -30px, 0) scaleY(1.1)`},{offset:.43,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -30px, 0) scaleY(1.1)`},{offset:.53,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.7,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -15px, 0) scaleY(1.05)`},{offset:.8,"transition-timing-function":`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0) scaleY(0.95)`},{offset:.9,transform:`translate3d(0, -4px, 0) scaleY(1.02)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`}],cd=[{offset:0,opacity:`1`},{offset:.25,opacity:`0`},{offset:.5,opacity:`1`},{offset:.75,opacity:`0`},{offset:1,opacity:`1`}],ld=[{offset:0,transform:`translateX(0)`},{offset:.065,transform:`translateX(-6px) rotateY(-9deg)`},{offset:.185,transform:`translateX(5px) rotateY(7deg)`},{offset:.315,transform:`translateX(-3px) rotateY(-5deg)`},{offset:.435,transform:`translateX(2px) rotateY(3deg)`},{offset:.5,transform:`translateX(0)`}],ud=[{offset:0,transform:`scale(1)`},{offset:.14,transform:`scale(1.3)`},{offset:.28,transform:`scale(1)`},{offset:.42,transform:`scale(1.3)`},{offset:.7,transform:`scale(1)`}],dd=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.111,transform:`translate3d(0, 0, 0)`},{offset:.222,transform:`skewX(-12.5deg) skewY(-12.5deg)`},{offset:.33299999999999996,transform:`skewX(6.25deg) skewY(6.25deg)`},{offset:.444,transform:`skewX(-3.125deg) skewY(-3.125deg)`},{offset:.555,transform:`skewX(1.5625deg) skewY(1.5625deg)`},{offset:.6659999999999999,transform:`skewX(-0.78125deg) skewY(-0.78125deg)`},{offset:.777,transform:`skewX(0.390625deg) skewY(0.390625deg)`},{offset:.888,transform:`skewX(-0.1953125deg) skewY(-0.1953125deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],fd=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.5,transform:`scale3d(1.05, 1.05, 1.05)`},{offset:1,transform:`scale3d(1, 1, 1)`}],pd=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.3,transform:`scale3d(1.25, 0.75, 1)`},{offset:.4,transform:`scale3d(0.75, 1.25, 1)`},{offset:.5,transform:`scale3d(1.15, 0.85, 1)`},{offset:.65,transform:`scale3d(0.95, 1.05, 1)`},{offset:.75,transform:`scale3d(1.05, 0.95, 1)`},{offset:1,transform:`scale3d(1, 1, 1)`}],md=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(-10px, 0, 0)`},{offset:.2,transform:`translate3d(10px, 0, 0)`},{offset:.3,transform:`translate3d(-10px, 0, 0)`},{offset:.4,transform:`translate3d(10px, 0, 0)`},{offset:.5,transform:`translate3d(-10px, 0, 0)`},{offset:.6,transform:`translate3d(10px, 0, 0)`},{offset:.7,transform:`translate3d(-10px, 0, 0)`},{offset:.8,transform:`translate3d(10px, 0, 0)`},{offset:.9,transform:`translate3d(-10px, 0, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],hd=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(-10px, 0, 0)`},{offset:.2,transform:`translate3d(10px, 0, 0)`},{offset:.3,transform:`translate3d(-10px, 0, 0)`},{offset:.4,transform:`translate3d(10px, 0, 0)`},{offset:.5,transform:`translate3d(-10px, 0, 0)`},{offset:.6,transform:`translate3d(10px, 0, 0)`},{offset:.7,transform:`translate3d(-10px, 0, 0)`},{offset:.8,transform:`translate3d(10px, 0, 0)`},{offset:.9,transform:`translate3d(-10px, 0, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],gd=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(0, -10px, 0)`},{offset:.2,transform:`translate3d(0, 10px, 0)`},{offset:.3,transform:`translate3d(0, -10px, 0)`},{offset:.4,transform:`translate3d(0, 10px, 0)`},{offset:.5,transform:`translate3d(0, -10px, 0)`},{offset:.6,transform:`translate3d(0, 10px, 0)`},{offset:.7,transform:`translate3d(0, -10px, 0)`},{offset:.8,transform:`translate3d(0, 10px, 0)`},{offset:.9,transform:`translate3d(0, -10px, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],_d=[{offset:.2,transform:`rotate3d(0, 0, 1, 15deg)`},{offset:.4,transform:`rotate3d(0, 0, 1, -10deg)`},{offset:.6,transform:`rotate3d(0, 0, 1, 5deg)`},{offset:.8,transform:`rotate3d(0, 0, 1, -5deg)`},{offset:1,transform:`rotate3d(0, 0, 1, 0deg)`}],vd=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.1,transform:`scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)`},{offset:.2,transform:`scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)`},{offset:.3,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.4,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.5,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.6,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.7,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.8,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.9,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:1,transform:`scale3d(1, 1, 1)`}],$=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.15,transform:`translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)`},{offset:.3,transform:`translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)`},{offset:.45,transform:`translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)`},{offset:.6,transform:`translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)`},{offset:.75,transform:`translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],yd=[{offset:0,transform:`translateY(-1200px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],bd=[{offset:0,transform:`translateX(-2000px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],xd=[{offset:0,transform:`translateX(2000px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],Sd=[{offset:0,transform:`translateY(1200px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],Cd=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateY(700px) scale(0.7)`,opacity:`0.7`}],wd=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateX(-2000px) scale(0.7)`,opacity:`0.7`}],Td=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateX(2000px) scale(0.7)`,opacity:`0.7`}],Ed=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateY(-700px) scale(0.7)`,opacity:`0.7`}],Dd=[{offset:0,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.2,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:.2,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.4,transform:`scale3d(0.9, 0.9, 0.9)`},{offset:.4,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`scale3d(1.03, 1.03, 1.03)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.8,transform:`scale3d(0.97, 0.97, 0.97)`},{offset:.8,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,opacity:`1`,transform:`scale3d(1, 1, 1)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Od=[{offset:0,opacity:`0`,transform:`translate3d(0, -3000px, 0) scaleY(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(0, 25px, 0) scaleY(0.9)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(0, -10px, 0) scaleY(0.95)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(0, 5px, 0) scaleY(0.985)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],kd=[{offset:0,opacity:`0`,transform:`translate3d(-3000px, 0, 0) scaleX(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(25px, 0, 0) scaleX(1)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(-10px, 0, 0) scaleX(0.98)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(5px, 0, 0) scaleX(0.995)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Ad=[{offset:0,opacity:`0`,transform:`translate3d(3000px, 0, 0) scaleX(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(-25px, 0, 0) scaleX(1)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(10px, 0, 0) scaleX(0.98)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(-5px, 0, 0) scaleX(0.995)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],jd=[{offset:0,opacity:`0`,transform:`translate3d(0, 3000px, 0) scaleY(5)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(0, 10px, 0) scaleY(0.95)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(0, -5px, 0) scaleY(0.985)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Md=[{offset:.2,transform:`scale3d(0.9, 0.9, 0.9)`},{offset:.5,opacity:`1`,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:.55,opacity:`1`,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:1,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`}],Nd=[{offset:.2,transform:`translate3d(0, 10px, 0) scaleY(0.985)`},{offset:.4,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:.45,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(0, 2000px, 0) scaleY(3)`}],Pd=[{offset:.2,opacity:`1`,transform:`translate3d(20px, 0, 0) scaleX(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(-2000px, 0, 0) scaleX(2)`}],Fd=[{offset:.2,opacity:`1`,transform:`translate3d(-20px, 0, 0) scaleX(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(2000px, 0, 0) scaleX(2)`}],Id=[{offset:.2,transform:`translate3d(0, -10px, 0) scaleY(0.985)`},{offset:.4,opacity:`1`,transform:`translate3d(0, 20px, 0) scaleY(0.9)`},{offset:.45,opacity:`1`,transform:`translate3d(0, 20px, 0) scaleY(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(0, -2000px, 0) scaleY(3)`}],Ld=[{offset:0,opacity:`0`},{offset:1,opacity:`1`}],Rd=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],zd=[{offset:0,opacity:`0`,transform:`translate3d(100%, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Bd=[{offset:0,opacity:`0`,transform:`translate3d(0, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Vd=[{offset:0,opacity:`0`,transform:`translate3d(0, -2000px, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Hd=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Ud=[{offset:0,opacity:`0`,transform:`translate3d(-2000px, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Wd=[{offset:0,opacity:`0`,transform:`translate3d(100%, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Gd=[{offset:0,opacity:`0`,transform:`translate3d(2000px, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Kd=[{offset:0,opacity:`0`,transform:`translate3d(-100%, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],qd=[{offset:0,opacity:`0`,transform:`translate3d(100%, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Jd=[{offset:0,opacity:`0`,transform:`translate3d(0, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Yd=[{offset:0,opacity:`0`,transform:`translate3d(0, 2000px, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Xd=[{offset:0,opacity:`1`},{offset:1,opacity:`0`}],Zd=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(-100%, 100%, 0)`}],Qd=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(100%, 100%, 0)`}],$d=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, 100%, 0)`}],ef=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, 2000px, 0)`}],tf=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(-100%, 0, 0)`}],nf=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(-2000px, 0, 0)`}],rf=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(100%, 0, 0)`}],af=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(2000px, 0, 0)`}],of=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(-100%, -100%, 0)`}],sf=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(100%, -100%, 0)`}],cf=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, -100%, 0)`}],lf=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, -2000px, 0)`}],uf=[{offset:0,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)`,easing:`ease-out`},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:`ease-out`},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:`ease-in`},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:`ease-in`},{offset:1,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)`,easing:`ease-in`}],df=[{offset:0,transform:`perspective(400px) rotate3d(1, 0, 0, 90deg)`,easing:`ease-in`,opacity:`0`},{offset:.4,transform:`perspective(400px) rotate3d(1, 0, 0, -20deg)`,easing:`ease-in`},{offset:.6,transform:`perspective(400px) rotate3d(1, 0, 0, 10deg)`,opacity:`1`},{offset:.8,transform:`perspective(400px) rotate3d(1, 0, 0, -5deg)`},{offset:1,transform:`perspective(400px)`}],ff=[{offset:0,transform:`perspective(400px) rotate3d(0, 1, 0, 90deg)`,easing:`ease-in`,opacity:`0`},{offset:.4,transform:`perspective(400px) rotate3d(0, 1, 0, -20deg)`,easing:`ease-in`},{offset:.6,transform:`perspective(400px) rotate3d(0, 1, 0, 10deg)`,opacity:`1`},{offset:.8,transform:`perspective(400px) rotate3d(0, 1, 0, -5deg)`},{offset:1,transform:`perspective(400px)`}],pf=[{offset:0,transform:`perspective(400px)`},{offset:.3,transform:`perspective(400px) rotate3d(1, 0, 0, -20deg)`,opacity:`1`},{offset:1,transform:`perspective(400px) rotate3d(1, 0, 0, 90deg)`,opacity:`0`}],mf=[{offset:0,transform:`perspective(400px)`},{offset:.3,transform:`perspective(400px) rotate3d(0, 1, 0, -15deg)`,opacity:`1`},{offset:1,transform:`perspective(400px) rotate3d(0, 1, 0, 90deg)`,opacity:`0`}],hf=[{offset:0,transform:`translate3d(-100%, 0, 0) skewX(30deg)`,opacity:`0`},{offset:.6,transform:`skewX(-20deg)`,opacity:`1`},{offset:.8,transform:`skewX(5deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],gf=[{offset:0,transform:`translate3d(100%, 0, 0) skewX(-30deg)`,opacity:`0`},{offset:.6,transform:`skewX(20deg)`,opacity:`1`},{offset:.8,transform:`skewX(-5deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],_f=[{offset:0,opacity:`1`},{offset:1,transform:`translate3d(-100%, 0, 0) skewX(-30deg)`,opacity:`0`}],vf=[{offset:0,opacity:`1`},{offset:1,transform:`translate3d(100%, 0, 0) skewX(30deg)`,opacity:`0`}],yf=[{offset:0,transform:`rotate3d(0, 0, 1, -200deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],bf=[{offset:0,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],xf=[{offset:0,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],Sf=[{offset:0,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],Cf=[{offset:0,transform:`rotate3d(0, 0, 1, -90deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],wf=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 200deg)`,opacity:`0`}],Tf=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`}],Ef=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`}],Df=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`}],Of=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 90deg)`,opacity:`0`}],kf=[{offset:0,transform:`translate3d(0, -100%, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Af=[{offset:0,transform:`translate3d(-100%, 0, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],jf=[{offset:0,transform:`translate3d(100%, 0, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Mf=[{offset:0,transform:`translate3d(0, 100%, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Nf=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(0, 100%, 0)`}],Pf=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(-100%, 0, 0)`}],Ff=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(100%, 0, 0)`}],If=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(0, -100%, 0)`}],Lf=[{offset:0,easing:`ease-in-out`},{offset:.2,transform:`rotate3d(0, 0, 1, 80deg)`,easing:`ease-in-out`},{offset:.4,transform:`rotate3d(0, 0, 1, 60deg)`,easing:`ease-in-out`,opacity:`1`},{offset:.6,transform:`rotate3d(0, 0, 1, 80deg)`,easing:`ease-in-out`},{offset:.8,transform:`rotate3d(0, 0, 1, 60deg)`,easing:`ease-in-out`,opacity:`1`},{offset:1,transform:`translate3d(0, 700px, 0)`,opacity:`0`}],Rf=[{offset:0,opacity:`0`,transform:`scale(0.1) rotate(30deg)`,"transform-origin":`center bottom`},{offset:.5,transform:`rotate(-10deg)`},{offset:.7,transform:`rotate(3deg)`},{offset:1,opacity:`1`,transform:`scale(1)`}],zf=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Bf=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)`}],Vf=[{offset:0,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:.5,opacity:`1`}],Hf=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Uf=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Wf=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Gf=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Kf=[{offset:0,opacity:`1`},{offset:.5,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:1,opacity:`0`}],qf=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:1,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Jf=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)`},{offset:1,opacity:`0`,transform:`scale(0.1) translate3d(-2000px, 0, 0)`}],Yf=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)`},{offset:1,opacity:`0`,transform:`scale(0.1) translate3d(2000px, 0, 0)`}],Xf=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:1,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Zf={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,easeInSine:`cubic-bezier(0.47, 0, 0.745, 0.715)`,easeOutSine:`cubic-bezier(0.39, 0.575, 0.565, 1)`,easeInOutSine:`cubic-bezier(0.445, 0.05, 0.55, 0.95)`,easeInQuad:`cubic-bezier(0.55, 0.085, 0.68, 0.53)`,easeOutQuad:`cubic-bezier(0.25, 0.46, 0.45, 0.94)`,easeInOutQuad:`cubic-bezier(0.455, 0.03, 0.515, 0.955)`,easeInCubic:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`,easeOutCubic:`cubic-bezier(0.215, 0.61, 0.355, 1)`,easeInOutCubic:`cubic-bezier(0.645, 0.045, 0.355, 1)`,easeInQuart:`cubic-bezier(0.895, 0.03, 0.685, 0.22)`,easeOutQuart:`cubic-bezier(0.165, 0.84, 0.44, 1)`,easeInOutQuart:`cubic-bezier(0.77, 0, 0.175, 1)`,easeInQuint:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,easeOutQuint:`cubic-bezier(0.23, 1, 0.32, 1)`,easeInOutQuint:`cubic-bezier(0.86, 0, 0.07, 1)`,easeInExpo:`cubic-bezier(0.95, 0.05, 0.795, 0.035)`,easeOutExpo:`cubic-bezier(0.19, 1, 0.22, 1)`,easeInOutExpo:`cubic-bezier(1, 0, 0, 1)`,easeInCirc:`cubic-bezier(0.6, 0.04, 0.98, 0.335)`,easeOutCirc:`cubic-bezier(0.075, 0.82, 0.165, 1)`,easeInOutCirc:`cubic-bezier(0.785, 0.135, 0.15, 0.86)`,easeInBack:`cubic-bezier(0.6, -0.28, 0.735, 0.045)`,easeOutBack:`cubic-bezier(0.175, 0.885, 0.32, 1.275)`,easeInOutBack:`cubic-bezier(0.68, -0.55, 0.265, 1.55)`},Qf=s({backInDown:()=>yd,backInLeft:()=>bd,backInRight:()=>xd,backInUp:()=>Sd,backOutDown:()=>Cd,backOutLeft:()=>wd,backOutRight:()=>Td,backOutUp:()=>Ed,bounce:()=>sd,bounceIn:()=>Dd,bounceInDown:()=>Od,bounceInLeft:()=>kd,bounceInRight:()=>Ad,bounceInUp:()=>jd,bounceOut:()=>Md,bounceOutDown:()=>Nd,bounceOutLeft:()=>Pd,bounceOutRight:()=>Fd,bounceOutUp:()=>Id,easings:()=>Zf,fadeIn:()=>Ld,fadeInBottomLeft:()=>Rd,fadeInBottomRight:()=>zd,fadeInDown:()=>Bd,fadeInDownBig:()=>Vd,fadeInLeft:()=>Hd,fadeInLeftBig:()=>Ud,fadeInRight:()=>Wd,fadeInRightBig:()=>Gd,fadeInTopLeft:()=>Kd,fadeInTopRight:()=>qd,fadeInUp:()=>Jd,fadeInUpBig:()=>Yd,fadeOut:()=>Xd,fadeOutBottomLeft:()=>Zd,fadeOutBottomRight:()=>Qd,fadeOutDown:()=>$d,fadeOutDownBig:()=>ef,fadeOutLeft:()=>tf,fadeOutLeftBig:()=>nf,fadeOutRight:()=>rf,fadeOutRightBig:()=>af,fadeOutTopLeft:()=>of,fadeOutTopRight:()=>sf,fadeOutUp:()=>cf,fadeOutUpBig:()=>lf,flash:()=>cd,flip:()=>uf,flipInX:()=>df,flipInY:()=>ff,flipOutX:()=>pf,flipOutY:()=>mf,headShake:()=>ld,heartBeat:()=>ud,hinge:()=>Lf,jackInTheBox:()=>Rf,jello:()=>dd,lightSpeedInLeft:()=>hf,lightSpeedInRight:()=>gf,lightSpeedOutLeft:()=>_f,lightSpeedOutRight:()=>vf,pulse:()=>fd,rollIn:()=>zf,rollOut:()=>Bf,rotateIn:()=>yf,rotateInDownLeft:()=>bf,rotateInDownRight:()=>xf,rotateInUpLeft:()=>Sf,rotateInUpRight:()=>Cf,rotateOut:()=>wf,rotateOutDownLeft:()=>Tf,rotateOutDownRight:()=>Ef,rotateOutUpLeft:()=>Df,rotateOutUpRight:()=>Of,rubberBand:()=>pd,shake:()=>md,shakeX:()=>hd,shakeY:()=>gd,slideInDown:()=>kf,slideInLeft:()=>Af,slideInRight:()=>jf,slideInUp:()=>Mf,slideOutDown:()=>Nf,slideOutLeft:()=>Pf,slideOutRight:()=>Ff,slideOutUp:()=>If,swing:()=>_d,tada:()=>vd,wobble:()=>$,zoomIn:()=>Vf,zoomInDown:()=>Hf,zoomInLeft:()=>Uf,zoomInRight:()=>Wf,zoomInUp:()=>Gf,zoomOut:()=>Kf,zoomOutDown:()=>qf,zoomOutLeft:()=>Jf,zoomOutRight:()=>Yf,zoomOutUp:()=>Xf}),$f=O`
  :host {
    display: contents;
  }
`,ep=class extends I{constructor(){super(...arguments),this.hasStarted=!1,this.name=`none`,this.play=!1,this.delay=0,this.direction=`normal`,this.duration=1e3,this.easing=`linear`,this.endDelay=0,this.fill=`auto`,this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit(`sl-finish`)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit(`sl-cancel`)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let e=Zf[this.easing]??this.easing,t=this.keyframes??Qf[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!t?!1:(this.destroyAnimation(),this.animation=n.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener(`cancel`,this.handleAnimationCancel),this.animation.addEventListener(`finish`,this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit(`sl-start`)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener(`cancel`,this.handleAnimationCancel),this.animation.removeEventListener(`finish`,this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit(`sl-start`)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return k` <slot @slotchange=${this.handleSlotChange}></slot> `}};ep.styles=[A,$f],j([Bi(`slot`)],ep.prototype,`defaultSlot`,2),j([M()],ep.prototype,`name`,2),j([M({type:Boolean,reflect:!0})],ep.prototype,`play`,2),j([M({type:Number})],ep.prototype,`delay`,2),j([M()],ep.prototype,`direction`,2),j([M({type:Number})],ep.prototype,`duration`,2),j([M()],ep.prototype,`easing`,2),j([M({attribute:`end-delay`,type:Number})],ep.prototype,`endDelay`,2),j([M()],ep.prototype,`fill`,2),j([M({type:Number})],ep.prototype,`iterations`,2),j([M({attribute:`iteration-start`,type:Number})],ep.prototype,`iterationStart`,2),j([M({attribute:!1})],ep.prototype,`keyframes`,2),j([M({attribute:`playback-rate`,type:Number})],ep.prototype,`playbackRate`,2),j([R([`name`,`delay`,`direction`,`duration`,`easing`,`endDelay`,`fill`,`iterations`,`iterationsStart`,`keyframes`])],ep.prototype,`handleAnimationChange`,1),j([R(`play`)],ep.prototype,`handlePlayChange`,1),j([R(`playbackRate`)],ep.prototype,`handlePlaybackRateChange`,1),ep.define(`sl-animation`),L({tagName:`sl-animation`,elementClass:ep,react:v,events:{onSlCancel:`sl-cancel`,onSlFinish:`sl-finish`,onSlStart:`sl-start`},displayName:`SlAnimation`});var tp=O`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,np=class extends I{constructor(){super(...arguments),this.hasError=!1,this.image=``,this.label=``,this.initials=``,this.loading=`eager`,this.shape=`circle`}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit(`sl-error`)}render(){let e=k`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,t=k``;return t=this.initials?k`<div part="initials" class="avatar__initials">${this.initials}</div>`:k`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,k`
      <div
        part="base"
        class=${B({avatar:!0,"avatar--circle":this.shape===`circle`,"avatar--rounded":this.shape===`rounded`,"avatar--square":this.shape===`square`})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};np.styles=[A,tp],np.dependencies={"sl-icon":z},j([N()],np.prototype,`hasError`,2),j([M()],np.prototype,`image`,2),j([M()],np.prototype,`label`,2),j([M()],np.prototype,`initials`,2),j([M()],np.prototype,`loading`,2),j([M({reflect:!0})],np.prototype,`shape`,2),j([R(`image`)],np.prototype,`handleImageChange`,1),np.define(`sl-avatar`),L({tagName:`sl-avatar`,elementClass:np,react:v,events:{onSlError:`sl-error`},displayName:`SlAvatar`});var rp=O`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ip=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.separatorDir=this.localize.dir(),this.label=``}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`sl-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),k`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()===`rtl`?`chevron-left`:`chevron-right`} library="system"></sl-icon>
        </slot>
      </span>
    `}};ip.styles=[A,rp],ip.dependencies={"sl-icon":z},j([F(`slot`)],ip.prototype,`defaultSlot`,2),j([F(`slot[name="separator"]`)],ip.prototype,`separatorSlot`,2),j([M()],ip.prototype,`label`,2),ip.define(`sl-breadcrumb`),L({tagName:`sl-breadcrumb`,elementClass:ip,react:v,events:{},displayName:`SlBreadcrumb`}),Z.define(`sl-button`),L({tagName:`sl-button`,elementClass:Z,react:v,events:{onSlBlur:`sl-blur`,onSlFocus:`sl-focus`,onSlInvalid:`sl-invalid`},displayName:`SlButton`});var ap=O`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,op=class extends I{constructor(){super(...arguments),this.hasSlotController=new U(this,`prefix`,`suffix`),this.renderType=`button`,this.rel=`noreferrer noopener`}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`sl-dropdown`).length>0;if(this.href){this.renderType=`link`;return}if(e){this.renderType=`dropdown`;return}this.renderType=`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return k`
      <div
        part="base"
        class=${B({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test(`prefix`),"breadcrumb-item--has-suffix":this.hasSlotController.test(`suffix`)})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType===`link`?k`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${V(this.target?this.target:void 0)}"
                rel=${V(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:``}
        ${this.renderType===`button`?k`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:``}
        ${this.renderType===`dropdown`?k`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:``}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};op.styles=[A,ap],j([F(`slot:not([name])`)],op.prototype,`defaultSlot`,2),j([N()],op.prototype,`renderType`,2),j([M()],op.prototype,`href`,2),j([M()],op.prototype,`target`,2),j([M()],op.prototype,`rel`,2),j([R(`href`,{waitUntilFirstUpdate:!0})],op.prototype,`hrefChanged`,1),op.define(`sl-breadcrumb-item`),L({tagName:`sl-breadcrumb-item`,elementClass:op,react:v,events:{},displayName:`SlBreadcrumbItem`});var sp=O`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,cp=class extends I{constructor(){super(...arguments),this.variant=`primary`,this.pill=!1,this.pulse=!1}render(){return k`
      <span
        part="base"
        class=${B({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};cp.styles=[A,sp],j([M({reflect:!0})],cp.prototype,`variant`,2),j([M({type:Boolean,reflect:!0})],cp.prototype,`pill`,2),j([M({type:Boolean,reflect:!0})],cp.prototype,`pulse`,2),cp.define(`sl-badge`),L({tagName:`sl-badge`,elementClass:cp,react:v,events:{},displayName:`SlBadge`});var lp=O`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,up=class extends I{constructor(){super(...arguments),this.hasSlotController=new U(this,`footer`,`header`,`image`)}render(){return k`
      <div
        part="base"
        class=${B({card:!0,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`)})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};up.styles=[A,lp],up.define(`sl-card`),L({tagName:`sl-card`,elementClass:up,react:v,events:{},displayName:`SlCard`});var dp=O`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,fp=class e extends I{constructor(){super(...arguments),this.hasSlotController=new U(this,`icon`,`suffix`),this.localize=new H(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`sl-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.duration<1/0&&this.restartAutoHide(),await vc(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=pc(this,`alert.show`,{dir:this.localize.dir()});await hc(this.base,e,t),this.emit(`sl-after-show`)}else{su(this),this.emit(`sl-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await vc(this.base);let{keyframes:e,options:t}=pc(this,`alert.hide`,{dir:this.localize.dir()});await hc(this.base,e,t),this.base.hidden=!0,this.emit(`sl-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,mc(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,mc(this,`sl-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`sl-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`sl-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return k`
      <div
        part="base"
        class=${B({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?k`
              <div
                class=${B({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};fp.styles=[A,dp],fp.dependencies={"sl-icon-button":Sa},j([F(`[part~="base"]`)],fp.prototype,`base`,2),j([F(`.alert__countdown-elapsed`)],fp.prototype,`countdownElement`,2),j([M({type:Boolean,reflect:!0})],fp.prototype,`open`,2),j([M({type:Boolean,reflect:!0})],fp.prototype,`closable`,2),j([M({reflect:!0})],fp.prototype,`variant`,2),j([M({type:Number})],fp.prototype,`duration`,2),j([M({type:String,reflect:!0})],fp.prototype,`countdown`,2),j([N()],fp.prototype,`remainingTime`,2),j([R(`open`,{waitUntilFirstUpdate:!0})],fp.prototype,`handleOpenChange`,1),j([R(`duration`)],fp.prototype,`handleDurationChange`,1);var pp=fp;K(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),K(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),pp.define(`sl-alert`),L({tagName:`sl-alert`,elementClass:pp,react:v,events:{onSlShow:`sl-show`,onSlAfterShow:`sl-after-show`,onSlHide:`sl-hide`,onSlAfterHide:`sl-after-hide`},displayName:`SlAlert`});var mp=(e,t)=>{let n=0;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...r)},t)}},hp=(e,t,n)=>{let r=e[t];e[t]=function(...e){r.call(this,...e),n.call(this,r,...e)}};(()=>{if(!(typeof window>`u`)&&!(`onscrollend`in window)){let e=new Set,t=new WeakMap,n=t=>{for(let n of t.changedTouches)e.add(n.identifier)},r=t=>{for(let n of t.changedTouches)e.delete(n.identifier)};document.addEventListener(`touchstart`,n,!0),document.addEventListener(`touchend`,r,!0),document.addEventListener(`touchcancel`,r,!0),hp(EventTarget.prototype,`addEventListener`,function(n,r){if(r!==`scrollend`)return;let i=mp(()=>{e.size?i():this.dispatchEvent(new Event(`scrollend`))},100);n.call(this,`scroll`,i,{passive:!0}),t.set(this,i)}),hp(EventTarget.prototype,`removeEventListener`,function(e,n){if(n!==`scrollend`)return;let r=t.get(this);r&&e.call(this,`scroll`,r,{passive:!0})})}})();function gp({product:e}){return(0,D.jsxs)(`div`,{className:`block break-inside-avoid rounded-lg border border-gray-300 shadow bg-white overflow-hidden animate-fade-in-up hover:shadow-lg transition-shadow duration-300`,children:[(0,D.jsxs)(`div`,{className:`relative`,children:[(0,D.jsx)(`img`,{src:e.image,alt:e.name,className:`w-full h-auto object-cover`}),(0,D.jsx)(`button`,{className:`absolute bottom-2 left-2 flex items-center px-1 pb-0.5 rounded bg-[#FE2C55] text-white text-sm`,onClick:()=>window.location=`${e.affiliateUrl}`,children:`Xem sản phẩm`})]}),(0,D.jsxs)(`div`,{className:`p-2`,children:[(0,D.jsx)(`p`,{className:`text-olive-800`,children:e.name}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2 text-sm`,children:[(0,D.jsx)(`p`,{className:`text-[#FE2C55]`,children:e.affiliateCode}),(0,D.jsx)(ed,{value:e.affiliateCode})]})]})]})}var _p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vp=v.createContext&&v.createContext(_p),yp=[`attr`,`size`,`title`];function bp(e,t){if(e==null)return{};var n,r,i=xp(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function xp(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Sp(){return Sp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sp.apply(null,arguments)}function Cp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Cp(Object(n),!0).forEach(function(t){Tp(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cp(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Tp(e,t,n){return(t=Ep(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ep(e){var t=Dp(e,`string`);return typeof t==`symbol`?t:t+``}function Dp(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Op(e){return e&&e.map((e,t)=>v.createElement(e.tag,wp({key:t},e.attr),Op(e.child)))}function kp(e){return t=>v.createElement(Ap,Sp({attr:wp({},e.attr)},t),Op(e.child))}function Ap(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=bp(e,yp),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),v.createElement(`svg`,Sp({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:wp(wp({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&v.createElement(`title`,null,i),e.children)};return vp===void 0?t(_p):v.createElement(vp.Consumer,null,e=>t(e))}function jp(e){return kp({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z`},child:[]}]})(e)}function Mp(e){return kp({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z`},child:[]}]})(e)}function Np(e){return kp({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z`},child:[]}]})(e)}function Pp({isOpen:e,onClose:t}){let[n,r]=(0,v.useState)(0),i=[`/images/guide/step1.png`,`/images/guide/step2.png`,`/images/guide/step3.png`];return e?(0,D.jsx)(`div`,{className:`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2`,onClick:t,children:(0,D.jsxs)(`div`,{className:`relative w-full h-full flex items-center justify-center`,onClick:e=>e.stopPropagation(),children:[(0,D.jsx)(`button`,{onClick:t,className:`absolute top-4 right-4 text-white hover:text-gray-300 transition z-10`,"aria-label":`Close`,children:(0,D.jsx)(jp,{size:28})}),(0,D.jsx)(`img`,{src:i[n],alt:`Guide step ${n+1}`,className:`max-w-full max-h-[70vh] object-contain`}),(0,D.jsx)(`button`,{onClick:()=>{r(e=>e===0?i.length-1:e-1)},className:`absolute left-2 top-1/2 p-1 transform -translate-y-1/2 text-white bg-black/30 rounded-full text-shadow-md hover:text-gray-300 transition`,"aria-label":`Previous image`,children:(0,D.jsx)(Np,{size:28})}),(0,D.jsx)(`button`,{onClick:()=>{r(e=>e===i.length-1?0:e+1)},className:`absolute right-2 top-1/2 p-1 transform -translate-y-1/2 text-white bg-black/30 rounded-full text-shadow-md hover:text-gray-300 transition`,"aria-label":`Next image`,children:(0,D.jsx)(Mp,{size:28})}),(0,D.jsxs)(`div`,{className:`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white`,children:[n+1,` / `,i.length]})]})}):null}function Fp(e){return kp({tag:`svg`,attr:{viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z`,clipRule:`evenodd`},child:[]}]})(e)}function Ip(e){return kp({tag:`svg`,attr:{viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z`,clipRule:`evenodd`},child:[]}]})(e)}function Lp(e){return kp({tag:`svg`,attr:{viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z`,clipRule:`evenodd`},child:[]}]})(e)}function Rp(e){return kp({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z`},child:[]},{tag:`path`,attr:{fillRule:`evenodd`,d:`M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z`},child:[]}]})(e)}function zp(){let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(``),[f,p]=(0,v.useState)(!1),m=async(e=``)=>{try{r(!0);let n=await rr(e);t(n),a(``)}catch(e){a(e.message||`Không thể tải danh sách sản phẩm`)}finally{r(!1)}};return(0,v.useEffect)(()=>{let e=setTimeout(()=>{d(c)},300);return()=>clearTimeout(e)},[c]),(0,v.useEffect)(()=>{m(u)},[u]),(0,v.useEffect)(()=>{let e=()=>{s(window.scrollY>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,D.jsxs)(`div`,{className:`w-full md:w-3xl mx-auto relative`,children:[(0,D.jsxs)(`div`,{className:`flex flex-col items-end md:hidden fixed right-4 top-2 z-20 click-hint`,children:[(0,D.jsx)(Rp,{className:`text-lg`}),(0,D.jsx)(`p`,{className:`text-xs`,children:`Mở trong trình duyệt!`})]}),(0,D.jsxs)(`div`,{className:`pb-4 pt-12 px-2 w-full flex flex-col items-center bg-white`,children:[(0,D.jsxs)(`div`,{className:`px-2 py-1 mb-4 w-full flex-1 flex items-center bg-olive-100 rounded`,children:[(0,D.jsx)(Ip,{}),(0,D.jsx)(`input`,{type:`text`,className:`px-1 pb-0.5 h-full flex-1 outline-0 caret-[#FE2C55]`,placeholder:`Nhập tên hoặc mã sản phẩm`,value:c,onChange:e=>{let t=e.target.value;l(t)}}),c&&(0,D.jsx)(`button`,{onClick:()=>{l(``)},className:`text-gray-500 hover:text-gray-700 cursor-pointer`,children:(0,D.jsx)(Fp,{})})]}),(0,D.jsx)(`div`,{className:`mb-2 w-22 border border-gray-300 rounded-full overflow-hidden`,children:(0,D.jsx)(`img`,{src:`/images/avatar.webp`,alt:`Duy Khang Review`})}),(0,D.jsx)(`p`,{className:`text-xl text-olive-900`,children:`Duy Khang Review`}),(0,D.jsx)(`a`,{className:`text-gray-400 text-sm`,href:`https://www.tiktok.com/@dykangz`,children:`@dykangz`}),(0,D.jsx)(`button`,{onClick:()=>p(!0),className:`mt-1 text-[#FE2C55] text-sm underline hover:text-[#FE2C55]/80 transition`,children:`Hướng dẫn`})]}),(0,D.jsxs)(`div`,{className:`p-2`,children:[(0,D.jsx)(`div`,{className:`columns-2 space-y-2 gap-2`,children:e&&e.map((e,t)=>(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(gp,{product:e},`${t}-1`)}))}),o&&(0,D.jsx)(`button`,{onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},className:`fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-600 text-white text-lg rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 z-50`,title:`Scroll to top`,children:(0,D.jsx)(Lp,{})})]}),(0,D.jsx)(Pp,{isOpen:f,onClose:()=>p(!1)})]})}function Bp(){let{user:e,loading:t}=$n();return t?(0,D.jsx)(Gn,{}):(0,D.jsxs)(qt,{children:[(0,D.jsx)(Gt,{path:`/`,element:(0,D.jsx)(zp,{})}),(0,D.jsx)(Gt,{path:`/login`,element:(0,D.jsx)(tr,{})}),(0,D.jsx)(Gt,{path:`/admin`,element:(0,D.jsx)(or,{})}),(0,D.jsx)(Gt,{path:`/products`,element:(0,D.jsx)(zp,{})}),(0,D.jsx)(Gt,{path:`*`,element:(0,D.jsx)(Wt,{to:`/`,replace:!0})})]})}function Vp(){return(0,D.jsx)(Qn,{children:(0,D.jsx)(Mn,{children:(0,D.jsx)(Bp,{})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,D.jsx)(v.StrictMode,{children:(0,D.jsx)(Vp,{})}));
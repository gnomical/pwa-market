(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{E02R:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},GAEk:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function i(t){this.props=t}function c(t){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),t.__c.__H=null),(t=r({},t)).__c=null,t.__k=t.__k&&t.__k.map(c)),t}function a(t){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(a)),t}function u(){this.__u=0,this.t=null,this.__b=null}function s(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function l(){this.u=null,this.o=null}function f(t){return this.getChildContext=function(){return t.context},t.children}function p(t){var e=this,n=t.i;e.componentWillUnmount=function(){Object(N.j)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(t){this.childNodes.push(t),e.i.appendChild(t)},insertBefore:function(t){this.childNodes.push(t),e.i.appendChild(t)},removeChild:function(t){this.childNodes.splice(this.childNodes.indexOf(t)>>>1,1),e.i.removeChild(t)}}),Object(N.j)(Object(N.e)(f,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function _(){}function h(){return this.cancelBubble}function d(){return this.defaultPrevented}function b(t){return!!t&&t.$$typeof===H}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function j(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function P(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),o=w(e.slice(0,r)),i=e.slice(r+1).trim();return o.startsWith("webkit")?t[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:t[o]=i,t}),{})}function E(t){return x.c.icon?x.c.icon(t):null===t?null:"object"===m(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function S(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?y({},t,e):{}}function W(t){var e=t.forwardedRef,n=O(t,["forwardedRef"]),r=n.mask,o=n.symbol,i=n.className,c=n.title,a=n.titleId,u=E(n.icon),s=S("classes",[].concat(j(function(t){var e,n=t.flip,r=t.size,o=t.rotation,i=t.pull,c=(y(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-inverse":t.inverse,"fa-border":t.border,"fa-li":t.listItem,"fa-flip-horizontal":"horizontal"===n||"both"===n,"fa-flip-vertical":"vertical"===n||"both"===n},"fa-".concat(r),null!=r),y(e,"fa-rotate-".concat(o),null!=o&&0!==o),y(e,"fa-pull-".concat(i),null!=i),y(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(c).map((function(t){return c[t]?t:null})).filter((function(t){return t}))}(n)),j(i.split(" ")))),l=S("transform","string"==typeof n.transform?x.c.transform(n.transform):n.transform),f=S("mask",E(r)),p=Object(x.a)(u,g({},s,{},l,{},f,{symbol:o,title:c,titleId:a}));if(!p)return function(){var t;!$&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",u),null;var _=p.abstract,h={ref:e};return Object.keys(n).forEach((function(t){W.defaultProps.hasOwnProperty(t)||(h[t]=n[t])})),q(_[0],h)}n.d(e,"a",(function(){return W}));var x=n("X7+o"),k=n("W0B4"),I=n.n(k),T=n("QRet"),N=n("hosL");(i.prototype=new N.a).isPureReactComponent=!0,i.prototype.shouldComponentUpdate=function(t,e){return o(this.props,t)||o(this.state,e)};var R=N.i.__b;N.i.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),R&&R(t)};var D="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,L=function(t,e){return null==t?null:Object(N.k)(Object(N.k)(t).map(e))},C={map:L,forEach:L,count:function(t){return t?Object(N.k)(t).length:0},only:function(t){var e=Object(N.k)(t);if(1!==e.length)throw"Children.only";return e[0]},toArray:N.k},A=N.i.__e;N.i.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);A(t,e,n)},(u.prototype=new N.a).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=s(r.__v),i=!1,c=function(){i||(i=!0,n.componentWillUnmount=n.__c,o?o(u):u())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){c(),n.__c&&n.__c()};var u=function(){var t;if(!--r.__u)for(r.state.__e&&(r.__v.__k[0]=a(r.state.__e)),r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()},l=!0===e.__h;r.__u++||l||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(c,c)},u.prototype.componentWillUnmount=function(){this.t=[]},u.prototype.render=function(t,e){this.__b&&(this.__v.__k&&(this.__v.__k[0]=c(this.__b)),this.__b=null);var n=e.__e&&Object(N.e)(N.b,null,t.fallback);return n&&(n.__h=null),[Object(N.e)(N.b,null,e.__e?null:t.children),n]};var U=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(l.prototype=new N.a).__e=function(t){var e=this,n=s(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),U(e,t,r)):o()};n?n(i):i()}},l.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(N.k)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},l.prototype.componentDidUpdate=l.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){U(t,n,e)}))};var H="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,F=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,G=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};N.a.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(N.a.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var B=N.i.event;N.i.event=function(t){return B&&(t=B(t)),t.persist=_,t.isPropagationStopped=h,t.isDefaultPrevented=d,t.nativeEvent=t};var z,M={configurable:!0,get:function(){return this.class}},Y=N.i.vnode;N.i.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){for(var o in r={},n){var i=n[o];"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!G(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():F.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(N.k)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(N.k)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r}e&&n.class!=n.className&&(M.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",M)),t.$$typeof=H,Y&&Y(t)};var V=N.i.__r;N.i.__r=function(t){V&&V(t),z=t.__c};var X={useState:T.j,useReducer:T.h,useEffect:T.d,useLayoutEffect:T.f,useRef:T.i,useImperativeHandle:T.e,useMemo:T.g,useCallback:T.a,useContext:T.b,useDebugValue:T.c,version:"16.8.0",Children:C,render:function(t,e,n){return null==e.__k&&(e.textContent=""),Object(N.j)(t,e),"function"==typeof n&&n(),t?t.__c:null},hydrate:function(t,e,n){return Object(N.h)(t,e),"function"==typeof n&&n(),t?t.__c:null},unmountComponentAtNode:function(t){return!!t.__k&&(Object(N.j)(null,t),!0)},createPortal:function(t,e){return Object(N.e)(p,{__v:t,i:e})},createElement:N.e,createContext:N.d,createFactory:function(t){return N.e.bind(null,t)},cloneElement:function(t){return b(t)?N.c.apply(null,arguments):t},createRef:N.f,Fragment:N.b,isValidElement:b,findDOMNode:function(t){return t&&(t.base||1===t.nodeType&&t)||null},Component:N.a,PureComponent:i,memo:function(t,e){function n(t){var n=this.props.ref,r=n==t.ref;return!r&&n&&(n.call?n(null):n.current=null),e?!e(this.props,t)||!r:o(this.props,t)}function r(e){return this.shouldComponentUpdate=n,Object(N.e)(t,e)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(t){function e(e,n){var o=r({},e);return delete o.ref,t(o,(n=e.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return e.$$typeof=D,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e},unstable_batchedUpdates:function(t,e){return t(e)},StrictMode:N.b,Suspense:u,SuspenseList:l,lazy:function(t){function e(e){if(n||(n=t()).then((function(t){r=t.default||t}),(function(t){o=t})),o)throw o;if(!r)throw n;return Object(N.e)(r,e)}var n,r,o;return e.displayName="Lazy",e.__f=!0,e},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:{current:{readContext:function(t){return z.__n[t.__c].props.value}}}}},$=!1;try{$=!0}catch(t){}W.displayName="FontAwesomeIcon",W.propTypes={border:I.a.bool,className:I.a.string,mask:I.a.oneOfType([I.a.object,I.a.array,I.a.string]),fixedWidth:I.a.bool,inverse:I.a.bool,flip:I.a.oneOf(["horizontal","vertical","both"]),icon:I.a.oneOfType([I.a.object,I.a.array,I.a.string]),listItem:I.a.bool,pull:I.a.oneOf(["right","left"]),pulse:I.a.bool,rotation:I.a.oneOf([0,90,180,270]),size:I.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.a.bool,symbol:I.a.oneOfType([I.a.bool,I.a.string]),title:I.a.string,transform:I.a.oneOfType([I.a.string,I.a.object]),swapOpacity:I.a.bool},W.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var q=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return t(e,n)})),i=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=P(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[w(e)]=r}return t}),{attrs:{}}),c=r.style,a=void 0===c?{}:c,u=O(r,["style"]);return i.attrs.style=g({},i.attrs.style,{},a),e.apply(void 0,[n.tag,g({},i.attrs,{},u)].concat(j(o)))}.bind(null,X.createElement)},NS33:function(t,e,n){"use strict";function r(){}function o(){}var i=n("E02R");o.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,o,c){if(c!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},Pe6V:function(t){t.exports={homescreen:"d6c6"}},QRet:function(t,e,n){"use strict";function r(t,e){j.i.__h&&j.i.__h(g,t,w||e),w=0;var n=g.__H||(g.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return w=1,i(y,t)}function i(t,e,n){var o=r(v++,2);return o.t=t,o.__c||(o.__=[n?n(e):y(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function c(t,e){var n=r(v++,3);!j.i.__s&&m(n.__H,e)&&(n.__=t,n.__H=e,g.__H.__h.push(n))}function a(t,e){var n=r(v++,4);!j.i.__s&&m(n.__H,e)&&(n.__=t,n.__H=e,g.__h.push(n))}function u(t){return w=5,l((function(){return{current:t}}),[])}function s(t,e,n){w=6,a((function(){"function"==typeof t?t(e()):t&&(t.current=e())}),null==n?n:n.concat(t))}function l(t,e){var n=r(v++,7);return m(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function f(t,e){return w=8,l((function(){return t}),e)}function p(t){var e=g.context[t.__c],n=r(v++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(g)),e.props.value):t.__}function _(t,e){j.i.useDebugValue&&j.i.useDebugValue(e?e(t):t)}function h(){P.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(d),t.__H.__h.forEach(b),t.__H.__h=[]}catch(e){t.__H.__h=[],j.i.__e(e,t.__v)}})),P=[]}function d(t){var e=g;"function"==typeof t.__c&&t.__c(),g=e}function b(t){var e=g;t.__c=t.__(),g=e}function m(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function y(t,e){return"function"==typeof e?e(t):e}n.d(e,"j",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return _}));var v,g,O,j=n("hosL"),w=0,P=[],E=j.i.__b,S=j.i.__r,W=j.i.diffed,x=j.i.__c,k=j.i.unmount;j.i.__b=function(t){g=null,E&&E(t)},j.i.__r=function(t){S&&S(t),v=0;var e=(g=t.__c).__H;e&&(e.__h.forEach(d),e.__h.forEach(b),e.__h=[])},j.i.diffed=function(t){W&&W(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==P.push(e)&&O===j.i.requestAnimationFrame||((O=j.i.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),I&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);I&&(e=requestAnimationFrame(n))})(h)),g=void 0},j.i.__c=function(t,e){e.some((function(t){try{t.__h.forEach(d),t.__h=t.__h.filter((function(t){return!t.__||b(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],j.i.__e(n,t.__v)}})),x&&x(t,e)},j.i.unmount=function(t){k&&k(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(d)}catch(t){j.i.__e(t,e.__v)}};var I="function"==typeof requestAnimationFrame},W0B4:function(t,e,n){t.exports=n("NS33")()},XaJR:function(t,e,n){"use strict";function r(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function o(t){return"__private_"+d+++"_"+t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return s||(s=new P),s}n.r(e);var s,l=n("hosL"),f=n("QRet"),p=(n("Y3FI"),n("GAEk")),_=n("fHgA"),h=n.n(_),d=0,b=Object.freeze({SWIPE_UP:"swipe-up",SWIPE_DOWN:"swipe-down",SWIPE_RIGHT:"swipe-right",SWIPE_LEFT:"swipe-left",SWIPE_DOWN_LEFT:"swipe-down-left",SWIPE_DOWN_RIGHT:"swipe-down-right",SWIPE_UP_LEFT:"swipe-up-left",SWIPE_UP_RIGHT:"swipe-up-right",DRAW_X:"draw-x",ANY:"any"}),m=o("detectType"),y=o("watchDiagonals"),v=o("watchComplexGestures"),g=o("lastGesture"),O=function(t,e,n,o){var i=this;this.target=void 0,Object.defineProperty(this,m,{writable:!0,value:b.ANY}),this.minDistance=50,this.continuous=!1,Object.defineProperty(this,y,{writable:!0,value:!1}),Object.defineProperty(this,v,{writable:!0,value:!1}),Object.defineProperty(this,g,{writable:!0,value:void 0}),this.position=Object.seal({initial:{x:void 0,y:void 0},final:{x:void 0,y:void 0}}),this.listener=function(){console.error("gesture listener callback function undefined")},this.destroy=function(){i.target.removeEventListener("touchstart",i.touchstart,!1),i.target.removeEventListener("touchmove",i.touchmove,!1),i.target.removeEventListener("touchend",i.touchend,!1)},this.touchstart=function(t){i.position.initial.x=i.position.final.x=t.touches[0].screenX,i.position.initial.y=i.position.final.y=t.touches[0].screenY},this.touchmove=function(t){i.position.final.x=t.touches[0].clientX,i.position.final.y=t.touches[0].clientY,i.continuous&&i.listener({target:i.target,type:"in-motion",screenPosition:i.position,movementX:i.position.final.x-i.position.initial.x,movementY:i.position.final.y-i.position.initial.y})},this.touchend=function(){var t=null,e=i.position.final.x-i.position.initial.x,n=i.position.final.y-i.position.initial.y;Math.sqrt(Math.pow(e,2)+Math.pow(n,2))<i.minDistance||(t=0===n||Math.abs(e/n)>1?0!=n&&r(i,y)[y]&&Math.abs(e/n)<2?e>0?n>0?b.SWIPE_UP_RIGHT:b.SWIPE_DOWN_RIGHT:n>0?b.SWIPE_UP_LEFT:b.SWIPE_DOWN_LEFT:e>0?b.SWIPE_RIGHT:b.SWIPE_LEFT:r(i,y)[y]&&Math.abs(e/n)>.75?e>0?n>0?b.SWIPE_UP_RIGHT:b.SWIPE_DOWN_RIGHT:n>0?b.SWIPE_UP_LEFT:b.SWIPE_DOWN_LEFT:n>0?b.SWIPE_DOWN:b.SWIPE_UP,r(i,v)[v]&&(r(i,g)[g]&&((r(i,g)[g]!=b.SWIPE_DOWN_LEFT&&r(i,g)[g]!=b.SWIPE_UP_RIGHT||t!=b.SWIPE_DOWN_RIGHT&&t!=b.SWIPE_UP_LEFT)&&(r(i,g)[g]!=b.SWIPE_DOWN_RIGHT&&r(i,g)[g]!=b.SWIPE_UP_LEFT||t!=b.SWIPE_DOWN_LEFT&&t!=b.SWIPE_UP_RIGHT)||(t=b.DRAW_X)),r(i,g)[g]=t,setTimeout((function(){r(i,g)[g]=void 0}),1e3)),t!=r(i,m)[m]&&r(i,m)[m]!=b.ANY||"function"!=typeof i.listener||i.listener({target:i.target,type:t,screenPosition:i.position,movementX:e,movementY:n}))},this.target=t,r(this,m)[m]=e||r(this,m)[m],this.listener=n||this.listener,this.minDistance=o.minSwipeDistance||this.minDistance,this.continuous=o.continuous||this.continuous,r(this,m)[m]!=b.SWIPE_DOWN_LEFT&&r(this,m)[m]!=b.SWIPE_DOWN_RIGHT&&r(this,m)[m]!=b.DRAW_X&&r(this,m)[m]!=b.ANY||(r(this,y)[y]=!0),r(this,m)[m]!=b.DRAW_X&&r(this,m)[m]!=b.ANY||(r(this,v)[v]=!0),this.target.addEventListener("touchstart",this.touchstart,!1),this.target.addEventListener("touchmove",this.touchmove,!1),this.target.addEventListener("touchend",this.touchend,!1)},j=n("yqlB"),w=function(t){var e={animating:!1,height:void 0,launched:!1,expanded:!1,loaded:!1,position:void 0,closePosition:void 0,width:void 0,iconURL:void 0,title:t.title},n=Object(f.j)(e),r=n[0],o=n[1],i=Object(f.i)(),a=Object(f.i)();t.src&&!t.src.match(/\/$/)&&(t.src+="/"),Object(f.d)((function(){if(r.launched){console.log("APP SPACE LISTENER");var t=new O(i.current,b.DRAW_X,(function(t){u(t)}),{minSwipeDistance:25});return function(){return t.destroy()}}}),[i.current,r.launched,r.closePosition]),Object(f.d)((function(){if(r.launched){console.log("CLOSE BTN LISTENER");var t=new O(a.current,b.ANY,(function(t){t.target.style.top="-1.5em",t.target.style.left="-1.5em",t.target.style.transform="translate("+t.screenPosition.final.x+"px, "+t.screenPosition.final.y+"px)"}),{minSwipeDistance:1,continuous:!0});return function(){return t.destroy()}}}),[a.current,r.launched,r.closePosition]),Object(f.d)((function(){t.src&&fetch(t.src+"manifest.json",{}).then((function(t){return t.json()})).then((function(e){e.icons.sort((function(t,e){if("maskable"==t.purpose&&"maskable"!=e.purpose)return-1;if("maskable"==e.purpose&&"maskable"!=t.purpose)return 1;var n=parseInt(t.sizes.split("x")[0]),r=parseInt(e.sizes.split("x")[0]);return n>r?-1:r>n?1:0})),o((function(n){return c(c({},n),{},{title:e.name.length>15?e.short_name:e.name,iconURL:e.icons[0]?t.src+e.icons[0].src:n.iconURL})}))})).catch((function(t){console.log(t)}))}),[t.src]);var u=function(t){r.launched&&("function"==typeof t.stopPropagation&&t.stopPropagation(),o((function(t){return c(c({},t),{},{launched:!1})})),setTimeout((function(){return o((function(t){return c(c({},e),{},{closePosition:t.closePosition,iconURL:t.iconURL})}))}),450))};return Object(l.g)("span",{className:h.a.launcher+(r.launched?" "+h.a.launched:"")+(r.animating?" "+h.a.animating:"")+(r.loaded?" "+h.a.loaded:"")+(t.systemLauncher?" "+h.a.system:"")},(r.title||t.icon)&&Object(l.g)("div",{ref:i,onClick:r.launched?void 0:function(){var e=i.current.getBoundingClientRect();o((function(t){return c(c({},t),{},{position:{top:e.top,left:e.left},width:i.current.offsetWidth,height:i.current.offsetHeight})})),setTimeout((function(){return o((function(t){return c(c({},t),{},{animating:!0,launched:!0})}))}),50),setTimeout((function(){var e=a.current.getBoundingClientRect();o((function(n){return c(c({},n),{},{expanded:!0,loaded:!t.src||n.loaded,closePosition:{top:e.x,left:e.y}})}))}),500)},className:r.title||t.icon?h.a.geometry:"",style:r.position?"position:fixed;margin:0;top:"+r.position.top+"px;left:"+r.position.left+"px;width:"+r.width+"px;height:"+r.height+"px;":""},r.iconURL?Object(l.g)("img",{class:h.a.icon,src:r.iconURL,onError:function(){console.info("icon img failed",r.iconURL),o((function(t){return c(c({},t),{},{iconURL:void 0})}))}}):Object(l.g)(l.b,null),t.icon&&!r.iconURL?Object(l.g)(p.a,{icon:t.icon}):Object(l.g)(l.b,null),t.src&&"string"==typeof t.src&&r.expanded?Object(l.g)("iframe",{onLoad:function(){o((function(t){return c(c({},t),{},{loaded:!0})}))},src:t.src}):Object(l.g)(l.b,null),r.launched?Object(l.g)("div",{className:h.a.childWrapper},t.children):Object(l.g)(l.b,null),Object(l.g)("div",{ref:a,class:h.a.close,onClick:u},Object(l.g)(p.a,{icon:"times"}))),r.title&&Object(l.g)("div",{className:h.a.title},r.title))},P=function(){function t(t,e){void 0===t&&(t="keyval-store"),void 0===e&&(e="keyval"),this.storeName=e,this._dbp=new Promise((function(n,r){var o=indexedDB.open(t,1);o.onerror=function(){return r(o.error)},o.onsuccess=function(){return n(o.result)},o.onupgradeneeded=function(){o.result.createObjectStore(e)}}))}return t.prototype._withIDBStore=function(t,e){var n=this;return this._dbp.then((function(r){return new Promise((function(o,i){var c=r.transaction(n.storeName,t);c.oncomplete=function(){return o()},c.onabort=c.onerror=function(){return i(c.error)},e(c.objectStore(n.storeName))}))}))},t}(),E=n("Pe6V"),S=n.n(E);e.default=function(){var t=Object(f.j)(void 0),e=t[0],n=t[1];Object(f.d)((function(){(function(t,e){var n;return void 0===e&&(e=u()),e._withIDBStore("readonly",(function(e){n=e.get(t)})).then((function(){return n.result}))})("wallpaper").then((function(t){n(t)}))}),[]);return Object(l.g)("div",{class:S.a.homescreen,style:e?"--bgurl: url("+e+");":""},Object(l.g)(w,{icon:"store",title:"App Store"}),Object(l.g)(w,null),Object(l.g)(w,null),Object(l.g)(w,{icon:"cogs",title:"Settings",systemLauncher:!0},Object(l.g)(j.a,{saveWallpaper:function(t){return t?(n(t),function(t,e,n){return void 0===n&&(n=u()),n._withIDBStore("readwrite",(function(n){n.put(e,t)}))}("wallpaper",t)):function(t,e){return void 0===e&&(e=u()),e._withIDBStore("readwrite",(function(e){e.delete(t)}))}("wallpaper")},hasCustomWallpaper:null!=e})),Object(l.g)(w,{icon:"male",title:"Hangapp",src:"https://kylesureline.com/hangapp/#/"}),Object(l.g)(w,{icon:"hotel",title:"Tower Game",src:"https://towergame.app"}),Object(l.g)(w,{icon:"cube",title:"The Cube",src:"https://bsehovac.github.io/the-cube/"}),Object(l.g)(w,{title:"Doodle Cricket",icon:"gamepad",src:"https://doodlecricket.github.io/index.html#/"}),Object(l.g)(w,{icon:"project-diagram",title:"Breaklock",src:"https://maxwellito.github.io/breaklock/"}),Object(l.g)(w,{icon:"th",title:"Tic Tac Toe",src:"https://tmaiadev-tictactoe.netlify.app"}),Object(l.g)(w,{icon:"dice-five",title:"Dominoes",src:"https://dominoes.playdrift.com"}),Object(l.g)(w,{icon:"ghost",title:"Pacman",src:"https://bobrov.dev/pacman-pwa/index.html"}),Object(l.g)(w,{icon:"stopwatch",title:"Stopwatch",src:"https://stopwatch-app.com"}),Object(l.g)(w,{icon:"calculator",title:"Calculator",src:"https://calculator.iondrimbafilho.me"}),Object(l.g)(w,{icon:"wifi",title:"Snapdrop",src:"https://snapdrop.net"}),Object(l.g)(w,null),Object(l.g)(w,{icon:["far","circle"],title:"Circle Flip",src:"https://the-circle.app"}),Object(l.g)(w,{icon:"",title:"Dead or Alive",src:"https://rick-and-morty-game.ahmetkapusuz.now.sh"}),Object(l.g)(w,{icon:"gamepad",title:"Snake",src:"https://tmaiadev-snake.netlify.app"}),Object(l.g)(w,{icon:"gamepad",title:"Tetra",src:"https://tmaiadev-tetra.netlify.app"}),Object(l.g)(w,{icon:"exchange-alt",title:"Arrow Rain",src:"https://arrows-rain.firebaseapp.com"}))}},fHgA:function(t){t.exports={launcher:"_2627",system:"d4bd",geometry:"d7b9",close:"_2cea",childWrapper:"a9b4",grow:"_8fbd",icon:"b6d3",title:"_3612",animating:"c655",launched:"b803",loaded:"c041"}}}]);
//# sourceMappingURL=route-home-screen.chunk.3fbcb.js.map
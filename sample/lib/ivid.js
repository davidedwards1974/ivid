!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".ivid {\n  background-color: black;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ivid__video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n}\n\n.ivid__choice-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n  align-content: stretch;\n  z-index: 2147483647;\n}\n\n.ivid__choice-button {\n  width: 100%;\n  height: 76px;\n  color: white;\n  font-size: large;\n  font-weight: bold;\n  border: none;\n  background-color: rgba(0,0,0,0.28);\n}\n\n.ivid__choice-button:hover {\n  font-size: larger;\n  background-color: rgba(0,0,0,0.32);\n}\n\n.hidden {\n  display: none;\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];null!=u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,l=0,a=[],f=n(4);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(y(r.parts[u],t))}else{var c=[];for(u=0;u<r.parts.length;u++)c.push(y(r.parts[u],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),a.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=a.indexOf(e);t>=0&&a.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var u=l++;n=s||(s=b(t)),r=x.bind(null,n,u,!1),o=x.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=u()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var u=n[o];(c=i[u.id]).refs--,r.push(c)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);var r=function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=f(t).call(this);var u=(e=!i||"object"!==o(i)&&"function"!=typeof i?c(n):i).setup();return Object.defineProperties(c(c(e)),{state:{value:u,writable:!0},setState:{value:function(t){for(var n in t)t.hasOwnProperty(n)&&(e.state[n]=t[n]);e.render()}},onVideoEnded:{value:function(){var t=e.state;t.next&&(e.setAttribute("current",t.next),t.videoAttrs.controls&&(t.videoTemplate.controls=!0),t.choicesTemplate.classList.add("hidden"))}},onVideoClick:{value:function(){var t=e.state.videoTemplate;t.paused?t.play():t.pause()}},onChoiceSelected:{value:function(t){e.setAttribute("next",t),e.state.next=t}},onTimeUpdate:{value:function(){var t=e.state,n=t.srcmap[t.current].options.timeout,r=n||10,o=t.videoTemplate;o.duration-o.currentTime<=r&&(o.ontimeupdate=null,t.videoAttrs.controls&&(o.controls=!1),t.choicesTemplate.classList.remove("hidden"))}},onKeydown:{value:function(e){console.log(e),70===e.keyCode&&r()}}}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,s(HTMLElement)),u(t,null,[{key:"observedAttributes",get:function(){return["srcmap","current"]}}]),u(t,[{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(e,t,n){var r,o,i;null!==t&&this.setState((r={},o=e,i="srcmap"===e?JSON.parse(n):n,o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r))}},{key:"setup",value:function(){var e,t,n,r={autoplay:this.hasAttribute("autoplay")||null,controls:this.hasAttribute("controls")||null,muted:this.hasAttribute("muted")||null,playsinline:this.hasAttribute("playsinline")||null,poster:this.getAttribute("poster"),preload:this.getAttribute("preload")},o=JSON.parse(this.getAttribute("srcmap")),i=this.getAttribute("current"),u=this.getAttribute("next")||"",c=((e=document.createElement("div")).setAttribute("class","ivid ivid__wrapper"),e),s=((t=document.createElement("div")).setAttribute("class","ivid__choice-wrapper hidden"),t),l=((n=this.firstElementChild)||(n=document.createElement("video")),n.classList.add("ivid__video"),n);return this.innerHTML="",c.appendChild(l),c.appendChild(s),this.appendChild(c),i||(i=Object.keys(o)[0],this.setAttribute("current",i)),{videoAttrs:r,srcmap:o,current:i,next:u,baseTemplate:c,videoTemplate:l,choicesTemplate:s}}},{key:"render",value:function(){var e,t,n,r,o=this.state,i=o.srcmap[o.current];if(i.options){var u=i.options.fallback||Object.keys(i.options.choices)[0];this.onChoiceSelected(u),i.options.choices&&(e=o.choicesTemplate,t=i,n=this.onChoiceSelected,r=t.options.choices,e.classList.add("hidden"),e.innerHTML="",Object.keys(r).map(function(t){var o=document.createElement("button");o.setAttribute("class","ivid__choice-button"),o.innerHTML=r[t],o.onclick=function(){return n(t)},e.appendChild(o)}))}else this.onChoiceSelected(null);!function(e,t,n,r,o,i){e.id=n.uid,e.src=n.src,e.onclick=function(){return r()},t.autoplay&&(e.autoplay=!0),t.controls&&(e.controls=!0),t.muted&&(e.muted=!0),t.playsinline&&(e.playsinline=!0),t.poster&&(e.poster=t.poster),t.preload&&(e.preload=t.preload),i&&(e.ontimeupdate=function(){return i()}),o&&(e.onended=function(){return o()})}(o.videoTemplate,o.videoAttrs,i,this.onVideoClick,i.options?this.onVideoEnded:null,i.options?this.onTimeUpdate:null)}}]),t}();customElements.define("i-video",d)}]);
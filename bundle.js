(()=>{"use strict";var e,t,r,n,o,i,c,a={310:(e,t,r)=>{const n=e=>{document.querySelector(".main__wrapper").scrollTo({left:-e,behavior:"smooth"})};function o(){document.querySelector(".main__wrapper").scrollTo({left:0,behavior:"smooth"})}r(344);const i=document.querySelector(".sidebar"),c=document.querySelector(".main"),a=[],d=function(){let e=null,t=1;return{mouseEnterHandler:function(r){r.stopPropagation(),e=setInterval((()=>{t>=1443?clearInterval(e):(t+=16,r.target.style.filter=`drop-shadow(0px 0px 10px #e2ff00) brightness(0) invert(84%)\n          sepia(100%) brightness(106%) saturate(${t}%) hue-rotate(11deg) contrast(103%)`)}),1)},mouseOutHandler:function(r){r.stopPropagation(),clearInterval(e),e=setInterval((()=>{t<=1?(clearInterval(e),t=1):(t-=16,r.target.style.filter=`drop-shadow(0px 0px 10px #e2ff00) brightness(0) invert(84%)\n          sepia(100%) brightness(106%) saturate(${t}%) hue-rotate(11deg) contrast(103%)`)}),1)}}};document.addEventListener("DOMContentLoaded",(function(){const e=[...document.querySelectorAll(".socials__link img")],t=document.querySelector(".sidebar__switcher-mode-image"),r=document.querySelector(".sidebar__lang-item_en"),l=document.querySelector(".sidebar__lang-item_ua"),s=document.querySelector(".headline"),u=document.querySelector(".content"),f=s.clientHeight;document.querySelector(".overlay").style.width=4*window.innerWidth+"px",window.innerWidth<=768&&(document.querySelector(".content").style.width=3*window.innerWidth-100+"px"),r.addEventListener("click",(function(e){document.querySelector("#english").style.display="block",document.querySelector("#ukrainian").style.display="none"})),l.addEventListener("click",(function(e){document.querySelector("#ukrainian").style.display="block",document.querySelector("#english").style.display="none"})),t.addEventListener("click",(function(){i.classList.toggle("sidebar_night-mode"),a.forEach((function(e){e.element.style.filter="",e.element.removeEventListener("mouseenter",e.mouseEnterHandler),e.element.removeEventListener("mouseout",e.mouseOutHandler)})),a.length=0,i.classList.contains("sidebar_night-mode")?(document.querySelector(".sidebar__logo").src="./assets/img/logoNightMode.svg",document.querySelector(".headline__image").srcset="./assets/img/faceNightMode.png 320w, ./assets/img/faceNightModeBig.png 769w",document.querySelector(".order").classList.add("order_night-mode"),document.querySelector(".contacts__heading").classList.add("contacts__heading_night-mode"),document.querySelector(".menu").classList.add("menu_night-mode"),document.querySelector(".lines").style.display="none",document.querySelector(".lines2").style.display="none",document.querySelector(".gradient-4").classList.remove("active"),e.forEach((e=>{const{mouseEnterHandler:t,mouseOutHandler:r}=function(){let e=null,t=97;return{mouseEnterHandler:function(r){r.stopPropagation(),e=setInterval((()=>{t<=1?clearInterval(e):(t-=3,r.target.style.filter=`drop-shadow(0 0 10px #ffffff) brightness(${t}%)`)}),1)},mouseOutHandler:function(r){r.stopPropagation(),clearInterval(e),e=setInterval((()=>{t>=97?clearInterval(e):(t+=3,r.target.style.filter=`drop-shadow(0 0 10px #ffffff) brightness(${t}%)`)}),1)}}}();e.addEventListener("mouseenter",t),e.addEventListener("mouseout",r),a.push({element:e,mouseEnterHandler:t,mouseOutHandler:r})})),s.classList.add("headline_night-mode")):(document.querySelector(".sidebar__logo").src="./assets/img/logo.svg",document.querySelector(".logo").style.filter="",document.querySelector(".headline__image").srcset="./assets/img/face.png 320w, ./assets/img/faceBig.png 769w",document.querySelector(".order").classList.remove("order_night-mode"),document.querySelector(".contacts__heading").classList.remove("contacts__heading_night-mode"),document.querySelector(".menu").classList.remove("menu_night-mode"),e.forEach((e=>{const{mouseEnterHandler:t,mouseOutHandler:r}=d();e.addEventListener("mouseenter",t),e.addEventListener("mouseout",r),a.push({element:e,mouseEnterHandler:t,mouseOutHandler:r})})),s.classList.remove("headline_night-mode")),document.querySelector(".logo").style.filter="brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(108%) contrast(101%)",c.classList.toggle("main_night-mode")})),document.querySelector(".logo").style.filter="brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(108%) contrast(101%)",e.forEach((e=>{const{mouseEnterHandler:t,mouseOutHandler:r}=d();e.addEventListener("mouseenter",t),e.addEventListener("mouseout",r),a.push({element:e,mouseEnterHandler:t,mouseOutHandler:r})})),document.querySelector(".headline__button-wrapper").addEventListener("click",n.bind(window.innerWidth)),[...document.querySelectorAll(".order, .contacts, .menu, .headline")].forEach((e=>{e.style.flexBasis=window.innerWidth-50+"px",e.style.flexShrink="0"})),[...document.querySelectorAll(".back-menu")].forEach((e=>e.addEventListener("click",o)));const p=document.querySelector("[data-src]").getBoundingClientRect().left;window.innerWidth>768&&[...document.querySelectorAll(".menu, .headline, .contacts, .order")].forEach((e=>{e.style.flexShrink="1",e.style.flexBasis="auto"})),window.innerWidth<=768&&(document.querySelector("#make-video").scrollIntoView(),document.querySelector('[href="#make-video"]').addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#make-video").scrollIntoView({behavior:"smooth"})})),document.querySelector('[href="#deep-fake"]').addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#deep-fake").scrollIntoView({behavior:"smooth"})})),document.querySelector('[href="#contacts"]').addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#contacts").scrollIntoView({behavior:"smooth"})}))),window.innerWidth>768&&(document.querySelector('[href="#make-video"]').addEventListener("click",(function(e){e.preventDefault(),u.scrollTo({top:0,behavior:"smooth"})})),document.querySelector('[href="#deep-fake"]').addEventListener("click",(function(e){e.preventDefault(),u.scrollTo({top:f+100,behavior:"smooth"})})),document.querySelector('[href="#contacts"]').addEventListener("click",(function(e){e.preventDefault(),u.scrollTo({top:f+document.querySelector(".contacts").clientHeight+400,behavior:"smooth"})})));const h=document.querySelector(".headline__image").height-30;document.querySelector(".order__video-wrapper").style.height=(h>0?h:161)+"px",document.querySelector(".order__overlay").style.height=(h>0?h:161)+"px",document.querySelector(".lds-dual-ring").classList.add("active");((e,t)=>{window.innerWidth<=768?document.querySelector(".main__wrapper").addEventListener("scroll",((e,t)=>function t(r){if(console.log(NaN),console.log(r.target.scrollTop),r.target.scrollLeft>=e-100){r.target.removeEventListener("scroll",t);const e=document.querySelector("iframe"),n=e.getAttribute("data-src");e.src=n,e.removeAttribute("data-src"),document.querySelector(".lds-dual-ring").style.display="none"}})(e)):document.querySelector(".content").addEventListener("scroll",(e=>function t(r){if(r.target.scrollTop>=e-100){r.target.removeEventListener("scroll",t);const e=document.querySelector("iframe"),n=e.getAttribute("data-src");e.src=n,e.removeAttribute("data-src"),document.querySelector(".lds-dual-ring").style.display="none"}})(t))})(p,document.querySelector("[data-src]").getBoundingClientRect().top)})),document.querySelector(".order__video").addEventListener("load",(function(e){const t=document.querySelector(".headline__image").height-30;e.target.style.height=(t>0?t:161)+"px",document.querySelector(".order__video-wrapper").style.height=(t>0?t:161)+"px"}))},783:(e,t,r)=>{var n=r(618),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function a(){}function d(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(s(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.addEventListener("error",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function l(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&d(e)}))}function s(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,t){if(i)return console.log("no window.document found, will not HMR CSS"),a;var r,u,f=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),i=r[r.length-1];i&&(t=i.src)}o[e]=t}return function(e){if(!t)return null;var r=t.split(/([^\\/]+)\.js$/),o=r&&r[1];return o&&e?e.split(",").map((function(e){var r=new RegExp("".concat(o,"\\.js$"),"g");return n(t.replace(r,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return r=function(){var e=f(t.filename),r=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),r=!1;return c.call(t,(function(t){if(t.href){var o=function(e,t){var r;return e=n(e),t.some((function(n){e.indexOf(t)>-1&&(r=n)})),r}(t.href,e);s(o)&&!0!==t.visited&&o&&(d(t,o),r=!0)}})),r}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,u=0,function(){var e=this,t=arguments,n=function(){return r.apply(e,t)};clearTimeout(u),u=setTimeout(n,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(t,"i"),"").split("/"),n=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",t+n+r.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},344:(e,t,r)=>{var n=r(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},d={};function l(e){var t=d[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=d[e]={id:e,exports:{}};try{var n={id:e,module:r,factory:a[e],require:l};l.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.exports}l.m=a,l.c=d,l.i=[],l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"main."+l.h()+".hot-update.json",l.h=()=>"5cf92932029a7f6d560b",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="solution:",l.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var c,a;if(void 0!==o)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){c=u;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[n];var f=(t,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),a&&document.head.appendChild(c)}},(()=>{var e,t,r,n={},o=l.c,i=[],c=[],a="idle",d=0,s=[];function u(e){a=e;for(var t=[],r=0;r<c.length;r++)t[r]=c[r].call(null,e);return Promise.all(t)}function f(){0==--d&&u("ready").then((function(){if(0===d){var e=s;s=[];for(var t=0;t<e.length;t++)e[t]()}}))}function p(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return u("check").then(l.hmrM).then((function(r){return r?u("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?m(e):u("ready").then((function(){return n}))},0===d?t():new Promise((function(e){s.push((function(){e(t())}))}));var t}))})):u(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+a+")")})):m(e)}function m(e){e=e||{},v();var n=t.map((function(t){return t(e)}));t=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var c,a=u("apply"),d=function(e){c||(c=e)},l=[];return n.forEach((function(e){if(e.apply){var t=e.apply(d);if(t)for(var r=0;r<t.length;r++)l.push(t[r])}})),Promise.all([i,a]).then((function(){return c?u("fail").then((function(){throw c})):r?m(e).then((function(e){return l.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return l}))}))}function v(){if(r)return t||(t=[]),Object.keys(l.hmrI).forEach((function(e){r.forEach((function(r){l.hmrI[e](r,t)}))})),r=void 0,!0}l.hmrD=n,l.i.push((function(s){var m,v,g,y,_=s.module,E=function(t,r){var n=o[r];if(!n)return t;var c=function(c){if(n.hot.active){if(o[c]){var a=o[c].parents;-1===a.indexOf(r)&&a.push(r)}else i=[r],e=c;-1===n.children.indexOf(c)&&n.children.push(c)}else console.warn("[HMR] unexpected require("+c+") from disposed module "+r),i=[];return t(c)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&"e"!==s&&Object.defineProperty(c,s,l(s));return c.e=function(e){return function(e){switch(a){case"ready":u("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(t.e(e))},c}(s.require,s.id);_.hot=(m=s.id,v=_,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=v.parents.slice(),e=g?void 0:m,l(m)},active:!0,accept:function(e,t,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=t||function(){},y._acceptedErrorHandlers[e[n]]=r;else y._acceptedDependencies[e]=t||function(){},y._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":t=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,t)})),u("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return a;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:n[m]},e=void 0,y),_.parents=i,_.children=[],i=[],s.require=E})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=c,d.request=a,o.parentNode.removeChild(o),n(d)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(c=r[n]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var c;if((o=(c=i[n]).getAttribute("data-href"))===e||o===t)return c}},o=[],i=[],c=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,t,a,d,s,u)=>{s.push(c),e.forEach((e=>{var t=l.miniCssF(e),c=l.p+t,a=n(t,c);a&&d.push(new Promise(((t,n)=>{var d=r(e,c,(()=>{d.as="style",d.rel="preload",t()}),n);o.push(a),i.push(d)})))}))},(()=>{var e,t,r,n,o,i=l.hmrS_jsonp=l.hmrS_jsonp||{179:0},c={};function a(t,r){return e=r,new Promise(((e,r)=>{c[t]=e;var n=l.p+l.hu(t),o=new Error;l.l(n,(e=>{if(c[t]){c[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r(o)}}))}))}function d(e){function c(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,c=o.chain,d=l.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<d.parents.length;s++){var u=d.parents[s],f=l.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(f.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),a(r[u],[i])):(delete r[u],t.push(u),n.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}l.f&&delete l.f.jsonpHmr,t=void 0;var d={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(l.o(r,p)){var h,m=r[p],v=!1,g=!1,y=!1,_="";switch((h=m?c(p):{type:"disposed",moduleId:p}).chain&&(_="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+_));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+_));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+_));break;case"accepted":e.onAccepted&&e.onAccepted(h),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(p in u[p]=m,a(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),a(d[p],h.outdatedDependencies[p]));y&&(a(s,[h.moduleId]),u[p]=f)}r=void 0;for(var E,w=[],b=0;b<s.length;b++){var S=s[b],q=l.c[S];q&&(q.hot._selfAccepted||q.hot._main)&&u[S]!==f&&!q.hot._selfInvalidated&&w.push({module:S,require:q.hot._requireSelf,errorHandler:q.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var t,r=s.slice();r.length>0;){var o=r.pop(),c=l.c[o];if(c){var a={},u=c.hot._disposeHandlers;for(b=0;b<u.length;b++)u[b].call(null,a);for(l.hmrD[o]=a,c.hot.active=!1,delete l.c[o],delete d[o],b=0;b<c.children.length;b++){var f=l.c[c.children[b]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(l.o(d,p)&&(c=l.c[p]))for(E=d[p],b=0;b<E.length;b++)t=E[b],(e=c.children.indexOf(t))>=0&&c.children.splice(e,1)},apply:function(t){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var n=0;n<o.length;n++)o[n](l);for(var i in d)if(l.o(d,i)){var c=l.c[i];if(c){E=d[i];for(var a=[],f=[],p=[],h=0;h<E.length;h++){var m=E[h],v=c.hot._acceptedDependencies[m],g=c.hot._acceptedErrorHandlers[m];if(v){if(-1!==a.indexOf(v))continue;a.push(v),f.push(g),p.push(m)}}for(var y=0;y<a.length;y++)try{a[y].call(null,E)}catch(r){if("function"==typeof f[y])try{f[y](r,{moduleId:i,dependencyId:p[y]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[y],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[y],error:r}),e.ignoreErrored||t(r)}}}for(var _=0;_<w.length;_++){var b=w[_],S=b.module;try{b.require(S)}catch(r){if("function"==typeof b.errorHandler)try{b.errorHandler(r,{moduleId:S,module:l.c[S]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:S,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:S,error:r}),e.ignoreErrored||t(r)}}return s}}}self.webpackHotUpdatesolution=(t,n,i)=>{for(var a in n)l.o(n,a)&&(r[a]=n[a],e&&e.push(a));i&&o.push(i),c[t]&&(c[t](),c[t]=void 0)},l.hmrI.jsonp=function(e,t){r||(r={},o=[],n=[],t.push(d)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(e,c,s,u,f,p){f.push(d),t={},n=c,r=s.reduce((function(e,t){return e[t]=!1,e}),{}),o=[],e.forEach((function(e){l.o(i,e)&&void 0!==i[e]?(u.push(a(e,p)),t[e]=!0):t[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,r){t&&l.o(t,e)&&!t[e]&&(r.push(a(e)),t[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(310)})();
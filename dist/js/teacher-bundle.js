!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===b&&E()}(e,n),t&&t(e,n)};var n,r=!0,a="ac81b73ba930dd91769c",i={},o=[],c=[];function s(e){var t=j[e];if(!t)return H;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(o=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),o=[]),H(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,a(i));return r.e=function(e){return"ready"===l&&u("prepare"),b++,H.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===l&&(y[e]||O(e),0===b&&0===m&&E())}},r.t=function(e,t){return 1&t&&(e=r(e)),H.t(e,-2&t)},r}function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:_,status:function(e){if(!e)return l;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return n=void 0,t}var p=[],l="idle";function u(e){l=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var f,h,v,m=0,b=0,y={},g={},x={};function w(e){return+e+""===e?+e:e}function S(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,u("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=H.p+""+a+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return u("idle"),null;g={},y={},x=e.c,v=e.h,u("prepare");var t=new Promise((function(e,t){f={resolve:e,reject:t}}));h={};return O(1),"prepare"===l&&0===b&&0===m&&E(),t}));var t}function O(e){x[e]?(g[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=H.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function E(){u("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return _(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function _(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var n,r,c,s,d;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,o=a.chain;if((s=j[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var c=0;c<s.parents.length;c++){var d=s.parents[c],p=j[d];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(p.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),f(n[d],[i])):(delete n[d],t.push(d),r.push({chain:o.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},b=[],y={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var O;d=w(S);var E=!1,_=!1,M=!1,k="";switch((O=h[S]?p(d):{type:"disposed",moduleId:S}).chain&&(k="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(E=new Error("Aborted because "+d+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(O),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),M=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return u("abort"),Promise.reject(E);if(_)for(d in y[d]=h[d],f(b,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(m[d]||(m[d]=[]),f(m[d],O.outdatedDependencies[d]));M&&(f(b,[O.moduleId]),y[d]=g)}var D,T=[];for(r=0;r<b.length;r++)d=b[r],j[d]&&j[d].hot._selfAccepted&&y[d]!==g&&T.push({module:d,errorHandler:j[d].hot._selfAccepted});u("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)}));for(var A,q,P=b.slice();P.length>0;)if(d=P.pop(),s=j[d]){var I={},L=s.hot._disposeHandlers;for(c=0;c<L.length;c++)(n=L[c])(I);for(i[d]=I,s.hot.active=!1,delete j[d],delete m[d],c=0;c<s.children.length;c++){var C=j[s.children[c]];C&&((D=C.parents.indexOf(d))>=0&&C.parents.splice(D,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(s=j[d]))for(q=m[d],c=0;c<q.length;c++)A=q[c],(D=s.children.indexOf(A))>=0&&s.children.splice(D,1);for(d in u("apply"),a=v,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var N=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(s=j[d])){q=m[d];var U=[];for(r=0;r<q.length;r++)if(A=q[r],n=s.hot._acceptedDependencies[A]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(q)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:q[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<T.length;r++){var R=T[r];d=R.module,o=[d];try{H(d)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||N||(N=e)}}return N?(u("fail"),Promise.reject(N)):(u("idle"),new Promise((function(e){e(b)})))}var j={};function H(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=o,o=[],c),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}H.m=e,H.c=j,H.d=function(e,t,n){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(H.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)H.d(n,r,function(t){return e[t]}.bind(null,r));return n},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="",H.h=function(){return a},s(611)(H.s=611)}({0:function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o={};function c(e,t,n){for(var r=0;r<t.length;r++){var a={css:t[r][1],media:t[r][2],sourceMap:t[r][3]};o[e][r]?o[e][r](a):o[e].push(v(a,n))}}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function l(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function u(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function v(e,t){var n,r,a;if(t.singleton){var i=h++;n=f||(f=s(t)),r=l.bind(null,n,i,!1),a=l.bind(null,n,i,!0)}else n=s(t),r=u.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a()),e=n.base?e+n.base:e,t=t||[],o[e]||(o[e]=[]),c(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){o[e]||(o[e]=[]),c(e,t,n);for(var r=t.length;r<o[e].length;r++)o[e][r]();o[e].length=t.length,0===o[e].length&&delete o[e]}}}},2:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},3:function(e,t,n){(t=n(2)(!1)).push([e.i,"#teacher-app{font-family:Gotham-Light, sans-serif;font-size:20px;margin:auto;width:100%;max-width:1200px;height:auto}#teacher-app #first-step{display:flex;flex-direction:column}#teacher-app #first-step .searchbox{padding:10px;background-color:#f4b200;display:flex}#teacher-app #first-step .searchbox button img{width:16px;height:16px}#teacher-app #first-step table{font-size:14px;width:100%;margin:0;padding:0;margin-top:10px}#teacher-app #first-step table thead tr>th{text-align:left}#teacher-app #first-step table thead tr>th:nth-child(1){width:20px}#teacher-app #second-step{display:none;font-size:14px}#teacher-app #second-step .number-of-exercises{display:flex;height:210px}#teacher-app #second-step .number-of-exercises .level{height:1px}#teacher-app #second-step .number-of-exercises .level h1{font-size:16px;padding-left:5px}#teacher-app #second-step .number-of-exercises .level div{display:flex}#teacher-app #second-step .number-of-exercises .level div span{margin:5px;width:60%}#teacher-app #second-step .number-of-exercises .level div input{margin:5px;width:40%}#teacher-app #second-step .bottom-bar button{font-size:14px}\n",""]),e.exports=t},611:function(e,t,n){"use strict";n.r(t);n(612),n(614);var r,a,i="http://phantomserver8.website/music/app-api",o=(a=b(i,"get_students"),JSON.parse(a)),c=document.querySelector("table>tbody"),s=document.querySelector("#first-step button#next-step"),d=document.querySelector("#first-step"),p=document.querySelector("#second-step"),l=document.querySelector("#second-step button#submit"),u=document.querySelector("#second-step button#clear"),f=document.querySelector("#second-step button#go-back"),h=document.querySelector("#first-step .searchbox input"),v=document.querySelector("#first-step .searchbox button");function m(){for(var e=h.value,t=c.children,n=0;n<t.length;n++){for(var r=t[n].children,a=!0,i=1;i<r.length;i++){r[i].innerHTML.match(e)&&(a=!1)}t[n].style.display=a?"none":"table-row"}}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=new XMLHttpRequest;return r.open("POST",e,!1),r.setRequestHeader("Content-Type","text/plain"),r.setRequestHeader("API-Function",t),n?r.send(n):r.send(),r.responseText}o.forEach((function(e,t){var n=document.createElement("tr"),r=document.createElement("input"),a=[];r.type="checkbox",r.name=e.id;for(var i=0;i<5;i++)a[i]=document.createElement("td");for(var o in a[0].appendChild(r),a[1].innerHTML=e.nickname,a[2].innerHTML=e.name,a[3].innerHTML=e.surname,a[4].innerHTML=e.email,a)n.appendChild(a[o]);c.appendChild(n)})),s.addEventListener("click",(function(){r=[];for(var e=c.children,t=0;t<e.length;t++){var n=e[t].children,a=n[0].firstElementChild.checked,i=n[4].innerHTML;a&&r.push(i)}d.style.display="none",p.style.display="block"})),f.addEventListener("click",(function(){d.style.display="flex",p.style.display="none"})),u.addEventListener("click",(function(){for(var e=document.querySelectorAll("#second-step input"),t=0;t<e.length;t++)e[t].value=0})),l.addEventListener("click",(function(){for(var e=document.querySelectorAll("#second-step input"),t={novice:{},apprentice:{},adept:{},expert:{},master:{}},n=1;n<=e.length;n++){var a=e[n-1].value;switch(n){case 1:t.novice.treble=a;case 2:t.novice.bass=a;case 3:t.novice.grandStaff=a;case 4:t.novice.alto=a;case 5:t.apprentice.treble=a;case 6:t.apprentice.bass=a;case 7:t.apprentice.grandStaff=a;case 8:t.apprentice.alto=a;case 9:t.adept.treble=a;case 10:t.adept.bass=a;case 11:t.adept.grandStaff=a;case 12:t.adept.alto=a;case 13:t.expert.treble=a;case 14:t.expert.bass=a;case 15:t.expert.grandStaff=a;case 16:t.expert.alto=a;case 17:t.master.treble=a;case 18:t.master.bass=a;case 19:t.master.grandStaff=a;case 20:t.master.alto=a}}var o={emails:r,task:t},c=b(i,"send_emails",JSON.stringify(o));c&&(console.log(c),alert("You've just sent emails to students!"))})),h.addEventListener("change",m),v.addEventListener("click",m)},612:function(e,t,n){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="ie=edge"> <title>Note Identification - Teacher\'s page</title> </head> <body> <div id=teacher-app> <div id=first-step> <div class=searchbox> <input type=text placeholder=Search... name=search> <button type=submit><img src='+n(613)+' alt=""></button> </div> <table> <thead> <tr> <th></th> <th>Nickname:</th> <th>Name:</th> <th>Surname:</th> <th>Email:</th> </tr> </thead> <tbody> </tbody> </table> <div class=bottom-bar> <button id=next-step>Next step</button> </div> </div> <div id=second-step> <div class=number-of-exercises> <div class="level novice"> <h1>Novice</h1> <div> <span>Treble: </span><input type=number value=0> </div> <div> <span>Bass: </span><input type=number value=0> </div> <div> <span>Grand Staff: </span><input type=number value=0> </div> <div> <span>Alto: </span><input type=number value=0> </div> </div> <div class="level apprentice"> <h1>Apprentice</h1> <div> <span>Treble: </span><input type=number value=0> </div> <div> <span>Bass: </span><input type=number value=0> </div> <div> <span>Grand Staff: </span><input type=number value=0> </div> <div> <span>Alto: </span><input type=number value=0> </div> </div> <div class="level adept"> <h1>Adept</h1> <div> <span>Treble: </span><input type=number value=0> </div> <div> <span>Bass: </span><input type=number value=0> </div> <div> <span>Grand Staff: </span><input type=number value=0> </div> <div> <span>Alto: </span><input type=number value=0> </div> </div> <div class="level expert"> <h1>Expert</h1> <div> <span>Treble: </span><input type=number value=0> </div> <div> <span>Bass: </span><input type=number value=0> </div> <div> <span>Grand Staff: </span><input type=number value=0> </div> <div> <span>Alto: </span><input type=number value=0> </div> </div> <div class="level master"> <h1>Master</h1> <div> <span>Treble: </span><input type=number value=0> </div> <div> <span>Bass: </span><input type=number value=0> </div> <div> <span>Grand Staff: </span><input type=number value=0> </div> <div> <span>Alto: </span><input type=number value=0> </div> </div> </div> <div class=bottom-bar> <button id=submit>Submit</button> <button id=clear>Clear</button> <button id=go-back>Go back</button> </div> </div> </div> </body> </html> '},613:function(e,t,n){e.exports=n.p+"img/5dae5725634d09d2660b2a1f7dc2760e.png"},614:function(e,t,n){var r=n(0),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(e.i,a,i),c=a.locals?a.locals:{};a.locals||e.hot.accept(3,(function(){var t=n(3);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()})),e.exports=c}});
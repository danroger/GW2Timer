// jQuery throttle/debounce (1.1) by Ben Alman http://benalman.com
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
// ZeroClipboard (2.1.1) by Jon Rohan, James M. Greene http://zeroclipboard.org
!function(a,b){"use strict";var c,d=a,e=d.document,f=d.navigator,g=d.setTimeout,h=d.Number.parseInt||d.parseInt,i=d.Number.parseFloat||d.parseFloat,j=d.Number.isNaN||d.isNaN,k=d.encodeURIComponent,l=d.Math,m=d.Date,n=d.ActiveXObject,o=d.Array.prototype.slice,p=d.Object.keys,q=d.Object.prototype.hasOwnProperty,r=function(){return"function"==typeof d.Object.defineProperty&&function(){try{var a={};return d.Object.defineProperty(a,"y",{value:"z"}),"z"===a.y}catch(b){return!1}}()?d.Object.defineProperty:void 0}(),s=function(a){return o.call(a,0)},t=function(a,b,c){if("function"==typeof b.indexOf)return b.indexOf(a,c);var d,e=b.length;for("undefined"==typeof c?c=0:0>c&&(c=e+c),d=c;e>d;d++)if(q.call(b,d)&&b[d]===a)return d;return-1},u=function(){var a,c,d,e,f,g,h=s(arguments),i=h[0]||{};for(a=1,c=h.length;c>a;a++)if(null!=(d=h[a]))for(e in d)if(q.call(d,e)){if(f=i[e],g=d[e],i===g)continue;g!==b&&(i[e]=g)}return i},v=function(a){var b,c,d,e;if("object"!=typeof a||null==a)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;d>c;c++)q.call(a,c)&&(b[c]=v(a[c]));else{b={};for(e in a)q.call(a,e)&&(b[e]=v(a[e]))}return b},w=function(a,b){for(var c={},d=0,e=b.length;e>d;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},x=function(a,b){var c={};for(var d in a)-1===t(d,b)&&(c[d]=a[d]);return c},y=function(a){if(null==a)return[];if(p)return p(a);var b=[];for(var c in a)q.call(a,c)&&b.push(c);return b},z=function(a){if(a)for(var b in a)q.call(a,b)&&delete a[b];return a},A=function(a,b){b in a&&"function"==typeof r&&r(a,b,{value:a[b],writable:!1,configurable:!0,enumerable:!0})},B=function(a){return function(){var b;return b=a.now?a.now():(new a).getTime()}}(m),C=function(a,b){if(a&&1===a.nodeType&&b&&(1===b.nodeType||9===b.nodeType))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},D={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},E="11.0.0",F={},G={},H=null,I={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},J=function(){var a,b,c,d,f="ZeroClipboard.swf";if(!e.currentScript||!(d=e.currentScript.src)){var g=e.getElementsByTagName("script");if("readyState"in g[0])for(a=g.length;a--&&("interactive"!==g[a].readyState||!(d=g[a].src)););else if("loading"===e.readyState)d=g[g.length-1].src;else{for(a=g.length;a--;){if(c=g[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],f=d.slice(0,d.lastIndexOf("/")+1)+f),f}(),K={swfPath:J,trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},L=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(q.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))K[b]=a[b];else if(null==D.bridge)if("containerId"===b||"swfObjectId"===b){if(!$(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");K[b]=a[b]}else K[b]=a[b];{if("string"!=typeof a||!a)return v(K);if(q.call(K,a))return K[a]}},M=function(){return{browser:w(f,["userAgent","platform","appName"]),flash:x(D,["bridge"]),zeroclipboard:{version:Bb.version,config:Bb.config()}}},N=function(){return!!(D.disabled||D.outdated||D.unavailable||D.deactivated)},O=function(a,b){var c,d,e,f={};if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Bb.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,F[a]||(F[a]=[]),F[a].push(b);if(f.ready&&D.ready&&Bb.emit({type:"ready"}),f.error){var g=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=g.length;d>c;c++)if(D[g[c]]===!0){Bb.emit({type:"error",name:"flash-"+g[c]});break}}}return Bb},P=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=y(F);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Bb.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=F[a],g&&g.length)if(b)for(e=t(b,g);-1!==e;)g.splice(e,1),e=t(b,g,e);else g.length=0;return Bb},Q=function(a){var b;return b="string"==typeof a&&a?v(F[a])||null:v(F)},R=function(a){var b,c,d;return a=_(a),a&&!fb(a)?"ready"===a.type&&D.overdue===!0?Bb.emit({type:"error",name:"flash-overdue"}):(b=u({},a),eb.call(this,b),"copy"===a.type&&(d=lb(G),c=d.data,H=d.formatMap),c):void 0},S=function(){if("boolean"!=typeof D.ready&&(D.ready=!1),!Bb.isFlashUnusable()&&null===D.bridge){var a=K.flashLoadTimeout;"number"==typeof a&&a>=0&&g(function(){"boolean"!=typeof D.deactivated&&(D.deactivated=!0),D.deactivated===!0&&Bb.emit({type:"error",name:"flash-deactivated"})},a),D.overdue=!1,jb()}},T=function(){Bb.clearData(),Bb.blur(),Bb.emit("destroy"),kb(),Bb.off()},U=function(a,b){var c;if("object"==typeof a&&a&&"undefined"==typeof b)c=a,Bb.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&q.call(c,d)&&"string"==typeof c[d]&&c[d]&&(G[d]=c[d])},V=function(a){"undefined"==typeof a?(z(G),H=null):"string"==typeof a&&q.call(G,a)&&delete G[a]},W=function(a){return"undefined"==typeof a?v(G):"string"==typeof a&&q.call(G,a)?G[a]:void 0},X=function(a){if(a&&1===a.nodeType){c&&(tb(c,K.activeClass),c!==a&&tb(c,K.hoverClass)),c=a,sb(a,K.hoverClass);var b=a.getAttribute("title")||K.title;if("string"==typeof b&&b){var d=ib(D.bridge);d&&d.setAttribute("title",b)}var e=K.forceHandCursor===!0||"pointer"===ub(a,"cursor");yb(e),xb()}},Y=function(){var a=ib(D.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.top="1px"),c&&(tb(c,K.hoverClass),tb(c,K.activeClass),c=null)},Z=function(){return c||null},$=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},_=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){u(a,{type:b.toLowerCase(),target:a.target||c||null,relatedTarget:a.relatedTarget||null,currentTarget:D&&D.bridge||null,timeStamp:a.timeStamp||B()||null});var d=I[a.type];return"error"===a.type&&a.name&&d&&(d=d[a.name]),d&&(a.message=d),"ready"===a.type&&u(a,{target:null,version:D.version}),"error"===a.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(a.name)&&u(a,{target:null,minimumVersion:E}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(a.name)&&u(a,{version:D.version})),"copy"===a.type&&(a.clipboardData={setData:Bb.setData,clearData:Bb.clearData}),"aftercopy"===a.type&&(a=mb(a,H)),a.target&&!a.relatedTarget&&(a.relatedTarget=ab(a.target)),a=bb(a)}},ab=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?e.getElementById(b):null},bb=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,f="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,g="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=wb(c),i=d.screenLeft||d.screenX||0,j=d.screenTop||d.screenY||0,k=e.body.scrollLeft+e.documentElement.scrollLeft,l=e.body.scrollTop+e.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,u(a,{srcElement:c,fromElement:f,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},cb=function(a){var b=a&&"string"==typeof a.type&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},db=function(a,b,c,d){d?g(function(){a.apply(b,c)},0):a.apply(b,c)},eb=function(a){if("object"==typeof a&&a&&a.type){var b=cb(a),c=F["*"]||[],e=F[a.type]||[],f=c.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof d[i]&&(i=d[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=u({},a),db(i,j,[k],b))}return this}},fb=function(a){var b=a.target||c||null,d="swf"===a._source;switch(delete a._source,a.type){case"error":t(a.name,["flash-disabled","flash-outdated","flash-deactivated","flash-overdue"])&&u(D,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1});break;case"ready":var e=D.deactivated===!0;u(D,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:e,ready:!e});break;case"copy":var f,g,h=a.relatedTarget;!G["text/html"]&&!G["text/plain"]&&h&&(g=h.value||h.outerHTML||h.innerHTML)&&(f=h.value||h.textContent||h.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",f),g!==f&&a.clipboardData.setData("text/html",g)):!G["text/plain"]&&a.target&&(f=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",f));break;case"aftercopy":Bb.clearData(),b&&b!==rb()&&b.focus&&b.focus();break;case"_mouseover":Bb.focus(b),K.bubbleEvents===!0&&d&&(b&&b!==a.relatedTarget&&!C(a.relatedTarget,b)&&gb(u({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),gb(u({},a,{type:"mouseover"})));break;case"_mouseout":Bb.blur(),K.bubbleEvents===!0&&d&&(b&&b!==a.relatedTarget&&!C(a.relatedTarget,b)&&gb(u({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),gb(u({},a,{type:"mouseout"})));break;case"_mousedown":sb(b,K.activeClass),K.bubbleEvents===!0&&d&&gb(u({},a,{type:a.type.slice(1)}));break;case"_mouseup":tb(b,K.activeClass),K.bubbleEvents===!0&&d&&gb(u({},a,{type:a.type.slice(1)}));break;case"_click":case"_mousemove":K.bubbleEvents===!0&&d&&gb(u({},a,{type:a.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)?!0:void 0},gb=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,f=c&&c.ownerDocument||e,g={view:f.defaultView||d,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:f.createEvent?0:1},h=u(g,a);c&&f.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=f.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},hb=function(){var a=e.createElement("div");return a.id=K.containerId,a.className=K.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+zb(K.zIndex),a},ib=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},jb=function(){var a,b=D.bridge,c=ib(b);if(!b){var f=qb(d.location.host,K),g="never"===f?"none":"all",h=ob(K),i=K.swfPath+nb(K.swfPath,K);c=hb();var j=e.createElement("div");c.appendChild(j),e.body.appendChild(c);var k=e.createElement("div"),l="activex"===D.pluginType;k.innerHTML='<object id="'+K.swfObjectId+'" name="'+K.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+f+'"/><param name="allowNetworking" value="'+g+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/></object>',b=k.firstChild,k=null,b.ZeroClipboard=Bb,c.replaceChild(b,j)}return b||(b=e[K.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),D.bridge=b||null,b},kb=function(){var a=D.bridge;if(a){var b=ib(a);b&&("activex"===D.pluginType&&"readyState"in a?(a.style.display="none",function c(){if(4===a.readyState){for(var d in a)"function"==typeof a[d]&&(a[d]=null);a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b)}else g(c,10)}()):(a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b))),D.ready=null,D.bridge=null,D.deactivated=null}},lb=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&q.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},mb=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(q.call(a,d)){if("success"!==d&&"data"!==d){c[d]=a[d];continue}c[d]={};var e=a[d];for(var f in e)f&&q.call(e,f)&&q.call(b,f)&&(c[d][b[f]]=e[f])}return c},nb=function(a,b){var c=null==b||b&&b.cacheBust===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+B():""},ob=function(a){var b,c,e,f,g="",h=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?f=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=a.trustedDomains)),f&&f.length)for(b=0,c=f.length;c>b;b++)if(q.call(f,b)&&f[b]&&"string"==typeof f[b]){if(e=pb(f[b]),!e)continue;if("*"===e){h=[e];break}h.push.apply(h,[e,"//"+e,d.location.protocol+"//"+e])}return h.length&&(g+="trustedOrigins="+k(h.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+k(a.swfObjectId)),g},pb=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},qb=function(){var a=function(a,b){var c,d,e;if(null!=a&&"*"!==b[0]&&("string"==typeof a&&(a=[a]),"object"==typeof a&&"number"==typeof a.length))for(c=0,d=a.length;d>c;c++)if(q.call(a,c)&&(e=pb(a[c]))){if("*"===e){b.length=0,b.push("*");break}-1===t(e,b)&&b.push(e)}};return function(b,c){var d=pb(c.swfPath);null===d&&(d=b);var e=[];a(c.trustedOrigins,e),a(c.trustedDomains,e);var f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==t(b,e))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),rb=function(){try{return e.activeElement}catch(a){return null}},sb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},tb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if("string"==typeof b&&b){var c=b.split(/\s+/);if(1===a.nodeType&&a.className){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}}return a},ub=function(a,b){var c=d.getComputedStyle(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},vb=function(){var a,b,c,d=1;return"function"==typeof e.body.getBoundingClientRect&&(a=e.body.getBoundingClientRect(),b=a.right-a.left,c=e.body.offsetWidth,d=l.round(b/c*100)/100),d},wb=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c,f,g,h=a.getBoundingClientRect();"pageXOffset"in d&&"pageYOffset"in d?(c=d.pageXOffset,f=d.pageYOffset):(g=vb(),c=l.round(e.documentElement.scrollLeft/g),f=l.round(e.documentElement.scrollTop/g));var i=e.documentElement.clientLeft||0,j=e.documentElement.clientTop||0;b.left=h.left+c-i,b.top=h.top+f-j,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},xb=function(){var a;if(c&&(a=ib(D.bridge))){var b=wb(c);u(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+zb(K.zIndex)})}},yb=function(a){D.ready===!0&&(D.bridge&&"function"==typeof D.bridge.setHandCursor?D.bridge.setHandCursor(a):D.ready=!1)},zb=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||j(a)?"string"==typeof a&&(b=zb(h(a,10))):b=a,"number"==typeof b?b:"auto"},Ab=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(j=!0,a.version&&(m=b(a.version)),!m&&a.description&&(m=b(a.description)),a.filename&&(l=c(a.filename)))}var e,g,h,j=!1,k=!1,l=!1,m="";if(f.plugins&&f.plugins.length)e=f.plugins["Shockwave Flash"],d(e),f.plugins["Shockwave Flash 2.0"]&&(j=!0,m="2.0.0.11");else if(f.mimeTypes&&f.mimeTypes.length)h=f.mimeTypes["application/x-shockwave-flash"],e=h&&h.enabledPlugin,d(e);else if("undefined"!=typeof a){k=!0;try{g=new a("ShockwaveFlash.ShockwaveFlash.7"),j=!0,m=b(g.GetVariable("$version"))}catch(n){try{g=new a("ShockwaveFlash.ShockwaveFlash.6"),j=!0,m="6.0.21"}catch(o){try{g=new a("ShockwaveFlash.ShockwaveFlash"),j=!0,m=b(g.GetVariable("$version"))}catch(p){k=!1}}}}D.disabled=j!==!0,D.outdated=m&&i(m)<i(E),D.version=m||"0.0.0",D.pluginType=l?"pepper":k?"activex":j?"netscape":"unknown"};Ab(n);var Bb=function(){return this instanceof Bb?void("function"==typeof Bb._createClient&&Bb._createClient.apply(this,s(arguments))):new Bb};Bb.version="2.1.1",A(Bb,"version"),Bb.config=function(){return L.apply(this,s(arguments))},Bb.state=function(){return M.apply(this,s(arguments))},Bb.isFlashUnusable=function(){return N.apply(this,s(arguments))},Bb.on=function(){return O.apply(this,s(arguments))},Bb.off=function(){return P.apply(this,s(arguments))},Bb.handlers=function(){return Q.apply(this,s(arguments))},Bb.emit=function(){return R.apply(this,s(arguments))},Bb.create=function(){return S.apply(this,s(arguments))},Bb.destroy=function(){return T.apply(this,s(arguments))},Bb.setData=function(){return U.apply(this,s(arguments))},Bb.clearData=function(){return V.apply(this,s(arguments))},Bb.getData=function(){return W.apply(this,s(arguments))},Bb.focus=Bb.activate=function(){return X.apply(this,s(arguments))},Bb.blur=Bb.deactivate=function(){return Y.apply(this,s(arguments))},Bb.activeElement=function(){return Z.apply(this,s(arguments))};var Cb=0,Db={},Eb=0,Fb={},Gb={};u(K,{autoActivate:!0});var Hb=function(a){var b=this;b.id=""+Cb++,Db[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Bb.on("*",function(a){return b.emit(a)}),Bb.on("destroy",function(){b.destroy()}),Bb.create()},Ib=function(a,b){var c,d,e,f={},g=Db[this.id]&&Db[this.id].handlers;if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,g[a]||(g[a]=[]),g[a].push(b);if(f.ready&&D.ready&&this.emit({type:"ready",client:this}),f.error){var h=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=h.length;d>c;c++)if(D[h[c]]){this.emit({type:"error",name:"flash-"+h[c],client:this});break}}}return this},Jb=function(a,b){var c,d,e,f,g,h=Db[this.id]&&Db[this.id].handlers;if(0===arguments.length)f=y(h);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=h[a],g&&g.length)if(b)for(e=t(b,g);-1!==e;)g.splice(e,1),e=t(b,g,e);else g.length=0;return this},Kb=function(a){var b=null,c=Db[this.id]&&Db[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:v(c)),b},Lb=function(a){if(Qb.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=u({},a));var b=u({},_(a),{client:this});Rb.call(this,b)}return this},Mb=function(a){a=Sb(a);for(var b=0;b<a.length;b++)if(q.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===t(this.id,Fb[a[b].zcClippingId])&&Fb[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Eb++,Fb[a[b].zcClippingId]=[this.id],K.autoActivate===!0&&Tb(a[b]));var c=Db[this.id]&&Db[this.id].elements;-1===t(a[b],c)&&c.push(a[b])}return this},Nb=function(a){var b=Db[this.id];if(!b)return this;var c,d=b.elements;a="undefined"==typeof a?d.slice(0):Sb(a);for(var e=a.length;e--;)if(q.call(a,e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=t(a[e],d,c));)d.splice(c,1);var f=Fb[a[e].zcClippingId];if(f){for(c=0;-1!==(c=t(this.id,f,c));)f.splice(c,1);0===f.length&&(K.autoActivate===!0&&Ub(a[e]),delete a[e].zcClippingId)}}return this},Ob=function(){var a=Db[this.id];return a&&a.elements?a.elements.slice(0):[]},Pb=function(){this.unclip(),this.off(),delete Db[this.id]},Qb=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Db[this.id]&&Db[this.id].elements,c=!!b&&b.length>0,d=!a.target||c&&-1!==t(a.target,b),e=a.relatedTarget&&c&&-1!==t(a.relatedTarget,b),f=a.client&&a.client===this;return d||e||f?!0:!1},Rb=function(a){if("object"==typeof a&&a&&a.type){var b=cb(a),c=Db[this.id]&&Db[this.id].handlers["*"]||[],e=Db[this.id]&&Db[this.id].handlers[a.type]||[],f=c.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof d[i]&&(i=d[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=u({},a),db(i,j,[k],b))}return this}},Sb=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},Tb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=d.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},c=function(c){(c||(c=d.event))&&(b(c),Bb.focus(a))};a.addEventListener("mouseover",c,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),Gb[a.zcClippingId]={mouseover:c,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},Ub=function(a){if(a&&1===a.nodeType){var b=Gb[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;g>f;f++)c="mouse"+e[f],d=b[c],"function"==typeof d&&a.removeEventListener(c,d,!1);delete Gb[a.zcClippingId]}}};Bb._createClient=function(){Hb.apply(this,s(arguments))},Bb.prototype.on=function(){return Ib.apply(this,s(arguments))},Bb.prototype.off=function(){return Jb.apply(this,s(arguments))},Bb.prototype.handlers=function(){return Kb.apply(this,s(arguments))},Bb.prototype.emit=function(){return Lb.apply(this,s(arguments))},Bb.prototype.clip=function(){return Mb.apply(this,s(arguments))},Bb.prototype.unclip=function(){return Nb.apply(this,s(arguments))},Bb.prototype.elements=function(){return Ob.apply(this,s(arguments))},Bb.prototype.destroy=function(){return Pb.apply(this,s(arguments))},Bb.prototype.setText=function(a){return Bb.setData("text/plain",a),this},Bb.prototype.setHtml=function(a){return Bb.setData("text/html",a),this},Bb.prototype.setRichText=function(a){return Bb.setData("application/rtf",a),this},Bb.prototype.setData=function(){return Bb.setData.apply(this,s(arguments)),this},Bb.prototype.clearData=function(){return Bb.clearData.apply(this,s(arguments)),this},Bb.prototype.getData=function(){return Bb.getData.apply(this,s(arguments))},"function"==typeof define&&define.amd?define(function(){return Bb}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Bb:a.ZeroClipboard=Bb}(function(){return this}());
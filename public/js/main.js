(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});//cookie
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery);//hoverintent
(function(e,t,n){"use strict";t.infinitescroll=function(n,r,i){this.element=t(i);if(!this._create(n,r)){this.failed=true}};t.infinitescroll.defaults={loading:{finished:n,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:images/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:n},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,isBeyondMaxPage:false,currPage:1},debug:false,behavior:n,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:n,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:n,path:n,prefill:false,maxPage:n};t.infinitescroll.prototype={_binding:function(t){var r=this,i=r.options;i.v="2.0b2.120520";if(!!i.behavior&&this["_binding_"+i.behavior]!==n){this["_binding_"+i.behavior].call(this);return}if(t!=="bind"&&t!=="unbind"){this._debug("Binding value  "+t+" not valid");return false}if(t==="unbind"){this.options.binder.unbind("smartscroll.infscr."+r.options.infid)}else{this.options.binder[t]("smartscroll.infscr."+r.options.infid,function(){r.scroll()})}this._debug("Binding",t)},_create:function(i,s){var o=t.extend(true,{},t.infinitescroll.defaults,i);this.options=o;var u=t(e);var a=this;if(!a._validate(i)){return false}var f=t(o.nextSelector).attr("href");if(!f){this._debug("Navigation selector not found");return false}o.path=o.path||this._determinepath(f);o.contentSelector=o.contentSelector||this.element;o.loading.selector=o.loading.selector||o.contentSelector;o.loading.msg=o.loading.msg||t('<div id="infscr-loading"><img alt="Loading..." src="'+o.loading.img+'" /><div>'+o.loading.msgText+"</div></div>");(new Image).src=o.loading.img;if(o.pixelsFromNavToBottom===n){o.pixelsFromNavToBottom=t(document).height()-t(o.navSelector).offset().top;this._debug("pixelsFromNavToBottom: "+o.pixelsFromNavToBottom)}var l=this;o.loading.start=o.loading.start||function(){t(o.navSelector).hide();o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed,t.proxy(function(){this.beginAjax(o)},l))};o.loading.finished=o.loading.finished||function(){if(!o.state.isBeyondMaxPage)o.loading.msg.fadeOut(o.loading.speed)};o.callback=function(e,r,i){if(!!o.behavior&&e["_callback_"+o.behavior]!==n){e["_callback_"+o.behavior].call(t(o.contentSelector)[0],r,i)}if(s){s.call(t(o.contentSelector)[0],r,o,i)}if(o.prefill){u.bind("resize.infinite-scroll",e._prefill)}};if(i.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}}this._setup();if(o.prefill){this._prefill()}return true},_prefill:function(){function s(){return r.options.contentSelector.height()<=i.height()}var r=this;var i=t(e);this._prefill=function(){if(s()){r.scroll()}i.bind("resize.infinite-scroll",function(){if(s()){i.unbind("resize.infinite-scroll");r.scroll()}})};this._prefill()},_debug:function(){if(true!==this.options.debug){return}if(typeof console!=="undefined"&&typeof console.log==="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},_determinepath:function(t){var r=this.options;if(!!r.behavior&&this["_determinepath_"+r.behavior]!==n){return this["_determinepath_"+r.behavior].call(this,t)}if(!!r.pathParse){this._debug("pathParse manual");return r.pathParse(t,this.options.state.currPage+1)}else if(t.match(/^(.*?)\b2\b(.*?$)/)){t=t.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else if(t.match(/^(.*?)2(.*?$)/)){if(t.match(/^(.*?page=)2(\/.*|$)/)){t=t.match(/^(.*?page=)2(\/.*|$)/).slice(1);return t}t=t.match(/^(.*?)2(.*?$)/).slice(1)}else{if(t.match(/^(.*?page=)1(\/.*|$)/)){t=t.match(/^(.*?page=)1(\/.*|$)/).slice(1);return t}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");r.state.isInvalidPage=true}}this._debug("determinePath",t);return t},_error:function(t){var r=this.options;if(!!r.behavior&&this["_error_"+r.behavior]!==n){this["_error_"+r.behavior].call(this,t);return}if(t!=="destroy"&&t!=="end"){t="unknown"}this._debug("Error",t);if(t==="end"||r.state.isBeyondMaxPage){this._showdonemsg()}r.state.isDone=true;r.state.currPage=1;r.state.isPaused=false;r.state.isBeyondMaxPage=false;this._binding("unbind")},_loadcallback:function(i,s,o){var u=this.options,a=this.options.callback,f=u.state.isDone?"done":!u.appendCallback?"no-append":"append",l;if(!!u.behavior&&this["_loadcallback_"+u.behavior]!==n){this["_loadcallback_"+u.behavior].call(this,i,s);return}switch(f){case"done":this._showdonemsg();return false;case"no-append":if(u.dataType==="html"){s="<div>"+s+"</div>";s=t(s).find(u.itemSelector)}break;case"append":var c=i.children();if(c.length===0){return this._error("end")}l=document.createDocumentFragment();while(i[0].firstChild){l.appendChild(i[0].firstChild)}this._debug("contentSelector",t(u.contentSelector)[0]);t(u.contentSelector)[0].appendChild(l);s=c.get();break}u.loading.finished.call(t(u.contentSelector)[0],u);if(u.animate){var h=t(e).scrollTop()+t(u.loading.msg).height()+u.extraScrollPx+"px";t("html,body").animate({scrollTop:h},800,function(){u.state.isDuringAjax=false})}if(!u.animate){u.state.isDuringAjax=false}a(this,s,o);if(u.prefill){this._prefill()}},_nearbottom:function(){var i=this.options,s=0+t(document).height()-i.binder.scrollTop()-t(e).height();if(!!i.behavior&&this["_nearbottom_"+i.behavior]!==n){return this["_nearbottom_"+i.behavior].call(this)}this._debug("math:",s,i.pixelsFromNavToBottom);return s-i.bufferPx<i.pixelsFromNavToBottom},_pausing:function(t){var r=this.options;if(!!r.behavior&&this["_pausing_"+r.behavior]!==n){this["_pausing_"+r.behavior].call(this,t);return}if(t!=="pause"&&t!=="resume"&&t!==null){this._debug("Invalid argument. Toggling pause value instead")}t=t&&(t==="pause"||t==="resume")?t:"toggle";switch(t){case"pause":r.state.isPaused=true;break;case"resume":r.state.isPaused=false;break;case"toggle":r.state.isPaused=!r.state.isPaused;break}this._debug("Paused",r.state.isPaused);return false},_setup:function(){var t=this.options;if(!!t.behavior&&this["_setup_"+t.behavior]!==n){this["_setup_"+t.behavior].call(this);return}this._binding("bind");return false},_showdonemsg:function(){var r=this.options;if(!!r.behavior&&this["_showdonemsg_"+r.behavior]!==n){this["_showdonemsg_"+r.behavior].call(this);return}r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut(r.loading.speed)});r.errorCallback.call(t(r.contentSelector)[0],"done")},_validate:function(n){for(var r in n){if(r.indexOf&&r.indexOf("Selector")>-1&&t(n[r]).length===0){this._debug("Your "+r+" found no elements.");return false}}return true},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(r){var i=this,s=r.path,o,u,a,f;r.state.currPage++;if(r.maxPage!=n&&r.state.currPage>r.maxPage){r.state.isBeyondMaxPage=true;this.destroy();return}o=t(r.contentSelector).is("table, tbody")?t("<tbody/>"):t("<div/>");u=typeof s==="function"?s(r.state.currPage):s.join(r.state.currPage);i._debug("heading into ajax",u);a=r.dataType==="html"||r.dataType==="json"?r.dataType:"html+callback";if(r.appendCallback&&r.dataType==="html"){a+="+callback"}switch(a){case"html+callback":i._debug("Using HTML via .load() method");o.load(u+" "+r.itemSelector,n,function(t){i._loadcallback(o,t,u)});break;case"html":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({url:u,dataType:r.dataType,complete:function(t,n){f=typeof t.isResolved!=="undefined"?t.isResolved():n==="success"||n==="notmodified";if(f){i._loadcallback(o,t.responseText,u)}else{i._error("end")}}});break;case"json":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({dataType:"json",type:"GET",url:u,success:function(e,t,s){f=typeof s.isResolved!=="undefined"?s.isResolved():t==="success"||t==="notmodified";if(r.appendCallback){if(r.template!==n){var a=r.template(e);o.append(a);if(f){i._loadcallback(o,a)}else{i._error("end")}}else{i._debug("template must be defined.");i._error("end")}}else{if(f){i._loadcallback(o,e,u)}else{i._error("end")}}},error:function(){i._debug("JSON ajax request failed.");i._error("end")}});break}},retrieve:function(r){r=r||null;var i=this,s=i.options;if(!!s.behavior&&this["retrieve_"+s.behavior]!==n){this["retrieve_"+s.behavior].call(this,r);return}if(s.state.isDestroyed){this._debug("Instance is destroyed");return false}s.state.isDuringAjax=true;s.loading.start.call(t(s.contentSelector)[0],s)},scroll:function(){var t=this.options,r=t.state;if(!!t.behavior&&this["scroll_"+t.behavior]!==n){this["scroll_"+t.behavior].call(this);return}if(r.isDuringAjax||r.isInvalidPage||r.isDone||r.isDestroyed||r.isPaused){return}if(!this._nearbottom()){return}this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(n){if(t.isPlainObject(n)){this.options=t.extend(true,this.options,n)}}};t.fn.infinitescroll=function(n,r){var i=typeof n;switch(i){case"string":var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=t.data(this,"infinitescroll");if(!e){return false}if(!t.isFunction(e[n])||n.charAt(0)==="_"){return false}e[n].apply(e,s)});break;case"object":this.each(function(){var e=t.data(this,"infinitescroll");if(e){e.update(n)}else{e=new t.infinitescroll(n,r,this);if(!e.failed){t.data(this,"infinitescroll",e)}}});break}return this};var r=t.event,i;r.special.smartscroll={setup:function(){t(this).bind("scroll",r.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",r.special.smartscroll.handler)},handler:function(e,n){var r=this,s=arguments;e.type="smartscroll";if(i){clearTimeout(i)}i=setTimeout(function(){t(r).trigger("smartscroll",s)},n==="execAsap"?0:100)}};t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);//infinitescroll
!function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var o;return void 0===this.cache[e]&&(o=t(this.el).attr("data-cbox-"+e),void 0!==o?this.cache[e]=o:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=E.length,i=(z+t)%e;return 0>i?e+i:i}function s(t,e){return Math.round((/%/.test(t)?("x"===e?W.width():n())/100:1)*parseInt(t,10))}function a(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(){z=0,rel&&"nofollow"!==rel?(E=t("."+te).filter(function(){var e=t.data(this,Y),i=new r(this,e);return i.get("rel")===rel}),z=E.index(_.el),-1===z&&(E=E.add(_.el),z=E.length-1)):E=t(_.el)}function u(i){t(e).trigger(i),se.triggerHandler(i)}function f(i){var n;G||(n=t(i).data("colorbox"),_=new r(i,n),rel=_.get("rel"),g(),$||($=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block"}),L=o(ae,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0),_.w=s(_.get("initialWidth"),"x"),_.h=s(_.get("initialHeight"),"y"),L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(R).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),se.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&se.one(re,function(){t(_.el).focus()})),v.css({opacity:parseFloat(_.get("opacity")),cursor:_.get("overlayClose")?"pointer":"auto",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w())}function p(){!x&&e.body&&(V=!1,W=t(i),x=o(ae).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=o(ae,"Overlay").hide(),M=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),b=o(ae,"Content").append(R=o(ae,"Title"),F=o(ae,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),I=o("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),T=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(C=o(ae,"MiddleLeft"),b,H=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),S=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(I),t(e.body).append(v,x.append(y,S)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var n,r,h,d=J.prep,c=++le;q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?s(_.get("height"),"y")-A-D:_.get("innerHeight")&&s(_.get("innerHeight"),"y"),_.w=_.get("width")?s(_.get("width"),"x")-N-j:_.get("innerWidth")&&s(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=s(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=s(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),n=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")?(h=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){h.replaceWith(L.children())}),d(t(n))):_.get("iframe")?d(" "):_.get("html")?d(_.get("html")):a(_,n)?(n=l(_,n),U=e.createElement("img"),t(U).addClass(Z+"Photo").bind("error",function(){d(o(ae,"Error").html(_.get("imgError")))}).one("load",function(){var e;c===le&&(t.each(["alt","longdesc","aria-describedby"],function(e,i){var o=t(_.el).attr(i)||t(_.el).attr("data-"+i);o&&U.setAttribute(i,o)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,r()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,r())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),E[1]&&(_.get("loop")||E[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){d(U)},1))}),setTimeout(function(){U.src=n},1)):n&&S.load(n,_.get("data"),function(e,i){c===le&&d("error"===i?o(ae,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,E,W,L,S,M,R,F,I,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"images {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This images failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",oe=Z+"_complete",ne=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",se=t("<a/>"),ae="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||E[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){I.html(_.get("slideshowStop")).unbind(a).one(a,o),se.bind(oe,e).bind(ie,t),x.removeClass(s+"off").addClass(s+"on")}function o(){t(),se.unbind(oe,e).unbind(ie,t),I.html(_.get("slideshowStart")).unbind(a).one(a,function(){J.next(),i()}),x.removeClass(s+"on").addClass(s+"off")}function n(){r=!1,I.hide(),t(),se.unbind(oe,e).unbind(ie,t),x.removeClass(s+"off "+s+"on")}var r,h,s=Z+"Slideshow_",a="click."+Z;return function(){r?_.get("slideshow")||(se.unbind(ne,n),n()):_.get("slideshow")&&E[1]&&(r=!0,se.one(ne,n),_.get("slideshowAuto")?i():o(),I.show())}}();t.colorbox||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var o,n=this;if(e=e||{},t.isFunction(n))n=t("<a/>"),e.open=!0;else if(!n[0])return n;return n[0]?(p(),m()&&(i&&(e.onComplete=i),n.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),o=new r(n[0],e),o.get("open")&&f(n[0])),n):n},J.position=function(e,i){function o(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-D+"px"}var r,h,a,l=0,d=0,c=x.offset();if(W.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=W.scrollTop(),a=W.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=a,x.css({position:"fixed"})):(l=h,d=a,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(W.width()-_.w-N-j-s(_.get("right"),"x"),0):_.get("left")!==!1?s(_.get("left"),"x"):Math.round(Math.max(W.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(n()-_.h-A-D-s(_.get("bottom"),"y"),0):_.get("top")!==!1?s(_.get("top"),"y"):Math.round(Math.max(n()-_.h-A-D,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?void(g=e):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=_.w+N+j+"px",y[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){W.bind("resize."+Z,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=s(t.width,"x")-N-j),t.innerWidth&&(_.w=s(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=s(t.height,"y")-A-D),t.innerHeight&&(_.h=s(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function n(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function s(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=o(ae,"LoadedContent").append(i),L.hide().appendTo(S.show()).css({width:n(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:s()}).prependTo(b),S.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var o,n,s=E.length;$&&(n=function(){clearTimeout(Q),M.hide(),u(oe),_.get("onComplete")},R.html(_.get("title")).show(),L.show(),s>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",z+1).replace("{total}",s)).show(),K[_.get("loop")||s-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,o=E[this],n=new r(o,t.data(o,Y)),h=n.get("href");h&&a(n,h)&&(h=l(n,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(o=e.createElement("iframe"),"frameBorder"in o&&(o.frameBorder=0),"allowTransparency"in o&&(o.allowTransparency="true"),_.get("scrolling")||(o.scrolling="no"),t(o).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",n).appendTo(L),se.one(he,function(){o.src="//about:blank"}),_.get("fastIframe")&&t(o).trigger("load")):n(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&E[1]&&(_.get("loop")||E[z+1])&&(z=h(1),f(E[z]))},J.prev=function(){!q&&E[1]&&(_.get("loop")||z)&&(z=h(-1),f(E[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(ne),_.get("onCleanup"),W.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.add(v).css({opacity:1,cursor:"auto"}).hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z))},J.element=function(){return t(_.el)},J.settings=X)}(jQuery,document,window);//colorbox
!function(a){a.idleTimer=function(b,c){var d;"object"==typeof b?(d=b,b=null):"number"==typeof b&&(d={timeout:b},b=null),c=c||document,d=a.extend({idle:!1,timeout:3e4,events:"mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"},d);var e=a(c),f=e.data("idleTimerObj")||{},g=function(b){var d=a.data(c,"idleTimerObj")||{};d.idle=!d.idle,d.olddate=+new Date;var e=a.Event((d.idle?"idle":"active")+".idleTimer");a(c).trigger(e,[c,a.extend({},d),b])},h=function(b){var d=a.data(c,"idleTimerObj")||{};if(null==d.remaining){if("mousemove"===b.type){if(b.pageX===d.pageX&&b.pageY===d.pageY)return;if("undefined"==typeof b.pageX&&"undefined"==typeof b.pageY)return;var e=+new Date-d.olddate;if(200>e)return}clearTimeout(d.tId),d.idle&&g(b),d.lastActive=+new Date,d.pageX=b.pageX,d.pageY=b.pageY,d.tId=setTimeout(g,d.timeout)}},i=function(){var b=a.data(c,"idleTimerObj")||{};b.idle=b.idleBackup,b.olddate=+new Date,b.lastActive=b.olddate,b.remaining=null,clearTimeout(b.tId),b.idle||(b.tId=setTimeout(g,b.timeout))},j=function(){var b=a.data(c,"idleTimerObj")||{};null==b.remaining&&(b.remaining=b.timeout-(+new Date-b.olddate),clearTimeout(b.tId))},k=function(){var b=a.data(c,"idleTimerObj")||{};null!=b.remaining&&(b.idle||(b.tId=setTimeout(g,b.remaining)),b.remaining=null)},l=function(){var b=a.data(c,"idleTimerObj")||{};clearTimeout(b.tId),e.removeData("idleTimerObj"),e.off("._idleTimer")},m=function(){var b=a.data(c,"idleTimerObj")||{};if(b.idle)return 0;if(null!=b.remaining)return b.remaining;var d=b.timeout-(+new Date-b.lastActive);return 0>d&&(d=0),d};if(null===b&&"undefined"!=typeof f.idle)return i(),e;if(null===b);else{if(null!==b&&"undefined"==typeof f.idle)return!1;if("destroy"===b)return l(),e;if("pause"===b)return j(),e;if("resume"===b)return k(),e;if("reset"===b)return i(),e;if("getRemainingTime"===b)return m();if("getElapsedTime"===b)return+new Date-f.olddate;if("getLastActiveTime"===b)return f.lastActive;if("isIdle"===b)return f.idle}return e.on(a.trim((d.events+" ").split(" ").join("._idleTimer ")),function(a){h(a)}),f=a.extend({},{olddate:+new Date,lastActive:+new Date,idle:d.idle,idleBackup:d.idle,timeout:d.timeout,remaining:null,tId:null,pageX:null,pageY:null}),f.idle||(f.tId=setTimeout(g,f.timeout)),a.data(c,"idleTimerObj",f),e},a.fn.idleTimer=function(b){return this[0]?a.idleTimer(b,this[0]):this}}(jQuery);//idleTimer
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.0";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){return j.unzip.apply(j,o.call(arguments))},j.unzip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","    ":"t","\u2028":"u2028","\u2029":"u2029"},z=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(z,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var D=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);//underscore
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100);};return c;}//on_resize
(function($) {

    var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false),
        locObj = {},
        isTouch = (Modernizr.touch),
        $body = $('body'),
        $html = $('html'),
        $doc = $(document),
        $window = $(window),
        $family = $body.hasClass('family'),
        $homepage = $body.hasClass('home'),
        $projectpage = $body.hasClass('project'),
        $fam = $('#family-container .family-member'),
        $projects = $('#projects-container .project'),
        $mainnav = $('#main-navigation');
    locObj.home = {};
    locObj.home.banner = $('#banner-images');

    $doc.ready(function() {

        if (iOS) $('html').addClass('ios');

        if ( $body.hasClass('projects') || $body.hasClass('blog') ){
            s = location.search;
            u = (location.pathname).substr(1);
            q = (!s.length) ? u : u+s;
            if ( !$body.hasClass('projects') && !$body.hasClass('press') ) {
                if (!s.length) {
                    if ( $('#main-navigation > ul > li > a[href="'+u+'"]').length === 0 ) {
                        $('#main-navigation > ul > li.active').children('ul').addClass('opened').closest('#main-navigation').addClass('subbed');
                    } else {
                        $('#main-navigation > ul > li > a[href="'+u+'"]').parent().addClass('active parent').children('ul').addClass('opened').find('a:contains("All")').parent().addClass('active').closest('#main-navigation').addClass('subbed');
                    }
                } else {
                    $('#main-navigation ul ul').find('a[href="'+q+'"]').parent().addClass('active').parent().addClass('opened').parent().addClass('active parent').closest('#main-navigation').addClass('subbed');
                }
            } else if ($body.hasClass('projects')) {
                $('#main-navigation').addClass('subbed');
                if ( $('#main-navigation > ul > li.active').children('.sub-menu').length ){
                    $('#main-navigation > ul > li.active').addClass('parent');
                }
            }
        }

        $('#main-navigation li a').click(function(e){
            $this = $(this);
            if ( (window.outerWidth <= 600) && $this.parent().hasClass('parent') ) {
                e.preventDefault();
                $this.siblings('ul').slideToggle();
            }
        });

        $('#main-navigation ul .contact a').click(function(e){
            e.preventDefault();
            $cd = $('#contactdeets');
            ww = $(window).outerWidth();
            wh = $(window).outerHeight()-65;
            if( ww <= 600 ) {
                $('#nav-toggle').trigger('click'), $html.addClass('contact'), $.colorbox({inline:true,transition:'none',href:$cd,width:"100%",top:65,height:wh});
            } else {
                $(this).parent().toggleClass('active')
                if ( $body.hasClass('home') || ($body.hasClass('project') && $html.hasClass('ajaxed')) )
                    $(this).closest('#main-content').find('.contactdeets').slideToggle(function(){
                        $this = $(this);
                        if ( $this.hasClass('open') )
                            $this.removeClass('open').removeAttr('style');
                        else
                            $this.addClass('open');
                    });
                else
                    console.log('test')
                $('#contactdeets').slideToggle(function(){
                    $this = $(this);
                    if ( $this.hasClass('open') )
                        $this.removeClass('open').removeAttr('style');
                    else
                        $this.addClass('open');
                });
            }
        });

        $(".subscribe").colorbox({inline:true, transition:'none', width:"300", escKey:false, closeButton: true, height:220, onOpen:function(){$html.removeClass('contact')}});

        $('#nav-toggle').on('click', function(){
            var $this = $(this);
            $this.siblings('ul').slideToggle();
        });

        $('.view-share').on('click', function(e){
            var $this = $(this);
            $this.parent().siblings('.top-bar').slideToggle();
        });

        function stretchBGs(i,e,p){
            var thisheight = e.outerHeight(),
                $info = e.children('.infobox');
            if(!$html.hasClass('touch') && !$body.hasClass('family')){
                if( thisheight < $info.outerHeight()+240 )
                    e.css({ 'padding-top': $info.outerHeight()+350 });
            }
            e.backstretch(e.data('bg'));
        }

        function scrollEvts(g){
            g.each(function(i, e) {
                var $this = $(this),
                    offTop = $this.offset().top,
                    height = $this.outerHeight(),
                    winHeight = $window.height(),
                    winScroll = $window.scrollTop(),
                    fullOff = offTop + height,
                    totScroll = winHeight + winScroll,
                    partShown = totScroll - offTop,
                    $info = $this.children('.infobox'),
                    infoTop = $info.offset().top,
                    infoHeight = $info.outerHeight(),
                    infoOff = infoTop + infoHeight,
                    ceiling = ($body.hasClass('home')) ? 35 : 80;
                diff = ($body.hasClass('home')) ? 110 : 130;
                bottomDiff = fullOff - infoOff;
                if ((offTop-winScroll) <= ceiling ) {
                    $info.addClass('bumped');
                } else {
                    $info.removeClass('bumped');
                }
                if (partShown >= 0) {
                    var x = (partShown >= height) ? 1 : partShown / (height * 0.6);
                    if ( !$html.hasClass('touch') ) {
                        $info.animate({
                            'opacity': x
                        }, 10);
                    } else {
                        $info.css('opacity','');
                    }
                }
                if ((infoHeight + diff) > (fullOff - winScroll))
                    $info.addClass('bottom');
                else
                    $info.removeClass('bottom');
            });
        }

        function bumpEvt(g){
            if((window.outerWidth > 600) && !$html.hasClass('touch')){
                $html.addClass('wpd');
            }
        }

        function stretchImgs() {
            $('#project-gallery > div').each(function(i,e){
                var $this = $(this),
                    alt = $this.data('alt');
                $this.backstretch($this.data('bg'));
                $this.append('<img class="img" src="'+$this.data('bg')+'">');
                $this.on('backstretch.after',function(){
                    $this.find('img').attr({'alt':alt,'title':alt});
                });
            });
        }

        function cancelEvent(e){
            e = e ? e : window.event;
            if(e.stopPropagation)
                e.stopPropagation();
            if(e.preventDefault)
                e.preventDefault();
            e.cancelBubble = true;
            e.cancel = true;
            e.returnValue = false;
            return false;
        }

        function wheel(e){
            if(!$html.hasClass('moving') && (window.outerWidth > 600)){
                var d = 0;
                if (!e)
                    e = window.event;
                if (e.wheelDelta) {
                    d = e.wheelDelta;
                } else if (e.detail) {
                    d = -e.detail;
                }
                if (d){
                    if (d < 0){
                        galScroll('down');
                    } else {
                        galScroll('up');
                    }
                }
                if (e.preventDefault)
                    e.preventDefault();
            }
            cancelEvent(e);
        }

        wft = _.throttle(wheel,900,{leading:true,trailing:false});

        function galScroll(d){
            var gal = ($body.hasClass('project')) ? $('#project-gallery') : $('#family-container'),
                $winHeight = $window.height(),
                curr = parseInt(gal.css('top').replace(/[^-\d\.]/g, '')),
                mod = Math.abs(Math.ceil(curr / $window.height())),
                diff = curr-$winHeight,
                sum = curr+$winHeight,
                pos = mod+1,
                neg = mod-1,
                len = ($body.hasClass('project')) ? gal.children('.gallery-images').length : gal.children('.family-member').length;
            if (d == 'up') {
                if( mod > 0 ){
                    $('#project-pager').children('div[data-index="'+neg+'"]').addClass('active').siblings().removeClass('active');
                    $html.addClass('moving');
                    gal.animate({top:sum},600,function(){$html.removeClass('moving');});
                }
                $('#scroll-arrows .next').fadeIn();
                if ( mod == 1 )
                    $('#scroll-arrows .prev').fadeOut();
            } else {
                if( mod < len-1 ){
                    $('#project-pager').children('div[data-index="'+pos+'"]').addClass('active').siblings().removeClass('active');
                    $html.addClass('moving');
                    gal.animate({top:diff},600,function(){$html.removeClass('moving');});
                }
                $('#scroll-arrows .prev').fadeIn();
                if( mod == len-2 )
                    $('#scroll-arrows .next').fadeOut();
            }
        }

        function keys(e) {
            var unicode = e.charCode ? e.charCode : e.keyCode;
            if (!$html.hasClass('moving') && (window.outerWidth > 768)) {
                if (unicode == 38) {
                    galScroll('up');
                } else if (unicode == 40) {
                    galScroll('down');
                }
            }
        }

        function familyPageInit(){
//            $('#family-container').imagesLoaded(function(){
//                $.idleTimer(3000);
//                $(document).on('idle.idleTimer',function(){
//                    if ( ( (window.outerWidth >= 1024) && $html.hasClass('touch') ) || window.outerWidth <= 768 ) {
//                        $('.site-head').addClass('faded');
//                    } else {
//                        $('.site-head, #scroll-arrows, .infobox, #project-pager').fadeOut();
//                    }
//                }).on('active.idleTimer',function(){
//                    if ( ( (window.outerWidth > 1024) && $html.hasClass('touch') ) || window.outerWidth <= 768 ) {
//                        $('.site-head').removeClass('faded');
//                    } else {
//                        $('.site-head, #scroll-arrows, .infobox, #project-pager').fadeIn();
//                    }
//                });
//            });
            $('.family-member').each(function(i,e){
                var div = (i == 0) ? '<div data-index="'+i+'" class="active"></div>' : '<div data-index="'+i+'"></div>';
                $('#project-pager').append(div);
            });
            $('.toggle-box').click(function(){
                var wrap = $(this).toggleClass('closed').parent().siblings('.content').slideToggle().closest('.wrap').toggleClass('closed');
                if(wrap.hasClass('closed')) {
                    wrap.animate({'padding-bottom':0});
                } else {
                    if(window.outerWidth > 600)
                        wrap.animate({'padding-bottom':24});
                    else
                        wrap.animate({'padding-bottom':20});
                }
            });
            $('#project-pager').on('click','div',function(){
                var $this = $(this),
                    idx = $this.data('index'),
                    gal = $('#family-container'),
                    $winHeight = $window.height(),
                    curr = parseInt(gal.css('top').replace(/[^-\d\.]/g, '')),
                    mod = Math.abs(Math.ceil(curr / $window.height())),
                    pos = -idx*$winHeight,
                    len = gal.children('.family-member').length;
                gal.animate({top:pos},600);
                $this.addClass('active').siblings().removeClass('active');
                if ( idx == 0 ){
                    $('#scroll-arrows .prev').fadeOut();
                } else {
                    $('#scroll-arrows .prev').fadeIn();
                }
                if ( idx == len-1 ){
                    $('#scroll-arrows .next').fadeOut();
                } else {
                    $('#scroll-arrows .next').fadeIn();
                }
            });
            $('#scroll-arrows .prev').hide();
        }

        function attachTriggers() {
            window.addEventListener('DOMMouseScroll', wft, false);
            window.onmousewheel = document.onmousewheel = wft;
            window.onkeydown = document.onkeydown = keys;
        }

        function projectGalleryInit(){
            if ( !$html.hasClass('touch') && (window.outerWidth > 768) ){ attachTriggers(); }
            if(!$('.infobox').hasClass('togg')){
                $('.infobox').addClass('togg');
                $('.toggle-box').click(function(){
                    var wrap = $(this).toggleClass('closed').parent().siblings('.content').slideToggle().closest('.wrap').toggleClass('closed');
                    if(wrap.hasClass('closed')) {
                        wrap.animate({'padding-bottom':0});
                    } else {
                        if(window.outerWidth > 600)
                            wrap.animate({'padding-bottom':24});
                        else
                            wrap.animate({'padding-bottom':20});
                    }
                });
                $('.view-more.back').on('click', function(){
                    window.history.back();
                });
            }
            $('#project-gallery .gallery-images').each(function(i,e){
                var div = (i == 0) ? '<div data-index="'+i+'" class="active"></div>' : '<div data-index="'+i+'"></div>';
                $('#project-pager').append(div);
            });
            $('#project-pager').on('click','div',function(){
                var $this = $(this),
                    idx = $this.data('index'),
                    gal = $('#project-gallery'),
                    $winHeight = $window.height(),
                    curr = parseInt(gal.css('top').replace(/[^-\d\.]/g, '')),
                    mod = Math.abs(Math.ceil(curr / $window.height())),
                    pos = -idx*$winHeight,
                    len = gal.children('.gallery-images').length;
                gal.animate({top:pos},600);
                $this.addClass('active').siblings().removeClass('active');
                if ( idx == 0 ){
                    $('#scroll-arrows .prev').fadeOut();
                } else {
                    $('#scroll-arrows .prev').fadeIn();
                }
                if ( idx == len-1 ){
                    $('#scroll-arrows .next').fadeOut();
                } else {
                    $('#scroll-arrows .next').fadeIn();
                }
            });
            stretchImgs();
            scrollArrows();
            $('#scroll-arrows .prev').hide();
        }

        function projectGalleryExit(){
            $.idleTimer('destroy');
            $html.removeClass('timered');
            window.removeEventListener('DOMMouseScroll', wft, false);
            window.onmousewheel = document.onmousewheel = null;
            window.onkeydown = document.onkeydown = null;
        }

        function projectPageInit(){
            $body.fadeIn(function(){
                $('#main-content').fadeIn(function(){
                    if ((window.outerWidth <= 1024) && (window.outerWidth > 600) && $html.hasClass('touch')) {
                        $('#project-gallery').css('padding-top',113);
                    } else if(window.outerWidth <= 600) {
                        var box = ($html.hasClass('ajaxed')) ? $('#projects-container .infobox.active .wrap') : $('#projects-container .infobox .wrap'),
                            fulltop = box.outerHeight();
                        $('#project-gallery').css('padding-top',fulltop);
                    }
                    projectGalleryInit();
                    if( $html.hasClass('ajax') ){
                        $('.project.active').children('.load-overlay').fadeIn();
                        $('#project-gallery .gallery-images:first-child').imagesLoaded(function(){
                            $('#project-gallery .backstretch').animate({'opacity':1},300);
                            $('#project-gallery').animate({'opacity':1},1500,function(){
//                                $('.site-head').fadeIn(300,function(){
//                                    $(this).addClass('shown');
//                                    $('.infobox').animate({'opacity':1},function(){
//                                        attachTimer();
//                                        $(this).siblings('.load-overlay').fadeOut();
//                                    });
//                                });
                            });
                        });
                    } else {
                        $('.load-overlay').fadeIn();
                        $('.site-head').fadeIn(300,function(){
                            $(this).addClass('shown');
                            $('#project-gallery .gallery-images:first-child').imagesLoaded(function(){
                                $('#project-gallery .backstretch').animate({'opacity':1},300);
                                $('#project-gallery').animate({'opacity':1},1000,function(){
                                    $(this).addClass('shown');
                                    $('.infobox').animate({'opacity':1},200,function(){
//                                        attachTimer();
                                        $('.load-overlay').fadeOut();
                                    });
                                });
                            });
                        });
                    }
                });
            });
        }

        function attachTimer(){
            $.idleTimer(3000);
            $html.addClass('timered');
            $(document).on('idle.idleTimer',function(){
                if ($body.hasClass('project')) {
                    if ( ( (window.outerWidth >= 1024) && $html.hasClass('touch') ) || window.outerWidth <= 768 ) {
                        $('.site-head').addClass('faded');
                    } else {
                        $('.site-head, #scroll-arrows, .infobox, #project-pager').fadeOut();
                    }
                }
            }).on('active.idleTimer',function(){
                if ($body.hasClass('project')) {
                    if ( ( (window.outerWidth > 1024) && $html.hasClass('touch') ) || window.outerWidth <= 768 ) {
                        $('.site-head').removeClass('faded');
                    } else {
                        $('.site-head, #scroll-arrows, .infobox, #project-pager').fadeIn();
                    }
                }
            });
        }

        function bgresizes(g){
            g.each(function(i, e) {
                var $this = $(this),
                    thisheight = $this.outerHeight(),
                    $info = $this.children('.infobox');
                if( !$html.hasClass('touch') && !$body.hasClass('family') ){
                    $this.css('min-height', $info.outerHeight() + 350);
                    if( thisheight < $info.outerHeight()+240 ) {
                        $this.css({ 'padding-top': $info.outerHeight() + 350 });
                    }
                }
                if((i+1 === g.length) && (!$html.hasClass('stretched'))){
                    $this.backstretch($this.data('bg'));
                    $html.addClass('stretched');
                }
            });
        }

        function funcSize(){
            var $winHeight = $window.height(),
                $winWidth = window.outerWidth,
                $homecopy = $('#home-copy'),
                navigationHeight = ($winWidth > 600) ? 100 : 0,
                visibleMainWrapper =  ($winWidth > 600) ? 100 : 50,
                mobileNavHeight = ($winWidth > 600) ? 0 : $(".site-head").outerHeight() - 5,
                fontBase = ($winWidth > 600) ? 700 : 800,
                newHeight = $winHeight - visibleMainWrapper - navigationHeight,
                fz = (($winHeight - mobileNavHeight) / fontBase) * 2;

            if ( $body.hasClass('home') && ($winHeight < 915) ){
                $homecopy.css({
                    minHeight: 0,
                    height: newHeight - mobileNavHeight,
                    top: mobileNavHeight
                });
                $homecopy.css('font-size', fz + 'em');
                if ($winHeight <= 400) {
                    $homecopy.css('font-size', '1em');
                }
                if ($winWidth > 600) {
                    $("body").css({paddingTop: newHeight});
                } else {
                    $("body").css({paddingTop: 0}).find('#main-wrapper').css({paddingTop:newHeight});
                }
            } else {
                $body.removeAttr('style');
                $homecopy.removeAttr('style').css('min-height',590);
            }
        }

        function fadeOnLoad(){
            $(window).trigger('resize');
            $('#main-wrapper').css('opacity',0).removeClass('invisible');
            $('#main-content').fadeIn(600,function() {
                $('#main-wrapper').animate({'opacity':1},300,function(){
                    $('#projects-container').fadeIn(function() {
                        $('#subhead').animate({"opacity":1},100,function(){
                            $window.trigger('resize');
                        });
                    });
                });
            });
            $('.site-head').fadeIn(600);
            locObj.home.banner.css('visibility','visible').animate({'opacity':1},500);
        }

        function scrollArrows(){
            if (!$html.hasClass('moving') && ((window.outerWidth > 768) || ((!$html.hasClass('touch')) && window.outerWidth <= 1024))) {
                $('#scroll-arrows .next').click(function(){
                    if (!$html.hasClass('moving')) galScroll('down');
                }).siblings('.prev').click(function(){
                    if (!$html.hasClass('moving')) galScroll('up');
                });
            }
        }

        function resizeInit(){
            var $winHeight = $window.height(),
                $winWidth = $window.outerWidth(),
                $homecopy = $('#home-copy'),
                $copyheight = $homecopy.outerHeight(),
                $hcp = $homecopy.find('table-cell'),
                trigged = 0,
                g,
                $sitehead = $('.site-head'),
                $homepage = $body.hasClass('home');

            if ($body.hasClass('project') || $body.hasClass('family')) {
                $('.site-head,.infobox,#project-pager,#scroll-arrows').css('display','');
            }


            if( $winWidth > 600 ) {
                if( $homepage ){
                    g = $('#projects-container .project');
                    bgresizes(g);
                } else if($('body').hasClass('family')){
                    g = $('#family-container .family-member');
                    bgresizes(g);
                }
                if ($('#cboxLoadedContent').children('.contactdeets').length){
                    $.colorbox.close();
                }
                $mainnav.children('ul').show().find('ul').removeAttr('style');
                $('.top-bar').show();
            } else {
                $mainnav.children('ul').hide();
                $('.contactdeets').removeClass('open').removeAttr('style');
                $('#projects-container .project').removeAttr('style');
                $('.family .wrapper, #family-container .family-member, .family-member .content').removeAttr('style');
            }

            if( $body.hasClass('family') && ($winWidth > 600) && !$html.hasClass('restretched') ) {
                $.each($('.family-member'),function(i,e){
                    var $this = $(this),
                        bg = $this.data('bg');
                    $this.backstretch(bg);
                });
                $html.addClass('restretched');
            }

            $html.removeClass('moving');

            if( $body.hasClass('project') ){
                if ( ( (window.outerWidth >= 1024) && $html.hasClass('touch') ) || window.outerWidth <= 768 ) {
                    $('.site-head, #scroll-arrows, #project-pager').show();
                    if ( $html.hasClass('ajaxed') ) $('.infobox.active').show();
                    else $('.infobox').show();
                }
                if ((window.outerWidth <= 1024) && (window.outerWidth > 600) && $html.hasClass('touch')) {
                    // $('.infobox .content').css({'display':'block'}).closest('.wrap').removeClass('closed').css({'padding-bottom':'15px'}).find('.toggle-box').removeClass('closed');
                    $('#project-gallery').css('padding-top',113);
                } else if(window.outerWidth <= 600) {
                    $('.infobox.active').css({'position':'','top':''});
                    $('.infobox .content').css({'display':'block'}).closest('.wrap').removeClass('closed').css({'padding-bottom':'15px'}).find('.toggle-box').removeClass('closed');
                    var box = ($html.hasClass('ajaxed')) ? $('#projects-container .infobox.active .wrap') : $('#projects-container .infobox .wrap'),
                        fulltop = box.outerHeight();
                    $('#project-gallery').css('padding-top',fulltop);
                } else {
                    if ($html.hasClass('ajax')) { $('.infobox.active').css({'position':'fixed','top':'135px'}); }
                    $('#project-gallery').css('padding-top',0);
                }
                if ( !$html.hasClass('touch') && ($winWidth > 768) ) {
                    attachTimer();
                    attachTriggers();
                } else {
                    projectGalleryExit();
                }
                if (!$html.hasClass('touch')){
                    idx = $('#project-pager .active').data('index');
                    $('#project-gallery').css('top',-idx*$winHeight);
                }
            }

            if( $homepage ) {
                funcSize();
                $('#main-content').css('opacity','1');
                pt = $('#home-copy').height()+60;
                if ( $winWidth > 600 ) {
                    $('#main-wrapper').removeAttr('style');
                } else {
                    $('#main-wrapper').css({'padding-top':pt});
                }
                $('.project').backstretch('resize');
            }

            if ( $body.hasClass('family') ) {
                if ( $winWidth < 601 ) {
                    $('.infobox .wrap, .toggle-box').removeClass('closed');
                    $('.infobox .wrap').removeAttr('style');
                }
                $('.family-member').backstretch('resize');
                if ( !$html.hasClass('touch') && ($winWidth > 768) ) {
                    attachTriggers();
                } else {
                    $('#family-container').css('top','0px');
                    projectGalleryExit();
                }
                if (!$html.hasClass('touch') && $winWidth > 768 ){
                    idx = $('#project-pager .active').data('index');
                    $('html,body').animate({scrollTop:0},0,function(){
                        $('#family-container').css('top',-idx*$winHeight);
                    });
                }
                if ( $html.hasClass('touch') ){
                    $('.infobox .wrap').removeClass('closed').css('padding-bottom','0px').find('.toggle-box').removeClass('closed').closest('.wrap').find('.content').css('display','block');
                }
            }

            scrollArrows();
        }

        function hometext(){
            var $homecopy = $('#home-copy'),
                $copyheight = $homecopy.outerHeight();
            if ( window.outerWidth > 600 ) {
                $body.animate({
                    'padding-top': $copyheight
                }, 300, function() {
                    fadeOnLoad();
                });
            } else {
                $body.animate({
                    'padding-top': 0
                }, 300, function() {
                    fadeOnLoad();
                }).css({'padding-top': 0}).find('#main-wrapper').animate({'padding-top':$copyheight},300,function(){
                    $('#main-content').animate({'opacity':1},300);
                });
            }
        }

        if ( $homepage ) {
            var $winHeight = $window.height(),
                $winWidth = window.outerWidth,
                $homecopy = $('#home-copy'),
                $hch = ($winWidth > 768) ? $winHeight - 100 : $winHeight - 200,
                $hcp = $homecopy.find('.table-cell');

            funcSize();

            if ( $.cookie('first_load') === 'true' ){
                $homecopy.find('span').css('visibility','visible');
                hometext();
            } else {
                $('#home-copy p span').css({'opacity': 0,'visibility': 'visible'});
                $('#home-copy p span').each(function(i, e) {
                    $(this).delay(i * 100).animate({
                        'opacity': 1
                    }, 200, function() {
                        if (i + 1 === $('#home-copy p span').length) {
                            setTimeout(function(){
                                hometext();
                            },300);
                        }
                    });
                });
                $.cookie('first_load', 'true', { expires: 1, path: '/' });
            }

            if ( $winWidth < 600 && $html.hasClass('touch') ) {
                window.onbeforeunload = function () {}
            }

            window.onbeforeunload = function () {
                $.removeCookie('subscribed')
            }

            $projects.each(function(i,e){
                stretchBGs(i,$(this),$projects);
            });

            $window.on('scroll', function() {
                if(!$html.hasClass('init')){
                    $window.trigger('resize');
                    $html.addClass('init');
                }
                var $header = $('#main-content .site-head'),
                    $content = $('#main-content');
                if( !$html.hasClass('ios') ) {
                    if (($content.offset().top - $window.scrollTop()) <= -24) {
                        $header.addClass('stuck');
                        $homecopy.css('visibility', 'hidden');
                    } else {
                        $header.removeClass('stuck');
                        $homecopy.css('visibility', 'visible');
                    }
                }
                scrollEvts($projects);
            });



            if (!$html.hasClass('touch') && $homepage) {
                bumpEvt($projects);
            }
        }

        if ($html.hasClass('touch') && !$html.hasClass('init')){
            $window.trigger('scroll');
        }

        $('.view-more.more').click(function(e){
            var $this = $(this),
                $proj = $this.closest('.project').addClass('active'),
                link = $(this).attr('href'),
                $box = $this.closest('.infobox').addClass('active');
            boxtop = $box.offset().top-$window.scrollTop();
            locObj.st = $proj.offset().top;
            if(!$html.hasClass('lt-ie10') && (window.outerWidth > 600) && !$html.hasClass('load')){
                $('#home-copy').hide('fast',function(){
                    $(this).addClass('noshow');
                });
                if ( $html.hasClass('touch') ){
                    $proj.siblings('.project').animate({'opacity':0},1500);
                    $proj.children('.backstretch, img').animate({'opacity':0},1500,function(){
                        $proj.css({minHeight:'100%'});
                    });
                    $('#banner-images, #subhead, #main-content .push').animate({'opacity':0},1500);
                    $box.animate({'opacity':0},300,function(){
                        $(this).children('.wrap')
                            .addClass('closed')
                            .css('padding-bottom','0px')
                            .find('.toggle-box')
                            .addClass('closed')
                            .parent()
                            .siblings('.content')
                            .css('display','none');
                    });
                    setTimeout(function(){
                        $box.siblings('.backstretch, img').hide();
                        $proj.siblings('.project').hide();
                        $('#banner-images, #subhead, #main-content .push').hide();
                        $('#main-content, #projects-container').addClass('superheight');
                        $('.site-head').css({'position':'fixed','top':0});
                        $body.css({paddingTop:0});
                    },1500);
                } else {
                    $box.css({'top':boxtop,'position':'fixed'});
                    $proj.siblings('.project').fadeOut(1500);
                    $('#banner-images, #subhead, #main-content .push').fadeOut(1500)
                    $proj.children('.backstretch, img').fadeOut(1500);
                    setTimeout(function(){$('body').css({paddingTop:0});},1500);
                }
                $.ajax({
                    type: "GET",
                    url: link,
                    dataType: "html",
                    success: function( data, status ) {
                        var $data = $('<div>'+data+'</div>'),
                            $arrows = $data.find('#projects-container #scroll-arrows'),
                            $infoBox = $data.find('#projects-container .infobox'),
                            $gallery = $data.find('#project-gallery'),
                            $pager = $data.find('#project-pager'),
                            project_title = $data.find('title').text(),
                            project_desc = $data.find('meta[name="description"]:first').attr('content'),
                            loads = function(){
                                if( !$html.hasClass('load') ) {
                                    $html.addClass('load ajaxed');
                                    $('#projects-container').removeClass('invisible');
                                    projectPageInit();
                                    $proj.css('min-height','');
                                    $('.site-head').css({'position':'','top':''});
                                    $('#main-content, #projects-container').removeClass('superheight');
                                    iBox = $('.infobox.active.togg');
                                    if (!$html.hasClass('touch')) {
                                        locObj.abox = iBox.find('.toggle-box').trigger('click');
                                    }
                                    setTimeout(function(){
                                        iBox.find('.main').show();
                                    },300);
                                    if ($html.hasClass('touch')) $box.animate({'opacity':1},300);
                                }
                            },
                            ainner = function(){
                                $('#main-navigation').find('a:contains(Projects)').parent().addClass('active');
                                $('#main-content').css({'display':'block'});
                                $body.css({'display':'block'})
                                    .addClass('project')
                                    .removeClass('home projects')
                                    .find('#main-wrapper')
                                    .removeClass()
                                    .addClass('project');
                                if ( !$html.hasClass('touch') ) {
                                    $box.animate({top:135},300,function(){
                                        loads();
                                    });
                                }else {
                                    if ( window.outerWidth > 600 )
                                        $box.animate({top:75},300,function(){
                                            $(this).css({top:'','position':''});
                                            loads();
                                        });
                                    else
                                        $box.animate({top:65},300,function(){
                                            $(this).css({top:'','position':''});
                                            loads();
                                        });
                                }
                                $gallery.insertAfter($this.closest('.infobox')).fadeIn();
                                $arrows.appendTo($proj);
                                $pager.appendTo($proj);
                            }
                        if(link!=window.location){
                            window.history.pushState({path:link},'',link);
                            $html.addClass('ajax');
                        }
                        document.title = project_title;
                        $('head meta[name="description"]').attr('content',project_desc);
                        setTimeout(function(){
                            ainner();
                        },1500);
                    }
                });
            } else {
                window.open($('base').attr('href')+link,'_self');
            }
            return false;
        });

        $('#subscribe-form').on('submit',function(e){
            e.preventDefault();
            var $this = $(this),
                mail = $this.children('input[name="sub_email"]').val();
            var x=mail,
                atpos=x.indexOf("@"),
                dotpos=x.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
                alert("Not a valid e-mail address");
            } else {
                $.ajax({
                    type: "POST",
                    data: {'sub_email': mail},
                    url: "subscribe.php",
                    dataType: "html",
                    success: function( data, status ) {
                        $data = $('<div>'+data+'</div>');
                        wrap = $data.find('#main-wrapper');
                        status = wrap.hasClass('yes');
                        cls = wrap.attr('class');
                        if (status) {
                            window.open($('base').attr('href')+'newsletter-confirmation','_self');
                        } else {
                            $.colorbox.close();
                            $.cookie('subscribed', 'true', { expires: 1, path: '/' });
                            $('html').addClass('subscribed');
                        }
                    }
                });
            }
            return false;
        });

        $('#confirmation-ty').on('submit',function(e){
            e.preventDefault();
            var $this = $(this),
                x = $this.children('input[name="sub_email"]').val(),
                re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ( x == '' || !re.test(x)) {
                alert("Not a valid e-mail address");
            } else {
                $.ajax({
                    type: "POST",
                    data: {'sub_email': x},
                    url: "check.php",
                    dataType: "html",
                    success: function( data, status ) {
                        $data = $('<div>'+data+'</div>');
                        wrap = $data.find('#main-wrapper');
                        status = wrap.hasClass('yes');
                        cls = wrap.attr('class');
                        if (status) {
                            alert('Email Address does not exist on the list. Please enter a valid email.');
                        } else {
                            window.open($('base').attr('href')+'blog/','_self');
                            $.cookie('subscribed', 'true', { expires: 1, path: '/' });
                        }
                    }
                });
            }
            return false;
        });

        // WINDOW POPSTATE EVENT FROM AJAX
        $window.on('popstate',function(){
            var link = location.pathname,
                $proj = $('.project.active');
            if($html.hasClass('ajaxed')){
                setTimeout(function(){
                    $proj.children('.infobox').fadeOut(1000);
                },100);
                $('#project-gallery').fadeOut(1500,function(){
                    $('#home-copy').addClass('invisible');
                });
                $.ajax({
                    type: "GET",
                    url: link,
                    dataType: "html",
                    success: function(data,status){
                        var offTop,
                            $data = $('<div>'+data+'</div>'),
                            page_title = $data.find('title').text(),
                            page_class = $data.find('#main-wrapper').attr('class'),
                            page_desc = $data.find('meta[name="description"]:first').attr('content');
                        document.title = page_title;
                        $('meta[name="description"]:first').attr('content',page_desc);
                        $body.addClass(page_class).removeClass('project');
                        $mainwrapper = $('#main-wrapper').addClass(page_class).removeClass('project');
                        if (page_class === "home") {
                            $('#main-navigation li.active').removeClass('active');
                        }
                        $('.infobox').removeClass('active').css({'position':'',top:'','display':''}).find('.main').slideUp();
                        $('.project').css({'opacity':0,'visibility':'hidden'}).show();
                        $proj.children('.backstretch').show().siblings('#project-gallery').remove();
                        $('#scroll-arrows, #project-pager').remove();
                        $('#banner-images, #subhead').css({'opacity':1,'visibility':'hidden'}).addClass('invisible').fadeIn();
                        setTimeout(function(){
                            $('#projects-container').addClass('invisible');
                            $window.trigger('resize');
                            setTimeout(function(){
                                offTop = (page_class === 'home') ? $proj.offset().top+110 : $proj.offset().top+130;
                                $body.animate({scrollTop:offTop},0,function(){
                                    if ( $window.scrollTop() !== offTop ){
                                        $body.scrollTop(offTop);
                                        $html.scrollTop(offTop);
                                        $window.scrollTop(offTop);
                                    }
                                    if ( locObj.abox.closest('.wrap').hasClass('closed') ){
                                        locObj.abox.trigger('click');
                                    }
                                    setTimeout(function(){
                                        $('.site-head').css('position','');
                                        $('#projects-container').removeClass('invisible')
                                            .animate({'opacity':1},300,function(){
                                                projectGalleryExit();
                                                $('.project').removeClass('invisible').animate({'opacity':1,'visibility':'hidden'}, 1500);
                                                $html.removeClass('load ajax ajaxed');
                                                $proj.children('img, .infobox').css({'display':'','opacity':'1'});
                                                $proj.removeClass('active');
                                                $('#home-copy, .push').removeClass('noshow invisible').css({'display':''});
                                                $('#main-wrapper, #banner-images, #subhead, .push').css({'opacity':1,'visibility':'visible'}).removeClass('invisible visuallyhidden');
                                            });
                                    },300);
                                });
                            },100);
                        },500);
                    }
                }).fail(function(){
                    $('#project-gallery').fadeIn();
                });
            }
        });

        if ( $projectpage ) {
            scrollArrows();
            projectPageInit();
        }

        if ( $family ){
            $fam.each(function(i,e){
                stretchBGs(i,$(this),$fam);
            });
            if ( !$html.hasClass('touch') && (window.outerWidth > 768) ){ attachTriggers(); }
            familyPageInit();
            scrollArrows();
        }

        if ( $body.hasClass('projects') ){
            $projects.each(function(i,e){
                stretchBGs(i,$(this),$projects);
            });
            $window.on('scroll', function(){
                scrollEvts($projects);
            });
        }

        if ( $body.hasClass('blog') ){
            $('#posts-container').infinitescroll({
                navSelector  : ".blog-container div.paging",
                nextSelector : "div.paging li.control.next a",
                itemSelector : "#posts-container .blog-post"
            });
            if ( !$body.hasClass('press') && !$body.hasClass('video') ) {
                // if (!($.cookie('blog_visit') === 'true') || !($.cookie('subscribed') === 'true')) {
                // }
                if (!($.cookie('blog_visit') === 'true')) {
                    $('.subscribe').first().trigger('click');
                    $.cookie('blog_visit', 'true', { expires: 1, path: '/' });
                }
                // if ($.cookie('subscribed') === 'true') {
                // 	$('html').addClass('subscribed');
                // }
            }
        }

        on_resize(function() {
            resizeInit();
        });

        $window.on('load',function(){
            $('#projects-container').imagesLoaded(function() {
                setTimeout(function(){ $window.trigger('resize'); }, 30);
            });
            if($family)
                $fam.each(function(i,e){stretchBGs(i,$(this),$fam);});
        });
    });

})(jQuery);
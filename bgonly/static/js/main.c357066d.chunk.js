(this["webpackJsonpbgonly-app"]=this["webpackJsonpbgonly-app"]||[]).push([[0],{33:function(t,e,n){},37:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(19),i=n.n(o),a=(n(33),n(11)),l=n.n(a),s=n(13),u=n(3),d=n(6),f=n(24),h=n.n(f),m=(n(37),n(2));function g(t,e,n){var c,r,o,i=t%360,a=e/100,l=n/100,s=(1-Math.abs(2*l-1))*a,u=s*(1-Math.abs(i/60%2-1)),d=l-s/2;return 0<=i&&i<60&&(c=s,r=u,o=0),60<=i&&i<120&&(c=u,r=s,o=0),120<=i&&i<180&&(c=0,r=s,o=u),180<=i&&i<240&&(c=0,r=u,o=s),240<=i&&i<300&&(c=u,r=0,o=s),300<=i&&i<360&&(c=s,r=0,o=u),{R:Math.floor(255*(c+d)+.5),G:Math.floor(255*(r+d)+.5),B:Math.floor(255*(o+d)+.5)}}function b(){var t=[d.config.default,d.config.gentle,d.config.molasses,d.config.slow,d.config.stiff,d.config.wobbly];return t[Math.floor(Math.random()*t.length)]}function j(t){for(var e=[],n=0;n<t.length;n++){var c=t[n];c.type.startsWith("image/")&&e.push(c)}return e}function p(t){if(null!=t&&Array.isArray(t)&&!(t.length<2))for(var e,n,c=t.length-1;c>0;c--){var r=(e=0,n=c+1,e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e)+e)),o=[t[c],t[r]];t[r]=o[0],t[c]=o[1]}}function v(t){var e=null;if(null!=t.imageSrc){var n="bg-img";!1===t.isFitImage&&(n="".concat(n," position-").concat(t.imagePosition)),e=Object(m.jsx)("img",{id:"bgimage",style:{opacity:t.opacity},className:n,alt:"your specified"})}return Object(c.useEffect)((function(){var e=document.getElementById("bgimage");if(null!=e){var n=e.parentElement,c=function c(r){if(null!=e&&void 0!==e.width&&(e.style.width="",e.style.height="",!1!==t.isFitImage)){var o=n.clientWidth/e.width,i=n.clientHeight/e.height;o<i?e.style.width="".concat(e.width*o,"px"):e.style.height="".concat(e.height*i,"px"),e.removeEventListener("load",c)}};return e.addEventListener("load",c),t.imageSrc&&(e.src=t.imageSrc),function(){e.removeEventListener("load",c)}}}),[t.imageSrc,t.isFitImage]),Object(m.jsx)(m.Fragment,{children:e})}function O(t){for(var e=t.hslSpring,n=t.rgbSpring,c=[],r=function(e){var n=Object(u.a)(t.colorHistory[e-1],3),r=n[0],o=n[1],i=n[2],a=g(r,o,i);c.push(Object(m.jsxs)("div",{className:"color-item",style:{backgroundColor:"hsl(".concat(r,", ").concat(o,"%, ").concat(i,"%)"),color:"".concat(i>60?"black":"white")},onClick:function(e){return t.changeBackground(e,r,o,i)},children:[Object(m.jsx)("p",{children:"hsl (".concat(r,", ").concat(o," %, ").concat(i," %)")}),Object(m.jsx)("p",{children:"rgb (".concat(a.R,", ").concat(a.G," %, ").concat(a.B," %)")})]},e-1))},o=t.colorHistory.length;o>0;o--)r(o);for(var i=[],a=function(e){i.push(Object(m.jsx)("div",{className:e===t.imagePosition?"locate-selection selected":"locate-selection",onClick:function(n){return t.setImagePosition(e)},children:Object(m.jsx)("div",{className:"position-".concat(e)})},e))},l=1;l<10;l++)a(l);return Object(m.jsxs)("div",{className:"Second",children:[Object(m.jsx)("h2",{children:"\u30ab\u30e9\u30fc"}),Object(m.jsxs)("div",{className:"pref-item color-info",children:[Object(m.jsx)(d.animated.p,{children:e.hsl.to((function(t,e,n){return"hsl (".concat(t.toFixed(0),", ").concat(e.toFixed(0),"%, ").concat(n.toFixed(0),"%)")}))}),Object(m.jsx)(d.animated.p,{children:n.rgb.to((function(t,e,n){return"rgb (".concat(t.toFixed(0),", ").concat(e.toFixed(0),", ").concat(n.toFixed(0),")")}))})]}),Object(m.jsx)("div",{className:"pref-item color-history",children:c}),Object(m.jsx)("h2",{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),Object(m.jsxs)("div",{className:"pref-item auto-scroll",children:[Object(m.jsx)("label",{htmlFor:"auto-scroll-config",children:"\u30aa\u30fc\u30c8\u30b9\u30af\u30ed\u30fc\u30eb"}),Object(m.jsx)("input",{type:"checkbox",id:"auto-scroll-config",checked:t.enableAutoScroll,onChange:function(e){return t.setAutoScroll((function(t){return!t}))}})]}),Object(m.jsxs)("div",{className:"pref-item img-opacity",children:[Object(m.jsx)("label",{htmlFor:"img-opacity","data-tooltip":"\u4e0a\u306e\u753b\u9762\u3078\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3001\u307e\u305f\u306f\u4e0b\u306e\u30dc\u30bf\u30f3\u304b\u3089\u80cc\u666f\u753b\u50cf\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059",children:"\u80cc\u666f\u753b\u50cf\u306e\u4e0d\u900f\u660e\u5ea6"}),Object(m.jsx)("input",{type:"range",id:"img-opacity",onChange:function(e){var n=e.target.value;n<0&&(n=0),n>1&&(n=1),t.setImgOpacity(n)},min:"0",max:"1",step:"0.01",value:t.imgOpacity})]}),Object(m.jsxs)("div",{className:"pref-item specify-imgs",children:[Object(m.jsx)("input",{type:"file",id:"imgs-btn",multiple:!0,accept:"image/*",className:"visually-hidden",onChange:t.handleAddImages}),Object(m.jsx)("label",{htmlFor:"imgs-btn",children:"\u80cc\u666f\u753b\u50cf"}),Object(m.jsx)("button",{className:"clear-btn",onClick:t.handleResetImages,children:"\u30af\u30ea\u30a2"})]}),Object(m.jsxs)("div",{className:"pref-item img-switching",children:[Object(m.jsxs)("label",{htmlFor:"img-switch-time",children:["\u80cc\u666f\u753b\u50cf\u306e\u5207\u308a\u66ff\u3048\u6642\u9593: ",t.switchTime,"\u79d2"]}),Object(m.jsx)("input",{id:"img-switch-time",type:"range",min:"1",max:"3600",value:t.switchTime,onChange:t.handleSwitchTime})]}),Object(m.jsxs)("div",{className:"pref-item fit-image",children:[Object(m.jsx)("label",{htmlFor:"fit-image-config",children:"\u753b\u50cf\u3092\u5168\u4f53\u8868\u793a"}),Object(m.jsx)("input",{type:"checkbox",id:"fit-image-config",checked:t.isFitImage,onChange:function(e){return t.setFitImage((function(t){return!t}))}})]}),!1===t.isFitImage?Object(m.jsx)("div",{children:"\u753b\u50cf\u306e\u8868\u793a\u4f4d\u7f6e\u306e\u6307\u5b9a"}):null,Object(m.jsx)("div",{className:"pref-item locate-image-wrapper",style:t.isFitImage?{opacity:.3}:{opacity:1},children:i})]})}var x=function(){var t=Object(c.useRef)(null),e=Object(c.useState)(!1),n=Object(u.a)(e,2),r=n[0],o=n[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),f=a[0],x=a[1],y=Object(c.useState)(null),w=Object(u.a)(y,2),F=w[0],S=w[1],k=Object(c.useState)(!0),E=Object(u.a)(k,2),M=E[0],I=E[1],N=Object(c.useState)(!0),T=Object(u.a)(N,2),C=T[0],L=T[1],P=Object(c.useState)(5),R=Object(u.a)(P,2),A=R[0],B=R[1],D=Object(c.useState)(.6),H=Object(u.a)(D,2),G=H[0],q=H[1],J=Object(c.useState)(5),W=Object(u.a)(J,2),U=W[0],Y=W[1],z=Object(c.useRef)(5),K=Object(c.useRef)(-1),Q=Object(c.useState)([]),V=Object(u.a)(Q,2),X=V[0],Z=V[1],$=Object(c.useRef)(null),_=Math.floor(360*Math.random()),tt=Math.floor(100*Math.random()),et=Math.floor(100*Math.random()),nt="hsl(".concat(_,", ").concat(tt,"%, ").concat(et,"%)"),ct=Object(d.useSpring)((function(){return{to:{background:nt},config:b()}})),rt=Object(u.a)(ct,2),ot=rt[0],it=rt[1],at=g(_,tt,et),lt=Object(c.useMemo)((function(){return{from:{opacity:0},to:function(){var t=Object(s.a)(l.a.mark((function t(e,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()(300);case 2:return t.next=4,e({opacity:1});case 4:return t.next=6,h()(5e3);case 6:return t.next=8,e({opacity:0});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),config:d.config.gentle,reset:!0}}),[]),st=Object(d.useSpring)((function(){return lt})),ut=Object(u.a)(st,2),dt=ut[0],ft=ut[1],ht={hsl:[_,tt,et]},mt={rgb:[at.R,at.G,at.B]},gt=Object(d.useSpring)((function(){return ht})),bt=Object(u.a)(gt,2),jt=bt[0],pt=bt[1],vt=Object(d.useSpring)((function(){return mt})),Ot=Object(u.a)(vt,2),xt=Ot[0],yt=Ot[1],wt=Object(c.useCallback)((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,r=Object(u.a)(pt.current[0].springs.hsl.animation.to,3),o=r[0],i=r[1],a=r[2];if(o!==e||i!==n||a!==c){Z((function(t){var e=t.concat([pt.current[0].springs.hsl.animation.to.map((function(t){return Math.floor(t)}))]);return e.length>100&&e.shift(),e}));var l=-1!==e?e:Math.floor(360*Math.random()),s=-1!==n?n:Math.floor(100*Math.random()),d=-1!==c?c:Math.floor(100*Math.random()),f=g(l,s,d);it.start({to:{background:"hsl(".concat(l,", ").concat(s,"%, ").concat(d,"%)")},delay:100}),ft.start(lt),pt.start({hsl:[l,s,d],delay:350}),yt.start({rgb:[f.R,f.G,f.B],delay:350})}}),[it,ft,pt,yt,lt]);Object(c.useEffect)((function(){wt(null)}),[wt]),Object(c.useEffect)((function(){var t=function(){alert("\u304a\u4f7f\u3044\u306e\u30d6\u30e9\u30a6\u30b6\u306f\u5168\u753b\u9762\u8868\u793a\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3044\u3088\u3046\u3067\u3059\u3002")};document.addEventListener("fullscreenerror",t);var e=function(){document.fullscreenElement?o(!0):o(!1)};return document.addEventListener("fullscreenchange",e),function(){document.removeEventListener("fullscreenerror",t),document.removeEventListener("fullscreenchange",e)}}),[]);var Ft=Object(c.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=function(){$.current=setTimeout((function(){Ft()}),1e3*z.current)};if(f.length>0){var n=(K.current+t)%f.length;if(n<0&&(n+=f.length),K.current!==n){var c=new FileReader;return c.onload=function(t){S(t.target.result),K.current=n,e()},c.onerror=function(t){K.current=n,e()},c.onabort=c.onerror,void c.readAsDataURL(f[n])}}}),[f,S]);return Object(c.useEffect)((function(){return Ft(),function(){clearTimeout($.current)}}),[Ft]),Object(c.useEffect)((function(){var t=document.querySelector(".App"),e=function(t){t.stopPropagation(),t.preventDefault()};t.addEventListener("dragenter",e),t.addEventListener("dragover",e);var n=function(t){t.stopPropagation(),t.preventDefault();var e=j(t.dataTransfer.files);clearTimeout($.current),x((function(t){var n=t.concat(e);return p(n),n}))};return t.addEventListener("drop",n),function(){t.removeEventListener("dragenter",e),t.removeEventListener("dragover",e),t.removeEventListener("drop",n)}}),[]),Object(c.useEffect)((function(){var e=-1,n=function(n){e>0&&clearTimeout(e),!1!==M&&(e=setTimeout((function(){if(null!=t.current){var n=window.scrollY/t.current.offsetHeight;n<.7?window.scrollTo({top:0,left:0,behavior:"smooth"}):n>.75&&n<1&&window.scrollTo({top:t.current.offsetHeight,left:0,behavior:"smooth"}),e=-1}else e=-1}),250))};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n),clearTimeout(e)}}),[M]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(d.animated.div,{ref:t,className:"App",style:ot,onClick:function(t){return wt(t)},children:[Object(m.jsx)(v,{opacity:G,imageSrc:F,isFitImage:C,imagePosition:A}),Object(m.jsxs)(d.animated.div,{className:"Info",style:dt,children:[Object(m.jsx)(d.animated.span,{style:{color:jt.hsl.to((function(t,e,n){return n<60?"white":"black"}))},children:jt.hsl.to((function(t,e,n){return"hsl (".concat(t.toFixed(0),", ").concat(e.toFixed(0),"%, ").concat(n.toFixed(0),"%)")}))}),Object(m.jsx)(d.animated.span,{style:{color:jt.hsl.to((function(t,e,n){return n<60?"white":"black"}))},children:xt.rgb.to((function(t,e,n){return"rgb (".concat(t.toFixed(0),", ").concat(e.toFixed(0),", ").concat(n.toFixed(0),")")}))}),Object(m.jsx)(d.animated.button,{style:{color:jt.hsl.to((function(t,e,n){return n<60?"white":"black"})),border:jt.hsl.to((function(t,e,n){return"solid 5px ".concat(n<60?"white":"black")}))},className:"Info-btn",onClick:function(e){e.stopPropagation(),e.preventDefault(),r?document.exitFullscreen():t.current.requestFullscreen()},children:r?"Exit":"Full"}),Object(m.jsx)(d.animated.button,{style:{opacity:f.length>1?1:0,color:jt.hsl.to((function(t,e,n){return n<60?"white":"black"})),border:jt.hsl.to((function(t,e,n){return"solid 5px ".concat(n<60?"white":"black")}))},className:"Info-btn prev-btn",onClick:function(t){f.length>1&&(t.preventDefault(),t.stopPropagation(),clearTimeout($.current),Ft(-1))},children:"<<"}),Object(m.jsx)(d.animated.button,{style:{opacity:f.length>1?1:0,color:jt.hsl.to((function(t,e,n){return n<60?"white":"black"})),border:jt.hsl.to((function(t,e,n){return"solid 5px ".concat(n<60?"white":"black")}))},className:"Info-btn next-btn",onClick:function(t){f.length>1&&(t.preventDefault(),t.stopPropagation(),clearTimeout($.current),Ft(1))},children:">>"})]})]}),Object(m.jsx)(O,{hslSpring:jt,rgbSpring:xt,imgOpacity:G,setImgOpacity:q,handleAddImages:function(t){var e=j(t.target.files);clearTimeout($.current),x((function(t){var n=t.concat(e);return p(n),n}))},handleResetImages:function(t){x([]),S(null),K.current=-1,clearTimeout($.current)},switchTime:U,handleSwitchTime:function(t){var e=t.target.value;e<1&&(e=1),e>3600&&(e=3600),z.current=e,Y(e)},colorHistory:X,changeBackground:wt,enableAutoScroll:M,setAutoScroll:I,isFitImage:C,setFitImage:L,imagePosition:A,setImagePosition:B})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};document.title="BG Only",i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),y()}},[[39,1,2]]]);
//# sourceMappingURL=main.c357066d.chunk.js.map
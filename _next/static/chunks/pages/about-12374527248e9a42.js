(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1233:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(8051)}])},193:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893),r=n(7294);var s={id:void 0,className:void 0,resize:void 0,renderer:function(e){console.log("Canvas element '".concat(e.id||"undefined","' has no renderer attached!"))},children:void 0};function c(e){var t=e.id,n=void 0===t?s.id:t,c=e.className,a=void 0===c?s.className:c,o=e.resize,h=void 0===o?s.resize:o,u=e.renderer,l=void 0===u?s.renderer:u,d=e.children,f=void 0===d?s.children:d,v=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=function(){!function(e){var t=e.clientWidth,n=e.clientHeight;(e.width!==t||e.height!==n)&&(e.width=t,e.height=n)}(v.current),l(v.current)};return h&&window.addEventListener("resize",e),e(),l(v.current),function(){window.removeEventListener("resize",e)}}),[]),(0,i.jsx)("canvas",{className:a,ref:v,id:n,children:f})}},9987:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(5893);function r(e){var t=e.children,n=e.className;return(0,i.jsx)("main",{className:n,children:t})}},4298:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893),r=n(9008),s=n.n(r);function c(e){var t=e.title,n=e.children;return(0,i.jsxs)("div",{className:"w-full min-h-screen font-kanit bg-stone-100 text-amber-400",children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:"JE | "+t})}),n]})}},5231:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(5893),r=n(1351),s=n(1931);function c(){var e=(0,s.b)().siteNav;return(0,i.jsxs)("button",{style:e.open?{transform:"rotate(90deg)"}:void 0,className:"w-12 h-12 flex flex-col p-2 justify-between duration-200",onClick:function(){e.setOpen((function(e){return!e}))},children:[(0,i.jsx)("div",{className:"w-full h-1 bg-amber-400"}),(0,i.jsx)("div",{className:"w-full h-1 bg-amber-400"}),(0,i.jsx)("div",{className:"w-full h-1 bg-amber-400"})]})}var a=n(1664),o=n.n(a);function h(e){var t=e.href,n=e.children,r=(0,s.b)().siteNav;return(0,i.jsx)(o(),{href:t,children:(0,i.jsx)("a",{onClick:function(){r.open&&r.setOpen(!1)},children:n})})}function u(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));return(0,i.jsxs)("nav",{className:"w-full h-full flex justify-between items-center m-auto text-xl",children:[(0,i.jsx)(h,{href:"/",children:(0,i.jsx)("div",{className:"text-pink-600 text-4xl font-bold",children:"JE"})}),(0,i.jsx)(c,{})]})}function l(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));return(0,i.jsx)("header",{className:"px-4 h-20 w-full sticky top-0 bg-black/40 backdrop-blur-sm z-50",children:(0,i.jsx)(u,{})})}function d(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));var t=(0,s.b)().siteNav;return(0,i.jsxs)("menu",{style:t.open?{opacity:1,pointerEvents:"auto"}:void 0,className:"fixed flex flex-col gap-4 justify-center items-center w-full h-screen top-0 bg-black/80 z-40 opacity-0 pointer-events-none duration-200",children:[(0,i.jsx)(h,{href:"/about",children:"About"}),(0,i.jsx)(h,{href:"/work",children:"My Work"}),(0,i.jsx)(h,{href:"/blog",children:"Blog"}),(0,i.jsx)(h,{href:"/contact",children:"Contact"})]})}function f(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),t,(0,i.jsx)(d,{})]})}},9235:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,{Z:function(){return s}});var r=function(){function e(t){var n=t.x,i=t.y,r=t.w,s=t.h,c=t.invert;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=i,this.w=r,this.h=s,this.invert=c,this.cModifier=1,this.stepOffset=360*Math.random(),this.c1={r:255,g:255,b:255},this.c2={r:200,g:200,b:200},this.c3={r:0,g:0,b:0}}var t,n,r;return t=e,(n=[{key:"draw",value:function(e){e.beginPath(),this.invert?(e.moveTo(this.x,this.y),e.lineTo(this.x+this.w,this.y),e.lineTo(this.x+this.w/2,this.y+this.h),e.closePath()):(e.moveTo(this.x,this.y+this.h),e.lineTo(this.x+this.w/2,this.y),e.lineTo(this.x+this.w,this.y+this.h),e.closePath()),e.fillStyle="rgb(".concat(this.c3.r,",").concat(this.c3.g,",").concat(this.c3.b,")"),e.fill()}},{key:"update",value:function(e){var t=Math.abs(Math.sin(e+this.stepOffset));this.c3.r=(this.c2.r-this.c1.r)*t+this.c1.r,this.c3.g=(this.c2.g-this.c1.g)*t+this.c1.g,this.c3.b=(this.c2.b-this.c1.b)*t+this.c1.b}}])&&i(t.prototype,n),r&&i(t,r),e}();function s(e){for(var t=e.getContext("2d"),n=[],i=!1,s=-20;s<e.height;s+=40){for(var c=i,a=-20;a<e.width;a+=20)n.push(new r({x:a,y:s,w:40,h:40,invert:c})),c=!c;i=!i}!function i(){t.clearRect(0,0,e.width,e.height);var r=Date.now()/2e3;n.forEach((function(e){e.update(r),e.draw(t)})),requestAnimationFrame(i)}()}},8051:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(5893),r=n(9987),s=n(4298),c=n(5231),a=n(193),o=n(9235);function h(){return(0,i.jsx)(s.Z,{title:"About Me",children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(a.Z,{className:"w-full h-screen-1/2",resize:!0,renderer:o.Z})})})})}}},function(e){e.O(0,[749,774,888,179],(function(){return t=1233,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
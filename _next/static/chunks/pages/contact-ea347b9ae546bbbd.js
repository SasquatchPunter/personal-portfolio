(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6405:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(4695)}])},9987:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function s(e){var n=e.children,t=e.className;return(0,r.jsx)("main",{className:t,children:n})}},3254:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function s(e){var n=e.children;return(0,r.jsx)("header",{className:"flex items-center p-4 mt-12",children:(0,r.jsx)("h1",{className:"text-6xl md:text-9xl font-bold w-max text-amber-400 drop-shadow-text-title",children:n})})}},4298:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(9008),c=t.n(s);function l(e){var n=e.title,t=e.children;return(0,r.jsxs)("div",{className:"w-full min-h-screen font-kanit bg-stone-100 text-amber-400",children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"JE | "+n})}),t]})}},4223:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(5893),s=t(1351),c=t(1931);function l(){var e=(0,c.b)().siteNav;return(0,r.jsxs)("button",{style:e.open?{transform:"rotate(90deg)"}:void 0,className:"h-12 w-12 flex flex-col p-2 justify-between duration-200",onClick:function(){e.setOpen((function(e){return!e}))},children:[(0,r.jsx)("div",{className:"w-full h-1 bg-amber-400"}),(0,r.jsx)("div",{className:"w-full h-1 bg-amber-400"}),(0,r.jsx)("div",{className:"w-full h-1 bg-amber-400"})]})}var a=t(1664),i=t.n(a);function o(e){var n=e.href,t=e.children,s=(0,c.b)().siteNav;return(0,r.jsx)(i(),{href:n,children:(0,r.jsx)("a",{className:"text-xl font-bold hover:scale-110 duration-100",onClick:function(){s.open&&s.setOpen(!1)},children:t})})}function u(e){e=null!==e?e:(0,s.Z)(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)("nav",{className:"w-full h-full flex justify-between items-center m-auto text-xl",children:[(0,r.jsx)(o,{href:"/",children:(0,r.jsx)("div",{className:"text-pink-600 text-4xl font-bold",children:"JE"})}),(0,r.jsx)(l,{})]})}function d(e){e=null!==e?e:(0,s.Z)(new TypeError("Cannot destructure undefined"));return(0,r.jsx)("header",{className:"px-4 h-20 w-full sticky top-0 bg-black/40 backdrop-blur-sm z-50",children:(0,r.jsx)(u,{})})}var f=t(7294),h=JSON.parse('{"U":{"github":"https://github.com/SasquatchPunter","codepen":"https://codepen.io/SasquatchPunter","linkedin":"https://www.linkedin.com/in/jeremyrelliott/"}}'),x=t(3750),m=t(8193);function v(e){var n=e.className,t=e.vendor,s=void 0===t?"github":t;return(0,r.jsx)("a",{className:["active:text-pink-500",n].join(" "),href:h.U[s],target:"_blank",children:function(){switch(s){case"github":return(0,r.jsx)(x.rFR,{className:"w-full h-full"});case"codepen":return(0,r.jsx)(m.fkW,{className:"w-full h-full"});case"linkedin":return(0,r.jsx)(x.NQh,{className:"w-full h-full"})}}()})}function j(e){e=null!==e?e:(0,s.Z)(new TypeError("Cannot destructure undefined"));var n=(0,c.b)().siteNav,t=(0,f.useRef)(null),l=(0,f.useRef)(null),a=(0,f.useRef)(null);(0,f.useEffect)((function(){var e=t.current,n=l.current,r=a.current,s=function(e){var t=(window.innerWidth/2-e.screenX)/20,s=(window.innerHeight/2-e.screenY)/20;n.style.setProperty("--tw-rotate-x","".concat(s,"deg")),n.style.setProperty("--tw-rotate-y","".concat(-t,"deg")),r.style.setProperty("--tw-rotate-x","".concat(s,"deg")),r.style.setProperty("--tw-rotate-y","".concat(-t,"deg"))};return e.addEventListener("mousemove",s),function(){e.removeEventListener("mousemove",s)}}),[]);var i="w-8 h-8 hover:scale-110 hover:-translate-y-0.5 hover:drop-shadow-icon-sm duration-100";return(0,r.jsxs)("menu",{ref:t,style:n.open?{opacity:1,pointerEvents:"auto"}:void 0,className:"fixed flex justify-center items-center w-full h-screen top-0 bg-black/80 z-40 opacity-0 pointer-events-none duration-200 perspective-800 perspective-origin-c transform-flat",children:[(0,r.jsxs)("nav",{ref:l,className:"flex flex-col gap-4 transform-3d",children:[(0,r.jsx)(o,{href:"/about",children:"About"}),(0,r.jsx)(o,{href:"/work",children:"My Work"}),(0,r.jsx)(o,{href:"/blog",children:"Blog"}),(0,r.jsx)(o,{href:"/contact",children:"Contact"})]}),(0,r.jsxs)("nav",{ref:a,className:"flex flex-row gap-4 absolute bottom-0 m-8 transform-3d",children:[(0,r.jsx)(v,{className:i,vendor:"github"}),(0,r.jsx)(v,{className:i,vendor:"linkedin"}),(0,r.jsx)(v,{className:i,vendor:"codepen"})]})]})}function p(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),n,(0,r.jsx)(j,{})]})}},4695:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(1351),s=t(5893),c=t(9987),l=t(3254),a=t(4298),i=t(4223);function o(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));return(0,s.jsx)(a.Z,{title:"Contact Me",children:(0,s.jsx)(i.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsxs)(l.Z,{children:["Contact",(0,s.jsx)("br",{}),"Me"]})})})})}}},function(e){e.O(0,[13,617,290,774,888,179],(function(){return n=6405,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
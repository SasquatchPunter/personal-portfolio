(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(9222)}])},9987:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function s(e){var n=e.children,t=e.className;return(0,r.jsx)("main",{className:t,children:n})}},4298:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(9008),i=t.n(s);function l(e){var n=e.title,t=e.children;return(0,r.jsxs)("div",{className:"w-full min-h-screen font-kanit bg-stone-100 text-amber-400",children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"JE | "+n})}),t]})}},2960:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(5893),s=t(1351),i=t(1931);function l(){var e=(0,i.b)().siteNav;return(0,r.jsxs)("button",{style:e.open?{transform:"rotate(90deg)"}:void 0,className:"h-12 w-12 flex flex-col p-2 justify-between duration-200",onClick:function(){e.setOpen((function(e){return!e}))},children:[(0,r.jsx)("div",{className:"w-full h-1 bg-amber-400"}),(0,r.jsx)("div",{className:"w-full h-1 bg-amber-400"}),(0,r.jsx)("div",{className:"w-full h-1 bg-amber-400"})]})}var c=t(1664),a=t.n(c);function o(e){var n=e.href,t=e.children,s=(0,i.b)().siteNav;return(0,r.jsx)(a(),{href:n,children:(0,r.jsx)("a",{className:"text-xl font-bold hover:scale-110 duration-100",onClick:function(){s.open&&s.setOpen(!1)},children:t})})}function u(e){e=null!==e?e:(0,s.Z)(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)("nav",{className:"w-full h-full flex justify-between items-center m-auto text-xl",children:[(0,r.jsx)(o,{href:"/",children:(0,r.jsx)("div",{className:"text-pink-600 text-4xl font-bold",children:"JE"})}),(0,r.jsx)(l,{})]})}function d(e){e=null!==e?e:(0,s.Z)(new TypeError("Cannot destructure undefined"));return(0,r.jsx)("header",{className:"px-4 h-20 w-full sticky top-0 bg-black/40 backdrop-blur-sm z-50",children:(0,r.jsx)(u,{})})}var f=t(7294),h={damp:40};var x=JSON.parse('{"U":{"github":"https://github.com/SasquatchPunter","codepen":"https://codepen.io/SasquatchPunter","linkedin":"https://www.linkedin.com/in/jeremyrelliott/"}}'),m=t(3750),v=t(8193);function p(e){var n=e.className,t=e.vendor,s=void 0===t?"github":t;return(0,r.jsx)("a",{className:["active:text-pink-500",n].join(" "),href:x.U[s],target:"_blank",children:function(){switch(s){case"github":return(0,r.jsx)(m.rFR,{className:"w-full h-full"});case"codepen":return(0,r.jsx)(v.fkW,{className:"w-full h-full"});case"linkedin":return(0,r.jsx)(m.NQh,{className:"w-full h-full"})}}()})}function j(e){e=null!==e?e:(0,s.Z)(new TypeError("Cannot destructure undefined"));var n=(0,i.b)().siteNav,t=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:h).damp,n=void 0===e?40:e,t=(0,f.useRef)(null),r=(0,f.useRef)([]);return(0,f.useEffect)((function(){var e=t.current,s=r.current,i=function(e){var t=(window.innerWidth/2-e.clientX)/n,r=(window.innerHeight/2-e.clientY)/n;s.forEach((function(e){e.style.setProperty("--tw-rotate-x","".concat(r,"deg")),e.style.setProperty("--tw-rotate-y","".concat(-t,"deg"))}))};return e.addEventListener("mousemove",i),function(){e.removeEventListener("mousemove",i)}}),[]),{tiltParent:t,tiltChild:function(e){e&&!r.current.includes(e)&&r.current.push(e)}}}(),l=t.tiltParent,c=t.tiltChild,a="w-8 h-8 hover:scale-110 hover:-translate-y-0.5 hover:drop-shadow-icon-sm duration-100";return(0,r.jsxs)("menu",{ref:l,style:n.open?{opacity:1,pointerEvents:"auto"}:void 0,className:"fixed flex justify-center items-center w-full h-screen top-0 bg-black/80 z-40 opacity-0 pointer-events-none duration-200 perspective-800 perspective-origin-c transform-flat",children:[(0,r.jsxs)("nav",{ref:c,className:"flex flex-col gap-4 transform-3d",children:[(0,r.jsx)(o,{href:"/about",children:"About"}),(0,r.jsx)(o,{href:"/work",children:"My Work"}),(0,r.jsx)(o,{href:"/blog",children:"Blog"}),(0,r.jsx)(o,{href:"/contact",children:"Contact"})]}),(0,r.jsxs)("nav",{ref:c,className:"flex flex-row gap-4 absolute bottom-0 m-8 transform-3d",children:[(0,r.jsx)(p,{className:a,vendor:"github"}),(0,r.jsx)(p,{className:a,vendor:"linkedin"}),(0,r.jsx)(p,{className:a,vendor:"codepen"})]})]})}function b(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),n,(0,r.jsx)(j,{})]})}},9222:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d},default:function(){return f}});var r=t(5893),s=t(4298),i=t(9987),l=t(2960),c=t(1664),a=t.n(c);function o(e){var n,t=e.post,s=new Date(t.sys.publishedAt).toDateString();return(0,r.jsx)("article",{className:"w-full",children:(0,r.jsx)(a(),{href:"/blog/".concat(t.slug),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:t.mainImage.url,alt:t.mainImage.description}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold",children:t.title}),(0,r.jsxs)("h6",{children:["by ",null!==(n=t.author)&&void 0!==n?n:"Anonymous"]}),(0,r.jsx)("h6",{children:s})]})]})})})}function u(e){var n=e.posts;return(0,r.jsx)("section",{className:"sm:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:n.map((function(e){return(0,r.jsx)(o,{post:e},e.slug)}))})}var d=!0;function f(e){var n=e.posts;return(0,r.jsx)(s.Z,{title:"Blog",children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(u,{posts:n})})})})}}},function(e){e.O(0,[13,617,290,774,888,179],(function(){return n=7286,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
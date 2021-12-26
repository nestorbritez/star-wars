import{j as d,_ as t,E as b,u,R as P,A as I,a as A,r as f,Q as L,p as T,c as E,b as _,B as v,d as j,e as h,f as C}from"./vendor.4e0c114b.js";const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}};S();const e=d.exports.jsx,s=d.exports.jsxs,D=t.main`
  flex flex-col items-center
  m-10
  text-yellow-400 text-center
  animate-fade-in-up
`,$=t(b)`
  w-12 h-12
`;function m({children:r}){return s(D,{role:"alert","aria-label":"Warning",children:[e($,{})," ",r]})}var F="/assets/favicon.ed4e9b49.svg";const{VITE_API_URL:O}={VITE_API_URL:"https://swapi.jsdev.ar/",VITE_DETAIL_PAGE_PATH:"star-wars-film"};function g(r){return fetch(O+r,{headers:{"Content-Type":"application/json"}}).then(i=>i.json()).catch(console.error)}async function R(){return g("films")}async function H(r){return g(`films/${r}`)}function V(){return u("films",R)}function G(r){return u(`films/${r}`,H.bind(null,r))}const M=t.article`
  bg-gray-100
  shadow-2xl
  rounded-2xl
`,p=t.hgroup``,x=t.h1`
  font-heading
  text-4xl
`,k=t.h2`
  font-heading
  text-xl
`,W=t.div`
  flex items-center
  m-16
  animate-pulse
`,B=t.div`
  flex flex-row
  items-center justify-center
  gap-3 p-3 m-auto
  text-slate-500
`,N=t(P)`
  h-5 w-5
  animate-spin
`;function y({children:r}){return e(W,{role:"status","aria-busy":"true","aria-label":"Loading",children:s(B,{children:[e(N,{})," ",r]})})}const Q=t.main`
  flex flex-col items-center
  gap-4 sm:gap-10 my-4 sm:mt-10 sm:mb-44
  sm:max-w-3xl sm:mx-auto
  animate-fade-in-up
`,U=t.img`
  w-52 sm:w-72
  animate-pulse
`,q=t.div`
  sm:w-xl
  overflow-visible
`,K=t.img`
  w-full
  rounded-2xl
  shadow-xl
`,z=t(M)`
  flex flex-col sm:flex-row
  gap-7 sm:p-7 sm:mx-4
  sm:max-h-96
`,J=t.div`
  flex flex-col
  text-slate-600
  gap-7 m-7 sm:m-0
`,X=t.p`
  overflow-y-scroll
  whitespace-pre-line
  text-center
`,Y=t(p)`
  flex flex-col
  gap-2
`,Z=t(x)`
  text-3xl
  text-indigo-900
`,ee=t(k)`
  text-lg
  text-slate-600
  flex items-center
  gap-4
`,te=t.span`
  inline-block
  w-0.5 h-6
  bg-slate-300
`,ne=t.a`
  flex gap-2 items-center
  uppercase tracking-wider
  text-sm
  text-slate-400
`,re=t(I)`
  w-5 h-5
`;function ie(){var n;const{seoId:r="id"}=A(),i=+r.split("-").reverse()[0],{isLoading:a,data:o={}}=G(i);return a?e(y,{children:"Loading..."}):!o||Object.keys(o).length===0?s(m,{children:[e("p",{children:"Oh no!"}),e("p",{children:"R2D2 is having troubles displaying this page."})]}):s(Q,{"aria-label":"Detail Page",children:[s(ne,{href:"/",children:[e(re,{})," Go Back"]}),e(U,{src:F,title:"Star Wars",width:288,height:123}),isNaN(i)&&e("p",{role:"alert","aria-label":"Page not found",children:"We couldn't found the film you're looking for, but we picked a random film for you \u{1F605}"}),s(z,{children:[e(q,{children:e(K,{src:o.filmImageUrl,title:o.title,width:400,height:550})}),s(J,{children:[s(Y,{children:[s(Z,{children:["Star Wars: ",o.title]}),s(ee,{children:[s("span",{children:["By ",o.director]}),e(te,{role:"separator"}),e("span",{children:(n=o.releaseDate)==null?void 0:n.substring(0,4)})]})]}),e(X,{role:"region","aria-label":"Opening",children:o.openingCrawl})]})]})]})}const oe=(r,i)=>`${r.toLowerCase().replace(/ /g,"-")}-${i}`,{VITE_DETAIL_PAGE_PATH:se}={VITE_API_URL:"https://swapi.jsdev.ar/",VITE_DETAIL_PAGE_PATH:"star-wars-film"},ae=t.section`
  flex flex-col
  gap-2
  text-center
  animate-fade-in-up
`,le=t.h2`
  text-gray-100
  order-last
`,ce=t.img`
  rounded-2xl
  border border-slate-500
`;function de({filmId:r,filmImageUrl:i,title:a,role:o}){const n=f.exports.useMemo(()=>`/${se}/${oe(a,r)}`,[r,a]);return e("div",{role:o,children:e("a",{title:a,href:n,children:s(ae,{children:[e(le,{children:a}),e(ce,{src:i,alt:a,width:"234",height:"321"})]})})})}var ue="/assets/hero.bc093a3f.jpg";const fe=t.main`
  flex flex-col items-center
  gap-7 mb-12 md:my-12
  animate-fade-in-down
`,he=t(p)`
  flex justify-center text-center
`,me=t.div`
  grid grid-cols-2 md:grid-cols-3
  justify-items-center
  gap-7 mx-7
`,ge=t.img`
  object-cover
  w-full h-80 max-w-3xl
  md:rounded-2xl
`;function pe(){const{isLoading:r,data:i=[]}=V();return!r&&(!i||!i.length)?s(m,{children:[e("p",{children:"The server is not responding as expected."}),e("p",{children:"Patience you must have my young Padawan."})]}):s(fe,{"aria-label":"Listing Page",children:[e(ge,{src:ue,width:1920,height:1200,role:"banner",title:"May the Force be with you"}),e(he,{children:e(x,{children:"Star Wars Films"})}),r?e(y,{children:"Loading films..."}):e(me,{role:"list",children:i.map(({id:a,title:o,filmImageUrl:n})=>e(de,{role:"listitem",filmImageUrl:n,title:o,filmId:a},o))})]})}const{VITE_DETAIL_PAGE_PATH:xe}={VITE_API_URL:"https://swapi.jsdev.ar/",VITE_DETAIL_PAGE_PATH:"star-wars-film"},w=new L({defaultOptions:{queries:{cacheTime:1e3*60*60*24,refetchOnMount:!1,refetchOnWindowFocus:!1}}});T({queryClient:w,persistor:E({storage:window.localStorage})});const ye=t.footer`
  text-slate-400
  text-center
  my-8
`;function we(){return s(_,{client:w,children:[e(v,{children:s(j,{children:[e(h,{path:`/${xe}/:seoId`,element:e(ie,{})}),e(h,{path:"/",element:e(pe,{})})]})}),e(ye,{"aria-label":"footer",children:e("p",{children:"Made with \u2764\uFE0F in Argentina"})})]})}C.render(e(f.exports.StrictMode,{children:e(we,{})}),document.getElementById("root"));

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7858:function(e,t,s){Promise.resolve().then(s.t.bind(s,1749,23)),Promise.resolve().then(s.bind(s,8910)),Promise.resolve().then(s.bind(s,4341)),Promise.resolve().then(s.bind(s,1690)),Promise.resolve().then(s.bind(s,6392)),Promise.resolve().then(s.bind(s,9636))},8910:function(e,t,s){"use strict";s.r(t),s.d(t,{ContactForm:function(){return v}});var l=s(7437);s(2265);var n=s(2169);let r=e=>{let{className:t,...s}=e;return(0,l.jsx)("input",{className:(0,n.cn)("h-12 w-full rounded-xl border p-2 px-4 focus:outline-none",t),...s})};var i=s(7054);let a=async e=>{try{return(await i.ZP.send("service_82fniy8","template_xjf4e9r",e,"Sw2VgqV07FcjWAuv-")).text}catch(e){return e.toString()}};var c=s(4887),d=s(4578);let x=()=>{let e=async(e,t)=>{let s=d.z.object({name:d.z.string().min(1),email:d.z.string().email(),message:d.z.string().min(1)}).safeParse({name:t.get("name"),email:t.get("email"),message:t.get("message")});return s.success&&"OK"===await a(s.data)?{message:"Sent!"}:{message:"Failed..."}},[t,s]=(0,c.useFormState)(e,null);return[t,s]};var o=s(4932),u=s(2949);let m=()=>{let{pending:e}=(0,c.useFormStatus)();return(0,l.jsxs)("button",{className:(0,n.cn)("flex h-fit w-fit gap-2 rounded-full bg-blue-600 px-6 py-3 text-white",e&&"text-zinc-200"),disabled:e,children:[(0,l.jsx)("div",{children:"Send"}),e?(0,l.jsx)(u.cIg,{size:20}):(0,l.jsx)(o.GYo,{size:20})]})},h=()=>(0,l.jsx)("textarea",{name:"message",className:"h-60 w-full resize-none rounded-xl border p-4 focus:outline-none",placeholder:"Message..."}),f=e=>{let{stateMessage:t}=e;return(0,l.jsx)("div",{className:"absolute left-1/2 -translate-x-1/2",children:t})};var j=s(6392),g=s(5668);let v=()=>{var e;let[t,s]=x();return(0,l.jsxs)("form",{action:s,className:"relative flex w-full flex-col gap-4 text-zinc-500 sm:w-4/5 md:w-1/2",children:[(0,l.jsx)(j.ScrollRisingBox,{children:(0,l.jsx)(r,{placeholder:"Name",name:"name",className:"focus:outline-none"})}),(0,l.jsx)(j.ScrollRisingBox,{children:(0,l.jsx)(r,{placeholder:"Email",name:"email",type:"email"})}),(0,l.jsx)(j.ScrollRisingBox,{children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(h,{}),(0,l.jsx)("div",{className:"absolute bottom-4 right-4 text-zinc-500",children:"to: <".concat(g.Fu.primaryEmail,">")})]})}),(0,l.jsx)(j.ScrollRisingBox,{children:(0,l.jsxs)("div",{className:"flex w-full items-center justify-end",children:[(0,l.jsx)(f,{stateMessage:null!==(e=null==t?void 0:t.message)&&void 0!==e?e:""}),(0,l.jsx)(m,{})]})})]})}},4341:function(e,t,s){"use strict";s.r(t),s.d(t,{IntroSection:function(){return j}});var l=s(7437);s(2265);var n=s(5668),r=s(6691),i=s.n(r);let a=()=>(0,l.jsx)("div",{className:"flex h-60 items-center justify-center",children:(0,l.jsx)("div",{className:"animate-show-up flex h-20 w-20 items-center justify-center overflow-hidden rounded-full",children:(0,l.jsx)("div",{className:"relative h-60 w-60 overflow-hidden rounded-full border",children:(0,l.jsx)(i(),{src:n.Fu.profilePrimary,alt:"profile",sizes:"300px",fill:!0,className:"object-cover"})})})}),c=()=>(0,l.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,l.jsx)("div",{className:"flex flex-col items-center text-xl sm:text-3xl",children:"자바스크립트를 사랑한 프론트엔드 개발자"}),(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,l.jsx)("span",{children:"JS를 사랑한 개발자 명인지 입니다."}),(0,l.jsx)("span",{children:"프론트엔드 아키텍쳐를 설계하고 웹 페이지 성능을 최적화하는데 집중합니다."})]})]});var d=s(9636),x=s(1396),o=s.n(x),u=s(9172);let m=()=>(0,l.jsxs)(o(),{href:n.tg.contact.path,className:"flex w-fit items-center justify-center gap-2 rounded-full bg-zinc-100 px-7 py-4",children:[(0,l.jsx)("span",{children:"Contact"}),(0,l.jsx)(u.Rdr,{size:18})]});var h=s(4873);let f=()=>(0,l.jsxs)(o(),{href:n.Fu.resumePath,download:n.Fu.resumePath.split("/").at(-1),target:"_blank",className:"flex w-fit items-center justify-center gap-2 rounded-full border bg-blue-600 px-7 py-4 text-white",children:[(0,l.jsx)("span",{children:"Resume"}),(0,l.jsx)(h.Cb8,{size:18})]}),j=()=>(0,l.jsx)(d.SectionLayout,{id:"home",nextSection:n.tg.skill,children:(0,l.jsxs)("div",{className:"flex flex-col items-center gap-16",children:[(0,l.jsx)(a,{}),(0,l.jsxs)("div",{className:"flex animate-rising flex-col gap-8",children:[(0,l.jsx)(c,{}),(0,l.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,l.jsx)(m,{}),(0,l.jsx)(f,{})]})]})]})})},1690:function(e,t,s){"use strict";s.r(t),s.d(t,{Project:function(){return w}});var l=s(7437),n=s(2265);let r=e=>{let{techStack:t}=e;return(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>(0,l.jsx)("div",{className:"rounded-xl border p-1 px-2 text-xs text-zinc-500",children:e},e))})},i=e=>{let[t,s]=(0,n.useState)(0),[l,r]=(0,n.useState)(0),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let l=setInterval(()=>{i.current&&(t>=i.current.children.length-1||(r(e=>i.current?e+i.current.children[t].getBoundingClientRect().width:e),s(e=>e+1)))},e);return()=>{clearInterval(l)}},[t,e]),(0,n.useEffect)(()=>{i.current&&(i.current.style.transform="translateX(calc(-".concat(l,"px - ").concat(t," * 1rem))"))},[l,t]),[i,t,()=>{s(0),r(0)}]};var a=s(6691),c=s.n(a);let d=e=>{let{height:t,imageSize:s,src:r,alt:i}=e,a=(0,n.useRef)(null),d={height:"".concat(t,"px"),width:"".concat(t*s.width/s.height,"px")};return(0,l.jsx)("div",{ref:a,className:"relative h-full w-full flex-shrink-0 overflow-hidden rounded-xl shadow-lg",style:d,children:(0,l.jsx)(c(),{src:r,alt:i,fill:!0,sizes:"400px"})})},x=e=>{let{isImagesLoaded:t,imagesSizes:s,imagesRef:r,images:i,currentImageIndex:a}=e,[c,x]=(0,n.useState)(0),o=(0,n.useRef)(null);if((0,n.useEffect)(()=>{o.current&&x(o.current.getBoundingClientRect().height)},[t]),!t)return(0,l.jsx)("div",{children:"loading..."});let u=s[i[a]],m={width:"".concat(c*u.width/u.height,"px")};return(0,l.jsx)("div",{ref:o,style:m,className:"relative flex flex-[1] overflow-hidden rounded-xl shadow-lg transition-[width] duration-500",children:(0,l.jsx)("div",{ref:r,className:"absolute flex h-full transition-all duration-500",children:i.map(e=>(0,l.jsx)("div",{className:"mr-4 h-full",children:(0,l.jsx)(d,{alt:e,src:e,height:c,imageSize:s[e]})},e))})})};var o=s(2169),u=s(7997);let m=e=>{let{images:t,currentImageIndex:s,handleInit:n}=e;return(0,l.jsxs)("div",{className:"flex h-fit items-center gap-4",children:[(0,l.jsx)("div",{className:"flex h-10 items-center gap-4",children:t.map((e,t)=>(0,l.jsx)("div",{className:(0,o.cn)("h-1 w-1 rounded-full bg-zinc-400",s===t&&"bg-zinc-600")},t))}),(0,l.jsx)("button",{onClick:n,children:(0,l.jsx)(u.MWg,{})})]})},h=e=>{let{isImagesLoaded:t,imagesSizes:s,images:n}=e,[r,a,c]=i(3e3);return(0,l.jsxs)("div",{className:"flex h-full w-fit flex-col items-center",children:[(0,l.jsx)(x,{isImagesLoaded:t,imagesSizes:s,images:n,imagesRef:r,currentImageIndex:a}),(0,l.jsx)(m,{images:n,handleInit:c,currentImageIndex:a})]})},f=e=>{let[t,s]=(0,n.useState)(!1),[l,r]=(0,n.useState)({});return(0,n.useEffect)(()=>{Promise.all(e.map(e=>new Promise((t,s)=>{let l=new Image;l.src=e,l.onload=s=>{r(t=>({...t,[e]:{width:l.width,height:l.height}})),t(s)},l.onerror=s}))).then(e=>s(!0))},[e]),[t,l]},j=e=>{let{images:t,inView:s}=e,[n,r]=f(t);return(0,l.jsx)("div",{className:"flex flex-[1] justify-center",children:t.length>0?(0,l.jsx)("div",{className:"h-[17.5rem] sm:h-[30rem]",children:s&&(0,l.jsx)(h,{isImagesLoaded:n,imagesSizes:r,images:t})}):(0,l.jsx)("div",{className:"flex h-full w-52 items-center justify-center rounded-xl pb-4 text-base text-zinc-500",children:"No Images.."})})};var g=s(4327),v=s(1396),p=s.n(v),N=s(9172);let b=e=>{let{links:t}=e;return(0,l.jsxs)("div",{className:"flex items-center gap-4 py-2 text-xs text-zinc-500",children:[(0,l.jsx)(N.hJX,{className:"text-sm text-black"}),t.map(e=>(0,l.jsx)("div",{className:"rounded-xl transition-all duration-500 hover:text-black",children:(0,l.jsx)(p(),{href:e,children:e.split("/").at(-1)})},e))]})},w=e=>{let{project:t}=e,[s,n]=(0,g.YD)();return(0,l.jsxs)("div",{ref:s,className:(0,o.cn)("flex w-full flex-col gap-8 opacity-0 sm:w-[40rem]",n&&"animate-rising"),children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"flex items-center border-b pb-2 text-base font-semibold",children:t.name}),t.github&&(0,l.jsx)(b,{links:t.github})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(j,{inView:n,images:t.images}),(0,l.jsx)(r,{techStack:t.techStack})]})]})}},6392:function(e,t,s){"use strict";s.r(t),s.d(t,{ScrollRisingBox:function(){return i}});var l=s(7437),n=s(2169);s(2265);var r=s(4327);let i=e=>{let{children:t}=e,[s,i]=(0,r.YD)();return(0,l.jsx)("div",{ref:s,className:(0,n.cn)("w-full opacity-0",i&&"animate-rising"),children:t})}},9636:function(e,t,s){"use strict";s.r(t),s.d(t,{SectionLayout:function(){return o}});var l=s(7437),n=s(5668),r=s(1396),i=s.n(r),a=s(2265),c=s(4873);let d=e=>{let{nextSection:t}=e,[s,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{setTimeout(()=>r(!0),1500)},[]),(0,l.jsx)("div",{className:"sticky flex h-16 items-center justify-center",children:(0,l.jsxs)("div",{className:"flex animate-indicator-show-up items-center justify-center overflow-hidden rounded-full bg-zinc-100 bg-opacity-50 p-2 backdrop-blur-md",children:[(0,l.jsx)("div",{className:"flex flex-[1] items-center justify-center",children:s&&(0,l.jsxs)("div",{children:["Go to ",(0,l.jsx)("span",{children:t.name})]})}),(0,l.jsx)(i(),{href:t.path,children:(0,l.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white",children:s&&(t.name===n.tg.home.name?(0,l.jsx)(c.Vmf,{size:20}):(0,l.jsx)(c.hjJ,{size:20}))})})]})})};var x=s(4327);let o=e=>{let{id:t,children:s,nextSection:n}=e,{ref:r,inView:i}=(0,x.YD)();return(0,l.jsxs)("section",{id:t,ref:r,className:"relative mb-32 flex min-h-screen w-full flex-col items-center justify-center gap-8",children:[(0,l.jsx)("div",{className:"mb-auto sm:h-16"}),s,(0,l.jsx)("div",{className:"sticky bottom-4 mt-auto min-h-16 -translate-y-[2rem] sm:bottom-12",children:i&&(0,l.jsx)(d,{nextSection:n})})]})}},2169:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var l=s(7042),n=s(4769);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m6)((0,l.W)(t))}}},function(e){e.O(0,[706,452,950,665,699,848,362,299,971,938,744],function(){return e(e.s=7858)}),_N_E=e.O()}]);
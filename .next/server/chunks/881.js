exports.id=881,exports.ids=[881],exports.modules={80641:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},5391:(e,s,t)=>{Promise.resolve().then(t.bind(t,35807))},11615:(e,s,t)=>{Promise.resolve().then(t.bind(t,77187))},35807:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var n=t(95344),r=t(74081),c=t.n(r),a=t(484),i=t.n(a),l=t(92635),d=t(3729),o=t.n(d);t(14942);let u=()=>{let e=o().useRef(null),s=o().useRef(null),t=o().useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1});return o().useEffect(()=>(document.addEventListener("mousemove",n=>{let{clientX:r,clientY:c}=n;t.current.mouseX=r-e.current.clientWidth/2,t.current.mouseY=c-e.current.clientHeight/2,t.current.mouseX=r-s.current.clientWidth/2,t.current.mouseY=c-s.current.clientHeight/2}),()=>{}),[]),o().useEffect(()=>{let n=()=>{t.current.key=requestAnimationFrame(n);let{mouseX:r,mouseY:c,destinationX:a,destinationY:i,distanceX:l,distanceY:d}=t.current;a&&i?(t.current.distanceX=(r-a)*.1,t.current.distanceY=(c-i)*.1,Math.abs(t.current.distanceX)+Math.abs(t.current.distanceY)<.1?(t.current.destinationX=r,t.current.destinationY=c):(t.current.destinationX+=l,t.current.destinationY+=d)):(t.current.destinationX=r,t.current.destinationY=c),e.current.style.transform=`translate3d(${a}px, ${i}px, 0)`,s.current.style.transform=`translate3d(${a}px, ${i}px, 0)`};n()},[]),(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:"cs-cursor_lg",ref:s}),n.jsx("div",{className:"cs-cursor_sm",ref:e})]})};function h({copyrightText:e,logoSrc:s,logoAlt:t,text:n}){return""}function m({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsxs)("head",{children:[n.jsx("meta",{name:"author",content:"Laralink"}),n.jsx("link",{rel:"icon",href:"/images/favicon.ico",sizes:"any"}),n.jsx("title",{children:"Arino Creative Agency Next JS Template"})]}),(0,n.jsxs)("body",{className:`${i().variable} ${c().variable}`,children:[n.jsx(l.Z,{}),n.jsx(u,{}),e,n.jsx(h,{})]})]})}t(84348),t(20788),t(56506),t(48180),t(95517),t(12848),new Date().getFullYear(),t(95890)},77187:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var n=t(95344),r=t(84348),c=t(24574);function a(){return n.jsx(r.Z,{className:"cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page",style:{backgroundImage:'url("/images/about_hero_bg.jpeg")'},children:n.jsx(r.Z,{className:"container",children:n.jsx(c.Z,{title:"This page could <br/>not be found.",subtitle:"404 Errro",btnText:"Back To Home",btnLink:"/",variant:"cs-style1 text-center"})})})}},91117:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var n=t(95344);t(3729);var r=t(24501),c=t(56506);function a({btnLink:e,btnText:s,variant:t,icon:a}){return n.jsx(c.default,{href:e,className:t?`cs-text_btn ${t}`:"cs-text_btn",children:(0,n.jsxs)(n.Fragment,{children:[n.jsx("span",{children:s}),a||n.jsx(r.JO,{icon:"bi:arrow-right"})]})})}},84348:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var n=t(95344);function r(e){return n.jsx("div",{...e,children:e.children})}t(3729)},92635:(e,s,t)=>{"use strict";t.d(s,{Z:()=>j});var n=t(95344),r=t(3729),c=t(84348),a=t(56506);function i({children:e}){let[s,t]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[n.jsx("span",{className:s?"cs-munu_dropdown_toggle active":"cs-munu_dropdown_toggle",onClick:()=>{t(!s)}}),e]})}var l=t(20788),d=t(48180),o=t(95517);t(9676);var u=t(24501),h=t(8014),m=t(74314),x=t.n(m);function j({variant:e}){let[s,t]=(0,r.useState)(""),[m,j]=(0,r.useState)("");(0,r.useEffect)(()=>{let e=h.Z.get("token"),s=h.Z.get("email");t(e||""),j(s||"")},[]);let[f,g]=(0,r.useState)(!1),[_,N]=(0,r.useState)(!1),[b,v]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>0?g(!0):g(!1)})},[]),(0,n.jsxs)(n.Fragment,{children:[n.jsx("header",{className:`cs-site_header cs-style1 text-uppercase ${e||""} cs-sticky_header ${f?"cs-sticky_header_active":""}`,children:n.jsx(c.Z,{className:"cs-main_header",children:n.jsx(c.Z,{className:"container",children:(0,n.jsxs)(c.Z,{className:"cs-main_header_in",children:[n.jsx(c.Z,{className:"cs-main_header_left",children:n.jsx(a.default,{className:"cs-site_branding",href:"/",children:n.jsx("img",{src:"/images/PICMANIA.svg",alt:"Logo",style:{width:"40%"}})})}),n.jsx(c.Z,{className:"cs-main_header_center",children:(0,n.jsxs)(c.Z,{className:"cs-nav cs-primary_font cs-medium",children:[(0,n.jsxs)("ul",{className:"cs-nav_list",style:{display:`${b?"block":"none"}`},children:[n.jsx("li",{className:"menu-item-has-children"}),s&&m?(0,n.jsxs)("li",{className:"menu-item-has-children",children:[n.jsx(a.default,{href:"/",onClick:()=>v(!1),children:"Galeria"}),n.jsx(i,{children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(a.default,{href:"/cargar-galeria",onClick:()=>v(!1),children:"Cargar Galeria"})}),n.jsx("li",{children:n.jsx(a.default,{href:"/galleryUploadsData",onClick:()=>v(!1),children:"Ver galerias"})})]})})]}):""]}),n.jsx("span",{className:b?"cs-munu_toggle cs-toggle_active":"cs-munu_toggle",onClick:()=>v(!b),children:n.jsx("span",{})})]})}),n.jsx(c.Z,{className:"cs-main_header_right",children:s&&m?n.jsx(a.default,{href:"#",className:"cs-center",onClick:()=>void x().fire({title:"Quiere cerrar su sesion?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Si",denyButtonText:"No",customClass:{actions:"my-actions",cancelButton:"order-1 right-gap",confirmButton:"order-2",denyButton:"order-3"}}).then(e=>{e.isConfirmed?(h.Z.remove("token"),h.Z.remove("email"),h.Z.remove("user"),h.Z.remove("ut"),window.location.href="/"):e.isDenied}),style:{marginRight:"10px"},children:n.jsx(c.Z,{className:"cs-toolbox",children:n.jsx("span",{className:"cs-icon_btn",children:n.jsx(u.JO,{icon:"fa-sign-out"})})})}):n.jsx(a.default,{href:"/sign-in",className:"cs-center",style:{marginRight:"10px"},children:n.jsx(c.Z,{className:"cs-toolbox",children:n.jsx("span",{className:"cs-icon_btn",children:n.jsx(u.JO,{icon:"fa-user"})})})})})]})})})}),(0,n.jsxs)(c.Z,{className:_?"cs-side_header active":"cs-side_header",children:[n.jsx("button",{className:"cs-close",onClick:()=>N(!_)}),n.jsx(c.Z,{className:"cs-side_header_overlay",onClick:()=>N(!_)}),(0,n.jsxs)(c.Z,{className:"cs-side_header_in",children:[n.jsx(c.Z,{className:"cs-side_header_shape"}),n.jsx(a.default,{className:"cs-site_branding",href:"/",children:n.jsx("img",{src:"/images/footer_logo.svg",alt:"Logo"})}),n.jsx(c.Z,{className:"cs-side_header_box",children:(0,n.jsxs)("h2",{className:"cs-side_header_heading",children:["Do you have a project in your ",n.jsx("br",{})," mind? Keep connect us."]})}),n.jsx(c.Z,{className:"cs-side_header_box",children:n.jsx(l.Z,{title:"Contact Us",withIcon:!0})}),n.jsx(c.Z,{className:"cs-side_header_box",children:n.jsx(d.Z,{title:"Subscribe",subtitle:"At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.",placeholder:"example@gmail.com"})}),n.jsx(c.Z,{className:"cs-side_header_box",children:n.jsx(o.Z,{})})]})]})]})}},24574:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var n=t(95344);t(3729);var r=t(63983),c=t(91117),a=t(45617),i=t(84348);function l({title:e,subtitle:s,btnLink:t,btnText:l,variant:d,children:o}){return(0,n.jsxs)(i.Z,{className:d?`cs-section_heading ${d}`:"cs-section_heading cs-style1",children:[n.jsx("h3",{className:"cs-section_subtitle",children:(0,r.ZP)(s)}),n.jsx("h2",{className:"cs-section_title",children:(0,r.ZP)(e)}),o,l&&(0,n.jsxs)(n.Fragment,{children:[n.jsx(a.Z,{lg:"45",md:"20"}),n.jsx(c.Z,{btnLink:t,btnText:l})]})]})}},45617:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var n=t(95344);t(3729);var r=t(84348);function c({lg:e,md:s}){return n.jsx(r.Z,{className:`cs-height_${e} cs-height_lg_${s}`})}t(88807)},20788:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var n=t(95344);t(3729);var r=t(24501);function c({withIcon:e,title:s}){return(0,n.jsxs)(n.Fragment,{children:[s&&n.jsx("h2",{className:"cs-widget_title",children:s}),(0,n.jsxs)("ul",{className:"cs-menu_widget cs-style1 cs-mp0",children:[(0,n.jsxs)("li",{children:[e?n.jsx("span",{className:"cs-accent_color",children:n.jsx(r.JO,{icon:"material-symbols:add-call-rounded"})}):"","+44 454 7800 112"]}),(0,n.jsxs)("li",{children:[e?n.jsx("span",{className:"cs-accent_color",children:n.jsx(r.JO,{icon:"mdi:envelope"})}):"","infotech@arino.com"]}),(0,n.jsxs)("li",{children:[e?n.jsx("span",{className:"cs-accent_color",children:n.jsx(r.JO,{icon:"mdi:map-marker"})}):"","50 Wall Street Suite, 44150 ",n.jsx("br",{}),"Ohio, United States"]})]})]})}},48180:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var n=t(95344);t(3729);var r=t(84348);function c({title:e,subtitle:s,placeholder:t}){return(0,n.jsxs)(n.Fragment,{children:[e&&n.jsx("h2",{className:"cs-widget_title",children:e}),(0,n.jsxs)(r.Z,{className:"cs-newsletter cs-style1",children:[(0,n.jsxs)("form",{action:"#",className:"cs-newsletter_form",children:[n.jsx("input",{type:"email",className:"cs-newsletter_input",placeholder:t}),n.jsx("button",{className:"cs-newsletter_btn",children:n.jsx("span",{children:"Send"})})]}),n.jsx(r.Z,{className:"cs-newsletter_text",children:s})]})]})}},95517:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var n=t(95344);t(3729);var r=t(56506),c=t(24501),a=t(84348);function i(){return(0,n.jsxs)(a.Z,{className:"cs-social_btns cs-style1",children:[n.jsx(r.default,{href:"/",className:"cs-center",children:n.jsx(c.JO,{icon:"fa6-brands:linkedin-in"})}),n.jsx(r.default,{href:"/",className:"cs-center",children:n.jsx(c.JO,{icon:"fa6-brands:twitter"})}),n.jsx(r.default,{href:"/",className:"cs-center",children:n.jsx(c.JO,{icon:"fa6-brands:youtube"})}),n.jsx(r.default,{href:"/",className:"cs-center",children:n.jsx(c.JO,{icon:"fa6-brands:slack"})})]})}},51965:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>c,__esModule:()=>r,default:()=>a});let n=(0,t(86843).createProxy)(String.raw`C:\Users\dante\Desktop\maai\administracionGalerias\arino-nextjs\src\app\layout.js`),{__esModule:r,$$typeof:c}=n,a=n.default},10870:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>c,__esModule:()=>r,default:()=>a});let n=(0,t(86843).createProxy)(String.raw`C:\Users\dante\Desktop\maai\administracionGalerias\arino-nextjs\src\app\not-found.jsx`),{__esModule:r,$$typeof:c}=n,a=n.default},95890:()=>{},14942:()=>{},12848:()=>{},9676:()=>{},88807:()=>{}};
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4011],{8824:function(e,s,t){Promise.resolve().then(t.bind(t,48753))},48753:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var a=t(57437),n=t(2265),r=t(8792),c=t(63411),i=t.n(c);t(94624);var l=t(8932),o=t(11026),u=t(37948),d=t(93434),m=()=>{let[e,s]=(0,n.useState)(""),[t,c]=(0,n.useState)(""),[m,h]=(0,n.useState)(""),[x,f]=(0,n.useState)(""),j=async e=>{let s=await fetch("".concat("https://strapi-fotos.maai.cloud","/api/users?filters[email][$eq]=").concat(e)),t=await s.json();return t.length>0?t[0].id:null},g=async s=>{s.preventDefault();var a=new Headers;a.append("Content-Type","application/json");let n=await j(x);if(t==m){if(n)i().fire({icon:"error",timer:5e3,showCancelButton:!1,showConfirmButton:!0,text:"Usuario ya registrado"});else{var r=JSON.stringify({username:e,password:t,email:x});fetch("".concat("https://strapi-fotos.maai.cloud","/api/auth/local/register"),{method:"POST",headers:a,body:r,redirect:"follow"}).then(e=>{400!=e.status?(i().fire({icon:"success",timer:5e3,showCancelButton:!1,showConfirmButton:!0,text:"Usuario creado exitosamente"}),window.location.href="/sign-in"):i().fire({icon:"error",timer:5e3,showCancelButton:!1,showConfirmButton:!0,text:"Usuario o Email ya registrados"})}).then(e=>console.log(e)).catch(e=>console.log("error",e))}}else i().fire({icon:"error",timer:5e3,showCancelButton:!1,showConfirmButton:!0,text:"La confirmacion de contrase\xf1a es distinta"})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{lg:"150",md:"80"}),(0,a.jsx)("section",{className:"login-area pt-40 pb-100 wow","data-wow-duration":".8s","data-wow-delay":".5s",children:(0,a.jsx)(o.Z,{className:"container",children:(0,a.jsxs)(o.Z,{className:"row",children:[(0,a.jsx)(d.Z,{title:"Registrarse",subtitle:"Register"}),(0,a.jsx)(l.Z,{lg:"30",md:"5"}),(0,a.jsx)(o.Z,{className:"col-lg-12",children:(0,a.jsxs)("form",{onSubmit:g,className:"row",children:[(0,a.jsxs)(o.Z,{className:"col-sm-6",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"cs-primary_color",children:["Usuario ",(0,a.jsx)("span",{children:"*"})]}),(0,a.jsx)("input",{type:"text",className:"cs-form_field",value:e,onChange:e=>s(e.target.value),required:!0}),(0,a.jsx)(l.Z,{lg:"20",md:"20"})]}),(0,a.jsxs)(o.Z,{className:"col-sm-6",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"cs-primary_color",children:["E-mail ",(0,a.jsx)("span",{children:"*"})]}),(0,a.jsx)("input",{type:"text",className:"cs-form_field",value:x,onChange:e=>f(e.target.value),required:!0}),(0,a.jsx)(l.Z,{lg:"20",md:"20"})]}),(0,a.jsxs)(o.Z,{className:"col-sm-6",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"cs-primary_color",children:["Contrase\xf1a ",(0,a.jsx)("span",{children:"*"})]}),(0,a.jsx)("input",{type:"password",className:"cs-form_field",value:t,onChange:e=>c(e.target.value),required:!0}),(0,a.jsx)(l.Z,{lg:"20",md:"20"})]}),(0,a.jsxs)(o.Z,{className:"col-sm-6",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"cs-primary_color",children:["Confirmar Contrase\xf1a ",(0,a.jsx)("span",{children:"*"})]}),(0,a.jsx)("input",{className:"cs-form_field",type:"password",onChange:e=>h(e.target.value),required:!0}),(0,a.jsx)(l.Z,{lg:"20",md:"20"})]}),(0,a.jsxs)(o.Z,{className:"col-sm-12",children:[(0,a.jsxs)("button",{className:"cs-btn cs-style1",children:[(0,a.jsx)("span",{children:"Registrarse"}),(0,a.jsx)(u.JO,{icon:"bi:arrow-right"})]}),(0,a.jsx)(r.default,{href:"/sign-in",className:"cs-btn cs-style1",style:{marginLeft:"20px"},children:"Log in"})]})]})})]})})})]})},h=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(m,{})}),x=()=>(0,a.jsx)(h,{})},61933:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var a=t(57437);t(2265);var n=t(37948),r=t(8792);function c(e){let{btnLink:s,btnText:t,variant:c,icon:i}=e;return(0,a.jsx)(r.default,{href:s,className:c?"cs-text_btn ".concat(c):"cs-text_btn",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:t}),i||(0,a.jsx)(n.JO,{icon:"bi:arrow-right"})]})})}},11026:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var a=t(57437);function n(e){return(0,a.jsx)("div",{...e,children:e.children})}t(2265)},94624:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var a=t(57437);t(2265);var n=t(8792),r=t(11026);function c(e){let{title:s,bgSrc:t,pageLinkText:c}=e;return(0,a.jsx)(r.Z,{className:"cs-page_heading cs-style1 cs-center text-center cs-bg",style:{backgroundImage:"url(".concat(t,")")},children:(0,a.jsx)(r.Z,{className:"container",children:(0,a.jsxs)(r.Z,{className:"cs-page_heading_in",children:[(0,a.jsx)("h1",{className:"cs-page_title cs-font_50 cs-white_color",children:s}),(0,a.jsxs)("ol",{className:"breadcrumb text-uppercase",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(n.default,{href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"breadcrumb-item active",children:c})]})]})})})}},93434:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(57437);t(2265);var n=t(84555),r=t(61933),c=t(8932),i=t(11026);function l(e){let{title:s,subtitle:t,btnLink:l,btnText:o,variant:u,children:d}=e;return(0,a.jsxs)(i.Z,{className:u?"cs-section_heading ".concat(u):"cs-section_heading cs-style1",children:[(0,a.jsx)("h3",{className:"cs-section_subtitle",children:(0,n.ZP)(t)}),(0,a.jsx)("h2",{className:"cs-section_title",children:(0,n.ZP)(s)}),d,o&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{lg:"45",md:"20"}),(0,a.jsx)(r.Z,{btnLink:l,btnText:o})]})]})}},8932:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(57437);t(2265);var n=t(11026);function r(e){let{lg:s,md:t}=e;return(0,a.jsx)(n.Z,{className:"cs-height_".concat(s," cs-height_lg_").concat(t)})}t(12541)},12541:function(){}},function(e){e.O(0,[8792,7948,4555,3411,2971,8069,1744],function(){return e(e.s=8824)}),_N_E=e.O()}]);
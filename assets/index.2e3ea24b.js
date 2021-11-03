import{d as w,a as v,r as y,o as r,c as l,t as p,b as $,e as t,u as f,f as x,p as M,g as k,h as e,i as b,j as i,w as n,F as V,k as g,l as C,m as H,n as j,q as S}from"./vendor.77686cf9.js";const L=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function d(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function h(s){if(s.ep)return;s.ep=!0;const c=d(s);fetch(s.href,c)}};L();var A="/vue3-compact-template/assets/logo.03d6d6da.png";const I=w("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}});var _=(o,a)=>{for(const[d,h]of a)o[d]=h;return o};const E=o=>(M("data-v-4e7aab64"),o=o(),k(),o),T={key:0,class:"font-semibold text-xl text-gray-600"},D=x('<h2 class="font-semibold" data-v-4e7aab64> Tech stack </h2><ul class="pl-8 list-disc" data-v-4e7aab64><li data-v-4e7aab64> Framework: <a href="https://v3.vuejs.org/" rel="nofollow" data-v-4e7aab64>Vue 3</a></li><li data-v-4e7aab64>Package manager: <a href="https://github.com/pnpm/pnpm" data-v-4e7aab64>pnpm</a></li><li data-v-4e7aab64> Build tool: <a href="https://vitejs.dev/" rel="nofollow" data-v-4e7aab64>Vite 2</a></li><li data-v-4e7aab64> State management: <a href="https://pinia.esm.dev/" rel="nofollow" data-v-4e7aab64>Pinia</a></li><li data-v-4e7aab64> Router: <a href="https://next.router.vuejs.org/" rel="nofollow" data-v-4e7aab64>Vue Router</a></li><li data-v-4e7aab64> Utility first CSS framework: <a href="https://windicss.org/" rel="nofollow" data-v-4e7aab64>WindiCSS</a></li><li data-v-4e7aab64> CSS preprocessor: <a href="https://lesscss.org/" rel="nofollow" data-v-4e7aab64>Less</a></li><li data-v-4e7aab64>UI component explorer: <a href="https://github.com/storybookjs/storybook/" data-v-4e7aab64>Storybook</a></li><li data-v-4e7aab64>Icons: <a href="https://github.com/antfu/unplugin-icons" data-v-4e7aab64>unplugin-icons</a></li><li data-v-4e7aab64>ESLint rule: <a href="https://github.com/standard/eslint-config-standard-with-typescript" data-v-4e7aab64>eslint-config-standard-with-typescript</a></li><li data-v-4e7aab64>Style linting: stylelint standard</li><li data-v-4e7aab64>commit convention: husky + commitlint</li></ul><p data-v-4e7aab64>See <code data-v-4e7aab64>README.md</code> for more information.</p>',3),N={class:"text-center"},R={class:"text-center"},B=E(()=>t("p",null,[e(" Edit "),t("code",null,"components/HelloWorld.vue"),e(" to test hot module replacement. ")],-1)),W=v({props:{msg:null},setup(o){const a=y(0),d=I();return(h,s)=>(r(),l("div",null,[o.msg?(r(),l("h1",T,p(o.msg),1)):$("",!0),D,t("div",N,[t("button",{type:"button",class:"btn mx-2",onClick:s[0]||(s[0]=c=>a.value++)}," ref in component count is: "+p(a.value),1)]),t("div",R,[t("button",{type:"button",class:"btn mx-2",onClick:s[1]||(s[1]=c=>f(d).increment())}," ref in pinia store count is: "+p(f(d).count),1)]),B]))}});var F=_(W,[["__scopeId","data-v-4e7aab64"]]);const P={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},O=t("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",fill:"currentColor"},null,-1),q=[O];function U(o,a){return r(),l("svg",P,q)}var Y={name:"mdi-github",render:U};const G={class:"px-8 py-12"},K={class:"flex items-center"},J=t("img",{alt:"Vue logo",src:A,class:"inline-block h-10"},null,-1),Q=t("div",{class:"flex-grow font-semibold text-xl px-4"}," vue3-compact-template ",-1),X={href:"https://github.com/upupming/vue3-compact-template"},Z={class:"mt-2 flex items-center justify-center space-x-2"},t1=e(" Home "),e1=e(" About "),o1=v({setup(o){return(a,d)=>{const h=b("router-link"),s=b("router-view");return r(),l(V,null,[t("div",G,[t("div",K,[J,Q,t("a",X,[i(f(Y),{class:"h-10 w-10"})])]),i(F,{msg:"\u26A1\uFE0F A simple and compact vue 3 template with current cutting edge front end technologies.",class:"mt-2 pb-2 space-y-2 border-b-gray-400 border-b-width-1px"}),t("div",Z,[i(h,{to:"/",class:"nav-item"},{default:n(()=>[t1]),_:1}),i(h,{to:"/about",class:"nav-item"},{default:n(()=>[e1]),_:1})])]),i(s)],64)}}});const s1={},a1={class:"item"},n1={class:"details"};function i1(o,a){return r(),l("div",a1,[t("i",null,[g(o.$slots,"icon",{},void 0,!0)]),t("div",n1,[t("h3",null,[g(o.$slots,"heading",{},void 0,!0)]),g(o.$slots,"default",{},void 0,!0)])])}var u=_(s1,[["render",i1],["__scopeId","data-v-052e252a"]]);const c1={},r1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},l1=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),d1=[l1];function h1(o,a){return r(),l("svg",r1,d1)}var _1=_(c1,[["render",h1]]);const u1={},m1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},v1=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),p1=[v1];function f1(o,a){return r(),l("svg",m1,p1)}var g1=_(u1,[["render",f1]]);const z1={},b1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},w1=t("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),y1=[w1];function $1(o,a){return r(),l("svg",b1,y1)}var x1=_(z1,[["render",$1]]);const M1={},k1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},V1=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),C1=[V1];function H1(o,a){return r(),l("svg",k1,C1)}var j1=_(M1,[["render",H1]]);const S1={},L1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},A1=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),I1=[A1];function E1(o,a){return r(),l("svg",L1,I1)}var T1=_(S1,[["render",E1]]);const D1={class:"pl-16 pb-10"},N1=e(" Documentation "),R1=e(" Vue\u2019s "),B1=t("a",{target:"_blank",href:"https://v3.vuejs.org/"},"official documentation",-1),W1=e(" provides you with all information you need to get started. "),F1=e(" Tooling "),P1=e(" This project is served and bundled with "),O1=t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),q1=e(". The recommended IDE setup is "),U1=t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),Y1=e(" + "),G1=t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),K1=e(". If you need to test your components and web pages, check out "),J1=t("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),Q1=e(" and "),X1=t("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),Z1=e(". "),tt=t("br",null,null,-1),et=e(" More instructions are available in "),ot=t("code",null,"README.md",-1),st=e(". "),at=e(" Ecosystem "),nt=e(" Get official tools and libraries for your project: "),it=t("a",{target:"_blank",href:"https://next.vuex.vuejs.org/"},"Vuex",-1),ct=e(", "),rt=t("a",{target:"_blank",href:"https://next.router.vuejs.org/"},"Vue Router",-1),lt=e(", "),dt=t("a",{target:"_blank",href:"https://next.vue-test-utils.vuejs.org/"},"Vue Test Utils",-1),ht=e(", and "),_t=t("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),ut=e(". If you need more resources, we suggest paying "),mt=t("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),vt=e(" a visit. "),pt=e(" Community "),ft=e(" Got stuck? Ask your question on "),gt=t("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),zt=e(", our official Discord server, or "),bt=t("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),wt=e(". You should also subscribe to "),yt=t("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),$t=e(" and follow the official "),xt=t("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),Mt=e(" twitter account for latest news in the Vue world. "),kt=e(" Support Vue "),Vt=e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Ct=t("a",{target:"_blank",href:"https://vuejs.org/support-vuejs/"},"becoming a sponsor",-1),Ht=e(". "),jt=v({setup(o){return(a,d)=>(r(),l("main",D1,[i(u,null,{icon:n(()=>[i(_1)]),heading:n(()=>[N1]),default:n(()=>[R1,B1,W1]),_:1}),i(u,null,{icon:n(()=>[i(g1)]),heading:n(()=>[F1]),default:n(()=>[P1,O1,q1,U1,Y1,G1,K1,J1,Q1,X1,Z1,tt,et,ot,st]),_:1}),i(u,null,{icon:n(()=>[i(x1)]),heading:n(()=>[at]),default:n(()=>[nt,it,ct,rt,lt,dt,ht,_t,ut,mt,vt]),_:1}),i(u,null,{icon:n(()=>[i(j1)]),heading:n(()=>[pt]),default:n(()=>[ft,gt,zt,bt,wt,yt,$t,xt,Mt]),_:1}),i(u,null,{icon:n(()=>[i(T1)]),heading:n(()=>[kt]),default:n(()=>[Vt,Ct,Ht]),_:1})]))}}),St={},Lt={class:"mx-2 font-semibold text-center"};function At(o,a){return r(),l("div",Lt," This is an about page ")}var It=_(St,[["render",At]]);const Et=[{path:"/",component:jt},{path:"/about",component:It}];const Tt=C({history:H(),routes:Et}),z=j(o1),Dt=S();z.use(Dt);z.use(Tt);z.mount("#app");

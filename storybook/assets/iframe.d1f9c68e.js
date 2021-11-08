var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var z=(e,o,n)=>o in e?Y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,l=(e,o)=>{for(var n in o||(o={}))N.call(o,n)&&z(e,n,o[n]);if(g)for(var n of g(o))$.call(o,n)&&z(e,n,o[n]);return e},f=(e,o)=>Z(e,ee(o));var T=(e,o)=>{var n={};for(var r in e)N.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&g)for(var r of g(e))o.indexOf(r)<0&&$.call(e,r)&&(n[r]=e[r]);return n};import{c as te,a as oe,b as t,A as ne,M as re,d as ae,e as L,r as se,f as u,t as h,g as y,h as c,u as M,i as v,j as O,o as p,k as ie,l as I,n as le,m as ce,p as j,q as _,s as pe,v as A,w as de,x as me,y as ue,z as ge,B as fe,C as he,D as ye,E as be,F as ve,G as _e,H as ke,I as xe,J as we,K as Se,L as Ce,N as Ee}from"./vendor.99b04d94.js";const Ne=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};Ne();const $e={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},ze=te();oe.use(ze);var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:$e}),Le="/vue3-compact-template/storybook/assets/code-brackets.9ef6443e.svg",Me="/vue3-compact-template/storybook/assets/colors.ac9401f3.svg",Oe="/vue3-compact-template/storybook/assets/comments.f15a6837.svg",Ie="/vue3-compact-template/storybook/assets/direction.94a9917f.svg",je="/vue3-compact-template/storybook/assets/flow.275142c6.svg",Ae="/vue3-compact-template/storybook/assets/plugin.57148314.svg",Be="/vue3-compact-template/storybook/assets/repo.fb4ece47.svg",Ve="/vue3-compact-template/storybook/assets/stackalt.2ad81543.svg";const Pe={},De="wrapper";function B(n){var r=n,{components:e}=r,o=T(r,["components"]);return t(De,f(l(l({},Pe),o),{components:e,mdxType:"MDXLayout"}),t(re,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:Ae,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:Ve,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:Me,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:je,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:Be,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:Ie,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:Le,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:Oe,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"src/stories/Introduction.stories.mdx")))}B.isMDXComponent=!0;const V=()=>{throw new Error("Docs-only story")};V.parameters={docsOnly:!0};const d={title:"Example/Introduction",includeStories:["__page"]},He={};d.parameters=d.parameters||{};d.parameters.docs=f(l({},d.parameters.docs||{}),{page:()=>t(ne,{mdxStoryNameToKey:He,mdxComponentMeta:d},t(B,null))});var Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:V,default:d});const Ue=ae("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}});const Re={class:"mt-2 pb-2 space-y-2"},qe={key:0,class:"font-semibold text-xl text-gray-600"},We=v('<h2 class="font-semibold"> Tech stack </h2><ul class="pl-8 list-disc"><li> Framework: <a href="https://v3.vuejs.org/" rel="nofollow">Vue 3</a></li><li>Package manager: <a href="https://github.com/pnpm/pnpm">pnpm</a></li><li> Build tool: <a href="https://vitejs.dev/" rel="nofollow">Vite 2</a></li><li> State management: <a href="https://pinia.esm.dev/" rel="nofollow">Pinia</a></li><li> Router: <a href="https://next.router.vuejs.org/" rel="nofollow">Vue Router</a></li><li> Utility first CSS framework: <a href="https://windicss.org/" rel="nofollow">WindiCSS</a></li><li> CSS preprocessor: <a href="https://lesscss.org/" rel="nofollow">Less</a></li><li>UI component explorer: <a href="https://github.com/storybookjs/storybook/">Storybook</a></li><li>Icons: <a href="https://github.com/antfu/unplugin-icons">unplugin-icons</a></li><li>ESLint rule: <a href="https://github.com/standard/eslint-config-standard-with-typescript">eslint-config-standard-with-typescript</a></li><li>Style linting: stylelint standard</li><li>commit convention: husky + commitlint</li></ul><p>See <code>README.md</code> for more information.</p>',3),Xe={class:"text-center"},Ge={class:"text-center"},Ke=c("p",null,[O(" Edit "),c("code",null,"components/TemplateIntroduction.vue"),O(" to test hot module replacement. ")],-1),Je=L({});function Qe(e){const o=se(0),n=Ue();return(r,a)=>(p(),u("div",Re,[e.msg?(p(),u("h1",qe,h(e.msg),1)):y("",!0),We,c("div",Xe,[c("button",{type:"button",class:"btn mx-2",onClick:a[0]||(a[0]=s=>o.value++)}," ref in component count is: "+h(o.value),1)]),c("div",Ge,[c("button",{type:"button",class:"btn mx-2",onClick:a[1]||(a[1]=s=>M(n).increment())}," ref in pinia store count is: "+h(M(n).count),1)]),Ke]))}const k=L(f(l({},Je),{props:{msg:null},setup:Qe}));k.__docgenInfo={exportName:"default",displayName:"TemplateIntroduction",description:"",tags:{}};var Ye={title:"Components/TemplateIntroduction",component:k,argTypes:{msg:{control:{type:"text"}}}};const Ze=e=>({components:{TemplateIntroduction:k},setup(){return{args:e}},template:'<template-introduction v-bind="args" />'}),P=Ze.bind({});P.args={msg:"\u26A1\uFE0F A simple and compact vue 3 template with current cutting edge front end technologies."};const et=["Example"];var tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ye,Example:P,__namedExportsOrder:et});var x=(e,o)=>{for(const[n,r]of o)e[n]=r;return e};const D={name:"MyButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:o}){return e=ie(e),{classes:I(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:I(()=>({backgroundColor:e.backgroundColor})),onClick(){o("click")}}}};function ot(e,o,n,r,a,s){return p(),u("button",{type:"button",class:le(r.classes),style:ce(r.style),onClick:o[0]||(o[0]=(...i)=>r.onClick&&r.onClick(...i))},h(n.label),7)}var w=x(D,[["render",ot]]);D.__docgenInfo={displayName:"MyButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};var nt={title:"Example/Button",component:w,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}};const b=e=>({components:{MyButton:w},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),H=b.bind({});H.args={primary:!0,label:"Button"};const F=b.bind({});F.args={label:"Button"};const U=b.bind({});U.args={size:"large",label:"Button"};const R=b.bind({});R.args={size:"small",label:"Button"};const rt=["Primary","Secondary","Large","Small"];var at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt,Primary:H,Secondary:F,Large:U,Small:R,__namedExportsOrder:rt});const q={name:"MyHeader",components:{MyButton:w},props:{user:{type:Object}},emits:["login","logout","createAccount"]},st={class:"wrapper"},it=v('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1);function lt(e,o,n,r,a,s){const i=j("my-button");return p(),u("header",null,[c("div",st,[it,c("div",null,[n.user?(p(),_(i,{key:0,size:"small",label:"Log out",onClick:o[0]||(o[0]=m=>e.$emit("logout"))})):y("",!0),n.user?y("",!0):(p(),_(i,{key:1,size:"small",label:"Log in",onClick:o[1]||(o[1]=m=>e.$emit("login"))})),n.user?y("",!0):(p(),_(i,{key:2,primary:"",size:"small",label:"Sign up",onClick:o[2]||(o[2]=m=>e.$emit("createAccount"))}))])])])}var S=x(q,[["render",lt]]);q.__docgenInfo={displayName:"MyHeader",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};var ct={title:"Example/Header",component:S};const W=e=>({components:{MyHeader:S},setup(){return l({},e)},template:'<my-header :user="user" />'}),C=W.bind({});C.args={user:{}};const E=W.bind({});E.args={user:null};const pt=["LoggedIn","LoggedOut"];var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct,LoggedIn:C,LoggedOut:E,__namedExportsOrder:pt});const X={name:"MyPage",components:{MyHeader:S},props:{user:{type:Object}},emits:["login","logout","createAccount"]},mt=v('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path id="a" d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function ut(e,o,n,r,a,s){const i=j("my-header");return p(),u("article",null,[pe(i,{user:n.user,onLogin:o[0]||(o[0]=m=>e.$emit("login")),onLogout:o[1]||(o[1]=m=>e.$emit("logout")),onCreateAccount:o[2]||(o[2]=m=>e.$emit("createAccount"))},null,8,["user"]),mt])}var G=x(X,[["render",ut]]);X.__docgenInfo={displayName:"MyPage",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var gt={title:"Example/Page",component:G};const K=e=>({components:{MyPage:G},setup(){return{user:e.user}},template:'<my-page :user="user" />'}),J=K.bind({});J.args=l({},C.args);const Q=K.bind({});Q.args=l({},E.args);const ft=["LoggedIn","LoggedOut"];var ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt,LoggedIn:J,LoggedOut:Q,__namedExportsOrder:ft});const yt=[Te,ye,be,ve,_e,ke,xe,we,Se,Ce,Ee];yt.forEach(e=>{Object.keys(e).forEach(o=>{const n=e[o];switch(o){case"args":case"argTypes":return fe.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(r=>ge(r,!1));case"loaders":return n.forEach(r=>ue(r,!1));case"parameters":return A(l({},n),!1);case"argTypesEnhancers":return n.forEach(r=>me(r));case"argsEnhancers":return n.forEach(r=>de(r));case"globals":case"globalTypes":{const r={};return r[o]=n,A(r,!1)}default:return console.log(o+" was not supported :( !")}})});he(()=>[Fe,tt,at,dt,ht].filter(e=>e.default),{hot:!1},!1);
//# sourceMappingURL=iframe.d1f9c68e.js.map

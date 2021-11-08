var Q=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var z=(e,o,r)=>o in e?Q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,l=(e,o)=>{for(var r in o||(o={}))N.call(o,r)&&z(e,r,o[r]);if(g)for(var r of g(o))$.call(o,r)&&z(e,r,o[r]);return e},b=(e,o)=>Y(e,Z(o));var T=(e,o)=>{var r={};for(var n in e)N.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&g)for(var n of g(e))o.indexOf(n)<0&&$.call(e,n)&&(r[n]=e[n]);return r};import{c as ee,a as te,b as t,A as oe,M as re,d as ne,e as ae,r as se,o as c,f as u,t as f,g as h,h as p,u as L,i as v,j as M,k as ie,l as O,n as le,m as ce,p as I,q as k,s as pe,v as j,w as de,x as me,y as ue,z as ge,B as fe,C as he,D as ye,E as be,F as ve,G as ke,H as _e,I as xe,J as we,K as Se,L as Ce,N as Ee}from"./vendor.99b04d94.js";const Ne=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};Ne();const $e={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},ze=ee();te.use(ze);var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:$e}),Le="/vue3-compact-template/storybook/assets/code-brackets.9ef6443e.svg",Me="/vue3-compact-template/storybook/assets/colors.ac9401f3.svg",Oe="/vue3-compact-template/storybook/assets/comments.f15a6837.svg",Ie="/vue3-compact-template/storybook/assets/direction.94a9917f.svg",je="/vue3-compact-template/storybook/assets/flow.275142c6.svg",Ae="/vue3-compact-template/storybook/assets/plugin.57148314.svg",Be="/vue3-compact-template/storybook/assets/repo.fb4ece47.svg",Ve="/vue3-compact-template/storybook/assets/stackalt.2ad81543.svg";const Pe={},De="wrapper";function A(r){var n=r,{components:e}=n,o=T(n,["components"]);return t(De,b(l(l({},Pe),o),{components:e,mdxType:"MDXLayout"}),t(re,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
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
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:Ae,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:Ve,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:Me,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:je,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:Be,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:Ie,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:Le,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:Oe,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"src/stories/Introduction.stories.mdx")))}A.isMDXComponent=!0;const B=()=>{throw new Error("Docs-only story")};B.parameters={docsOnly:!0};const d={title:"Example/Introduction",includeStories:["__page"]},He={};d.parameters=d.parameters||{};d.parameters.docs=b(l({},d.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:He,mdxComponentMeta:d},t(A,null))});var Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:B,default:d});const Ue=ne("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}});const Re={class:"mt-2 pb-2 space-y-2"},qe={key:0,class:"font-semibold text-xl text-gray-600"},We=v('<h2 class="font-semibold"> Tech stack </h2><ul class="pl-8 list-disc"><li> Framework: <a href="https://v3.vuejs.org/" rel="nofollow">Vue 3</a></li><li>Package manager: <a href="https://github.com/pnpm/pnpm">pnpm</a></li><li> Build tool: <a href="https://vitejs.dev/" rel="nofollow">Vite 2</a></li><li> State management: <a href="https://pinia.esm.dev/" rel="nofollow">Pinia</a></li><li> Router: <a href="https://next.router.vuejs.org/" rel="nofollow">Vue Router</a></li><li> Utility first CSS framework: <a href="https://windicss.org/" rel="nofollow">WindiCSS</a></li><li> CSS preprocessor: <a href="https://lesscss.org/" rel="nofollow">Less</a></li><li>UI component explorer: <a href="https://github.com/storybookjs/storybook/">Storybook</a></li><li>Icons: <a href="https://github.com/antfu/unplugin-icons">unplugin-icons</a></li><li>ESLint rule: <a href="https://github.com/standard/eslint-config-standard-with-typescript">eslint-config-standard-with-typescript</a></li><li>Style linting: stylelint standard</li><li>commit convention: husky + commitlint</li></ul><p>See <code>README.md</code> for more information.</p>',3),Xe={class:"text-center"},Ge={class:"text-center"},Ke=p("p",null,[M(" Edit "),p("code",null,"components/TemplateIntroduction.vue"),M(" to test hot module replacement. ")],-1),_=ae({props:{msg:null},setup(e){const o=se(0),r=Ue();return(n,a)=>(c(),u("div",Re,[e.msg?(c(),u("h1",qe,f(e.msg),1)):h("",!0),We,p("div",Xe,[p("button",{type:"button",class:"btn mx-2",onClick:a[0]||(a[0]=s=>o.value++)}," ref in component count is: "+f(o.value),1)]),p("div",Ge,[p("button",{type:"button",class:"btn mx-2",onClick:a[1]||(a[1]=s=>L(r).increment())}," ref in pinia store count is: "+f(L(r).count),1)]),Ke]))}});_.__docgenInfo={displayName:"TemplateIntroduction",description:"",tags:{}};var Je={title:"Components/TemplateIntroduction",component:_,argTypes:{msg:{control:{type:"text"}}}};const Qe=e=>({components:{TemplateIntroduction:_},setup(){return{args:e}},template:'<template-introduction v-bind="args" />'}),V=Qe.bind({});V.args={msg:"\u26A1\uFE0F A simple and compact vue 3 template with current cutting edge front end technologies."};const Ye=["Example"];var Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je,Example:V,__namedExportsOrder:Ye});var x=(e,o)=>{for(const[r,n]of o)e[r]=n;return e};const P={name:"MyButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:o}){return e=ie(e),{classes:O(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:O(()=>({backgroundColor:e.backgroundColor})),onClick(){o("click")}}}};function et(e,o,r,n,a,s){return c(),u("button",{type:"button",class:le(n.classes),style:ce(n.style),onClick:o[0]||(o[0]=(...i)=>n.onClick&&n.onClick(...i))},f(r.label),7)}var w=x(P,[["render",et]]);P.__docgenInfo={displayName:"MyButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};var tt={title:"Example/Button",component:w,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}};const y=e=>({components:{MyButton:w},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),D=y.bind({});D.args={primary:!0,label:"Button"};const H=y.bind({});H.args={label:"Button"};const F=y.bind({});F.args={size:"large",label:"Button"};const U=y.bind({});U.args={size:"small",label:"Button"};const ot=["Primary","Secondary","Large","Small"];var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt,Primary:D,Secondary:H,Large:F,Small:U,__namedExportsOrder:ot});const R={name:"MyHeader",components:{MyButton:w},props:{user:{type:Object}},emits:["login","logout","createAccount"]},nt={class:"wrapper"},at=v('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1);function st(e,o,r,n,a,s){const i=I("my-button");return c(),u("header",null,[p("div",nt,[at,p("div",null,[r.user?(c(),k(i,{key:0,size:"small",label:"Log out",onClick:o[0]||(o[0]=m=>e.$emit("logout"))})):h("",!0),r.user?h("",!0):(c(),k(i,{key:1,size:"small",label:"Log in",onClick:o[1]||(o[1]=m=>e.$emit("login"))})),r.user?h("",!0):(c(),k(i,{key:2,primary:"",size:"small",label:"Sign up",onClick:o[2]||(o[2]=m=>e.$emit("createAccount"))}))])])])}var S=x(R,[["render",st]]);R.__docgenInfo={displayName:"MyHeader",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};var it={title:"Example/Header",component:S};const q=e=>({components:{MyHeader:S},setup(){return l({},e)},template:'<my-header :user="user" />'}),C=q.bind({});C.args={user:{}};const E=q.bind({});E.args={user:null};const lt=["LoggedIn","LoggedOut"];var ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:it,LoggedIn:C,LoggedOut:E,__namedExportsOrder:lt});const W={name:"MyPage",components:{MyHeader:S},props:{user:{type:Object}},emits:["login","logout","createAccount"]},pt=v('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path id="a" d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function dt(e,o,r,n,a,s){const i=I("my-header");return c(),u("article",null,[pe(i,{user:r.user,onLogin:o[0]||(o[0]=m=>e.$emit("login")),onLogout:o[1]||(o[1]=m=>e.$emit("logout")),onCreateAccount:o[2]||(o[2]=m=>e.$emit("createAccount"))},null,8,["user"]),pt])}var X=x(W,[["render",dt]]);W.__docgenInfo={displayName:"MyPage",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var mt={title:"Example/Page",component:X};const G=e=>({components:{MyPage:X},setup(){return{user:e.user}},template:'<my-page :user="user" />'}),K=G.bind({});K.args=l({},C.args);const J=G.bind({});J.args=l({},E.args);const ut=["LoggedIn","LoggedOut"];var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt,LoggedIn:K,LoggedOut:J,__namedExportsOrder:ut});const ft=[Te,ye,be,ve,ke,_e,xe,we,Se,Ce,Ee];ft.forEach(e=>{Object.keys(e).forEach(o=>{const r=e[o];switch(o){case"args":case"argTypes":return fe.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(n=>ge(n,!1));case"loaders":return r.forEach(n=>ue(n,!1));case"parameters":return j(l({},r),!1);case"argTypesEnhancers":return r.forEach(n=>me(n));case"argsEnhancers":return r.forEach(n=>de(n));case"globals":case"globalTypes":{const n={};return n[o]=r,j(n,!1)}default:return console.log(o+" was not supported :( !")}})});he(()=>[Fe,Ze,rt,ct,gt].filter(e=>e.default),{hot:!1},!1);
//# sourceMappingURL=iframe.cef8ba8e.js.map

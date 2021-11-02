var X=Object.defineProperty,W=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var z=(e,o,r)=>o in e?X(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,l=(e,o)=>{for(var r in o||(o={}))w.call(o,r)&&z(e,r,o[r]);if(m)for(var r of m(o))S.call(o,r)&&z(e,r,o[r]);return e},u=(e,o)=>W(e,G(o));var N=(e,o)=>{var r={};for(var a in e)w.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&m)for(var a of m(e))o.indexOf(a)<0&&S.call(e,a)&&(r[a]=e[a]);return r};import{c as t,A as K,M as J,r as Q,a as C,o as c,b as f,t as Y,n as Z,d as ee,e as E,f as M,g as y,h as b,i as L,j as te,k as $,l as oe,m as re,p as ae,q as ne,s as se,u as ie,v as le,w as ce,x as de,y as pe,z as me,B as ge,C as ue,D as fe,E as ye,F as be}from"./vendor.dedb5bec.js";const he=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};he();const ve={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ve}),_e="/vue3-compact-template/storybook/assets/code-brackets.9ef6443e.svg",xe="/vue3-compact-template/storybook/assets/colors.ac9401f3.svg",we="/vue3-compact-template/storybook/assets/comments.f15a6837.svg",Se="/vue3-compact-template/storybook/assets/direction.94a9917f.svg",ze="/vue3-compact-template/storybook/assets/flow.275142c6.svg",Ne="/vue3-compact-template/storybook/assets/plugin.57148314.svg",Ce="/vue3-compact-template/storybook/assets/repo.fb4ece47.svg",Ee="/vue3-compact-template/storybook/assets/stackalt.2ad81543.svg";const Me={},Le="wrapper";function O(r){var a=r,{components:e}=a,o=N(a,["components"]);return t(Le,u(l(l({},Me),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
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
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:Ne,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:Ee,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:xe,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:ze,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:Ce,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:Se,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:_e,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:we,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"src/stories/Introduction.stories.mdx")))}O.isMDXComponent=!0;const B=()=>{throw new Error("Docs-only story")};B.parameters={docsOnly:!0};const d={title:"Example/Introduction",includeStories:["__page"]},$e={};d.parameters=d.parameters||{};d.parameters.docs=u(l({},d.parameters.docs||{}),{page:()=>t(K,{mdxStoryNameToKey:$e,mdxComponentMeta:d},t(O,null))});var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:B,default:d});var h=(e,o)=>{for(const[r,a]of o)e[r]=a;return e};const A={name:"MyButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:o}){return e=Q(e),{classes:C(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:C(()=>({backgroundColor:e.backgroundColor})),onClick(){o("click")}}}};function Be(e,o,r,a,n,s){return c(),f("button",{type:"button",class:Z(a.classes),style:ee(a.style),onClick:o[0]||(o[0]=(...i)=>a.onClick&&a.onClick(...i))},Y(r.label),7)}var v=h(A,[["render",Be]]);A.__docgenInfo={displayName:"MyButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};var Ae={title:"Example/Button",component:v,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}};const g=e=>({components:{MyButton:v},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),j=g.bind({});j.args={primary:!0,label:"Button"};const T=g.bind({});T.args={label:"Button"};const I=g.bind({});I.args={size:"large",label:"Button"};const D=g.bind({});D.args={size:"small",label:"Button"};const je=["Primary","Secondary","Large","Small"];var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ae,Primary:j,Secondary:T,Large:I,Small:D,__namedExportsOrder:je});const P={name:"MyHeader",components:{MyButton:v},props:{user:{type:Object}},emits:["login","logout","createAccount"]},Ie={class:"wrapper"},De=L('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1);function Pe(e,o,r,a,n,s){const i=E("my-button");return c(),f("header",null,[M("div",Ie,[De,M("div",null,[r.user?(c(),y(i,{key:0,size:"small",label:"Log out",onClick:o[0]||(o[0]=p=>e.$emit("logout"))})):b("",!0),r.user?b("",!0):(c(),y(i,{key:1,size:"small",label:"Log in",onClick:o[1]||(o[1]=p=>e.$emit("login"))})),r.user?b("",!0):(c(),y(i,{key:2,primary:"",size:"small",label:"Sign up",onClick:o[2]||(o[2]=p=>e.$emit("createAccount"))}))])])])}var k=h(P,[["render",Pe]]);P.__docgenInfo={displayName:"MyHeader",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};var Ve={title:"Example/Header",component:k};const V=e=>({components:{MyHeader:k},setup(){return l({},e)},template:'<my-header :user="user" />'}),_=V.bind({});_.args={user:{}};const x=V.bind({});x.args={user:null};const He=["LoggedIn","LoggedOut"];var Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve,LoggedIn:_,LoggedOut:x,__namedExportsOrder:He});const H={name:"MyPage",components:{MyHeader:k},props:{user:{type:Object}},emits:["login","logout","createAccount"]},qe=L('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path id="a" d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function Ue(e,o,r,a,n,s){const i=E("my-header");return c(),f("article",null,[te(i,{user:r.user,onLogin:o[0]||(o[0]=p=>e.$emit("login")),onLogout:o[1]||(o[1]=p=>e.$emit("logout")),onCreateAccount:o[2]||(o[2]=p=>e.$emit("createAccount"))},null,8,["user"]),qe])}var F=h(H,[["render",Ue]]);H.__docgenInfo={displayName:"MyPage",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var Re={title:"Example/Page",component:F};const q=e=>({components:{MyPage:F},setup(){return{user:e.user}},template:'<my-page :user="user" />'}),U=q.bind({});U.args=l({},_.args);const R=q.bind({});R.args=l({},x.args);const Xe=["LoggedIn","LoggedOut"];var We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re,LoggedIn:U,LoggedOut:R,__namedExportsOrder:Xe});const Ge=[ke,le,ce,de,pe,me,ge,ue,fe,ye,be];Ge.forEach(e=>{Object.keys(e).forEach(o=>{const r=e[o];switch(o){case"args":case"argTypes":return se.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(a=>ne(a,!1));case"loaders":return r.forEach(a=>ae(a,!1));case"parameters":return $(l({},r),!1);case"argTypesEnhancers":return r.forEach(a=>re(a));case"argsEnhancers":return r.forEach(a=>oe(a));case"globals":case"globalTypes":{const a={};return a[o]=r,$(a,!1)}default:return console.log(o+" was not supported :( !")}})});ie(()=>[Oe,Te,Fe,We].filter(e=>e.default),{hot:!1},!1);
//# sourceMappingURL=iframe.ed3405f2.js.map

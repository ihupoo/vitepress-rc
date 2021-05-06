var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{N as s}from"./vendor.618e093b.js";function n(e){var{components:n}=e,o=((e,i)=>{var s={};for(var n in e)t.call(e,n)&&i.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&a)for(var n of a(e))i.indexOf(n)<0&&r.call(e,n)&&(s[n]=e[n]);return s})(e,["components"]);return s("wrapper",((e,s)=>{for(var n in s||(s={}))t.call(s,n)&&i(e,n,s[n]);if(a)for(var n of a(s))r.call(s,n)&&i(e,n,s[n]);return e})({components:n},o),s("div",{className:"markdown"},s("h1",{id:"what-is-vitepress",parentName:"div"},s("a",{href:"#what-is-vitepress","aria-hidden":"true",className:"header-anchor-a",parentName:"h1"}),"What is VitePress?"),s("div",{className:"remark-container remark-container-warning",parentName:"div"},s("div",{className:"remark-container-title",parentName:"div"},"WARNING"),s("div",{className:"remark-container-content",parentName:"div"},"VitePress is early WIP! Currently the focus is on making Vite stable and feature complete first. It is not recommended to use this for anything serious yet.")),s("p",{parentName:"div"},"VitePress is ",s("a",{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer",parentName:"p"},"VuePress"),"' little brother, built on top of ",s("a",{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer",parentName:"p"},"Vite"),"."),s("h2",{id:"motivation",parentName:"div"},s("a",{href:"#motivation","aria-hidden":"true",className:"header-anchor-a",parentName:"h2"}),"Motivation"),s("p",{parentName:"div"},"We love VuePress, but being built on top of Webpack, the time it takes to spin up the dev server for a simple doc site with a few pages is just becoming unbearable. Even HMR updates can take up to seconds to reflect in the browser!"),s("p",{parentName:"div"},"As a reference, the ",s("a",{href:"https://github.com/vuejs/composition-api-rfc",target:"_blank",rel:"noopener noreferrer",parentName:"p"},"Composition API RFC repo")," is just two pages, but it takes 4 seconds to spin up the server and almost 2 seconds for any edit to reflect in the browser."),s("p",{parentName:"div"},"Fundamentally, this is because VuePress is a Webpack app under the hood. Even with just two pages, it's a full on Webpack project (including all the theme source files) being compiled. It gets even worse when the project has many pages – every page must first be fully compiled before the server can even display anything!"),s("p",{parentName:"div"},"Incidentally, Vite solves these problems really well: nearly instant server start, an on-demand compilation that only compiles the page being served, and lightning-fast HMR. Plus, there are a few additional design issues I have noted in VuePress over time but never had the time to fix due to the amount of refactoring it would require."),s("p",{parentName:"div"},'Now, with Vite and Vue 3, it is time to rethink what a "Vue-powered static site generator" can really be.'),s("h2",{id:"improvements-over-vuepress",parentName:"div"},s("a",{href:"#improvements-over-vuepress","aria-hidden":"true",className:"header-anchor-a",parentName:"h2"}),"Improvements Over VuePress"),s("p",{parentName:"div"},"There're couple of things that are improved from VuePress...."),s("h3",{id:"it-uses-vue-3",parentName:"div"},s("a",{href:"#it-uses-vue-3","aria-hidden":"true",className:"header-anchor-a",parentName:"h3"}),"It Uses Vue 3"),s("p",{parentName:"div"},"Leverages Vue 3's improved template static analysis to stringify static content as much as possible. Static content is sent as string literals instead of JavaScript render function code – the JS payload is therefore ",s("em",{parentName:"p"},"much")," cheaper to parse, and hydration also becomes faster."),s("p",{parentName:"div"},"Note the optimization is applied while still allowing the user to freely mix Vue components inside markdown content – the compiler does the static/dynamic separation for you automatically and you never need to think about it."),s("h3",{id:"it-uses-vite-under-the-hood",parentName:"div"},s("a",{href:"#it-uses-vite-under-the-hood","aria-hidden":"true",className:"header-anchor-a",parentName:"h3"}),"It Uses Vite Under The Hood"),s("ul",{parentName:"div"},s("li",{parentName:"ul"},"Faster dev server start"),s("li",{parentName:"ul"},"Faster hot updates"),s("li",{parentName:"ul"},"Faster build (uses Rollup internally)")),s("h3",{id:"lighter-page-weight",parentName:"div"},s("a",{href:"#lighter-page-weight","aria-hidden":"true",className:"header-anchor-a",parentName:"h3"}),"Lighter Page Weight"),s("ul",{parentName:"div"},s("li",{parentName:"ul"},"Vue 3 tree-shaking + Rollup code splitting"),s("li",{parentName:"ul"},"Does not ship metadata for every page on every request. This decouples page weight from total number of pages. Only the current page's metadata is sent. Client side navigation fetches the new page's component and metadata together."),s("li",{parentName:"ul"},"Does not use ",s("inlineCode",{parentName:"li"},"vue-router")," because the need of VitePress is very simple and specific - a simple custom router (under 200 LOC) is used instead."),s("li",{parentName:"ul"},"(WIP) i18n locale data should also be fetched on demand.")),s("h2",{id:"other-differences",parentName:"div"},s("a",{href:"#other-differences","aria-hidden":"true",className:"header-anchor-a",parentName:"h2"}),"Other Differences"),s("p",{parentName:"div"},"VitePress is more opinionated and less configurable: VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots."),s("p",{parentName:"div"},"VitePress is future oriented: VitePress only targets browsers that support native ES module imports. It encourages the use of native JavaScript without transpilation, and CSS variables for theming."),s("h2",{id:"will-this-become-the-next-vuepress-in-the-future",parentName:"div"},s("a",{href:"#will-this-become-the-next-vuepress-in-the-future","aria-hidden":"true",className:"header-anchor-a",parentName:"h2"}),"Will This Become The Next VuePress in The Future?"),s("p",{parentName:"div"},"Probably not. It's currently under a different name so that we don't over commit to the compatibility with the current VuePress ecosystem (mostly themes and plugins). We'll see how close we can get without compromising the design goals listed above. But the overall idea is that VitePress will have a drastically more minimal theming API (preferring JavaScript APIs instead of file layout conventions) and likely no plugins (all customization is done in themes).")))}n.isMDXComponent=!0;const o='{"title":"What is VitePress?","description":"","relativePath":"index.md","headers":[{"level":1,"title":"What is VitePress?","slug":"what-is-vitepress"},{"level":2,"title":"Motivation","slug":"motivation"},{"level":2,"title":"Improvements Over VuePress","slug":"improvements-over-vuepress"},{"level":3,"title":"It Uses Vue 3","slug":"it-uses-vue-3"},{"level":3,"title":"It Uses Vite Under The Hood","slug":"it-uses-vite-under-the-hood"},{"level":3,"title":"Lighter Page Weight","slug":"lighter-page-weight"},{"level":2,"title":"Other Differences","slug":"other-differences"},{"level":2,"title":"Will This Become The Next VuePress in The Future?","slug":"will-this-become-the-next-vuepress-in-the-future"}],"frontmatter":{},"lastUpdated":1618363480128}';export default n;export{o as __pageData};

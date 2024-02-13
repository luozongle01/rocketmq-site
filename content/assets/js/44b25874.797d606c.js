"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7496],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>h});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(r),g=a,h=m["".concat(p,".").concat(g)]||m[g]||u[g]||c;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=r(45072),a=(r(11504),r(95788));const c={title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},o=void 0,l={permalink:"/release-notes/2020/04/02/release-notes-rocketmq-client-cpp-2.2.0",source:"@site/release-notes/2020-04-02-release-notes-rocketmq-client-cpp-2.2.0.md",title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",description:"* Source: rocketmq-client-cpp-2.2.0-source-release.tar.gz [PGP] [SHA512]",date:"2020-04-02T00:00:00.000Z",formattedDate:"April 2, 2020",tags:[{label:"RocketMQ_Client_CPP",permalink:"/release-notes/tags/rocket-mq-client-cpp"}],readingTime:.565,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.7.1",permalink:"/release-notes/2020/06/29/4.7.1"},nextItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.0.0",permalink:"/release-notes/2020/03/31/release-notes-rocketmq-client-go-2.0.0"}},p={authorsImageUrls:[]},i=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],s={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Download",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Source: ",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-source-release.tar.gz"},"rocketmq-client-cpp-2.2.0-source-release.tar.gz")," [",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-source-release.tar.gz.sha512"},"SHA512"),"]"),(0,a.yg)("li",{parentName:"ul"},"Binary: ",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-bin-release.tar.gz"},"rocketmq-client-cpp-2.2.0-bin-release.tar.gz")," [",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-bin-release.tar.gz.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.2.0/rocketmq-client-cpp-2.2.0-bin-release.tar.gz.sha512"},"SHA512"),"]"))),(0,a.yg)("p",null,"Below is a summary of the issues addressed in the version 2.2.0 release of RocketMQ Client CPP. For full documentation of the release, a guide to get started, please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-cpp"},"Quick Start"),"."),(0,a.yg)("h2",{id:"improvement"},"Improvement"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/273"},"ISSUE-273"),"] -  Use OpenSSL to add support for SSL communication with the server ."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/291"},"ISSUE-291"),"] -  Use separate factory for trace producer of push consumer.")),(0,a.yg)("h2",{id:"bug"},"Bug"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/284"},"ISSUE-284"),"] -  Fix the issue that sometime the log in rebalance will cause core dump."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/286"},"ISSUE-286"),"] -  Add null pointer check before push consumer shutdown.")))}u.isMDXComponent=!0}}]);
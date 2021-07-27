(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{1798:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),b=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var O=b.a.createContext({}),p=function(e){var t=b.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,O=o(e,["components","mdxType","originalType","parentName"]),u=p(n),i=r,j=u["".concat(l,".").concat(i)]||u[i]||d[i]||a;return n?b.a.createElement(j,c(c({ref:t},O),{},{components:n})):b.a.createElement(j,c({ref:t},O))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=i;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var O=2;O<a;O++)l[O]=n[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},557:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return u}));var r=n(3),b=n(7),a=(n(0),n(1798)),l=["components"],c={title:"OpenData",sidebar_label:"OpenData"},o={unversionedId:"components/open/open-data",id:"version-2.x/components/open/open-data",isDocsHomePage:!1,title:"OpenData",description:"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e",source:"@site/versioned_docs/version-2.x/components/open/open-data.md",slug:"/components/open/open-data",permalink:"/taro/docs/2.x/components/open/open-data",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/open/open-data.md",version:"2.x",sidebar_label:"OpenData",sidebar:"version-2.x/components",previous:{title:"OfficialAccount",permalink:"/taro/docs/2.x/components/open/official-account"},next:{title:"WebView",permalink:"/taro/docs/2.x/components/open/web-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"OpenDataProps",id:"opendataprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"type",id:"type",children:[]},{value:"lang",id:"lang",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],p={rightToc:O};function u(e){var t=e.components,n=Object(b.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"},"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<OpenDataProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"opendataprops"},"OpenDataProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"type"),Object(a.b)("td",null,Object(a.b)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u5f00\u653e\u6570\u636e\u7c7b\u578b")),Object(a.b)("tr",null,Object(a.b)("td",null,"openGid"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,'\u5f53 type="groupName" \u65f6\u751f\u6548, \u7fa4id')),Object(a.b)("tr",null,Object(a.b)("td",null,"lang"),Object(a.b)("td",null,Object(a.b)("code",null,'"en" | "zh_CN" | "zh_TW"')),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"en"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,'\u5f53 type="user*" \u65f6\u751f\u6548\uff0c\u4ee5\u54ea\u79cd\u8bed\u8a00\u5c55\u793a userInfo')),Object(a.b)("tr",null,Object(a.b)("td",null,"defaultText"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u6587\u6848")),Object(a.b)("tr",null,Object(a.b)("td",null,"defaultAvatar"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u7528\u6237\u5934\u50cf\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u56fe\u7247\uff0c\u652f\u6301\u76f8\u5bf9\u8def\u5f84\u548c\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),Object(a.b)("tr",null,Object(a.b)("td",null,"onError"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<any>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u7fa4\u540d\u79f0\u6216\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a\u65f6\u89e6\u53d1")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenDataProps.type"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenDataProps.openGid"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenDataProps.lang"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenDataProps.defaultText"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenDataProps.defaultAvatar"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenDataProps.onError"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})))),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"type \u7684\u5408\u6cd5\u503c"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"groupName"),Object(a.b)("td",null,"\u62c9\u53d6\u7fa4\u540d\u79f0")),Object(a.b)("tr",null,Object(a.b)("td",null,"userNickName"),Object(a.b)("td",null,"\u7528\u6237\u6635\u79f0")),Object(a.b)("tr",null,Object(a.b)("td",null,"userAvatarUrl"),Object(a.b)("td",null,"\u7528\u6237\u5934\u50cf")),Object(a.b)("tr",null,Object(a.b)("td",null,"userGender"),Object(a.b)("td",null,"\u7528\u6237\u6027\u522b")),Object(a.b)("tr",null,Object(a.b)("td",null,"userCity"),Object(a.b)("td",null,"\u7528\u6237\u6240\u5728\u57ce\u5e02")),Object(a.b)("tr",null,Object(a.b)("td",null,"userProvince"),Object(a.b)("td",null,"\u7528\u6237\u6240\u5728\u7701\u4efd")),Object(a.b)("tr",null,Object(a.b)("td",null,"userCountry"),Object(a.b)("td",null,"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),Object(a.b)("tr",null,Object(a.b)("td",null,"userLanguage"),Object(a.b)("td",null,"\u7528\u6237\u7684\u8bed\u8a00")))),Object(a.b)("h3",{id:"lang"},"lang"),Object(a.b)("p",null,"lang \u7684\u5408\u6cd5\u503c"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"en"),Object(a.b)("td",null,"\u82f1\u6587")),Object(a.b)("tr",null,Object(a.b)("td",null,"zh_CN"),Object(a.b)("td",null,"\u7b80\u4f53\u4e2d\u6587")),Object(a.b)("tr",null,Object(a.b)("td",null,"zh_TW"),Object(a.b)("td",null,"\u7e41\u4f53\u4e2d\u6587")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"OpenData"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);
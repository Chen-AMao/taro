(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1798:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var b=n(0),l=n.n(b);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,b)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,b,l=function(t,e){if(null==t)return{};var n,b,l={},r=Object.keys(t);for(b=0;b<r.length;b++)n=r[b],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(b=0;b<r.length;b++)n=r[b],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var O=l.a.createContext({}),j=function(t){var e=l.a.useContext(O),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=j(t.components);return l.a.createElement(O.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},o=l.a.forwardRef((function(t,e){var n=t.components,b=t.mdxType,r=t.originalType,c=t.parentName,O=d(t,["components","mdxType","originalType","parentName"]),u=j(n),o=b,p=u["".concat(c,".").concat(o)]||u[o]||i[o]||r;return n?l.a.createElement(p,a(a({ref:e},O),{},{components:n})):l.a.createElement(p,a({ref:e},O))}));function p(t,e){var n=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var r=n.length,c=new Array(r);c[0]=o;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a.mdxType="string"==typeof t?t:b,c[1]=a;for(var O=2;O<r;O++)c[O]=n[O];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},751:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return d})),n.d(e,"rightToc",(function(){return O})),n.d(e,"default",(function(){return u}));var b=n(3),l=n(7),r=(n(0),n(1798)),c=["components"],a={title:"Input",sidebar_label:"Input"},d={unversionedId:"components/forms/input",id:"version-2.x/components/forms/input",isDocsHomePage:!1,title:"Input",description:"\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/versioned_docs/version-2.x/components/forms/input.md",slug:"/components/forms/input",permalink:"/taro/docs/2.x/components/forms/input",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/input.md",version:"2.x",sidebar_label:"Input",sidebar:"version-2.x/components",previous:{title:"Form",permalink:"/taro/docs/2.x/components/forms/form"},next:{title:"Label",permalink:"/taro/docs/2.x/components/forms/label"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"InputProps",id:"inputprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"inputEventDetail",id:"inputeventdetail",children:[]},{value:"inputForceEventDetail",id:"inputforceeventdetail",children:[]},{value:"inputValueEventDetail",id:"inputvalueeventdetail",children:[]},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function u(t){var e=t.components,n=Object(l.a)(t,c);return Object(r.b)("wrapper",Object(b.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/input.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<InputProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n\n  render () {\n    return (\n        <View className='example-body'>\n          <Text>\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 input</Text>\n            <Input type='text' placeholder='\u5c06\u4f1a\u83b7\u53d6\u7126\u70b9' focus/>\n            <Text>\u63a7\u5236\u6700\u5927\u8f93\u5165\u957f\u5ea6\u7684 input</Text>\n           <Input type='text' placeholder='\u6700\u5927\u8f93\u5165\u957f\u5ea6\u4e3a 10' maxlength='10'/>\n            <Text>\u6570\u5b57\u8f93\u5165\u7684 input</Text>\n            <Input type='number' placeholder='\u8fd9\u662f\u4e00\u4e2a\u6570\u5b57\u8f93\u5165\u6846'/>\n            <Text>\u5bc6\u7801\u8f93\u5165\u7684 input</Text>\n            <Input type='password' password placeholder='\u8fd9\u662f\u4e00\u4e2a\u5bc6\u7801\u8f93\u5165\u6846'/>\n            <Text>\u5e26\u5c0f\u6570\u70b9\u7684 input</Text>\n            <Input type='digit' placeholder='\u5e26\u5c0f\u6570\u70b9\u7684\u6570\u5b57\u952e\u76d8'/>\n            <Text>\u8eab\u4efd\u8bc1\u8f93\u5165\u7684 input</Text>\n            <Input type='idcard' placeholder='\u8eab\u4efd\u8bc1\u8f93\u5165\u952e\u76d8'/>\n            <Text>\u63a7\u5236\u5360\u4f4d\u7b26\u989c\u8272\u7684 input</Text>\n            <Input type='text' placeholder='\u5360\u4f4d\u7b26\u5b57\u4f53\u662f\u7ea2\u8272\u7684' placeholderStyle='color:red'/>\n        </View>\n    )\n  }\n}\n")),Object(r.b)("h2",{id:"inputprops"},"InputProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u7684\u521d\u59cb\u5185\u5bb9")),Object(r.b)("tr",null,Object(r.b)("td",null,"type"),Object(r.b)("td",null,Object(r.b)("code",null,'"number" | "text" | "idcard" | "digit"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"text"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"input \u7684\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"password"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u662f\u5bc6\u7801\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"placeholder"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),Object(r.b)("tr",null,Object(r.b)("td",null,"placeholderStyle"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"placeholderClass"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"input-placeholder"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),Object(r.b)("tr",null,Object(r.b)("td",null,"disabled"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"maxlength"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"140")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursorSpacing"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"0")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 input \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursor-spacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),Object(r.b)("tr",null,Object(r.b)("td",null,"autoFocus"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"(\u5373\u5c06\u5e9f\u5f03\uff0c\u8bf7\u76f4\u63a5\u4f7f\u7528 focus )\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),Object(r.b)("tr",null,Object(r.b)("td",null,"focus"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u83b7\u53d6\u7126\u70b9")),Object(r.b)("tr",null,Object(r.b)("td",null,"confirmType"),Object(r.b)("td",null,Object(r.b)("code",null,'"send" | "search" | "next" | "go" | "done"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"done")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8bbe\u7f6e\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u7684\u6587\u5b57")),Object(r.b)("tr",null,Object(r.b)("td",null,"confirmHold"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u70b9\u51fb\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u65f6\u662f\u5426\u4fdd\u6301\u952e\u76d8\u4e0d\u6536\u8d77")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursor"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6307\u5b9afocus\u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),Object(r.b)("tr",null,Object(r.b)("td",null,"selectionStart"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"-1")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0eselection-end\u642d\u914d\u4f7f\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"selectionEnd"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"-1")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0eselection-start\u642d\u914d\u4f7f\u7528")),Object(r.b)("tr",null,Object(r.b)("td",null,"adjustPosition"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),Object(r.b)("tr",null,Object(r.b)("td",null,"holdKeyboard"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),Object(r.b)("tr",null,Object(r.b)("td",null,"onInput"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<inputEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1input\u4e8b\u4ef6\uff0cevent.detail = ","{value, cursor, keyCode}","\uff0c\u5904\u7406\u51fd\u6570\u53ef\u4ee5\u76f4\u63a5 return \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5c06\u66ff\u6362\u8f93\u5165\u6846\u7684\u5185\u5bb9\u3002")),Object(r.b)("tr",null,Object(r.b)("td",null,"onFocus"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<inputForceEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1\uff0cevent.detail = ","{ value, height }","\uff0cheight \u4e3a\u952e\u76d8\u9ad8\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"onBlur"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",Object(r.b)("br",null),Object(r.b)("br",null),"event.detail = ","{value: value}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onConfirm"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u70b9\u51fb\u5b8c\u6210\u6309\u94ae\u65f6\u89e6\u53d1",Object(r.b)("br",null),Object(r.b)("br",null),"event.detail = ","{value: value}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onKeyboardHeightChange"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6",Object(r.b)("br",null),Object(r.b)("br",null),"event.detail = ","{height: height, duration: duration}")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.value"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.type"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u90e8\u5206\u652f\u6301)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.password"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.placeholder"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.placeholderStyle"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.placeholderClass"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.disabled"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.maxlength"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.cursorSpacing"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.autoFocus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.focus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.confirmType"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.confirmHold"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.cursor"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.selectionStart"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.selectionEnd"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.adjustPosition"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.holdKeyboard"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.onInput"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.onFocus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.onBlur"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.onConfirm"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"(\u501f\u7528",Object(r.b)("a",{parentName:"td",href:"/taro/docs/2.x/components/forms/form"},"Form \u7ec4\u4ef6"),"\u7684",Object(r.b)("inlineCode",{parentName:"td"},"onSubmit"),"\u4e8b\u4ef6\u6765\u66ff\u4ee3)"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"InputProps.onKeyboardHeightChange"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("h3",{id:"inputeventdetail"},"inputEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")),Object(r.b)("tr",null,Object(r.b)("td",null,"cursor"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u5149\u6807\u4f4d\u7f6e")),Object(r.b)("tr",null,Object(r.b)("td",null,"keyCode"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u952e\u503c")))),Object(r.b)("h3",{id:"inputforceeventdetail"},"inputForceEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")),Object(r.b)("tr",null,Object(r.b)("td",null,"height"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")))),Object(r.b)("h3",{id:"inputvalueeventdetail"},"inputValueEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"value"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8f93\u5165\u503c")))),Object(r.b)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"height"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"Input"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);
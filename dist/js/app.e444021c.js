(function(e){function t(t){for(var r,c,l=t[0],a=t[1],s=t[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"209a":function(e,t,n){"use strict";n("7ba2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["g"])("Home");function i(e,t){var n=Object(r["y"])("router-link"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("nav",null,[Object(r["h"])(n,{to:"/"},{default:Object(r["E"])((function(){return[o]})),_:1})]),Object(r["h"])(i)],64)}n("209a");var c=n("6b0d"),l=n.n(c);const a={},s=l()(a,[["render",i]]);var u=s,f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("6c02"),b=function(e){return Object(r["u"])("data-v-65d57569"),e=e(),Object(r["s"])(),e},p={class:"home"},O=b((function(){return Object(r["f"])("h1",null,"To do",-1)})),v=["title"],j=["onClick"],h=b((function(){return Object(r["f"])("label",{for:"title"},"Title",-1)})),g={type:"text",placeholder:"Title",ref:"title",name:"title"},m=b((function(){return Object(r["f"])("label",{for:"detail"},"Detail (if needed)",-1)})),y=b((function(){return Object(r["f"])("textarea",{placeholder:"Detail",form:"add",name:"detail"},null,-1)})),w=b((function(){return Object(r["f"])("button",{type:"submit"},[Object(r["f"])("span",{id:"create",class:"material-icons"},"")],-1)}));function k(e,t,n,o,i,c){return Object(r["r"])(),Object(r["e"])("div",p,[O,Object(r["f"])("table",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(i.list,(function(e){return Object(r["r"])(),Object(r["e"])("tr",{key:e.id},[Object(r["f"])("td",{title:e.detail},Object(r["A"])(e.title),9,v),Object(r["f"])("td",null,[Object(r["f"])("span",{onClick:function(t){return c.remove(e)},class:"material-icons"},"",8,j)])])})),128))]),Object(r["f"])("span",{style:Object(r["n"])(i.visible?"transform: rotate(-45deg);":""),onClick:t[0]||(t[0]=function(){return c.toggle&&c.toggle.apply(c,arguments)}),id:"create",class:"material-icons"},"",4),Object(r["h"])(r["b"],{name:"resize"},{default:Object(r["E"])((function(){return[Object(r["F"])(Object(r["f"])("form",{onSubmit:t[1]||(t[1]=Object(r["G"])((function(){return c.add&&c.add.apply(c,arguments)}),["prevent"])),id:"add",ref:"add"},[h,Object(r["f"])("input",g,null,512),m,y,w],544),[[r["C"],i.visible]])]})),_:1})])}n("a434");var S={methods:{toggle:function(){var e=this;this.visible=!this.visible,setTimeout((function(){e.$refs.title.focus()}),1)},remove:function(e){this.list.splice(this.list.indexOf(e),1),this.save()},add:function(e){var t=e.target;this.list.unshift({id:this.list[this.list.length-1].id+1,title:t.title.value,detail:t.detail.value}),this.$refs.add.reset(),this.visible=!1,this.save()},save:function(){var e=JSON.stringify(this.list);localStorage.setItem("list",e)}},data:function(){return{visible:!1,list:[{id:1,title:"An example note",detail:"Its detail"}]}},mounted:function(){if(localStorage.getItem("list"))try{this.list=JSON.parse(localStorage.getItem("list"))}catch(e){localStorage.removeItem("list")}},name:"Home",components:{}};n("e2ad");const x=l()(S,[["render",k],["__scopeId","data-v-65d57569"]]);var _=x,P=[{path:"/",name:"Home",component:_}],I=Object(d["a"])({history:Object(d["b"])("/"),routes:P}),T=I;Object(r["d"])(u).use(T).mount("#app")},"7ba2":function(e,t,n){},e2ad:function(e,t,n){"use strict";n("fd4d")},fd4d:function(e,t,n){}});
//# sourceMappingURL=app.e444021c.js.map
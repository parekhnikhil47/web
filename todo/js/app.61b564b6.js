(function(t){function e(e){for(var n,l,d=e[0],a=e[1],s=e[2],c=0,p=[];c<d.length;c++)l=d[c],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,d=1;d<o.length;d++){var a=o[d];0!==i[a]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},i={app:0},r=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],a=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var u=a;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Todo")},r=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-main"},[o("p",{staticClass:"heading"},[t._v("Todo")]),o("div",{staticClass:"inputdiv"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"todo-input",attrs:{type:"text",placeholder:"Enter your Data"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),o("div",{staticClass:"list"},t._l(t.todos,(function(e,n){return o("div",{key:e,staticClass:"todo-item"},[o("div",{staticClass:"todo-item-left"},[e.editing?o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"}],staticClass:"todo-item-text todo-item-edit",attrs:{type:"text",name:"",id:""},domProps:{value:e.title},on:{blur:t.doneEdit,keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.doneEdit(e)},input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}}):o("div",{staticClass:"todo-item-text",on:{dblclick:function(o){return t.editTodo(e)}}},[t._v(" "+t._s(e.title)+" ")])]),o("button",{staticClass:"remove-item",on:{click:function(e){return t.removeTodo(n)}}},[t._v(" × ")])])})),0),o("div",{staticClass:"footer"},[o("p",{staticClass:"footertext"},[t._v("You have "+t._s(t.todos.length)+" tasks.")]),o("button",{staticClass:"clear-all-button",on:{click:function(e){return t.clearAll()}}},[t._v("Clear all")])])])},d=[],a=(o("498a"),o("a434"),{name:"todo-list",data:function(){return{newTodo:"",idforTodo:3,todos:[{id:1,title:"C++",completed:!1,editing:!1},{id:2,title:"HTML",completed:!1,editing:!1}]}},methods:{addTodo:function(){0!=this.newTodo.trim().length&&(this.todos.push({id:this.idforTodo,title:this.newTodo,completed:!1}),this.newTodo="",this.idforTodo++)},removeTodo:function(t){this.todos.splice(t,1)},editTodo:function(t){t.editing=!0},doneEdit:function(t){t.editing=!1},clearAll:function(){this.todos=[]}}}),s=a,u=(o("b7cf"),o("2877")),c=Object(u["a"])(s,l,d,!1,null,null,null),p=c.exports,f={name:"App",components:{Todo:p}},v=f,m=Object(u["a"])(v,i,r,!1,null,null,null),h=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},6446:function(t,e,o){},b7cf:function(t,e,o){"use strict";o("6446")}});
//# sourceMappingURL=app.61b564b6.js.map
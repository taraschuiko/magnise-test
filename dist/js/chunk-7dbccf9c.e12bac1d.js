(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dbccf9c"],{"077e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("h2",[t._v("Groups List")]),i("AddGroup"),t._l(t.groups,function(t){return i("GroupsListItem",{key:t.id,attrs:{group:t}})})],2)},o=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"AddGroup"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addGroup(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("button",{on:{click:t.addGroup}},[t._v("Add")])])},r=[],s={name:"AddGroup",data:function(){return{title:""}},methods:{addGroup:function(){this.title&&(this.$store.dispatch("addGroup",{title:this.title}),this.title="")}}},l=s,d=(i("8d65"),i("2877")),p=Object(d["a"])(l,u,r,!1,null,"1234418c",null),c=p.exports,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list__item"},[i("p",[t._v("Title: "+t._s(t.group.title))]),i("router-link",{attrs:{to:"/group-schedule/"+t.group.id}},[i("button",[t._v("Details")])]),i("button",{on:{click:t.toggleEditing}},[t._v("Edit")]),i("button",{on:{click:t.deleteGroup}},[t._v("Delete")]),t.isEditing?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateGroup(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("button",{on:{click:t.updateGroup}},[t._v("Update")])]):t._e()],1)},h=[],g={name:"GroupsListItem",data:function(){return{isEditing:!1,title:this.group.title}},props:{group:Object},methods:{toggleEditing:function(){this.isEditing=!this.isEditing},updateGroup:function(){this.title&&this.$store.dispatch("updateGroup",{id:this.group.id,group:{title:this.title}}),this.isEditing=!1},deleteGroup:function(){this.$store.dispatch("deleteGroup",this.group.id)}}},f=g,v=(i("1f7e"),Object(d["a"])(f,a,h,!1,null,"0f2ce75b",null)),m=v.exports,G={name:"GroupsList",components:{AddGroup:c,GroupsListItem:m},computed:{groups:function(){return this.$store.getters.getGroups}},created:function(){0===this.groups.length&&this.$store.dispatch("loadGroups")}},_=G,k=Object(d["a"])(_,n,o,!1,null,null,null);e["default"]=k.exports},"1f7e":function(t,e,i){"use strict";var n=i("4e8c"),o=i.n(n);o.a},"4e8c":function(t,e,i){},5305:function(t,e,i){},"8d65":function(t,e,i){"use strict";var n=i("5305"),o=i.n(n);o.a}}]);
//# sourceMappingURL=chunk-7dbccf9c.e12bac1d.js.map
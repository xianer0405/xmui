webpackJsonp([3],{NHnr:function(n,t,e){"use strict";function o(n){e("ech5")}function a(n){e("jF3a")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("qRXP"),l={name:"app"},r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"aside"}},[e("router-view")],1),n._v(" "),e("div",{attrs:{id:"demo-wrap"}})])},c=[],s={render:r,staticRenderFns:c},d=s,u=e("/Xao"),p=o,f=u(l,d,!1,p,null,null),m=f.exports,h=e("zO6J");i.a.use(h.a);var _=new h.a({routes:[{path:"/",name:"home",component:function(n){e.e(0).then(function(){var t=[e("26dS")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/buttons",name:"buttons",component:function(n){e.e(1).then(function(){var t=[e("MtPQ")];n.apply(null,t)}.bind(this)).catch(e.oe)}}]}),b=e("4YfN"),v=e.n(b),g={name:"XMButton",props:{type:{type:String,default:"default"},long:Boolean,loading:{type:Boolean,default:!1},bgColor:{type:String,default:""},borderColor:{type:String,default:""},icon:{type:String,default:""},color:{type:String,default:""},disabled:Boolean,plain:Boolean,round:Boolean},methods:{handleClick:function(n){this.disabled||this.$emit("click",n)}},computed:{iconClass:function(){if(""!==this.icon)return"xm__hasIconBtn"}}},y=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("button",{staticClass:"xm__btn",class:["xm__btn--"+n.type,{"is-plain":n.plain,"is-round":n.round,"is-long":n.long},n.iconClass],style:{backgroundColor:n.bgColor,color:n.color,"border-color":n.borderColor},attrs:{disabled:n.disabled},on:{click:n.handleClick}},[n.icon?e("i",{class:n.icon}):n._e(),n._v(" "),n.loading&&!n.icon?e("i",{staticClass:"xm__icon--loading"}):n._e(),n._v(" "),n._t("default")],2)},w=[],C={render:y,staticRenderFns:w},B=C,k=e("/Xao"),x=a,S=k(g,B,!1,x,"data-v-5057a300",null),F=S.exports,X=F,j=[X],M=function n(t){n.installed||j.map(function(n){return t.component(n.name,n)})};"undefined"!=typeof window&&window.Vue&&M(window.Vue);var N=v()({install:M},j),P=N;i.a.use(P),i.a.config.productionTip=!1,new i.a({el:"#app",router:_,template:"<App/>",components:{App:m}})},ech5:function(n,t){},jF3a:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.88a1550e9937a89da82e.js.map
(window["webpackJsonp_blog"]=window["webpackJsonp_blog"]||[]).push([["chunk-e78248cc"],{"2b28":function(t,e,n){"use strict";n("68ef"),n("7c7f")},"48f4":function(t,e,n){"use strict";function i(t,e){var n=e.to,i=e.url,r=e.replace;if(n&&t){var a=t[r?"replace":"push"](n);a&&a.catch&&a.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else i&&(r?location.replace(i):location.href=i)}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var r={url:String,replace:Boolean,to:[String,Object]}},"5a38":function(t,e,n){"use strict";var i=n("9a83"),r=n.n(i);r.a},"5b39":function(t,e,n){t.exports=n.p+"static/img/banner-3.26efa061.jpg"},"75ad":function(t,e,n){},"7c7f":function(t,e,n){},"857a":function(t,e,n){var i=n("1d80"),r=/"/g;t.exports=function(t,e,n,a){var o=String(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),c+">"+o+"</"+e+">"}},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var i=n("2b0e");function r(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.children&&n(t.children)}))}return n(t),e}function a(t,e){var n,a;void 0===e&&(e={});var o=e.indexKey||"index";return i["a"].extend({inject:(n={},n[t]={default:null},n),computed:(a={parent:function(){return this.disableBindRelation?null:this[t]}},a[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},a),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=r(this.parent.slots());t.sort((function(t,n){return e.indexOf(t.$vnode)-e.indexOf(n.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},9911:function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("link")},{link:function(t){return r(this,"a","href",t)}})},"9a83":function(t,e,n){},"9a8a":function(t,e,n){"use strict";var i=n("b47a"),r=n.n(i);r.a},"9ed2":function(t,e,n){"use strict";var i=n("2638"),r=n.n(i),a=n("d282"),o=n("ba31"),c=Object(a["a"])("divider"),s=c[0],u=c[1];function l(t,e,n,i){var a;return t("div",r()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:u((a={dashed:e.dashed,hairline:e.hairline},a["content-"+e.contentPosition]=n.default,a))},Object(o["b"])(i,!0)]),[n.default&&n.default()])}l.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e["a"]=s(l)},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b1d2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return o}));var i="van-hairline",r=i+"--top",a=i+"--surround",o=i+"--top-bottom"},b47a:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home tc"},[n("banner-slide",{attrs:{"auto-roll":!0,images:t.banners}}),n("van-divider",{staticClass:"home-diveider"},[n("span",{staticClass:"c-warning"},[t._v("快捷工具")])]),n("van-grid",{staticClass:"home-grid"},t._l(t.grids,(function(e){return n("van-grid-item",t._b({key:e.text,nativeOn:{click:function(n){return t._onClick(e)}}},"van-grid-item",e,!1))})),1)],1)},a=[],o=(n("b0c0"),n("9911"),n("ade3")),c=(n("2b28"),n("9ed2")),s=(n("68ef"),n("9d70"),n("3743"),n("e15d"),n("c31d")),u=n("d282"),l=n("ea8e"),d=n("a142"),f=n("b1d2"),h=n("48f4"),p=n("9884"),b=n("6f2f"),v=n("ad06"),g=Object(u["a"])("grid-item"),m=g[0],x=g[1],y=m({mixins:[Object(p["a"])("vanGrid")],props:Object(s["a"])({},h["b"],{dot:Boolean,text:String,icon:String,iconPrefix:String,info:[Number,String],badge:[Number,String]}),computed:{style:function(){var t=this.parent,e=t.square,n=t.gutter,i=t.columnNum,r=100/i+"%",a={flexBasis:r};if(e)a.paddingTop=r;else if(n){var o=Object(l["a"])(n);a.paddingRight=o,this.index>=i&&(a.marginTop=o)}return a},contentStyle:function(){var t=this.parent,e=t.square,n=t.gutter;if(e&&n){var i=Object(l["a"])(n);return{right:i,bottom:i,height:"auto"}}}},methods:{onClick:function(t){this.$emit("click",t),Object(h["a"])(this.$router,this)},genIcon:function(){var t=this.$createElement,e=this.slots("icon"),n=Object(d["b"])(this.badge)?this.badge:this.info;return e?t("div",{class:x("icon-wrapper")},[e,t(b["a"],{attrs:{dot:this.dot,info:n}})]):this.icon?t(v["a"],{attrs:{name:this.icon,dot:this.dot,info:n,size:this.parent.iconSize,classPrefix:this.iconPrefix},class:x("icon")}):void 0},getText:function(){var t=this.$createElement,e=this.slots("text");return e||(this.text?t("span",{class:x("text")},[this.text]):void 0)},genContent:function(){var t=this.slots();return t||[this.genIcon(),this.getText()]}},render:function(){var t,e=arguments[0],n=this.parent,i=n.center,r=n.border,a=n.square,o=n.gutter,c=n.clickable;return e("div",{class:[x({square:a})],style:this.style},[e("div",{style:this.contentStyle,attrs:{role:c?"button":null,tabindex:c?0:null},class:[x("content",{center:i,square:a,clickable:c,surround:r&&o}),(t={},t[f["a"]]=r,t)],on:{click:this.onClick}},[this.genContent()])])}}),j=(n("75ad"),Object(u["a"])("grid")),O=j[0],_=j[1],k=O({mixins:[Object(p["b"])("vanGrid")],props:{square:Boolean,gutter:[Number,String],iconSize:[Number,String],clickable:Boolean,columnNum:{type:[Number,String],default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},computed:{style:function(){var t=this.gutter;if(t)return{paddingLeft:Object(l["a"])(t)}}},render:function(){var t,e=arguments[0];return e("div",{style:this.style,class:[_(),(t={},t[f["c"]]=this.border&&!this.gutter,t)]},[this.slots()])}}),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("ul",{staticClass:"banner-slide"},t._l(t.images,(function(e,i){return n("li",{key:e.pic,class:[t.move[i]]},[n("v-touch",{on:{swipeleft:t._nextPic,swiperight:t._prePic,tap:function(n){return t._onTap(e.url)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.pic,expression:"item.pic"}],on:{click:function(e){return t._target(i)}}})])],1)})),0),n("div",{staticClass:"banner-button"},t._l(t.images,(function(e,i){return n("em",{key:e.pic,class:[t.move[i]],on:{click:function(e){return t._target(i)}}})})),0)])},C=[],w=(n("99af"),{name:"BannerSlide",props:{images:{require:!0,type:Array,validator:function(t){return t.length>=3}},interval:{default:5e3},autoRoll:{default:!1},direction:{default:"left"}},data:function(){return{move:["b-left","b-center","b-right"]}},created:function(){for(var t=3;t<this.images.length;t++)this.move[t]="b-wait";this.autoRoll&&("left"===this.direction?setInterval(this._nextPic,this.interval):setInterval(this._prePic,this.interval))},methods:{_nextPic:function(t){var e=this.move.pop();this.move.unshift(e)},_prePic:function(t){var e=this.move.shift();this.move.push(e)},_target:function(t){for(var e=this.images.length,n=0;n<e;n++)this.move[n]="b-wait";this.move[t]="b-center",this.move[t+1<e?t+1:0]="b-right",this.move[t-1===-1?e-1:t-1]="b-left",this.move=this.move.concat()},_onTap:function(t){}}}),B=w,P=(n("5a38"),n("2877")),$=Object(P["a"])(B,S,C,!1,null,"9c87a354",null),q=$.exports,N={name:"Home",components:(i={},Object(o["a"])(i,k.name,k),Object(o["a"])(i,y.name,y),Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,q.name,q),i),data:function(){return{banners:[{desc:"",url:"",pic:n("eeea")},{desc:"",url:"",pic:n("e78d")},{desc:"",url:"",pic:n("5b39")},{desc:"",url:"",pic:n("f6cc")}],grids:[{icon:"gem-o",text:"珍藏",dot:!1},{icon:"fire-o",text:"热门",link:{name:"Fire",query:{index:"fire"}},dot:!1},{icon:"service-o",text:"服务",dot:!1},{icon:"user-o",text:"关于",link:{name:"About"},dot:!1}]}},created:function(){},methods:{_onClick:function(t){var e=t.link,n=t.text;e?this.$router.push(e):this.$toast.fail("《".concat(n,"》功能还未开发"))}}},R=N,T=(n("9a8a"),Object(P["a"])(R,r,a,!1,null,"2bd3d191",null));e["default"]=T.exports},e15d:function(t,e,n){},e78d:function(t,e,n){t.exports=n.p+"static/img/banner-2.e80e468c.jpg"},eeea:function(t,e,n){t.exports=n.p+"static/img/banner-1.3104ea9f.jpg"},f6cc:function(t,e,n){t.exports=n.p+"static/img/banner-4.6dc0cf93.jpg"}}]);
//# sourceMappingURL=chunk-e78248cc.0e13d99c.js.map
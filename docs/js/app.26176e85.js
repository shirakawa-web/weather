(function(t){function a(a){for(var s,o,i=a[0],c=a[1],l=a[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"09ef":function(t,a,e){t.exports=e.p+"img/kanazawa.99001ade.png"},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},4785:function(t,a,e){t.exports=e.p+"img/fukuoka.2fca9f8f.png"},"4ede":function(t,a,e){t.exports=e.p+"img/osaka.65cab69e.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e623"),e("e379"),e("5dc8"),e("37e1");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Header"),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1),e("Footer")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-navigation-drawer",{attrs:{"expand-on-hover":"",clipped:"",app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v("Application")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(a){return e("v-list-item",{key:a.title,attrs:{to:a.path}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.title))])],1)],1)})),1)],1),e("v-app-bar",{attrs:{color:"#f0ffff",flat:"","clipped-left":"","hide-on-scroll":"",app:""}},[e("v-app-bar-nav-icon",{on:{click:function(a){t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Weather Map")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{text:"",to:"/signin"}},[t._v("Login")]),e("v-btn",{attrs:{text:""},on:{click:t.signOut}},[t._v("Logout")])],1)],1)],1)},i=[],c=e("8aa5"),l=e.n(c),d={name:"App",data:function(){return{drawer:!1,items:[{title:"about",path:"/about",icon:"mdi-home-variant"},{title:"weather",path:"/",icon:"mdi-weather-pouring"},{title:"chart",path:"/chart",icon:"mdi-ab-testing"},{title:"only",path:"/only",icon:"mdi-account-lock"}]}},methods:{signOut:function(){var t=this;l.a.auth().signOut().then((function(){t.$router.push("/")}))}}},u=d,m=e("2877"),f=e("6544"),p=e.n(f),b=e("40dc"),j=e("5bc1"),h=e("8336"),v=e("ce7e"),g=e("132d"),w=e("8860"),x=e("da13"),k=e("5d23"),y=e("34c3"),_=e("f774"),C=e("2fa4"),S=e("2a7f"),T=Object(m["a"])(u,o,i,!1,null,null,null),z=T.exports;p()(T,{VAppBar:b["a"],VAppBarNavIcon:j["a"],VBtn:h["a"],VDivider:v["a"],VIcon:g["a"],VList:w["a"],VListItem:x["a"],VListItemContent:k["a"],VListItemIcon:y["a"],VListItemTitle:k["b"],VNavigationDrawer:_["a"],VSpacer:C["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]});var D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-footer",{attrs:{color:"primary",dark:""}},[e("v-col",{staticClass:"text-center"},[t._v(" "+t._s(t.YMT)+" ")])],1)],1)},V=[],O={data:function(){return{YMT:null}},created:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1,s=t.getDate();this.YMT=a+"/"+e+"/"+s}},M=O,E=e("62ad"),L=e("553a"),B=Object(m["a"])(M,D,V,!1,null,null,null),A=B.exports;p()(B,{VCol:E["a"],VFooter:L["a"]});var N={components:{Header:z,Footer:A}},I=N,P=(e("5c0b"),e("7496")),$=e("a523"),Y=e("a75b"),F=Object(m["a"])(I,n,r,!1,null,null,null),U=F.exports;p()(F,{VApp:P["a"],VContainer:$["a"],VContent:Y["a"]});e("45fc");var q=e("8c4f"),H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[e("h1",[t._v("Sign Up")])]),e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[e("form",[e("v-layout",{attrs:{column:""}},[e("v-flex",[e("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",placeholder:"Username",required:""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),e("v-flex",[e("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",placeholder:"Password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("v-flex",{staticClass:"text-xs-center",attrs:{"mt-5":""}},[e("v-btn",{attrs:{color:"primary"},on:{click:t.signUp}},[t._v("Sign Up")])],1)],1)],1)])],1)],1)},R=[],K={name:"Signup",data:function(){return{username:"",password:""}},methods:{signUp:function(){l.a.auth().createUserWithEmailAndPassword(this.username,this.password).then((function(t){alert("Create account: ",t.email)})).catch((function(t){alert(t.message)}))}}},W=K,G=e("0e8f"),J=e("a722"),Q=e("8654"),X=Object(m["a"])(W,H,R,!1,null,null,null),Z=X.exports;p()(X,{VBtn:h["a"],VContainer:$["a"],VFlex:G["a"],VLayout:J["a"],VTextField:Q["a"]});var tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[e("h1",[t._v("Log in")])]),e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[e("form",[e("v-layout",{attrs:{column:""}},[e("v-flex",[e("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",placeholder:"Username",required:""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),e("v-flex",[e("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",placeholder:"Password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("v-flex",{staticClass:"text-xs-center",attrs:{"mt-5":""}},[e("v-btn",{attrs:{color:"primary"},on:{click:t.signIn}},[t._v("Sign Up")])],1)],1)],1)])],1)],1)},at=[],et={name:"Signin",data:function(){return{username:"",password:""}},methods:{signIn:function(){var t=this;l.a.auth().signInWithEmailAndPassword(this.username,this.password).then((function(a){alert("ログインに成功しました: ",a.email),t.$router.push("/")}),(function(t){alert(t.message)}))}}},st=et,nt=Object(m["a"])(st,tt,at,!1,null,null,null),rt=nt.exports;p()(nt,{VBtn:h["a"],VContainer:$["a"],VFlex:G["a"],VLayout:J["a"],VTextField:Q["a"]});var ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[e("weather",{attrs:{place:"sapporo"}})],1),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[e("weather",{attrs:{place:"sendai"}})],1),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[e("weather",{attrs:{place:"tokyo"}})],1),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[e("weather",{attrs:{place:"kanazawa"}})],1),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[e("weather",{attrs:{place:"osaka"}})],1),e("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[e("weather",{attrs:{place:"fukuoka"}})],1)],1)},it=[],ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"300px",src:t.image_src}},[e("v-card-title",[t._v(t._s(t.city))])],1),e("v-card-subtitle",{staticClass:"pb-0 text--primary"},[e("img",{attrs:{src:t.icon}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[e("v-progress-circular",{attrs:{indeterminate:"",color:"#D32F2F"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"display-1 pb-7"},[t._v(t._s(t.temp)+"℃")])]),e("v-card-text",[e("div",{staticClass:"headline"},[e("span",{staticClass:"red--text"},[t._v(t._s(t.maxtemp)+"℃")]),t._v(" / "),e("span",{staticClass:"blue--text"},[t._v(t._s(t.mintemp)+"℃")])]),e("div",[e("router-link",{attrs:{to:{name:"analytics",params:{value:this.place}}}})],1)]),e("v-card-actions",{staticClass:"pt-0"},[e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.show=!t.show}}},[e("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("v-btn",{attrs:{text:""},on:{click:t.twitterShare}},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-twitter")])],1),e("v-btn",{attrs:{text:""}},[e("router-link",{attrs:{to:{name:"analytics",params:{value:this.place}}}},[t._v("Analytics")])],1)],1)])],1)},lt=[],dt=(e("b0c0"),e("bc3a")),ut=e.n(dt),mt=e("c1df"),ft=e.n(mt),pt={data:function(){return{image_src:e("e078")("./".concat(this.place,".png")),city:null,temp:null,maxtemp:null,mintemp:null,wind:null,condition:{main:null},loading:!0,show:!1,Timestamp:null,Timestamp2:null}},created:function(){ut.a;var t=ft()(),a=t.format("YYYY"),e=t.format("MM"),s=t.format("DD");this.Timestamp=a+""+e+s,this.Timestamp2=a+"/"+e+"/"+s;var n=this.place,r="https://api.openweathermap.org/data/2.5/weather?q=",o=",jp&units=metric&appid=4dff50a83aa2145ba555d8f59e9d3ef0",i=r+n+o;return ut.a.get(i).then(function(t){this.city=t.data.name,this.temp=t.data.main.temp,this.maxtemp=t.data.main.temp_max,this.mintemp=t.data.main.temp_min,this.wind=t.data.wind.speed,this.condition=t.data.weather[0],this.icon="https://openweathermap.org/img/w/"+t.data.weather[0].icon+".png",this.loading=!1}.bind(this))},methods:{twitterShare:function(){var t="https://twitter.com/intent/tweet?text="+this.city+this.temp+"%20%23今の温度";location.href=t}},updated:function(){l.a.firestore().collection(this.place).doc(this.Timestamp).set({temp:this.maxtemp,maxtemp:this.maxtemp,mintemp:this.mintemp,Timestamp:this.Timestamp,Timestamp2:this.Timestamp2,wind:this.wind,condition:this.condition.main}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))},props:["place"]},bt=pt,jt=e("b0af"),ht=e("99d9"),vt=e("0789"),gt=e("adda"),wt=e("490a"),xt=Object(m["a"])(bt,ct,lt,!1,null,null,null),kt=xt.exports;p()(xt,{VBtn:h["a"],VCard:jt["a"],VCardActions:ht["a"],VCardSubtitle:ht["b"],VCardText:ht["c"],VCardTitle:ht["d"],VExpandTransition:vt["a"],VIcon:g["a"],VImg:gt["a"],VProgressCircular:wt["a"],VSpacer:C["a"]});var yt={components:{weather:kt}},_t=yt,Ct=e("0fd9b"),St=Object(m["a"])(_t,ot,it,!1,null,null,null),Tt=St.exports;p()(St,{VCol:E["a"],VRow:Ct["a"]});var zt,Dt,Vt,Ot,Mt,Et,Lt,Bt,At=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"text-center",attrs:{id:"nav"}},[t._v("フロントエンド : vue vue-router vuex")]),e("div",{staticClass:"text-center",attrs:{id:"nav"}},[t._v("ライブラリ : vuetify moment.js chart.js")]),e("div",{staticClass:"text-center",attrs:{id:"nav"}},[t._v("使用API : openweathermap")]),e("div",{staticClass:"text-center",attrs:{id:"nav"}},[t._v("データベース : firestore")]),e("div",{staticClass:"text-center",attrs:{id:"nav"}},[t._v("サーバサイド : firebase function node.js")])])}],It={},Pt=Object(m["a"])(It,At,Nt,!1,null,null,null),$t=Pt.exports,Yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loaded?e("allchart",{attrs:{data:t.data,options:t.options}}):t._e()},Ft=[],Ut=(e("4160"),e("159b"),e("a9e3"),e("1fca")),qt={extends:Ut["a"],props:{options:Number,data:Number},mounted:function(){this.renderLineChart()},computed:{chartData:function(){return this.data}},methods:{renderLineChart:function(){this.renderChart(this.chartData,this.options)}},watch:{data:{handler:function(){this._chart.destroy(),this.renderLineChart()},deep:!0,immediate:!1}}},Ht=qt,Rt=Object(m["a"])(Ht,zt,Dt,!1,null,null,null),Kt=Rt.exports,Wt={components:{allchart:Kt},data:function(){return{loaded:!1,Today:null,data:{labels:[],datasets:[{label:"osaka",data:[],backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"},{label:"tokyo",data:[],backgroundColor:"transparent",borderColor:"red",pointBackgroundColor:"red"},{label:"kanazawa",data:[],backgroundColor:"transparent",borderColor:"green",pointBackgroundColor:"green"},{label:"fukuoka",data:[],backgroundColor:"transparent",borderColor:"yellow",pointBackgroundColor:"yellow"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}]}}}},created:function(){var t=this,a=ft()(),e=a.format("YYYY"),s=a.format("MM"),n=a.format("DD");this.Today=e+""+s+n;for(var r=l.a.firestore(),o=["osaka","tokyo","kanazawa","fukuoka"],i=function(a){r.collection(o[a]).where("Timestamp","<=",t.Today).get().then((function(e){e.forEach((function(e){t.data.datasets[a].data.push(e.data().temp)}))}))},c=0;c<o.length;c++)i(c);r.collection("fukuoka").where("Timestamp","<=",this.Today).get().then((function(a){a.forEach((function(a){t.data.labels.push(a.data().Timestamp2),t.loaded=!0}))}))}},Gt=Wt,Jt=Object(m["a"])(Gt,Yt,Ft,!1,null,null,null),Qt=Jt.exports,Xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("h1",[e("span",[t._v("This page is "+t._s(t.$route.params.value)+" analytics")])]),e("div",[e("span",[t._v("temp")]),t.loaded?e("linechart",{attrs:{data:t.data1,options:t.options}}):t._e()],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[e("span",[t._v("Days")]),t.loaded?e("piechart",{attrs:{data:t.data2,options:t.options2}}):t._e()],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[e("span",[t._v("Precipitation amount")]),t.loaded?e("radar",{attrs:{data:t.data4,options:t.options2}}):t._e()],1)],1)],1)},Zt=[],ta={extends:Ut["a"],props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},aa=ta,ea=aa,sa=Object(m["a"])(ea,Vt,Ot,!1,null,null,null),na=sa.exports,ra={extends:Ut["b"],props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},oa=ra,ia=oa,ca=Object(m["a"])(ia,Mt,Et,!1,null,null,null),la=ca.exports,da={extends:Ut["c"],props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},ua=da,ma=ua,fa=Object(m["a"])(ma,Lt,Bt,!1,null,null,null),pa=fa.exports,ba={components:{linechart:na,piechart:la,radar:pa},data:function(){return{loaded:!1,name:null,data1:{labels:[],datasets:[{label:"℃",data:[],backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}]},data2:{labels:["rain","cloud","sun"],datasets:[{label:"℃",data:[20,10,40],data2:[],borderWidth:1,borderColor:"#FC2525",pointBackgroundColor:"rgba(255, 0,0, 0.5)",pointBorderColor:"white",backgroundColor:"rgba(255, 0,0, 0.5)"}]},data4:{labels:["1月","2月","3月","4月","5月","6月","7月"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}]}},options2:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}}},created:function(){var t=this,a=ft()(),e=a.format("YYYY"),s=a.format("MM"),n=a.format("DD");this.Today=e+""+s+n,this.db=l.a.firestore(),this.db.collection(this.$route.params.value).where("Timestamp","<=",this.Today).get().then((function(a){a.forEach((function(a){t.data1.datasets[0].data.push(a.data().temp),t.data1.labels.push(a.data().Timestamp2),t.loaded=!0}))}))}},ja=ba,ha=Object(m["a"])(ja,Xt,Zt,!1,null,null,null),va=ha.exports;p()(ha,{VCol:E["a"],VRow:Ct["a"]});var ga=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},wa=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v("this page is menmbers only")])])}],xa={},ka=Object(m["a"])(xa,ga,wa,!1,null,null,null),ya=ka.exports;s["a"].use(q["a"]);var _a=[{path:"/",name:"weather",component:Tt},{path:"/about",name:"hoprofileme",component:$t},{path:"/signup",name:"signup",component:Z},{path:"/chart",name:"chart",component:Qt},{path:"/signin",name:"signin",component:rt},{path:"/analytics",name:"analytics",component:va},{path:"/only",name:"only",component:ya,meta:{requiresAuth:!0}}],Ca=new q["a"]({routes:_a});Ca.beforeEach((function(t,a,e){var s=t.matched.some((function(t){return t.meta.requiresAuth})),n=l.a.auth().currentUser;s?n?e():e({path:"/signin",query:{redirect:t.fullPath}}):e()}));var Sa=Ca,Ta=e("f309");s["a"].use(Ta["a"]);var za=new Ta["a"]({}),Da=e("2f62");s["a"].use(Da["a"]);var Va=new Da["a"].Store({state:{dataSetName:String,dataSetTemp:Number,dataSetMaxTemp:Number,dataSetMinTemp:Number,dataSetCondition:String,dataSetLoading:Boolean,dataSeticon:null},mutations:{mutateDataSetName:function(t,a){t.dataSetName=a},mutateDataSetTemp:function(t,a){t.dataSetTemp=a},mutateDataSetMaxTemp:function(t,a){t.dataSetMaxTemp=a},mutateDataSetMinTemp:function(t,a){t.dataSetMinTemp=a},mutateDataSetCondition:function(t,a){t.dataSetCondition=a},mutateDataSetLoading:function(t,a){t.dataSetLoading=a},mutateDataSetConditionicon:function(t,a){t.dataSeticon=a}},actions:{commitDataSet:function(t,a){var e=a,s="https://api.openweathermap.org/data/2.5/weather?q=",n=",jp&units=metric&appid=4dff50a83aa2145ba555d8f59e9d3ef0";return s=s+e+n,ut.a.get(s).then((function(a){t.commit("mutateDataSetName",a.data.name),t.commit("mutateDataSetTemp",a.data.main.temp),t.commit("mutateDataSetMaxTemp",a.data.main.temp_max),t.commit("mutateDataSetMinTemp",a.data.main.temp_min),t.commit("mutateDataSetCondition",a.data.weather[0].main),t.commit("mutateDataSetConditionicon","https://openweathermap.org/img/w/"+a.data.weather[0].icon+".png"),t.commit("mutateDataSetLoading",!1)}))}},getters:{getStateDataSetName:function(t){return t.dataSetName},getStateDataSetTemp:function(t){return t.dataSetTemp},getStateDataSetMaxTemp:function(t){return t.dataSetMaxTemp},getStateDataSetMinTemp:function(t){return t.dataSetMinTemp},getStateDataSetCondition:function(t){return t.dataSetCondition},getStateDataSetLoading:function(t){return t.dataSetLoading},getStateDataSeticon:function(t){return t.dataSeticon}}}),Oa={apiKey:"AIzaSyCz_q-qIm6TKBDi-w4Qf3cyFToKYb2-mT8",authDomain:"sample-3463a.firebaseapp.com",databaseURL:"https://sample-3463a.firebaseio.com",projectId:"sample-3463a",storageBucket:"sample-3463a.appspot.com",messagingSenderId:"748303189274",appId:"1:748303189274:web:78ec7c2d8ae358732558a3",measurementId:"G-D5498K3MP4"};l.a.initializeApp(Oa);var Ma=l.a;s["a"].config.productionTip=!1,new s["a"]({router:Sa,firebase:Ma,vuetify:za,store:Va,render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("7694"),n=e.n(s);n.a},7694:function(t,a,e){},7902:function(t,a,e){t.exports=e.p+"img/sendai.712ac290.png"},a7d7:function(t,a,e){var s={"./af":"838d","./af.js":"838d","./ar":"784e","./ar-dz":"73b7","./ar-dz.js":"73b7","./ar-kw":"90b7","./ar-kw.js":"90b7","./ar-ly":"d532","./ar-ly.js":"d532","./ar-ma":"e1cf","./ar-ma.js":"e1cf","./ar-sa":"d8a0","./ar-sa.js":"d8a0","./ar-tn":"3405","./ar-tn.js":"3405","./ar.js":"784e","./az":"1551","./az.js":"1551","./be":"74a2","./be.js":"74a2","./bg":"818d","./bg.js":"818d","./bm":"9a9a","./bm.js":"9a9a","./bn":"733a","./bn.js":"733a","./bo":"3fae","./bo.js":"3fae","./br":"e578","./br.js":"e578","./bs":"aa1c","./bs.js":"aa1c","./ca":"bf58","./ca.js":"bf58","./cs":"39b3","./cs.js":"39b3","./cv":"d077","./cv.js":"d077","./cy":"7b15","./cy.js":"7b15","./da":"7012","./da.js":"7012","./de":"8ef4","./de-at":"c2c4","./de-at.js":"c2c4","./de-ch":"59e8","./de-ch.js":"59e8","./de.js":"8ef4","./dv":"8229","./dv.js":"8229","./el":"3df5","./el.js":"3df5","./en-SG":"f519","./en-SG.js":"f519","./en-au":"64fc","./en-au.js":"64fc","./en-ca":"d02e","./en-ca.js":"d02e","./en-gb":"e4ab","./en-gb.js":"e4ab","./en-ie":"2078","./en-ie.js":"2078","./en-il":"30ea","./en-il.js":"30ea","./en-nz":"9e37","./en-nz.js":"9e37","./eo":"03d2","./eo.js":"03d2","./es":"f014","./es-do":"c04e4","./es-do.js":"c04e4","./es-us":"678d","./es-us.js":"678d","./es.js":"f014","./et":"7005","./et.js":"7005","./eu":"53ec","./eu.js":"53ec","./fa":"ccae","./fa.js":"ccae","./fi":"4bbe","./fi.js":"4bbe","./fo":"bee3","./fo.js":"bee3","./fr":"1f77","./fr-ca":"ffd0","./fr-ca.js":"ffd0","./fr-ch":"3236","./fr-ch.js":"3236","./fr.js":"1f77","./fy":"37c5","./fy.js":"37c5","./ga":"a451","./ga.js":"a451","./gd":"1ba1","./gd.js":"1ba1","./gl":"34cf","./gl.js":"34cf","./gom-latn":"313c","./gom-latn.js":"313c","./gu":"a4b4","./gu.js":"a4b4","./he":"cee8","./he.js":"cee8","./hi":"cb39","./hi.js":"cb39","./hr":"cea2","./hr.js":"cea2","./hu":"97cb","./hu.js":"97cb","./hy-am":"d0b1","./hy-am.js":"d0b1","./id":"7113","./id.js":"7113","./is":"269f","./is.js":"269f","./it":"1c5f","./it-ch":"0137","./it-ch.js":"0137","./it.js":"1c5f","./ja":"7c17","./ja.js":"7c17","./jv":"fc82","./jv.js":"fc82","./ka":"b0a4","./ka.js":"b0a4","./kk":"5858","./kk.js":"5858","./km":"024c","./km.js":"024c","./kn":"eeda","./kn.js":"eeda","./ko":"c9f3","./ko.js":"c9f3","./ku":"a0f3","./ku.js":"a0f3","./ky":"2886","./ky.js":"2886","./lb":"0691","./lb.js":"0691","./lo":"c132","./lo.js":"c132","./lt":"0413","./lt.js":"0413","./lv":"9a87","./lv.js":"9a87","./me":"07b9","./me.js":"07b9","./mi":"6da7","./mi.js":"6da7","./mk":"8f7a","./mk.js":"8f7a","./ml":"f2fd","./ml.js":"f2fd","./mn":"374e","./mn.js":"374e","./mr":"3b71","./mr.js":"3b71","./ms":"0660","./ms-my":"bdd0","./ms-my.js":"bdd0","./ms.js":"0660","./mt":"65a9","./mt.js":"65a9","./my":"5e5c","./my.js":"5e5c","./nb":"dcfb","./nb.js":"dcfb","./ne":"cba4","./ne.js":"cba4","./nl":"aa9a","./nl-be":"9610","./nl-be.js":"9610","./nl.js":"aa9a","./nn":"0461","./nn.js":"0461","./pa-in":"53d5","./pa-in.js":"53d5","./pl":"a609","./pl.js":"a609","./pt":"3417","./pt-br":"f586","./pt-br.js":"f586","./pt.js":"3417","./ro":"2f06","./ro.js":"2f06","./ru":"6d99","./ru.js":"6d99","./sd":"c4b0","./sd.js":"c4b0","./se":"43f2","./se.js":"43f2","./si":"3389","./si.js":"3389","./sk":"753b","./sk.js":"753b","./sl":"5e34","./sl.js":"5e34","./sq":"33bf","./sq.js":"33bf","./sr":"8843","./sr-cyrl":"4068","./sr-cyrl.js":"4068","./sr.js":"8843","./ss":"339e","./ss.js":"339e","./sv":"1428","./sv.js":"1428","./sw":"7581","./sw.js":"7581","./ta":"2e92","./ta.js":"2e92","./te":"9bcc","./te.js":"9bcc","./tet":"dc6d","./tet.js":"dc6d","./tg":"ba9f","./tg.js":"ba9f","./th":"8854","./th.js":"8854","./tl-ph":"9f93","./tl-ph.js":"9f93","./tlh":"8429","./tlh.js":"8429","./tr":"109e","./tr.js":"109e","./tzl":"593e","./tzl.js":"593e","./tzm":"a007","./tzm-latn":"5d9b","./tzm-latn.js":"5d9b","./tzm.js":"a007","./ug-cn":"6f4b","./ug-cn.js":"6f4b","./uk":"1e2a","./uk.js":"1e2a","./ur":"f26f","./ur.js":"f26f","./uz":"a18a","./uz-latn":"c96c","./uz-latn.js":"c96c","./uz.js":"a18a","./vi":"2fe7","./vi.js":"2fe7","./x-pseudo":"95bd","./x-pseudo.js":"95bd","./yo":"352b","./yo.js":"352b","./zh-cn":"865c","./zh-cn.js":"865c","./zh-hk":"0302","./zh-hk.js":"0302","./zh-tw":"a24e","./zh-tw.js":"a24e"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="a7d7"},dc8f:function(t,a,e){t.exports=e.p+"img/sapporo.23791a26.png"},e078:function(t,a,e){var s={"./fukuoka.png":"4785","./kanazawa.png":"09ef","./osaka.png":"4ede","./sapporo.png":"dc8f","./sendai.png":"7902","./tokyo.png":"f4cd"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="e078"},f4cd:function(t,a,e){t.exports=e.p+"img/tokyo.38e493ee.png"}});
//# sourceMappingURL=app.26176e85.js.map
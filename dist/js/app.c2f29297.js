(function(e){function t(t){for(var r,s,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"34c9":function(e,t,n){"use strict";n("60e8")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"db",(function(){return E}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},u=Object(s["a"])(i,o,a,!1,null,null,null),l=u.exports,c=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:"https://th.bing.com/th/id/R2152b86152300100aa6a56db76d770a6?rik=JHfg9UcXzY9lGQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fSign-Up-Button-PNG-Transparent-Image.png&ehk=uOYqn%2bEhq9R1S0%2fHUOK%2bxVuMHervx8hAIHvFUXGwmko%3d&risl=&pid=ImgRaw",alt:""}}),n("HelloWorld")],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"}),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"form-group text"},[e._v(" Full Name : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter full name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"form-group text"},[e._v(" Phone Number : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter phone number"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),n("div",{staticClass:"form-group text"},[e._v(" User Name : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter user name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),n("div",{staticClass:"form-group password"},[e._v(" Password : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary ",on:{click:function(t){return e.upToFirebase()}}},[e._v(" Sign Up ")])])])])])])},m=[],v=(n("b0c0"),{data:function(){return{name:"",phone:"",userName:"",password:""}},methods:{upToFirebase:function(){var e={name:this.name,phone:this.phone,userName:this.userName,password:this.password};E.collection("Input").doc().set(e).then((function(){console.log("Succes")})).catch((function(e){console.log(e)}))}}}),h=v,g=Object(s["a"])(h,f,m,!1,null,null,null),b=g.exports,w={components:{HelloWorld:b}},y=w,x=(n("34c9"),Object(s["a"])(y,p,d,!1,null,null,null)),_=x.exports;r["default"].use(c["a"]);var O=[{path:"/",name:"SignUp",component:_}],N=new c["a"]({mode:"history",base:"/",routes:O}),P=N,j=n("2f62");r["default"].use(j["a"]);var C=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("5f5b"),I=n("260b");n("e71f"),n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(S["a"]);var k={apiKey:"AIzaSyA63oHH94UVYzKqmh03z2ZrTt316bIzgx0",authDomain:"signup-39b67.firebaseapp.com",projectId:"signup-39b67",storageBucket:"signup-39b67.appspot.com",messagingSenderId:"557318180475",appId:"1:557318180475:web:c054baf242681099989cde",measurementId:"G-MY91WJ766R"};I["a"].initializeApp(k);var E=I["a"].firestore();new r["default"]({router:P,store:C,render:function(e){return e(l)}}).$mount("#app")},"60e8":function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c2f29297.js.map
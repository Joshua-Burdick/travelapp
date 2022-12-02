(function(){"use strict";var e={4875:function(e,t,a){var r=a(144),s=a(3726),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t(s.Z,[t("router-view")],1)],1)},n=[],i=a(1001),l={},c=(0,i.Z)(l,o,n,!1,null,null,null),u=c.exports,d=a(154);r.ZP.use(d.Z);var h=new d.Z({}),m=a(8345),p=a(1095),f=a(9088),g=a(3298),v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home center"},[e.$vuetify.breakpoint.mdAndUp?t("div",{staticClass:"planet"}):e._e(),t("div",{staticClass:"login ma-5"},[e.user?t(p.Z,{staticClass:"white--text text-h5 font-weight-bold",attrs:{text:""},on:{click:function(t){return t.stopPropagation(),e.profile.apply(null,arguments)}}},[t(f.Z,{staticClass:"mr-2",attrs:{large:""}},[e._v("mdi-account-check")]),e._v(" "+e._s(e.user)+" ")],1):t(p.Z,{staticClass:"white--text text-h5 font-weight-bold",attrs:{text:""},on:{click:function(t){return t.stopPropagation(),e.login.apply(null,arguments)}}},[t(f.Z,{staticClass:"mr-2",attrs:{large:""}},[e._v("mdi-account")]),e._v(" Log In ")],1)],1),t("div",{staticClass:"search"},[t(g.Z,{attrs:{filled:"",solo:"",dark:"",label:"Enter a location",id:"autocomplete","prepend-inner-icon":"mdi-map-marker"}})],1)])},w=[];a(7658);class y{constructor(){}static get(e){return localStorage.getItem(e)}static set(e,t){localStorage.setItem(e,t)}static remove(e){localStorage.removeItem(e)}static clear(){localStorage.clear()}static key(e){return localStorage.key(e)}}var _={name:"HomeView",data(){return{autocomplete:void 0,user:localStorage.getItem("username")}},created(){document.title="TravelApp"},mounted(){this.autocomplete=new google.maps.places.Autocomplete(document.getElementById("autocomplete")),google.maps.event.addListener(this.autocomplete,"place_changed",(()=>{const e=this.autocomplete.getPlace(),t=e.geometry.location.lat(),a=e.geometry.location.lng();y.set("Latitude",t),y.set("Longitude",a),this.$router.push({name:"search"})}))},computed:{budget:{get(){return y.get("Budget")},set(e){y.set("Budget",e)}}},methods:{login(){this.$router.push({name:"login"})},profile(){this.$router.push({name:"profile"})}}},b=_,x=(0,i.Z)(b,v,w,!1,null,"cd92f374",null),k=x.exports,Z=a(3816),P=a(5255),C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("MapComponent",{attrs:{id:"map"}}),t(Z.Z,{attrs:{id:"some-text",elevation:"2"}},[t(P.EB,[e._v("Test")]),t(P.ZB,[t("div",[e._v("Latitude: "+e._s(e.lat))]),t("br"),t("div",[e._v("Longitude: "+e._s(e.lng))]),t("br"),t("div",[e._v("Budget: $"+e._s(e.budget))])])],1),t("WeatherCard",{attrs:{id:"weather"}})],1)},$=[],S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"map"},[t("GmapMap",{staticStyle:{width:"100vw",height:"100vh"},attrs:{center:e.center,zoom:12}},e._l(e.markers,(function(a,r){return t("GmapMarker",{key:r,attrs:{position:a.position},on:{click:function(t){e.center=e.m.position}}})})),1)],1)},R=[],L={data(){return{center:{lat:0,lng:0},currentPlace:null,markers:[],places:[]}},mounted(){this.geolocate()},methods:{setPlace(e){this.currentPlace=e},addMarker(){if(this.currentPlace){const e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.places.push(this.currentPlace),this.center=e,this.currentPlace=null}},geolocate(){this.center={lat:Number(y.get("Latitude")),lng:Number(y.get("Longitude"))}}}},B=L,O=(0,i.Z)(B,S,R,!1,null,null,null),M=O.exports,E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"weather"},[t(Z.Z,{attrs:{elevation:"2"}},[t(P.EB,[e._v(e._s(e.weather.name)+", "+e._s(e.weather.sys.country))]),t(P.ZB,[t("div",[e._v(e._s(e.dateBuilder()))]),t("div",[e._v(e._s(Math.round(e.weather.main.temp))+"°F")])])],1)],1)},q=[],T={data(){return{api_key:"8b81c25b4594c01f9e7d4caec4793f7a",url_base:"https://api.openweathermap.org/data/2.5/",weather:{}}},created(){this.fetchWeather()},methods:{fetchWeather(){fetch(`${this.url_base}weather?lat=${Number(y.get("Latitude"))}&lon=${Number(y.get("Longitude"))}&units=imperial&APPID=${this.api_key}`).then((e=>e.json())).then(this.setResults)},setResults(e){this.weather=e},dateBuilder(){let e=new Date,t=["January","Feburary","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`${a[e.getDay()]}, ${e.getDate()} ${t[e.getMonth()]} ${e.getFullYear()}`}}},N=T,j=(0,i.Z)(N,E,q,!1,null,null,null),I=j.exports,A={data:()=>({}),components:{MapComponent:M,WeatherCard:I},created(){document.title="TravelApp - Search"},methods:{},computed:{lat:{get(){return y.get("Latitude")},set(e){y.set("Latitude",e)}},lng:{get(){return y.get("Longitude")},set(e){y.set("Longitude",e)}},budget:{get(){return y.get("Budget")},set(e){y.set("Budget",e)}}}},D=A,W=(0,i.Z)(D,C,$,!1,null,"3cfc6366",null),F=W.exports,H=a(3240),J=a(5536),z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-form-container"},[t(Z.Z,{staticClass:"card-container pb-2 px-2",attrs:{width:"400",dark:""}},[t(p.Z,{staticStyle:{position:"absolute",left:"0",top:"0"},attrs:{text:""},on:{click:e.home}},[t(f.Z,{staticClass:"mr-1",attrs:{small:""}},[e._v("mdi-arrow-left")]),e._v(" Home ")],1),t(P.EB,{staticClass:"center mt-1 mb-3"},[t("h1",[e._v(" Login ")])]),t(P.ZB,[t(H.Z,{ref:"form",attrs:{"lazy-validation":""}},[t(g.Z,{attrs:{rules:e.nameRules,"prepend-icon":"mdi-account",filled:"",label:"Name"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t(g.Z,{attrs:{type:e.showPassword?"text":"password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passwordRules,"prepend-icon":"mdi-lock",label:"Password",filled:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t("div",{staticClass:"text-h6 red--text"},[e._v(" "+e._s(e.error)+" ")])],1),t(P.h7,[t(p.Z,{attrs:{color:"primary"},on:{click:e.login}},[e._v(" Login ")]),t(J.Z),t(p.Z,{attrs:{text:""},on:{click:e.register}},[e._v(" Register here ")])],1)],1)],1)},V=[],Y={data:()=>({username:"",password:"",showPassword:!1,error:"",nameRules:[e=>!!e||"Name is required"],passwordRules:[e=>!!e||"Password is required"]}),methods:{login(){this.$refs.form.validate()&&this.axios.post("/api/auth/login",{username:this.username,password:this.password}).then((e=>{console.log(e.data),e.data.authed?(localStorage.setItem("username",this.username),this.$router.push({name:"home"})):this.error="Invalid username or password"})).catch((e=>{console.log(e)}))},register(){this.$router.push({name:"register"})},home(){this.$router.push({name:"home"})}},watch:{error(){this.error&&setTimeout((()=>{this.error=""}),3e3)}}},G=Y,U=(0,i.Z)(G,z,V,!1,null,"4ffaf0a6",null),K=U.exports,Q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"register-form-container"},[t(Z.Z,{staticClass:"card-container pb-2 px-2",attrs:{width:"400",dark:""}},[t(p.Z,{staticStyle:{position:"absolute",left:"0",top:"0"},attrs:{text:""},on:{click:e.home}},[t(f.Z,{staticClass:"mr-1",attrs:{small:""}},[e._v("mdi-arrow-left")]),e._v(" Home ")],1),t(P.EB,{staticClass:"center mb-3"},[t("h1",[e._v(" Register ")])]),t(P.ZB,[t(H.Z,{ref:"form",attrs:{"lazy-validation":""}},[t(g.Z,{attrs:{rules:e.nameRules,label:"Name","prepend-icon":"mdi-account",filled:"",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(g.Z,{attrs:{rules:e.emailRules,label:"E-mail","prepend-icon":"mdi-email",required:"",filled:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(g.Z,{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passwordRules,type:e.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock",filled:"",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(g.Z,{attrs:{rules:e.password2Rules,type:e.showPassword?"text":"password",label:"Re-enter Password",required:"","prepend-icon":"mdi-redo-variant",filled:""},on:{"click:append":function(t){e.showPassword2=!e.showPassword2}},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}})],1),t("div",{staticClass:"text-h6 red--text"},[e._v(" "+e._s(e.error)+" ")])],1),t(P.h7,[t(p.Z,{attrs:{color:"primary"},on:{click:e.register}},[e._v(" Register ")]),t(J.Z),t(p.Z,{attrs:{text:""},on:{click:e.login}},[e._v(" Login here ")])],1)],1)],1)},X=[],ee={data(){return{name:"",nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],password:"",passwordRules:[e=>!!e||"Password is required",e=>e&&e.length>=6||"Password must be greater than 6 characters"],showPassword:!1,password2:"",password2Rules:[e=>e===this.password||"Passwords must match"],error:""}},methods:{register(){this.$refs.form.validate()&&this.axios.post("/api/auth/register",{username:this.name,email:this.email,password:this.password}).then((e=>{e.data.user?(console.log(e.data.user),this.$router.push({name:"login"})):this.error=e.data.error})).catch((e=>{console.log(e)}))},login(){this.$router.push({name:"login"})},home(){this.$router.push({name:"home"})}},watch:{name(){this.error=""},email(){this.error=""},password(){this.error=""},password2(){this.error=""},error(e){e&&setTimeout((()=>{this.error=""}),3e3)}}},te=ee,ae=(0,i.Z)(te,Q,X,!1,null,"7f9c1965",null),re=ae.exports,se=function(){var e=this;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"center",attrs:{id:"err-num"}},[e._v("404")]),t("p",{staticClass:"center"},[e._v("Whoops! Looks like an error has occurred.")])])}],ne={mounted(){document.title="404",y.set("timesRefreshed",String(Number(y.get("timesRefreshed"))+1)),window.addEventListener("unload",this.goHome())},beforeDestroy(){window.removeEventListener("unload",this.goHome())},methods:{goHome(){let e=Number(y.get("timesRefreshed"));e>=2&&(this.$router.push({name:"home"}),y.set("timesRefreshed","0"))}}},ie=ne,le=(0,i.Z)(ie,se,oe,!1,null,"e0e2a6a8",null),ce=le.exports,ue=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("main",[t("div",{staticClass:"search-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchWeather.apply(null,arguments)},input:function(t){t.target.composing||(e.query=t.target.value)}}})]),"undefined"!=typeof e.weather.main?t("div",{staticClass:"weather-wrap"},[t("div",{staticClass:"location-box"},[t("div",{staticClass:"location"},[e._v(e._s(e.weather.name)+", "+e._s(e.weather.sys.state)+" "+e._s(e.weather.sys.country))]),t("div",{staticClass:"date"},[e._v(e._s(e.dateBuilder()))]),t("div",{staticClass:"weather-box"},[t("div",{staticClass:"temp"},[e._v(e._s(Math.round(e.weather.main.temp))+" °F")]),t("div",{staticClass:"weather"},[e._v(" "+e._s(e.weather)+" ")])])])]):e._e()])])},de=[],he={data(){return{api_key:"8b81c25b4594c01f9e7d4caec4793f7a",url_base:"https://api.openweathermap.org/data/2.5/",query:"",weather:{}}},methods:{fetchWeather(){fetch(`${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`).then((e=>e.json())).then(this.setResults)},setResults(e){this.weather=e},dateBuilder(){let e=new Date,t=["January","Feburary","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`${a[e.getDay()]}, ${e.getDate()} ${t[e.getMonth()]} ${e.getFullYear()}`}}},me=he,pe=(0,i.Z)(me,ue,de,!1,null,null,null),fe=pe.exports,ge=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-container"},[t("div",{staticClass:"title-card-container"},[t("div",{staticClass:"text-h5 font-weight-black white--text"},[e._v(" Your Profile: ")]),t(Z.Z,{staticClass:"card-container pb-2 px-2",attrs:{width:"400",dark:""}},[t("h1",{staticClass:"text-h3 font-weight-black my-5"},[e._v(" "+e._s(e.user)+" ")]),t("div",{staticClass:"text-h6 font-weight-black"},[e._v(" Registered Email Address: ")]),t("p",[e._v(" "+e._s(e.email)+" ")]),t(P.h7,{staticClass:"card-actions"},[t(p.Z,{attrs:{text:""},on:{click:e.back}},[t(f.Z,{staticClass:"mr-2"},[e._v("mdi-arrow-left")]),e._v(" Back ")],1),t(J.Z),t(p.Z,{attrs:{color:"error",text:""},on:{click:e.logout}},[t(f.Z,{staticClass:"mr-2"},[e._v("mdi-account-off")]),e._v(" Log Out ")],1)],1)],1)],1)])},ve=[],we={data(){return{user:localStorage.getItem("username"),email:"fetching..."}},mounted(){this.axios.get("/api/auth/email/"+this.user).then((e=>{console.log(e.data),this.email=e.data.email})).catch((e=>{console.log(e)}))},methods:{logout(){localStorage.clear(),this.$router.push({name:"home"})},back(){this.$router.push({name:"home"})}}},ye=we,_e=(0,i.Z)(ye,ge,ve,!1,null,"a438ff10",null),be=_e.exports;r.ZP.use(m.ZP);const xe=[{path:"/",name:"home",component:k},{path:"/search",name:"search",component:F},{path:"/login",name:"login",component:K},{path:"/register",name:"register",component:re},{path:"/profile",name:"profile",component:be},{path:"/weather",name:"weather",component:fe},{path:"/*",name:"404",component:ce}],ke=new m.ZP({mode:"history",base:"/",routes:xe});var Ze=ke,Pe=a(6292),Ce=a(594),$e=a(2346);r.ZP.config.productionTip=!1,r.ZP.use(Pe,{load:{key:"AIzaSyCVIPBOnwLEp4CedTebu3hjBnVMWaWyhp0",libraries:"places"}}),r.ZP.use($e.Z,Ce.Z),new r.ZP({vuetify:h,router:Ze,render:e=>e(u)}).$mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,r,s,o){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,s,o]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(t&&t(r);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunktravelapp"]=self["webpackChunktravelapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(4875)}));r=a.O(r)})();
//# sourceMappingURL=app.87af72cf.js.map
(function(e){function t(t){for(var i,n,o=t[0],c=t[1],u=t[2],p=0,l=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&l.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var i={},a={app:0},s=[];function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02fa":function(e,t,r){e.exports=r.p+"img/brownies.e66c15a7.png"},"15e3":function(e,t,r){e.exports=r.p+"img/smoothie.482b786d.png"},"213c":function(e,t,r){e.exports=r.p+"img/avo.bc5240f9.jpg"},"285b":function(e,t,r){var i={"./ar":"8b23","./ar.js":"8b23","./az":"0fd6","./az.js":"0fd6","./be":"a1de","./be.js":"a1de","./bg":"102b","./bg.js":"102b","./bs":"d1c3","./bs.js":"d1c3","./ca":"1b37","./ca.js":"1b37","./cs":"8981","./cs.js":"8981","./cy":"3ced","./cy.js":"3ced","./da":"7f8d","./da.js":"7f8d","./de":"be39","./de.js":"be39","./el":"1866","./el.js":"1866","./en":"6788","./en.js":"6788","./es":"8b4b","./es.js":"8b4b","./et":"df57","./et.js":"df57","./eu":"b9bc","./eu.js":"b9bc","./fa":"83c4","./fa.js":"83c4","./fi":"1137","./fi.js":"1137","./fr":"2849","./fr.js":"2849","./hr":"2e0c","./hr.js":"2e0c","./hu":"62a6","./hu.js":"62a6","./id":"7fc0","./id.js":"7fc0","./it":"d6e0","./it.js":"d6e0","./ja":"7d74","./ja.js":"7d74","./ka":"14c9","./ka.js":"14c9","./ko":"58ac","./ko.js":"58ac","./lt":"845c","./lt.js":"845c","./lv":"c6c3","./lv.js":"c6c3","./mk":"9fc9","./mk.js":"9fc9","./mn":"a3d2","./mn.js":"a3d2","./ms":"f45d","./ms.js":"f45d","./nb_NO":"bfd4","./nb_NO.js":"bfd4","./nl":"7ab1","./nl.js":"7ab1","./pl":"8ef3","./pl.js":"8ef3","./pt":"61d8","./pt.js":"61d8","./pt_BR":"1911","./pt_BR.js":"1911","./ro":"937f","./ro.js":"937f","./ru":"7f57","./ru.js":"7f57","./se":"c47d","./se.js":"c47d","./sl":"7f0b","./sl.js":"7f0b","./sq":"f373","./sq.js":"f373","./sr":"6f79","./sr.js":"6f79","./sv":"0c56","./sv.js":"0c56","./tr":"4bda","./tr.js":"4bda","./ua":"626a","./ua.js":"626a","./uk":"0874","./uk.js":"0874","./vi":"ee20","./vi.js":"ee20","./zh":"0ede","./zh.js":"0ede","./zh_TW":"4690","./zh_TW.js":"4690"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="285b"},"33b2":function(e,t,r){e.exports=r.p+"img/4.e66c15a7.png"},4660:function(e,t,r){e.exports=r.p+"img/5.6cab1b30.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",[i("b-card",{attrs:{title:"Plant-Based Eats","body-class":"text-center","header-tag":"nav"},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"text center"},[i("nav",e._l(e.links,(function(t){return i("router-link",{key:t,attrs:{to:e.paths[t],exact:""}},[e._v(e._s(t)+" "),i("span")])})),1)]),i("router-view")]},proxy:!0}])},[i("img",{attrs:{src:r("213c"),"img-alt":"Image","img-top":""}})])],1)])},s=[],n=r("5f5b"),o=r("b1e0");r("f9e3"),r("2dd8");i["default"].use(n["a"]),i["default"].use(o["a"]);var c,u={name:"App",data:function(){return{recipeList:[],links:["HOME","RECIPES","FAVORITES","ADD-A-RECIPE"],paths:{HOME:"/",RECIPES:"/recipes",FAVORITES:"/favorites","ADD-A-RECIPE":"/recipes/new"}}},mounted:function(){this.$store.dispatch("fetchRecipes"),this.$store.dispatch("authUser")},computed:{recipes:function(){return this.$store.state.recipes}}},d=u,p=r("2877"),l=Object(p["a"])(d,a,s,!1,null,null,null),f=l.exports,m=r("8c4f"),v=(r("4de4"),r("d3b7"),r("2f62")),g=(r("7db0"),r("c975"),r("a434"),r("d4ec")),h=r("bee2"),b=function(){function e(){Object(g["a"])(this,e);var t=localStorage.getItem("favorite");this.favorites=t?JSON.parse(t):[]}return Object(h["a"])(e,[{key:"getFavorites",value:function(){return this.favorites}},{key:"update",value:function(){localStorage.setItem("favorite",JSON.stringify(this.favorites))}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0,i=this.getItem(e);i?i.quantity+=t:this.favorites.push({id:e,quantity:t,name:r}),this.update()}},{key:"remove",value:function(e){var t=this.getItem(e),r=this.favorites.indexOf(t);t&&(this.favorites.splice(r,1),this.update())}},{key:"getItem",value:function(e){return this.favorites.find((function(t){var r=t.id;return r===e}))||null}}]),e}(),w=r("bc3a").create({baseURL:null!==(c="http://e28-api.krishbhes.me")&&void 0!==c?c:"http://e28-api.krishbhes.loc",responseType:"json",withCredentials:!0}),_=new b;i["default"].use(v["a"]);var y=new v["a"].Store({state:{recipes:[],user:null},mutations:{setRecipes:function(e,t){e.recipes=t},setUser:function(e,t){e.user=t}},actions:{fetchRecipes:function(e){w.get("recipe").then((function(t){e.commit("setRecipes",t.data.recipe)}))},authUser:function(e){return new Promise((function(t){w.post("auth").then((function(r){r.data.authenticated?e.commit("setUser",r.data.user):e.commit("setUser",!1),t()}))}))}},getters:{getRecipeById:function(e){return function(t){return e.recipes.filter((function(e){return e.id==t}),this.id)[0]}}}}),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(" Welcome to all things plant-based and simple recipes! Here you'll find meal ideas packed with nutrition that are quick to put together for your lifestyle. ")])])}],R={components:{}},I=R,D=Object(p["a"])(I,j,x,!1,null,"b6147498",null),k=D.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"recipe-page"}},[i("div",[i("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"6"}},[i("img",{staticClass:"rounded-0",attrs:{src:r("e078")("./"+e.recipe.id+".png"),alt:"Image"}})]),i("b-col",{attrs:{md:"6"}},[i("b-card-body",[i("b-card-text",[e.recipe?i("div",[i("show-recipe",{attrs:{recipe:e.recipe,includeIngredients:!0,includeDescription:!0,includeButton:!0,includeDirections:!0}},[e._v(" >")])],1):e._e()])],1)],1)],1)],1)],1)])},$=[],E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipe"},[i("div",{staticClass:"recipe-name",attrs:{"data-test":"recipe-name"}},[e._v(e._s(e.recipe.name))]),i("img",{attrs:{"data-test":"recipe-image-"+e.recipe.id,src:r("e078")("./"+e.recipe.id+".png")}}),e.includeDescription?i("p",{staticClass:"recipe-description"},[e._v(" "+e._s(e.recipe.description)+" ")]):e._e(),e.includeIngredients?i("p",{staticClass:"recipe-ingredients"},[e._v(" "+e._s(e.recipe.ingredients)+" ")]):e._e(),e.includeDirections?i("p",{staticClass:"recipe-directions"},[e._v(" "+e._s(e.recipe.directions)+" ")]):e._e(),e.includeButton?i("b-button",{attrs:{variant:"outline-primary"},on:{click:e.addFavoriteRecipe}},[e._v("Add to Favorites")]):e._e(),i("transition",{attrs:{name:"fade"}},[e.addAlert?i("div",{staticClass:"alert",attrs:{"data-test":"add-to-favorites-confirmation"}},[i("b-alert",{attrs:{variant:"success",show:""}},[e._v("New favorite added!")])],1):e._e()])],1)},C=[],U=(r("b0c0"),{name:"show-recipe",props:["recipe","includeDescription","includeButton","includeIngredients","includeDirections"],data:function(){return{errors:null,addAlert:!1,favorite:{name:"",recipe_id:this.recipe.id}}},methods:{addFavoriteRecipe:function(){var e=this;console.log(this.recipe.name),_.add(this.recipe.id,1),this.addAlert=!0,setTimeout((function(){return e.addAlert=!1}),2e3)}}}),P=U,L=Object(p["a"])(P,E,C,!1,null,"1cb0bb08",null),N=L.exports,F={name:"",props:["id"],components:{"show-recipe":N},data:function(){return{}},computed:{recipe:function(){return this.$store.getters.getRecipeById(this.id)}}},S=F,q=Object(p["a"])(S,O,$,!1,null,"95eedb46",null),T=q.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"favorites-page"}},[r("h2",[e._v("Favorites")]),0==e.favoritesList.length?r("div",[r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Empty!")])],1):e._e(),e.productsLoaded?r("div",{staticClass:"cleanList"},e._l(e.favoritesList,(function(t){return r("p",{key:t.id},[e._v(" You added "+e._s(e.getFavoritesDetails(t.id).name)+" to favorites "),r("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(r){return e.removeFavorite(t.id)}}},[e._v("Remove")])],1)})),0):e._e()])},M=[],z={name:"",props:[],data:function(){return{favoritesList:[]}},mounted:function(){this.favoritesList=_.getFavorites()},computed:{productsLoaded:function(){return this.recipes.length>0},recipes:function(){return this.$store.state.recipes}},methods:{getFavoritesDetails:function(e){return this.recipes.filter((function(t){return t.id==e}),e)[0]},removeFavorite:function(e){_.remove(e)}}},B=z,H=Object(p["a"])(B,A,M,!1,null,"4c4bbd3c",null),J=H.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"recipes"}},[r("h2",[e._v("Recipes")]),r("p"),e._l(e.recipes,(function(e){return r("router-link",{key:e.id,attrs:{to:"/recipes/"+e.id,exact:""}},[r("show-recipe",{attrs:{recipe:e}})],1)}))],2)},V=[],Y={name:"",components:{"show-recipe":N},props:[],data:function(){return{}},computed:{recipes:function(){return this.$store.state.recipes}}},G=Y,K=Object(p["a"])(G,W,V,!1,null,"81d84a1c",null),Q=K.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.user?r("div",[r("h2",[e._v("Add a Recipe!")]),r("form",[r("div",{attrs:{id:"addRecipe"}},[r("label",{attrs:{for:"name"}},[e._v(" Recipe: ")]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.name,expression:"recipe.name"}],attrs:{type:"text","data-test":"recipeName",id:"name"},domProps:{value:e.recipe.name},on:{blur:function(t){return e.validateRecipe()},input:function(t){t.target.composing||e.$set(e.recipe,"name",t.target.value)}}})]),e.errors&&"name"in e.errors?r("error-field",{attrs:{errors:e.errors.name}}):e._e(),r("label",{attrs:{for:"description"}},[e._v("Description: ")]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.description,expression:"recipe.description"}],attrs:{type:"text","data-test":"recipeDescription",id:"description"},domProps:{value:e.recipe.description},on:{blur:function(t){return e.validateRecipe()},input:function(t){t.target.composing||e.$set(e.recipe,"description",t.target.value)}}})]),e.errors&&"description"in e.errors?r("error-field",{attrs:{errors:e.errors.description}}):e._e(),r("label",{attrs:{for:"ingredients"}},[e._v("Ingredients: ")]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],attrs:{type:"text","data-test":"recipeIngredients",id:"ingredients"},domProps:{value:e.recipe.ingredients},on:{blur:function(t){return e.validateRecipe()},input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),e.errors&&"ingredients"in e.errors?r("error-field",{attrs:{errors:e.errors.ingredients}}):e._e(),r("label",{attrs:{for:"directions"}},[e._v("Directions: ")]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.directions,expression:"recipe.directions"}],attrs:{type:"text","data-test":"recipeDirections",id:"directions"},domProps:{value:e.recipe.directions},on:{blur:function(t){return e.validateRecipe()},input:function(t){t.target.composing||e.$set(e.recipe,"directions",t.target.value)}}})]),e.errors&&"directions"in e.errors?r("error-field",{attrs:{errors:e.errors.directions}}):e._e(),r("div",[r("b-button",{attrs:{variant:"success"},on:{click:e.addRecipes}},[e._v("New Recipe!")]),r("span"),r("b-button",{attrs:{variant:"outline-primary","data-test":"logout-button"},on:{click:e.logout}},[e._v("Logout")])],1),r("transition",{attrs:{name:"fade"}},[e.failRecipe?r("div",{staticClass:"alert",attrs:{"data-test":"recipeFail-confirmation"}},[r("b-alert",{attrs:{variant:"danger",show:""}},[e._v("Fill all fields!")])],1):e._e()]),r("transition",{attrs:{name:"fade"}},[e.showConfirmationMessage?r("div",{staticClass:"alert",attrs:{"data-test":"recipe-added-confirmation"}},[r("b-alert",{attrs:{variant:"success",show:""}},[e._v("Your recipe was added!")])],1):e._e()])],1)])]):r("div",[r("b-card",{staticClass:"text-center",attrs:{"bg-variant":"info","text-variant":"white"}},[r("b-card-text",[e._v(" To add a recipe- either register or login if you have already visited! ")])],1),r("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-text",[r("div",[r("h3",[e._v("Login")]),r("div",[r("label",{attrs:{for:"email"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInputData.email,expression:"userInputData.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:e.userInputData.email},on:{blur:function(t){return e.validateLogin()},input:function(t){t.target.composing||e.$set(e.userInputData,"email",t.target.value)}}})])]),e.errors&&"email"in e.errors?r("error-field",{attrs:{errors:e.errors.email}}):e._e(),r("div",[r("label",{attrs:{for:"password"}},[e._v("Password: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userInputData.password,expression:"userInputData.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:e.userInputData.password},on:{blur:function(t){return e.validateLogin()},input:function(t){t.target.composing||e.$set(e.userInputData,"password",t.target.value)}}})])]),e.errors&&"password"in e.errors?r("error-field",{attrs:{errors:e.errors.password}}):e._e(),r("b-button",{attrs:{"data-test":"login-button",variant:"primary"},on:{click:e.login}},[e._v(" Login ")]),r("transition",{attrs:{name:"fade"}},[e.failLogin?r("div",{staticClass:"alert",attrs:{"data-test":"login-confirmation"}},[r("b-alert",{attrs:{variant:"danger",show:""}},[e._v("Cannot Login- try again!")])],1):e._e()])],1)])],1),r("span"),r("b-col",{attrs:{md:"6"}},[r("b-card-text",[r("h3",[e._v("Register here first!")]),r("div",[r("label",{attrs:{for:"name2"}},[e._v("Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUserInputData.name2,expression:"newUserInputData.name2"}],attrs:{type:"text","data-test":"nameRegister-input"},domProps:{value:e.newUserInputData.name2},on:{blur:function(t){return e.validateRegister()},input:function(t){t.target.composing||e.$set(e.newUserInputData,"name2",t.target.value)}}})]),e.errors&&"name2"in e.errors?r("error-field",{attrs:{errors:e.errors.name2}}):e._e()],1),r("div",[r("label",{attrs:{for:"email2"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUserInputData.email2,expression:"newUserInputData.email2"}],attrs:{type:"text","data-test":"emailRegister-input"},domProps:{value:e.newUserInputData.email2},on:{blur:function(t){return e.validateRegister()},input:function(t){t.target.composing||e.$set(e.newUserInputData,"email2",t.target.value)}}})]),e.errors&&"email2"in e.errors?r("error-field",{attrs:{errors:e.errors.email2}}):e._e()],1),r("div",[r("label",{attrs:{for:"password2"}},[e._v("Password: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUserInputData.password2,expression:"newUserInputData.password2"}],attrs:{type:"password","data-test":"passwordRegister-input"},domProps:{value:e.newUserInputData.password2},on:{blur:function(t){return e.validateRegister()},input:function(t){t.target.composing||e.$set(e.newUserInputData,"password2",t.target.value)}}})]),e.errors&&"password2"in e.errors?r("error-field",{attrs:{errors:e.errors.password2}}):e._e()],1),r("b-button",{attrs:{"data-test":"register-button",variant:"primary"},on:{click:e.register}},[e._v(" Register ")]),r("transition",{attrs:{name:"fade"}},[e.failRegister?r("div",{staticClass:"alert",attrs:{"data-test":"register-confirmation"}},[r("b-alert",{attrs:{variant:"danger",show:""}},[e._v("Cannot Register- try again!")])],1):e._e()])],1)],1)],1)],1)],1)])},Z=[],ee=(r("a4d3"),r("e01a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.errors,(function(t,i){return r("li",{key:i,staticClass:"form-feedback-error"},[e._v(" "+e._s(t)+" ")])})),0)}),te=[],re={props:["errors"]},ie=re,ae=Object(p["a"])(ie,ee,te,!1,null,null,null),se=ae.exports,ne=r("1c4a"),oe=r.n(ne),ce={name:"add-recipe",components:{"error-field":se},data:function(){return{errors:null,registerErrors:null,showConfirmationMessage:!1,failLogin:!1,failRegister:!1,failRecipe:!1,recipe:{name:"",description:"",ingredients:"",directions:""},userInputData:{email:"",password:""},newUserInputData:{name2:"",email2:"",password2:""}}},computed:{user:function(){return this.$store.state.user}},methods:{validateRecipe:function(){var e=new oe.a(this.recipe,{name:"required|between:3,100",description:"required|min:100",ingredients:"required|min:100",directions:"required|min:100"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()},validateLogin:function(){var e=new oe.a(this.recipe,{email:"required",password:"required"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()},validateRegister:function(){var e=new oe.a(this.recipe,{name2:"required",email2:"required",password2:"required"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()},addRecipes:function(){var e=this;w.post("/recipe",this.recipe).then((function(t){t.data.errors?(e.errors=t.data.errors,e.failRecipe=!0,setTimeout((function(){return e.failRecipe=!1}),2e3)):(e.errors=null,e.showConfirmationMessage=!0,setTimeout((function(){return e.showConfirmationMessage=!1}),2e3),e.recipe.name="",e.recipe.description="",e.recipe.ingredients="",e.recipe.directions="",e.$store.dispatch("fetchRecipes"))}))},login:function(){var e=this;w.post("login",this.userInputData).then((function(t){t.data.authenticated?(e.$store.commit("setUser",t.data.user),console.log(t.data.user)):(e.errors=t.data.errors,e.failLogin=!0,setTimeout((function(){return e.failLogin=!1}),2e3))}))},register:function(){var e=this;w.post("register",this.newUserInputData).then((function(t){t.data.errors?(e.registerErrors=t.data.errors,e.failRegister=!0,setTimeout((function(){return e.failRegister=!1}),2e3)):e.$store.dispatch("authUser")}))},logout:function(){var e=this;w.post("logout").then((function(t){t.data.success&&e.$store.commit("setUser",null)})),this.userInputData={email:"",password:""},this.newUserInputData={name2:"",email2:"",password2:""}}},watch:{user:function(){this.addRecipes()}},mounted:function(){this.addRecipes()}},ue=ce,de=Object(p["a"])(ue,X,Z,!1,null,"639d87c8",null),pe=de.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"account-page"}},[e.user?r("div",[r("h2",{attrs:{"data-test":"welcome-message"}},[e._v("Hi, "+e._s(e.user.name)+"!")]),r("button",{attrs:{"data-test":"logout-button"},on:{click:e.logout}},[e._v("Logout")])]):r("div",{attrs:{id:"loginForm"}},[r("h2",[e._v("Login/Register")]),r("div",[r("label",[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:e.data.email},on:{input:function(t){t.target.composing||e.$set(e.data,"email",t.target.value)}}})])]),r("div",[r("label",[e._v("Password: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:e.data.password},on:{input:function(t){t.target.composing||e.$set(e.data,"password",t.target.value)}}})])]),r("b-button",{attrs:{"data-test":"login-button",variant:"primary"},on:{click:e.login}},[e._v(" Login ")]),e.errors?r("ul",e._l(e.errors,(function(t,i){return r("li",{key:i,staticClass:"error"},[e._v(" "+e._s(t)+" ")])})),0):e._e()],1)])},fe=[],me=(r("d81d"),{data:function(){return{data:{email:"",password:""},errors:null}},computed:{user:function(){return this.$store.state.user},recipes:function(){return this.$store.state.recipes}},methods:{validate:function(){var e=new oe.a(this.recipe,{email:"required|email",password:"required"});return this.errors=e.errors.all(),e.passes()},addRecipes:function(){var e=this;this.user&&w.post("recipe").then((function(t){e.recipes=t.data.recipe.map((function(t){return e.$store.getters.getRecipeById(t.id)}))}))},login:function(){var e=this;w.post("login",this.data).then((function(t){t.data.authenticated?e.$store.commit("setUser",t.data.user):e.errors=t.data.errors}))},logout:function(){var e=this;w.post("logout").then((function(t){t.data.success&&e.$store.commit("setUser",null)}))}},watch:{user:function(){this.addRecipes()}},mounted:function(){this.addRecipes()}}),ve=me,ge=Object(p["a"])(ve,le,fe,!1,null,null,null),he=ge.exports;i["default"].config.productionTip=!1,i["default"].use(m["a"]);var be=new m["a"]({mode:"history",routes:[{path:"/",component:k},{path:"/recipes",component:Q},{path:"/favorites",component:J},{path:"/recipes/new",component:pe},{path:"/account",component:he},{path:"/recipes/:id",component:T,props:!0}]});new i["default"]({store:y,router:be,render:function(e){return e(f)}}).$mount("#app")},"619a":function(e,t,r){e.exports=r.p+"img/3.482b786d.png"},"6dc4":function(e,t,r){e.exports=r.p+"img/newRecipe.e089eb58.png"},7237:function(e,t,r){e.exports=r.p+"img/pizza.632f2d0f.png"},"81e5":function(e,t,r){e.exports=r.p+"img/2.dab929ad.png"},"89e2":function(e,t,r){e.exports=r.p+"img/pancakes.3cee553c.png"},"97ca":function(e,t,r){e.exports=r.p+"img/6.e089eb58.png"},b070:function(e,t,r){e.exports=r.p+"img/dandy.6cab1b30.png"},b17b:function(e,t,r){e.exports=r.p+"img/ricotta.dab929ad.png"},c1c5:function(e,t,r){e.exports=r.p+"img/1.3cee553c.png"},e078:function(e,t,r){var i={"./1.png":"c1c5","./2.png":"81e5","./3.png":"619a","./4.png":"33b2","./5.png":"4660","./6.png":"97ca","./brownies.png":"02fa","./dandy.png":"b070","./newRecipe.png":"6dc4","./pancakes.png":"89e2","./pizza.png":"7237","./ricotta.png":"b17b","./smoothie.png":"15e3"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="e078"}});
//# sourceMappingURL=app.82d92158.js.map
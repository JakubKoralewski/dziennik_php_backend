(function(t){function e(e){for(var i,a,r=e[0],u=e[1],c=e[2],d=0,f=[];d<r.length;d++)a=r[d],o[a]&&f.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0041":function(t,e,n){},"00f3":function(t,e,n){"use strict";var i=n("f102"),o=n.n(i);o.a},"0365":function(t,e,n){"use strict";var i=n("20f3"),o=n.n(i);o.a},"058b":function(t,e,n){"use strict";var i=n("9e91"),o=n.n(i);o.a},1645:function(t,e,n){},"20f3":function(t,e,n){},"44fb":function(t,e,n){"use strict";var i=n("7100"),o=n.n(i);o.a},"4f67":function(t,e,n){"use strict";var i=n("1645"),o=n.n(i);o.a},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),o=n.n(i);o.a},"5e27":function(t,e,n){},"658a":function(t,e,n){"use strict";var i=n("e375"),o=n.n(i);o.a},7100:function(t,e,n){},7276:function(t,e,n){},"92e0":function(t,e,n){},"9e91":function(t,e,n){},b25c:function(t,e,n){"use strict";var i=n("92e0"),o=n.n(i);o.a},b7fb:function(t,e,n){},c527:function(t,e,n){"use strict";var i=n("0041"),o=n.n(i);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide"}},[n("router-view",{staticClass:"router-view"})],1)],1)},s=[],a=i["a"].extend({}),r=a,u=(n("5c0b"),n("2877")),c=Object(u["a"])(r,o,s,!1,null,null,null),l=c.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unauthorized"},[n("div",{attrs:{id:"cover"}}),n("img",{staticClass:"bg noselect",attrs:{src:"hogwarts.jpg",unselectable:"on",draggable:"false"}}),n("login",{staticClass:"login",attrs:{"prop-logo":"logo.png",name:"Harwart"}})],1)},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login-component"}},[n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"login"}},[n("div",{attrs:{id:"logo"}},[t._v(t._s(t.propName))]),n("p",{attrs:{id:"subtitle"}},[t._v("Dziennik elektroniczny.")]),n("p",{attrs:{id:"copyright"}},[t._v("© 2019 Jakub Koralewski")]),n("hr"),n("div",{staticClass:"login-inputs",attrs:{id:"login-container"}},[t._v("\n\t\t\t\tLogin:\n\t\t\t\t"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{id:"login",type:"login",placeholder:"Twój login"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),n("div",{staticClass:"login-inputs",attrs:{id:"haslo-container"}},[t._v("\n\t\t\t\tHasło:\n\t\t\t\t"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.haslo,expression:"haslo"}],attrs:{id:"haslo",type:"password",placeholder:"Twoje hasło"},domProps:{value:t.haslo},on:{input:function(e){e.target.composing||(t.haslo=e.target.value)}}})]),n("input",{attrs:{id:"loginButton",type:"button",value:"Zaloguj się"},on:{click:function(e){return t.loginRequest()}}})])])])},g=[],v=n("f499"),m=n.n(v),w=n("774e"),b=n.n(w),S=(n("ac6a"),"https://dziennik-php.herokuapp.com/"),y=i["a"].extend({name:"Login",props:{propName:{type:String,required:!1,default:"Harwart"},propLogo:{type:String,required:!1,default:"logo.png"}},data:function(){return{login:"",haslo:"",loginButton:null,loginInput:null,hasloInput:null,wasLoginSuccessful:!1}},mounted:function(){var t=this;this.loginButton=document.querySelector("#loginButton"),this.loginInput=document.querySelector("input#login"),this.hasloInput=document.querySelector("input#haslo"),b()(document.querySelectorAll("#login, #haslo")).forEach(function(e){e.addEventListener("keyup",function(e){"Enter"===e.key&&(t.loginButton.click(),e.preventDefault())})})},methods:{loginRequest:function(){var t=this,e=this.credentialsValid([this.loginInput,this.hasloInput]);if(0!=e)return console.log("Found invalid inputs",e),this.wasLoginSuccessful||[this.loginInput,this.hasloInput].forEach(function(t){return t.classList.remove("login-failed")}),void this.loginError(e);console.log("login: ".concat(this.login,"\nhaslo: ").concat(this.haslo)),fetch("".concat(S,"api/login.php"),{method:"POST",body:m()({login:this.login,haslo:this.haslo}),headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}}).then(function(e){return!0!==e.ok&&t.loginError([t.loginInput,t.hasloInput]),e.json()}).then(function(e){console.log(e),!0===e.status&&(console.log("zalogowano."),t.loginSuccessful())}).catch(function(t){console.error(t)})},loginSuccessful:function(){this.wasLoginSuccessful=!0,[this.loginInput,this.hasloInput].forEach(function(t){return t.classList.remove("login-failed")}),this.$router.push("zalogowany")},loginError:function(t){this.wasLoginSuccessful=!1,t.forEach(function(t){t.classList.add("login-failed")})},credentialsValid:function(t){var e=t.map(function(t){return 0==!!t.value?t:null}).filter(function(t){return!!t});return null==e?(console.log("credentials valid"),!0):e}}}),k=y,x=(n("4f67"),Object(u["a"])(k,p,g,!1,null,"cbf56c28",null)),j=x.exports,C=i["a"].extend({components:{Login:j}}),O=C,z=(n("c527"),n("cf7e"),Object(u["a"])(O,f,h,!1,null,"d80d0c66",null)),_=z.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"authorized"}},[t.showNewStudentDialog?n("NewStudent",{attrs:{id:"new-student"},on:{newStudentAdded:function(e){t.showNewStudentDialog=!1}}}):t._e(),n("AddButton",{class:{"add-dialog-visible":t.showNewStudentDialog},attrs:{id:"add-button"},on:{addButtonClick:function(e){return t.addButtonClick()}}}),n("div",{class:{visible:t.showNewStudentDialog,"actually-hidden":t.coverActuallyHidden},attrs:{id:"cover"},on:{click:function(e){return t.coverClick()}}}),n("div",{staticClass:"blur-container",class:{"add-dialog-visible":t.showNewStudentDialog}},[n("SideBar",{attrs:{id:"nav-bar"}}),n("div",{attrs:{id:"content"}},[n("NavTitle",{attrs:{id:"nav-title"}}),t.students?n("div",{attrs:{id:"students"}},t._l(t.students,function(t){return n("Student",{key:t.id,class:{invisible:!t.visible},attrs:{"initial-student":t}})}),1):t._e()],1)],1)],1)},T=[],N=(n("96cf"),n("3b8d")),E=n("db0c"),B=n.n(E),V=n("cebc"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav",class:{"SideBar-hidden":!t.sideBarVisible}},[n("div",{attrs:{id:"hide"}},[n("i",{staticClass:"fas fa-arrow-left",class:{"SideBar-hidden":!t.sideBarVisible},on:{click:function(e){return t.SideBarToggle()}}})]),n("div",{attrs:{id:"o-mnie"}},[t._v("O mnie")]),n("div",{attrs:{id:"szkola"}},[t._v("Szkoła")])])},$=[],P=n("5176"),D=n.n(P),L=n("2f62"),R=800,I=i["a"].extend({name:"SideBar",data:function(){return{elements:{}}},computed:Object(V["a"])({},Object(L["d"])(["sideBarVisible"])),beforeMount:function(){screen.width<R&&this.sideBarVisibilityChange(!1)},mounted:function(){var t={SideBar:document.querySelector("div.nav")};this.elements=D()(this.elements,t)},methods:Object(V["a"])({},Object(L["c"])(["sideBarVisibilityChange"]),{SideBarToggle:function(t,e){this.sideBarVisibilityChange(!this.sideBarVisible)},showArrow:function(t){console.log(t)}})}),H=I,q=(n("cd5a"),Object(u["a"])(H,M,$,!1,null,"1ce0bd2d",null)),U=q.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-title"},[t._v("\n\t"+t._s(t.title)+"\n\t"),n("Search",{staticClass:"search"})],1)},K=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"Wyszukaj ucznia, np. 'xd'",spellcheck:"false"},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},function(e){return t.inputChanged()}]}})])},Z=[],G=i["a"].extend({name:"Search",data:function(){return{searchText:""}},methods:Object(V["a"])({},Object(L["b"])(["searchStudents","showAllStudents"]),{inputChanged:function(){0==!!this.searchText&&this.showAllStudents(),this.searchStudents(this.searchText)}})}),W=G,Q=(n("b25c"),Object(u["a"])(W,J,Z,!1,null,"65ff1fb2",null)),X=Q.exports,Y=i["a"].extend({name:"NavTitle",components:{Search:X},props:{title:{default:"Uczniowie"}}}),tt=Y,et=(n("44fb"),Object(u["a"])(tt,F,K,!1,null,"eeceb6e6",null)),nt=et.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"student",class:{"edit-mode-active":t.editMode}},[n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"name"}},[n("div",{attrs:{id:"imie",contenteditable:t.editMode,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",title:"Imię"},domProps:{innerHTML:t._s(t.student.imie)},on:{blur:t.editAnyText}}),n("div",{attrs:{id:"nazwisko",contenteditable:t.editMode,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",title:"Nazwisko"},domProps:{innerHTML:t._s(t.student.nazwisko)},on:{blur:t.editAnyText}})]),n("div",{attrs:{id:"tools"}},[n("div",{class:{"edit-mode-active":t.editMode},attrs:{id:"edit-mode-tools"}},[n("i",{staticClass:"fas fa-times",attrs:{id:"edit-cancel",title:"Anuluj edycję"},on:{click:t.cancelEdit}}),n("i",{staticClass:"fas fa-check",attrs:{id:"edit-save",title:"Zapisz edycję"},on:{click:t.saveEdit}})]),n("i",{staticClass:"fas fa-edit",class:{"edit-mode-active":t.editMode},attrs:{title:"Edytuj"},on:{click:t.toggleEditMode}}),n("i",{staticClass:"fas fa-trash-alt",attrs:{title:"Usuń"},on:{click:t.deleteStudent}})])]),n("div",{attrs:{id:"content"}},[n("div",[t._v("\r\n\t\t\tKlasa:\r\n\t\t\t"),n("div",{staticClass:"info",attrs:{id:"klasa",contenteditable:t.editMode},domProps:{innerHTML:t._s(t.student.klasa)},on:{blur:t.editAnyText}})]),n("div",[t._v("\r\n\t\t\tTelefon:\r\n\t\t\t"),n("div",{staticClass:"info",attrs:{id:"telefon",contenteditable:t.editMode},domProps:{innerHTML:t._s(t.student.telefon)},on:{blur:t.editAnyText}})])])])},ot=[],st=n("a4bb"),at=n.n(st),rt={imie:"Imię",nazwisko:"Nazwisko",klasa:"Klasa",telefon:"Telefon"},ut={methods:{propertiesValid:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!1,i=at()(t),o=0;o<i.length;o++){var s=i[o],a=t[s];if(0==!!a){n=!0,e&&alert("".concat(rt[s]," niepoprawne."));break}if("telefon"===s&&isNaN(a)){n=!0,e&&alert("".concat(rt[s]," powinien być numerem."));break}}return!n}}},ct=i["a"].extend({name:"Student",mixins:[ut],props:{initialStudent:{type:Object,required:!0}},data:function(){return{editMode:!1,backup:{},student:this.initialStudent}},created:function(){this.student=this.initialStudent},methods:Object(V["a"])({},Object(L["b"])({storeDeleteStudent:"deleteStudent",storeEditStudent:"editStudent"}),{deleteStudent:function(){var t=confirm("Na pewno chcesz usunąć ucznia: ".concat(this.student.imie," ").concat(this.student.nazwisko,"?"));t&&(console.log("deleting student nr. ".concat(this.student.id)),this.storeDeleteStudent(this.student.id))},toggleEditMode:function(){!1===this.editMode?(this.backup=D()({},this.student),this.editMode=!0):this.editMode=!1},restoreBackup:function(){this.student=this.backup,this.backup={}},cancelEdit:function(){console.log("cancelEdit()"),this.editMode=!1,this.restoreBackup()},saveEdit:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(){var e,n,i,o,s,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(console.log("saveEdit()"),e={},n=!1,i=at()(this.student),o=0;o<i.length;o++)s=i[o],this.student[s]!==this.backup[s]&&(e[s]=this.student[s],n=!0);if(n){t.next=8;break}return alert("Żadna wartość nie została zmieniona."),t.abrupt("return");case 8:if(a=this.propertiesValid(e),a){t.next=11;break}return t.abrupt("return");case 11:return console.log("Found new properties!",e),this.$el.classList.add("editing-in-progress"),t.next=15,this.storeEditStudent({id:this.student.id,new_properties:e});case 15:if(r=t.sent,this.$el.classList.remove("editing-in-progress"),0!=r){t.next=20;break}return this.restoreBackup(),t.abrupt("return");case 20:this.editMode=!1,console.log("editResponse",r);case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),editAnyText:function(t){this.student[t.target.id]=t.target.innerText,console.log(this.student)}})}),lt=ct,dt=(n("0365"),Object(u["a"])(lt,it,ot,!1,null,null,null)),ft=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-student student"},[n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"name"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.imie,expression:"newStudent.imie"}],attrs:{type:"text",id:"imie",placeholder:"Imię",autofocus:""},domProps:{value:t.newStudent.imie},on:{input:function(e){e.target.composing||t.$set(t.newStudent,"imie",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.nazwisko,expression:"newStudent.nazwisko"}],attrs:{type:"text",id:"nazwisko",placeholder:"Nazwisko"},domProps:{value:t.newStudent.nazwisko},on:{input:function(e){e.target.composing||t.$set(t.newStudent,"nazwisko",e.target.value)}}})])]),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"klasa"}},[t._v("\n\t\t\tKlasa:\n\t\t\t"),n("span",{staticClass:"info"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.klasa,expression:"newStudent.klasa"}],attrs:{type:"text",id:"klasa",placeholder:"3d"},domProps:{value:t.newStudent.klasa},on:{input:function(e){e.target.composing||t.$set(t.newStudent,"klasa",e.target.value)}}})])]),n("div",{attrs:{id:"telefon"}},[t._v("\n\t\t\tTelefon:\n\t\t\t"),n("span",{staticClass:"info"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.telefon,expression:"newStudent.telefon"}],attrs:{type:"text",id:"telefon",placeholder:"666666666"},domProps:{value:t.newStudent.telefon},on:{input:function(e){e.target.composing||t.$set(t.newStudent,"telefon",e.target.value)}}})])]),n("div",{attrs:{id:"checkmark"},on:{click:t.addUser}},[n("i",{staticClass:"fas fa-check"})])])])},pt=[],gt=i["a"].extend({name:"NewStudent",mixins:[ut],data:function(){return{newStudent:{imie:"",nazwisko:"",klasa:"",telefon:""},allPropertiesValid:!1}},watch:{newStudent:{handler:function(t,e){this.allPropertiesValid=this.propertiesValid(this.newStudent,!1);var n=this.allPropertiesValid?"rgb(12, 237, 0)":"red";this.$el.setAttribute("style","--new-student-checkmark-color: ".concat(n)),console.log(this.$el)},deep:!0}},methods:Object(V["a"])({},Object(L["b"])(["addStudent"]),{addUser:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.propertiesValid(this.newStudent),e){t.next=3;break}return t.abrupt("return");case 3:return this.$emit("newStudentAdded"),t.next=6,this.addStudent(this.newStudent);case 6:t.sent;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})}),vt=gt,mt=(n("058b"),Object(u["a"])(vt,ht,pt,!1,null,null,null)),wt=mt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-button",on:{click:function(e){return t.$emit("addButtonClick")}}},[n("i",{staticClass:"fas fa-user-plus"})])},St=[],yt=i["a"].extend({name:"AddButton"}),kt=yt,xt=(n("658a"),Object(u["a"])(kt,bt,St,!1,null,"e65e7eea",null)),jt=xt.exports,Ct="#dodaj-ucznia",Ot=i["a"].extend({name:"Authorized",components:{SideBar:U,NavTitle:nt,AddButton:jt,Student:ft,NewStudent:wt},watch:{$route:function(t,e){var n=this.$router.currentRoute,i=n.hash;console.log("currentRoute:",n,"newHash: ".concat(i)),this.showNewStudentDialog=i===Ct}},data:function(){return{showNewStudentDialog:!1,coverActuallyHidden:!0}},computed:Object(V["a"])({},Object(L["d"])(["students"]),{visibleStudents:function(){var t=B()(this.students);return console.groupCollapsed("visibleStudents"),console.log("students: ",t),console.groupEnd(),t.filter(function(t){return t.visible})}}),created:function(){this.$route.hash===Ct&&(console.log("route hash is add-student-hash-path"),this.toggleNewStudentDialog())},beforeMount:function(){console.log(screen.width)},methods:Object(V["a"])({},Object(L["b"])(["loadStudents"]),{toggleNewStudentDialog:function(){!1===this.showNewStudentDialog?(history.pushState("","Dodaj ucznia",Ct),this.coverActuallyHidden=!1):(console.log("Making the dialog disappear"),this.$router.push({name:"Authorized"})),this.showNewStudentDialog=!this.showNewStudentDialog},addButtonClick:function(){this.toggleNewStudentDialog()},coverClick:function(){var t=this;console.log("coverClick"),this.toggleNewStudentDialog(),!1===this.showNewStudentDialog&&setTimeout(function(){console.log("running setTimeout"),t.coverActuallyHidden=!0},100)}}),mounted:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadStudents();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),zt=Ot,_t=(n("00f3"),Object(u["a"])(zt,A,T,!1,null,"f5b93d8c",null)),At=_t.exports;i["a"].use(d["a"]);var Tt=new d["a"]({mode:"history",base:"",routes:[{path:"/",name:"Unauthorized",component:_},{path:"/zalogowany",name:"Authorized",component:At}]}),Nt=n("e814"),Et=n.n(Nt),Bt=(n("55dd"),n("6762"),n("2fdb"),n("6b54"),n("5d73")),Vt=n.n(Bt),Mt=n("0e44");function $t(t){if(0===t.length)return 0;if(1===t.length)return 0===t[0]?1:0;if(2===t.length)return t[0]>0?0:1==t[1]?2:1;for(var e=1;e<t.length;e++)if(t[e]-t[e-1]!=1){var n=t[e-1];return console.log("firstValue:",n),n+1}return t[0]>0?0:t[t.length-1]+1}i["a"].use(L["a"]);var Pt=new L["a"].Store({state:{students:{},sideBarVisible:!1},plugins:[Object(Mt["a"])({paths:["sideBarVisible"]})],mutations:{add:function(t,e){if(e.constructor===Array){console.log("Adding array of students.");var n=!0,o=!1,s=void 0;try{for(var a,r=Vt()(e);!(n=(a=r.next()).done);n=!0){var u=a.value;u.visible=!0,i["a"].set(t.students,u.id,u)}}catch(c){o=!0,s=c}finally{try{n||null==r.return||r.return()}finally{if(o)throw s}}}else e.hasOwnProperty("id")?(console.log("Adding single student object."),e.visible=!0,i["a"].set(t.students,e.id,e)):console.error("Store `add` mutation neither array or an object containing `id` property.")},sideBarVisibilityChange:function(t,e){t.sideBarVisible=e},delete:function(t,e){i["a"].delete(t.students,e)},changeVisibility:function(t,e){i["a"].set(t.students[e.id],"visible",e.newVisibility),console.log(t.students[e.id])}},actions:{loadStudents:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,i=e.commit,t.abrupt("return",fetch("".concat(S,"api/uczniowie.php"),{method:"GET",headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}}).then(function(t){return!0!==t.ok&&console.error("Nie udało się zdobyć uczniów."),t.json()}).then(function(t){return console.log("commit('add',",t,");"),i("add",t),console.log("state.students",n.students),n.students}).catch(function(t){console.error(t)}));case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),searchStudents:function(t,e){var n=t.state,i=t.commit;console.log("searching students for ".concat(e)),e=e.toLowerCase(),B()(n.students).forEach(function(t){console.log("student",t);for(var n=B()(t),o=0;o<n.length;o++){var s=n[o];if("boolean"!==typeof s)if(isNaN(s)){if(s.toLowerCase().includes(e)){i("changeVisibility",{id:t.id,newVisibility:!0});break}i("changeVisibility",{id:t.id,newVisibility:!1})}else s=s.toString()}}),console.log("state after search: ",n.students)},showAllStudents:function(t){var e=t.state,n=t.commit;B()(e.students).forEach(function(t){n("changeVisibility",{id:t.id,newVisibility:!0})})},addStudent:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e,n){var i,o,s,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,o=e.commit,s=at()(i.students).map(function(t){return Et()(t,10)}).sort(function(t,e){return t-e}),a=$t(s),r=m()(D()({id:a.toString()},n)),console.log("requestBody:",r),t.abrupt("return",fetch("".concat(S,"api/uczniowie.php"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"},body:r}).then(function(t){if(!0===t.ok)return t.json();console.error("Nie udało się dodać ucznia.")}).then(function(t){return console.log("commit('add',",t,");"),o("add",t.uczen),console.log("state.students",i.students),i.students}).catch(function(t){console.error(t)}));case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),deleteStudent:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e,n){var i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,o=e.commit,t.abrupt("return",fetch("".concat(S,"api/uczniowie.php"),{method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"},body:m()({id:n})}).then(function(t){return!0!==t.ok&&console.error("Nie udało się usunąć ucznia."),t.json()}).then(function(t){return console.log("commit('add',",t,");"),o("delete",t.uczen),console.log("state.students",i.students),i.students}).catch(function(t){console.error(t)}));case 2:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),editStudent:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.state,e.commit,t.abrupt("return",fetch("".concat(S,"api/uczniowie.php"),{method:"PUT",headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"},body:m()({id:Et()(n.id,10),new_data:n.new_properties})}).then(function(t){return!0!==t.ok&&console.error("Nie udało się edytować ucznia."),t.json()}).catch(function(t){console.error(t)}));case 2:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},getters:{}});i["a"].config.productionTip=!1,new i["a"]({router:Tt,store:Pt,render:function(t){return t(l)}}).$mount("#app")},cd5a:function(t,e,n){"use strict";var i=n("7276"),o=n.n(i);o.a},cf7e:function(t,e,n){"use strict";var i=n("b7fb"),o=n.n(i);o.a},e375:function(t,e,n){},f102:function(t,e,n){}});
//# sourceMappingURL=app.50b98ba3.js.map
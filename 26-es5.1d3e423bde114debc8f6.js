function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{sfra:function(e,n,t){"use strict";t.r(n),t.d(n,"SingupPageModule",(function(){return m}));var o,i,r,a=t("ofXK"),s=t("3Pt+"),c=t("TEn/"),l=t("tyNb"),b=t("mrSG"),u=t("fXoL"),p=t("lGQG"),f=[{path:"",component:(o=function(){function e(n,t,o){_classCallCheck(this,e),this.authSvc=n,this.router=t,this.formBuilder=o,this.SignupForm=o.group({email:["",s.l.required],password:["",s.l.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"signup",value:function(e){return Object(b.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={email:e.email,password:e.password},n.next=3,this.authSvc.signup(t);case 3:if(!n.sent){n.next=7;break}console.log("Creado exitosamente!"),this.router.navigate(["/login"]),n.next=8;break;case 7:console.log("Error de registro");case 8:case"end":return n.stop()}}),n,this)})))}},{key:"navigateToTypeOfLogin",value:function(){this.router.navigate(["type-of-login"])}}]),e}(),o.\u0275fac=function(e){return new(e||o)(u.Kb(p.a),u.Kb(l.g),u.Kb(s.b))},o.\u0275cmp=u.Eb({type:o,selectors:[["app-singup"]],decls:26,vars:2,consts:[["color","secondary",1,"center"],["slot","start"],["defaultHref","/type-of-login"],["size-lg","12","size-md","12","size-sm","12","size","12"],[3,"formGroup","ngSubmit"],["color","primary","position","stacked"],["type","text","formControlName","email"],["type","password","formControlName","password"],["type","submit","expand","block","shape","round","color","success",3,"disabled"]],template:function(e,n){1&e&&(u.Nb(0,"ion-header"),u.Nb(1,"ion-toolbar",0),u.Nb(2,"ion-buttons",1),u.Lb(3,"ion-back-button",2),u.Mb(),u.Nb(4,"ion-row"),u.Nb(5,"ion-col",3),u.Nb(6,"ion-title"),u.gc(7," Registrarse como cliente"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(8,"ion-content"),u.Nb(9,"ion-row"),u.Nb(10,"ion-card"),u.Nb(11,"ion-card-header"),u.Nb(12,"ion-card-title"),u.gc(13,"Registrate como cliente para encontrar profesionales NICARAGUENSES dispuestos a ofrecerte un amplio ramo de servicios multiple! "),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(14,"form",4),u.Vb("ngSubmit",(function(){return n.signup(n.SignupForm.value)})),u.Nb(15,"ion-list"),u.Nb(16,"ion-item"),u.Nb(17,"ion-label",5),u.gc(18,"email"),u.Mb(),u.Lb(19,"ion-input",6),u.Mb(),u.Nb(20,"ion-item"),u.Nb(21,"ion-label",5),u.gc(22,"Password"),u.Mb(),u.Lb(23,"ion-input",7),u.Mb(),u.Mb(),u.Nb(24,"ion-button",8),u.gc(25,"Registrarse"),u.Mb(),u.Mb(),u.Mb()),2&e&&(u.Ab(14),u.ac("formGroup",n.SignupForm),u.Ab(10),u.ac("disabled",!n.SignupForm.valid))},directives:[c.n,c.G,c.e,c.b,c.c,c.u,c.i,c.F,c.j,c.f,c.g,c.h,s.m,s.i,s.d,c.s,c.q,c.r,c.p,c.N,s.h,s.c,c.d],styles:[".center[_ngcontent-%COMP%], .contcenter[_ngcontent-%COMP%]{text-align:center}.contcenter[_ngcontent-%COMP%]{padding-top:50px}.btncenter[_ngcontent-%COMP%]{width:100%;display:block}ion-title[_ngcontent-%COMP%]{color:#fff;font-size:17px}"]}),o)}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:i}),i.\u0275inj=u.Hb({factory:function(e){return new(e||i)},imports:[[l.i.forChild(f)],l.i]}),i),g=t("zon2"),m=((r=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:r}),r.\u0275inj=u.Hb({factory:function(e){return new(e||r)},imports:[[a.b,s.e,s.k,c.H,g.a,d]]}),r)}}]);
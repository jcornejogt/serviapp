(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{xCeV:function(o,t,n){"use strict";n.r(t),n.d(t,"LoginPageModule",(function(){return m}));var e=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("fXoL"),b=n("lGQG"),l=n("3htr");const u=[{path:"",component:(()=>{class o{constructor(o,t,n,e){this.authSvc=o,this.router=t,this.formBuilder=n,this.toastController=e,this.LoginForm=n.group({email:["",i.k.required],password:["",i.k.required]})}ngOnInit(){}login(o){return Object(s.__awaiter)(this,void 0,void 0,(function*(){let t={email:o.email,password:o.password};1!=(yield this.authSvc.login(t))?(console.log("Logueado exitosamente!"),this.router.navigateByUrl("/home")):this.openToast("Email Inv\xe1lido")}))}openToast(o){return Object(s.__awaiter)(this,void 0,void 0,(function*(){const t=yield this.toastController.create({message:o,duration:2e3,animated:!0,color:"danger"});yield t.present()}))}}return o.\u0275fac=function(t){return new(t||o)(c.Kb(b.a),c.Kb(a.g),c.Kb(i.a),c.Kb(r.X))},o.\u0275cmp=c.Eb({type:o,selectors:[["app-login"]],decls:27,vars:2,consts:[["color","primary",1,"center"],["slot","start"],["defaultHref","/type-of-login"],[1,"contcenter"],[3,"formGroup","ngSubmit"],["position","stacked"],["type","text","formControlName","email"],["type","password","formControlName","password"],["href","/type-of-login"],["type","submit","expand","block","shape","round","color","success",3,"disabled"]],template:function(o,t){1&o&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar",0),c.Nb(2,"ion-buttons",1),c.Lb(3,"ion-back-button",2),c.Mb(),c.Nb(4,"ion-title"),c.lc(5,"Iniciar Sesion"),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"ion-content"),c.Nb(7,"div",3),c.Lb(8,"app-logo"),c.Nb(9,"h3"),c.lc(10,"Inicia Sesion en MultiServiciosApp"),c.Mb(),c.Mb(),c.Nb(11,"form",4),c.Vb("ngSubmit",(function(){return t.login(t.LoginForm.value)})),c.Nb(12,"ion-list"),c.Nb(13,"ion-item"),c.Nb(14,"ion-label",5),c.lc(15,"email"),c.Mb(),c.Lb(16,"ion-input",6),c.Mb(),c.Nb(17,"ion-item"),c.Nb(18,"ion-label",5),c.lc(19,"Paassword"),c.Mb(),c.Lb(20,"ion-input",7),c.Mb(),c.Nb(21,"ion-item"),c.lc(22," No tienes una cuenta?\xa0\xa0 "),c.Nb(23,"a",8),c.lc(24,"Registrate"),c.Mb(),c.Mb(),c.Nb(25,"ion-button",9),c.lc(26,"Iniciar Sesion"),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&o&&(c.Ab(11),c.ac("formGroup",t.LoginForm),c.Ab(14),c.ac("disabled",!t.LoginForm.valid))},directives:[r.r,r.P,r.f,r.c,r.d,r.O,r.m,l.a,i.l,i.h,i.c,r.A,r.w,r.z,r.v,r.W,i.g,i.b,r.e],styles:[".center[_ngcontent-%COMP%], .contcenter[_ngcontent-%COMP%]{text-align:center}.contcenter[_ngcontent-%COMP%]{padding-top:50px}"]}),o})()}];let d=(()=>{class o{}return o.\u0275mod=c.Ib({type:o}),o.\u0275inj=c.Hb({factory:function(t){return new(t||o)},imports:[[a.i.forChild(u)],a.i]}),o})();var p=n("zon2");let m=(()=>{class o{}return o.\u0275mod=c.Ib({type:o}),o.\u0275inj=c.Hb({factory:function(t){return new(t||o)},imports:[[e.b,i.d,i.j,r.R,p.a,d]]}),o})()}}]);
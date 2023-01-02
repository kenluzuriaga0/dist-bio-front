"use strict";(self.webpackChunkbiolabo_front=self.webpackChunkbiolabo_front||[]).push([[560],{2560:(Q,m,l)=>{l.r(m),l.d(m,{ConfigModule:()=>O});var f=l(6895),C=l(4796),a=l(6773),e=l(8256),d=l(805),Z=l(615);function T(o,r){1&o&&e._UZ(0,"img",2),2&o&&e.Q6J("routerLink","/home")}let S=(()=>{class o{constructor(){}ngOnInit(){this.items=[{label:"Sucursal",styleClass:"menucus",routerLink:["/config/sucursal"]},{label:"Servicios",styleClass:"menucus",items:[{label:"Servicios",icon:"pi pi-fw pi-book",routerLink:["/config/servicio"]},{label:"Grupos",icon:"pi pi-fw pi-book"},{label:"Servicios Traducidos",routerLink:["/config/servTraducidos"],icon:"pi pi-fw pi-book"},{label:"Perfiles",routerLink:["/config/perfil"],icon:"pi pi-fw pi-book"}]},{label:"Ajustes",styleClass:"menucus",items:[{label:"Usuarios",icon:"pi pi-fw pi-book",routerLink:["/config/usuario"]},{label:"Listas Programadas",icon:"pi pi-fw pi-book",routerLink:["/config/listasProgramadas"]},{label:"Ciudades",routerLink:["/config/ciudad"],icon:"pi pi-fw pi-book"}]}]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-navbar-config"]],decls:2,vars:1,consts:[["styleClass","bg-indigo-100 text-white",3,"model"],["pTemplate","start"],["id","logoNavbar","src","assets/img/logotipo.png","height","40",1,"mr-2",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"p-menubar",0),e.YNc(1,T,1,1,"ng-template",1),e.qZA()),2&t&&e.Q6J("model",n.items)},dependencies:[d.jx,Z.nm,a.rH]}),o})(),A=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-config-page"]],decls:2,vars:0,template:function(t,n){1&t&&e._UZ(0,"app-navbar-config")(1,"router-outlet")},dependencies:[a.lC,S]}),o})();var M=l(5226),c=l.n(M),x=l(5760),_=l(5593),v=l(1740),u=l(433),p=l(2336),h=l(2210),b=l(7913);function q(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),i=e.MAs(45);return e.KtG(s.clear(i))}),e.qZA(),e.TgZ(2,"span",24),e._UZ(3,"i",25),e.TgZ(4,"input",26,27),e.NdJ("input",function(){e.CHM(t);const s=e.MAs(5);e.oxw();const i=e.MAs(45);return e.KtG(i.filterGlobal(s.value,"contains"))}),e.qZA()()()}}function U(o,r){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Id"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Cod Externo"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Subgrupo"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"-"),e.qZA()())}function N(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr",28)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"button",29),e.NdJ("click",function(){const i=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.selectBioServicio(i))}),e.qZA()()()}if(2&o){const t=r.$implicit;e.xp6(2),e.Oqu(t.idServicio),e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.codExterno1),e.xp6(2),e.Oqu(t.idSubGrupo.nombre)}}const J=function(){return["nombre","codExterno1","idSubGrupo.nombre"]};let y=(()=>{class o{constructor(t){this._servicioService=t,this.servicio={},this.optionsInforme=[{nombre:"INDIVIDUAL",code:"IND"},{nombre:"GRUPAL",code:"GRP"},{nombre:"SIN INFORME",code:"SNF"}],this.optionsSexo=[{nombre:"AMBOS",code:"A"},{nombre:"MASCULINO",code:"M"},{nombre:"FEMENINO",code:"F"}]}ngOnInit(){this.init(),this._servicioService.getAllBioServicios().subscribe(t=>{this.servicios=t}),this._servicioService.getAllSubGrupos().subscribe(t=>{this.subGrupos=t})}init(){this.servicio.idServicio=void 0,this.servicio.nombre="",this.servicio.codExterno1="",this.servicio.estado=!0}guardarBioServicio(){""!=this.servicio.nombre&&""!=this.servicio.codExterno1?this._servicioService.saveBioServicio(this.servicio).subscribe({next:t=>{this.servicio=t,this._servicioService.getAllBioServicios().subscribe(n=>this.servicios=n),c().fire({icon:"success",title:"Mensaje de \xe9xito",text:"Guardado con \xe9xito"}),this.limpiarBioServicio()},error:t=>{c().fire({icon:"error",title:"Mensaje de error",text:"Ocurrio un error"})}}):c().fire({icon:"error",title:"Mensaje de error",text:"Complete los campos obligatorios"})}limpiarBioServicio(){this.servicio={},this.init()}selectBioServicio(t){let n={...t};this.servicio=n}clear(t){t.clear()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(x.B))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-servicios-page"]],decls:49,vars:14,consts:[[1,"bg-teal-50","mx-3","my-2","border-round","p-4","shadow-2"],[1,"text-3xl","font-medium","text-900","mb-3"],[1,"font-medium","text-600","mb-1"],[1,"grid"],[1,"col-12","md:col-10"],[1,"col-12","md:col-2"],["type","button","pButton","",1,"p-button-outlined","px-6","py-2",3,"click"],[1,"col-6","md:col-3"],[1,"mb-2"],["type","text","pInputText","",1,"text-sm","w-full","mb-3",2,"text-transform","uppercase",3,"ngModel","ngModelChange"],["styleClass","w-full","optionLabel","nombre",3,"options","ngModel","ngModelChange"],["styleClass","w-full","optionValue","code","optionLabel","nombre",3,"options","ngModel","ngModelChange"],[1,"col-12","md:col-3"],["type","text","pInputText","",1,"text-sm","w-full","mb-3",2,"text-transform","uppercase",3,"maxlength","ngModel","ngModelChange"],[1,"col-6"],[3,"ngModel","ngModelChange"],["type","button",1,"btnCustomized","px-8","py-2",3,"click"],["styleClass","p-datatable-sm","scrollHeight","550px","responsiveLayout","scroll",3,"value","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],["pButton","","label","Limpiar","icon","pi pi-filter-slash",1,"p-button-outlined",2,"font-size","75%",3,"click"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",2,"font-size","75%",3,"input"],["tt",""],[1,"fila"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-text",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Servicios"),e.qZA(),e.TgZ(3,"div",2),e._uU(4,"Mantenedor de servicios m\xe9dicos ocupacionales"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return n.limpiarBioServicio()}),e._uU(9,"Limpiar"),e.qZA()()(),e.TgZ(10,"div",3)(11,"div",7)(12,"h5",8),e._uU(13,"Nombre *"),e.qZA(),e.TgZ(14,"input",9),e.NdJ("ngModelChange",function(i){return n.servicio.nombre=i}),e.qZA()(),e.TgZ(15,"div",7)(16,"h5",8),e._uU(17,"Grupo *"),e.qZA(),e.TgZ(18,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return n.servicio.idSubGrupo=i}),e.qZA()(),e.TgZ(19,"div",7)(20,"h5",8),e._uU(21,"Informe *"),e.qZA(),e.TgZ(22,"p-dropdown",11),e.NdJ("ngModelChange",function(i){return n.servicio.informe=i}),e.qZA()(),e.TgZ(23,"div",7)(24,"h5",8),e._uU(25,"Aplica sexo"),e.qZA(),e.TgZ(26,"p-dropdown",11),e.NdJ("ngModelChange",function(i){return n.servicio.sexoAplica=i}),e.qZA()(),e.TgZ(27,"div",12)(28,"h5",8),e._uU(29,"Cod Externo *"),e.qZA(),e.TgZ(30,"input",13),e.NdJ("ngModelChange",function(i){return n.servicio.codExterno1=i}),e.qZA()(),e.TgZ(31,"div",14)(32,"h5",8),e._uU(33,"Requiere signos vitales"),e.qZA(),e.TgZ(34,"p-inputSwitch",15),e.NdJ("ngModelChange",function(i){return n.servicio.reqSv=i}),e.qZA()(),e.TgZ(35,"div",14)(36,"h5",8),e._uU(37,"Estado *"),e.qZA(),e.TgZ(38,"p-inputSwitch",15),e.NdJ("ngModelChange",function(i){return n.servicio.estado=i}),e.qZA()()(),e.TgZ(39,"div",3)(40,"div",5)(41,"button",16),e.NdJ("click",function(){return n.guardarBioServicio()}),e._uU(42,"Guardar"),e.qZA()()(),e._UZ(43,"br"),e.TgZ(44,"p-table",17,18),e.YNc(46,q,6,0,"ng-template",19),e.YNc(47,U,11,0,"ng-template",20),e.YNc(48,N,11,4,"ng-template",21),e.qZA()()),2&t&&(e.xp6(14),e.Q6J("ngModel",n.servicio.nombre),e.xp6(4),e.Q6J("options",n.subGrupos)("ngModel",n.servicio.idSubGrupo),e.xp6(4),e.Q6J("options",n.optionsInforme)("ngModel",n.servicio.informe),e.xp6(4),e.Q6J("options",n.optionsSexo)("ngModel",n.servicio.sexoAplica),e.xp6(4),e.Q6J("maxlength",10)("ngModel",n.servicio.codExterno1),e.xp6(4),e.Q6J("ngModel",n.servicio.reqSv),e.xp6(4),e.Q6J("ngModel",n.servicio.estado),e.xp6(6),e.Q6J("value",n.servicios)("globalFilterFields",e.DdM(13,J)))},dependencies:[_.Hq,v.o,d.jx,u.Fj,u.JJ,u.nD,p.iA,h.Lt,b.Ql,u.On]}),o})();var w=l(2340),k=l(529);let F=(()=>{class o{constructor(t){this.http=t,this.url=`${w.N.baseUrl}/sucursal`}getAllSucursales(){return this.http.get(`${this.url}/`)}getAllCiudades(){return this.http.get(`${this.url}/ciudades`)}saveSucursal(t){return this.http.post(`${this.url}/`,t)}updateReorderSucursal(t){return this.http.put(`${this.url}/reorden`,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(k.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function P(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"button",22),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),i=e.MAs(37);return e.KtG(s.clear(i))}),e.qZA(),e.TgZ(2,"span",23),e._UZ(3,"i",24),e.TgZ(4,"input",25,26),e.NdJ("input",function(){e.CHM(t);const s=e.MAs(5);e.oxw();const i=e.MAs(37);return e.KtG(i.filterGlobal(s.value,"contains"))}),e.qZA()()()}}function R(o,r){1&o&&(e.TgZ(0,"tr"),e._UZ(1,"th"),e.TgZ(2,"th"),e._uU(3,"Id"),e.qZA(),e.TgZ(4,"th"),e._uU(5,"Nombre"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Nombre Comercial"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Ciudad"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"-"),e.qZA()())}function L(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr",27)(1,"td"),e._UZ(2,"span",28),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",29),e.NdJ("click",function(){const i=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.selectSucursal(i))}),e.qZA()()()}if(2&o){const t=r.$implicit,n=r.rowIndex;e.Q6J("pReorderableRow",n),e.xp6(2),e.Q6J("pReorderableRowHandle",n),e.xp6(2),e.Oqu(t.idSucursal),e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.nombreComercial),e.xp6(2),e.Oqu(t.idCiudad.nombreCiudad)}}const B=function(){return["nombreComercial","nombre","idCiudad.nombreCiudad"]},G=[{path:"",component:A,children:[{path:"servicio",component:y},{path:"sucursal",component:(()=>{class o{constructor(t){this._sucursalService=t,this.sucursal={}}ngOnInit(){this.init(),this._sucursalService.getAllSucursales().subscribe(t=>{this.sucursales=t}),this._sucursalService.getAllCiudades().subscribe(t=>{this.ciudades=t})}init(){this.sucursal.idSucursal=void 0,this.sucursal.nombre="",this.sucursal.nombreComercial="",this.sucursal.direccion="",this.sucursal.estado=!0}guardarSucursal(){""!=this.sucursal.nombre&&""!=this.sucursal.nombreComercial?this._sucursalService.saveSucursal(this.sucursal).subscribe({next:t=>{this.sucursal=t,this._sucursalService.getAllSucursales().subscribe(n=>this.sucursales=n),c().fire({icon:"success",title:"Mensaje de \xe9xito",text:"Guardado con \xe9xito"}),this.limpiarSucursal()},error:t=>{c().fire({icon:"error",title:"Mensaje de error",text:"Ocurrio un error"})}}):c().fire({icon:"error",title:"Mensaje de error",text:"Complete los campos obligatorios"})}limpiarSucursal(){this.sucursal={},this.init()}selectSucursal(t){let n={...t};this.sucursal=n}actualizarReorder(t){this._sucursalService.updateReorderSucursal(this.sucursales).subscribe(n=>n)}clear(t){t.clear()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sucursal"]],decls:41,vars:10,consts:[[1,"bg-teal-50","mx-3","my-2","border-round","p-4","shadow-2"],[1,"text-3xl","font-medium","text-900","mb-3"],[1,"font-medium","text-600","mb-1"],[1,"grid"],[1,"col-12","md:col-10"],[1,"col-12","md:col-2"],["type","button","pButton","",1,"p-button-outlined","px-6","py-2",3,"click"],[1,"col-6","md:col-3"],[1,"mb-2"],["type","text","pInputText","",1,"text-sm","w-full","mb-3",3,"ngModel","ngModelChange"],["styleClass","w-full","optionLabel","nombreCiudad",3,"options","ngModel","ngModelChange"],[1,"col-12","md:col-3"],[1,"col-12","md:col-6"],[1,"col-6"],[3,"ngModel","ngModelChange"],["type","button",1,"btnCustomized","px-8","py-2",3,"click"],["styleClass","p-datatable-sm","scrollHeight","550px","responsiveLayout","scroll",3,"value","globalFilterFields","reorderableColumns","onRowReorder"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],["pButton","","label","Limpiar","icon","pi pi-filter-slash",1,"p-button-outlined",2,"font-size","75%",3,"click"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",2,"font-size","75%",3,"input"],["tt",""],[1,"fila",3,"pReorderableRow"],[1,"pi","pi-bars",3,"pReorderableRowHandle"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-text",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Sucursales"),e.qZA(),e.TgZ(3,"div",2),e._uU(4,"Configuraci\xf3n de sucursales"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return n.limpiarSucursal()}),e._uU(9,"Limpiar"),e.qZA()()(),e.TgZ(10,"div",3)(11,"div",7)(12,"h5",8),e._uU(13,"Nombre *"),e.qZA(),e.TgZ(14,"input",9),e.NdJ("ngModelChange",function(i){return n.sucursal.nombre=i}),e.qZA()(),e.TgZ(15,"div",7)(16,"h5",8),e._uU(17,"Ciudad *"),e.qZA(),e.TgZ(18,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return n.sucursal.idCiudad=i}),e.qZA()(),e.TgZ(19,"div",11)(20,"h5",8),e._uU(21,"Nombre Comercial *"),e.qZA(),e.TgZ(22,"input",9),e.NdJ("ngModelChange",function(i){return n.sucursal.nombreComercial=i}),e.qZA()(),e.TgZ(23,"div",12)(24,"h5",8),e._uU(25,"Direcci\xf3n"),e.qZA(),e.TgZ(26,"input",9),e.NdJ("ngModelChange",function(i){return n.sucursal.direccion=i}),e.qZA()(),e.TgZ(27,"div",13)(28,"h5",8),e._uU(29,"Estado *"),e.qZA(),e.TgZ(30,"p-inputSwitch",14),e.NdJ("ngModelChange",function(i){return n.sucursal.estado=i}),e.qZA()()(),e.TgZ(31,"div",3)(32,"div",5)(33,"button",15),e.NdJ("click",function(){return n.guardarSucursal()}),e._uU(34,"Guardar"),e.qZA()()(),e._UZ(35,"br"),e.TgZ(36,"p-table",16,17),e.NdJ("onRowReorder",function(i){return n.actualizarReorder(i)}),e.YNc(38,P,6,0,"ng-template",18),e.YNc(39,R,12,0,"ng-template",19),e.YNc(40,L,13,6,"ng-template",20),e.qZA()()),2&t&&(e.xp6(14),e.Q6J("ngModel",n.sucursal.nombre),e.xp6(4),e.Q6J("options",n.ciudades)("ngModel",n.sucursal.idCiudad),e.xp6(4),e.Q6J("ngModel",n.sucursal.nombreComercial),e.xp6(4),e.Q6J("ngModel",n.sucursal.direccion),e.xp6(4),e.Q6J("ngModel",n.sucursal.estado),e.xp6(6),e.Q6J("value",n.sucursales)("globalFilterFields",e.DdM(9,B))("reorderableColumns",!0))},dependencies:[_.Hq,v.o,d.jx,u.Fj,u.JJ,p.iA,p.Mv,p.qO,h.Lt,b.Ql,u.On]}),o})()},{path:"**",redirectTo:""}]}];let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(G),a.Bz]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,C.m,I,u.u5]}),o})()}}]);
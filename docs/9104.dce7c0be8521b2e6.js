"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9104],{9104:($,u,s)=>{s.r(u),s.d(u,{HomePageModule:()=>R});var p=s(9522),t=s(4438),m=s(5921),l=s(177),i=s(4742);function C(n,a){1&n&&t.nrm(0,"ion-icon",10)}function _(n,a){if(1&n&&(t.j41(0,"ion-card",1)(1,"div",2),t.nrm(2,"img",3),t.k0s(),t.j41(3,"ion-card-header")(4,"div",4),t.DNE(5,C,1,0,"ion-icon",5),t.k0s(),t.j41(6,"ion-card-title"),t.EFF(7),t.k0s()(),t.j41(8,"ion-card-content")(9,"p",6),t.EFF(10," Categor\xeda: "),t.j41(11,"strong"),t.EFF(12),t.k0s()(),t.j41(13,"p",7),t.EFF(14," Precio: "),t.j41(15,"strong"),t.EFF(16),t.nI1(17,"currency"),t.k0s()()(),t.j41(18,"div",8)(19,"ion-button",9),t.EFF(20,"Ver detalles"),t.k0s()()()),2&n){const r=t.XpG();t.R7$(2),t.FS9("alt",r.product.title),t.Y8G("src",r.product.image,t.B4B),t.R7$(3),t.Y8G("ngForOf",r.getStars(r.product.rating.rate)),t.R7$(2),t.JRh(r.product.title),t.R7$(5),t.JRh(r.product.category),t.R7$(4),t.JRh(t.i5U(17,6,r.product.price,"USD"))}}let f=(()=>{var n;class a{getStars(e){return Array(Math.round(e))}constructor(){}ngOnInit(){}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-product-card"]],inputs:{product:"product"},standalone:!1,decls:1,vars:1,consts:[["class","product-card",4,"ngIf"],[1,"product-card"],[1,"image-container"],[3,"src","alt"],[1,"rating"],["name","star","class","star",4,"ngFor","ngForOf"],[1,"category"],[1,"price"],[1,"buttons"],["fill","outline","color","secondary"],["name","star",1,"star"]],template:function(e,o){1&e&&t.DNE(0,_,21,9,"ion-card",0),2&e&&t.Y8G("ngIf",o.product)},dependencies:[l.Sq,l.bT,i.Jm,i.b_,i.I9,i.ME,i.tN,i.iq,l.oe],styles:[".product-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:150%;max-width:280px;padding:15px;background:#fff;border-radius:15px;box-shadow:0 4px 10px #0000001a;transition:transform .3s ease,box-shadow .3s ease;animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 6px 12px #0003}.image-container[_ngcontent-%COMP%]{width:100%;height:160px;display:flex;justify-content:center;align-items:center}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;object-fit:contain}.rating[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:5px}.star[_ngcontent-%COMP%]{color:gold;font-size:18px}ion-card-title[_ngcontent-%COMP%]{font-size:14px;font-weight:700;text-align:center;margin-bottom:10px}.price[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#28a745;text-align:center}.category[_ngcontent-%COMP%]{font-size:12px;color:#777;text-align:center}.buttons[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:8px}ion-button[_ngcontent-%COMP%]{border-radius:8px;font-size:14px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}"]}),a})();var h=s(467),g=s(8752);function y(n,a){if(1&n){const r=t.RV6();t.j41(0,"ion-item")(1,"ion-thumbnail",9),t.nrm(2,"img",10),t.k0s(),t.j41(3,"ion-label")(4,"h2"),t.EFF(5),t.k0s(),t.j41(6,"p"),t.EFF(7),t.k0s()(),t.j41(8,"ion-button",2),t.bIt("click",function(){const o=t.eBV(r).$implicit,c=t.XpG(2);return t.Njj(c.decreaseQuantity(o))}),t.EFF(9,"-"),t.k0s(),t.j41(10,"ion-button",2),t.bIt("click",function(){const o=t.eBV(r).$implicit,c=t.XpG(2);return t.Njj(c.increaseQuantity(o))}),t.EFF(11,"+"),t.k0s(),t.j41(12,"ion-button",11),t.bIt("click",function(){const o=t.eBV(r).$implicit,c=t.XpG(2);return t.Njj(c.removeProduct(o.id))}),t.EFF(13," Eliminar "),t.k0s()()}if(2&n){const r=a.$implicit;t.R7$(2),t.Y8G("src",r.image,t.B4B),t.R7$(3),t.JRh(r.title),t.R7$(2),t.Lme("$",r.price," x ",r.quantity,"")}}function x(n,a){if(1&n){const r=t.RV6();t.j41(0,"ion-list"),t.DNE(1,y,14,4,"ion-item",4),t.j41(2,"ion-item")(3,"ion-label",5),t.EFF(4,"Total a pagar:"),t.k0s(),t.j41(5,"ion-label",6),t.EFF(6),t.nI1(7,"currency"),t.k0s()(),t.j41(8,"ion-button",7),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.clearCart())}),t.EFF(9,"Vaciar carrito"),t.k0s(),t.j41(10,"ion-button",8),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.checkout())}),t.EFF(11,"Checkout"),t.k0s()()}if(2&n){const r=t.XpG();t.R7$(),t.Y8G("ngForOf",r.cart),t.R7$(5),t.JRh(t.bMT(7,2,r.getTotal()))}}function b(n,a){1&n&&(t.j41(0,"ion-text",12)(1,"p",13),t.EFF(2,"El carrito est\xe1 vac\xedo."),t.k0s()())}let F=(()=>{var n;class a{constructor(e,o,c){this.cartService=e,this.modalController=o,this.router=c,this.cart=[],this.totalPrice=0,this.cartItems=[]}ngOnInit(){this.cartService.cart$.subscribe(e=>{this.cart=e,this.calculateTotal()})}removeProduct(e){this.cartService.removeFromCart(e),this.calculateTotal()}calculateTotal(){this.totalPrice=this.cart.reduce((e,o)=>e+o.price*o.quantity,0)}clearCart(){this.cartService.clearCart(),this.calculateTotal()}closeModal(){this.modalController.dismiss()}increaseQuantity(e){e.quantity++,this.updateCart()}decreaseQuantity(e){e.quantity>1&&(e.quantity--,this.updateCart())}updateCart(){this.cartService.updateCart(this.cart),this.calculateTotal()}checkout(){this.closeModal(),this.router.navigate(["/checkout"])}loadCart(){this.cartItems=this.cartService.getCartItems()}getTotal(){return this.cart.reduce((e,o)=>e+o.price*o.quantity,0)}}return(n=a).\u0275fac=function(e){return new(e||n)(t.rXU(g.m),t.rXU(i.W3),t.rXU(p.Ix))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-cart"]],standalone:!1,decls:11,vars:2,consts:[["emptyCart",""],["slot","end"],[3,"click"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"total-label"],[1,"total-price"],["expand","full","color","danger",3,"click"],["expand","full","color","primary",3,"click"],["slot","start"],[3,"src"],["color","danger",3,"click"],["color","medium"],[2,"text-align","center","margin-top","20px"]],template:function(e,o){if(1&e){const c=t.RV6();t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Carrito de compras"),t.k0s(),t.j41(4,"ion-buttons",1)(5,"ion-button",2),t.bIt("click",function(){return t.eBV(c),t.Njj(o.closeModal())}),t.EFF(6,"Cerrar"),t.k0s()()()(),t.j41(7,"ion-content"),t.DNE(8,x,12,4,"ion-list",3)(9,b,3,0,"ng-template",null,0,t.C5r),t.k0s()}if(2&e){const c=t.sdS(10);t.R7$(8),t.Y8G("ngIf",o.cart.length>0)("ngIfElse",c)}},dependencies:[l.Sq,l.bT,i.Jm,i.QW,i.W9,i.eU,i.uz,i.he,i.nf,i.IO,i.Zx,i.BC,i.ai,l.oe],styles:[".total-label[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;color:#000}.total-price[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;color:#007bff;background-color:#007bff1a;padding:5px 10px;border-radius:5px;display:inline-block}"]}),a})();function P(n,a){if(1&n&&(t.j41(0,"ion-badge",5),t.EFF(1),t.k0s()),2&n){const r=t.XpG();t.R7$(),t.JRh(r.cartCount)}}let k=(()=>{var n;class a{constructor(e,o){this.cartService=e,this.modalController=o,this.cartCount=0}ngOnInit(){this.cartService.cart$.subscribe(e=>{console.log("Productos en el carrito:",e),this.cartCount=e.reduce((o,c)=>o+c.quantity,0)})}openCart(){var e=this;return(0,h.A)(function*(){yield(yield e.modalController.create({component:F})).present()})()}}return(n=a).\u0275fac=function(e){return new(e||n)(t.rXU(g.m),t.rXU(i.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-header"]],standalone:!1,decls:8,vars:1,consts:[[1,"custom-toolbar"],["slot","end"],["fill","clear",1,"icon-button",3,"click"],["name","cart-outline"],["class","badge",4,"ngIf"],[1,"badge"]],template:function(e,o){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),t.EFF(3,"Mercado Express"),t.k0s(),t.j41(4,"ion-buttons",1)(5,"ion-button",2),t.bIt("click",function(){return o.openCart()}),t.nrm(6,"ion-icon",3),t.DNE(7,P,2,1,"ion-badge",4),t.k0s()()()()),2&e&&(t.R7$(7),t.Y8G("ngIf",o.cartCount>0))},dependencies:[l.bT,i.In,i.Jm,i.QW,i.eU,i.iq,i.BC,i.ai],styles:[".custom-toolbar[_ngcontent-%COMP%]{height:80px;display:flex;justify-content:space-between;align-items:center;padding:0 30px;background-color:#fdec47}ion-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;color:#000}.icon-button[_ngcontent-%COMP%]{position:relative;font-size:2.2rem;margin:0 12px;transition:transform .3s ease;color:#000}.icon-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.icon-button[_ngcontent-%COMP%]:hover{transform:scale(1.3)}ion-badge.badge[_ngcontent-%COMP%]{position:absolute;top:2px;right:2px;background-color:red;color:#fff;font-size:.9rem;border-radius:50%;padding:4px 6px;min-width:18px;min-height:18px;text-align:center}"]}),a})();var O=s(1626);let v=(()=>{var n;class a{constructor(e){this.http=e,this.apiUrl="https://fakestoreapi.com/products/categories"}getCategories(){return this.http.get(this.apiUrl)}}return(n=a).\u0275fac=function(e){return new(e||n)(t.KVO(O.Qq))},n.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),a})();function j(n,a){if(1&n&&(t.j41(0,"ion-select-option",7),t.EFF(1),t.k0s()),2&n){const r=a.$implicit;t.Y8G("value",r),t.R7$(),t.SpI(" ",r," ")}}let M=(()=>{var n;class a{constructor(e){this.categoryService=e,this.categories=[],this.order="asc",this.categorySelected=new t.bkB,this.orderChanged=new t.bkB}ngOnInit(){this.loadCategories()}loadCategories(){this.categoryService.getCategories().subscribe(e=>{this.categories=e})}onCategoryChange(e){const o=e.detail.value;console.log("Categor\xeda seleccionada desde el componente:",o),this.categorySelected.emit(o)}changeOrder(e){this.order=e,console.log("Orden cambiado a:",e),this.orderChanged.emit(e)}}return(n=a).\u0275fac=function(e){return new(e||n)(t.rXU(v))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-category-filter"]],outputs:{categorySelected:"categorySelected",orderChanged:"orderChanged"},standalone:!1,decls:12,vars:3,consts:[[1,"order-section"],[1,"order-label"],[1,"buttons"],["expand","block",1,"order-button",3,"click","color"],[1,"dropdown"],["placeholder","Selecciona una categor\xeda",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,o){1&e&&(t.j41(0,"ion-row")(1,"div",0)(2,"label",1),t.EFF(3,"Order"),t.k0s(),t.j41(4,"div",2)(5,"ion-button",3),t.bIt("click",function(){return o.changeOrder("asc")}),t.EFF(6," ASC "),t.k0s(),t.j41(7,"ion-button",3),t.bIt("click",function(){return o.changeOrder("desc")}),t.EFF(8," DESC "),t.k0s()()(),t.j41(9,"div",4)(10,"ion-select",5),t.bIt("ionChange",function(d){return o.onCategoryChange(d)}),t.DNE(11,j,2,2,"ion-select-option",6),t.k0s()()()),2&e&&(t.R7$(5),t.Y8G("color","asc"===o.order?"success":"light"),t.R7$(2),t.Y8G("color","desc"===o.order?"danger":"light"),t.R7$(4),t.Y8G("ngForOf",o.categories))},dependencies:[l.Sq,i.Jm,i.ln,i.Nm,i.Ip,i.Je],styles:[".controls-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;padding:20px;gap:15px;text-align:center}.order-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%}.order-label[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;margin-bottom:8px}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:12px;width:100%}.order-button[_ngcontent-%COMP%]{--border-radius: 10px;--background: white;--color: black;--border-color: black;border:2px solid black;transition:all .3s ease-in-out;padding:10px 20px;font-size:1rem;text-transform:uppercase;width:120px;text-align:center}.order-button[_ngcontent-%COMP%]:hover{--background: black;--color: white}.dropdown[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;margin-top:10px}ion-select[_ngcontent-%COMP%]{--background: #FDEC47;--color: rgb(0, 0, 0);--border-radius: 10px;padding:12px;font-size:1rem;width:250px;text-align:center}@media (max-width: 600px){.buttons[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}"]}),a})();const w=n=>["/product-detail",n];function E(n,a){if(1&n&&t.nrm(0,"app-product-card",4),2&n){const r=a.$implicit;t.Y8G("product",r)("routerLink",t.eq3(2,w,r.id))}}const I=[{path:"",component:(()=>{var n;class a{constructor(e){this.productsSvs=e,this.products=[],this.params={},this.selectedCategory="",this.order="asc"}ngOnInit(){this.params.page=0,this.getAllProducts()}getAllProducts(e){this.params.page+=1,this.productsSvs.getAllProducts(this.params).subscribe({next:o=>{this.products.push(...o),console.log(this.products),e&&e.target.complete()},error:o=>{e&&e.target.complete()}})}filterByCategory(e){console.log("Categor\xeda seleccionada:",e),this.productsSvs.getProductsByCategory(e).subscribe(o=>{this.products=o})}onOrderChanged(e){this.order=e,console.log("Orden recibido en ProductsPage:",e),this.filterAndSortProducts()}filterAndSortProducts(){this.products=this.products.filter(e=>!this.selectedCategory||e.category===this.selectedCategory).sort((e,o)=>"asc"===this.order?e.price-o.price:o.price-e.price)}}return(n=a).\u0275fac=function(e){return new(e||n)(t.rXU(m.b))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-home"]],standalone:!1,decls:7,vars:1,consts:[[3,"categorySelected","orderChanged"],[1,"ion-justify-content-center"],[1,"products-container"],[3,"product","routerLink",4,"ngFor","ngForOf"],[3,"product","routerLink"]],template:function(e,o){1&e&&(t.nrm(0,"app-header"),t.j41(1,"ion-content")(2,"ion-grid")(3,"app-category-filter",0),t.bIt("categorySelected",function(d){return o.filterByCategory(d)})("orderChanged",function(d){return o.onOrderChanged(d)}),t.k0s(),t.j41(4,"ion-row",1)(5,"div",2),t.DNE(6,E,1,4,"app-product-card",3),t.k0s()()()()),2&e&&(t.R7$(6),t.Y8G("ngForOf",o.products))},dependencies:[p.Wk,l.Sq,i.W9,i.lO,i.ln,i.N7,f,k,M],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;padding:20px}.products-container[_ngcontent-%COMP%]{display:grid;gap:16px;justify-content:center;align-items:center;width:100%;max-width:1200px;margin:0 auto;padding:10px}@media (min-width: 1200px){.products-container[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@media (min-width: 768px) and (max-width: 1199px){.products-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (min-width: 601px) and (max-width: 767px){.products-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 600px){.products-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);gap:8px}}@media (max-width: 400px){.products-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);gap:8px}}app-product-card[_ngcontent-%COMP%]{width:100%;max-width:250px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}"]}),a})()}];let S=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.iI.forChild(I),p.iI]}),a})();var T=s(3887);let R=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[S,T.G]}),a})()}}]);
(this["webpackJsonptech-shop"]=this["webpackJsonptech-shop"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/aboutBcg.7709c10e.jpeg"},31:function(e,t,a){e.exports=a.p+"static/media/logo.6f19757f.svg"},35:function(e,t,a){e.exports=a.p+"static/media/mainBcg.984874d1.jpeg"},36:function(e,t,a){e.exports=a.p+"static/media/productsBcg.160fddff.jpeg"},37:function(e,t,a){e.exports=a.p+"static/media/contactBcg.945afb99.jpeg"},38:function(e,t,a){e.exports=a.p+"static/media/singleProductBcg.96758412.jpeg"},39:function(e,t,a){e.exports=a.p+"static/media/storeBcg.46143c2f.jpeg"},40:function(e,t,a){e.exports=a.p+"static/media/defaultBcg.0819a816.jpeg"},43:function(e,t,a){e.exports=a(56)},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),l=a(16),o=a(2),s=a(30),m=a(14),u=(a(52),a(53),a(3)),d=a(4),p=a(5),g=a(31),h=a.n(g),f="SIDEBAR_CLICK",v="CART_CLICK",b="GET_PRODUCTS",y="SET_SINGLE",E="ADD_TO_CART",x="SET_TOTAL",N="SYNC_STORAGE",k="GET_STORAGE_CART",w="GET_STORAGE_PRODUCT",O="CLEAR_CART",S="DECREMENT",T="REMOVE",j="FILTER_PRODUCTS",P="SORT_DATA",C=function(){return{type:f}},z=function(){return{type:v}},L=function(){return function(e){e({type:b}),e({type:k}),e({type:x})}},R=function(e){return{type:y,payload:e}},q=function(e){return function(t){t({type:E,payload:e}),t({type:x}),t({type:N})}};function A(){var e=Object(u.a)(["\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  padding: 1rem 1.5rem;\n  background: var(--mainGrey);\n  border-bottom: 3px solid var(--primaryColor);\n  z-index: 1;\n  .nav-center {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1170px;\n    margin: 0 auto;\n  }\n  .nav-icon {\n    font-size: 1.5rem;\n    cursor: pointer;\n  }\n  .nav-cart {\n    position: relative;\n  }\n  .cart-items {\n    position: absolute;\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    font-size: 0.85rem;\n    top: -8px;\n    right: -8px;\n    padding: 0 5px;\n    border-radius: 50%;\n  }\n"]);return A=function(){return e},e}var F=d.a.nav(A()),I=Object(o.b)((function(e){return{cartItems:e.products.cartItems}}),{handleSidebar:C,handleCart:z})((function(e){return r.a.createElement(F,null,r.a.createElement("div",{className:"nav-center"},r.a.createElement(p.a,{className:"nav-icon",onClick:e.handleSidebar}),r.a.createElement("img",{src:h.a,alt:"tech shop logo"}),r.a.createElement("div",{className:"nav-cart"},r.a.createElement(p.b,{className:"nav-icon",onClick:e.handleCart}),r.a.createElement("div",{className:"cart-items"},e.cartItems))))})),B=a(6);function D(){var e=Object(u.a)(["\n  position: fixed;\n  top: 60px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--mainGrey);\n  z-index: 1;\n  border-right: 4px solid var(--primaryColor);\n  transition: var(--mainTransition);\n  transform: ",";\n  ul {\n    list-style-type: none;\n    padding: 0 !important;\n  }\n  .sidebar-link {\n    display: block;\n    font-size: 1.5rem;\n    color: var(--mainBlack);\n    text-transform: capitalize;\n    padding: 0.5rem 1.5rem;\n    background: transparent;\n    transition: var(--mainTransition);\n  }\n  .sidebar-link:hover {\n    background: var(--primaryColor);\n    color: var(--mainWhite);\n    padding: 0.5rem 1.5rem 0.5rem 2.5rem;\n    text-decoration: none;\n  }\n  @media (min-width: 576px) {\n    width: 20rem;\n  }\n"]);return D=function(){return e},e}var G=d.a.nav(D(),(function(e){return e.show?"translateX(0)":"translateX(-100%)"})),Y=Object(o.b)((function(e){var t=e.products;return{links:t.links,sideBarOpen:t.sideBarOpen}}),{handleSidebar:C})((function(e){return r.a.createElement(G,{show:e.sideBarOpen},r.a.createElement("ul",null,e.links.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(B.b,{to:t.path,className:"sidebar-link",onClick:e.handleSidebar},t.text))}))))}));function _(){var e=Object(u.a)(["\n  position: fixed;\n  top: 60px;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--mainGrey);\n  z-index: 1;\n  border-left: 4px solid var(--primaryColor);\n  transform: ",";\n  transition: var(--mainTransition);\n  @media (min-width: 576px) {\n    width: 20rem;\n  }\n  overflow: scroll !important;\n  padding: 2rem;\n  ul {\n    padding: 0 !important;\n  }\n  .cart-item {\n    list-style-type: none;\n  }\n"]);return _=function(){return e},e}var W=d.a.div(_(),(function(e){return e.show?"translateX(0)":"translateX(100%)"})),$=Object(o.b)((function(e){var t=e.products;return{cartOpen:t.cartOpen,cart:t.cart,cartTotal:t.cartTotal}}),{handleCart:z})((function(e){return r.a.createElement(W,{show:e.cartOpen,onClick:e.handleCart},r.a.createElement("ul",null,e.cart.map((function(e){return r.a.createElement("li",{key:e.id,className:"cart-item mb-4"},r.a.createElement("img",{src:"../".concat(e.image),alt:"cart item",width:"35"}),r.a.createElement("div",{className:"mt-3"},r.a.createElement("h6",{className:"text-uppercase"},e.title),r.a.createElement("h6",{className:"text-title text-capitalize"},"Amount: ",e.count)))}))),r.a.createElement("h4",{className:"text-capitalize text-main"},"Total price: $",e.cartTotal),r.a.createElement("div",{className:"text-center my-5"},r.a.createElement(B.b,{to:"/store/cart",className:"main-link"},"cart page")))}));function J(){var e=Object(u.a)(["\n  background: var(--darkGrey);\n  color: var(--mainWhite);\n  .icon {\n    font-size: 1.5rem;\n    color: var(--mainWhite);\n    transition: var(--mainTransition);\n  }\n  .icon:hover {\n    color: var(--primaryColor);\n    cursor: pointer;\n  }\n"]);return J=function(){return e},e}var U=d.a.footer(J()),M=Object(o.b)((function(e){return{socialLinks:e.products.socialLinks}}),null)((function(e){var t=e.socialLinks;return r.a.createElement(U,null,r.a.createElement("div",{className:"section-main py-3 container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"text-capitalize"},"copyright \xa9 shop ",(new Date).getFullYear(),". all rights reserved")),r.a.createElement("div",{className:"col-md-6 d-flex justify-content-around"},t.map((function(e){return r.a.createElement("a",{key:e.id,href:e.url},e.icon)}))))))})),X=a(35),K=a.n(X);function H(){var e=Object(u.a)(["\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: ",";\n  color: var(--mainWhite);\n  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),\n    url(",") center / cover no-repeat;\n\n  .title {\n    padding-top: 2rem;\n    font-size: 3.5rem;\n    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);\n    text-transform: uppercase;\n    letter-spacing: var(--mainSpacing);\n  }\n"]);return H=function(){return e},e}function V(e){var t=e.img,a=e.title,n=e.max,c=e.children;return r.a.createElement(Q,{max:n,img:t},r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"title"},a),c))}var Q=d.a.div(H(),(function(e){return e.max?"100vh":"60vh"}),(function(e){return e.img}));V.defaultProps={img:K.a};var Z=V;function ee(){var e=Object(u.a)(["\n  background: rgba(95, 183, 234, 0.5);\n  .service-icon {\n    font-size: 2.5rem;\n    color: var(--primaryColor);\n  }\n  p {\n    color: var(--darkGrey);\n  }\n"]);return ee=function(){return e},e}var te=d.a.div(ee()),ae=function(){var e=[{id:1,icon:r.a.createElement(p.f,null),title:"free shipping",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"},{id:2,icon:r.a.createElement(p.i,null),title:"30 days return policy",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"},{id:3,icon:r.a.createElement(p.e,null),title:"secured payment",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"}];return r.a.createElement(te,{className:"py-5"},r.a.createElement("div",{className:"section-main  container"},r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-10 mx-auto col-sm-6 col-md-4 text-center my-3"},r.a.createElement("div",{className:"service-icon"},e.icon),r.a.createElement("div",{className:"mt-3 text-capitalize"},e.title),r.a.createElement("div",{className:"mt-3"},e.text))})))))};function ne(){var e=Object(u.a)(["\n  text-align: ",";\n  .title-underline {\n    height: 0.25rem;\n    width: 7rem;\n    background: var(--primaryColor);\n    margin: ",";\n  }\n"]);return ne=function(){return e},e}var re=d.a.div(ne(),(function(e){return e.center?"center":"left"}),(function(e){return e.center?"0 auto":"0"})),ce=function(e){var t=e.title,a=e.center;return r.a.createElement(re,{className:"row",center:a},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text-title"},t),r.a.createElement("div",{className:"title-underline"})))};function ie(){var e=Object(u.a)(["\n  .card {\n    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);\n    transition: var(--mainTransition);\n    height: 100%;\n  }\n  .card:hover {\n    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);\n    cursor: pointer;\n  }\n  .card-img-top {\n    transition: var(--mainTransition);\n  }\n  .card:hover .card-img-top {\n    transform: scale(1.15);\n    opacity: 0.2;\n  }\n  .img-container {\n    position: relative;\n  }\n  .product-icons {\n    transition: var(--mainTransition);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n  }\n  .icon {\n    font-size: 2.5rem;\n    margin: 1rem;\n    padding: 0.5rem;\n    color: var(--primaryColor);\n    background: var(--mainBlack);\n    border-radius: 0.5rem;\n  }\n  .card:hover .product-icons {\n    opacity: 1;\n  }\n  .card-body {\n    font-weight: bold;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n  }\n"]);return ie=function(){return e},e}var le=d.a.div(ie()),oe=function(e){var t=e.product,a=e.onCart,n=e.onSingle;return r.a.createElement(le,{className:"col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:t.image,alt:"product",className:"card-img-top p-5",height:"300px"}),r.a.createElement("div",{className:"product-icons"},r.a.createElement(B.b,{to:"/products/".concat(t.id),onClick:function(){return n(t.id)}},r.a.createElement(p.j,{className:"icon"})),r.a.createElement(p.b,{className:"icon",onClick:function(){return a(t.id)}}))),r.a.createElement("div",{className:"card-body d-flex justify-content-between"},r.a.createElement("p",{className:"mb-0"},t.title),r.a.createElement("p",{className:"mb-0 text-main"},"$",t.price))))};var se=Object(o.b)((function(e){return{featured:e.products.featuredProducts}}),{getProducts:L,setSingleProduct:R,addToCart:q})((function(e){return Object(n.useEffect)((function(){e.getProducts()}),[]),r.a.createElement("section",{className:"py-5 container"},r.a.createElement("div",{className:"section-main"},r.a.createElement(ce,{title:"featured products",center:"true"}),r.a.createElement("div",{className:"row my-5"},e.featured.map((function(t){return r.a.createElement(oe,{key:t.id,product:t,onSingle:e.setSingleProduct,onCart:e.addToCart})}))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(B.b,{to:"/products",className:"main-link"},"our products")))))}));var me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{title:"awesome gadgets"},r.a.createElement(B.b,{to:"/products",className:"main-link mt-3"},"Our products")),r.a.createElement(ae,null),r.a.createElement(se,null))},ue=a(19),de=a.n(ue);var pe=function(){return r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"section-main  container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:de.a,className:"img-fluid img-thumbnail",alt:"About Us",style:{background:"var(--darkGrey)"}})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement(ce,{title:"about us"}),r.a.createElement("p",{className:"text-lead text-muted my-3"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti labore ipsam reiciendis quisquam voluptatem nisi delectus iure quos modi."),r.a.createElement("p",{className:"text-lead text-muted my-3"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti labore ipsam reiciendis quisquam voluptatem nisi delectus iure quos modi."),r.a.createElement("button",{className:"main-link mt-3"},"more info")))))};var ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{img:de.a}),r.a.createElement(pe,null))},he=a(12);function fe(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  label {\n    font-weight: bold;\n    text-transform: capitalize;\n  }\n  .filter-item,\n  .filter-price {\n    display: block;\n    width: 100%;\n    background: transparent;\n    border-radius: 0.5rem;\n    border: 2px solid var(--darkGrey);\n  }\n"]);return fe=function(){return e},e}var ve=d.a.div(fe()),be=Object(o.b)((function(e){return{products:e.products}}),{handleChange:function(e){return function(t){t({type:j,payload:e}),t({type:P})}}})((function(e){var t=e.products,a=t.search,n=t.min,c=t.max,i=t.company,l=t.price,o=t.shipping,s=t.storeProducts,m=e.handleChange,u=s.map((function(e){return e.company})),d=Object(he.a)(new Set(u));return r.a.createElement("div",{className:"row my-5"},r.a.createElement("div",{className:"col-10 mx-auto  container"},r.a.createElement(ve,null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"search"},"search products"),r.a.createElement("input",{type:"text",name:"search",id:"search",onChange:m,value:a,className:"filter-item"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"company"},"company"),r.a.createElement("select",{name:"company",id:"company",onChange:m,value:i,className:"filter-item"},r.a.createElement("option",{value:"all"},"all"),d.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"price"},r.a.createElement("p",{className:"mb-2"},"product price : ",r.a.createElement("span",null,"$ ",l))),r.a.createElement("input",{type:"range",name:"price",id:"price",min:n,max:c,className:"filter-price",value:l,onChange:m})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"shipping",className:"mx-2"},"free shipping"),r.a.createElement("input",{type:"checkbox",name:"shipping",id:"shipping",onChange:m,checked:o&&!0})))))}));var ye=Object(o.b)((function(e){return{products:e.products.filteredProducts}}),{getProducts:L,setSingleProduct:R,addToCart:q})((function(e){return Object(n.useEffect)((function(){e.getProducts()}),[]),r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"section-main  container"},r.a.createElement(ce,{center:!0,title:"our products"}),r.a.createElement(be,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto"},r.a.createElement("h6",{className:"text-title"},"total products: ",e.products.length)))),r.a.createElement("div",{className:"section-main  container"},r.a.createElement("div",{className:"row py-5"},0===e.products.length&&r.a.createElement("div",{className:"col text-title text-center"},"sorry, no items matched your search"),e.products.map((function(t){return r.a.createElement(oe,{key:t.id,product:t,onSingle:e.setSingleProduct,onCart:e.addToCart})})))))})),Ee=a(36),xe=a.n(Ee);var Ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{img:xe.a}),r.a.createElement(ye,null))};var ke=function(){return r.a.createElement("section",{className:"py-5 container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 py-3"},r.a.createElement(ce,{title:"contact us"}),r.a.createElement("form",{className:"mt-5",action:"https://formspree.io/xnqnpqeg",method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"firstName",placeholder:"John Doe"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"email@gmail.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"subject",placeholder:"Subject"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",name:"message",rows:"10",placeholder:"Write your message"}),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("input",{type:"submit",className:"form-control bg-primary text-white",value:"Send"})))))))},we=a(37),Oe=a.n(we);function Se(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{img:Oe.a}),r.a.createElement(ke,null))}var Te=a(38),je=a.n(Te);var Pe=Object(o.b)((function(e){var t=e.products;return{product:t.singleProduct,loading:t.loading}}),{addToCart:q,getStorageProduct:function(){return function(e){e({type:w})}}})((function(e){var t=e.product,a=e.loading,c=e.addToCart,i=e.getStorageProduct;return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{img:je.a,title:"single product"}),a&&r.a.createElement("h1",null,"product is loading..."),r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"section-main"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-sm-8 col-md-6 my-3"},r.a.createElement("img",{src:"../".concat(t.image),alt:"single product",className:"img-fluid"})),r.a.createElement("div",{className:"col-10 mx-auto col-sm-8 col-md-6 my-3"},r.a.createElement("h5",{className:"text-title mb-4"},"model: ",t.title),r.a.createElement("h5",{className:"text-capitalize text-muted mb-4"},"company: ",t.company),r.a.createElement("h5",{className:"text-main text-capitalize mb-4"},"price: $",t.price),r.a.createElement("p",{className:"text-title mt-3"},"some info about product:"),r.a.createElement("p",null,t.description),r.a.createElement("button",{className:"main-link m-2",onClick:function(){return c(t.id)}},"add to cart"),r.a.createElement(B.b,{to:"/products",className:"main-link m-2"},"back to products"))))))})),Ce=a(39),ze=a.n(Ce);var Le=function(){return r.a.createElement("div",{className:"container text-center d-none  d-lg-block my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name of product")),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))};var Re=function(e){var t=e.item,a=e.onIncrement,n=e.onDecrement,c=e.onRemove;return r.a.createElement("div",{className:"row mt-5 mt-lg-0 text-capitalize text-center align-items-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:t.image,alt:"item",width:"60",className:"img-fluid"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 pb-2"},r.a.createElement("span",{className:"d-lg-none"},"product: "),t.title),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 pb-2"},r.a.createElement("span",{className:"d-lg-none"},"price: "),"$",t.price),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement(p.c,{className:"cart-icon text-primary",onClick:function(){return n(t.id)}}),r.a.createElement("span",{className:"text-title text-muted mx-3"},t.count),r.a.createElement(p.d,{className:"cart-icon text-primary",onClick:function(){return a(t.id)}})))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 pb-2"},r.a.createElement(p.k,{className:"text-danger cart-icon",onClick:function(){return c(t.id)}})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 pb-2"},r.a.createElement("strong",{className:"text-muted"},"item total: ",t.count)))};var qe=Object(o.b)((function(e){return{cart:e.products.cart}}),{increment:function(e){return function(t){t(q(e))}},decrement:function(e){return function(t){t({type:S,payload:e}),t({type:x}),t({type:N})}},removeItem:function(e){return function(t){t({type:T,payload:e}),t({type:x}),t({type:N})}}})((function(e){var t=e.cart,a=e.increment,n=e.decrement,c=e.removeItem;return 0===e.cart.length?r.a.createElement("h1",{className:"text-title text-center my-4"},"Your cart is currently empty"):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement(Re,{key:e.id,item:e,onIncrement:a,onDecrement:n,onRemove:c})})))))}));var Ae=Object(o.b)((function(e){var t=e.products;return{cartSubTotal:t.cartSubTotal,cartTax:t.cartTax,cartTotal:t.cartTotal}}),{clearCart:function(){return function(e){e({type:O}),e({type:x}),e({type:N})}}})((function(e){return r.a.createElement("div",{className:"section-main container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-title text-center my-4"},r.a.createElement("button",{className:"btn btn-outline-danger text-capitalize mb-4",onClick:e.clearCart},"clear cart"),r.a.createElement("h3",null,"subtotal: $",e.cartSubTotal),r.a.createElement("h3",null,"tax: $",e.cartTax),r.a.createElement("h3",null,"total: $",e.cartTotal))))}));var Fe=function(){return r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"section-main  container"},r.a.createElement(ce,{title:"your cart items",center:!0})),r.a.createElement(Le,null),r.a.createElement(qe,null),r.a.createElement(Ae,null))};var Ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{img:ze.a}),r.a.createElement(Fe,null))},Be=a(40),De=a.n(Be);function Ge(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{img:De.a,title:404,max:!0},r.a.createElement("h2",{className:"text-uppercase"},"page not found"),r.a.createElement(B.b,{to:"/",className:"main-link mt-4"},"return home")))}var Ye=Object(o.b)(null,{getProducts:L})((function(e){return Object(n.useEffect)((function(){e.getProducts()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(Y,null),r.a.createElement($,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/store",component:me}),r.a.createElement(m.a,{exact:!0,path:"/store/about",component:ge}),r.a.createElement(m.a,{exact:!0,path:"/store/contact",component:Se}),r.a.createElement(m.a,{exact:!0,path:"/store/products",component:Ne}),r.a.createElement(m.a,{exact:!0,path:"/store/products/:id",component:Pe}),r.a.createElement(m.a,{exact:!0,path:"/store/cart",component:Ie}),r.a.createElement(m.a,{component:Ge})),r.a.createElement(M,null))})),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function We(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $e=a(26),Je=[{id:0,title:"google pixel - black",price:10,company:"google",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!0,image:"img/product-0.png",freeShipping:!0},{id:1,title:"samsung s7 - white",price:20,company:"samsung",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-1.png",freeShipping:!1},{id:2,title:"htc 10 - black",price:30,company:"htc",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-2.png",freeShipping:!0},{id:3,title:"htc 10 - white",price:15,company:"htc",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-3.png",freeShipping:!1},{id:4,title:"samsung s7 - black",price:45,company:"google",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-4.png",freeShipping:!0},{id:5,title:"samsung galaxy A8 - black",price:55,company:"samsung",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-5.png",freeShipping:!1},{id:6,title:"fuji X100s photo camera",price:90,company:"fuji",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!0,image:"img/product-6.png",freeShipping:!0},{id:7,title:"canon Eos 30 photo camera",price:120,company:"canon",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-7.png",freeShipping:!1},{id:8,title:"nikon D 3100 photo camera",price:55,company:"nikon",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-8.png",freeShipping:!0},{id:9,title:"acer desktop computer",price:35,company:"acer",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!0,image:"img/product-9.png",freeShipping:!1},{id:10,title:"hp desktop computer",price:75,company:"hp",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-10.png",freeShipping:!0},{id:11,title:"lenovo desktop computer",price:110,company:"lenovo",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-11.png",freeShipping:!1},{id:12,title:"dell desktop computer",price:28,company:"dell",description:"Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",featured:!1,image:"img/product-12.png",freeShipping:!0}];function Ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(a),!0).forEach((function(t){Object($e.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ue(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Xe={sideBarOpen:!1,cartOpen:!1,links:[{id:1,text:"Home",path:"/store/"},{id:2,text:"About",path:"/store/about"},{id:3,text:"Products",path:"/store/products"},{id:4,text:"Contact",path:"/store/contact"},{id:5,text:"Cart",path:"/store/cart"}],socialLinks:[{id:1,icon:r.a.createElement(p.g,{className:"icon"}),url:"https://www.facebook.com/profile.php?id=100017272267301"},{id:2,icon:r.a.createElement(p.l,{className:"icon"}),url:"https://twitter.com/SovtusAndjey"},{id:3,icon:r.a.createElement(p.h,{className:"icon"}),url:"https://www.linkedin.com/in/andrii-sovtus-b85329244/"}],cart:[],cartItems:0,cartSubTotal:0,cartTax:0,cartTotal:0,storeProducts:[],filteredProducts:[],featuredProducts:[],singleProduct:{},loading:!1,search:"",price:0,minPrice:0,maxPrice:0,company:"all",shipping:!1};var Ke,He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Me({},e,{sideBarOpen:!e.sideBarOpen});case v:return Me({},e,{cartOpen:!e.cartOpen});case b:var a=Je.filter((function(e){return!0===e.featured})),n=Math.max.apply(Math,Object(he.a)(e.storeProducts.map((function(e){return e.price})))),r=Math.min.apply(Math,Object(he.a)(e.storeProducts.map((function(e){return e.price}))));return Me({},e,{storeProducts:Je,featuredProducts:a,filteredProducts:Je,maxPrice:n,minPrice:r,price:n,loading:!1});case y:var c=e.storeProducts.find((function(e){return e.id===t.payload}));return localStorage.setItem("singleProduct",JSON.stringify(c)),Me({},e,{singleProduct:c,loading:!1});case E:var i=Object(he.a)(e.cart),l=Object(he.a)(e.storeProducts),o=i.find((function(e){return e.id===t.payload}));if(o)o.count++,o.total=o.price*o.count,o.total=parseFloat(o.total.toFixed(2));else{var s=Me({},o=l.find((function(e){return e.id===t.payload})),{count:1,total:o.price});i=[].concat(Object(he.a)(i),[s])}return Me({},e,{cart:i});case x:var m=0,u=0;e.cart.forEach((function(e){m+=e.total,u+=e.count}));var d=.2*(m=parseFloat(m.toFixed(2)));d=parseFloat(d.toFixed(2));var p=m+d;return p=parseFloat(p.toFixed(2)),Me({},e,{cartItems:u,cartSubTotal:m,cartTax:d,cartTotal:p});case N:return localStorage.setItem("cart",JSON.stringify(e.cart)),e;case k:var g;return g=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],Me({},e,{cart:g});case w:var h=localStorage.getItem("singleProduct")?JSON.parse(localStorage.getItem("singleProduct")):{};return Me({},e,{singleProduct:h});case O:return localStorage.removeItem("cart"),Me({},e,{cart:[]});case S:var C=e.cart.filter((function(e){return e.id!==t.payload})),z=e.cart.find((function(e){return e.id===t.payload}));return z.count=z.count-1,0===z.count?Me({},e,{cart:C}):(z.total=z.count*z.price,z.total=parseFloat(z.total.toFixed(2)),Me({},e,{cart:[].concat(Object(he.a)(C),[z])}));case T:var L=e.cart.filter((function(e){return e.id!==t.payload}));return Me({},e,{cart:L});case j:var R=t.payload.target,q=R.name,A="checkbox"===R.type?t.payload.target.checked:t.payload.target.value;return Me({},e,Object($e.a)({},q,A));case P:var F=Object(he.a)(e.storeProducts);return F=F.filter((function(t){return t.price<=parseInt(e.price)})),"all"!==e.company&&(F=F.filter((function(t){return t.company===e.company}))),e.shipping&&(F=F.filter((function(e){return!0===e.freeShipping}))),e.search.length>0&&(F=F.filter((function(t){var a=new RegExp("".concat(e.search),"gi");return t.title.match(a)||t.company.match(a)}))),Me({},e,{filteredProducts:F});default:return e}},Ve=Object(l.c)({products:He}),Qe=Object(l.d)(Ve,{},Object(l.a)(s.a));i.a.render(r.a.createElement(o.a,{store:Qe},r.a.createElement(B.a,null,r.a.createElement(Ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&(new URL("/store",window.location.href).origin,window.location.origin,window.addEventListener("load",(function(){var e="".concat("/store","/service-worker.js");_e?(function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):We(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,Ke),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):We(e,Ke)})))}},[[43,1,2]]]);
//# sourceMappingURL=main.383d7fef.chunk.js.map
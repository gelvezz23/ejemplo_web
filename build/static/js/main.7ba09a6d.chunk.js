(this.webpackJsonppage=this.webpackJsonppage||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/logo_FCE.78cdece6.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/logo_FCE.9f574d56.png"},31:function(e,a,t){e.exports=t(52)},36:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/img33.6bf45683.gif"},47:function(e,a,t){e.exports=t.p+"static/media/card1.7311a4d7.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/card2.c987b2cd.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/card3.80d2ba19.jpg"},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),i=t.n(c),l=(t(36),t(1)),o=t(11),u=t(4),m=t(9),s=t(3),d=t(5),k=t(28),p=t.n(k),E=t(29),g=t.n(E),h=(t(41),t(16)),v=t.n(h),b=function(e){return{type:"GET_PRODUCT_SEARCH",payload:e}},f=function(e){return{type:"GET_ONLY_PRODUCT",payload:e}},N=function(e){return{type:"SET_PRODUCTS",payload:e}},w=(t(42),{getProduct:b}),y=Object(u.b)((function(e){return{searching:e.searching}}),w)((function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],i=t[1],o=e.getProduct,u=e.searching;return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"uk-inline"},r.a.createElement(l.b,{className:"uk-form-icon uk-form-icon-flip btn-clic2work-search uk-light",to:"/Categories/pantalon"+c,"uk-icon":"icon: search"}),r.a.createElement("input",{id:"search-input",name:"inputSearch",className:"uk-input input-form uk-form-width-large",type:"text",placeholder:"Escribe aqui el producto o servicio que deseas!",onChange:function(e){var a=e.target.value;a?(o(a),i(a)):o("")}}),r.a.createElement("div",{"uk-dropdown":"mode: click; pos: bottom-justify"},r.a.createElement("ul",{className:"uk-nav uk-dropdown-nav"},r.a.createElement("li",{className:"uk-active "},r.a.createElement(l.b,{to:"/"},"Buscando ...")),u.length>0&&u.map((function(e){return r.a.createElement("li",{key:e.id,className:"uk-active "},r.a.createElement(l.b,{to:"/Categories/"+e.nombre}," ",e.nombre))}))))))})),x=Object(u.b)((function(e){return{mylist:e.mylist}}),null)((function(e){var a=e.mylist;return r.a.createElement("ul",{className:"uk-nav uk-dropdown-nav"},r.a.createElement("li",{className:"uk-nav-header"},"Tu pedido"),r.a.createElement("li",{className:"uk-active"},r.a.createElement("div",{className:"uk-grid-small","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand"},"Productos"),r.a.createElement("div",null,"Precio"),r.a.createElement("div",null,"cant"))),0===a.length&&r.a.createElement("li",{className:"uk-margin"},r.a.createElement("h3",null,"No hay productos")),a.length>0&&a.map((function(e){return r.a.createElement("li",{key:e.id,className:"uk-active"},r.a.createElement("div",{className:"uk-grid-small","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand","uk-leader":"true"},e.title),r.a.createElement("div",null,"$ ".concat(e.precio)),r.a.createElement("div",null,"x ".concat(e.cantidad))))})),r.a.createElement("li",{className:"uk-nav-divider"}),r.a.createElement("li",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-grid-small uk-width-1-1","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand uk-width-1-1"},r.a.createElement(l.b,{to:"/Cart",className:"uk-button btn-clic2work uk-light uk-width-1-1 uk-text-capitalize"},"Ver carrito")))))})),O=Object(u.b)((function(e){return{user:e.user,mylist:e.mylist}}),null)((function(e){var a=e.isBlack,t=(e.user,e.mylist),n=v()({"":!0}),c=v()({"":!0});return a&&(n=v()({"uk-background-secondary":!0}),c=v()({"btn-clic2work uk-light":!0})),r.a.createElement("nav",{className:"uk-navbar-transparent ".concat(n),"uk-navbar":"true"},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("ul",{className:"uk-navbar-nav uk-margin-left "},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{className:"uk-margin-small",src:a?g.a:p.a,width:"170px",alt:""}))))),a&&r.a.createElement("div",{className:"uk-navbar-center uk-width-1-1"},r.a.createElement("ul",{className:"uk-navbar-nav uk-width-1-1"},r.a.createElement("div",{className:"uk-navbar-item uk-width-1-1 item-navbar"},r.a.createElement(y,null)))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement("p",{"uk-icon":"icon : cart; ratio: 1.8"},r.a.createElement("span",{className:"uk-badge clic2work-color"},t.length)),r.a.createElement("div",{className:"uk-margin-top","uk-dropdown":"pos: bottom-right;"},r.a.createElement(x,null))),r.a.createElement("div",{className:"uk-navbar-item item-navbar"},r.a.createElement(l.b,{to:"/Login",className:"uk-button uk-text-capitalize ".concat(c)},"Entrar")),r.a.createElement("div",{className:"uk-navbar-item item-navbar"},r.a.createElement(l.b,{to:"/Registro",className:"uk-button btn-clic2work uk-light uk-text-capitalize"},"Registrate")))))})),j=(t(44),function(e){var a=Object(n.useState)({name:"",email:""}),t=Object(d.a)(a,2),c=t[0],i=t[1],o=function(e){i(Object(s.a)({},c,Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("section",{className:"uk-container "},r.a.createElement("div",{className:"uk-card uk-width-1-2@m uk-border-rounded uk-align-center"},r.a.createElement("div",{className:"uk-card-header"},r.a.createElement("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("h2",{className:""},"Bienvenido a Working")))),r.a.createElement("form",{id:"formulario-registro",onSubmit:function(a){a.preventDefault();var t="http://localhost:4000/login/".concat(c.email,"/").concat(c.name);fetch(t).then((function(e){return e.json()})).then((function(a){200==a.status&&(console.log(a),sessionStorage.setItem("user",JSON.stringify(a.user)),e.history.push("/dashboard"))})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user;ratio: 2;"}),r.a.createElement("input",{onChange:o,name:"name",className:"uk-input uk-form-large border-round ",type:"text",placeholder:"Nombre de usuario"}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: lock;ratio: 2;"}),r.a.createElement("input",{onChange:o,name:"email",className:"uk-input uk-form-large border-round",type:"text",placeholder:"Email"}))),r.a.createElement("div",{className:"uk-card-footer"},r.a.createElement("button",{className:"uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom"},r.a.createElement("span",{"uk-icon":"icon: chevron-double-right; ratio: 2"}),"Iniciar sesion con nosotros")))),r.a.createElement("div",{className:"uk-card-footer"},r.a.createElement(l.b,{to:"#",className:"uk-button btn-clic2work-blue uk-light uk-width-1-1 uk-margin-small-bottom"},r.a.createElement("span",{"uk-icon":"icon: facebook; ratio: 2"}),"Iniciar sesion con facebook"),r.a.createElement(l.b,{to:"#",className:"uk-button btn-clic2work-red uk-light uk-width-1-1 uk-margin-small-bottom"},r.a.createElement("span",{"uk-icon":"icon: google; ratio: 2"}),"Iniciar sesion con Google")))))}),C=t(14),_=t(17),S=function(e,a){switch(a.type){case"ADD_CART":return Object(s.a)({},e,{mylist:[].concat(Object(_.a)(e.mylist),[a.payload])});case"GET_PRODUCT_SEARCH":if(""===a.payload)return Object(s.a)({},e,{searching:{}});var t=Object(_.a)(e.products);return Object(s.a)({},e,{searching:t.filter((function(e){return e.nombre.toLowerCase().includes(a.payload.toLocaleLowerCase())}))});case"GET_ONLY_PRODUCT":if(""===a.payload)return Object(s.a)({},e,{searching:{}});var n=Object(_.a)(e.products);return Object(s.a)({},e,{searching:n.filter((function(e){return e.nombre.toLowerCase().includes(a.payload.toLocaleLowerCase())}))});case"DELETE_PRODUCT":return Object(s.a)({},e,{mylist:e.mylist.filter((function(e){return e.id!==a.payload}))});case"UPDATE_INC_AMOUNT":return Object(s.a)({},e,{mylist:e.mylist.map((function(e){return e.id===a.payload.id?Object(s.a)({},e,{cantidad:a.payload.cantidad}):e}))});case"SET_PRODUCTS":return Object(s.a)({},e,{products:Object(_.a)(a.payload)});default:return e}},T=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||C.b,q=Object(C.c)(S,{user:{},playing:{},searching:{},mylist:[],products:[{id:1,title:"tubo pvc",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:2,title:"tubo pvc rectangular",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:3,title:"tubo plex",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:4,title:"tubo pvc polipropeno",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:5,title:"tubo pvc polipropeno",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:6,title:"tubo pvc polipropeno",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:7,title:"tubo pvc polipropeno de 1 metro con 4 cm de diametro",precio:1200,cantidad:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"}],employee:[{id:111,name:"Pablo",title:"arquitecto",precio:1e3,email:"pablo@clic2work.com",rate:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"},{id:222,name:"carlos",title:"ingeniero de sistemas",precio:1e3,email:"carlos@devhome.dev",rate:0,cover:"http://dummyimage.com/600x600.png/99118E/ffffff",description:"Vestibulum ac est lacinia nisi venenatis tristique"}]},T),P=(t(45),t(46),t(47),t(48),t(49),{setProducts:N}),D=Object(u.b)(null,P)((function(e){var a=e.setProducts;return Object(n.useEffect)((function(){fetch("http://localhost:4000/producto").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("section",{className:"header-home"},r.a.createElement("div",{className:"uk-child-width-expand@s","uk-grid":"true"},r.a.createElement("div",{className:"uk-margin-xlarge-top  uk-container"},r.a.createElement("br",null),r.a.createElement("h3",{className:"uk-text-bolder"},"El estilo y la calidad a tan solo",r.a.createElement("br",null),"un click \xbf que estas esperando ?"),r.a.createElement("div",{className:"uk-margin uk-container"},r.a.createElement(y,{key:"search"}),r.a.createElement("nav",{className:"uk-navbar-container uk-navbar-transparent uk-margin-xlarge-top uk-margin-left","uk-navbar":"true"},r.a.createElement("div",{className:"uk-navbar-bottom"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:"uk-active"},r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement(l.b,{className:"uk-link-reset",to:"/"},"Contacto"))),r.a.createElement("li",{className:"uk-active"},r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement(l.b,{className:"uk-link-reset",to:"/Categories/pantalon negro"},"Precios"))),r.a.createElement("li",{className:"uk-active"},r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement(l.b,{className:"uk-link-reset",to:"/"},"Sobre Nosotros")))))))),r.a.createElement("div",{className:"uk-align-center uk-grid-item-match"},r.a.createElement("div",{className:"uk-card uk-card-body uk-width-xlarge"},r.a.createElement("iframe",{width:"500",height:"600",src:"https://www.instagram.com/fcexclusive/",frameBorder:"0"}))))),r.a.createElement("section",{className:"uk-container"},r.a.createElement("div",{className:"uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":"true"},r.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},r.a.createElement("img",{src:"https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/94203355_269141940766949_4652043487188727145_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=rytFB5cYNd8AX8mN0w7&_nc_tp=24&oh=d72fe0b1ebef36be76fd32698121d7b4&oe=5FC07A93",alt:"","uk-cover":"true","uk-img":"true"}),r.a.createElement("canvas",{width:"500",height:"300"})),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body uk-position-large"},r.a.createElement("h1",{className:"uk-card-title"},r.a.createElement("strong",null,"Contamos con diferentes dise\xf1os ",r.a.createElement("br",null),"la mejor kalidad y precio")),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas a, quos velit facilis dolores, minima unde error consectetur hic veritatis commodi nemo possimus tempora inventore. Accusantium harum ipsam quas incidunt?"," ")))),r.a.createElement("div",{className:"uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":"true"},r.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},r.a.createElement("img",{src:"https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/93961333_245694093157203_4435444260754203015_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=e9pRDQ_2EewAX-F1rpq&oh=ec9d755305f319b4f11501fa212e0f42&oe=5FBFBBFB",alt:"","uk-cover":"true","uk-img":"true"}),r.a.createElement("canvas",{width:"500",height:"300"})),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body uk-position-large"},r.a.createElement("h3",{className:"uk-card-title"},"Calidad garantizada"),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos odit, obcaecati ipsa suscipit optio corrupti porro numquam expedita, odio quis culpa ullam doloremque perspiciatis minima ipsum? Ullam quibusdam sed fuga?")))),r.a.createElement("div",{className:"uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":"true"},r.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},r.a.createElement("img",{src:"https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/19533674_147710315788320_8721418414402306048_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=DVzQBQCpAHgAX_YZL0r&_nc_tp=18&oh=749fc15d826b022a10a1b1852eaec898&oe=5FBEB466",alt:"","uk-cover":"true","uk-img":"true"}),r.a.createElement("canvas",{width:"500",height:"300"})),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body uk-position-large"},r.a.createElement("h3",{className:"uk-card-title"},"F\xe1cil y seguro"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt voluptate, distinctio nemo velit perspiciatis nobis accusamus necessitatibus delectus, odit eos corporis minus ipsam libero ducimus facilis, aliquam rem assumenda."))))),r.a.createElement("section",null,r.a.createElement("div",{className:"uk-height-large uk-background-cover uk-overflow-hidden uk-dark uk-flex uk-flex-top uk-background-muted"},r.a.createElement("div",{className:"uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"},r.a.createElement("h1",{"uk-parallax":"opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;",className:"uk-text-secondary"},"Tienes dudas sobre tus ordenes o c\xf3mo comprar ?"),r.a.createElement("p",{"uk-parallax":"opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;",className:"uk-text-secondary uk-text-bold"},"Llama a la l\xednea para clientes :",r.a.createElement("span",{className:"uk-text-warning"},"+57 302 2199037"))))))})),F=(t(50),{getProduct:b,addCart:function(e){return{type:"ADD_CART",payload:e}},updateIncAmount:function(e){return{type:"UPDATE_INC_AMOUNT",payload:e}}}),A=Object(u.b)((function(e){return{searching:e.searching,mylist:e.mylist}}),F)((function(e){var a=e.id,t=e.title,c=e.precio,i=e.cover,o=e.description,u=e.onCart,m=e.mylist,s=e.cantidadonCart,k=Object(n.useState)(1),p=Object(d.a)(k,2),E=p[0],g=p[1],h=Object(n.useState)(s),v=Object(d.a)(h,2),b=v[0],f=v[1],N=Object(n.useState)(1),w=Object(d.a)(N,2),y=w[0],x=w[1],O=Object(n.useState)(y),j=Object(d.a)(O,2),C=j[0],_=j[1],S=function(){m.find((function(e){return e.id===a}));e.addCart({id:a,title:t,precio:c,cover:i,description:o,cantidad:E})};return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card uk-card-hover uk-card-body uk-border-rounded uk-box-shadow-small"},u?null:r.a.createElement("div",{className:"uk-card-badge text-align-r"},r.a.createElement("input",{className:"uk-input uk-form-blank uk-form-width-small text-align-r",min:"0",value:E,type:"number",name:"cantidad",onChange:function(e){var a=e.target.value;g(a),a<1&&(g(1),e.target.value=null)}})),r.a.createElement("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-auto"},r.a.createElement("img",{className:"uk-border-circle",alt:"...",width:"50",height:"50",src:i})),r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("h3",{className:"uk-card-title"},t),r.a.createElement("p",{className:"uk-margin-remove-top"},"Precio: ".concat(c)),r.a.createElement("div",{className:"uk-margin-remove-top"},u?r.a.createElement("div",{className:"uk-button-group"},r.a.createElement("button",{className:"uk-button btn-clic2work uk-light  uk-text-capitalize uk-width-auto",onClick:function(e){_(1),f(parseInt(b,10)-parseInt(C,10))},name:a},"-"),r.a.createElement("input",{className:"uk-input uk-form-blank uk-form-width-xsmall",type:"text",onChange:function(e){console.log("valor on cart : "+e.target.value)},name:"cantidad",value:b}),r.a.createElement("button",{className:"uk-button btn-clic2work  uk-light uk-text-capitalize uk-width-auto",onClick:function(e){x(1),f(parseInt(b,10)+parseInt(y,10))},name:a},"+")):null))),u?null:r.a.createElement("p",null,o),r.a.createElement("div",{className:"uk-width-auto "},u?null:r.a.createElement(l.b,{to:"",className:"uk-button btn-clic2work uk-light","uk-toggle":"target: #modal-group-".concat(a)},"ver mas"),u?null:r.a.createElement("button",{className:"uk-button btn-clic2work uk-margin-left uk-light",onClick:S},"comprar"))),r.a.createElement("div",{id:"modal-group-".concat(a),"uk-modal":"true"},r.a.createElement("div",{className:"uk-modal-dialog"},r.a.createElement("button",{className:"uk-modal-close-default",type:"button","uk-close":"true"}),r.a.createElement("div",{className:"uk-modal-header"},r.a.createElement("h2",{className:"uk-modal-title"},t)),r.a.createElement("div",{className:"uk-modal-body"},r.a.createElement("div",{className:"uk-width-auto"},r.a.createElement("img",{className:"uk-border-circle",alt:"...",src:i})),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"uk-modal-footer uk-text-right"},r.a.createElement("button",{className:"uk-button btn-clic2work uk-margin-left uk-light uk-modal-close",type:"button"},"Cancel"),r.a.createElement("button",{className:"uk-button btn-clic2work uk-margin-left uk-light",onClick:S},"comprar")))))})),L={getOnlyProduct:f,setProducts:N},R=Object(u.b)((function(e){return{searching:e.searching,products:e.products}}),L)((function(e){var a=e.setProducts,t=e.searching,c=e.products;return Object(n.useEffect)((function(){var t=e.match.params.id;if(fetch("http://localhost:4000/producto").then((function(e){return e.json()})).then((function(e){return a(e)})),!t)return"No hay productos";f(t)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{isBlack:!0}),r.a.createElement("div",{className:"item-responsibe"},r.a.createElement(y,null)),r.a.createElement("div",{className:"uk-container uk-align-center"},r.a.createElement("section",{className:"uk-child-width-1-3@m uk-grid-small uk-grid-match","uk-grid":"true"},0===t.length&&r.a.createElement("h3",null,"No hay productos."),t.length>0&&t.map((function(e){return r.a.createElement(A,{key:e.id,id:e.id,title:e.nombre,precio:e.valor,cantidad:e.cantidad,cover:e.img,description:e.descripcioncorta})})),c.length>0&&c.map((function(e){return r.a.createElement(A,{key:e.id,id:e.id,title:e.nombre,precio:e.valor,cantidad:e.cantidad,cover:e.img,description:e.descripcioncorta})})))))})),I=function(e){var a=Object(n.useState)({name:"",QuienesSomos:"",email:"",direccion:"",telefono:"",facebook:"",twitter:"",instagram:""}),t=Object(d.a)(a,2),c=t[0],i=t[1],l=function(e){i(Object(s.a)({},c,Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("section",{className:"uk-container"},r.a.createElement("form",{id:"formulario-registro",onSubmit:function(a){a.preventDefault();var t=c;console.log(t),fetch("http://localhost:4000/empresa",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){200==a.status&&e.history.push("/Login")})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement("div",{className:"uk-card uk-width-1-2@m uk-border-rounded uk-align-center"},r.a.createElement("div",{className:"uk-card-header"},r.a.createElement("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("h2",{className:""},"Bienvenido a Working")))),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user;ratio: 1;"}),r.a.createElement("input",{name:"name",className:"uk-input uk-form-large border-round ",type:"text",placeholder:"Nombre",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user;ratio: 1;"}),r.a.createElement("input",{name:"QuienesSomos",className:"uk-input uk-form-large border-round ",type:"text",placeholder:"Apellido",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: mail;ratio: 1;"}),r.a.createElement("input",{name:"email",className:"uk-input uk-form-large border-round ",type:"email",placeholder:"Email de contacto",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: home;ratio: 1;"}),r.a.createElement("input",{name:"direccion",className:"uk-input uk-form-large border-round ",type:"text",placeholder:"Direccion",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: receiver;ratio: 1;"}),r.a.createElement("input",{name:"telefono",className:"uk-input uk-form-large border-round",type:"number",placeholder:"Telefono de contacto",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: facebook;ratio: 1;"}),r.a.createElement("input",{name:"facebook",className:"uk-input uk-form-large border-round",type:"text",placeholder:"Facebook",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: twitter;ratio: 1;"}),r.a.createElement("input",{name:"twitter",className:"uk-input uk-form-large border-round",type:"text",placeholder:"Twitter",onChange:l,required:!0}))),r.a.createElement("div",{className:"uk-margin uk-width-1-1"},r.a.createElement("div",{className:"uk-inline uk-width-1-1"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: instagram;ratio: 1;"}),r.a.createElement("input",{name:"instagram",className:"uk-input uk-form-large border-round",type:"text",placeholder:"Instagram",onChange:l,required:!0})))),r.a.createElement("div",{className:"uk-card-footer"},r.a.createElement("button",{className:"uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom"},r.a.createElement("span",{"uk-icon":"icon: chevron-double-right; ratio: 2"}),"Registrate"))))))},B=function(){var e=Object(n.useState)({estado:"",categoria:""}),a=Object(d.a)(e,2),t=a[0],c=a[1],i=t.estado,l=t.categoria,o=function(e){var a=e.target;c(Object(s.a)({},t,Object(m.a)({},a.name,a.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"uk-container "},r.a.createElement("div",{className:"uk-card uk-width-1-2@m uk-border-rounded uk-align-center"},r.a.createElement("div",{className:"uk-card-header"},r.a.createElement("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("h2",{className:""},"Agregar categoria")))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t;fetch("http://localhost:4000/categoria",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){200===e.status&&console.log(e)})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement("input",{type:"text",name:"categoria",value:l,onChange:o,className:"uk-input uk-form-large border-round",placeholder:"categoria"}),r.a.createElement("select",{name:"estado",id:"estado",value:i,className:"uk-input uk-form-large border-round",onChange:o},r.a.createElement("option",{value:""}," - Seleccione estado -"),r.a.createElement("option",{value:"1"},"activo"),r.a.createElement("option",{value:"0"},"inactivo")),r.a.createElement("div",{className:"uk-card-footer"},r.a.createElement("button",{type:"submit",className:"uk-button btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom"},r.a.createElement("span",{"uk-icon":"icon: chevron-double-right; ratio: 2"}),"Enviar"))))))},U=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)({referencia:"",nombre:"",descripcion:"",detalle:"",valor:"",categorias:"",estado:"",imagen:""}),l=Object(d.a)(i,2),o=l[0],u=l[1],k=o.referencia,p=o.nombre,E=o.descripcion,g=o.detalle,h=o.valor,v=o.imagen,b=function(e){var a=e.target;u(Object(s.a)({},o,Object(m.a)({},a.name,a.value)))};Object(n.useEffect)((function(){fetch("http://localhost:4000/categoria").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"uk-container "},r.a.createElement("div",{className:"uk-card uk-width-1-2@m uk-border-rounded uk-align-center"},r.a.createElement("div",{className:"uk-card-header"},r.a.createElement("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true"},r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("h2",{className:""},"Agregar producto")))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=o;console.log(a),fetch("http://localhost:4000/producto",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){200===e.status&&(console.log(e),u({referencia:"",nombre:"",descripcion:"",detalle:"",valor:"",categorias:"",estado:"",imagen:""}))})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement("input",{type:"text",name:"referencia",value:k,onChange:b,className:"uk-input uk-margin uk-form-large border-round",placeholder:"referencia"}),r.a.createElement("input",{type:"text",name:"nombre",value:p,onChange:b,className:"uk-input uk-margin uk-form-large border-round",placeholder:"nombre"}),r.a.createElement("input",{type:"text",name:"descripcion",value:E,onChange:b,className:"uk-input uk-margin uk-form-large border-round",placeholder:"descripcion"}),r.a.createElement("input",{type:"text",name:"detalle",value:g,onChange:b,className:"uk-input uk-margin uk-form-large border-round",placeholder:"detalle"}),r.a.createElement("input",{type:"number",name:"valor",value:h,onChange:b,className:"uk-input uk-margin uk-form-large border-round",placeholder:"valor"}),r.a.createElement("select",{name:"estado",onChange:b,className:"uk-input uk-margin uk-form-large border-round"},r.a.createElement("option",{value:""},"- seleccione estado -"),r.a.createElement("option",{value:"1"},"activo"),r.a.createElement("option",{value:"0"},"inactivo")),r.a.createElement("select",{name:"categorias",onChange:b,className:"uk-input uk-margin uk-form-large border-round"},r.a.createElement("option",{value:""}," - Seleccione categoria -"),t.map((function(e,a){return"1"===e.estado&&r.a.createElement("option",{key:a,value:e.id},e.descripcion)}))),r.a.createElement("input",{type:"text",name:"imagen",value:v,onChange:b,className:"uk-input uk-margin uk-form-large border-round",placeholder:"URL Imagen"}),r.a.createElement("div",{className:"uk-card-footer"},r.a.createElement("button",{className:"uk-button uk-margin btn-clic2work-orange uk-light uk-width-1-1 uk-margin-small-bottom"},r.a.createElement("span",{"uk-icon":"icon: chevron-double-right; ratio: 2"}),"Enviar"))))))};var V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("section",null,r.a.createElement(B,null),r.a.createElement(U,null)))},z=Object(u.b)((function(e){return{mylist:e.mylist}}),null)((function(e){var a=e.mylist;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{isBlack:!0}),r.a.createElement("div",{className:"uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center","uk-grid":"true"},r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body"},"Productos",0===a.length&&r.a.createElement("h3",null,"No hay productos."),a.length>0&&a.map((function(e){return r.a.createElement(A,{onCart:!0,key:e.id,id:e.id,title:e.title,precio:e.precio,cantidadonCart:e.cantidad,cover:e.cover,description:e.description})}))),r.a.createElement("div",{className:"uk-width-1-2@s uk-width-2-5@m"},"Servicios")),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-padding"},"Item")),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-padding"},"Item"))))})),X=function(){return r.a.createElement("div",{className:"uk-grid-collapse uk-child-width-expand@s uk-text-left","uk-grid":"true"},r.a.createElement("div",null,r.a.createElement("div",{className:"uk-padding"},r.a.createElement("div",{className:"uk-width-1-2@s uk-width-2-5@m"},r.a.createElement("ul",{className:"uk-nav uk-nav-default"},r.a.createElement("li",{className:"uk-nav-header"},"Menu"),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Contacto")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/Categories/pantalon negro"},"Precio")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Sobre nosotros")))))),r.a.createElement("div",{className:"uk-padding"},r.a.createElement("div",{className:"uk-width-1-2@s uk-width-2-5@m"},r.a.createElement("ul",{className:"uk-nav uk-nav-default"},r.a.createElement("li",{className:"uk-nav-header"},"Redes sociales"),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{"uk-icon":"icon: facebook"})," Facebook")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{"uk-icon":"icon: instagram"})," Instagram")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{"uk-icon":"icon: twitter"}),"Twitter"))))))},J=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,a,r.a.createElement(X,null))},Q=(t(51),function(){return r.a.createElement(u.a,{store:q},r.a.createElement(l.a,null,r.a.createElement(J,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:D}),r.a.createElement(o.a,{exact:!0,path:"/Cart",component:z}),r.a.createElement(o.a,{exact:!0,path:"/Login",component:j}),r.a.createElement(o.a,{exact:!0,path:"/Registro",component:I}),r.a.createElement(o.a,{exact:!0,path:"/Categories/:id",component:R}),r.a.createElement(o.a,{exact:!0,path:"/dashboard",component:V})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.7ba09a6d.chunk.js.map
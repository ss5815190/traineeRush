"use strict";(self.webpackChunktraineeRush=self.webpackChunktraineeRush||[]).push([[261],{261:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var s=n(165),r=n(861),a=n(439),c=n(791),i=n(187),o="Cart_cart-items__jO4oP",l="Cart_total__5T0p9",u="Cart_actions__+npq6",d="Cart_button--alt__GXRve",h="Cart_button__wAAz6",m=n(823),p="CartItem_cart-item__cWKWf",x="CartItem_summary__jGJXK",_="CartItem_price__hiUBz",j="CartItem_amount__0NKsD",v="CartItem_actions__Xcevi",C=n(184);var f=function(e){var t=e.name,n=e.price,s=e.amount,r=e.ice,a=e.sweetness,c=e.onRemove,i=e.onAdd;return(0,C.jsxs)("li",{className:p,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:t}),(0,C.jsx)("span",{children:"\u51b0\u584a:".concat(r)})," ",(0,C.jsx)("span",{children:"\u751c\u5ea6:".concat(a)}),(0,C.jsxs)("div",{className:x,children:[(0,C.jsx)("span",{className:_,children:"$ ".concat(n)}),(0,C.jsxs)("span",{className:j,children:["x"," ",s]})]})]}),(0,C.jsxs)("div",{className:v,children:[(0,C.jsx)("button",{type:"button",onClick:c,children:"\u2212"}),(0,C.jsx)("button",{type:"button",onClick:i,children:"+"})]})]})},N="Checkout_form__cOSNN",b="Checkout_control__Ch+3z",y="Checkout_actions__zNcSH",k="Checkout_submit__PPdum",S="Checkout_invalid__kBqkg",A=function(e){return""===e.trim()};var I=function(e){var t=e.onCancel,n=e.onSubmit,s=e.setIsSubmit,r=(0,c.useContext)(i.A).dispatch,o=(0,c.useRef)(),l=(0,c.useRef)(),u=(0,c.useRef)(),d=(0,c.useState)({name:!0,phone:!0,address:!0}),h=(0,a.Z)(d,2),m=h[0],p=h[1],x=function(e){var t=e.id;return"".concat(b," ").concat(m[t]?"":S)};return(0,C.jsxs)("form",{className:N,onSubmit:function(e){e.preventDefault();var t=o.current.value,a=l.current.value,c=u.current.value;return p({name:!A(t),phone:!A(a),address:!A(c)}),A(t)||A(a)||A(c)||(n({name:t,phone:a,address:c}),r({type:"CLEAR"}),s(!0)),null},children:[(0,C.jsxs)("div",{className:x({id:"name"}),children:[(0,C.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,C.jsx)("input",{type:"text",id:"name",ref:o}),!m.name&&(0,C.jsx)("p",{children:"Please enter a valid Name!"})]}),(0,C.jsxs)("div",{className:x({id:"phone"}),children:[(0,C.jsx)("label",{htmlFor:"phone",children:"Your Phone"}),(0,C.jsx)("input",{type:"text",id:"phone",ref:l}),!m.phone&&(0,C.jsx)("p",{children:"Please enter a valid phone!"})]}),(0,C.jsxs)("div",{className:x({id:"address"}),children:[(0,C.jsx)("label",{htmlFor:"address",children:"Your Address"}),(0,C.jsx)("input",{type:"text",id:"address",ref:u}),!m.address&&(0,C.jsx)("p",{children:"Please enter a valid address! "})]}),(0,C.jsxs)("div",{className:y,children:[(0,C.jsx)("button",{type:"button",onClick:t,children:"Cancel"}),(0,C.jsx)("button",{className:k,type:"submit",children:"Confirm"})]})]})};var R=function(){var e=(0,c.useContext)(i.A),t=e.setCartIsShown,n=e.totalAmount,p=e.cart,x=e.dispatch,_=(0,c.useState)(!1),j=(0,a.Z)(_,2),v=j[0],N=j[1],b=(0,c.useState)(!1),y=(0,a.Z)(b,2),k=y[0],S=y[1],A=function(){t(!1)},R=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/orders",{method:"POST",body:JSON.stringify({userRequest:t,orderItemRequestList:p,totalAmount:n}),headers:{"Content-Type":"application/json"}});case 3:return(r=e.sent).ok||console.error("\u8acb\u6c42\u5931\u6557"),e.next=7,r.json();case 7:a=e.sent,console.log(a),console.log(JSON.stringify({user:t,orderedItemList:p,totalAmount:n})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("\u767c\u751f\u932f\u8aa4\uff1a",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),g=(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("button",{className:d,onClick:A,type:"button",children:"Close"}),p.length>0&&(0,C.jsx)("button",{className:h,onClick:function(){return N(!0)},type:"button",children:"Order"})]});return(0,C.jsxs)(m.Z,{onClose:A,children:[!k&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("ul",{className:o,children:p.map((function(e){return(0,C.jsx)(f,{name:e.name,amount:e.quantity,price:e.price,ice:e.ice,sweetness:e.sweetness,onRemove:function(){return t=e.id,void x({type:"DECREASE_QUANTITY",payload:{id:t}});var t},onAdd:function(){return t=e.id,void x({type:"INCREMENT_QUANTITY",payload:{id:t,quantity:1}});var t}},e.id)}))}),(0,C.jsxs)("div",{className:l,children:[(0,C.jsx)("span",{children:"Total Amount"}),(0,C.jsxs)("span",{children:["$"," ",n.toFixed(2)]})]})]}),v&&!k&&(0,C.jsx)(I,{onCancel:A,onSubmit:R,setIsSubmit:S}),!v&&!k&&g,k&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("p",{children:"Successfully sent the order!"}),(0,C.jsx)("div",{className:u,children:(0,C.jsx)("button",{className:d,onClick:A,type:"button",children:"Close"})})]})]})}}}]);
//# sourceMappingURL=261.f92cfce3.chunk.js.map
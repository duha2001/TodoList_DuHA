(this["webpackJsonptodo-list2"]=this["webpackJsonptodo-list2"]||[]).push([[0],{190:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(30),s=n.n(i),a=(n(189),n(190),n(280)),o=n(286),l=n(29),r=n(72),j=n(281),d=n(10);var h=function(e){return Object(c.useEffect)((function(){window.scrollTo(0,0),document.title="Th\xf4ng tin"}),[]),Object(d.jsxs)("div",{className:"Home",children:[Object(d.jsx)(j.a.h1,{initial:{y:-200},animate:{y:0},transition:{type:"spring",duration:.5},whileHover:{scale:1.1},children:"Todo List - DuHA HCMUE"}),Object(d.jsx)("h3",{className:"home-name",children:"Hu\u1ef3nh Anh D\u1ef1 - 4501104041"})]})},m=n(279),b=n(278),O=n(59),u=n(2),p=n(8),x=n(289),f=n(285),g=n(283),v=n(284),T=n(282),y=n(50),N=n(171),w=n(172),C=n(290),D=n(96),S=n(291),E=n(53),I=n.n(E),H=function(e){return{type:"UPDATE_TODO",payload:e}},_=n(183);_.a.config({bottom:0,placement:"bottomRight",duration:3});var Y={success:function(e,t){return _.a.success({message:e,description:t})},warning:function(e,t){return _.a.warning({message:e,description:t})},error:function(e,t){return _.a.error({message:e,description:t})}};var F=function(e){var t=Object(O.b)(),n=e.todo,i=Object(c.useState)(!1),s=Object(p.a)(i,2),a=s[0],o=s[1],l=Object(c.useState)(!1),r=Object(p.a)(l,2),h=r[0],m=r[1],E=Object(c.useState)(!1),_=Object(p.a)(E,2),F=_[0],k=_[1];return Object(d.jsxs)(b.a,{xs:2,sm:4,md:6,lg:6,xl:6,children:[Object(d.jsxs)("div",{className:"todo-item",children:[Object(d.jsx)("div",{className:"item-star",children:Object(d.jsx)("div",{className:"item-status",children:n.complete?Object(d.jsx)(C.a,{style:{fontSize:"35px",color:"#4BB543"}}):Object(d.jsx)(D.a,{style:{fontSize:"35px",color:"#FC100D"}})})}),Object(d.jsxs)("div",{className:"item-body",children:[Object(d.jsx)("h3",{className:"todo-name",children:n.name}),Object(d.jsxs)("p",{className:"todo-time",children:[Object(d.jsx)("span",{children:"H\u1ea1n ch\xf3t: "}),n.time]}),Object(d.jsx)("p",{className:"todo-status",children:n.complete?"\u0110\xe3 ho\xe0n th\xe0nh":"Ch\u01b0a ho\xe0n th\xe0nh"})]}),Object(d.jsxs)("div",{className:"item-end",children:[!n.complete&&Object(d.jsx)("div",{className:"item-icon",onClick:function(){var e=Object(u.a)(Object(u.a)({},n),{},{complete:!0});t(H(e)),m(!1),Y.success("Th\xe0nh c\xf4ng","\u0110\xe3 ho\xe0n th\xe0nh")},children:Object(d.jsx)(j.a.button,{whileHover:{scale:1.4},whileTap:{scale:.9},style:{color:"green"},children:Object(d.jsx)(N.a,{})})}),Object(d.jsx)("div",{className:"item-icon",onClick:function(){m(!0)},children:Object(d.jsx)(j.a.button,{whileHover:{scale:1.4},whileTap:{scale:.9},children:Object(d.jsx)(w.a,{})})}),Object(d.jsx)("div",{className:"item-icon",children:Object(d.jsx)(x.a,{title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?",visible:a,onConfirm:function(){k(!0),t({type:"DELETE_TODO",payload:n.id}),k(!1),o(!1),Y.success("Th\xe0nh c\xf4ng","X\xf3a th\xe0nh c\xf4ng")},okButtonProps:{loading:F},onCancel:function(){o(!1)},okText:"C\xf3",cancelText:"Kh\xf4ng",children:Object(d.jsx)(j.a.button,{whileHover:{scale:1.4},whileTap:{scale:.9},children:Object(d.jsx)(S.a,{style:{fontSize:"18px",color:"#FC100D"},onClick:function(){o(!0)}})})})})]})]}),Object(d.jsx)(f.a,{title:"Ch\u1ec9nh s\u1eeda c\xf4ng vi\u1ec7c",visible:h,onCancel:function(){m(!1)},footer:null,children:Object(d.jsxs)(g.a,{name:"basic",labelCol:{span:12},wrapperCol:{span:16},initialValues:{name:n.name},onFinish:function(e){var c=Object(u.a)(Object(u.a)({},n),{},{name:e.name,time:I()(e.time).format("DD-MM-YYYY").toString()});t(H(c)),m(!1),Y.success("Th\xe0nh c\xf4ng","C\u1eadp nh\u1eadp th\xe0nh c\xf4ng")},autoComplete:"off",children:[Object(d.jsx)(g.a.Item,{name:"name",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean c\xf4ng vi\u1ec7c!"}],children:Object(d.jsx)(v.a,{placeholder:"T\xean c\xf4ng vi\u1ec7c"})}),Object(d.jsx)(g.a.Item,{name:"time",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn th\u1eddi gian!"}],children:Object(d.jsx)(T.a,{placeholder:"Th\u1eddi gian \u0111\xe3 h\u1ebft h\u1ea1n"})}),Object(d.jsx)(g.a.Item,{wrapperCol:{offset:8,span:16},children:Object(d.jsx)(y.a,{type:"primary",htmlType:"submit",children:"C\u1eadp nh\u1eadp"})})]})})]})},k=n(288);var M=function(){var e=Object(O.c)((function(e){return e.todoReducer.todos}));return Object(c.useEffect)((function(){window.scrollTo(0,0),document.title="T\u1ea5t c\u1ea3 c\xf4ng vi\u1ec7c"}),[]),Object(d.jsxs)(k.a,{children:[Object(d.jsx)("div",{className:"title-List",children:Object(d.jsx)(j.a.h2,{initial:{y:-200},animate:{y:0},transition:{type:"spring",duration:.5},className:"title-List",whileHover:{scale:1.1},children:"T\u1ea5t c\u1ea3 c\xf4ng vi\u1ec7c c\u1ea7n l\xe0m"})}),Object(d.jsx)(m.a,{children:Object(d.jsx)(b.a,{span:24,children:Object(d.jsx)(m.a,{children:e.map((function(e){return Object(d.jsx)(F,{todo:e},e.id)}))})})})]})},V=n(287);var A=function(e){var t=Object(O.b)();return Object(c.useEffect)((function(){window.scrollTo(0,0),document.title="Th\xeam c\xf4ng vi\u1ec7c"}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"title-Form",children:Object(d.jsx)(j.a.h2,{initial:{y:-200},animate:{y:0},transition:{type:"spring",duration:.5},whileHover:{scale:1.1},children:"C\xf4ng vi\u1ec7c m\u1edbi"})}),Object(d.jsx)(m.a,{children:Object(d.jsx)(b.a,{span:12,children:Object(d.jsxs)(g.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{},onFinish:function(e){var n={id:Object(V.a)(),name:e.name,time:I()(e.time).format("DD/MM/YYYY").toString(),complete:!1};t({type:"ADD_TODO",payload:n}),Y.success("Th\xe0nh c\xf4ng","Th\xeam c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng")},autoComplete:"off",children:[Object(d.jsx)(g.a.Item,{name:"name",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean c\xf4ng vi\xeac!"}],children:Object(d.jsx)(v.a,{placeholder:"Nh\u1eadp t\xean c\xf4ng vi\u1ec7c"})}),Object(d.jsx)(g.a.Item,{name:"time",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn th\u1eddi gian !"}],children:Object(d.jsx)(T.a,{placeholder:"Th\u1eddi gian h\u1ebft h\u1ea1n",format:"DD/MM/YYYY"})}),Object(d.jsx)(g.a.Item,{wrapperCol:{offset:8,span:16},children:Object(d.jsx)(y.a,{type:"primary",htmlType:"submit",class:"button-primary",children:"Th\xeam c\xf4ng vi\u1ec7c"})})]})})})]})},L=n(148);n(269);var B=function(e){var t=Object(O.c)((function(e){return e.todoReducer.todos}));return Object(c.useEffect)((function(){window.scrollTo(0,0),document.title="Timeline"}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title-timeline",children:Object(d.jsx)(j.a.h1,{initial:{y:-200},animate:{y:0},transition:{type:"spring",duration:.5},whileHover:{scale:1.1},children:"Timeline"})}),Object(d.jsx)(L.VerticalTimeline,{children:t.map((function(e){return Object(d.jsxs)(L.VerticalTimelineElement,{className:"vertical-timeline-elemeny--work",date:e.date,iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},children:[Object(d.jsxs)("h3",{className:"vertical-timeline-element-title",children:[Object(d.jsx)("span",{children:"T\xean vi\u1ec7c l\xe0m:"})," ",e.name]}),Object(d.jsxs)("h4",{className:"vertical-timeline-element-subtitle",children:[Object(d.jsx)("span",{children:"H\u1ea1n deadline: "}),e.time]}),e.complete?Object(d.jsxs)("p",{className:"vertical-timeline-element-desc success",children:["Tr\u1ea1ng th\xe1i: ",Object(d.jsx)("span",{children:"\u0110\xe3 ho\xe0n th\xe0nh"})]}):Object(d.jsxs)("p",{className:"vertical-timeline-element-desc fail",children:["Tr\u1ea1ng th\xe1i: ",Object(d.jsx)("span",{children:"Ch\u01b0a ho\xe0n th\xe0nh"})]})]})}))})]})};var J=function(e){return Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:h}),Object(d.jsx)(l.a,{exact:!0,path:"/todos",component:M}),Object(d.jsx)(l.a,{exact:!0,path:"/todos/input",component:A}),Object(d.jsx)(l.a,{exact:!0,path:"/todos/timeline",component:B})]})},P=a.a.Header,R=a.a.Content;var q=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){document.title="Todo App"}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(a.a,{children:[Object(d.jsx)(P,{className:"site-layout-header",style:{padding:0},children:Object(d.jsxs)(o.a,{className:"menu",mode:"horizontal",defaultSelectedKeys:["/todos"],selectedKeys:[e],children:[Object(d.jsx)(o.a.Item,{children:Object(d.jsx)(r.b,{to:"/todos",children:"T\u1ea5t c\u1ea3 c\xf4ng vi\u1ec7c c\u1ea7n l\xe0m"})},"/todos"),Object(d.jsx)(o.a.Item,{children:Object(d.jsx)(r.b,{to:"/todos/input",children:"Th\xeam m\u1edbi"})},"/todos/input"),Object(d.jsx)(o.a.Item,{children:Object(d.jsx)(r.b,{to:"/todos/timeline",children:"M\u1ed1c th\u1eddi gian"})},"/todos/timeline"),Object(d.jsx)(o.a.Item,{children:Object(d.jsx)(r.b,{to:"/",children:"Th\xf4ng tin"})},"/")]})}),Object(d.jsx)(R,{className:"site-layout-content",style:{height:"100vh"},children:Object(d.jsx)(J,{})})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},U=n(98),K=n(178),X=n(11),G={todos:JSON.parse(localStorage.getItem("todos"))||[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=[].concat(Object(X.a)(e.todos),[t.payload]);return localStorage.setItem("todos",JSON.stringify(n)),{todos:n};case"UPDATE_TODO":var c=e.todos.filter((function(e){return e.id!==t.payload.id})),i=[].concat(Object(X.a)(c),[t.payload]);return localStorage.setItem("todos",JSON.stringify(i)),{todos:i};case"DELETE_TODO":var s=e.todos.filter((function(e){return e.id!==t.payload}));return localStorage.setItem("todos",JSON.stringify(s)),{todos:s};default:return e}},W=Object(U.b)({todoReducer:Q}),Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.c,$=Object(U.d)(W,Z(Object(U.a)(K.a)));s.a.render(Object(d.jsx)(O.a,{store:$,children:Object(d.jsx)(r.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root")),z()}},[[273,1,2]]]);
//# sourceMappingURL=main.b0e519be.chunk.js.map
(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},15:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),a=o(6),i=o.n(a),r=(o(12),o(7)),s=o(2),u=(o(13),o(0)),d=function(e){var t=e.addGood,o=Object(n.useState)(""),c=Object(s.a)(o,2),a=c[0],i=c[1],r=Object(n.useState)(1),d=Object(s.a)(r,2),j=d[0],l=d[1],b=Object(n.useState)("Have"),g=Object(s.a)(b,2),O=g[0],h=g[1],v=Object(n.useState)(""),x=Object(s.a)(v,2),p=x[0],f=x[1];return Object(u.jsxs)("form",{className:"goods-form",onSubmit:function(e){e.preventDefault(),t({goodName:a,goodPriority:j,goodStatus:O,goodStatusChange:p}),i(""),l(1),h("Have"),f("")},children:["Add your good",Object(u.jsxs)("label",{htmlFor:"good-name",children:["Name:\xa0",Object(u.jsx)("input",{id:"good-name",placeholder:"Good name",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("label",{htmlFor:"good-priority",children:["Priority:\xa0",Object(u.jsxs)("select",{id:"good-priority",value:j,onChange:function(e){return l(e.target.value)},children:[Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]})]}),Object(u.jsxs)("label",{htmlFor:"good-status",children:["Status:\xa0",Object(u.jsxs)("select",{id:"good-status",value:O,onChange:function(e){h(e.target.value);var t=new Date;f(t.toDateString()+", "+t.toLocaleTimeString())},children:[Object(u.jsx)("option",{value:"Have",children:"Have"}),Object(u.jsx)("option",{value:"Run out",children:"Run out"})]})]}),Object(u.jsx)("button",{type:"submit",children:"Add a good"})]})},j=function(){return Object(u.jsx)("div",{})};o(15);var l=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),o=t[0],c=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{goods:o,addGood:function(e){c((function(t){return[].concat(Object(r.a)(t),[e])}))}}),Object(u.jsx)(j,{goods:o})]})},b=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.d329df38.chunk.js.map
(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{40:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),o=n.n(c),r=n(16),u=n(33),i=n.n(u);var m=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(i.a,null),"Keeper"))};var s=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},p=n(35),E=n.n(p);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(E.a,null)))},f=n(23),h=n(36),b=n.n(h),v=n(84),g=n(85);var j=function(e){const t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(r.a)(u,2),m=i[0],s=i[1];function p(e){const t=e.target,n=t.name,a=t.value;s(e=>Object(f.a)(Object(f.a)({},e),{},{[n]:a}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){o(!0)},onChange:p,value:m.content,placeholder:"Take a note...",rows:c?3:1}),l.a.createElement(g.a,{in:c},l.a.createElement(v.a,{onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(b.a,null)))))},O=n(20),k=n.n(O);var C=function(){const e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];function o(e){k.a.post("http://localhost:3001/api/insert",{title:e.title,content:e.content}).then("Susccessful insert")}function u(e){k.a.delete("http://localhost:3001/api/delete/".concat(e))}return Object(a.useEffect)(()=>{k.a.get("http://localhost:3001/api/get").then(e=>{c(e.data)})},[o]),l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(j,{onAdd:o}),n.map((e,t)=>l.a.createElement(d,{key:t,id:e._id,title:e.title,content:e.content,onDelete:u})),l.a.createElement(s,null))};o.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.782bea25.chunk.js.map
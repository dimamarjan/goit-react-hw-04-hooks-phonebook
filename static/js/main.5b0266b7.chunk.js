(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,l,b,s,j,d=t(1),u=t.n(d),O=t(9),h=t.n(O),f=(t(16),t(6)),x=t(4),m=t(2),p=t(3),g=p.a.form(a||(a=Object(m.a)(["\ndisplay: block;\nwidth: 320px;\nborder: 2px solid black;\npadding: 10px;\n\nmargin-left: 5px;\n"]))),v=p.a.label(c||(c=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\nfont-size: 20px;\n"]))),C=p.a.span(r||(r=Object(m.a)(["\nmargin-bottom: 5px;\n"]))),w=p.a.input(i||(i=Object(m.a)(["\nwidth: 150px;\nmargin-bottom: 20px;\n"]))),k=p.a.button(o||(o=Object(m.a)([""]))),S=t(0);function y(e){var n=e.onHandleChange,t=e.onAddContact;return Object(S.jsx)("div",{children:Object(S.jsxs)(g,{onSubmit:t,children:[Object(S.jsxs)(v,{children:[Object(S.jsx)(C,{children:"Name"}),Object(S.jsx)(w,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n})]}),Object(S.jsxs)(v,{children:[Object(S.jsx)(C,{children:"Number"}),Object(S.jsx)(w,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n})]}),Object(S.jsx)(k,{children:"Add contact"})]})})}var A,z,D,E,F=p.a.label(l||(l=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\nfont-size: 20px;\nmargin-left: 15px;\n"]))),I=p.a.span(b||(b=Object(m.a)(["\nmargin-bottom: 10px;\n"]))),J=p.a.span(s||(s=Object(m.a)(["\ntext-decoration: underline;\nfont-weight: 600;\n"]))),H=p.a.input(j||(j=Object(m.a)(["\nwidth: 150px;\n"])));function N(e){var n=e.onHandleChange;return Object(S.jsx)("div",{children:Object(S.jsxs)(F,{children:[Object(S.jsxs)(I,{children:["Find contacts by ",Object(S.jsx)(J,{children:"name"})," or ",Object(S.jsx)(J,{children:"number"})]}),Object(S.jsx)(H,{name:"filter",onChange:n})]})})}var B=p.a.ul(A||(A=Object(m.a)(["\nmargin-left: 15px;\n"]))),P=p.a.li(z||(z=Object(m.a)(["\ntext-transform: capitalize;\n:not(:last-child){\n    margin-bottom: 15px;\n}\n"]))),Z=p.a.span(D||(D=Object(m.a)([""]))),q=p.a.button(E||(E=Object(m.a)(["\nmargin-left: 10px;\n"])));function L(e){var n=e.onDelete,t=e.filtredDataArr;return Object(S.jsx)("div",{children:Object(S.jsx)(B,{children:t.map((function(e){return Object(S.jsxs)(P,{children:[Object(S.jsxs)(Z,{children:[e.name,": ",e.number]}),Object(S.jsx)(q,{value:e.id,onClick:n,children:"Delete"})]},e.id)}))})})}var M=t(23);var T=function(){var e=function(e,n){var t=Object(d.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(e)))&&void 0!==t?t:n})),a=Object(x.a)(t,2),c=a[0],r=a[1];return Object(d.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,r]}("contacts",[]),n=Object(x.a)(e,2),t=n[0],a=n[1],c=Object(d.useState)([]),r=Object(x.a)(c,2),i=r[0],o=r[1],l=Object(d.useState)(""),b=Object(x.a)(l,2),s=b[0],j=b[1],u=Object(d.useState)(""),O=Object(x.a)(u,2),h=O[0],m=O[1],p=Object(d.useState)(""),g=Object(x.a)(p,2),v=g[0],C=g[1],w=function(e){var n=e.target;switch(n.name){case"name":m(n.value);break;case"number":C(n.value);break;case"filter":j(n.value)}};return Object(d.useEffect)((function(){if(s){var e=parseInt(s);o(e?Object(f.a)(t.filter((function(e){return e.number.indexOf(s)>-1}))):Object(f.a)(t.filter((function(e){return e.name.indexOf(s)>-1}))))}else o(t)}),[s,t]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(y,{onHandleChange:w,onAddContact:function(e){e.preventDefault();var n=e.target,c=Object(M.a)(),r="";0!==t.length&&t.forEach((function(e){e.name===h&&(r="".concat(h," is already in contacts."),alert(r)),e.number===v&&(r="".concat(v," is already in contacts."),alert(r))})),0===r.length?(console.log(t.length),a((function(e){return 0!==e.length?[].concat(Object(f.a)(e),[{id:c,name:h,number:v}]):[{id:c,name:h,number:v}]})),n[0].value="",n[1].value=""):(n[0].value="",n[1].value="")}}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(N,{onHandleChange:w}),Object(S.jsx)(L,{onDelete:function(e){var n=e.target,c=Object(f.a)(t);c.forEach((function(e,t){e.id===n.value&&c.splice(t,1)})),a(c)},filtredDataArr:i})]})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};h.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(T,{})}),document.getElementById("root")),$()}},[[21,1,2]]]);
//# sourceMappingURL=main.5b0266b7.chunk.js.map
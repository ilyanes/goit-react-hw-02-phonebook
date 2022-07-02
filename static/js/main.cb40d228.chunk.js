(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),s=(n(16),n(11)),o=n(4),l=n(5),u=n(7),d=n(6),h=(n(17),n(2)),b=n.n(h),j=n(10),m=n(0),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(j.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onSubmit(a,r),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.handleChange,r=this.handleSubmit,c=b.a.generate(),i=b.a.generate();return Object(m.jsxs)("form",{onSubmit:r,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,id:c,onChange:a}),Object(m.jsx)("label",{htmlFor:c,children:"Name"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,id:i,onChange:a}),Object(m.jsx)("label",{htmlFor:i,children:"Number"})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=p;var v=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,r=e.id;return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:["Name: ",t]}),Object(m.jsxs)("p",{children:["Number: ",a]}),Object(m.jsx)("button",{type:"button",id:r,onClick:function(){return n(r)},children:"Delete"})]},r)}))})};var f=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{htmlFor:"",children:["Filter contacts by name",Object(m.jsx)("input",{type:"text",value:t,onChange:n})]})};var x=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("div",{children:n})]})};var C=function(e){var t=e.title,n=e.children;return Object(m.jsx)("header",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:t}),n]})})},g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a={id:b.a.generate(),name:t,number:n};e.state.contacts.some((function(e){return e.name===t}))?alert("".concat(t," is already in the contact")):e.setState((function(e){var t=e.contacts;return{contacts:[a].concat(Object(s.a)(t))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilterContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.addContact,t=this.deleteContact,n=this.state.filter,a=this.changeFilter,r=this.getFilterContacts();return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(C,{title:"PhoneBook",children:Object(m.jsx)(f,{value:n,onChange:a})}),Object(m.jsxs)(x,{title:"Contacts",children:[Object(m.jsx)(O,{onSubmit:e}),Object(m.jsx)(v,{contacts:r,onDeleteContact:t})]})]})}}]),n}(a.Component),y=g;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.cb40d228.chunk.js.map
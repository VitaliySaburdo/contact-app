"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[302],{3302:function(n,e,r){r.r(e),r.d(e,{default:function(){return dn}});var t,o,i,a,s,l,c,u,d,p=r(2791),m=r(9434),b=r(3634),x=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},g=function(n){return n.filter},v=r(2007),y=r.n(v),Z=r(5705),w=r(6727),j=r(168),k=r(7691),P=k.ZP.form(t||(t=(0,j.Z)(["\n  margin-top: 10px;\n  margin-bottom: 30px;\n  width: 440px;\n"]))),C=k.ZP.label(o||(o=(0,j.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"]))),z=k.ZP.div(i||(i=(0,j.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),L=k.ZP.p(a||(a=(0,j.Z)(["\n  font-family: 'Poppins',sans-serif;\n  font-style: italic;\n  font-weight: 700;\n  font-weight: 700;\n  font-size: 28px;\n      color: #455a64;\n"]))),S=(k.ZP.input(s||(s=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 95%;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n  /* background-color: #7fcfff; */\n"]))),k.ZP.button(l||(l=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 180px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 16px;\n  color: white;\n  background-color: green;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #13ba00;\n  }\n"])))),E=r(1041),_=r(184);function F(n){var e=n.buttonLabel,r=n.onSubmit,t=(0,m.v9)(x),o=w.Ry({name:w.Z_("Enter your Name").required("Name is required"),number:w.Z_("Enter your phone number").matches(/^\d+$/,"Number should only contain numeric values").min(7,"Number should be of minimum 7 characters length").required("Phone number is required")}),i=(0,Z.TA)({initialValues:{name:"",number:""},validationSchema:o,onSubmit:function(n){var e=n.name,t=n.number;a?alert("".concat(e," is already in contacts")):(r({name:e,number:t}),i.resetForm())}}),a=t.find((function(n){return n.number.toLocaleLowerCase()===i.values.number.toLocaleLowerCase()}));return(0,_.jsxs)(z,{children:[(0,_.jsx)(L,{children:"Phonebook"}),(0,_.jsxs)(P,{onSubmit:i.handleSubmit,children:[(0,_.jsx)(C,{children:(0,_.jsx)(E.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"text",name:"name",label:"Name",placeholder:"Please enter contact name",value:i.values.name,onChange:i.handleChange,error:i.touched.name&&Boolean(i.errors.name),helperText:i.touched.name&&i.errors.name})}),(0,_.jsx)(C,{children:(0,_.jsx)(E.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"tel",name:"number",label:"Phone number",placeholder:"Enter a phone number",value:i.values.number,onChange:i.handleChange,error:i.touched.number&&Boolean(i.errors.number),helperText:i.touched.number&&i.errors.number?i.errors.number:" "})}),(0,_.jsx)(S,{type:"submit",children:e})]})]})}F.prototype={name:y().string,number:y().number,onSubmit:y().func};var q,N,I,T,B,A,K,W=k.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),D=(k.ZP.input(u||(u=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 420px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"]))),k.ZP.label(d||(d=(0,j.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"])))),G=r(4808),O=function(){var n=(0,m.I0)(),e=(0,m.v9)(g);return(0,_.jsx)(W,{children:(0,_.jsx)(D,{children:(0,_.jsx)(E.Z,{sx:{width:440},size:"small",type:"text",label:"Find contact by name",value:e,onChange:function(e){n((0,G.fz)(e.target.value))}})})})},R=r(9439),V=k.ZP.ul(q||(q=(0,j.Z)(["\n  display: block;\n  width: 540px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 80px;\n  padding: 0;\n"]))),X=k.ZP.li(N||(N=(0,j.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 16px;\n  display: flex;\n  height: 45px;\n  border-radius: 6px;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n  margin-bottom: 15px;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),$=k.ZP.button(I||(I=(0,j.Z)(["\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 16px;\n  color: white;\n  background-color: #de0000;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: red;\n  }\n"]))),H=r(4164),J=(0,k.F4)(T||(T=(0,j.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),M=k.ZP.div(B||(B=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden auto;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.2);\n  animation: "," 0.3s ease-in;\n"])),J),Q=k.ZP.div(A||(A=(0,j.Z)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 20px;\n  background-color: #ffffff;\n  padding: 30px;\n\n"]))),U=k.ZP.button(K||(K=(0,j.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  background-color: transparent;\n"])));var Y,nn,en=r.p+"static/media/icons.dafc7e9507cd83830f5a2b10b269e110.svg",rn=document.querySelector("#modal-root"),tn=function(n){var e=n.onClick,r=n.children;(0,p.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,H.createPortal)((0,_.jsx)(M,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,_.jsxs)(Q,{children:[(0,_.jsx)(U,{onClick:function(){e()},children:(0,_.jsx)("svg",{width:17,height:17,children:(0,_.jsx)("use",{href:en+"#cross"})})}),r]})}),rn)},on=function(){var n=(0,p.useState)(!1),e=(0,R.Z)(n,2),r=e[0],t=e[1],o=(0,m.I0)(),i=(0,m.v9)(x),a=(0,m.v9)(g).toLowerCase(),s=i.filter((function(n){return n.name.toLowerCase().includes(a)})),l=function(){t(!0)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(V,{children:s.map((function(n){return(0,_.jsxs)(X,{children:[n.name,": ",n.number,(0,_.jsx)($,{onClick:l,children:"edit"}),(0,_.jsx)($,{onClick:function(){return o((0,b.GK)(n._id))},children:"delete"})]},n._id)}))}),r&&(0,_.jsx)(tn,{onClick:function(){t(!1)},children:(0,_.jsx)(F,{})})]})};on.prototype={contacts:y().arrayOf(y().shape({id:y().string,name:y().string,number:y().string})),onDelete:y().func};var an=k.ZP.div(Y||(Y=(0,j.Z)(["\ndisplay: flex;\n\n"]))),sn=k.ZP.div(nn||(nn=(0,j.Z)(["\nmargin-top: 60px;\npadding: 20px;\nborder: 1px solid;\nborder-radius: 8px;\nborder-color: rgba(0,0,0,0.1);\nbox-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);\n"]))),ln=r(5243),cn=function(){return(0,_.jsx)(ln.Bb,{height:"80",width:"80",radius:"9",color:"#455a64",ariaLabel:"three-dots-loading",wrapperStyle:{position:"fixed",top:"5%",left:"50%"},wrapperClass:"blocks-wrapper"})},un=function(){var n=(0,m.v9)(f),e=(0,m.v9)(h),r=(0,m.I0)();return(0,_.jsxs)(an,{children:[(0,_.jsxs)(sn,{children:[(0,_.jsx)(F,{onSubmit:function(n){var e=n.name,t=n.number;r((0,b.uK)({name:e,number:t}))},buttonLabel:"Add contact"}),(0,_.jsx)(O,{})]}),n&&!e&&(0,_.jsx)(cn,{}),(0,_.jsx)(on,{})]})};function dn(){var n=(0,m.I0)();return(0,p.useEffect)((function(){n((0,b.yF)())}),[n]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(un,{})})}}}]);
//# sourceMappingURL=302.e6f5f16d.chunk.js.map
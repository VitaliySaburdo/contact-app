"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[839],{4814:function(n,e,t){t.d(e,{$:function(){return c}});var r,o=t(1413),i=t(168),a=t(7691).ZP.section(r||(r=(0,i.Z)(["\n  /* height: calc(100vh - 88px); */\n  padding-top: ",";\n  padding-bottom: ",";\n\n  @media screen and (",") {\n    /* height: calc(100vh - 96px); */\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n\n  @media screen and (",") {\n    /* height: calc(100vh - 88px); */\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"40px"}),(function(n){return n.padBottomSM||"40px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"40px"}),(function(n){return n.padBottomMd||"40px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"40px"}),(function(n){return n.padBottomLg||"40px"})),u=t(184),c=function(n){return(0,u.jsx)(a,(0,o.Z)({},n))}},3839:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,o,i,a,u,c,d,s,l,p=t(2791),m=t(9434),x=t(3634),b=t(2007),f=t.n(b),h=t(5705),g=t(6727),Z=t(168),v=t(7691),y=v.ZP.form(r||(r=(0,Z.Z)(["\n  margin-top: 10px;\n  margin-bottom: 30px;\n  width: 440px;\n"]))),j=v.ZP.label(o||(o=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"]))),w=v.ZP.div(i||(i=(0,Z.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),k=v.ZP.p(a||(a=(0,Z.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-style: italic;\n  font-weight: 700;\n  font-weight: 700;\n  font-size: 28px;\n  color: #455a64;\n"]))),P=(v.ZP.input(u||(u=(0,Z.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 95%;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"]))),v.ZP.button(c||(c=(0,Z.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 180px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 16px;\n  color: white;\n  background-color: ",";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return"Add contact"===n.buttonLabel?"green":"orange"}),(function(n){return"Add contact"===n.buttonLabel?"#13ba00":"#FF9966"}))),C=t(1041),L=t(184);function S(n){var e=n.buttonLabel,t=n.onSubmit,r=n.name,o=n.number,i=g.Ry({name:g.Z_("Enter your Name").required("Name is required"),number:g.Z_("Enter your phone number").matches(/^\d+$/,"Number should only contain numeric values").min(7,"Number should be of minimum 7 characters length").required("Phone number is required")}),a=(0,h.TA)({initialValues:{name:r||"",number:o||""},validationSchema:i,onSubmit:function(n){var e=n.name,r=n.number;t({name:e,number:r}),a.resetForm()}});return(0,L.jsxs)(w,{children:[(0,L.jsx)(k,{children:"Phonebook"}),(0,L.jsxs)(y,{onSubmit:a.handleSubmit,children:[(0,L.jsx)(j,{children:(0,L.jsx)(C.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"text",name:"name",label:"Name",placeholder:"Please enter contact name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name,onClick:function(n){return n.stopPropagation()}})}),(0,L.jsx)(j,{children:(0,L.jsx)(C.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"tel",name:"number",label:"Phone number",placeholder:"Enter a phone number",value:a.values.number,onChange:a.handleChange,error:a.touched.number&&Boolean(a.errors.number),helperText:a.touched.number&&a.errors.number?a.errors.number:" ",onClick:function(n){return n.stopPropagation()}})}),(0,L.jsx)(P,{type:"submit",buttonLabel:e,children:e})]})]})}S.prototype={name:f().string,number:f().number,onSubmit:f().func};var z,F,_,E,T,B,q,I,N,A,M=v.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),W=(v.ZP.input(s||(s=(0,Z.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 420px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"]))),v.ZP.label(l||(l=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"])))),$=t(4808),K=function(n){return n.contacts.items},D=function(n){return n.contacts.isLoading},G=function(n){return n.contacts.error},O=function(n){return n.filter},R=function(){var n=(0,m.I0)(),e=(0,m.v9)(O);return(0,L.jsx)(M,{children:(0,L.jsx)(W,{children:(0,L.jsx)(C.Z,{sx:{width:440},size:"small",type:"text",label:"Find contact by name",value:e,onChange:function(e){n((0,$.fz)(e.target.value))}})})})},U=t(4165),V=t(5861),X=t(9439),H=v.ZP.ul(z||(z=(0,Z.Z)(["\n  display: block;\n  width: 540px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 80px;\n  padding: 0;\n"]))),J=v.ZP.li(F||(F=(0,Z.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 16px;\n  display: flex;\n  height: 45px;\n  border-radius: 6px;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n  margin-bottom: 15px;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),Q=v.ZP.button(_||(_=(0,Z.Z)(["\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 16px;\n  color: white;\n  background-color: ",";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.edit?"orange":n.delete?"#de0000":"initial"}),(function(n){return n.edit?"#FF9966":n.delete?"#F44336":"initial"})),Y=v.ZP.div(E||(E=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),nn=t(4164),en=(0,v.F4)(T||(T=(0,Z.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),tn=v.ZP.div(B||(B=(0,Z.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden auto;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.2);\n  animation: "," 0.3s ease-in;\n"])),en),rn=v.ZP.div(q||(q=(0,Z.Z)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 20px;\n  background-color: #ffffff;\n  padding: 30px;\n"]))),on=v.ZP.button(I||(I=(0,Z.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  background-color: transparent;\n"]))),an=t(3439),un=document.querySelector("#modal-root"),cn=function(n){var e=n.onClick,t=n.children;(0,p.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,nn.createPortal)((0,L.jsx)(tn,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,L.jsxs)(rn,{children:[(0,L.jsx)(on,{onClick:function(){e()},children:(0,L.jsx)("svg",{width:17,height:17,children:(0,L.jsx)("use",{href:an.Z+"#cross"})})}),t]})}),un)},dn=function(){var n=(0,p.useState)(!1),e=(0,X.Z)(n,2),t=e[0],r=e[1],o=(0,p.useState)(null),i=(0,X.Z)(o,2),a=i[0],u=i[1],c=(0,p.useState)(null),d=(0,X.Z)(c,2),s=d[0],l=d[1],b=(0,p.useState)(null),f=(0,X.Z)(b,2),h=f[0],g=f[1],Z=(0,m.I0)(),v=(0,m.v9)(K),y=(0,m.v9)(O).toLowerCase(),j=v.filter((function(n){return n.name.toLowerCase().includes(y)})),w=function(){r(!1)},k=function(){var n=(0,V.Z)((0,U.Z)().mark((function n(e){var t,r;return(0,U.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.name,r=e.number,n.next=3,Z((0,x.Bk)({contactId:a,contact:{name:t,number:r}}));case 3:w(),Z((0,x.yF)());case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(H,{children:j.map((function(n){return(0,L.jsxs)(J,{children:[n.name,": ",n.number,(0,L.jsxs)(Y,{children:[(0,L.jsx)(Q,{onClick:function(){var e,t,o;e=n._id,t=n.name,o=n.number,r(!0),u(e),l(t),g(o)},edit:!0,children:"edit"}),(0,L.jsx)(Q,{onClick:function(){return Z((0,x.GK)(n._id))},delete:!0,children:"delete"})]})]},n._id)}))}),t&&(0,L.jsx)(cn,{onClick:w,children:(0,L.jsx)(S,{onSubmit:k,buttonLabel:"Update contact",name:s,number:h})})]})};dn.prototype={contacts:f().arrayOf(f().shape({id:f().string,name:f().string,number:f().string})),onDelete:f().func};var sn=v.ZP.div(N||(N=(0,Z.Z)(["\ndisplay: flex;\n\n"]))),ln=v.ZP.div(A||(A=(0,Z.Z)(["\nmargin-top: 60px;\npadding: 20px;\nborder: 1px solid;\nborder-radius: 8px;\nborder-color: rgba(0,0,0,0.1);\nbox-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);\n"]))),pn=t(5243),mn=function(){return(0,L.jsx)(pn.Bb,{height:"80",width:"80",radius:"9",color:"#455a64",ariaLabel:"three-dots-loading",wrapperStyle:{position:"fixed",top:"5%",left:"50%"},wrapperClass:"blocks-wrapper"})},xn=function(){var n=(0,m.v9)(D),e=(0,m.v9)(G),t=(0,m.v9)(K),r=(0,m.I0)();return(0,L.jsxs)(sn,{children:[(0,L.jsxs)(ln,{children:[(0,L.jsx)(S,{onSubmit:function(n){var e=n.name,o=n.number;t.find((function(n){return n.number.toLocaleLowerCase()===o.toLocaleLowerCase()}))?alert("".concat(e," is already in contacts")):r((0,x.uK)({name:e,number:o}))},buttonLabel:"Add contact"}),(0,L.jsx)(R,{})]}),n&&!e&&(0,L.jsx)(mn,{}),(0,L.jsx)(dn,{})]})},bn=t(5834),fn=t(4814);function hn(){var n=(0,m.I0)();return(0,p.useEffect)((function(){n((0,x.yF)())}),[n]),(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(fn.$,{children:(0,L.jsx)(bn.W,{children:(0,L.jsx)(xn,{})})})})}}}]);
//# sourceMappingURL=839.3a76e453.chunk.js.map
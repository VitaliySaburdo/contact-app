"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[480],{4814:function(n,e,t){t.d(e,{$:function(){return u}});var o,r=t(1413),i=t(168),a=t(7691).ZP.section(o||(o=(0,i.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"20px"}),(function(n){return n.padBottomSM||"20px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"20px"}),(function(n){return n.padBottomMd||"20px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"40px"}),(function(n){return n.padBottomLg||"40px"})),c=t(184),u=function(n){return(0,c.jsx)(a,(0,r.Z)({},n))}},4480:function(n,e,t){t.r(e),t.d(e,{default:function(){return yn}});var o,r,i,a,c,u,l,s,d,p=t(2791),m=t(9434),h=t(3634),f=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},g=function(n){return n.filter},Z=t(5243),w=t(184),v=function(){return(0,w.jsx)(Z.Bb,{height:"80",width:"80",radius:"9",color:"#455a64",ariaLabel:"three-dots-loading",wrapperStyle:{position:"fixed",top:"5%",left:"50%"},wrapperClass:"blocks-wrapper"})},y=t(2007),j=t.n(y),k=t(5705),C=t(6727),P=t(168),S=t(7691),L=S.ZP.form(o||(o=(0,P.Z)(["\n  margin-top: 10px;\n  margin-bottom: 30px;\n  width: 440px;\n"]))),z=S.ZP.label(r||(r=(0,P.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"]))),B=S.ZP.div(i||(i=(0,P.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),E=S.ZP.p(a||(a=(0,P.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.fonts.second}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.menuTitleSize}),(function(n){return n.theme.colors.secondaryColor})),T=(S.ZP.input(c||(c=(0,P.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 95%;\n  border: 1px solid ",";\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"])),(function(n){return n.theme.colors.mainBorderColor})),S.ZP.button(u||(u=(0,P.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 180px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 16px;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.clearWhite}),(function(n){return"Add contact"===n.buttonLabel?n.theme.colors.btnSuccessColor:n.theme.colors.btnEditColor}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return"Add contact"===n.buttonLabel?n.theme.colors.btnSuccessHoverColor:n.theme.colors.btnEditHoverColor}))),_=t(1041);function F(n){var e=n.buttonLabel,t=n.onSubmit,o=n.name,r=n.number,i=C.Ry({name:C.Z_("Enter your Name").required("Name is required"),number:C.Z_("Enter your phone number").matches(/^\d+$/,"Number should only contain numeric values").min(7,"Number should be of minimum 7 characters length").required("Phone number is required")}),a=(0,k.TA)({initialValues:{name:o||"",number:r||""},validationSchema:i,onSubmit:function(n){var e=n.name,o=n.number;t({name:e,number:o}),a.resetForm()}});return(0,w.jsxs)(B,{children:[(0,w.jsx)(E,{children:"Phonebook"}),(0,w.jsxs)(L,{onSubmit:a.handleSubmit,children:[(0,w.jsx)(z,{children:(0,w.jsx)(_.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"text",name:"name",label:"Name",placeholder:"Please enter contact name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name,onClick:function(n){return n.stopPropagation()}})}),(0,w.jsx)(z,{children:(0,w.jsx)(_.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"tel",name:"number",label:"Phone number",placeholder:"Enter a phone number",value:a.values.number,onChange:a.handleChange,error:a.touched.number&&Boolean(a.errors.number),helperText:a.touched.number&&a.errors.number?a.errors.number:" ",onClick:function(n){return n.stopPropagation()}})}),(0,w.jsx)(T,{type:"submit",buttonLabel:e,children:e})]})]})}F.prototype={name:j().string,number:j().number,onSubmit:j().func};var W,q,I,N,A,H,D,M,$,K,G,O,R=S.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),U=(S.ZP.input(s||(s=(0,P.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 420px;\n  border: 1px solid ",";\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"])),(function(n){return n.theme.colors.mainBorderColor})),S.ZP.label(d||(d=(0,P.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"])))),V=t(4808),X=function(){var n=(0,m.I0)(),e=(0,m.v9)(g);return(0,w.jsx)(R,{children:(0,w.jsx)(U,{children:(0,w.jsx)(_.Z,{sx:{width:440},size:"small",type:"text",label:"Find contact by name",value:e,onChange:function(e){n((0,V.fz)(e.target.value))}})})})},J=t(4165),Q=t(5861),Y=t(3433),nn=t(9439),en=S.ZP.div(W||(W=(0,P.Z)(["\n  overflow-y: scroll;\n  width: 540px;\n  height: 500px;\n  padding: 0;\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 5px;\n  box-shadow: ",";\n\n  /* Styling the scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 4px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n"])),(function(n){return n.theme.colors.btnBorderColor}),(function(n){return n.theme.shadows.secondShadow}),(function(n){return n.theme.colors.ScrollBarColor}),(function(n){return n.theme.colors.ScrollBarHoverColor})),tn=S.ZP.ul(q||(q=(0,P.Z)(["\n  display: block;\n  padding: 10px 10px 10px 18px;\n"]))),on=S.ZP.p(I||(I=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-family: ",";\n  font-style: italic;\n  font-weight: 700;\n  font-size: 16px;\n"])),(function(n){return n.theme.fonts.second})),rn=S.ZP.li(N||(N=(0,P.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: 700;\n  font-size: 16px;\n  display: flex;\n  height: 45px;\n  border-radius: 6px;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n  margin-bottom: 15px;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  box-shadow: ",";\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.fonts.second}),(function(n){return n.theme.shadows.mainShadow})),an=S.ZP.button(A||(A=(0,P.Z)(["\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 16px;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.edit?n.theme.colors.btnEditColor:n.delete?n.theme.colors.btnDeleteColor:"initial"}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.edit?n.theme.colors.btnEditColor:n.delete?n.theme.colors.btnDeleteHoverColor:"initial"})),cn=S.ZP.div(H||(H=(0,P.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),un=t(4164),ln=(0,S.F4)(D||(D=(0,P.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),sn=S.ZP.div(M||(M=(0,P.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden auto;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.2);\n  animation: "," 0.3s ease-in;\n"])),ln),dn=S.ZP.div($||($=(0,P.Z)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 20px;\n  background-color: #ffffff;\n  padding: 30px;\n"]))),pn=S.ZP.button(K||(K=(0,P.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  background-color: transparent;\n"]))),mn=t(3439),hn=document.querySelector("#modal-root"),fn=function(n){var e=n.onClick,t=n.children;(0,p.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,un.createPortal)((0,w.jsx)(sn,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,w.jsxs)(dn,{children:[(0,w.jsx)(pn,{onClick:function(){e()},children:(0,w.jsx)("svg",{width:17,height:17,children:(0,w.jsx)("use",{href:mn.Z+"#cross"})})}),t]})}),hn)},bn=function(){var n=(0,p.useState)(!1),e=(0,nn.Z)(n,2),t=e[0],o=e[1],r=(0,p.useState)(null),i=(0,nn.Z)(r,2),a=i[0],c=i[1],u=(0,p.useState)(null),l=(0,nn.Z)(u,2),s=l[0],d=l[1],b=(0,p.useState)(null),x=(0,nn.Z)(b,2),Z=x[0],v=x[1],y=(0,m.I0)(),j=(0,m.v9)(f),k=(0,m.v9)(g).toLowerCase(),C=j.filter((function(n){return n.name.toLowerCase().includes(k)})),P=(0,Y.Z)(C).sort((function(n,e){var t=n.name.toLowerCase(),o=e.name.toLowerCase();return t.localeCompare(o)})),S=function(){o(!1)},L=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(e){var t,o;return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.name,o=e.number,n.next=3,y((0,h.Bk)({contactId:a,contact:{name:t,number:o}}));case 3:S(),y((0,h.yF)());case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(en,{children:[(0,w.jsx)(tn,{children:0===P.length?(0,w.jsx)(on,{children:"There is no contacts in your list"}):P.map((function(n){return(0,w.jsxs)(rn,{children:[n.name,": ",n.number,(0,w.jsxs)(cn,{children:[(0,w.jsx)(an,{onClick:function(){var e,t,r;e=n._id,t=n.name,r=n.number,o(!0),c(e),d(t),v(r)},edit:!0,children:"edit"}),(0,w.jsx)(an,{onClick:function(){return y((0,h.GK)(n._id))},delete:!0,children:"delete"})]})]},n._id)}))}),t&&(0,w.jsx)(fn,{onClick:S,children:(0,w.jsx)(F,{onSubmit:L,buttonLabel:"Update contact",name:s,number:Z})})]})})};bn.prototype={contacts:j().arrayOf(j().shape({id:j().string,name:j().string,number:j().string})),onDelete:j().func};var xn=S.ZP.div(G||(G=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 60px;\n  height: 650px;\n"]))),gn=S.ZP.div(O||(O=(0,P.Z)(["\n  height: 460px;\n  padding: 20px;\n  border: 1px solid;\n  border-radius: 8px;\n  border-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.mainBorderColor}),(function(n){return n.theme.shadows.secondShadow})),Zn=function(){var n=(0,m.v9)(b),e=(0,m.v9)(x),t=(0,m.v9)(f),o=(0,m.I0)();return(0,w.jsxs)(xn,{children:[(0,w.jsxs)(gn,{children:[(0,w.jsx)(F,{onSubmit:function(n){var e=n.name,r=n.number;t.find((function(n){return n.number.toLocaleLowerCase()===r.toLocaleLowerCase()}))?alert("".concat(e," is already in contacts")):o((0,h.uK)({name:e,number:r}))},buttonLabel:"Add contact"}),(0,w.jsx)(X,{})]}),n&&!e&&(0,w.jsx)(v,{}),(0,w.jsx)(bn,{})]})},wn=t(5834),vn=t(4814);function yn(){var n=(0,m.I0)();return(0,p.useEffect)((function(){n((0,h.yF)())}),[n]),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(vn.$,{children:(0,w.jsx)(wn.W,{children:(0,w.jsx)(Zn,{})})})})}}}]);
//# sourceMappingURL=480.8cdf5d72.chunk.js.map
"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[480],{4814:function(n,e,t){t.d(e,{$:function(){return u}});var r,o=t(1413),i=t(168),a=t(7691).ZP.section(r||(r=(0,i.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n\n  @media screen and (",") {\n    padding-top: 50px;\n    padding-bottom: 50px;\n  }\n\n  @media screen and (",") {\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),c=t(184),u=function(n){return(0,c.jsx)(a,(0,o.Z)({},n))}},4480:function(n,e,t){t.r(e),t.d(e,{default:function(){return jn}});var r,o,i,a,c,u,l,d,s,m=t(2791),p=t(9434),h=t(3634),b=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},g=function(n){return n.filter},w=t(5243),Z=t(184),v=function(){return(0,Z.jsx)(w.Bb,{height:"80",width:"80",radius:"9",color:"#455a64",ariaLabel:"three-dots-loading",wrapperStyle:{position:"fixed",top:"5%",left:"50%"},wrapperClass:"blocks-wrapper"})},y=t(2007),j=t.n(y),k=t(5705),C=t(6727),P=t(168),S=t(7691),L=S.ZP.form(r||(r=(0,P.Z)(["\n  margin-bottom: 30px;\n  width: 220px;\n@media screen and (",") {\n  width: 420px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n}\n"])),(function(n){return n.theme.media.md})),z=S.ZP.label(o||(o=(0,P.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"]))),E=S.ZP.div(i||(i=(0,P.Z)(["\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media screen and (","){\nmargin-top: 30px;\n  }\n"])),(function(n){return n.theme.media.md})),B=S.ZP.p(a||(a=(0,P.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.fonts.second}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.menuTitleSize}),(function(n){return n.theme.colors.secondaryColor})),_=(S.ZP.input(c||(c=(0,P.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 95%;\n  border: 1px solid ",";\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"])),(function(n){return n.theme.colors.mainBorderColor})),S.ZP.button(u||(u=(0,P.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  width: 180px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 16px;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.clearWhite}),(function(n){return"Add contact"===n.buttonLabel?n.theme.colors.btnSuccessColor:n.theme.colors.btnEditColor}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return"Add contact"===n.buttonLabel?n.theme.colors.btnSuccessHoverColor:n.theme.colors.btnEditHoverColor}))),F=t(1041);function W(n){var e=n.buttonLabel,t=n.onSubmit,r=n.name,o=n.number,i=C.Ry({name:C.Z_("Enter your Name").required("Name is required"),number:C.Z_("Enter your phone number").matches(/^\d+$/,"Number should only contain numeric values").min(5,"Number should be of minimum 5 characters length").max(10,"Number should be of maximum 10 characters length").required("Phone number is required")}),a=(0,k.TA)({initialValues:{name:r||"",number:o||""},validationSchema:i,onSubmit:function(n){var e=n.name,r=n.number;t({name:e,number:r}),a.resetForm()}});return(0,Z.jsxs)(E,{children:[(0,Z.jsx)(B,{children:"Phonebook"}),(0,Z.jsxs)(L,{onSubmit:a.handleSubmit,children:[(0,Z.jsx)(z,{children:(0,Z.jsx)(F.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"text",name:"name",label:"Name",placeholder:"Please enter contact name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name,onClick:function(n){return n.stopPropagation()}})}),(0,Z.jsx)(z,{children:(0,Z.jsx)(F.Z,{sx:{height:65},fullWidth:!0,size:"small",type:"tel",name:"number",label:"Phone number",placeholder:"Enter a phone number",value:a.values.number,onChange:a.handleChange,error:a.touched.number&&Boolean(a.errors.number),helperText:a.touched.number&&a.errors.number?a.errors.number:" ",onClick:function(n){return n.stopPropagation()}})}),(0,Z.jsx)(_,{type:"submit",buttonLabel:e,children:e})]})]})}W.prototype={name:j().string,number:j().number,onSubmit:j().func};var N,T,q,I,A,H,D,$,K,G,O,R,U=S.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),V=(0,S.ZP)(F.Z)(d||(d=(0,P.Z)(["\nwidth: 220px;\n@media screen and (",") {\n  width: 420px;\n}\n"])),(function(n){return n.theme.media.md})),X=S.ZP.label(s||(s=(0,P.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-top: 15px;\n"]))),J=t(4808),M=function(){var n=(0,p.I0)(),e=(0,p.v9)(g);return(0,Z.jsx)(U,{children:(0,Z.jsx)(X,{children:(0,Z.jsx)(V,{size:"small",type:"text",label:"Find contact by name",value:e,onChange:function(e){n((0,J.fz)(e.target.value))}})})})},Q=t(4165),Y=t(5861),nn=t(3433),en=t(9439),tn=S.ZP.div(N||(N=(0,P.Z)(["\n  overflow-y: scroll;\n  width: 300px;\n  height: 500px;\n  padding: 0;\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 5px;\n  box-shadow: ",";\n\n  /* Styling the scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 4px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  @media screen and (",") {\n    width: 540px;\n  }\n"])),(function(n){return n.theme.colors.btnBorderColor}),(function(n){return n.theme.shadows.secondShadow}),(function(n){return n.theme.colors.ScrollBarColor}),(function(n){return n.theme.colors.ScrollBarHoverColor}),(function(n){return n.theme.media.md})),rn=S.ZP.ul(T||(T=(0,P.Z)(["\n  display: block;\n  padding: 10px 10px 10px 18px;\n"]))),on=S.ZP.p(q||(q=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-family: ",";\n  font-style: italic;\n  font-weight: 700;\n  font-size: 16px;\n"])),(function(n){return n.theme.fonts.second})),an=S.ZP.li(I||(I=(0,P.Z)(["\n  font-family: ",";\n  font-style: italic;\n  font-weight: 700;\n  font-size: 16px;\n  display: flex;\n  /* height: 45px; */\n  border-radius: 6px;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n  margin-bottom: 15px;\n  align-items: center;\n  padding: 5px 10px 5px 10px;\n  box-shadow: ",";\n  &:last-child {\n    margin-bottom: 0;\n  }\n  @media screen and (",") {\n    padding: 10px 20px 10px 20px;\n  }\n"])),(function(n){return n.theme.fonts.second}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.theme.media.md})),cn=S.ZP.button(A||(A=(0,P.Z)(["\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 16px;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  transition-property: background-color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.edit?n.theme.colors.btnEditColor:n.delete?n.theme.colors.btnDeleteColor:"initial"}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.edit?n.theme.colors.btnEditColor:n.delete?n.theme.colors.btnDeleteHoverColor:"initial"})),un=S.ZP.div(H||(H=(0,P.Z)(["\n  display: flex;\n  gap: 10px;\n  @media screen and (",") {\n    gap: 20px;\n  }\n"])),(function(n){return n.theme.media.md})),ln=t(4164),dn=(0,S.F4)(D||(D=(0,P.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),sn=S.ZP.div($||($=(0,P.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden auto;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.2);\n  animation: "," 0.3s ease-in;\n"])),dn),mn=S.ZP.div(K||(K=(0,P.Z)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 20px;\n  background-color: ",";\n  padding: 30px;\n"])),(function(n){return n.theme.colors.clearWhite})),pn=S.ZP.button(G||(G=(0,P.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  background-color: transparent;\n"]))),hn=t(3439),bn=document.querySelector("#modal-root"),fn=function(n){var e=n.onClick,t=n.children;(0,m.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,ln.createPortal)((0,Z.jsx)(sn,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,Z.jsxs)(mn,{children:[(0,Z.jsx)(pn,{onClick:function(){e()},children:(0,Z.jsx)("svg",{width:17,height:17,children:(0,Z.jsx)("use",{href:hn.Z+"#cross"})})}),t]})}),bn)},xn=function(){var n=(0,m.useState)(!1),e=(0,en.Z)(n,2),t=e[0],r=e[1],o=(0,m.useState)(null),i=(0,en.Z)(o,2),a=i[0],c=i[1],u=(0,m.useState)(null),l=(0,en.Z)(u,2),d=l[0],s=l[1],f=(0,m.useState)(null),x=(0,en.Z)(f,2),w=x[0],v=x[1],y=(0,p.I0)(),j=(0,p.v9)(b),k=(0,p.v9)(g).toLowerCase(),C=j.filter((function(n){return n.name.toLowerCase().includes(k)})),P=(0,nn.Z)(C).sort((function(n,e){var t=n.name.toLowerCase(),r=e.name.toLowerCase();return t.localeCompare(r)})),S=function(){r(!1)},L=function(){var n=(0,Y.Z)((0,Q.Z)().mark((function n(e){var t,r;return(0,Q.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.name,r=e.number,n.next=3,y((0,h.Bk)({contactId:a,contact:{name:t,number:r}}));case 3:S(),y((0,h.yF)());case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(tn,{children:[(0,Z.jsx)(rn,{children:0===P.length?(0,Z.jsx)(on,{children:"There is no contacts in your list"}):P.map((function(n){return(0,Z.jsxs)(an,{children:[n.name,": ",n.number,(0,Z.jsxs)(un,{children:[(0,Z.jsx)(cn,{onClick:function(){var e,t,o;e=n._id,t=n.name,o=n.number,r(!0),c(e),s(t),v(o)},edit:!0,children:"edit"}),(0,Z.jsx)(cn,{onClick:function(){return y((0,h.GK)(n._id))},delete:!0,children:"delete"})]})]},n._id)}))}),t&&(0,Z.jsx)(fn,{onClick:S,children:(0,Z.jsx)(W,{onSubmit:L,buttonLabel:"Update contact",name:d,number:w})})]})})};xn.prototype={contacts:j().arrayOf(j().shape({id:j().string,name:j().string,number:j().string})),onDelete:j().func};var gn=S.ZP.div(O||(O=(0,P.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (",") {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 60px;\n    height: 650px;\n  }\n"])),(function(n){return n.theme.media.md})),wn=S.ZP.div(R||(R=(0,P.Z)(["\n  height: 460px;\n  padding: 20px;\n  border: 1px solid;\n  border-radius: 8px;\n  border-color: ",";\n  box-shadow: ",";\n  margin-bottom: 15px;\n"])),(function(n){return n.theme.colors.mainBorderColor}),(function(n){return n.theme.shadows.secondShadow})),Zn=function(){var n=(0,p.v9)(f),e=(0,p.v9)(x),t=(0,p.v9)(b),r=(0,p.I0)();return(0,Z.jsxs)(gn,{children:[(0,Z.jsxs)(wn,{children:[(0,Z.jsx)(W,{onSubmit:function(n){var e=n.name,o=n.number;t.find((function(n){return n.number.toLocaleLowerCase()===o.toLocaleLowerCase()}))?alert("".concat(e," is already in contacts")):r((0,h.uK)({name:e,number:o}))},buttonLabel:"Add contact"}),(0,Z.jsx)(M,{})]}),n&&!e&&(0,Z.jsx)(v,{}),(0,Z.jsx)(xn,{})]})},vn=t(5834),yn=t(4814);function jn(){var n=(0,p.I0)();return(0,m.useEffect)((function(){n((0,h.yF)())}),[n]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(yn.$,{children:(0,Z.jsx)(vn.W,{children:(0,Z.jsx)(Zn,{})})})})}}}]);
//# sourceMappingURL=480.7e64111e.chunk.js.map
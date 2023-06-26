"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[77],{4814:function(n,e,r){r.d(e,{$:function(){return s}});var i,o=r(1413),t=r(168),a=r(7691).ZP.section(i||(i=(0,t.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"20px"}),(function(n){return n.padBottomSM||"20px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"20px"}),(function(n){return n.padBottomMd||"20px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"40px"}),(function(n){return n.padBottomLg||"40px"})),d=r(184),s=function(n){return(0,d.jsx)(a,(0,o.Z)({},n))}},4794:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var i,o,t,a,d,s,l,p,c,u,h=r(5834),m=r(168),x=r(7691),f=x.ZP.div(i||(i=(0,m.Z)(["\n  position: relative;\n  height: 680px;\n  width: 730px;\n  background-image: linear-gradient(324.93deg, #007aff 0.74%, #0f70da 100%);\n"]))),g=x.ZP.div(o||(o=(0,m.Z)(["\n  position: absolute;\n  width: 350px;\n  left: 20%;\n  top: 8%;\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  text-align: center;\n  color: #ffffff;\n"]))),Z=x.ZP.div(t||(t=(0,m.Z)(["\n  position: absolute;\n  left: 78px;\n  top: 100px;\n  padding: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 420px;\n  height: 420px;\n  border-radius: 50%;\n  background-image: linear-gradient(324.93deg, #0f70da 0.74%, #007aff 100%);\n"]))),w=x.ZP.img(a||(a=(0,m.Z)(["\n  position: absolute;\n"]))),j=r.p+"static/media/phones.8f83c388f3b60f7e5e51.png",b=r(184),v=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(f,{children:[(0,b.jsx)(g,{children:"Quick creation of contacts, convenient menu, nice interface"}),(0,b.jsx)(Z,{children:(0,b.jsx)(w,{src:j,alt:"phone"})})]})})},P=r(9439),y=r(2791),k=r(5705),B=r(6727),C=r(6151),S=r(9273),z=r(9434),E=x.ZP.form(d||(d=(0,m.Z)(["\n  margin-left: auto;\n  padding-top: 70px;\n  padding-left: 80px;\n  padding-right: 80px;\n"]))),L=x.ZP.div(s||(s=(0,m.Z)(["\n  width: 620px;\n  margin-left: auto;\n  background-color: white;\n"]))),T=x.ZP.h2(l||(l=(0,m.Z)(["\n  font-family: 'Poppins';\n  font-weight: 600px;\n  font-size: 19px;\n  text-align: center;\n  padding: 0 0 60px 0;\n"]))),_=((0,x.ZP)(k.gN)(p||(p=(0,m.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 93%;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n  background-color: #aae5ff;\n"]))),x.ZP.p(c||(c=(0,m.Z)(["\n  margin-top: 15px;\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  text-align: center;\n"])))),q=x.ZP.span(u||(u=(0,m.Z)(["\n  margin-left: 5px;\n"]))),W=r(1087),F=r(8029),M=r(4925),A=r(8096),I=r(7071),R=r(3746),$=r(165),D=r(9009),N=r(3400),O=B.Ry({email:B.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:B.Z_("Enter your password").min(6,"Password should be of minimum 8 characters length").max(12,"Too long").required("Password is required")}),Q=function(){var n=y.useState(!1),e=(0,P.Z)(n,2),r=e[0],i=e[1],o=(0,z.I0)(),t=(0,k.TA)({initialValues:{email:"",password:""},validationSchema:O,onSubmit:function(n){o((0,S.Ib)({values:n}))}});return(0,b.jsx)(L,{children:(0,b.jsxs)(E,{onSubmit:t.handleSubmit,children:[(0,b.jsx)(T,{children:"Login"}),(0,b.jsxs)(A.Z,{sx:{height:65},fullWidth:!0,size:"small",margin:"none",children:[(0,b.jsx)(M.Z,{error:t.touched.password&&Boolean(t.errors.password),htmlFor:"email",children:"Email"}),(0,b.jsx)(F.Z,{placeholder:"Please your email",id:"email",name:"email",label:"Email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email)}),(0,b.jsx)(I.Z,{error:!0,id:"password",children:t.touched.email&&t.errors.email})]}),(0,b.jsxs)(A.Z,{sx:{height:65},variant:"outlined",fullWidth:!0,size:"small",margin:"none",children:[(0,b.jsx)(M.Z,{error:t.touched.password&&Boolean(t.errors.password),htmlFor:"password",children:"Password"}),(0,b.jsx)(F.Z,{id:"password",placeholder:"Please your password",name:"password",label:"Password",type:r?"text":"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),endAdornment:(0,b.jsx)(D.Z,{position:"end",children:(0,b.jsx)(N.Z,{"aria-label":"toggle password visibility",onClick:function(){return i((function(n){return!n}))},edge:"end",children:r?(0,b.jsx)($.Z,{}):(0,b.jsx)(R.Z,{})})})}),(0,b.jsx)(I.Z,{error:!0,id:"password",children:t.touched.password&&t.errors.password})]}),(0,b.jsx)(C.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Login"}),(0,b.jsxs)(_,{children:["Don`t have an account",(0,b.jsx)(q,{children:(0,b.jsx)(W.OL,{to:"/register",children:"Register"})})]})]})})},V=r(4814);function G(){return(0,b.jsx)(V.$,{children:(0,b.jsx)(h.W,{children:(0,b.jsxs)("div",{style:{display:"flex"},children:[(0,b.jsx)(v,{}),(0,b.jsx)(Q,{})]})})})}}}]);
//# sourceMappingURL=77.83075119.chunk.js.map
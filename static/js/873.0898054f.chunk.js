"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[873],{4814:function(n,e,r){r.d(e,{$:function(){return d}});var i,o=r(1413),a=r(168),t=r(7691).ZP.section(i||(i=(0,a.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n\n  @media screen and (",") {\n\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"40px"}),(function(n){return n.padBottomSM||"40px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"40px"}),(function(n){return n.padBottomMd||"40px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"40px"}),(function(n){return n.padBottomLg||"40px"})),s=r(184),d=function(n){return(0,s.jsx)(t,(0,o.Z)({},n))}},4327:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var i,o,a,t,s,d,l,c,p,m=r(9439),u=r(2791),h=r(5705),g=r(6727),x=r(6151),f=r(1087),Z=r(9273),w=r(9434),j=r(168),b=r(7691),v=b.ZP.form(i||(i=(0,j.Z)(["\n  margin-left: auto;\n  padding-top: 70px;\n  padding-left: 80px;\n  padding-right: 80px;\n"]))),P=b.ZP.div(o||(o=(0,j.Z)(["\n  width: 620px;\n  margin-left: auto;\n  background-color: white;\n"]))),y=b.ZP.h2(a||(a=(0,j.Z)(["\n  font-family: 'Poppins';\n  font-weight: 600px;\n  font-size: 19px;\n  text-align: center;\n  padding: 0 0 60px 0;\n"]))),C=((0,b.ZP)(h.gN)(t||(t=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 93%;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n"]))),b.ZP.p(s||(s=(0,j.Z)(["\n  margin-top: 15px;\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 16px;\n  text-align: center;\n"])))),k=b.ZP.span(d||(d=(0,j.Z)(["\n  margin-left: 5px;\n"]))),z=r(1041),B=r(8029),q=r(4925),S=r(8096),T=r(7071),_=r(3746),E=r(165),R=r(9009),W=r(3400),F=r(184),L=g.Ry({name:g.Z_("Enter your Name").required("Name is required"),email:g.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:g.Z_("Enter your password").min(6,"Password should be of minimum 8 characters length").required("Password is required"),confirm:g.Z_("Please confirm your password").oneOf([g.iH("password")],"Password does not matched").required("Confirm Password is Required")}),A=function(){var n=u.useState(!1),e=(0,m.Z)(n,2),r=e[0],i=e[1],o=u.useState(!1),a=(0,m.Z)(o,2),t=a[0],s=a[1],d=(0,w.I0)(),l=(0,h.TA)({initialValues:{name:"",email:"",password:"",confirm:""},validationSchema:L,onSubmit:function(n){var e=n.name,r=n.email,i=n.password;d((0,Z.z2)({name:e,email:r,password:i}))}});return(0,F.jsx)(P,{children:(0,F.jsxs)(v,{onSubmit:l.handleSubmit,children:[(0,F.jsx)(y,{children:"Register"}),(0,F.jsx)(z.Z,{sx:{height:65},placeholder:"Please enter your name",fullWidth:!0,size:"small",margin:"none",id:"name",name:"name",label:"Full name",value:l.values.name,onChange:l.handleChange,error:l.touched.name&&Boolean(l.errors.name),helperText:l.touched.name&&l.errors.name}),(0,F.jsxs)(S.Z,{sx:{height:65},fullWidth:!0,size:"small",margin:"none",children:[(0,F.jsx)(q.Z,{error:l.touched.email&&Boolean(l.errors.password),htmlFor:"email",children:"Email"}),(0,F.jsx)(B.Z,{placeholder:"Please your email",id:"email",name:"email",label:"Email",value:l.values.email,onChange:l.handleChange,error:l.touched.email&&Boolean(l.errors.email)}),(0,F.jsx)(T.Z,{error:!0,id:"password",children:l.touched.email&&l.errors.email})]}),(0,F.jsxs)(S.Z,{sx:{height:65},variant:"outlined",fullWidth:!0,size:"small",margin:"none",children:[(0,F.jsx)(q.Z,{error:l.touched.password&&Boolean(l.errors.password),htmlFor:"password",children:"Password"}),(0,F.jsx)(B.Z,{id:"password",placeholder:"Please your password",name:"password",label:"Password",type:r?"text":"password",value:l.values.password,onChange:l.handleChange,error:l.touched.password&&Boolean(l.errors.password),endAdornment:(0,F.jsx)(R.Z,{position:"end",children:(0,F.jsx)(W.Z,{"aria-label":"toggle password visibility",onClick:function(){return i((function(n){return!n}))},edge:"end",children:r?(0,F.jsx)(E.Z,{}):(0,F.jsx)(_.Z,{})})})}),(0,F.jsx)(T.Z,{error:!0,id:"password",children:l.touched.password&&l.errors.password})]}),(0,F.jsxs)(S.Z,{sx:{height:65},variant:"outlined",fullWidth:!0,size:"small",margin:"none",children:[(0,F.jsx)(q.Z,{error:l.touched.confirm&&Boolean(l.errors.confirm),htmlFor:"confirm",children:"Confirm Password"}),(0,F.jsx)(B.Z,{id:"confirm",placeholder:"Please confirm your password",name:"confirm",label:"Confirm Password",type:t?"text":"password",value:l.values.confirm,onChange:l.handleChange,error:l.touched.confirm&&Boolean(l.errors.confirm),endAdornment:(0,F.jsx)(R.Z,{position:"end",children:(0,F.jsx)(W.Z,{"aria-label":"toggle password visibility",onClick:function(){return s((function(n){return!n}))},edge:"end",children:t?(0,F.jsx)(E.Z,{}):(0,F.jsx)(_.Z,{})})})}),(0,F.jsx)(T.Z,{error:!0,id:"confirm",children:l.touched.confirm&&l.errors.confirm})]}),(0,F.jsx)(x.Z,{sx:{marginTop:"10px"},color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Register"}),(0,F.jsxs)(C,{children:["Already have an account",(0,F.jsx)(k,{children:(0,F.jsx)(f.OL,{to:"/login",children:"Login"})})]})]})})},M=r.p+"static/media/Registration-photo.18d80537a88772700192.jpg",N=b.ZP.div(l||(l=(0,j.Z)(["\n  position: relative;\n  height: 680px;\n  width: 730px;\n  background-image: linear-gradient(\n      to right,\n      rgba(47, 48, 58, 0.4),\n      rgba(47, 48, 58, 0.4)\n    ),\n    url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n"])),M),O=b.ZP.div(c||(c=(0,j.Z)(["\n  position: absolute;\n  width: 350px;\n  left: 25%;\n  top: 25%;\n  font-family: 'Poppins';\n  font-weight: 400px;\n  font-size: 22px;\n  text-align: center;\n  color: #ffffff;\n  z-index: 100;\n"]))),$=(b.ZP.img(p||(p=(0,j.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n    to right,\n    rgba(47, 48, 58, 0.4),\n    rgba(47, 48, 58, 0.4)\n  );\n"]))),function(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(N,{children:(0,F.jsx)(O,{children:"The best service for creating and storing contacts"})})})}),H=r(5834),I=r(4814);function V(){return(0,F.jsx)(I.$,{children:(0,F.jsx)(H.W,{children:(0,F.jsxs)("div",{style:{display:"flex"},children:[(0,F.jsx)("title",{children:"Registration"}),(0,F.jsx)($,{}),(0,F.jsx)(A,{})]})})})}}}]);
//# sourceMappingURL=873.0898054f.chunk.js.map
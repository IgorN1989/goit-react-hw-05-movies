"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[711],{7081:function(n,e,t){t.d(e,{Hx:function(){return Z},Y5:function(){return x},bI:function(){return m},wr:function(){return f},xc:function(){return v}});var r=t(5861),o=t(7757),i=t.n(o),c=t(5294),a="trending/movie/day?language=en-US",u="search/movie",s="movie/",l="/credits",d="/reviews",h=c.Z.create();function f(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.get(a);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.get("".concat(u,"?query=").concat(e,"&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.get("".concat(s).concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.get("".concat(s).concat(e).concat(l));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.get("".concat(s).concat(e).concat(d));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}h.defaults.baseURL="https://api.themoviedb.org/3/",h.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjNjMmYyYjdlODliNjk1MWFmZTJkNTZiMzY0NDQxMiIsInN1YiI6IjY0ZjM4NTJiNzAwYmY3MDEwMDQxZTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDu7HaY5RLjgocbsSUGvk676JW6hJoLSQrFdUOrgIWs")},5247:function(n,e,t){t.d(e,{B:function(){return i}});var r,o=t(168),i=t(5867).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: ",";\n  font-size: 24px;\n  font-weight: 700;\n  color: ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.radius}),(function(n){return n.theme.colors.errorColor}))},2326:function(n,e,t){t.d(e,{O:function(){return Z}});var r,o,i,c,a,u,s=t(168),l=t(5867),d=l.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: ",";\n"])),(function(n){return n.theme.spacing(4)})),h=t(1087),f=t(7692),p=l.ZP.div(o||(o=(0,s.Z)(["\n  position: relative;\n  overflow: hidden;\n  height: 240px;\n  padding: ",";\n  border: 2px solid ",";\n  background-color: ",";\n  border-radius: ",";\n\n  /* background-image: linear-gradient(\n    to bottom,\n    rgba(1, 180, 228, 0.5),\n    rgba(144, 206, 161, 0.5)\n  ); */\n\n  transition: all ",";\n\n  &:hover {\n    border-color: ",";\n    box-shadow: ",";\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.spacing(.5)}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.shadow})),m=l.ZP.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 228px;\n  border-radius: ",";\n  object-fit: cover;\n"])),(function(n){return n.theme.radius})),g=l.ZP.div(c||(c=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: ",";\n  min-height: 80px;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  color: ",";\n  font-size: 18px;\n  width: 100%;\n  background-color: rgb(13, 37, 63, 0.5);\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.hoverColor})),x=l.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n"]))),b=l.ZP.div(u||(u=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(1)})),v=t(184),y=function(n){var e=n.movie,t=e.id,r=e.title,o=e.backdrop_path,i=e.poster_path,c=e.release_date,a=e.vote_average,u=n.location,s=c.slice(0,4),l=Math.round(10*a),d="https://image.tmdb.org/t/p/w500".concat(o||i);return(0,v.jsx)(h.rU,{to:"/movies/".concat(t),state:{from:u},children:(0,v.jsxs)(p,{children:[(o||i)&&(0,v.jsx)(m,{src:d,alt:r,loading:"lazy"}),(0,v.jsxs)(g,{children:[(0,v.jsx)("p",{children:r}),(0,v.jsxs)(x,{children:[(0,v.jsxs)("p",{children:["(",s,")"]}),(0,v.jsxs)(b,{children:[(0,v.jsx)(f.gew,{size:18}),(0,v.jsxs)("span",{children:[l,"%"]})]})]})]})]})})},Z=function(n){var e=n.movies,t=n.location;return(0,v.jsx)(d,{children:e.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(y,{movie:n,location:t})},n.id)}))})}},1711:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,o,i,c,a,u=t(3433),s=t(5861),l=t(9439),d=t(7757),h=t.n(d),f=t(2791),p=t(7689),m=t(1087),g=t(7081),x=t(5218),b=t(2326),v=t(828),y=t(168),Z=t(5867),w=Z.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),j=Z.ZP.form(o||(o=(0,y.Z)(["\n  display: flex;\n  gap: ",";\n  font-size: 24px;\n"])),(function(n){return n.theme.spacing(2)})),k=Z.ZP.input(i||(i=(0,y.Z)(["\n  border: 2px solid ",";\n  padding: "," ",";\n  border-radius: ",";\n  transition: all ",";\n  outline: none;\n  background-color: ",";\n  color: white;\n\n  &:focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.shadow})),C=Z.ZP.button(c||(c=(0,y.Z)(["\n  display: flex;\n  padding: "," ",";\n  color: ",";\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: ",";\n  transition: all ",";\n\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.hoverColor}),(function(n){return n.theme.shadow})),P=t(184),S=function(n){var e=n.onSubmitSearch,t=n.onResetSearch;return(0,P.jsx)(w,{children:(0,P.jsxs)(j,{onSubmit:function(n){n.preventDefault(),e(n.target.input.value)},children:[(0,P.jsx)(k,{name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."}),(0,P.jsx)(C,{type:"submit",children:(0,P.jsx)(v.Yfv,{size:24})}),(0,P.jsx)(C,{type:"reset",onClick:t,children:(0,P.jsx)(v.ZCS,{size:24})})]})})},z=t(4213),I=t(5247),J=Z.ZP.button(a||(a=(0,y.Z)(["\n  margin: "," auto;\n  padding: "," ",";\n  border-radius: ",";\n  background-color: ",";\n  padding: "," ",";\n  text-align: center;\n  display: block;\n  color: ",";\n  border: 2px solid ",";\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 24px;\n  font-weight: 700;\n  min-width: 230px;\n  transition: all ",";\n  &:hover {\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radius}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.hoverColor}),(function(n){return n.theme.shadow})),M=function(n){var e=n.onLoadMoreBtn,t=n.text;return(0,P.jsx)(J,{type:"button",onClick:e,children:t})};function N(){var n,e=(0,f.useState)([]),t=(0,l.Z)(e,2),r=t[0],o=t[1],i=(0,f.useState)(0),c=(0,l.Z)(i,2),a=c[0],d=c[1],v=(0,f.useState)(1),y=(0,l.Z)(v,2),Z=y[0],w=y[1],j=(0,f.useState)(!1),k=(0,l.Z)(j,2),C=k[0],J=k[1],N=(0,f.useState)(!1),Y=(0,l.Z)(N,2),_=Y[0],W=Y[1],L=(0,p.TH)(),B=(0,m.lr)(),D=(0,l.Z)(B,2),O=D[0],U=D[1],Q=null!==(n=O.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){function n(){return(n=(0,s.Z)(h().mark((function n(){var e,t,r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,J(!0),W(!1),n.next=5,(0,g.bI)(Q,Z);case 5:if(e=n.sent,t=e.total_results,r=e.results,o((function(n){return[].concat((0,u.Z)(n),(0,u.Z)(r))})),d(t),0!==t){n.next=13;break}return(0,x.ZP)("Sorry, there are no matching movies. Please try again."),n.abrupt("return");case 13:1===Z&&x.ZP.success("We found ".concat(t," movies!")),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),W(!0),x.ZP.error("Please reload this page");case 20:return n.prev=20,J(!1),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[0,16,20,23]])})))).apply(this,arguments)}""!==Q?function(){n.apply(this,arguments)}():o([])}),[Q,Z,U]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{onSubmitSearch:function(n){if(""===n.trim())return x.ZP.error("Please, enter your search query."),U({});n!==Q&&(o([]),w(1),U({query:n}))},onResetSearch:function(){o([]),w(1),d(0),U("")}}),r.length>0&&(0,P.jsx)(b.O,{movies:r,location:L}),C&&(0,P.jsx)(z.a,{}),_&&(0,P.jsx)(I.B,{children:"Whoops! Error! Please reload this page!"}),r.length>0&&r.length<a&&(0,P.jsx)(M,{onLoadMoreBtn:function(){w((function(n){return n+1}))},text:"Load more"})]})}}}]);
//# sourceMappingURL=711.2b158b67.chunk.js.map
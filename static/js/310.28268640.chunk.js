"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{755:function(n,r,e){e.d(r,{$:function(){return s}});var t,a=e(168),i=e(82).ZP.div(t||(t=(0,a.Z)(["\n  margin: 0 16px;\n"]))),c=e(184),s=function(n){var r=n.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("section",{children:(0,c.jsx)(i,{children:r})})})}},310:function(n,r,e){e.r(r),e.d(r,{default:function(){return L}});var t,a,i,c,s,o,u,l,p,d,h,f=e(689),v=e(791),x=e(885),m=e(424),Z=e(755),g=e(168),j=e(731),b=e(82),w=b.ZP.div(t||(t=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n"]))),k=b.ZP.ul(a||(a=(0,g.Z)([""]))),P=b.ZP.li(i||(i=(0,g.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 48px;\n  }\n"]))),y=b.ZP.h2(c||(c=(0,g.Z)(["\n  margin-bottom: 32px;\n"]))),_=b.ZP.h3(s||(s=(0,g.Z)(["\n  margin-bottom: 32px;\n"]))),C=b.ZP.h3(o||(o=(0,g.Z)(["\n  margin-bottom: 16px;\n"]))),G=b.ZP.img(u||(u=(0,g.Z)(["\n  margin-right: 16px;\n"]))),F=b.ZP.button(l||(l=(0,g.Z)(["\n  margin-bottom: 8px;\n  background-color: white;\n  color: gray;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.raspberry})),O=b.ZP.ul(p||(p=(0,g.Z)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),S=b.ZP.li(d||(d=(0,g.Z)(["\n  &:not(:last-child) {\n    margin-right: 8px;\n  }\n"]))),$=(0,b.ZP)(j.OL)(h||(h=(0,g.Z)(["\n  &.active,\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.raspberry})),B=e(184),L=function(){var n=function(){var n=(0,v.useState)(null),r=(0,x.Z)(n,2),e=r[0],t=r[1],a=(0,f.UO)().id;return(0,v.useEffect)((function(){(0,m.BG)(a).then(t)}),[a]),e}(),r=(0,f.s0)(),e=(0,f.TH)();return(0,B.jsx)(B.Fragment,{children:n&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(Z.$,{children:[(0,B.jsx)(F,{onClick:function(){var n,t;return r(null!==(n=null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,B.jsxs)(w,{children:[(0,B.jsx)(G,{src:"https://image.tmdb.org/t/p/w300/".concat(n.poster_path),alt:n.title}),(0,B.jsxs)(k,{children:[(0,B.jsxs)(P,{children:[(0,B.jsxs)(y,{children:[n.title,"(",n.release_date.slice(0,4),")"]}),(0,B.jsxs)("p",{children:["User Score: ",Math.round(10*n.vote_average),"%"]})]}),(0,B.jsxs)(P,{children:[(0,B.jsx)(_,{children:"Overview"}),(0,B.jsx)("p",{children:n.overview})]}),(0,B.jsxs)(P,{children:[(0,B.jsx)(_,{children:"Genres"}),(0,B.jsx)("p",{children:n.genres.map((function(n){return n.name})).join(", ")})]})]})]})]}),(0,B.jsxs)(Z.$,{children:[(0,B.jsx)(C,{children:"Additional information"}),(0,B.jsxs)(O,{children:[(0,B.jsx)(S,{children:(0,B.jsx)($,{to:"cast",children:"Cast"})}),(0,B.jsx)(S,{children:(0,B.jsx)($,{to:"reviews",children:"Reviews"})})]}),(0,B.jsx)(v.Suspense,{fallback:(0,B.jsx)("div",{children:"Loading subpage..."}),children:(0,B.jsx)(f.j3,{})})]})]})})}},424:function(n,r,e){e.d(r,{BG:function(){return p},Pv:function(){return d},a6:function(){return l},kK:function(){return h},sv:function(){return f}});var t=e(861),a=e(687),i=e.n(a),c=e(44),s="https://api.themoviedb.org/3",o="724fbc146559c3ae1940072aea85abed",u="",l=function(){var n=(0,t.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u="/movie/popular",n.next=3,c.ZP.get("".concat(s+u),{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u="/movie/",n.next=3,c.ZP.get("".concat(s+u+r),{params:{api_key:o}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u="/search/movie",n.next=3,c.ZP.get("".concat(s+u),{params:{api_key:o,query:r}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u="/movie/".concat(r,"/credits"),n.next=3,c.ZP.get("".concat(s+u),{params:{api_key:o}});case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u="/movie/".concat(r,"/reviews"),n.next=3,c.ZP.get("".concat(s+u),{params:{api_key:o}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.28268640.chunk.js.map
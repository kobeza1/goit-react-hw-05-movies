"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,r){r.r(t),r.d(t,{default:function(){return w}});var e,a,c,u,i,o=r(885),s=r(791),p=r(689),f=r(424),l=r(168),m=r(82),d=m.ZP.ul(e||(e=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 32px);\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=m.ZP.li(a||(a=(0,l.Z)(["\n  //   display: flex;\n  //   align-items: center;\n"]))),v=m.ZP.img(c||(c=(0,l.Z)(["\n  margin-bottom: 4px;\n"]))),g=m.ZP.p(u||(u=(0,l.Z)([""]))),x=m.ZP.p(i||(i=(0,l.Z)(["\n  //   color: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.colors.raspberry})),Z=r(184),w=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,p.UO)().id;return(0,s.useEffect)((function(){try{(0,f.kK)(a).then(e)}catch(n){console.log(n)}}),[a]),r.length>0?(0,Z.jsx)(d,{children:r.map((function(n){var t=n.name,r=n.character,e=n.profile_path,a=n.id;return(0,Z.jsx)(h,{children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(v,{src:"https://image.tmdb.org/t/p/w200/".concat(e),alt:t}),(0,Z.jsx)(x,{children:t}),(0,Z.jsx)(g,{children:r})]})},a)}))}):(0,Z.jsx)("div",{children:"No information about the actors"})}},424:function(n,t,r){r.d(t,{BG:function(){return f},Pv:function(){return l},a6:function(){return p},kK:function(){return m},sv:function(){return d}});var e=r(861),a=r(687),c=r.n(a),u=r(44),i="https://api.themoviedb.org/3",o="724fbc146559c3ae1940072aea85abed",s="",p=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s="/movie/popular",n.next=3,u.ZP.get("".concat(i+s),{params:{api_key:o}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s="/movie/",n.next=3,u.ZP.get("".concat(i+s+t),{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s="/search/movie",n.next=3,u.ZP.get("".concat(i+s),{params:{api_key:o,query:t}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s="/movie/".concat(t,"/credits"),n.next=3,u.ZP.get("".concat(i+s),{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s="/movie/".concat(t,"/reviews"),n.next=3,u.ZP.get("".concat(i+s),{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.2d95c96b.chunk.js.map
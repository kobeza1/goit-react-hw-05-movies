"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(t,n,r){r.r(n),r.d(n,{default:function(){return x}});var e,a,u,c,s=r(885),i=r(791),o=r(689),p=r(424),f=r(168),v=r(82),h=v.ZP.ul(e||(e=(0,f.Z)([""]))),d=v.ZP.li(a||(a=(0,f.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),m=v.ZP.h3(u||(u=(0,f.Z)(["\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),l=v.ZP.p(c||(c=(0,f.Z)([""]))),Z=r(184),x=function(){var t=(0,i.useState)([]),n=(0,s.Z)(t,2),r=n[0],e=n[1],a=(0,o.UO)().id;return(0,i.useEffect)((function(){(0,p.sv)(a).then(e)}),[a]),r.length>0?(0,Z.jsx)(h,{children:r.map((function(t){var n=t.author,r=t.content,e=t.id;return(0,Z.jsxs)(d,{children:[(0,Z.jsxs)(m,{children:["Author: ",n]}),(0,Z.jsx)(l,{children:r})]},e)}))}):(0,Z.jsx)("p",{children:"There are no reviews"})}},424:function(t,n,r){r.d(n,{BG:function(){return f},Pv:function(){return v},a6:function(){return p},kK:function(){return h},sv:function(){return d}});var e=r(861),a=r(687),u=r.n(a),c=r(44),s="https://api.themoviedb.org/3",i="724fbc146559c3ae1940072aea85abed",o="",p=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/movie/popular",t.next=3,c.ZP.get("".concat(s+o),{params:{api_key:i}});case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/movie/",t.next=3,c.ZP.get("".concat(s+o+n),{params:{api_key:i}});case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/search/movie",t.next=3,c.ZP.get("".concat(s+o),{params:{api_key:i,query:n}});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/movie/".concat(n,"/credits"),t.next=3,c.ZP.get("".concat(s+o),{params:{api_key:i}});case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="/movie/".concat(n,"/reviews"),t.next=3,c.ZP.get("".concat(s+o),{params:{api_key:i}});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.d6a45dfe.chunk.js.map
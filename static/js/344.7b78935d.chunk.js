"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{344:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(885),a=n(2791),i=n(8174),c=n(2010),o=n(6731),u="Home_TrendingMovieList__XtN-J",s="Home_TrendingMovieItem__ldC9K",m="Home_TitleWrapper__kuDS+",f="Home_TrendingMovieItemTitle__BfBV0",d="Home_TrendingMovieTitle__Omoi4",l=n(6474),h=n(184),p=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],p=t[1],v=(0,a.useState)(!1),_=(0,r.Z)(v,2),j=_[0],g=_[1];return(0,a.useEffect)((function(){g(!0),(0,c.Df)().then((function(e){var t=e.results;p(t)})).catch((function(e){return i.Am.error(e)})).finally(g(!1))}),[]),j?(0,h.jsx)(l.Loader,{}):(0,h.jsx)("main",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:d,children:"Top-20 trending movies:"}),(0,h.jsx)("ul",{className:u,children:n.map((function(e){return(0,h.jsxs)("li",{className:s,children:[(0,h.jsx)(o.rU,{to:"movies/".concat(e.id),children:(0,h.jsx)("img",{src:(t=e.poster_path,"".concat(c.yA).concat(t)),alt:e.title})}),(0,h.jsx)("div",{className:m,children:(0,h.jsx)("p",{className:f,children:e.title})})]},e.id);var t}))})]})})}},2010:function(e,t,n){n.d(t,{$w:function(){return l},Df:function(){return m},FL:function(){return d},Xj:function(){return h},ZF:function(){return f},yA:function(){return u}});var r=n(1413),a=n(5861),i=n(7757),c=n.n(i),o=n(1044),u="https://image.tmdb.org/t/p/w500",s=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,i,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pathName,a=t.param,i=void 0===a?{}:a,o.Z.defaults.baseURL="https://api.themoviedb.org/3",u=new URLSearchParams((0,r.Z)({api_key:"8981d06a4174dd7b5006af470bdeff3a"},i)),e.abrupt("return",o.Z.get("".concat(n,"?").concat(u)).then((function(e){return 200!==e.status?Promise.reject("Error: ".concat(e.message)):0===e.data.total_results?Promise.reject("Sorry, no matches found. Please try again."):e.data})).catch((function(e){return Promise.reject(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){return s({pathName:"/trending/movie/day"})},f=function(e){return s({pathName:"/search/movie",param:{query:e}})},d=function(e){return s({pathName:"/movie/".concat(e)})},l=function(e){return s({pathName:"/movie/".concat(e,"/credits")})},h=function(e){return s({pathName:"/movie/".concat(e,"/reviews")})}}}]);
//# sourceMappingURL=344.7b78935d.chunk.js.map
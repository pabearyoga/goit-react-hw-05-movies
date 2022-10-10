"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(A,e,t){t.r(e),t.d(e,{default:function(){return R}});var a=t(885),i=t(731),n=t(689),r=t(791),c=t(10),s=t(174),o=t(844),l="MovieDetails_MovieContainer__xyS+s",u="MovieDetails_MovieDetailsWrapper__qRh-O",d="MovieDetails_MoviePoster__abbRE",h="MovieDetails_MovieInfo__ICQhe",j="MovieDetails_MovieTitle__Aj4a0",v="MovieDetails_MovieSubTitle__NEJrv",m="MovieDetails_MovieText__8Z2Ex",E="MovieDetails_GoBackBtn__sO9wY",Q="MovieDetails_AdditionalInformationWrapper__GQ6Me",x="MovieDetails_AdditionalInformationList__V32Lb",B="MovieDetails_AdditionalInformationLink__gBJmh",D="MovieDetails_active__nw0x6",M=t(184),R=function(){var A={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ROUTE_HOME_PAGE,e=(0,n.TH)().state,t=(0,n.UO)().movieId,R=(0,r.useState)({}),f=(0,a.Z)(R,2),g=f[0],p=f[1],w=(0,r.useState)(!1),N=(0,a.Z)(w,2),I=N[0],b=N[1];(0,r.useEffect)((function(){t&&b(!0),(0,c.FL)(t).then((function(A){p(A)})).catch((function(A){return s.Am.error(A)})).finally(b(!1))}),[t]);var G,Y=g.poster_path,k=g.original_title,H=g.title,S=g.overview,_=g.genres;return(0,M.jsxs)("div",{children:[I&&(0,M.jsx)("p",{children:"Loading..."}),!(null!==g&&void 0!==g&&g.length)&&(0,M.jsxs)("div",{className:l,children:[(0,M.jsx)(i.OL,{className:E,to:e||"/".concat(A),children:"Go back"}),(0,M.jsxs)("div",{className:u,children:[Y?(0,M.jsx)("img",{className:d,src:(G=Y,"".concat(c.yA).concat(G)),alt:H}):(0,M.jsx)("img",{className:d,src:o,alt:H}),(0,M.jsxs)("div",{className:h,children:[(0,M.jsx)("h1",{className:j,children:k}),(0,M.jsx)("p",{className:v,children:"Overview"}),(0,M.jsx)("p",{className:m,children:S||"-"}),(0,M.jsx)("p",{className:v,children:"Genres"}),(0,M.jsx)("p",{className:m,children:(null===_||void 0===_?void 0:_.map((function(A){return A.name})).join(", "))||"-"})]})]}),(0,M.jsx)("div",{className:Q,children:(0,M.jsxs)("ul",{className:x,children:[(0,M.jsx)("li",{className:v,children:(0,M.jsx)(i.OL,{className:function(A){var e=A.isActive;return"".concat(e?D:B)},to:"cast",state:e,children:"Cast"})}),(0,M.jsx)("li",{className:v,children:(0,M.jsx)(i.OL,{className:function(A){var e=A.isActive;return"".concat(e?D:B)},to:"reviews",state:e,children:"Reviews"})})]})})]}),(0,M.jsx)(r.Suspense,{fallback:(0,M.jsx)("p",{children:"Loading..."}),children:(0,M.jsx)(n.j3,{})})]})}},10:function(A,e,t){t.d(e,{$w:function(){return h},Df:function(){return l},FL:function(){return d},Xj:function(){return j},ZF:function(){return u},yA:function(){return s}});var a=t(413),i=t(861),n=t(757),r=t.n(n),c=t(44),s="https://image.tmdb.org/t/p/w500",o=function(){var A=(0,i.Z)(r().mark((function A(e){var t,i,n,s;return r().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.pathName,i=e.param,n=void 0===i?{}:i,c.Z.defaults.baseURL="https://api.themoviedb.org/3",s=new URLSearchParams((0,a.Z)({api_key:"8981d06a4174dd7b5006af470bdeff3a"},n)),A.abrupt("return",c.Z.get("".concat(t,"?").concat(s)).then((function(A){return 200!==A.status?Promise.reject("Error: ".concat(A.message)):0===A.data.total_results?Promise.reject("Sorry, no matches found. Please try again."):A.data})).catch((function(A){return Promise.reject(A)})));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),l=function(){return o({pathName:"/trending/movie/day"})},u=function(A){return o({pathName:"/search/movie",param:{query:A}})},d=function(A){return o({pathName:"/movie/".concat(A)})},h=function(A){return o({pathName:"/movie/".concat(A,"/credits")})},j=function(A){return o({pathName:"/movie/".concat(A,"/reviews")})}},844:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=888.5b6af48f.chunk.js.map
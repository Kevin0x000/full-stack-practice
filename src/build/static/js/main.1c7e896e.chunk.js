(this["webpackJsonpfull-stack"]=this["webpackJsonpfull-stack"]||[]).push([[0],{24:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);n(19);var c=n(1),r=n.n(c),s=n(15),i=n.n(s),a=(n(24),n(7)),j=n(2),o=n(0);function u(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Hello, home page"})})}function l(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:" im About"})})}var h=[{name:"learn-react",title:"Fast way to learn react",content:["asdas ,da sdasd,,asd,asdasdasfgherh, hreh.  ,wer wer "]},{name:"a2",title:"this is a2 title",content:["222222222222  22222222222 22"]}];function d(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Articles"}),h.map((function(e,t){return Object(o.jsx)(a.b,{to:"/article/".concat(e.name),children:Object(o.jsx)("h3",{children:e.title})},t)}))]})}var b=n(9),x=n.n(b),O=n(11),p=n(18);function f(e){var t=e.comments;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:e.username}),Object(o.jsx)("p",{children:e.text})]},t)}))]})}function m(e){var t=e.articleName,n=e.upvotes,c=e.setArticleInfo,r=function(){var e=Object(O.a)(x.a.mark((function e(){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return r()},children:"Add Upvote"}),Object(o.jsxs)("p",{children:["This post has been upvoted ",n," times"]})]})}function v(e){var t=e.match.params.name,n=Object(c.useState)({upvotes:0,comments:[]}),r=Object(p.a)(n,2),s=r[0],i=r[1];Object(c.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var a=h.find((function(e){return e.name===t}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:a.title}),Object(o.jsx)(m,{articleName:t,upvotes:s.upvotes,setArticleInfo:i}),a.content.map((function(e,t){return Object(o.jsx)("p",{children:e},t)})),Object(o.jsx)(f,{comments:s.comments})]})}function g(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"404 Page not exists."})})}function w(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/articles-list",children:"Articles"})})]})})}n(35);var A=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(w,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",component:u,exact:!0}),Object(o.jsx)(j.a,{path:"/about",component:l}),Object(o.jsx)(j.a,{path:"/articles-list",component:d}),Object(o.jsx)(j.a,{path:"/article/:name",component:v}),Object(o.jsx)(j.a,{component:g})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root")),k()}},[[36,1,2]]]);
//# sourceMappingURL=main.1c7e896e.chunk.js.map
(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{35:function(e,t,n){},43:function(e,t,n){},53:function(e,t){e.exports={apiKey:"AIzaSyDrHC0awv-_Q6Dl_QXmizYqT6c1GcwvNAo",authDomain:"fir-auth-75219.firebaseapp.com",projectId:"fir-auth-75219",storageBucket:"fir-auth-75219.appspot.com",messagingSenderId:"480092528036",appId:"1:480092528036:web:36897176366793fd03f531"}},54:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(37),r=n.n(c),i=(n(43),n(22)),s=n(17),l=n.n(s),o=n(20),b=n(26),u=n(8),d=n(9),j=n(11),h=n(10),f=(n(35),[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}]);function m(){return f}var p=n(1),g=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.genres,n=e.groupBygenre;return Object(p.jsx)("ul",{class:"list-group",children:t.map((function(e){return Object(p.jsx)("li",{class:"list-group-item",onClick:function(){n(e.name)},children:e.name},e.id)}))})}}]),n}(a.Component),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){for(var e=this.props,t=e.numberofPage,n=e.currentPage,a=e.changeCurrentPage,c=[],r=0;r<t;r++)c.push(r+1);return Object(p.jsx)("nav",{"aria-label":"...",className:"col-2",children:Object(p.jsx)("ul",{className:"pagination ",children:c.map((function(e){var t=e==n?"page-item active":"page-item";return Object(p.jsx)("li",{className:t,"aria-current":"page",onClick:function(){a(e)},children:Object(p.jsx)("span",{className:"page-link",children:e})})}))})})}}]),n}(a.Component),O=n(19),x=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={genres:[{id:1,name:"All Genres"}],currSearchText:"",limit:4,currentPage:1,cGenre:"All Genres"},e.setCurrentText=function(t){var n=t.target.value;console.log(e.state.currSearchText),e.setState({currSearchText:n})},e.sortByRatings=function(t){var n,a=t.target.className,c=e.props.movie;n="fas fa-sort-up"==a?c.sort((function(e,t){return e.dailyRentalRate-t.dailyRentalRate})):c.sort((function(e,t){return t.dailyRentalRate-e.dailyRentalRate})),e.setState({movie:n})},e.sortByStock=function(t){var n,a=t.target.className,c=e.props.movie;n="fas fa-sort-up"==a?c.sort((function(e,t){return e.numberInStock-t.numberInStock})):c.sort((function(e,t){return t.numberInStock-e.numberInStock})),e.setState({movie:n})},e.changelimit=function(t){var n=t.target.value;e.setState({limit:n})},e.changeCurrentPage=function(t){e.setState({currentPage:t})},e.groupBygenre=function(t){e.setState({cGenre:t,currSearchText:""})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-backend101.herokuapp.com/genres");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({genres:[].concat(Object(b.a)(this.state.genres),Object(b.a)(n.genres))});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.currSearchText,n=e.limit,a=e.currentPage,c=e.genres,r=e.cGenre,i=this.props,s=i.movie,l=i.deleteEntry,o=s;if("All Genres"!=r&&(o=o.filter((function(e){return e.genre.name==r}))),""!=t)s.filter((function(e){return e.title.trim().toLowerCase().includes(t.toLowerCase())}));var b=Math.ceil(o.length/n),u=(a-1)*n,d=u+n;return o=o.slice(u,d),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)(g,{genres:c,groupBygenre:this.groupBygenre})}),Object(p.jsxs)("div",{className:"col-9",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn btn-primary",children:Object(p.jsx)(O.b,{to:"/new",className:"text-light",children:"New"})})}),Object(p.jsx)("input",{type:"search",value:t,placeholder:"search movie",onChange:this.setCurrentText}),Object(p.jsx)("input",{type:"number",className:"col-1",placeholder:"no of elements/page",value:n,onChange:this.changelimit}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Title"}),Object(p.jsx)("th",{scope:"col",children:" Genre"}),Object(p.jsxs)("th",{scope:"col",children:[Object(p.jsx)("i",{className:"fas fa-sort-up",onClick:this.sortByRatings}),"Rate",Object(p.jsx)("i",{className:"fas fa-sort-down",onClick:this.sortByRatings})]}),Object(p.jsxs)("th",{scope:"col",children:[Object(p.jsx)("i",{className:"fas fa-sort-up",onClick:this.sortByStock}),"Stock",Object(p.jsx)("i",{className:"fas fa-sort-down",onClick:this.sortByStock})]})]})}),Object(p.jsx)("tbody",{children:o.map((function(e){return Object(p.jsxs)("tr",{scope:"row",children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.genre.name}),Object(p.jsx)("td",{children:e.dailyRentalRate}),Object(p.jsx)("td",{children:e.numberInStock}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){l(e._id)},children:"Delete"})})]},e._id)}))})]}),Object(p.jsx)(v,{numberofPage:b,currentPage:a,changeCurrentPage:this.changeCurrentPage})]})]})}}]),n}(a.Component),y=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:{title:"",genre:"",stock:"",rate:""}},e.handleSubmit=function(t){t.preventDefault(),e.props.addMovie(e.state.data)},e.handleChange=function(t){var n=t.currentTarget.id,a=t.target.value,c=Object(i.a)({},e.state.data);c[n]=a,e.setState({data:c})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.data,t=e.title,n=e.genre,a=e.stock,c=e.rate;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{htmlFor:"title",children:["Title:",Object(p.jsx)("input",{type:"text",id:"title",value:t,onChange:this.handleChange})]}),Object(p.jsxs)("label",{htmlFor:"genre",children:["Genre",Object(p.jsxs)("select",{id:"genre",value:n,onChange:this.handleChange,children:[Object(p.jsx)("option",{value:"Action",children:"Action"}),Object(p.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(p.jsx)("option",{value:"Thriller",children:"Thriller"})]})]}),Object(p.jsxs)("label",{htmlFor:"stock",children:["Stock",Object(p.jsx)("input",{type:"number",id:"stock",value:a,onChange:this.handleChange})]}),Object(p.jsxs)("label",{htmlFor:"rate",children:["Rate",Object(p.jsx)("input",{type:"number",id:"rate",value:c,onChange:this.handleChange})]}),Object(p.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),n}(a.Component),k=n(5),S=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(p.jsx)(O.b,{className:"navbar-brand",to:"/",children:"Movies"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(p.jsx)("div",{className:"navbar-nav",children:Object(p.jsx)(O.b,{className:"nav-link",to:"/login",children:"Login"})})})]})}}]),n}(a.Component),C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Login"})}}]),n}(a.Component),R=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:[]},e.deleteEntry=function(t){var n=e.state.movie.filter((function(e){return e._id!=t}));e.setState({movie:n})},e.addMovie=function(t){for(var n=t.title,a=t.genre,c=t.stock,r=t.rate,i=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"}],s=0;s<i.length;s++)i[s].name==a&&(a=i[s]);var l={_id:Date.now(),title:n,genre:a,dailyRentalRate:r,numberInStock:c},o=[].concat(Object(b.a)(e.state.movie),[l]);e.setState({movie:o})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-backend101.herokuapp.com/movies");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({movie:n.movies});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("movies"),Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{}),Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{path:"/new",render:function(t){return Object(p.jsx)(y,Object(i.a)(Object(i.a)({},t),{},{addMovie:e.addMovie}))}}),Object(p.jsx)(k.a,{path:"/login",component:C}),Object(p.jsx)(k.a,{path:"/",render:function(t){return Object(p.jsx)(x,Object(i.a)(Object(i.a)({},t),{},{deleteEntry:e.deleteEntry,movie:e.state.movie}))}})]})]})}}]),n}(a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(18);var T=n(33),_=(n(50),n(55),n(53));T.a.initializeApp(_);T.a.auth();var w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:m(),currSearchText:"",limit:4,currentPage:1,cGenre:"All Genres",genres:m().json()},e.setCurrSearchText=function(t){var n=t.target.value;console.log(e.state.currSearchText),e.setState({currSearchText:n})},e.deleteEntry=function(t){var n=e.state.movies.filter((function(e){return e.title!=t}));console.log(t,"",n),e.setState({movies:n})},e.changeLimit=function(t){var n=t.target.value;console.log(n),e.setState({limit:n})},e.changeCurrentPage=function(t){e.setState({currentPage:t})},e.groupBygenre=function(t){e.setState({cGenre:t,currSearchText:""})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;console.log(this.state.movies);var t=this.state,n=t.movies,a=t.currentPage,c=(t.cGenre,t.genres),r=t.limit,i=t.currSearchText,s=n;console.log(c),""!=i&&(s=s.filter((function(e){return e.title.trim().toLowerCase().includes(i.toLowerCase())})),console.log("hello",s));for(var l=[],o=Math.ceil(s.length/r),b=0;b<o;b++)l.push(b+1);var u=(a-1)*r,d=u+r;return s=s.splice(u,d),console.log(s),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-3"}),Object(p.jsxs)("div",{className:"col-9",children:[Object(p.jsx)("input",{type:"search",placeholder:"Enter Movie",value:this.currSearchText,onChange:this.setCurrSearchText}),Object(p.jsx)("input",{type:"number",value:r,className:"col-2",onChange:this.changeLimit}),Object(p.jsxs)("table",{class:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Title"}),Object(p.jsx)("th",{scope:"col",children:"Genre"}),Object(p.jsx)("th",{scope:"col",children:"Rate"}),Object(p.jsx)("th",{scope:"col",children:"Stock"})]})}),Object(p.jsx)("tbody",{children:s.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{children:t.title}),Object(p.jsx)("td",{children:t.genre.name}),Object(p.jsx)("td",{children:t.dailyRentalRate}),Object(p.jsx)("td",{children:t.numberInStock}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){e.deleteEntry(t.title)},children:"Delete"})})]})}))})]}),Object(p.jsx)("nav",{"aria-label":"...",className:"col-2",children:Object(p.jsx)("ul",{class:"pagination",children:l.map((function(t){var n=t==a?"page-item active":"page-item";return Object(p.jsx)("li",{class:n,"aria-current":"page",onClick:function(){e.changeCurrentPage(t)},children:Object(p.jsx)("span",{class:"page-link",href:"#",children:t})})}))})})]})]})})}}]),n}(a.Component);a.Component;r.a.render(Object(p.jsx)(O.a,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),N()}},[[54,1,2]]]);
//# sourceMappingURL=main.80867772.chunk.js.map
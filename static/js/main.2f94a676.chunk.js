(this.webpackJsonpmovie_app_clone_2020=this.webpackJsonpmovie_app_clone_2020||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},37:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),s=n.n(o),i=n(7),c=n(8),l=n(10),m=n(9),u=(n(37),n(11)),p=n(1),v=(n(38),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),r.a.createElement("span",null,"Lorem Ipsum"))}}]),n}(a.Component)),h=n(15),d=n.n(h),f=n(29),y=n(30),g=n.n(y),b=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("error",e),console.log("errorInfo",t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(a.Component);n(57);var E=function(e){var t=e.title,n=e.year,a=e.summary,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(u.b,{to:{pathname:"/movie-detail",state:{year:n,title:t,summary:a,poster:o,genres:s}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h4",{className:"movie__year"},n),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},a.slice(0,180),"..."))))},_=(n(63),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(f.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement(b,null,r.a.createElement("div",{className:"movies"},n.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))))}}]),n}(a.Component));n(64);var k=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(u.b,{to:"/"},"Home"),r.a.createElement(u.b,{to:"/about"},"About"))},j=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),console.log(e),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("./")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(k,null),r.a.createElement(p.a,{path:"/",exact:!0,component:_}),r.a.createElement(p.a,{path:"/About",component:v}),r.a.createElement(p.a,{path:"/movie-detail",component:j}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.2f94a676.chunk.js.map
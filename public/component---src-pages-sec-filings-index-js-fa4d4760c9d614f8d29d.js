(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(t,e,n){"use strict";n.r(e);n(80),n(81),n(35);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=(n(156),n(177)),u=n.n(s),c=n(199),l=n.n(c),d=n(78),f=function(t){function e(){var e;return(e=t.call(this)||this).state={aListItems:[]},e}r()(e,t);var n=e.prototype;return n.render=function(){return o.a.createElement("div",null,o.a.createElement(u.a,{title:"SEC Filings"}),o.a.createElement("h1",null,"SEC Filings"),o.a.createElement("p",{style:Object.assign({},Object(d.scale)(-.2),{display:"block",marginBottom:Object(d.rhythm)(1),marginTop:Object(d.rhythm)(-1)})},"My Raspberry Pi is currently running and saving a list of various SEC filings from companies across the S&P500. Here's the list it's built so far:"),o.a.createElement("ul",null,this.state.aListItems))},n.componentDidMount=function(){var t=this;l.a.get("https://chrisfrew.in/sec-filings-api").then(function(e){var n=[];console.log(e),e.data.forEach(function(a,r){n.push(o.a.createElement("li",null,"oItem")),r===e.data.length&&t.setState({aListItems:n})})}).catch(function(e){t.setState({aListItems:[o.a.createElement("li",null,"Coming soon :)")]}),console.log(e)})},e}(o.a.Component);e.default=f},155:function(t,e,n){var a;t.exports=(a=n(159))&&a.default||a},156:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(154),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(155),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var d=n(36);n.d(e,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(t){return r.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(t,e,n){"use strict";n.r(e);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(50),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c}}]);
//# sourceMappingURL=component---src-pages-sec-filings-index-js-fa4d4760c9d614f8d29d.js.map
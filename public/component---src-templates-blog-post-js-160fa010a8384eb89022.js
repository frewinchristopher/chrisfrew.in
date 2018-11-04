(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(35);var n=a(0),r=a.n(n),l=a(156),o=a(177),i=a.n(o),c=(a(234),a(217)),s=a(78);t.default=function(e){var t=e.data,a=(e.location,e.pathContext),n=t.markdownRemark,o=n.frontmatter,m=n.html,u=a.next,h=a.prev,d=o.title,p=o.date,g=t.site.siteMetadata.title,f=n.excerpt;return r.a.createElement("div",null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:f}],title:o.title+" | "+g}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.rhythm)(24),padding:Object(s.rhythm)(1.5)+" "+Object(s.rhythm)(.75)}},r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.rhythm)(-1)}},r.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r.a.createElement("div",null,"Chris's ",r.a.createElement("span",{style:{color:"#F92672"}},"Full Stack"),", ",r.a.createElement("span",{style:{color:"#66D9EF"}},"Web Development"),", ",r.a.createElement("span",{style:{color:"#A6E22E"}},"ABAP"),", ",r.a.createElement("span",{style:{color:"#F92672"}},"SAPUI5"),", ",r.a.createElement("span",{style:{color:"#66D9EF"}},"Machine Learning"),",  & ",r.a.createElement("span",{style:{color:"#A6E22E"}},"Natural Language Processing")," ",r.a.createElement("span",{style:{color:"#F92672"}},"Blog"),".",r.a.createElement("br",null)))),r.a.createElement("h1",null,d),r.a.createElement("p",{style:Object.assign({},Object(s.scale)(-.2),{display:"block",marginBottom:Object(s.rhythm)(1),marginTop:Object(s.rhythm)(-1)})},p),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),r.a.createElement("hr",{style:{marginBottom:Object(s.rhythm)(1)}}),r.a.createElement("p",null,h&&r.a.createElement(l.Link,{to:h.frontmatter.relativeLink},"Previous Post: ",h.frontmatter.title)),r.a.createElement("p",null,u&&r.a.createElement(l.Link,{to:u.frontmatter.relativeLink},"Next Post: ",u.frontmatter.title)),r.a.createElement("hr",{style:{marginBottom:Object(s.rhythm)(1)}}),r.a.createElement(c.a,null)))};var m="2116053912"},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(154),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(155),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(36);a.d(t,"parsePath",function(){return u.a});var h=r.a.createContext({}),d=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(50),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},217:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=(a(238),a(239),a(218)),c=a.n(i),s=a(78),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=o.a.createElement("img",{src:c.a,alt:"Chris Frewin",style:{marginRight:Object(s.rhythm)(.5),marginBottom:0,width:Object(s.rhythm)(8),height:Object(s.rhythm)(8),borderRadius:"100%",zIndex:999}}),a=o.a.createElement("p",null,"Hi, I'm ",o.a.createElement("strong",null,"Chris Frewin"),", I run and post on"," ",o.a.createElement("a",{href:"https://nlp-champs.com",target:"_blank"},"nlp-champs.com")," ","and own the ",o.a.createElement("a",{href:"https://medium.com/@sirenapparel/siren-apparel-all-about-us-43c99839de5d",target:"_blank"},"charity clothing company")," ",o.a.createElement("a",{href:"https://sirenapparel.us",target:"_blank"},"Siren Apparel"),".","\n","I'm an ex-mechanical engineer gone full-remote, full-stack application software engineer, and a hobbyist machine learning/natural language processing developer. If I'm not building software, I'll be found hiking, skiing, losing money trading options, or creating music and art. I (mostly) live in Austria."," ",o.a.createElement("a",{href:"https://twitter.com/galt_"},"You can follow me on Twitter, @Galt_,")," ","(though I don't post often), or,"," ",o.a.createElement("a",{href:"mailto:frewin.christopher@gmail.com"},"Send me an email."),o.a.createElement("br",null),o.a.createElement("br",null)," ","Got a project/job that needs doin'? ",o.a.createElement("a",{href:"https://chrisfrew.in/talk-shop",style:{color:"black",textDecorationColor:"black"}},o.a.createElement("span",{style:{color:"black"}},"Get in contact with me"))," and let's get to it! I'm always looking to learn and build new things!",o.a.createElement("br",null),o.a.createElement("br",null),"I'm a proud member of Dev.to, Product Hunt's Makers Community, and Egghead.io's Community!",o.a.createElement("br",null),o.a.createElement("a",{target:"_blank",href:"https://dev.to/frewinchristopher",style:{textDecoration:"none"}},o.a.createElement("img",{src:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",alt:"fullStackChris's DEV Profile",height:"30",width:"30"}))," ",o.a.createElement("a",{target:"_blank",href:"https://producthunt.com/@galt_",style:{textDecoration:"none"}},o.a.createElement("svg",{width:"30",height:"30",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{fill:"none",fillRule:"evenodd"},o.a.createElement("path",{d:"M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20",fill:"#DA552F"}),o.a.createElement("path",{d:"M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14",fill:"#FFF"}))))," ",o.a.createElement("a",{target:"_blank",href:"https://community.egghead.io/members/1420280"},o.a.createElement("img",{src:"https://egghead.io/favicon.ico?v=2",width:"30"})));return e=window.innerHeight>=768?o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.rhythm)(2.5)}},t,a):o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.rhythm)(2.5)}},t),o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.rhythm)(2.5)}},a)),o.a.createElement("div",null,e)},t}(o.a.Component);t.a=m},218:function(e,t,a){e.exports=a.p+"static/defaultprofilepicture-2252194680d3fae4bbb0ad8018604ab6.png"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-160fa010a8384eb89022.js.map
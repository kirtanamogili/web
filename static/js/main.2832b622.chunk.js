(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c(19),a=c.n(s),i=(c(52),c(53),c(40)),r=c(41),o=c(48),l=c(47),h=c(13),j=[{title:"HOME",url:"",cName:"nav-links"},{title:"RESUME",url:"resume",cName:"nav-links"},{title:"PROJECTS",url:"projects",cName:"nav-links"},{title:"CONTACT",url:"contact",cName:"nav-links"}],d=(c(54),c(3)),b=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:j.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{className:e.cName,exact:!0,to:e.url,activeStyle:{color:"#fb8500"},children:e.title})},t)}))})]})}}]),c}(n.Component),m=c(7),u=c(16),x=function(){return Object(d.jsxs)(u.c,{children:[Object(d.jsx)("a",{href:"https://www.facebook.com/kirtana.mogili",className:"social",children:Object(d.jsx)(u.d,{fab:!0,icon:"facebook-f"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/kirtana-mogili-95128b179/",className:"social",children:Object(d.jsx)(u.d,{fab:!0,icon:"linkedin-in"})}),Object(d.jsx)("a",{href:"https://github.com/kirtanamogili",className:"social",children:Object(d.jsx)(u.d,{fab:!0,icon:"github"})}),Object(d.jsx)("a",{href:"mailto: kirtanamogili@gatech.edu",className:"social",children:Object(d.jsx)(u.d,{icon:"envelope"})})]})},O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"header-home",children:[Object(d.jsx)("h1",{className:"name",children:"Kirtana Mogili"}),Object(d.jsx)("h2",{children:"Student. Software Engineer. Dancer."}),Object(d.jsx)(x,{})]}),Object(d.jsxs)("div",{className:"main-body",children:[Object(d.jsx)("h3",{children:"About"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h4",{children:"Let me introduce myself."}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("body",{className:"text",children:["Hello! My name is Kirtana Mogili, and let me tell you the story of how I discovered my interest in Software Engineering.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\u201cKarel the Dog\u201d first introduced me to computer science. Karel lives in a grid world instructed by users to move and pick up tennis balls. I became friends with Karel the summer before my senior year of high school. Since I was unable to enroll in the only Computer Science class offered at my school, I found the summer assignment for the class and was introduced to Karel through ",Object(d.jsx)("a",{className:"weblink",href:"https://codehs.com/",children:"codeHS.com"}),". Thus, my coding journey had begun. I worked with Karel to develop beginner level coding skills. I eventually left Karel and started making small Java programs as simple as printing \u201cHello World!\u201d to traversing through a list of data until I started my higher education at the Georgia Institute of Technology where I was exposed to a multiplex of resources. I learned from my peers who came from all over the world holding similar goals and aspirations as me. With these new connections, I participated in multiple hackathons, joined a programming team, and got involved with ",Object(d.jsx)("a",{className:"weblink",href:"https://bitsofgood.org/",children:"Bits of Good"}),", an organization that partners with local non-profits to volunteer technical resources such as web development.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"I hope to continue expanding my knowledge in computer science by experimenting with new technologies and gaining experience in the workforce."]}),Object(d.jsx)("div",{className:"frame",children:Object(d.jsx)("img",{alt:"Profile",src:"profile_pic.jpg",className:"profilepic"})})]})]})]})},f=function(){return Object(d.jsxs)("div",{className:"main-body",children:[Object(d.jsx)("h3",{children:"Resume"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h4",{children:"More of my credentials."}),Object(d.jsx)("div",{children:Object(d.jsx)("iframe",{title:"resume",href:"../../public/Resume.pdf",width:"100%",height:"100%"})})]})},p=function(){return Object(d.jsxs)("div",{className:"main-body",children:[Object(d.jsx)("h3",{children:"Projects"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h4",{children:"Check out what I've worked on."}),Object(d.jsx)("div",{children:Object(d.jsx)("body",{className:"text",children:"Sorry! This page is still under construction."})})]})},g=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("header",{className:"header-contact",children:[Object(d.jsx)("h3",{children:"Contact"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h4",{children:"Let's connect."}),Object(d.jsxs)("div",{className:"contact-body",children:[Object(d.jsxs)("body",{className:"text",children:["I am currently looking for 2021/2022 internship opportunities. Please shoot me an email or connect with me on LinkedIn to start a conversation. I would love to get to know you better and share more about myself!",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)("a",{href:"mailto: kirtanamogili@gatech.edu",class:"contact",children:"Say Hello!"})]})]})})};var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(h.a,{basename:"/web",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/",exact:!0,component:O}),Object(d.jsx)(m.a,{path:"/Resume",component:f}),Object(d.jsx)(m.a,{path:"/Projects",component:p}),Object(d.jsx)(m.a,{path:"/Contact",component:g})]})]})})};a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.2832b622.chunk.js.map
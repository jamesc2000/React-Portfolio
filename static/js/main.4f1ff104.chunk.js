(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{3:function(e,a,t){e.exports=t(9)},8:function(e,a,t){},9:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(2),r=t.n(l);t(8);class c extends n.Component{render(){return s.a.createElement("nav",{id:"nav-wrap",className:this.props.classOpacity},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:this.props.selected[0]},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",{className:this.props.selected[1]},s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",{className:this.props.selected[2]},s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),s.a.createElement("li",{className:this.props.selected[3]},s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",{className:this.props.selected[4]},s.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact"))))}}class o extends n.Component{render(){let e=this.props.resumeData;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"parallax"}),s.a.createElement("div",{className:"fixed"}),s.a.createElement("header",{id:"home"},s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),s.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,". ",e.roleDescription),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(e=>s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.className}))))))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"})))))}}class i extends n.Component{render(){let e=this.props.resumeData;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:"".concat(e.profilepic),alt:""})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,e.aboutme),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,e.name),s.a.createElement("br",null),s.a.createElement("span",null,e.address),s.a.createElement("br",null),s.a.createElement("span",null,e.website)))))))}}class m extends n.Component{render(){let e=this.props.resumeData;return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(e=>s.a.createElement("div",{className:"row item",key:e.UniversityName},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.UniversityName),s.a.createElement("h4",null,e.UniversityAlt),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),s.a.createElement("p",null,e.Achievements)))))))}}class p extends n.Component{render(){return s.a.createElement("div",{className:"portfolio-item-wrapper"},s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"portfolio-item"},s.a.createElement("img",{className:"thumb",src:"".concat(this.props.src),alt:"".concat(this.props.alt)}),s.a.createElement("div",{id:"name"},this.props.name),s.a.createElement("div",{id:"desc"},this.props.desc),s.a.createElement("div",{id:"buttons",className:"bgrid-halves s-bgrid-halves cf"},s.a.createElement("button",{id:"demo",className:"button column centered"},"Demo Project"),s.a.createElement("button",{id:"view",className:"button column centered"},"View Code")))))}}class d extends n.Component{render(){let e=this.props.resumeData;return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Check Out Some of My Works."),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e.portfolio.map(e=>s.a.createElement(p,{key:e.name,name:e.name,desc:e.desc,src:e.imgurl}))))))}}class u extends n.Component{render(){let e=this.props.resumeData;return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(e=>s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))}}var h={name:"James Laurence Cruz",role:"Frontend Developer",profilepic:"%PUBLIC_URL%/images/profilepic.jpg",linkedinId:"https://www.linkedin.com/in/cruz-james/",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/cruz-james/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/jamesc2000",className:"fa fa-github"}],aboutme:"I am currently a student of Pamantasan ng Lungsod ng Maynila (PLM), and aspiring to be a software developer in the future. As of now, I currently do freelance work, and work on my personal projects to further enhance my skills as a developer.",address:"Philippines",website:"",education:[{UniversityName:"Pamantasan ng Lungsod ng Maynila",UniversityAlt:"(University of the City of Manila)",specialization:"Bachelor of Science Major in Computer Engineering",MonthOfPassing:"May",YearOfPassing:"2022"},{UniversityName:"Lyceum of the Philippines University - Cavite",specialization:"Academic Track - STEM",MonthOfPassing:"May",YearOfPassing:"2019",Achievements:"With Honors"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"project1",desc:"mobileapp",imgurl:"%PUBLIC_URL%/images/portfolio/coffee.jpg"},{name:"project2",desc:"mobileapp",imgurl:"%PUBLIC_URL%/images/portfolio/console.jpg"},{name:"project3",desc:"mobileapp",imgurl:"%PUBLIC_URL%/images/portfolio/farmerboy.jpg"},{name:"project4",desc:"mobileapp",imgurl:"%PUBLIC_URL%/images/portfolio/phone.jpg"}]},E=[];class v extends n.Component{constructor(e){super(e),this.scrollDown=()=>{let e=document.documentElement.scrollTop;e<E[0]?this.setState({navbarOpacity:"",currentSection:["current","","","",""]}):E[0]<e&&e<E[1]?this.setState({navbarOpacity:"opaque",currentSection:["","current","","",""]}):E[1]<e&&e<E[2]?this.setState({navbarOpacity:"opaque",currentSection:["","","current","",""]}):E[2]<e&&e<E[3]&&this.setState({navbarOpacity:"opaque",currentSection:["","","","current",""]})},this.state={navbarOpacity:"",currentSection:["current","","","",""]}}componentDidMount(){let e=[document.getElementById("home"),...document.getElementsByTagName("section")],a=document.getElementsByTagName("img");var t=0;for(let n=0;n<a.length;n++)a[n].addEventListener("load",()=>{++t===a.length-1&&e.map(e=>e.offsetHeight).reduce((function(e,a,t){return E[t]=e+a}),0)});window.addEventListener("scroll",this.scrollDown)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollDown)}render(){return s.a.createElement("div",{className:"App"},s.a.createElement(c,{classOpacity:this.state.navbarOpacity,selected:this.state.currentSection}),s.a.createElement(o,{resumeData:h}),s.a.createElement(i,{resumeData:h}),s.a.createElement(d,{resumeData:h}),s.a.createElement(m,{resumeData:h}),s.a.createElement(u,{resumeData:h}))}}var f=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[3,1,2]]]);
//# sourceMappingURL=main.4f1ff104.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a.n(r),o=(a(65),a(6)),c=a(18),s=a(19),m=function(){return l.a.createElement("div",{className:"hide-on-med-and-up"},l.a.createElement(s.Dropdown,{style:{position:"relative"},trigger:l.a.createElement("a",null,l.a.createElement(s.Icon,null,"menu"))},l.a.createElement(o.b,{to:"/about"},"About"),l.a.createElement(s.Divider,null),l.a.createElement(o.b,{to:"/merch"},"Merch"),l.a.createElement(s.Divider,null),l.a.createElement(o.b,{to:"/contact"},"Contact"),l.a.createElement(s.Divider,null)))},d=function(){return l.a.createElement("ul",{class:"right hide-on-small-only"},l.a.createElement("li",null,l.a.createElement(o.c,{to:"/about",activeStyle:{color:"#650200"}},"About")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/merch",activeStyle:{color:"#650200"}},"Merch")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/contact",activeStyle:{color:"#650200"}},"Contact")))},u=function(){return l.a.createElement("div",{class:"navbar-fixed"},l.a.createElement("nav",null,l.a.createElement("div",{style:{paddingLeft:15},class:"nav-wrapper grey darken-2"},l.a.createElement(o.c,{class:"brand-logo",to:"/"},"Skreet2x"),l.a.createElement(m,null),l.a.createElement(d,null))))},h=a(12),p=a(13),g=a(15),f=a(14),E=a(16),y=a(55),v=a.n(y),w=a(56),b=a.n(w),k=a(57),x=a.n(k),C=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).handleStop=function(e){a.props.render(e.clientX)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.progress,r=e.completedBarColor,i=e.notCompletedBarColor,o=(e.cursorColor,a/2),c=t*n,s=t-c;return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:t,height:a}},l.a.createElement("div",{style:{width:c,height:15,backgroundColor:r}}),l.a.createElement("div",{style:{width:s,height:15,backgroundColor:i}}),l.a.createElement(x.a,{axis:"x",handle:".handle",defaultPosition:{x:-s,y:0},position:{x:-s,y:0},bounds:{left:-t+o,right:-o},grid:[1,25],scale:1,onStop:this.handleStop},l.a.createElement("div",null,l.a.createElement("div",{className:"handle",style:{height:a,width:a,borderRadius:a,backgroundColor:"black"}}))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={playing:!1,progress:.01,volume:.5},a.togglePlaying=function(){a.setState({playing:!a.state.playing})},a.progressBarDragged=function(e){var t=(e-300)/500;a.setState({progress:t}),a.player.seekTo(t,"fraction")},a.updateSongProgress=function(e){a.setState({progress:e.played})},a.updateSongDuration=function(e){a.setState({songDuration:e})},a.updateVolume=function(){},a.ref=function(e){a.player=e},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.author,r=t.url,i=this.state,o=i.progress,c=i.playing,s=i.volume,m=c?"pause":"play_arrow";return l.a.createElement("div",{style:{height:150,width:"100%",backgroundColor:"#b5b5b5",position:"fixed",bottom:0,display:"flex",flexDirection:"row"}},l.a.createElement(b.a,{ref:this.ref,url:r,width:250,height:150,playing:c,volume:s,onDuration:this.updateSongDuration,onProgress:this.updateSongProgress}),l.a.createElement("div",{style:{padding:20}},l.a.createElement("h5",null,a),l.a.createElement("h6",null,n)),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",top:-7.6,width:500}},l.a.createElement(C,{width:500,height:30,progress:o,completedBarColor:"#5e5e5e",notCompletedBarColor:"#8f8f8f",cursorColor:"#fff",render:function(t){return e.progressBarDragged(t)}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}},l.a.createElement("i",{onClick:this.togglePlaying,style:{fontSize:100},class:"material-icons"},m),l.a.createElement(C,{width:100,height:20,progress:s,completedBarColor:"#5e5e5e",notCompletedBarColor:"#8f8f8f",cursorColor:"#fff",render:function(t){return e.updateVolume(t)}}))))}}]),t}(n.Component),j=a(39),O=a.n(j),D=a(40),B=a.n(D),M=a(25),L=a.n(M),A=a(26),_=a.n(A),z=a(27),P=a.n(z),N=a(28),I=a.n(N);function W(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:200,justifyContent:"space-between",alignItems:"center",paddingLeft:"10%",paddingRight:"10%"},class:"Background-Color-Maroon"},l.a.createElement("a",{style:{width:50,height:50},href:"https://www.instagram.com/skreet2x/",target:"_blank"},l.a.createElement("img",{src:O.a,alt:"instagram link"})),l.a.createElement("a",{style:{width:50,height:50},href:"https://twitter.com/Skreet2x",target:"_blank"},l.a.createElement("img",{src:B.a,alt:"twitter link"})),l.a.createElement("a",{style:{width:50,height:50},href:"https://soundcloud.com/skreet2x",target:"_blank"},l.a.createElement("img",{src:L.a,alt:"soundcloud link"})),l.a.createElement("a",{style:{width:50,height:50},href:"https://www.youtube.com/user/R8Rewindz/videos",target:"_blank"},l.a.createElement("img",{src:I.a,alt:"youtube link"})),l.a.createElement("a",{style:{width:50,height:50},href:"https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g",target:"_blank"},l.a.createElement("img",{src:_.a,alt:"spotify link"})),l.a.createElement("a",{style:{width:50,height:50},href:"https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs",target:"_blank"},l.a.createElement("img",{src:P.a,alt:"itunes link"}))),l.a.createElement("div",{style:{width:"100%",height:50,backgroundColor:"#3b0100"}}))}var Y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).updateWindowDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a.state={width:0,height:0},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.state.width,t=e>600?20:0;return l.a.createElement("div",{style:{}},e>600?l.a.createElement("img",{style:{width:"100%",verticalAlign:"middle"},src:v.a,alt:"cover photo"}):null,l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(T,{width:this.state.width}),l.a.createElement("div",{class:"Background-Color-Black",style:{height:"700px",padding:20}},e>600?l.a.createElement("h3",{style:{color:"white"}},"Songs"):l.a.createElement("h5",{style:{color:"white"}},"Songs"),l.a.createElement("ul",{style:{padding:t}},l.a.createElement("li",null,l.a.createElement(U,{width:this.state.width,youtubeLink:"https://www.youtube.com/watch?v=7Auf9rBvNbY",soundcloudLink:"https://soundcloud.com/skreet2x",spotifyLink:"https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g",itunesLink:"https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"})),l.a.createElement("li",null,l.a.createElement(U,{width:this.state.width,youtubeLink:"https://www.youtube.com/watch?v=7Auf9rBvNbY",soundcloudLink:"https://soundcloud.com/skreet2x",spotifyLink:"https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g",itunesLink:"https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"}))))),l.a.createElement(S,{title:"Goodbye",author:"Post Malone",url:"https://www.youtube.com/watch?v=ba7mB8oueCY"}),l.a.createElement(W,null))}}]),t}(n.Component),T=function(e){var t=e.width;e.height;if(t>600){var a=80,n=48.75;return l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("div",{style:{width:250,height:187.5}},l.a.createElement("i",{class:"material-icons",style:{position:"absolute",top:n,left:a,fontSize:90,color:"white"}},"play_arrow"),l.a.createElement("img",{style:{width:250,height:187.5,verticalAlign:"middle"},src:"https://img.youtube.com/vi/7Auf9rBvNbY/0.jpg",alt:"cover photo"})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:1}},l.a.createElement("div",{style:{height:94}}),l.a.createElement("div",{class:"Background-Color-Maroon",style:{height:94,padding:10}},l.a.createElement("h6",{style:{color:"white"}},"Featured Track"),l.a.createElement("h4",{style:{color:"white",padding:0,margin:0}},"Upbringing"))))}a=(t-90)/2,n=(.75*t-90)/2;return l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("div",null,l.a.createElement("i",{class:"material-icons",style:{position:"absolute",top:n,left:a,fontSize:90,color:"white"}},"play_arrow"),l.a.createElement("img",{style:{width:t,verticalAlign:"middle"},src:"https://img.youtube.com/vi/7Auf9rBvNbY/0.jpg",alt:"cover photo"})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:1}},l.a.createElement("div",{class:"Background-Color-Maroon",style:{height:94,padding:10}},l.a.createElement("h6",{style:{color:"white"}},"Featured Track"),l.a.createElement("h4",{style:{color:"white",padding:0,margin:0}},"Upbringing"))))},U=function(e){var t=e.youtubeLink,a=e.soundcloudLink,n=e.spotifyLink,r=e.itunesLink,i=e.width,o=i>600?125:100,c=i>600?93.75:75,s=i>600?90:50,m=(o-s)/2,d=(c-s)/2,u=i>600?40:25,h=h=i>600?"row":"column";return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",padding:10}},l.a.createElement("div",{style:{width:o,height:c,position:"relative",top:0,left:0}},l.a.createElement("img",{style:{position:"absolute",top:0,left:0,width:o,height:c,verticalAlign:"middle"},src:"https://img.youtube.com/vi/7Auf9rBvNbY/0.jpg",alt:"cover photo"}),l.a.createElement("i",{class:"material-icons",style:{position:"relative",top:d,left:m,fontSize:s,color:"white"}},"play_arrow")),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:1}},l.a.createElement("div",{class:"Background-Color-Maroon",style:{height:c,padding:10,display:"flex",flexDirection:h,justifyContent:"space-between"}},l.a.createElement("h4",{style:{color:"white",padding:0,margin:0,fontSize:10}},"Upbringing"),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("a",{style:{width:u,height:u,margin:5},href:a,target:"_blank"},l.a.createElement("img",{src:L.a,alt:"soundcloud link"})),l.a.createElement("a",{style:{width:u,height:u,margin:5},href:t,target:"_blank"},l.a.createElement("img",{src:I.a,alt:"youtube link"})),l.a.createElement("a",{style:{width:u,height:u,margin:5},href:n,target:"_blank"},l.a.createElement("img",{src:_.a,alt:"spotify link"})),l.a.createElement("a",{style:{width:u,height:u,margin:5},href:r,target:"_blank"},l.a.createElement("img",{src:P.a,alt:"itunes link"}))))))},J=(a(119),l.a.createContext({})),F=a(58),H=(a(120),a(59)),R=a.n(H),X=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F.Parallax,{blur:0,bgImage:R.a,bgImageAlt:"the cat",strength:200},l.a.createElement("div",{style:{height:"600px"}},l.a.createElement("h2",{style:{position:"relative",top:250,left:60}},"About Me"))),l.a.createElement("div",{style:{minHeight:600,backgroundColor:"#2e2e2e",display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{class:"container",style:{height:"100%"}},l.a.createElement("p",{style:{fontSize:24,color:"white"}},'Jayden Robert Gregory Street (born March 28th, 2001) professionally known as Skreet or Skreet2x, is a rapper from Bloomington, Indiana. He first gained buzz via SoundCloud and Instagram with a variety of singles. And he first started to make noise with his song \u201cCan\u2019t Feel My Pain." In March 2019, Skreet\u2019s debut studio album \u201cA Trip To The Moon\u201d was released, not to be confused with any of his previous singles. Skreet claims to be inspired by many other rappers and artists not limited to but including, Nas, J. Cole, Kendrick Lamar, and a mass variety of others.'))),l.a.createElement(W,null))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={sizeColors:["#9fa8da","#9fa8da","#9fa8da","#9fa8da","#9fa8da"]},a.toggle=function(e){var t=["#9fa8da","#9fa8da","#9fa8da","#9fa8da","#9fa8da"];a.state.sizeColors.forEach(function(a,n){n===e&&(t[n]="#5c6bc0"==a?"#9fa8da":"#5c6bc0")}),a.setState({sizeColors:t})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.imgUrl,n=t.title,r=t.price,i=this.state.sizeColors;return l.a.createElement(J.Consumer,null,function(t){return l.a.createElement("div",null,console.log(t),l.a.createElement(s.Modal,{header:n,className:"Merch-Modal",trigger:l.a.createElement("div",{class:"col s10"},l.a.createElement("div",{class:"card z-depth-3"},l.a.createElement("div",{class:"card-image"},l.a.createElement("img",{src:a})),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:20}},l.a.createElement("span",{class:"card-title"},n),l.a.createElement("h5",null,r))))},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},l.a.createElement("div",{style:{width:"40%",height:"auto"}},l.a.createElement("img",{class:"responsive-img",src:a})),l.a.createElement("div",{style:{padding:20,display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.a.createElement("h5",null,r),l.a.createElement("div",null,l.a.createElement("h5",null,"size"),l.a.createElement("div",null,l.a.createElement("a",{style:{margin:5,backgroundColor:i[0]},class:"waves-effect btn",onClick:function(){return e.toggle(0)}},"small"),l.a.createElement("a",{style:{margin:5,backgroundColor:i[1]},class:"waves-effect btn",onClick:function(){return e.toggle(1)}},"medium"),l.a.createElement("a",{style:{margin:5,backgroundColor:i[2]},class:"waves-effect btn",onClick:function(){return e.toggle(2)}},"large"),l.a.createElement("a",{style:{margin:5,backgroundColor:i[3]},class:"waves-effect btn",onClick:function(){return e.toggle(3)}},"x-large"),l.a.createElement("a",{style:{margin:5,backgroundColor:i[4]},class:"waves-effect btn",onClick:function(){return e.toggle(4)}},"xx-large"))),l.a.createElement("a",{style:{margin:10,width:"100%"},class:"waves-effect waves-light btn"},l.a.createElement("i",{class:"material-icons left"},"add_shopping_cart"),"add to cart")))))})}}]),t}(n.Component),Q=a(29),G=a.n(Q);var V=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"container",style:{height:850}},l.a.createElement("h3",null,"Merch"),l.a.createElement("div",{style:{marginTop:30,marginBottom:30}},l.a.createElement("div",{class:"row",style:{display:"flex",flexDirection:"row"}},l.a.createElement($,{imgUrl:G.a,title:"Long Sleeve Shirt",price:"$32.00"}),l.a.createElement($,{imgUrl:G.a,title:"Long Sleeve Shirt",price:"$32.00"}),l.a.createElement($,{imgUrl:G.a,title:"Long Sleeve Shirt",price:"$32.00"})))),l.a.createElement(W,null))};var K=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"Padding-Main Background-Color-Dark"},l.a.createElement("h2",{className:"Font-Size-Heading Font-Color-White"},"Contact Me"),l.a.createElement("div",{style:{marginTop:"80px",marginBottom:"80px"}},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{placeholder:"",id:"first_name",type:"text",class:"validate"}),l.a.createElement("label",{class:"black-text",for:"first_name"},"First Name")),l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{placeholder:"",id:"last_name",type:"text",class:"validate"}),l.a.createElement("label",{class:"black-text",for:"last_name"},"Last Name"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{placeholder:"",id:"email",type:"text",class:"validate"}),l.a.createElement("label",{class:"black-text",for:"email"},"Email"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{placeholder:"",id:"subject",type:"text",class:"validate"}),l.a.createElement("label",{class:"black-text",for:"subject"},"Subject"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s12"},l.a.createElement("input",{placeholder:"",id:"Message",type:"text",class:"validate"}),l.a.createElement("label",{class:"black-text",for:"Message"},"Message"))),l.a.createElement("a",{class:"waves-effect waves-light btn"},"Send")))),l.a.createElement(W,null))};var q=function(){return l.a.createElement(J.Provider,{value:"HELLO"},l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(c.a,{path:"/",exact:!0,component:Y}),l.a.createElement(c.a,{path:"/about",component:X}),l.a.createElement(c.a,{path:"/merch",component:V}),l.a.createElement(c.a,{path:"/contact",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,a){e.exports=a.p+"static/media/soundcloud.72bdbbc2.svg"},26:function(e,t,a){e.exports=a.p+"static/media/spotify.d62cba31.svg"},27:function(e,t,a){e.exports=a.p+"static/media/itunes.5f2adadf.svg"},28:function(e,t,a){e.exports=a.p+"static/media/youtube.87205ef0.svg"},29:function(e,t,a){e.exports=a.p+"static/media/sample-merch-item.7b695817.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/instagram.6bc5de27.svg"},40:function(e,t,a){e.exports=a.p+"static/media/twitter.f05be4ce.svg"},55:function(e,t,a){e.exports=a.p+"static/media/cover.e23c26fa.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/about.4e1ef5ae.jpg"},60:function(e,t,a){e.exports=a(121)},65:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.bd956ed9.chunk.js.map
(this["webpackJsonpcard-game-helper"]=this["webpackJsonpcard-game-helper"]||[]).push([[0],{55:function(e,a,t){e.exports=t(65)},60:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),c=t.n(r),u=(t(60),t(10)),m=t(103),o=t(107),E=t(106),i=t(104),s=t(105),d=t(110),v=t(96),f=t(108),h=function(e){var a=n.a.useState(""),t=Object(u.a)(a,2),l=t[0],r=t[1],c=e.setrow;return n.a.createElement(v.a,{variant:"outlined",fullWidth:!0},n.a.createElement(f.a,{value:l,onChange:function(e){r(e.target.value),c(e.target.value)},fullWidth:!0,style:{fontSize:30,padding:0,margin:0}},n.a.createElement(d.a,{value:0},n.a.createElement("em",null,"None")),n.a.createElement(d.a,{value:1},"1"),n.a.createElement(d.a,{value:2},"2"),n.a.createElement(d.a,{value:3},"3"),n.a.createElement(d.a,{value:4},"4"),n.a.createElement(d.a,{value:5},"5"),n.a.createElement(d.a,{value:6},"6")))},b=function(){var e=n.a.useState(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return n.a.createElement(v.a,{variant:"outlined",fullWidth:!0},n.a.createElement(f.a,{value:t,onChange:function(e){l(e.target.value)},fullWidth:!0},n.a.createElement(d.a,{value:""},n.a.createElement("em",null,"None")),n.a.createElement(d.a,{value:1},n.a.createElement(w,null)),n.a.createElement(d.a,{value:2},n.a.createElement(g,null)),n.a.createElement(d.a,{value:3},n.a.createElement(p,null)),n.a.createElement(d.a,{value:4},n.a.createElement(y,null))))},w=function(){return n.a.createElement("div",{style:{fontSize:30}},"\u2660")},g=function(){return n.a.createElement("div",{style:{color:"red",fontSize:30}},"\u2665")},p=function(){return n.a.createElement("div",{style:{fontSize:30}},"\u2663")},y=function(){return n.a.createElement("div",{style:{color:"red",fontSize:30}},"\u2666")},S=function(){var e=n.a.useState(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return n.a.createElement(v.a,{variant:"outlined",fullWidth:!0},n.a.createElement(f.a,{value:t,onChange:function(e){l(e.target.value)},fullWidth:!0},n.a.createElement(d.a,{value:""},n.a.createElement("em",null,"None")),n.a.createElement(d.a,{value:1},"A"),n.a.createElement(d.a,{value:13},"K"),n.a.createElement(d.a,{value:10},"10"),n.a.createElement(d.a,{value:5},"5"),n.a.createElement(d.a,{value:12},"Q"),n.a.createElement(d.a,{value:11},"J"),n.a.createElement(d.a,{value:2},"2"),n.a.createElement(d.a,{value:3},"3"),n.a.createElement(d.a,{value:4},"4"),n.a.createElement(d.a,{value:6},"6"),n.a.createElement(d.a,{value:7},"7"),n.a.createElement(d.a,{value:8},"8"),n.a.createElement(d.a,{value:9},"9")))},k=t(102),C=t(44),x=t.n(C),j=t(45),z=t.n(j),O=function(e){var a=e.onClick,t=e.disabled;return n.a.createElement(k.a,{onClick:a,style:{marginRight:10},disabled:t},n.a.createElement(x.a,null))},W=function(e){var a=e.onClick,t=e.disabled;return n.a.createElement(k.a,{onClick:a,disabled:t},n.a.createElement(z.a,null))},R=function(){return n.a.createElement(k.a,{style:{backgroundColor:"#ff6161",color:"white",width:150,fontSize:18},variant:"extended",onClick:function(){window.location="/card-website"}},n.a.createElement("strong",null,"Reset"))},N=function(e){var a=e.max,t=n.a.useState(0),l=Object(u.a)(t,2),r=l[0],c=l[1];return n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement("div",{style:{marginRight:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,border:"solid",borderWidth:1,borderColor:"#c4c4c4",width:56,height:54,borderRadius:4}},r),n.a.createElement(O,{onClick:function(){console.log("add clicked"),c(r+1)},disabled:r+1>a}),n.a.createElement(W,{onClick:function(){console.log("subtract has been clicked"),c(r-1)},disabled:r-1<0}))},I=t(109),J=function(){return n.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",style:{minWidth:150}})},B=function(e){e.numRows;var a=n.a.useState(0),t=Object(u.a)(a,2),l=t[0],r=t[1],c=n.a.useState(0),d=Object(u.a)(c,2),v=d[0],f=d[1],w=n.a.useState(0),g=Object(u.a)(w,2),p=g[0],y=g[1],k=n.a.useState(0),C=Object(u.a)(k,2),x=C[0],j=C[1],z=n.a.useState(0),O=Object(u.a)(z,2),W=O[0],R=O[1],I=n.a.useState(0),B=Object(u.a)(I,2),A=B[0],D=B[1];return n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,{style:{fontSize:18}},n.a.createElement("b",null,"Set #")),n.a.createElement(E.a,{style:{fontSize:18}},n.a.createElement("b",null,"Suit")),n.a.createElement(E.a,{style:{fontSize:18}},n.a.createElement("b",null,"Value")),n.a.createElement(E.a,{style:{fontSize:18}},n.a.createElement("b",null,"Times Played")),n.a.createElement(E.a,{style:{fontSize:18}},n.a.createElement("b",null,"Name")))),n.a.createElement(o.a,null,n.a.createElement(s.a,null,n.a.createElement(E.a,{component:"th",scope:"row"}," ",n.a.createElement(h,{setrow:r})," "),n.a.createElement(E.a,null,n.a.createElement(b,null)),n.a.createElement(E.a,null,n.a.createElement(S,null)),n.a.createElement(E.a,null,n.a.createElement(N,{max:l})),n.a.createElement(E.a,null,n.a.createElement(J,null))),n.a.createElement(s.a,null,n.a.createElement(E.a,{component:"th",scope:"row"}," ",n.a.createElement(h,{setrow:f})," "),n.a.createElement(E.a,null,n.a.createElement(b,null)),n.a.createElement(E.a,null,n.a.createElement(S,null)),n.a.createElement(E.a,null,n.a.createElement(N,{max:v})),n.a.createElement(E.a,null,n.a.createElement(J,null))),n.a.createElement(s.a,null,n.a.createElement(E.a,{component:"th",scope:"row"}," ",n.a.createElement(h,{setrow:y})," "),n.a.createElement(E.a,null,n.a.createElement(b,null)),n.a.createElement(E.a,null,n.a.createElement(S,null)),n.a.createElement(E.a,null,n.a.createElement(N,{max:p})),n.a.createElement(E.a,null,n.a.createElement(J,null))),n.a.createElement(s.a,null,n.a.createElement(E.a,{component:"th",scope:"row"}," ",n.a.createElement(h,{setrow:j})," "),n.a.createElement(E.a,null,n.a.createElement(b,null)),n.a.createElement(E.a,null,n.a.createElement(S,null)),n.a.createElement(E.a,null,n.a.createElement(N,{max:x})),n.a.createElement(E.a,null,n.a.createElement(J,null))),n.a.createElement(s.a,null,n.a.createElement(E.a,{component:"th",scope:"row"}," ",n.a.createElement(h,{setrow:R})," "),n.a.createElement(E.a,null,n.a.createElement(b,null)),n.a.createElement(E.a,null,n.a.createElement(S,null)),n.a.createElement(E.a,null,n.a.createElement(N,{max:W})),n.a.createElement(E.a,null,n.a.createElement(J,null))),n.a.createElement(s.a,null,n.a.createElement(E.a,{component:"th",scope:"row"}," ",n.a.createElement(h,{setrow:D})," "),n.a.createElement(E.a,null,n.a.createElement(b,null)),n.a.createElement(E.a,null,n.a.createElement(S,null)),n.a.createElement(E.a,null,n.a.createElement(N,{max:A})),n.a.createElement(E.a,null,n.a.createElement(J,null)))))},A=function(){return n.a.createElement("div",null,n.a.createElement(B,{numRows:6}),n.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:70}},n.a.createElement(R,null)))};var D=function(){return n.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.d4094a98.chunk.js.map
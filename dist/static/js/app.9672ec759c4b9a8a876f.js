webpackJsonp([1],{"6vGN":function(e,t,i){e.exports=i.p+"static/img/yishi.27c2f7a.gif"},"73/A":function(e,t){},ACVU:function(e,t,i){e.exports=i.p+"static/img/qq_img.6879bb2.jpg"},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("IvJb"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},s,!1,function(e){i("73/A")},null,null).exports,r=i("zO6J"),o=i("aVq5"),c=i.n(o),l={name:"resume",data:function(){return{audio:!0,lines:[],myChart:null,hideEL_id:89757,resume:{content:"一",oneself_str:"",skill_switch:!1,oneself_switch:!1,production_switch:!1,information_switch:!1}}},methods:{Bg1:function(){return"#"+Math.floor(256*Math.random()).toString(10)},Bg2:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},Bg3:function(){return"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"},AutionPlay:function(){var e=document.getElementById("music1");null!==e&&(e.paused?(e.play(),this.audio=!0):(e.pause(),this.audio=!1))},GoPAGE:function(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?"mobile":"pc"},MoveEl:function(e){for(var t=this,i=this,n=this.GetClient(),s=document.getElementsByClassName(e),a=function(e){var a=s[e],r=n.width-1.7*a.clientWidth,o=n.height-1.7*a.clientHeight;"mobile"===i.GoPAGE()&&(r=n.width-.9*a.clientWidth,o=n.height-.9*a.clientHeight),a.style.left=i.RandomNum(1,r)+"px",a.style.top=i.RandomNum(1,o)+"px";var c=89157,l=t.RandomNum(1,4),u=function e(){var t=a.offsetLeft,n=a.offsetTop;if(t>=1&&t<=r&&n>=1&&n<=o)switch(l){case 1:a.style.top=n-l+"px";break;case 2:a.style.top=n+l+"px";break;case 3:a.style.left=t-l+"px";break;case 4:a.style.left=t+l+"px"}else t<1&&(a.style.left=l+"px"),t>r&&(a.style.left=r-l+"px"),n<1&&(a.style.top=l+"px"),n>o&&(a.style.top=o-l+"px"),l=i.RandomNum(1,4);c=setTimeout(e)};a.addEventListener("mouseenter",function(e){clearTimeout(c);var t=e.currentTarget.innerText;switch(t=t.replace(/\s+/g,"")){case"关于自己":i.resume.oneself_switch=!0,i.resume.production_switch=!1,i.resume.skill_switch=!1,i.resume.information_switch=!1;break;case"我的作品":i.resume.oneself_switch=!1,i.resume.production_switch=!0,i.resume.skill_switch=!1,i.resume.information_switch=!1;break;case"开发技能":i.resume.oneself_switch=!1,i.resume.production_switch=!1,i.resume.skill_switch=!0,i.resume.information_switch=!1;break;case"联系方式":i.resume.oneself_switch=!1,i.resume.production_switch=!1,i.resume.skill_switch=!1,i.resume.information_switch=!0}}),a.addEventListener("mouseleave",function(e){var t=e.currentTarget.innerText;t=t.replace(/\s+/g,""),i.hideEL_id=setTimeout(function(){switch(t){case"关于自己":i.resume.oneself_switch=!1;break;case"我的作品":i.resume.production_switch=!1;break;case"开发技能":i.resume.skill_switch=!1;break;case"联系方式":i.resume.information_switch=!1}},3e3),u()}),u()},r=0;r<s.length;r++)a(r)},DrawPie:function(e){var t=document.getElementsByClassName(e)[0],i=this.GetClient();"PC"===this.GoPAGE?(t.style.width=i.width/2+"px",t.style.height=i.height/2+"px"):(t.style.width=i.width+"px",t.style.height=i.height+"px"),this.myChart=c.a.init(t),this.myChart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{name:"能量指数",type:"pie",selectedMode:"single",radius:[0,"10%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[{value:3,name:"js"},{value:3,name:"html"},{value:3,name:"css"}]},{name:"能量指数",type:"pie",radius:["20%","30%"],label:{normal:{formatter:"{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}}},data:[{value:2,name:"vue"},{value:2,name:"webpack"},{value:1,name:"sass"},{value:1,name:"typescript"},{value:1,name:"echarts"},{value:1,name:"jest"},{value:1,name:"react"},{value:1,name:"nodejs"},{value:1,name:"c/c++"},{value:1,name:"linux"}]}]})},ShowEl_Even:function(e){clearTimeout(this.hideEL_id)},HideEl_Even:function(e){switch(e){case"关于自己":this.resume.oneself_switch=!1;break;case"我的作品":this.resume.production_switch=!1;break;case"开发技能":this.resume.skill_switch=!1;break;case"联系方式":this.resume.information_switch=!1}},DrawStar:function(e,t,i,n,s,a,r,o,c){e.beginPath();for(var l=0;l<5;l++)e.lineTo(Math.cos((18+72*l-a)/180*Math.PI)*i+n,-Math.sin((18+72*l-a)/180*Math.PI)*i+s),e.lineTo(Math.cos((54+72*l-a)/180*Math.PI)*t+n,-Math.sin((54+72*l-a)/180*Math.PI)*t+s);e.closePath(),e.lineWidth=r,e.strokeStyle=o,e.fillStyle=c,e.fill(),e.stroke()},DrawImage:function(e,t){var i=this.SetContext(),n=new Image;n.src="http://www.365mini.com/image/google_logo.png",n.onload=function(e,t,s,a){i.DrawImage(n,e,t,s,a)}},RandomNum:function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}},GetClient:function(){return void 0!==window.innerHeight?{width:window.innerWidth,height:window.innerHeight}:"CSS1Compat"===document.compatMode?{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}:{width:document.body.clientWidth,height:document.body.clientHeight}},SetContext:function(){var e=document.getElementById("backgroundCanvas"),t=this.GetClient();return e.width=t.width-1,e.height=t.height-3,e.getContext("2d")},Animation:function(){var e=this,t=this.GetClient(),i=t.width,n=t.height,s=this.SetContext();requestAnimationFrame(function t(){s.clearRect(0,0,1.2*i,1.2*n);for(var a=0;a<=33;a++){var r=e.lines[a];r?r.x<=i&&r.y<=n?(r.x=r.x+e.RandomNum(-2,2),r.y=r.y+e.RandomNum(0,3)):(r.x=e.RandomNum(0,i),r.y=e.RandomNum(0,n/2)):r=e.lines[a]={x:e.RandomNum(0,i),y:e.RandomNum(0,n/2),color:e.Bg3()},e.DrawStar(s,15,7,r.x,r.y,180,2,e.Bg2(),r.color)}requestAnimationFrame(t)})}},mounted:function(){var e=this;this.Animation(),this.DrawPie("WrapTitle_div_Skill"),this.MoveEl("WrapProperty_DIV_Item");var t=0;setTimeout(function i(){t==="一个做前端开发的好家伙！".length?(e.resume.content="",t=0):t++,e.resume.content+="一个做前端开发的好家伙！".charAt(t),setTimeout(i,500)}),window.onresize=function(){e.SetContext(),e.myChart.resize()}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"Resume_Div_Wrap"},[i("canvas",{attrs:{id:"backgroundCanvas"}},[e._v("您的浏览器不支持 HTML5 canvas 标签。")]),e._v(" "),i("article",{class:["ResumeWrap_DIV_Audio",e.audio?"activeClass":""],on:{click:e.AutionPlay}},[e._m(0)]),e._v(" "),i("div",{staticClass:"ResumeWrap_DIV_Title row"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!(e.resume.oneself_switch||e.resume.skill_switch||e.resume.production_switch||e.resume.information_switch),expression:"(!resume.oneself_switch)&&(!resume.skill_switch)&&(!resume.production_switch)&&(!resume.information_switch)"}],staticClass:"WrapTitle_div_Index"},[i("p",[e._v("\n        Hello, I'm QinPengXing\n      ")]),e._v(" "),i("p",[e._v("\n        "+e._s(e.resume.content)+"\n      ")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.resume.skill_switch,expression:"resume.skill_switch"}],staticClass:"WrapTitle_div_Skill row",on:{mouseenter:function(t){e.ShowEl_Even("开发技能")},mouseleave:function(t){e.HideEl_Even("开发技能")}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.resume.oneself_switch,expression:"resume.oneself_switch"}],staticClass:"WrapTitle_div_OneSelf",on:{mouseenter:function(t){e.ShowEl_Even("关于自己")},mouseleave:function(t){e.HideEl_Even("关于自己")}}},[e._m(1),e._v(" "),e._m(2)]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.resume.production_switch,expression:"resume.production_switch"}],staticClass:"WrapTitle_div_Production",on:{mouseenter:function(t){e.ShowEl_Even("我的作品")},mouseleave:function(t){e.HideEl_Even("我的作品")}}},[i("iframe",{attrs:{src:"https://qq754958990.github.io/data-analysis-web/dist/index.html#/",frameborder:"0"}}),e._v(" "),i("iframe",{attrs:{src:"https://qq754958990.github.io/flexbox/dist/index.html#/",frameborder:"0"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.resume.information_switch,expression:"resume.information_switch"}],staticClass:"WrapTitle_div_Information",on:{mouseenter:function(t){e.ShowEl_Even("联系方式")},mouseleave:function(t){e.HideEl_Even("联系方式")}}},[e._m(3),e._v(" "),i("p",[e._v("What's so bad about being a happy salted fish?")]),e._v(" "),e._m(4)])]),e._v(" "),e._m(5)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("audio",{attrs:{id:"music1",autoplay:"",loop:""}},[t("source",{attrs:{src:i("pYy4"),type:"audio/mpeg"}}),this._v("\n      您的浏览器不支持 audio 元素。\n    ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-6"},[t("img",{attrs:{src:i("sW55")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-6"},[i("p",[e._v("姓 名：覃朋星")]),e._v(" "),i("p",[e._v("年 龄：25")]),e._v(" "),i("p",[e._v("性 别: 男")]),e._v(" "),i("p",[e._v("经 验：一年")]),e._v(" "),i("p",[e._v("岗 位：前端")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{attrs:{src:i("ACVU")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"col-4"},[i("p",[i("i",[e._v("1.")]),e._v(" TELEPHONE")]),e._v(" "),i("p",[e._v(" +86-132-6590-4980")])]),e._v(" "),i("div",{staticClass:"col-4"},[i("p",[i("i",[e._v("2.")]),e._v(" ADDRESS")]),e._v(" "),i("p",[e._v("Guangdong,GuangZhou\n            广东 • 广州")])]),e._v(" "),i("div",{staticClass:"col-4"},[i("p",[i("i",[e._v("3.")]),e._v(" EMAIL")]),e._v(" "),i("p",[e._v("754958990@qq.com")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ResumeWrap_DIV_Property"},[n("div",{staticClass:"WrapProperty_DIV_Item"},[n("img",{attrs:{src:i("iBGP")}}),e._v(" "),n("p",[e._v("\n        关于自己\n      ")])]),e._v(" "),n("div",{staticClass:"WrapProperty_DIV_Item"},[n("img",{attrs:{src:i("Nly3")}}),e._v(" "),n("p",[e._v("\n        联系方式\n      ")])]),e._v(" "),n("div",{staticClass:"WrapProperty_DIV_Item"},[n("img",{attrs:{src:i("6vGN")}}),e._v(" "),n("p",[e._v("\n        开发技能\n      ")])]),e._v(" "),n("div",{staticClass:"WrapProperty_DIV_Item"},[n("img",{attrs:{src:i("NoBT")}}),e._v(" "),n("p",[e._v("\n        我的作品\n      ")])])])}]};var m=i("C7Lr")(l,u,!1,function(e){i("YFo7")},"data-v-7a79be4a",null).exports;n.a.use(r.a);var h=new r.a({routes:[{path:"/",name:"resume",component:m}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:h,components:{App:a},template:"<App/>",mounted:function(){var e,t,i,n,s;e=document,t=window,i=e.documentElement,n="orientationchange"in window?"orientationchange":"resize",s=function(){var e=i.clientWidth;e&&(e>750&&(e=750),i.style.fontSize=e/320*10+"px")},e.addEventListener&&(t.addEventListener(n,s,!1),e.addEventListener("DOMContentLoaded",s,!1))}})},Nly3:function(e,t,i){e.exports=i.p+"static/img/qiuzhi.eabebb9.gif"},NoBT:function(e,t,i){e.exports=i.p+"static/img/jingli.111c554.gif"},YFo7:function(e,t){},iBGP:function(e,t,i){e.exports=i.p+"static/img/ziji.ad9bf67.gif"},pYy4:function(e,t,i){e.exports=i.p+"static/media/bgm.0f81964.mp3"},sW55:function(e,t,i){e.exports=i.p+"static/img/yuan.75e680a.gif"}},["NHnr"]);
//# sourceMappingURL=app.9672ec759c4b9a8a876f.js.map
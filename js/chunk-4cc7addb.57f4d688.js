(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cc7addb"],{2129:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentabout"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row m-auto"},t._l(t.contents,(function(t,e){return n("div",{key:e,staticClass:"about-card col-md-6"},[n("quarter",{attrs:{quaterContent:t}})],1)})),0)])])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quarter-content"},[n("h1",[t._v(t._s(t.content.number))]),n("h2",[t._v(t._s(t.content.topic))]),n("p",[t._v(t._s(t.content.txt))])])},c=[],r={props:{quaterContent:{type:Object,default:function(){return{number:"01.",topic:"監測",txt:"田間氣象監測，是給予農民安心的保證。我們期許成為田間的守護者，幫忙像擔心孩子受餓著冷父母般的農民，透過氣象數據蒐集，將科學術語轉換成親切問候，在日常中提醒您在田間的作物生長環境變化，就像稻草人，靜靜地在農田中做好守護者的角色。"}}}},data:function(){return{content:this.quaterContent}}},o=r,u=(n("2368"),n("2877")),l=Object(u["a"])(o,i,c,!1,null,"5b4fc34b",null),d=l.exports,p={props:{quaterContent:{type:Array,default:function(){return[{number:"01.",topic:"監測",txt:"田間氣象監測，是給予農民安心的保證。我們期許成為田間的守護者，幫忙像擔心孩子受餓著冷父母般的農民，透過氣象數據蒐集，將科學術語轉換成親切問候，在日常中提醒您在田間的作物生長環境變化，就像稻草人，靜靜地在農田中做好守護者的角色。"},{number:"02.",topic:"預測",txt:"田間氣象監測，是給予農民安心的保證。我們期許成為田間的守護者，幫忙像擔心孩子受餓著冷父母般的農民，透過氣象數據蒐集，將科學術語轉換成親切問候，在日常中提醒您在田間的作物生長環境變化，就像稻草人，靜靜地在農田中做好守護者的角色。"}]}}},data:function(){return{contents:this.quaterContent}},components:{quarter:d}},f=p,v=(n("e8e9"),Object(u["a"])(f,s,a,!1,null,"f9e22362",null));e["a"]=v.exports},2368:function(t,e,n){"use strict";var s=n("f867"),a=n.n(s);a.a},"28e0":function(t,e,n){},"2e95":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"award"},[n("div",{staticClass:"container"},[n("div",{staticClass:"award-inside row m-auto"},[n("div",{staticClass:"topic col col-12 col-md-7"},[n("Title",{attrs:{title:t.content.title}}),n("h2",{staticClass:"text-center"},[t._v(t._s(t.content.subtitle))]),n("div",{staticClass:"txt"},t._l(t.content.awards,(function(t,e){return n("awardText",{key:e,attrs:{awards:t}})})),1)],1),n("div",{staticClass:"picture col col-12 col-md-5"},[n("div",{staticClass:"pic"},t._l(t.content.pictures,(function(t,e){return n("awardPicture",{key:e,attrs:{pictures:t}})})),1)])])])])},a=[],i=n("8854"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"award-text"},[n("div",{staticClass:"main"},[n("i",{staticClass:"fas fa-award"}),t._v(" "+t._s(t.content.description)+" ")]),n("div",{staticClass:"result"},[t._v(">>> "+t._s(t.content.get))])])},r=[],o={props:{awards:{type:Object,default:function(){return{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"}}}},data:function(){return{content:this.awards}},components:{}},u=o,l=(n("34cc"),n("2877")),d=Object(l["a"])(u,c,r,!1,null,"dbd7e270",null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"award-picture"},[n("img",{attrs:{src:t.pic.picture}}),n("p",[t._v(t._s(t.pic.description))])])},v=[],_={props:{pictures:{type:Object,default:function(){return{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=11"}}}},data:function(){return{pic:this.pictures}}},b=_,m=(n("ee12"),Object(l["a"])(b,f,v,!1,null,"38728afc",null)),h=m.exports,w={props:{awardsArea:{type:Object,default:function(){return{title:"AWARD WINNING",subtitle:"獲獎經驗",awards:[{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"}],pictures:[{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=11"},{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=12"},{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=13"}]}}}},data:function(){return{content:this.awardsArea}},components:{Title:i["a"],awardText:p,awardPicture:h}},C=w,g=(n("da73"),Object(l["a"])(C,s,a,!1,null,"6f99a842",null));e["a"]=g.exports},"300a":function(t,e,n){},"34cc":function(t,e,n){"use strict";var s=n("300a"),a=n.n(s);a.a},"445d":function(t,e,n){},"492b":function(t,e,n){},8854:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title_darkred"},[n("h4",[t._v(t._s(t.title))])])},a=[],i={props:{title:{type:String,default:"HELLO DARKRED TITLE"}},data:function(){return{}}},c=i,r=(n("f577"),n("2877")),o=Object(r["a"])(c,s,a,!1,null,"7931d277",null);e["a"]=o.exports},a4cc:function(t,e,n){},da73:function(t,e,n){"use strict";var s=n("28e0"),a=n.n(s);a.a},e8e9:function(t,e,n){"use strict";var s=n("492b"),a=n.n(s);a.a},ee12:function(t,e,n){"use strict";var s=n("a4cc"),a=n.n(s);a.a},f577:function(t,e,n){"use strict";var s=n("445d"),a=n.n(s);a.a},f867:function(t,e,n){},fb43:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"services_page2"},[n("Title",{attrs:{msg:t.title}}),n("grayNumber"),n("Fixedbg",{attrs:{pic:t.titleBackground}},[n("h1",{attrs:{slot:"title"},slot:"title"},[t._v("This is a big title.")]),n("h2",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("This is a big title2.")]),n("h3",{attrs:{slot:"content"},slot:"content"},[t._v("welcome")]),n("template",{slot:"btn"},[t._v("button")])],2),n("Award")],1)},a=[],i=n("c92b"),c=n("2129"),r=n("d71e"),o=n("2e95"),u={data:function(){return{title:"services_page2",titleBackground:{url:"https://picsum.photos/600/300?random=11",fixed:!0}}},components:{Title:i["a"],Award:o["a"],grayNumber:c["a"],Fixedbg:r["a"]}},l=u,d=n("2877"),p=Object(d["a"])(l,s,a,!1,null,"301f5cc1",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4cc7addb.57f4d688.js.map
"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[468],{6468:function(t,l,e){e.r(l),e.d(l,{default:function(){return A}});var n=e(6768),a=e(4232),u=e(5130);const i={class:"article-content"},r={class:"article-content"},o=["innerHTML"],s={class:"article-content"},k=["id"],d=["id"],c=["disabled"],L={class:"article-content"},m=["id"],v=["title","datetime"],p={class:"article-content"},b={key:0},h={key:1};function g(t,l,e,g,f,S){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("article",null,[l[4]||(l[4]=(0,n.Lk)("div",{class:"article-header"},[(0,n.Lk)("h3",null,"1. 텍스트 보간법"),(0,n.Lk)("p",null,' - 데이터 바인딩의 가장 기본적인 형태는 "Mustache"(이중 중괄호) 문법을 사용한 텍스트 보간법 ')],-1)),(0,n.Lk)("div",i,[(0,n.Lk)("span",null,"메세지: "+(0,a.v_)(f.msg),1)])]),(0,n.Lk)("article",null,[l[6]||(l[6]=(0,n.Lk)("div",{class:"article-header"},[(0,n.Lk)("h3",null,"2. HTML 출력"),(0,n.Lk)("p",null," - 이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석합니다. 실제 HTML을 출력하려면 v-html 디렉티브을 사용해야 합니다: ")],-1)),(0,n.Lk)("div",r,[(0,n.Lk)("p",null,"텍스트 보간법 사용: "+(0,a.v_)(f.rawHtml),1),(0,n.Lk)("p",null,[l[5]||(l[5]=(0,n.eW)("v-html 디렉티브 사용: ")),(0,n.Lk)("span",{innerHTML:f.rawHtml},null,8,o)])])]),(0,n.Lk)("article",null,[l[14]||(l[14]=(0,n.Lk)("div",{class:"article-header"},[(0,n.Lk)("h3",null,"3. 속성 바인딩"),(0,n.Lk)("p",null," - 이중 중괄호는 HTML 속성(attribute) 내에서 사용할 수 없습니다. 대신 v-bind 디렉티브를 사용하세요: "),(0,n.Lk)("p",null," - 바인딩된 값이 null 또는 undefined이면 엘리먼트의 속성이 제거된 상태로 렌더링 됩니다. ")],-1)),(0,n.Lk)("div",s,[l[7]||(l[7]=(0,n.Lk)("h4",null,'3.1 기본문법 : v-bind:id=" "',-1)),(0,n.Lk)("div",{id:f.dynamicId},"customIdDiv",8,k),l[8]||(l[8]=(0,n.Lk)("br",null,null,-1)),l[9]||(l[9]=(0,n.Lk)("h4",null,'3.2 단축문법 : :id=" "',-1)),l[10]||(l[10]=(0,n.Lk)("span",null,null,-1)),(0,n.Lk)("div",{id:f.dynamicId},"customIdDiv",8,d),l[11]||(l[11]=(0,n.Lk)("br",null,null,-1)),l[12]||(l[12]=(0,n.Lk)("h4",null,"3.3 Boolean 속성",-1)),(0,n.Lk)("button",{disabled:f.isButtonDisabled},"버튼",8,c),l[13]||(l[13]=(0,n.Lk)("h4",null,"3.4 여러 속성을 동적으로 바인딩",-1)),(0,n.Lk)("div",(0,a._B)((0,n.Ng)(f.objectOfAttrs)),"동적 바인딩 div",16)])]),(0,n.Lk)("article",null,[l[20]||(l[20]=(0,n.Lk)("div",{class:"article-header"},[(0,n.Lk)("h3",null,"4. JavaScript 표현식 사용"),(0,n.Lk)("p",null," - 각 바인딩에는 하나의 단일 표현식만 포함될 수 있습니다. 표현식은 값으로 평가할 수 있어야 하는 코드 조각입니다. 쉽게 말해 return 뒤에 사용할 수 있는 코드여야 하는 것입니다. ")],-1)),(0,n.Lk)("div",L,[(0,n.eW)((0,a.v_)(f.number+1)+" "+(0,a.v_)(f.ok?"true":"false")+" "+(0,a.v_)(f.message.split("").reverse().join(""))+" ",1),(0,n.Lk)("div",{id:`id-${f.id}`},null,8,m),l[15]||(l[15]=(0,n.Lk)("br",null,null,-1)),l[16]||(l[16]=(0,n.Lk)("h4",null,"4.1 함수 호출",-1)),(0,n.Lk)("time",{title:S.toTitleDate(f.date),datetime:f.date},(0,a.v_)(S.formatDate(f.date)),9,v),l[17]||(l[17]=(0,n.Lk)("br",null,null,-1)),l[18]||(l[18]=(0,n.Lk)("h4",null,"제한된 전역 접근",-1)),l[19]||(l[19]=(0,n.Lk)("span",null," 템플릿 표현식은 샌드박스 처리되어 제한된 전역 리스트에만 접근할 수 있습니다. 이 목록은 Math 및 Date 등 일반적으로 사용되는 기본 제공 전역 객체를 표시합니다. 리스트에 명시적으로 포함되지 않은 window와 같은 전역 속성은 템플릿 표현식에서 접근할 수 없습니다. 그러나 app.config.globalProperties에 추가하여, Vue 내부의 모든 표현식에서 전역 속성에 접근 할 수 있도록 명시적으로 정의할 수 있습니다. ",-1))])]),(0,n.Lk)("article",null,[l[35]||(l[35]=(0,n.Lk)("div",{class:"article-header"},[(0,n.Lk)("h3",null,"5. 디렉티브"),(0,n.Lk)("p",null,"- v- 접두사가 있는 특수한 속성을 디렉티브라 합니다."),(0,n.Lk)("p",null," - 디렉티브 속성 값은 v-for, v-on 및 v-slot 제외 단일 JavaScript 표현식이어야 합니다. "),(0,n.Lk)("p",null," - 디렉티브의 역할은 표현식 값이 변경될 때 DOM에 반응적으로 업데이트를 적용하는 것입니다. ")],-1)),(0,n.Lk)("div",p,[l[27]||(l[27]=(0,n.Lk)("h4",null,'5.1 v-if="seen"',-1)),f.seen?((0,n.uX)(),(0,n.CE)("p",b,"이제 이것을 볼 수 있습니다.")):(0,n.Q3)("",!0),l[28]||(l[28]=(0,n.Lk)("br",null,null,-1)),l[29]||(l[29]=(0,n.Lk)("h4",null,"5.2 v-on:click, @click",-1)),(0,n.Lk)("a",{onClick:l[0]||(l[0]=t=>S.doSomething())}," click me "),(0,n.Lk)("a",{onClick:l[1]||(l[1]=t=>S.doSomething())}," click me "),l[30]||(l[30]=(0,n.Lk)("br",null,null,-1)),l[31]||(l[31]=(0,n.Lk)("br",null,null,-1)),l[32]||(l[32]=(0,n.Lk)("h4",null,"5.3 동적인 인자",-1)),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[l[21]||(l[21]=(0,n.Lk)("p",null,"동적인 인자는 null 또는 문자열로 평가되어야 합니다.",-1)),(0,n.Lk)("a",(0,a._B)({[f.attributeName||""]:f.url})," dynamicAttribute ",16),(0,n.Lk)("a",(0,a._B)({[f.attributeName||""]:f.url})," dynamicAttribute ",16)]),(0,n.Lk)("li",null,[l[22]||(l[22]=(0,n.Lk)("p",null,"이렇게 하면 컴파일러 경고가 트리거됩니다.",-1)),(0,n.eW)(" "+(0,a.v_)(f.errorAttribute),1)]),l[23]||(l[23]=(0,n.Lk)("li",null,[(0,n.Lk)("p",null," 복잡한 동적인 인자를 전달해야 하는 경우 computed 속성을 사용하는 것이 더 나을 것입니다. ")],-1)),l[24]||(l[24]=(0,n.Lk)("p",null," 브라우저가 속성 이름을 소문자로 강제 변환하므로 대문자로 키 이름을 지정하는 것도 피해야 합니다. 컴포넌트에 someattr 대신 someAttr 속성을 사용했다면 코드가 작동하지 않습니다. 싱글 파일 컴포넌트 내의 템플릿은 이 제약 조건에 해당하지 않습니다. ",-1)),(0,n.eW)(" "+(0,a.v_)(f.someAttr),1)]),l[33]||(l[33]=(0,n.Lk)("h4",null,"5.4 수식어",-1)),l[34]||(l[34]=(0,n.Lk)("p",null," 수식어는 점(.)으로 시작하는 특수한 접미사로, 디렉티브가 특별한 방식으로 바인딩되어야 함을 나타냅니다. 예를 들어 .prevent 수식어는 트리거된 이벤트에서 event.preventDefault()를 호출하도록 v-on 디렉티브에 지시합니다. ",-1)),(0,n.Lk)("form",{onSubmit:l[3]||(l[3]=(0,u.D$)(((...t)=>S.onSubmit&&S.onSubmit(...t)),["prevent"]))},[l[25]||(l[25]=(0,n.Lk)("label",{for:"name"},"Name:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":l[2]||(l[2]=t=>f.name=t)},null,512),[[u.Jo,f.name]]),l[26]||(l[26]=(0,n.Lk)("button",{type:"submit"},"Submit",-1))],32),f.submitted?((0,n.uX)(),(0,n.CE)("p",h,"Hello, "+(0,a.v_)(f.name)+"! Your form has been submitted.",1)):(0,n.Q3)("",!0)])])],64)}var f={name:"chapter_1",data(){return{msg:"this is message",rawHtml:'<span style="color: red">이것은 빨간색이어야 합니다.</span>',dynamicId:"customId",isButtonDisabled:!0,objectOfAttrs:S,number:123,ok:!0,message:"Hello Vue!",id:1,date:(new Date).toISOString(),seen:!0,url:"https://www.google.com/",attributeName:"href",errorAttribute:"<a :['foo' + bar]=\"value\"> ... </a>",someAttr:'<a :[someAttr]="value"> 작동안함 </a>',name:"",submitted:!1}},methods:{toTitleDate:w,formatDate:D,doSomething:y,onSubmit:_}};const S={id:"container",class:"wrapper",style:"background-color:green; color:white;"};function D(t){const l=new Date(t);return`${l.getFullYear()} - ${String(l.getMonth()+1).padStart(2,"0")} - ${String(l.getDate()).padStart(2,"0")}`}function w(t){const l=new Date(t);return`${l.getFullYear()}년 ${l.getMonth()+1}월 ${l.getDate()}일 ${l.getHours()}:${String(l.getMinutes()).padStart(2,"0")}:${String(l.getSeconds()).padStart(2,"0")}`}function y(){return alert("you clicked me!")}function _(){this.name.trim()?this.submitted=!0:(this.submitted=!1,alert("Please enter your name!"))}var H=e(1241);const M=(0,H.A)(f,[["render",g]]);var A=M}}]);
//# sourceMappingURL=468.0e4d2eee.js.map
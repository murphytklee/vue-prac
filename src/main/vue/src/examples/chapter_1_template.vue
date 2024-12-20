<template>
  <article>
    <div class="article-header">
      <h3>1. 텍스트 보간법</h3>
      <p>
        - 데이터 바인딩의 가장 기본적인 형태는 "Mustache"(이중 중괄호) 문법을
        사용한 텍스트 보간법
      </p>
    </div>
    <div class="article-content">
      <span>메세지: {{ msg }}</span>
    </div>
  </article>

  <article>
    <div class="article-header">
      <h3>2. HTML 출력</h3>
      <p>
        - 이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석합니다. 실제
        HTML을 출력하려면 v-html 디렉티브을 사용해야 합니다:
      </p>
    </div>
    <div class="article-content">
      <p>텍스트 보간법 사용: {{ rawHtml }}</p>
      <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
    </div>
  </article>

  <article>
    <div class="article-header">
      <h3>3. 속성 바인딩</h3>
      <p>
        - 이중 중괄호는 HTML 속성(attribute) 내에서 사용할 수 없습니다. 대신
        v-bind 디렉티브를 사용하세요:
      </p>
      <p>
        - 바인딩된 값이 null 또는 undefined이면 엘리먼트의 속성이 제거된 상태로
        렌더링 됩니다.
      </p>
    </div>
    <div class="article-content">
      <h4>3.1 기본문법 : v-bind:id=" "</h4>
      <div v-bind:id="dynamicId">customIdDiv</div>

      <br />

      <h4>3.2 단축문법 : :id=" "</h4>
      <span></span>
      <div :id="dynamicId">customIdDiv</div>

      <br />

      <h4>3.3 Boolean 속성</h4>
      <button :disabled="isButtonDisabled">버튼</button>

      <h4>3.4 여러 속성을 동적으로 바인딩</h4>
      <div v-bind="objectOfAttrs">동적 바인딩 div</div>
    </div>
  </article>

  <article>
    <div class="article-header">
      <h3>4. JavaScript 표현식 사용</h3>
      <p>
        - 각 바인딩에는 하나의 단일 표현식만 포함될 수 있습니다. 표현식은 값으로
        평가할 수 있어야 하는 코드 조각입니다. 쉽게 말해 return 뒤에 사용할 수
        있는 코드여야 하는 것입니다.
      </p>
    </div>
    <div class="article-content">
      {{ number + 1 }}
      {{ ok ? "true" : "false" }}
      {{ message.split("").reverse().join("") }}
      <div :id="`id-${id}`"></div>

      <br />

      <h4>4.1 함수 호출</h4>
      <time :title="toTitleDate(date)" :datetime="date">
        {{ formatDate(date) }}
      </time>

      <br />

      <h4>제한된 전역 접근</h4>
      <span>
        템플릿 표현식은 샌드박스 처리되어 제한된 전역 리스트에만 접근할 수
        있습니다. 이 목록은 Math 및 Date 등 일반적으로 사용되는 기본 제공 전역
        객체를 표시합니다. 리스트에 명시적으로 포함되지 않은 window와 같은 전역
        속성은 템플릿 표현식에서 접근할 수 없습니다. 그러나
        app.config.globalProperties에 추가하여, Vue 내부의 모든 표현식에서 전역
        속성에 접근 할 수 있도록 명시적으로 정의할 수 있습니다.
      </span>
    </div>
  </article>

  <article>
    <div class="article-header">
      <h3>5. 디렉티브</h3>
      <p>- v- 접두사가 있는 특수한 속성을 디렉티브라 합니다.</p>
      <p>
        - 디렉티브 속성 값은 v-for, v-on 및 v-slot 제외 단일 JavaScript
        표현식이어야 합니다.
      </p>
      <p>
        - 디렉티브의 역할은 표현식 값이 변경될 때 DOM에 반응적으로 업데이트를
        적용하는 것입니다.
      </p>
    </div>
    <div class="article-content">
      <h4>5.1 v-if="seen"</h4>
      <p v-if="seen">이제 이것을 볼 수 있습니다.</p>
      <br />

      <h4>5.2 v-on:click, @click</h4>
      <a v-on:click="doSomething()"> click me </a>
      <!-- 단축 문법 -->
      <a @click="doSomething()"> click me </a>

      <br />
      <br />

      <h4>5.3 동적인 인자</h4>
      <ul>
        <li>
          <p>동적인 인자는 null 또는 문자열로 평가되어야 합니다.</p>
          <a v-bind:[attributeName]="url"> dynamicAttribute </a>
          <!-- 단축 문법 -->
          <a :[attributeName]="url"> dynamicAttribute </a>
        </li>

        <li>
          <p>이렇게 하면 컴파일러 경고가 트리거됩니다.</p>
          {{ errorAttribute }}
        </li>
        <li>
          <p>
            복잡한 동적인 인자를 전달해야 하는 경우 computed 속성을 사용하는
            것이 더 나을 것입니다.
          </p>
        </li>
        <p>
          브라우저가 속성 이름을 소문자로 강제 변환하므로 대문자로 키 이름을
          지정하는 것도 피해야 합니다. 컴포넌트에 someattr 대신 someAttr 속성을
          사용했다면 코드가 작동하지 않습니다. 싱글 파일 컴포넌트 내의 템플릿은
          이 제약 조건에 해당하지 않습니다.
        </p>
        {{ someAttr }}
      </ul>

      <h4>5.4 수식어</h4>
      <p>
        수식어는 점(.)으로 시작하는 특수한 접미사로, 디렉티브가 특별한 방식으로
        바인딩되어야 함을 나타냅니다. 예를 들어 .prevent 수식어는 트리거된
        이벤트에서 event.preventDefault()를 호출하도록 v-on 디렉티브에
        지시합니다.
      </p>
      <form @submit.prevent="onSubmit">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
        <button type="submit">Submit</button>
      </form>
      <p v-if="submitted">Hello, {{ name }}! Your form has been submitted.</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "chapter_1_template",
  data() {
    return {
      msg: "this is message",
      rawHtml: '<span style="color: red">이것은 빨간색이어야 합니다.</span>',
      dynamicId: "customId",
      isButtonDisabled: true,
      objectOfAttrs,
      number: 123,
      ok: true,
      message: "Hello Vue!",
      id: 1,
      date: new Date().toISOString(),
      seen: true,
      url: "https://www.google.com/",
      attributeName: "href",
      errorAttribute: `<a :['foo' + bar]="value"> ... </a>`,
      someAttr: '<a :[someAttr]="value"> 작동안함 </a>',
      name: "",
      submitted: false,
    };
  },
  methods: {
    toTitleDate,
    formatDate,
    doSomething,
    onSubmit,
  },
};

const objectOfAttrs = {
  id: "container",
  class: "wrapper",
  style: "background-color:green; color:white;",
};

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return `${date.getFullYear()} - ${String(date.getMonth() + 1).padStart(2, "0")} - ${String(date.getDate()).padStart(2, "0")}`;
}

function toTitleDate(isoDate) {
  const date = new Date(isoDate);
  return `${ date.getFullYear() }년 ${ date.getMonth() + 1 }월 ${ date.getDate() }일 ${ date.getHours() }:${ String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

function doSomething() {
  return alert("you clicked me!");
}

function onSubmit() {
  if (this.name.trim()) {
    this.submitted = true;
  } else {
    this.submitted = false;
    alert("Please enter your name!");
  }
}
</script>

<style>
article {
  text-align: left;
  margin: 0 2em 6em 2em;
}

.article-header {
  padding: 0.5em;
  background-color: rgb(224, 222, 219);
}

.article-content {
  margin-top: 2em;
}

/* custom */
#customId {
  color: red;
}
</style>

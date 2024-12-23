<template>
  <div class="main-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h3>Chapters</h3>
      <ul>
        <li v-for="chapter in chapters" :key="chapter.id">
          <a
            href="#"
            @click.prevent="setActiveChapter(chapter.id)"
            :class="{ active: activeChapter === chapter.id }"
          >
            {{ chapter.title }}
          </a>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <h2 v-if="activeChapter">{{ getActiveChapter().title }}</h2>
      <component v-if="activeChapter" :is="getActiveChapterComponent()" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "MainContainer",
  data() {
    return {
      chapters: [
        {
          id: "chapter_1",
          title: "Chapter 1: Template Syntax",
          component: "chapter_1_TemplateSyntax",
        },
        {
          id: "chapter_2",
          title: "Chapter 2: Reactivity Fundamentals",
          component: "chapter_2_ReactivityFundamentals",
        },
      ],
      activeChapter: "chapter_1",
    };
  },
  methods: {
    setActiveChapter(chapterId) {
      this.activeChapter = chapterId;
      console.log(chapterId);
    },
    getActiveChapter() {
      console.log(this.chapters);
      return this.chapters.find((chapter) => chapter.id === this.activeChapter);
    },
    getActiveChapterComponent() {
      const activeChapter = this.getActiveChapter();
      if (!activeChapter) return null;
      return defineAsyncComponent(() =>
        import(`@/examples/${activeChapter.component}.vue`)
      );
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
}

/* Sidebar Styles */
.sidebar {
  width: 15%;
  background-color: #f4f4f4;
  padding: 1em;
  border-right: 1px solid #ddd;
}

.sidebar h3 {
  margin-bottom: 1em;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 0.5em;
}

.sidebar a {
  text-decoration: none;
  color: #007bff;
}

.sidebar a.active {
  font-weight: bold;
  color: #0056b3;
}

.sidebar a:hover {
  text-decoration: underline;
}

/* Main Content Styles */
.main-content {
  width: 100%;
  flex: 1;
  padding: 2em;
  display: flex;
  flex-direction: column;
}

.main-content h2 {
  margin: 2em 0;
  text-align: left;
}
</style>

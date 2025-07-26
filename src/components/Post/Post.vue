<script setup>
import { computed, watch, ref } from 'vue';
import { sharedValue } from '../../shared/sharedState.ts';
import { marked } from 'marked';

// Configure marked options for better line break handling
marked.setOptions({
  breaks: true, // Convert '\n' in paragraphs into <br>
  gfm: true,    // GitHub Flavored Markdown
});

const post = computed(() => sharedValue.value);
const content = ref('');
const isLoading = ref(false);

// Function to go back to home (clear selected post)
const goHome = () => {
  sharedValue.value = null;
};

// Function to render markdown content
const renderMarkdown = async (post) => {
  if (!post || !post.id) {
    content.value = '';
    return;
  }

  isLoading.value = true;

  const res = await fetch(`/blog/${post.id}.md`)
   try {
    const res = await fetch(`/blog/${post.id}.md`);
    if (!res.ok) throw new Error('Markdown file not found');
    const raw = await res.text();
    const mdBody = raw.replace(/^---[\s\S]*?---/, '').trim();
    content.value = marked(mdBody);
  } catch (error) {
    content.value = '<p>Error loading content preview.</p>';
    console.error('Error rendering markdown:', error);
  } finally {
    isLoading.value = false;
  }
};

// Watch for changes in the selected post
watch(post, (newPost) => {
  if (newPost) {
    renderMarkdown(newPost)
  } else {
    content.value = ''
  }
}, { immediate: true })
</script>

<template>
  <!-- Mobile view: show only when post is selected -->
  <section class=" w-full h-full overflow-x-hidden" :class="{ 'hidden md:block': !post, 'block': post }">
    <!-- Mobile Home Button - only show on small screens when post is selected -->
    <div v-if="post" class="md:hidden sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
      <button 
        @click="goHome"
        class="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span class="font-medium">Home</span>
      </button>
    </div>

    <article v-if="post" class="max-w-4xl mx-auto px-6 py-8">
      <!-- Loading State -->
      <div v-if="isLoading" class="text-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p class="mt-2 text-gray-600 dark:text-gray-400">Loading content...</p>
      </div>

      <!-- Post Header -->
      <header v-else class="mb-8">
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium mr-4">
            {{ post.data?.category || 'Blog' }}
          </span>
          <time :datetime="post.data?.pubDate">
            {{ post.data?.pubDate ? new Date(post.data.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : '' }}
          </time>

          <template v-if="post.data?.updatedDate">
            <span class="mx-2">•</span>
            <span class="text-xs text-gray-400">
              Updated {{ new Date(post.data.updatedDate).toLocaleDateString() }}
            </span>
          </template>
        </div>

        <h1
          class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight"
        >
          {{ post.id }}
        </h1>
      </header>

      <!-- Post Content -->
      <div
        v-if="!isLoading"
        class="prose prose-lg dark:prose-invert max-w-none dark:text-gray-300"
        v-html="content"
      ></div>
    </article>
    
    <!-- Fallback when no post is selected - only show on desktop -->
    <div v-else class="hidden md:flex w-full h-full items-center justify-start overflow-hidden">
      <img
        src="/assets/chloro.jpg"
        alt="No post selected"
        class="w-auto h-full object-cover"
      />
    </div>
  </section>
</template>

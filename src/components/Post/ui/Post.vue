<script setup>
import { computed, watch, ref } from 'vue';
import { sharedValue } from '../../../shared/sharedState.ts';
import { marked } from 'marked';

const post = computed(() => sharedValue.value);
const content = ref('');
const isLoading = ref(false);

// Function to render markdown content
const renderMarkdown = async (post) => {
  if (!post || !post.id) {
    content.value = '';
    return;
  }

  const cont = ref('')
  const res = await fetch(`blog/${post.id}.md`)
  const raw = await res.text()
  const rendered = marked(raw)

  isLoading.value = true;
  
  try {
  if (post.data?.description) {
    content.value = rendered
  } else {
    content.value = '<p>Content preview not available.</p>'
  }
} catch (error) {
  content.value = '<p>Error loading content preview.</p>'
  console.error('Error rendering markdown:', error);
} finally {
  isLoading.value = false
}
}

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
  <section>
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
          {{ post.data?.title || post.id }}
        </h1>

        <!-- Tags -->
        <div v-if="post.data?.tags && post.data.tags.length > 0" class="flex flex-wrap gap-2 mb-6">
          <span 
            v-for="tag in post.data.tags" 
            :key="tag"
            class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Post Content -->
      <div
        v-if="!isLoading"
        class="prose prose-lg dark:prose-invert max-w-none"
  v-html="content"
      />
    </article>
    
    <!-- Fallback when no post is selected -->
    <div v-else class="max-w-4xl mx-auto px-6 py-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Select a Post
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Choose a post from the navigation to view its content here.
      </p>
    </div>
  </section>
</template>

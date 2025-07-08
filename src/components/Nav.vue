<template>
  <nav
  class="h-full p-4 border-r border-gray-200 dark:border-gray-700 text-black dark:text-white"
>
  <!-- Dark Mode Toggle would go here, but we'll handle it in Astro -->
  <div class="mb-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Tech Blog</h2>

    <!-- Search Box -->
    <div class="mb-4">
      <div id="search-container" class="mb-4"></div>
    </div>
  </div>

  <div class="space-y-6">
    <!-- Home Section -->
    <div>
      <h3 class="text-sm font-medium uppercase tracking-wider mb-2">
        Navigation
      </h3>
      <a
        href="/"
        class="flex items-center px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
      >
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          ></path>
        </svg>
        Home
      </a>
    </div>

    <!-- Categories Section -->
    <div>
      <h3 class="text-sm font-medium uppercase tracking-wider mb-2">
        Categories
      </h3>
     <ul>
          <li v-for="post in (allPosts || [])" @click="handleClick(post.id)" :key="post.id">{{ post.id }}</li>
        </ul>
    </div>

    <!-- Recent Posts Section -->
    <div>
      <h3 class="text-sm font-medium uppercase tracking-wider mb-2">
        Recent Posts
      </h3>
      <ul class="space-y-2">
             <li v-for="post in (allPosts || []).slice(0, 5)" :key="post.id">
              <a
                :href="`/blog/${post.id}`"
                class="block px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <div class="truncate">{{ post.data.title }}</div>
                <div class="text-xs mt-1">
                  {{ new Date(post.data.pubDate).toLocaleDateString() }}
                </div>
              </a>
            </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script setup>
import { onMounted } from 'vue'
// @ts-ignore
import { PagefindUI } from '@pagefind/default-ui'

// Props
const props = defineProps({
  allPosts: {
    type: Array,
    default: () => []
  },
  activePage: {
    type: String,
    default: '/'
  }
})

// Emit
const emit = defineEmits(['updatePost'])

const handleClick = (id) => {
  emit('updatePost', id)
}

onMounted(() => {
  new PagefindUI({
    element: '#search-container',
    showSubResults: true,
    showImages: false,
    pageSize: 5,
    translations: {
      placeholder: 'Search posts...',
      zero_results: 'No posts found for [SEARCH_TERM]',
    },
  })
})


</script>
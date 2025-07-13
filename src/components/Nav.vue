<template>
  <nav class="w-[30%] h-full p-4 border-r border-gray-200 dark:border-gray-700 text-black dark:text-white">
    <div class="mb-6">
      <!-- Search placeholder -->
      <div class="mb-4">
        <input 
          type="text" 
          placeholder="Search posts..." 
          class="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          disabled
        />
        <div class="text-xs text-gray-500 mt-1">Search functionality removed</div>
      </div>
    </div>

    <div class="space-y-6">
      <!-- Home Section -->
      <div>
        <a
          href="/"
          class="flex items-center font-bold justify-center py-2 text-3xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          Home
        </a>
      </div>

      <!-- Categories Section -->
      <div>
        <h3 class="text-sm text-center font-medium uppercase tracking-wider mb-2">
          All Posts
        </h3>
        <ul>
          <li v-for="post in (allPosts || [])" :key="post.id" class="mb-2">
            <div class="flex flex-col space-y-1">
              <button 
                @click="handleClick(post)" 
                class="text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {{ post.data?.title || post.id }}
              </button>
              <a 
                :href="`/blog/${post.id}`" 
                class="text-xs text-blue-600 dark:text-blue-400 hover:underline ml-2"
              >
                View full post →
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- Recent Posts Section -->
      <div>
        <h3 class="text-sm text-center font-medium uppercase tracking-wider mb-2">
          Recently Viewed
        </h3>
        <ul class="space-y-2">
          <li v-for="post in (allPosts || []).slice(0, 5)" :key="'recent-' + post.id" class="mb-2">
            <div class="flex flex-col space-y-1">
              <button 
                @click="handleClick(post)" 
                class="text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {{ post.data?.title || post.id }}
              </button>
              <a 
                :href="`/blog/${post.id}`" 
                class="text-xs text-blue-600 dark:text-blue-400 hover:underline ml-2"
              >
                View full post →
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { sharedValue } from '../shared/sharedState.ts'

const props = defineProps({
  allPosts: {
    type: Array,
    default: () => []
  },
})

const handleClick = (post) => {
  sharedValue.value = post;
}
</script>
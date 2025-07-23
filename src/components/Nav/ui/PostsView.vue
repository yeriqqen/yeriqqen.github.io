<template>
    <!-- Categories Section -->
      <div class="space-y-6">
        <button class="w-full hover:cursor-pointer flex items-center font-bold justify-center py-2 text-3xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors" @click="handleClick(null)">Home</button>
        <h3 class="text-sm text-center font-medium uppercase tracking-wider mb-2">
        All Posts
        </h3>
        <ul>
          <li class="hover:cursor-pointer" v-for="post in (allPosts || [])" @click="handleClick(post)" :key="post.id">{{ post.id }}</li>
        </ul>
      </div>

      <!-- Recent Posts Section -->
      <div>
        <h3 class="text-sm text-center font-medium uppercase tracking-wider mb-2">
        Recently Viewed
        </h3>
        <ul class="space-y-2">
          <li class="hover:cursor-pointer" v-for="post in recentlyViewed" @click="handleClick(post)" :key="post.id">{{ post.id }}</li>
        </ul>
      </div>
</template>


<script setup>
import { ref } from 'vue'
import { sharedValue } from '../../../shared/sharedState.ts'

const props = defineProps({
  allPosts: {
    type: Array,
    default: () => []
  },
})

const recentlyViewed = ref([])

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('recentlyViewed')
  if (saved) {
    recentlyViewed.value = JSON.parse(saved)
  }
}

const handleClick = (post) => {
  sharedValue.value = post;
  if (!post) return;
  recentlyViewed.value = recentlyViewed.value.filter(p => p.id !== post.id)
  recentlyViewed.value.unshift(post)
  if (recentlyViewed.value.length > 5) {
    recentlyViewed.value = recentlyViewed.value.slice(0, 5)
  }
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed.value))
}

</script>
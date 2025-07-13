<template>
    <!-- Categories Section -->
      <div>
        <h3 class="text-sm text-center font-medium uppercase tracking-wider mb-2">
        All Posts
        </h3>
        <ul>
          <li v-for="post in (allPosts || [])" @click="handleClick(post)" :key="post.id">{{ post.id }}</li>
        </ul>
      </div>

      <!-- Recent Posts Section -->
      <div>
        <h3 class="text-sm text-center font-medium uppercase tracking-wider mb-2">
        Recently Viewed
        </h3>
        <ul class="space-y-2">
             <ul>
          <li v-for="post in (allPosts || []).slice(0, 5)" @click="handleClick(post)" :key="post.id">{{ post.id }}</li>
        </ul>
        </ul>
      </div>
</template>


<script setup>
import { sharedValue } from '../../../shared/sharedState.ts'

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
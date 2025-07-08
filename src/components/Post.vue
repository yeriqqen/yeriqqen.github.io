<template>
  <section>
    <article v-if="post" class="max-w-4xl mx-auto px-6 py-8">
      <!-- Post Header -->
      <header class="mb-8">
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time :datetime="post.pubDate">
            {{ new Date(post.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) }}
          </time>

          <template v-if="post.data.updatedDate">
            <span class="mx-2">•</span>
            <span class="text-xs text-gray-400">
              Updated {{ new Date(post.updatedDate).toLocaleDateString() }}
            </span>
          </template>
        </div>

        <h1
          class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight"
        >
          {{ post.title }}
        </h1>

        <p
          class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          {{ post.description }}
        </p>
      </header>

      <!-- Post Content -->
      <div
        class="prose prose-lg dark:prose-invert max-w-none"
        v-html="content"
      />
    </article>
  </section>
</template>

<script setup>
import { sharedValue } from '../shared/sharedState.ts'

const post = sharedValue;
</script>

<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg?auto=webp&quality=60&crop=1.91:1&width=1200"
      title="Hello World!"
      previewText="This is my first post!"
    />
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg?auto=webp&quality=60&crop=1.91:1&width=1200"
      title="Hello World!"
      previewText="This is my first post!"
    />
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg?auto=webp&quality=60&crop=1.91:1&width=1200"
      title="Hello World!"
      previewText="This is my first post!"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

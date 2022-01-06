<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
      <AppButton v-if="isAuth" style="margin-left: 10px" @click="onLogout"
        >Logout</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Post</h1>
      <PostList :isAdmin="true" :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    isAuth() {
      return this.$store.getters.isAuth
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin')
    },
  },
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

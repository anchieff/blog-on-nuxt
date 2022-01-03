<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First post",
            previewText: "This is my first post!",
            thumbnail:
              "https://images.theconversation.com/files/336248/original/file-20200520-152302-97x8pw.jpg",
          },
          {
            id: "2",
            title: "Second post",
            previewText: "This post is better then first one",
            thumbnail:
              "https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg",
          },
          {
            id: "3",
            title: "Another post",
            previewText: "We need more posts!",
            thumbnail:
              "https://images.squarespace-cdn.com/content/v1/554e744ce4b026a2b08ca248/1614789007485-7ONFFHVVJWA53ASBSGJT/2020_12_TaiChi_CZ1_EricaDanger_2.jpg",
          },
        ],
      });
    }, 1500);
  },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: #423325;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 0px #725a4478;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>

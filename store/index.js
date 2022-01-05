import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(`/posts.json`)
          .then((data) => {
            const postArray = []
            for (const key in data) {
              postArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch((e) => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        return this.$axios
          .$post(`${process.env.baseUrl}/posts.json`, {
            ...post,
            updatedDate: new Date(),
          })
          .then((data) => {
            vuexContext.commit('addPost', { ...post, id: data.name })
          })
          .catch((e) => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            `${process.env.baseUrl}/posts/${editedPost.id}.json`,
            editedPost
          )
          .then(() => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch((e) => console.log(e))
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore

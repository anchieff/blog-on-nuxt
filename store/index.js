import Vuex from 'vuex'
import axios from 'axios'

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
        return axios
          .get('https://nuxt-blog-9881b-default-rtdb.firebaseio.com/posts.json')
          .then((res) => {
            const postArray = []
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch((e) => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        return axios
          .post(
            'https://nuxt-blog-9881b-default-rtdb.firebaseio.com/posts.json',
            { ...post, updatedDate: new Date() }
          )
          .then((res) => {
            vuexContext.commit('addPost', { ...post, id: res.data.name })
          })
          .catch((e) => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        console.log(editedPost)
        return axios
          .put(
            `https://nuxt-blog-9881b-default-rtdb.firebaseio.com/posts/${editedPost.id}.json`,
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

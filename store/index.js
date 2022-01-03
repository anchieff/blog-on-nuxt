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
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First post',
                previewText: 'This is my first post!',
                thumbnail:
                  'https://images.theconversation.com/files/336248/original/file-20200520-152302-97x8pw.jpg',
              },
              {
                id: '2',
                title: 'Second post',
                previewText: 'This post is better then first one',
                thumbnail:
                  'https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg',
              },
              {
                id: '3',
                title: 'Another post',
                previewText: 'We need more posts!',
                thumbnail:
                  'https://images.squarespace-cdn.com/content/v1/554e744ce4b026a2b08ca248/1614789007485-7ONFFHVVJWA53ASBSGJT/2020_12_TaiChi_CZ1_EricaDanger_2.jpg',
              },
            ])
            resolve()
          }, 1000)
        })
          .then((data) => {
            context.store.commit('setPosts', data.loadedPosts)
          })
          .catch((e) => {
            context.error(e)
          })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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
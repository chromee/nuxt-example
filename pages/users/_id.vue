<template>
  <div>
    <h1>{{user.name}}</h1>
    <img :src="user.avatar_url">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, store }) {
    const { id } = params
    await store.dispatch('getUser', { id })
    // const user = await app.$axios.$get(`https://api.github.com/users/${id}`)
    return {}
  },
  computed: {
    ...mapGetters(["user"])
  }
}
</script>

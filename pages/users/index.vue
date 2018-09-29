<template>
  <div>
    <h1>Users</h1>
    <a href="http://localhost:3000/users/chromee">http://localhost:3000/users/chromee</a>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const { id } = params
    return { id }
  }
}
</script>

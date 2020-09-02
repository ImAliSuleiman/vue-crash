<template>
  <header class="header">
    <h1>Vya Kufanya</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  padding: 1em;
  background: #424242;
  color: white;
  text-align: center;
}

.header a {
  color: white;
  padding-right: 8px;
  text-decoration: none;
}
</style>
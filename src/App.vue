<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@350&display=swap');

#app {
  font-family: Lexend, sans-serif;
  color: rgb(56, 56, 56);
}

nav {
  margin: 30px 25px;
  text-align: right;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 5px;

    &.router-link-exact-active {
      color: #00b199;
    }
  }
}
</style>

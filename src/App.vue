<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
    <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;}
body {margin: 0;padding:0;overflow: hidden;background-color: aliceblue;}
nav{padding: 30px;background-color:#fff;border-bottom: 1px solid #afc4da;text-align: left;}
nav a{color:#409eff;text-decoration: none;}
main{margin:20px 0}
</style>

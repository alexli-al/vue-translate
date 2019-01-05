<template>
  <div id="app">
   <!-- <test msg="new value"></test> -->
   <!-- <users></users> -->
   <!-- <home></home> -->
    <!--  
   <h2>App</h2>
   <div>
       <ul>
          <router-link to='/helloworld'>helloWorld</router-link>
          <router-link to='/users'>users</router-link>
          <router-link to='/home'>home</router-link>
           <router-link to='/users'>test</router-link>
           <router-link to='/about'>about</router-link>
     </ul>
   </div> -->
   
   <router-view></router-view>

  </div>
</template>

<script>

// import Test from './components/Test'
// import Users from './components/Users'
import About from './components/About'


export default {
  name: 'App',
  components: {
    About
    // Test,
    // Users,
    // Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

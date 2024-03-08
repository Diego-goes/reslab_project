<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Login_User/> -->
  <aside id="menu">
    <div>
      <img src="./assets/logo.png" alt="">
    </div>
    <div id="menu_options">
      <router-link to="/pagReservas">Res</router-link>
      <router-link to="/">Log</router-link>
      <router-link to="/pagLabs">Lab</router-link>
      <router-link to="/cadastroUser">Cad</router-link>
    </div>
    <div>
    </div>
  </aside>
  <div id="view">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login_User from './views/loginUser.vue'
export default {
  name: 'App',
  created() {
    console.log(this.$router.options.routes);
  },
  components: {
    // HelloWorld,
    // Login_User
  }
}
</script>

<style>
#app {
  background-image: url('./assets/bg_all.jpg');
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  display: flex;
  width: 100vw;
  height: 100vh;
}

#view {
  width: 100vw;
}

#menu {
  background: linear-gradient(rgba(36, 39, 67, 0.776), rgba(16, 19, 42, 0.776));
  width: 4vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
}

#menu img {
  max-width: 45%;

}

#menu_options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40%;
}
#menu_options a{

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  text-decoration: none;
  padding: 30%;
  border: rgb(18, 161, 123) solid 1px;
  border-radius: 5px;
}
#menu_options a:hover{
  background-color: rgb(18, 161, 123);
  color: black;
}
body {
  background-color: black;
  margin: 0;
  overflow-x: hidden;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</style>


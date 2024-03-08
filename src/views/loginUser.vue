<template>
  <div id="login_bg">
    <div id="card_login">
      <div>
        <h2>LOGIN</h2>
      </div>
      <form @submit.prevent="doLogin">
        <div>
          <label for="username">
            <img src="../assets/person_icon.png" alt="">
            <input type="text" id="username" v-model="username" placeholder="CPF" />
          </label>
        </div>
        <div>
          <label for="password">
            <img src="../assets/lock_icon.png" alt="">
            <input type="password" id="password" v-model="password" placeholder="Password" />
          </label>
        </div>
        <div>
          <router-link to="/cadastrouser">Cadastre-se</router-link>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <p id="mensagem">{{ msg }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    saveTokenToLocalStorage(token) {
      // Verifique se o token existe
      if (token) {
        // Salve o token no Local Storage
        localStorage.setItem('token_jwt', token);
      }
    },
    doLogin() {
      let body = {
        cpf_cnpj: this.username,
        password: this.password,
      };
      axios
        .post("http://localhost:8000/login", body)
        .then((response) => {
          this.msg = response.data.mensagem;
          this.saveTokenToLocalStorage(response.data.token_jwt)
          console.log(response.data);
          setTimeout(() => {
            this.$router.push("/paglabs");
          }, 1500);

          // this.$router.push('/cadastro');
          // token = response.data.token_jwt
        })
        .catch((error) => (this.msg = error.response.data.mensagem));
    },
  },
};
</script>

<style scoped>
#login_bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/login_bg_blur.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  /* color: black; */
}

#card_login {
  /* background: linear-gradient(45deg, rgba(255, 255, 255, 0.400) , rgb(121, 33, 9, 0.400), rgba(9,9,121, 0.400) , rgba(0,212,255, 0.400)); */
  background-color: rgba(30, 31, 45, 0.66);
  background: linear-gradient(120deg,rgba(67, 72, 116, 0.776),rgba(33, 37, 76, 0.776),rgba(33, 37, 76, 0.776),rgba(0, 0, 0, 0.66));
  box-shadow: rgb(15, 15, 15) 0px 0px 50px;
  padding: 4%;
  border-radius: 3rem;
  width: 20vw;
}

form {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Gill Sans';
  height: 100%;
}

form div {
  padding: 5% 0%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
}
form div:nth-child(3){
  justify-content: right;
}

input[type='text'],
input[type='password'] {
  background-color: transparent;
  border: 0px;
  outline-style: none;
}
button{
  padding: 5% 30%;
  border-radius: 30rem;
  border: transparent 3px solid;
}
button:hover{
    background-color: rgb(18, 161, 123);
    color: white;
}
h2 {
  font-size: 2.5rem;
}

input {
  font-size: 100%;
  color: white;
  width: min-content;
}

a {
  color: rgb(122, 122, 122);
  text-decoration: none;
}

label {
  border: rgb(18, 161, 123) 1px;
  border-style: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  text-align: left;
}

img {
  width: 5%;
  filter: invert();
  margin-inline: 2%;
}

h2 {
  margin: 0;
}
</style>

<template>
  <div id="cadastro_user">
    <h1>Cadastro</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="userData.username" required>
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="userData.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="userData.email" required>
      </div>
      <div>
        <label for="user_type_id">User Type ID:</label>
        <input type="number" id="user_type_id" v-model="userData.user_type_id" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="userData.password" required>
      </div>
      <div>
        <label for="is_active">Is Active:</label>
        <input type="number" id="is_active" v-model="userData.is_active" required>
      </div>
      <div>
        <label for="cpf_cnpj">CPF/CNPJ:</label>
        <input type="text" id="cpf_cnpj" v-model="userData.cpf_cnpj" required>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="userData.phone" required>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: {
        username: '',
        name: '',
        email: '',
        user_type_id: null,
        password: '',
        is_active: null,
        cpf_cnpj: '',
        phone: ''
      }
    };
  },
  methods: {
    adaptObjQuote(obj) {
      const newObj = {};
      for (const key in obj) {
        newObj[`${key}`] = obj[key];
      }
      return newObj;
    },
    getTokenToLocalStorage() {
      return localStorage.getItem('token_jwt');
    },

    submitForm() {
      // Aqui você pode enviar os dados para o backend ou realizar outras ações com eles
      console.log('Dados do formulário:', JSON.stringify(this.userData));
      let body = this.adaptObjQuote(this.userData);
      let headers = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios
        .post("http://localhost:8000/users/create", body, headers)
        .then((response) => {
          this.msg = response
          setTimeout(() => {
            this.$router.push("/pagLabs");
          }, 1500);

          // this.$router.push('/cadastro');
          // token = response.data.token_jwt
        })
        .catch((error) => (this.msg = error.response));
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente, se necessário */
#cadastro_user{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/login_bg_blur.jpg');
  background-size: cover;
  height: 100vh;
}
form {
  background: linear-gradient(120deg,rgba(67, 72, 116, 0.776),rgba(33, 37, 76, 0.776),rgba(33, 37, 76, 0.776),rgba(0, 0, 0, 0.66));
  width: 20vw;
  padding: 3% 2%;
  border-radius: 2rem;
  min-width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
label{
  color: gray;
}
input{
  width: 60%;
  background-color: transparent;
  border: 0;
  outline: none;
  color: white;
}
form div{
  min-width: 100%;
  margin: 3.5% 0%;
  border: rgb(18, 161, 123) 1px;
  border-style: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  text-align: left;
  width: max-content;
  display: flex;
  justify-content: space-between;
}
button{
  padding: 3% 10%;
  border-radius: 0.5rem;
}
button:hover{
    background-color: rgb(18, 161, 123);
    color: white;
}
</style>

<template>
  <div>
    <h1>Criar Reserva</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="res_date">Data:</label>
        <input type="text" id="res_date" v-model="resData.res_date" required>
      </div>
      <div>
        <label for="lab_id">Lab_Id:</label>
        <input type="text" id="lab_id" v-model="resData.lab_id" required>
      </div>
      <div>
        <label for="user_id">User_Id:</label>
        <input type="text" id="user_id" v-model="resData.user_id" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      resData: {
        res_date: "2024-10-13T20:00:00Z",
        lab_id: 8,
        user_id: 26
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
      console.log('Dados do formulário:', JSON.stringify(this.resData));
      let body = this.adaptObjQuote(this.resData);
      let headers = {
        headers: {
          'Authorization': `"Bearer ${this.getTokenToLocalStorage()}"`,
          'Content-Type': 'application/json'
        }
      }
      axios
        .post("http://localhost:8000/reslabs/create", body, headers)
        .then((response) => {
          console.log(response);
          setTimeout(() => {
            this.$router.push({
              name: "/reservarLab",
              params: {
                andar: this.labData.andar,
                is_active: this.labData.is_active,
                lab: this.labData.lab,
                resData: this.labData.resData,
                description: this.labData.description,
              }
            });
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

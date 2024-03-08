<template>
  <div>
    <h1>Cadastro</h1>
    <form @submit.prevent="submitForm">
      <label for="andar">Andar:</label>
      <input type="number" id="andar" v-model="labData.andar" required>
      <br>
      <label for="lab">Lab:</label>
      <input type="text" id="lab" v-model="labData.lab" required>
      <br>
      <label for="description">Description:</label>
      <input type="text" id="description" v-model="labData.description" required>
      <br>
      <label for="is_active">Is_active:</label>
      <input type="number" id="is_active" v-model="labData.is_active" required>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      labData: {
        andar: 0,
        lab: 'lab_aut',
        description: 'teste_aut',
        is_active: 0
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
      console.log('Dados do formulário:', JSON.stringify(this.labData));
      let body = this.adaptObjQuote(this.labData);
      let headers = {
        headers: {
          'Authorization': `"Bearer ${this.getTokenToLocalStorage()}"`,
          'Content-Type': 'application/json'
        }
      }
      axios
        .post("http://localhost:8000/labs/create", body, headers)
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
</style>

<template>
    <div>
        <div>
            <div>
                <div>Andar: {{ labData.andar }}</div>
                <div>Status: {{ labData.is_active }}</div>
            </div>
            <div>
                <p>{{ labData.lab }}</p>
            </div>
        </div>
        <div>
            Descrição: {{ labData.description }}
        </div>
        <div>
            <input type="button" v-on:click="efetuarPagamento" value="Efetuar Pagamento">
            <div>
                Código Boleto
            </div>
        </div>
    </div>
</template>
  

<script>
import axios from 'axios'
export default {
    data() {
        return {
            labData: {},
        };
    },
    mounted() {
        this.labData = {
            andar: this.$route.params.andar,
            is_active: this.$route.params.is_active,
            lab: this.$route.params.lab,
            resData: this.$route.params.resData,
            description: this.$route.params.description,
        }
        console.log(this.labData);
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
        efetuarPagamento() {
            let body = this.adaptObjQuote(this.labData.resData);
            let headers = {
                headers: {
                    'Authorization': `"Bearer ${this.getTokenToLocalStorage()}"`,
                    'Content-Type': 'application/json'
                }
            }
            axios
                .post("http://localhost:8000/reslabs/create", body, headers)
                .then((response) => {
                    this.msg = response
                    this.$router.push({
                        name: 'loadPayment',
                    })
                })
                .catch((error) => (this.msg = error.response));

        }
    }
    
}
</script>

<style></style>
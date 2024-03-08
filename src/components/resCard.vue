<template>
    <div class="res_card">
        <div>
            <p>NOME</p>
            <p>{{ resData.labObj.lab }}</p>
        </div>
        <div>
            <p>DATA</p>
            <p>{{ pegarData }}</p>
        </div>
        <div>
            <p>HORÁRIO</p>
            <p>{{ pegarHora}}</p>
        </div>
        <div>
            <p>DESCRIÇÃO</p>
            <p>{{ resData.labObj.description }}</p>
        </div>
        <!-- <div>...</div> -->
    </div>
</template>

<script>
export default {
    name: 'labCard',
    props: {
        resData: Object,
    },
    methods: {
    },
    computed: {
        pegarHora() {
            const resDate = new Date(this.resData.res_date);
            const horaLocal = resDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

            return horaLocal;
        },
        pegarData() {
            const resDate = new Date(this.resData.res_date);
            const dataLocal = resDate.toLocaleDateString();

            return dataLocal;
        }
    }
}
</script>

<style scoped>
.res_card {
    display: flex;
    background: linear-gradient(rgba(36, 39, 67, 0.776),rgba(16, 19, 42, 0.776));
    margin: 0.5%;
    width: 50vw;
    padding: 0% 1%;
    border-radius: 1rem;
    max-width: 60vw;
}
.res_card div{
    margin: 0% 2%;
}
</style>
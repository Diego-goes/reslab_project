<template>
    <div class="lab_card">
        <div>
            <div>
                <h2>{{ labData.lab }}</h2>
            </div>
            <div>
                <p>{{ disponibilidade }}</p>
            </div>
        </div>
        <div>
            <p>{{ labData.description }}</p>
        </div>
        <div>
            <div>
                <p>{{ formatarAndar }}</p>
            </div>
            <input v-if="labData.is_active" type="button" v-on:click="reservar" value="Reservar">
        </div>
    </div>
</template>

<script>
export default {
    name: 'labCard',
    props: {
        labData: Object
    },
    methods: {
        reservar() {
            this.$router.push({
                name: 'cadastroResLab',
                params: {
                    andar: this.labData.andar,
                    is_active: this.labData.is_active,
                    lab: this.labData.lab,
                    description: this.labData.description,
                }
            });
        }
    },
    computed:{
        disponibilidade(){
            return this.labData.is_active ? 'Disponível' : 'Indisponível'
        },
        formatarAndar(){
            if(this.labData.andar == 0){
                return 'Térreo'
            } else {
                return `${this.labData.andar}º ANDAR`
            }
        }
    }
}
</script>

<style scoped>
.lab_card {
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(36, 39, 67, 0.776),rgba(16, 19, 42, 0.776));
    margin: 2%;
    padding: 1% 3%;
    width: 50vw;
    border-radius: 2rem;
    max-width: 25vw;
}
.lab_card div{
    display: flex;
    justify-content: space-between;
    margin: 1.5% 0%;
}
.lab_card p,h2 {
    margin: 0;
    width: fit-content;
    text-align: left;
}
input[type="button"]{
    padding: 1% 5%;
    border-radius: 2rem;
    border: 0;
}
input[type="button"]:hover{
    background-color: rgb(18, 161, 123);
    color: white;
}
</style>
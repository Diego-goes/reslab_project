<template>
    <div id="pag_reservas">
        <h1>RESERVAS</h1>
        <div>
            <!-- <filterComp/> -->
        </div>
        <div id="display_resCards">
            <ResCard v-for="res_atual in todas_res" :key="res_atual.id" :resData="res_atual"/>
            <!-- <div> o o o o</div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ResCard from '@/components/resCard.vue'
export default {
    data() {
        return {
            todas_res: [],
            labs: []
        }
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
        separarLab(){
            for (let res_atual of this.todas_res){
                const labObj = this.labs.find(obj => obj.id == res_atual.lab_id)
                // console.log(`lab: ${Object.entries(lab)}`);
                res_atual['labObj'] =  labObj ? labObj : { lab: 'N/A', description: 'N/A' }
                // console.log(`res_atual: ${Object.entries(res_atual)}`);
            }
        }
    },
    created() {
        let h = {
            headers: {
                'Authorization': `"Bearer ${this.getTokenToLocalStorage()}"`,
                'Content-Type': 'application/json'
            }
        }
        axios
            .get("http://localhost:8000/labs", h)
            .then((response) => {
                this.labs = response.data
                axios
                .get("http://localhost:8000/reslabs", h)
                .then((response) => {
                    this.todas_res = response.data
                    this.separarLab();
                })
                .catch((error) => (this.msg = error.response));
            })
            .catch((error) => (this.msg = error.response));
    },

    components:{
        ResCard
    }
}
</script>

<style scoped>
#pag_reservas{
    display: flex;
    flex-direction: column;
    align-items: center;
}
#display_resCards{
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 70vh;
    width: min-content;
}
</style>
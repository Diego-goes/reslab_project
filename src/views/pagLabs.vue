<template>
    <div id="pag_labs">
        <h1>LABORATÓRIOS</h1>
        <div>
            <!-- <filterComp/> -->
        </div>
        <div id="display_labs">
            <LabCard v-for="lab in labs" :key="lab.id" :labData="lab" />
        </div>
        <div> o o o o </div>
    </div>
</template>

<script>
import axios from "axios";
import LabCard from '@/components/labCard.vue'
export default {
    data() {
        return {
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
        }
    },
    components: {
        LabCard
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
            })
            .catch((error) => (this.msg = error.response));
    }
}
</script>

<style scoped>
#pag_labs {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#display_labs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
}
</style>
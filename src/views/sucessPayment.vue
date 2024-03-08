<template>
    <div>
        <div><img :src="imgSrc" alt=""></div>
        <div>
            <p>{{title}}</p>
            <hr>
            <p>{{subTitle}}</p>
        </div>
    </div>
</template>

<script>
import loader from '@/assets/loader.gif'
export default {
    data() {
        return {
            imgSrc: loader,
            title: "PAGAMENTO CONFIRMADO",
            subTitle: "Redirecionando para suas reservas..."
        }
    },
    created(){
        setTimeout(()=>{
            this.$router.push('pagReservas')
        },3000)
    }
}
</script>

<style scoped>
img{
    width: 15vw;
    height: auto;
    margin-top: 25px;
}
</style>
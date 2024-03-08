<template>
    <div>
        <LoadComp :imgSrc="imgSrc" :title="title" :subTitle="sTitle" />
    </div>
</template>

<script>
import LoadComp from '@/components/loadComp.vue'
export default {
    data() {
        return {
            imgSrc: require("@/assets/loader.gif"),
            title: "AGUARDE",
            sTitle: "Confirmando Pagamento..."
        }
    },
    components:{
        LoadComp
    },
    created(){
        setTimeout(()=>{
            this.$router.push('sucessPayment')
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
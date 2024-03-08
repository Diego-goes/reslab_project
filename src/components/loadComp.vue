<template>
    <div>
        <div><img :src="imgSrc" alt=""></div>
        <div>
            <p>{{ title }}</p>
            <hr>
            <p>{{ subTitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "loadComp",
    props: {
        imgSrc: String,
        title: String,
        subTitle: String
    }
}
</script>

<style scoped>
img {
    width: 15vw;
    height: auto;
    margin-top: 25px;
}
</style>
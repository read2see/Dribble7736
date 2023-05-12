<template>
   <router-link to="" class="box text-light-blue hover:text-light-blue" v-for = "course in [1,2,3,4,5,6,7,8,9]">
        <h3>{{ course }}</h3>
        <p>information contained here about course</p>
        <p>{{ flag }}</p>
   </router-link>
</template>

<script setup>
    const props = defineProps({
        flag: String 
    }) 
</script>

<style scoped>
.box
{
    padding: 25px;
    text-align: center;
    border-radius: 5px;
    background: #DB0032;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
}
</style>
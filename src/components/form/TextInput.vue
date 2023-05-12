<template>
    <div class="flex flex-col my-2">
        <label :for="name" class="">{{ label }}</label>
        <input :id="name" type="text" :placeholder="placeholder" :required="required" class="">
        <p class="text-red-400 my-2" v-if="validationMessage">{{ validationMessage }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    label: String,
    placeholder: String,
    validationMessage: String,
    required: Boolean,
})

</script>

<style scoped>

</style>
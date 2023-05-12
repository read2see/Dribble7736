<template>
    <div class="flex flex-col my-2">
        <label :for="name" class="mb-1 text-white">{{ label ? label : 'E-mail'}}</label>
        <input :id="name" type="email" :value="email" @input="$emit('input', email)" :placeholder="placeholder" :required="required" class="p-1 rounded-md">
        <p class="text-red-600 mb-2 pl-1 font-bold" v-if="validationMessage">{{ validationMessage }} pp</p>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    label: String,
    placeholder: String,
    validationMessage: String,
    required: Boolean,
    email: String,
})

</script>

<style scoped>

</style>
<template>
    <div class="flex flex-col my-2">
        <label :for="name" class="mb-1 text-white">{{ label ? label : 'Password'}}</label>
        <input :id="name" type="password" :placeholder="placeholder" :required="required" class="p-1 rounded-md">
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
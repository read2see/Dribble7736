<template>
    <section class="min-h-[100svh] w-full grid place-items-center bg-med-blue">
        <div class="flex flex-col gap-2 items-center">
            <router-link to="/">
                <img src="le.svg" alt="" class="w-16 p-2 bg-black rounded-full">
            </router-link>
            <form action.prevent="" class="drop-shadow-md bg-zinc-400 p-2 min-w-[360px] max-w-[625px] rounded-lg mx-auto">
                <h2 class="text-2xl font-bold pb-2 border-b text-white">Register</h2>
                <div class="flex flex-col my-2">
                    <label for="email" class="mb-1 text-white">E-mail</label>
                    <input id="email" type="email" placeholder="email" class="p-1 rounded-md" v-model="form.email" required>
                    <p class="text-red-600 mb-2 pl-1 font-bold" v-if="false"></p>
                </div>
                <div class="flex flex-col my-2">
                    <label for="password" class="mb-1 text-white">Passowrd</label>
                    <input id="password" type="password" placeholder="password" class="p-1 rounded-md" required>
                    <p class="text-red-400 my-2" v-if="false"></p>
                </div>
                <div class="flex flex-col my-2">
                    <label for="confirm-password" class="mb-1 text-white">Confirm-Passowrd</label>
                    <input id="confirm-password" type="password" placeholder="confirm password" class="p-1 rounded-md" required>
                    <p class="text-red-400 my-2" v-if="false"></p>
                </div>
                <button class="text-white bg-blue-500 w-full my-2 p-2 rounded-lg">Register</button>
                <div class="flex flex-col items-center">
                    <router-link class="underline text-zinc-100" to="/login">Already Registered?</router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import EmailInput from '../../components/form/EmailInput.vue';
import ConfirmPassword from '../../components/form/ConfirmPassword.vue';

let form = {
    email:'',
    password: '',
    confirmPassword:''
}

</script>

<style scoped>

</style>
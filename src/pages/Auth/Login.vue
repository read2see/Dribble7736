<template>
    <section class="min-h-[100svh] w-full grid place-items-center bg-med-blue">
        <div class="flex flex-col gap-2 items-center">
            <router-link to="/">
                <img src="le.svg" alt="" class="w-16 p-2 bg-black rounded-full">
            </router-link>
            <form action.prevent="" class="drop-shadow-md bg-zinc-400 p-2 min-w-[360px] max-w-[625px] rounded-lg mx-auto">
                <h2 class="text-2xl font-bold pb-2 border-b text-white">Login</h2>
                <EmailInput placeholder="example@exapmle.com" required></EmailInput>
                <PasswordInput placeholder="password" required></PasswordInput>
                <button class="text-white bg-blue-500 w-full my-2 p-2 rounded-lg">Login</button>
                <div class="flex flex-col items-center">
                    <router-link class="underline text-zinc-100" to="/forgot-password">Forgot password?</router-link>
                    <router-link class="underline text-zinc-100" to="/register">Not Registered?</router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import EmailInput from '../../components/form/EmailInput.vue';
import PasswordInput from '../../components/form/PasswordInput.vue';
</script>

<style scoped>

</style>
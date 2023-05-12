<template>
    <nav class="bg-light-red w-full p-2">
        <div class="flex justify-center">
            <div class="flex items-center gap-2 justify-between w-1/2" id="desktop-only">
                <ul class="flex items-center gap-4 justify-center">
                    <router-link to="/">
                        <img src="le.svg" alt="" class="w-10 p-1">
                    </router-link>
                    <li class="ml-16">
                        <router-link to="/" class="text-white hover:text-blue-300">Main page</router-link>
                    </li>
                    <li class="">
                        <router-link to="/courses" class="text-white hover:text-blue-300">Courses</router-link>
                    </li>
                    <li class="">
                        <router-link to="/events" class="text-white hover:text-blue-300">Events</router-link>
                    </li>
                    <li class="">
                        <router-link to="/" class="text-white hover:text-blue-300">About Us</router-link>
                    </li>
                    <li class="">
                        <router-link to="/" class="text-white hover:text-blue-300">Contact Us</router-link>
                    </li>
                </ul>
                <div class="flex gap-2">
                    <router-link class="text-white bg-blue-500 p-1 rounded-md px-2 hover:text-white" to="/login">Login</router-link>
                    <router-link class="text-white bg-dark-blue p-1 rounded-md px-2 hover:text-white" to="/register">Register</router-link>
                </div>
            </div>
            <div id="mobile-only" class="flex items-center gap-2 justify-between w-full" >
                <router-link to="/">
                    <img src="le.svg" alt="" class="w-10 p-1">
                </router-link>
            
                <div class="flex gap-2">
                    <router-link class="text-white border p-1 rounded-md px-2" to="/register">Register</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>

@media only screen and (max-width:3840px){
    #mobile-only {
        display: none;
    }
}
@media only screen and (max-width:2560px){
    #mobile-only {
        display: none;
    }
}
@media only screen and (max-width:1920px){
    #mobile-only {
        display: none;
    }
}

@media only screen and (max-width:1174px){
    #desktop-only {
        display: none;
    }

    #mobile-only {
        display: flex;
    }
}

@media only screen and (max-width: 750px) {
    #desktop-only {
        display: none;
    }

    #mobile-only {
        display: flex;
    }
}

</style>
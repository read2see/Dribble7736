<template>
    <TheNav id="nav"></TheNav>
    <h2 id="mobile-heading" class="bg-black/75 text-white w-full p-1 text-md font-bold">dfd</h2>
    <slot></slot>
</template>

<script setup>
import TheNav from '../nav/TheNav.vue';
</script>

<style scoped>
/*  Desktop, Laptops, Tablets */

@media only screen and (max-width: 3840px) {
    #desktop-nav {
        display: block;
    }

    #mobile-nav, #mobile-only, #mobile-heading {
        display: none;
    }

    #mobile-nav-top {
        display: none;
    }

    .temporary {
        width: 500px;
    }
}

@media only screen and (max-width: 2560px) {
    .temporary {
        width: 500px;
    }
}

@media only screen and (max-width: 1920px) {
    .temporary {
        width: 500px;
    }
}

@media only screen and(max-width: 1300px) {
    #desktop-nav .core {
        width: 80%;
    }
}

@media only screen and (max-width: 1220px) {
    #desktop-nav .core {
        transform: none;
        width: 100%;
    }
}

@media only screen and (max-width: 1000px) {}


/* Mobile */
@media only screen and (max-width: 750px) {
    #nav{
        position: fixed;
        bottom:0;
    }
    #desktop-nav {
        display: none;
    }

    #mobile-nav{
        display: flex;
    }

    #mobile-nav-top {
        display: flex;
    }

    #dynamic-core {
        transform: none;
        width: 100%;
    }

    #mobile-heading {
        display: block;
    }
    #mobile-only {
        display: flex;
    }
}

@media only screen and (max-width: 454px) {
    .temporary {
        width: 454px;
    }
}

@media only screen and (max-width: 428px) {
    .temporary {
        width: 428px;
    }
}

@media only screen and (max-width: 414px) {
    .temporary {
        width: 414px;
    }
}

@media only screen and (max-width: 412px) {
    .temporary {
        width: 412px;
    }
}

@media only screen and (max-width: 411px) {
    .temporary {
        width: 411px;
    }
}

@media only screen and (max-width: 390px) {
    .temporary {
        width: 390px;
    }
}

@media only screen and (max-width: 384px) {
    .temporary {
        width: 384px;
    }
}

@media only screen and (max-width: 375px) {
    .temporary {
        width: 375px;
    }
}

@media only screen and (max-width: 360px) {
    .temporary {
        width: 360px;
    }
}
</style>
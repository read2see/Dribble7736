<template>
    <TheMainLayout>
        <section class="min-h-[100svh] bg-med-blue">
            <div class="flex gap-2 justify-center w-1/2 mx-auto p-16 flex-wrap">
                <CourseCard :flag = "something" class="max-w-[400px]">
                    
                </CourseCard>
            </div>
        </section>
    </TheMainLayout>
</template>

<script setup>
import TheMainLayout from '../../components/layouts/TheMainLayout.vue';
import CourseCard from '../../components/shared/CourseCard.vue';
let something = "COurses";
</script>

<style scoped>

</style>
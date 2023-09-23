<script setup>

</script>

<template>
    <Toast />
    <main class="min-w-full">
        <div class="grid grid-cols-2 gap-40 min-w-full">
            <div>
                <h1 class="font-bold text-10xl">Hello world!</h1>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </main>
</template>

<style scoped>
    
</style>

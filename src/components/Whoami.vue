<template>
    <div ref="block" class="block flex justify-center items-center">
        <div class="heading z-0">
            <h2 ref="heading" class="leading-normal font-bold text-[98px]">Who am i?</h2>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const block = ref(null);
const heading = ref(null);

const html = document.documentElement;

onMounted(() => {
    block.value.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    block.value.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
    const scrollPosition = block.value.scrollTop;
    const maxScroll = block.value.scrollHeight - block.value.clientHeight;

    // Если прокрутка достигла максимума
    if (scrollPosition >= maxScroll) {
        // Выполните переход к следующему блоку или выполните другие действия
    }
}
</script>

<style lang="scss" scoped>
.block {
    position: sticky;
    top: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #0C0C0C;
    overflow: hidden;
}
.heading {
    // text-decoration: underline;
    // transform: translate(-50%, -50%);

    &::after {
        content: '';
        border-bottom: 1px solid white;
    }

    h1, h2 {
        text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.40);
        transition: transform 0.3s;
    }
}
</style>

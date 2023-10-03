<template>
    <div ref="block" class="background z-0">
        <div class="elipses">
            <div ref="red" class="elipse elipse-1"></div>
            <div ref="aqua" class="elipse elipse-2"></div>
            <div ref="yellow" class="elipse elipse-3"></div>
            <div ref="green" class="elipse elipse-4"></div>
        </div>
    </div>
    <div class="heading fixed z-0">
        <h1 ref="heading" class="leading-normal font-bold text-[128px]">Welcome!</h1>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const block = ref(null);

const red = ref(null);
const yellow = ref(null);
const green = ref(null);
const aqua = ref(null);
const heading = ref(null);

const html = document.documentElement;

onMounted(() => {
    window.addEventListener('scroll', scroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scroll);
})

const changeElipsePosition = (value) => {
    const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };

    const elipseRadius = {
        x: red.value.offsetWidth / 2,
        y: red.value.offsetHeight / 2
    };

    const maxDistance = {
        x: center.x - elipseRadius.x,
        y: center.y - elipseRadius.y
    };

    const xOffset = maxDistance.x * Math.sin((Math.PI / 2) * (value / 100));
    const yOffset = maxDistance.y * Math.sin((Math.PI / 2) * (value / 100));

    const baseScale = 0.8; // Базовый масштаб текста
    const maxScaleIncrement = 0.4; // Максимальное увеличение масштаба
    const headingScale = baseScale + (value / 100) * maxScaleIncrement;

    aqua.value.style.transform = `translate(${-xOffset}px, ${yOffset}px)`;
    red.value.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    yellow.value.style.transform = `translate(${xOffset}px, ${-yOffset}px)`;
    green.value.style.transform = `translate(${-xOffset}px, ${-yOffset}px)`;
    heading.value.style.transform = `scale(${headingScale})`;
}

const scroll = () => {
    const scrollTop = html.scrollTop;
    const introRect = block.value.getBoundingClientRect();
    const endOfIntro = introRect.bottom + scrollTop;
    const maxScrollTop = endOfIntro - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(99, Math.ceil(scrollFraction * 100));
    
    changeElipsePosition(frameIndex);
}
</script>

<style lang="scss" scoped>
.background {
    min-width: 100%;
    min-height: 300vh;
    background-color: #0C0C0C;
    position: sticky;
    overflow: hidden;
}

.heading {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1, h2 {
        text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.40);
        transition: transform 0.3s;
    }
}

.elipses {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
.elipse {
    width: 280px;
    height: 280px;
    filter: blur(100px);
    position: absolute;
    transform-origin: center center;
    transition: transform 0.3s; 

    &-1 {
        background-color: #DD4545;
        top: 5%;
        left: -5%;
    }
    
    &-2 {
        background-color: #49E8CB;
        top: -2%;
        right: 5%;
    }
    
    &-3 {
        background-color: #F0E052;
        bottom: 1%;
        left: 3%;
    }

    &-4 {
        background-color: #60E849;
        bottom: 6%;
        right: 1%;
    }
}
</style>

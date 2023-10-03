
<script setup>
import Intro from '@/components/Intro.vue';
import Whoami from '@/components/Whoami.vue'
import Skills from '@/components/Skills.vue'

</script>
<template>
    <Intro/>
    <Whoami ref="whoami"/>
    <Skills ref="skills"/>
</template>
<script>
import { onMounted, onUnmounted, ref } from 'vue';

const whoami = ref(null);
const skills = ref(null);

const blocks = {
    whoami,
    skills,
}

let isScrolling

onMounted(() => {
    window.addEventListener("scroll", handleScroll());
})

const handleScroll = () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        // После окончания скролла:
        // Определить, какой блок ближе всего к верху экрана
        let closest = null;
        let closestDistance = Infinity;

        for (const block of Object.entries(blocks)) {
            const rect = block.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < closestDistance) {
                closestDistance = distance;
                closest = block;
            }
        };

        if (closest) {
            const top = window.pageYOffset + closest.getBoundingClientRect().top;
            window.scrollTo({ top: top, behavior: "smooth" });
        }
    }, 100);
}
</script>
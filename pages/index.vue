<template>
    <div>
        <!-- Built-in Header -->
        <Header
            class="absolute z-10 bg-transparent align-top text-neutral-content"
        />
        <div id="background" class="items-top hero z-0 h-screen">
            <div class="hero-overlay z-10 bg-opacity-60"></div>
            <div class="hero-content z-20 text-center text-neutral-content">
                <div class="max-w-lg">
                    <h1
                        class="mb-5 text-5xl font-bold transition-opacity duration-700 ease-in"
                        :class="{
                            'opacity-100': isHero,
                            'opacity-0': !isHero,
                        }"
                    >
                        {{ $t('hero') }}
                    </h1>
                    <p
                        class="mb-5 transition-opacity duration-700 ease-in"
                        :class="{
                            'opacity-100': isContent,
                            'opacity-0': !isContent,
                        }"
                    >
                        {{ $t('heroDescription') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'landing',
})

const isHero = ref(false)
const isContent = ref(false)
setTimeout(() => {
    isHero.value = true
    setTimeout(() => {
        isContent.value = true
    }, 700)
}, 100)

onMounted(() => {
    VANTA.WAVES({
        el: '#background',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
    })
})
</script>

<style>
canvas {
    filter: blur(3px);
}
</style>

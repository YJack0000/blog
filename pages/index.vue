<template>
    <div>
        <!-- Built-in Header -->
        <Header
            class="absolute bg-transparent align-top text-neutral-content z-10"
        />
        <div
            id="background"
            class="items-top hero h-screen z-0"
        >
            <div class="hero-overlay bg-opacity-60 z-10"></div>
            <div class="hero-content text-center text-neutral-content z-20">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-5xl font-bold">{{ $t('hero') }}</h1>
                    <p class="mb-5">
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

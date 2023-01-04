<template>
    <div>
        <div class="breadcrumbs text-sm">
            <ul>
                <li><NuxtLink to="/">{{ $t('Home') }}</NuxtLink></li>
                <li><NuxtLink to="/about">{{ $t('About') }}</NuxtLink></li>
            </ul>
        </div>
        <div class="prose mt-12 max-w-none"></div>
    </div>
</template>

<template>
    <div>
        <div class="breadcrumbs text-sm">
            <ul>
                <li>
                    <NuxtLink to="/">{{ $t('Home') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">{{ $t('About') }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="prose mt-12 max-w-none">
            <h2>{{ $t('about.About Me') }}</h2>
            <p>{{ $t('about.about me content') }}</p>
            <h3>{{ $t('about.Experience') }}</h3>
            <ul>
                <li>{{ $t('about.Lary Technology') }}</li>
            </ul>
            <h3>{{ $t('about.Projects') }}</h3>
            <p>之後再放</p>
            <h3>{{ $t('about.Awards') }}</h3>
            <ul>
                <li>{{ $t('about.icpc2022') }}</li>
                <li>{{ $t('about.icpc2021') }}</li>
                <li>{{ $t('about.niag') }}</li>
            </ul>
            <h3>{{ $t('about.Education') }}</h3>
            <ul>
                <li>{{ $t('about.nycu') }}</li>
                <li>{{ $t('about.nccu') }}</li>
            </ul>
        </div>
    </div>
</template>

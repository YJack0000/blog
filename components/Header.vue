<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn-ghost btn lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-base-content shadow"
                >
                    <li v-for="link in middleLinks">
                        <NuxtLink
                            :to="link.link"
                            v-if="link.children"
                            tabindex="0"
                            class="justify-between"
                            >{{ link.name
                            }}<svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                                /></svg
                        ></NuxtLink>
                        <ul
                            v-if="link.children"
                            class="menu rounded-box border bg-base-100 p-2 shadow"
                        >
                            <li v-for="child in link.children">
                                <NuxtLink :to="child.link">{{
                                    child.name
                                }}</NuxtLink>
                            </li>
                        </ul>
                        <NuxtLink :to="link.link" v-else>{{
                            link.name
                        }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/" class="btn-ghost btn text-xl normal-case"
                >YJack0000 筆記</NuxtLink
            >
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li v-for="link in middleLinks">
                    <NuxtLink :to="link.link" v-if="link.children" tabindex="0"
                        >{{ link.name
                        }}<svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            /></svg
                    ></NuxtLink>
                    <ul
                        v-if="link.children"
                        class="menu rounded-box border bg-base-100 p-2 text-base-content shadow"
                    >
                        <li v-for="child in link.children">
                            <NuxtLink :to="child.link">{{
                                child.name
                            }}</NuxtLink>
                        </li>
                    </ul>
                    <NuxtLink :to="link.link" v-else>{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-hover">
                <label tabindex="0" class="btn m-1">
                    <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M11 1H3c-1.1 0-2 .9-2 2v12l3-3h5v-1c0-2.2 1.79-4 4-4V3c0-1.1-.9-2-2-2m0 3H9.5c-.34 1.19-.96 2.3-1.82 3.26l-.02.02l1.26 1.25l-.37 1.01L7 8l-2.5 2.5l-.69-.73l2.53-2.49A8.58 8.58 0 0 1 4.86 5h.99c.31.6.69 1.17 1.15 1.68A7.69 7.69 0 0 0 8.57 4H3V3h3.5V2h1v1H11v1m10 5h-8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7l3 3V11c0-1.1-.9-2-2-2m-1.37 10l-.85-2.25h-3.56L14.38 19h-1.5l3.37-9h1.5l3.38 9h-1.5M17 12l1.22 3.25h-2.43L17 12Z"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                >
                    <li @click="$i18n.locale = 'enUS'"><a>English</a></li>
                    <li @click="$i18n.locale = 'zhTW'"><a>繁體中文</a></li>
                </ul>
            </div>
            <NuxtLink class="btn-neutral btn" :to="'/contact'">{{
                $t('contact')
            }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const middleLinks = ref([
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Articles',
        link: '/articles',
    },
])
</script>

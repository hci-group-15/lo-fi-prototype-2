<template>
    <main>
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition ? String( route.meta.transition ) : 'fade'" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>

<style lang="scss">
    @use "@/scss/_main.scss";
</style>

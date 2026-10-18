<script setup lang="ts">
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import SidePanel from '@/components/SidePanel.vue';
    import {
        showAssetManger
    } from '@/ts/state';
</script>

<template>
    <div class="home-positioner">
        <AssetManager v-model="showAssetManger" />
        <div class="sidepanel-wrapper">
            <SidePanel />
        </div>
        <div class="main-wrapper">
            <h1>Hello World</h1>
            <div class="chat-input-wrapper">
                <input type="text" class="chat-input" placeholder="Ask Anything">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "@/scss/home/main.scss";
</style>

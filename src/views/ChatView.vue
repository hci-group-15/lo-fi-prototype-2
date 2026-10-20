<script setup lang="ts">
    import {
        showAssetManger,
        showBranchView
    } from '@/ts/state';
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import BranchTree from '@/components/popups/BranchTree.vue';
    import SidePanel from '@/components/SidePanel.vue';
</script>

<template>
    <div class="home-positioner">
        <AssetManager v-model="showAssetManger" />
        <BranchTree v-model="showBranchView" />
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

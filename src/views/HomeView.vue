<script setup lang="ts">
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import router from '@/router';

    const toChat = () => {
        router.push( '/chat' );
    };
</script>

<template>
    <div class="home-positioner">
        <button @click="toChat">
            To Chat
        </button>
        <AssetManager :items-per-line="7" />
    </div>
</template>

<script setup lang="ts">
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import router from '@/router';

    const toChat = ( id?: string ) => {
        router.push( '/chat' + ( id ? `?id=${ id }` : '' ) );
    };
</script>

<template>
    <div class="home-positioner">
        <h1>Lo-Fi Prototype</h1>
        <AssetManager :items-per-line="7" :emit-selection-event="true" :selection-callback="toChat" />
    </div>
</template>

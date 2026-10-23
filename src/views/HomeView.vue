<script setup lang="ts">
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import router from '@/router';

    const toChat = ( id?: string ) => {
        // NOTE: The ids are uuids for subject and will in the future be for the chat id.
        // Setting chat to -1 will (eventually, in the final prototype) fetch the most recent chat of a subject
        router.push( '/chat' + ( id ? `?subject=${ id }&chat=-1&branch=-1` : '' ) );
    };
</script>

<template>
    <div class="home-positioner">
        <h1>Lo-Fi Prototype</h1>
        <AssetManager :items-per-line="7" :emit-selection-event="true" :selection-callback="toChat" />
    </div>
</template>

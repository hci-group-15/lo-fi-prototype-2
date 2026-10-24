<script setup lang="ts">
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import FlashCards from '@/components/flashcards/FlashCards.vue';
    import router from '@/router';
    import {
        showFlashCardView
    } from '@/ts/state';

    const toChat = ( id?: string ) => {
        // NOTE: The ids are uuids for subject and will in the future be for the chat id.
        // Setting chat to -1 will (eventually, in the final prototype) fetch the most recent chat of a subject
        router.push( '/chat' + ( id ? `?subject=${ id }&chat=-1&branch=-1` : '' ) );
    };
</script>

<template>
    <div class="home-positioner">
        <FlashCards v-model="showFlashCardView" />
        <h1>My Subjects</h1>
        <AssetManager :items-per-line="7" :emit-selection-event="true" :selection-callback="toChat" />
    </div>
</template>

<style lang="scss" scoped>
.home-positioner {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

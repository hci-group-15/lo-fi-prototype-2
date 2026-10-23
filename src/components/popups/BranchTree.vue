<script setup lang="ts">
    import PopupElement from '../PopupElement.vue';

    const show = defineModel<boolean>( {
        'required': true
    } );
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <h2>A popup</h2>
        <p>This is a basic popup</p>
        <p>See the AssetManager for a more elaborate setup</p>
    </PopupElement>
</template>

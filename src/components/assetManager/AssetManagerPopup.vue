<script setup lang="ts">
    import AssetManager from './AssetManager.vue';
    import PopupElement from '../PopupElement.vue';

    const show = defineModel<boolean>( {
        'required': true
    } );
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="asset-manager-wrapper">
            <AssetManager />
        </div>
    </PopupElement>
</template>

<style lang="scss" scoped>
.asset-manager-wrapper {
  width: 60vw;
  height: 80vh;
}
</style>

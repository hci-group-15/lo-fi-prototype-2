<script setup lang="ts">
    import {
        type Ref,
        ref
    } from 'vue';
    import AssetManagerNavigationElement from './AssetManagerNavigationElement.vue';
    import type {
        Folder
    } from '@/ts/types';
    import PopupElement from '../PopupElement.vue';

    const show = defineModel<boolean>( {
        'required': true
    } );
    const folderPath: Ref<string[]> = ref( [
        '/',
        'Subject'
    ] );
    const availableFolders: Ref<Folder[]> = ref( [
        {
            'name': 'Subject 1',
            'items': 10,
            'modified': new Date()
        },
        {
            'name': 'Subject 2',
            'items': 20,
            'modified': new Date()
        }
    ] );

    const handleSelected = ( idx: number ) => {
        console.log( 'Selected', idx );
    };
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="asset-manager">
            <h2>Asset Manager</h2>
            <p>
                <!-- Renders the "/ > Subject > ..." -->
                <span v-for="(f, index) in folderPath" :key="index">{{ f }} > </span> ...
            </p>
            <div class="assets-list">
                <div v-for="(folder, index) in availableFolders" :key="index" @click="() => handleSelected( index )">
                    <AssetManagerNavigationElement :folder="folder" />
                </div>
            </div>
        </div>
    </PopupElement>
</template>

<style lang="scss">
@use '@/scss/asset-manager.scss';
</style>

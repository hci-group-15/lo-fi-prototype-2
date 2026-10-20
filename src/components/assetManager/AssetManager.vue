<script setup lang="ts">
    import {
        type Ref,
        ref
    } from 'vue';
    import AssetManagerNavigationElement from './AssetManagerNavigationElement.vue';
    import type {
        Folder
    } from '@/ts/types';

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
        // Use event listener to listen to selection
        console.log( 'Selected', idx );
    };

    const props = defineProps<{
        'itemsPerLine'?: number,
        'showPath'?: boolean,
    }>();
</script>

<template>
    <div class="asset-manager">
        <h2>Asset Manager</h2>
        <p v-if="props.showPath">
            <!-- Renders the "/ > Subject > ..." -->
            <span v-for="(f, index) in folderPath" :key="index">{{ f }} > </span> ...
        </p>
        <div class="assets-list">
            <div
                v-for="(folder, index) in availableFolders"
                :key="index"
                :style="`width: ${100 / (props.itemsPerLine ?? 4) - 2}%;`"
                @click="() => handleSelected( index )"
            >
                <AssetManagerNavigationElement :folder="folder" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/scss/asset-manager.scss';
</style>

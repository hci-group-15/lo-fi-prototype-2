<script setup lang="ts">
    import {
        type Ref,
        ref
    } from 'vue';
    import AssetManagerNavigationElement from './AssetManagerNavigationElement.vue';
    import type {
        Topic
    } from '@/ts/types';

    const folderPath: Ref<string[]> = ref( [
        '/',
        'Subject'
    ] );
    const availableFolders: Ref<Topic[]> = ref( [
        {
            'name': 'Subject 1',
            'id': 'subject1',
            'modified': new Date(),
            'completion': 0,
            'topics': []
        },
        {
            'name': 'Subject 2',
            'id': 'subject2',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        }
    ] );

    const handleSelected = ( idx: number ) => {
        // Use event listener to listen to selection
        const id = availableFolders.value[ idx ]!.id;

        if ( props.emitSelectionEvent ) {
            document.dispatchEvent( new CustomEvent( 'hci:select-subject', {
                'detail': id
            } ) );
        }

        if ( props.selectionCallback )
            props.selectionCallback( id );
    };

    const props = defineProps<{
        'itemsPerLine'?: number,
        'showPath'?: boolean,
        'emitSelectionEvent'?: boolean,
        'selectionCallback'?: ( id: string ) => void
    }>();
</script>

<template>
    <div class="asset-manager">
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

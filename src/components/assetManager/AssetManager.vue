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
            'name': 'Reaaalllllyyyy long subject name',
            'id': '31cbfd24-a2a6-4b84-b6d8-571798925ac9',
            'modified': new Date(),
            'completion': 0,
            'topics': []
        },
        {
            'name': 'Subject 2',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e1',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 3',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e2',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 3',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e3',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 4',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e4',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 5',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e5',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 6',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e6',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 7',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e7',
            'completion': 0,
            'modified': new Date(),
            'topics': []
        },
        {
            'name': 'Subject 8',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e8',
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
    <div v-if="$route.path === '/'" class="asset-manager">
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
    <div v-else class="asset-manager">
        <div class="assets-list-2">
            <div
                v-for="(folder, index) in availableFolders"
                :key="index"
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

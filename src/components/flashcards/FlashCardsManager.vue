<script setup lang="ts">
    import {
        type Ref,
        ref
    } from 'vue';
    import type {
        Flashcard
    } from '@/ts/types';

    const folderPath: Ref<string[]> = ref( [
        '/',
        'Subject'
    ] );
    const availableFlashcards: Ref<Flashcard[]> = ref( [
        {
            'name': 'Linear ODE with constant coefficients',
            'id': '31cbfd24-a2a6-4b84-b6d8-571798925ac9',
            'target': 'Understand and solve linear ordinary differential equations with constant coefficients',
            'hints' : ['characteristic polynomial', 'the choir where singers sing in harmony'],
            'modified': new Date(),
            'solvedCorrectly': 0,
            'topicId': null,
            'branchesIds' : []
        },
        {
            'name': 'Homogeneous versus non-homogeneous ODEs',
            'id': '8df639ac-be4d-4083-81de-6779b0dcc0e1',
            'target': 'Understand the difference between homogeneous and non-homogeneous ODEs',
            'hints' : ['the bank account where money either grows by interest rate only, or also has outside deposits'],
            'modified': new Date(),
            'solvedCorrectly': null,
            'topicId': 2,
            'branchesIds' : []
        }
    ] );

    const handleSelected = ( idx: number ) => {
        // Use event listener to listen to selection
        const id = availableFlashcards.value[ idx ]!.id;

        if ( props.emitSelectionEvent ) {
            document.dispatchEvent( new CustomEvent( 'hci:select-subject', {
                'detail': id
            } ) );
        }

        if ( props.selectionCallback )
            props.selectionCallback( id );
    };

    const props = defineProps<{
        'showPath'?: boolean,
        'emitSelectionEvent'?: boolean,
        'selectionCallback'?: ( id: string ) => void
    }>();
</script>

<template>
    <div class="flashcard-manager">
        <p v-if="props.showPath">
            <!-- Renders the "/ > Subject > ..." -->
            <span v-for="(f, index) in folderPath" :key="index">{{ f }} > </span> ...
        </p>
        <div class="flashcards-table-wrapper">
            <table class="flashcards-table">
                <thead>
                    <tr>
                        <th>Flashcard</th>
                        <th>Target</th>
                        <th>Hints</th>
                        <th>Last modified</th>
                        <th>Solved correctly</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(flashcard, index) in availableFlashcards"
                        :key="flashcard.id"
                        tabindex="0"
                        @click="handleSelected(index)"
                        @keydown.enter="handleSelected(index)"
                        @keydown.space.prevent="handleSelected(index)"
                    >
                        <td>{{ flashcard.name }}</td>
                        <td>{{ flashcard['target'] }}</td>
                        <td>{{ flashcard.hints.join(', ') }}</td>
                        <td>{{ flashcard.modified.toLocaleDateString() }}</td>
                        <td>{{ flashcard.solvedCorrectly ?? '—' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/scss/flashcard-manager.scss';
</style>

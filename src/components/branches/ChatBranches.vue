<script setup lang="ts">
    import PopupElement from '../PopupElement.vue';
    import type {
        TechTree
    } from '@/ts/techtree';
    import TreeRenderer from '../popups/TreeRenderer.vue';
    import {
        watch
    } from 'vue';

    const branchesGraph: TechTree = {
        'edges': [
            {
                'from': 0,
                'to': 1
            },
            {
                'from': 1,
                'to': 2
            },
            {
                'from': 1,
                'to': 3
            },
            {
                'from': 3,
                'to': 4
            }
        ],
        'nodes': [
            {
                'name': 'Start',
                'x': 0,
                'y': 0
            },
            {
                'name': 'Intro',
                'x': 0,
                'y': 50
            },
            {
                'name': 'Why?',
                'x': 0,
                'y': 100
            },
            {
                'name': 'Tangent',
                'x': -300,
                'y': 100
            },
            {
                'name': 'Continuation',
                'x': -300,
                'y': 150
            }
        ]
    };
    const show = defineModel<boolean>( {
        'required': true
    } );

    watch( show, () => {
        if ( show.value )
            setTimeout( () => {
                document.dispatchEvent( new CustomEvent( 'tree:redraw' ) );
            }, 200 );
    } );
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="branches-wrapper">
            <h2>Branches in this Chat</h2>
            <TreeRenderer prefix="chat-branches" :tech-tree="branchesGraph" />
        </div>
    </PopupElement>
</template>

<style lang="scss" scoped>
.branches-wrapper {
    width: 70vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>

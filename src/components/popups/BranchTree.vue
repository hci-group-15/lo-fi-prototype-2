<script setup lang="ts">
    import {
        type Ref,
        ref,
        watch
    } from 'vue';
    import PopupElement from '../PopupElement.vue';
    import type {
        TechTree
    } from '@/ts/techtree';
    import TreeRenderer from './TreeRenderer.vue';

    const show = defineModel<boolean>( {
        'required': true
    } );

    watch( show, () => {
        if ( show.value )
            setTimeout( () => {
                document.dispatchEvent( new CustomEvent( 'tree:redraw' ) );
            }, 200 );
    } );
    const techTree: Ref<TechTree> = ref( {
        'nodes': [
            {
                'name': 'Topic 0',
                'x': 0,
                'y': 0
            },
            {
                'name': 'Topic 1',
                'x': -150,
                'y': 50
            },
            {
                'name': 'Topic 2',
                'x': 150,
                'y': 50
            },
            {
                'name': 'Topic 3',
                'x': 0,
                'y': 100
            },
            {
                'name': 'Topic 4',
                'x': -300,
                'y': 100
            }
        ],
        'edges': [
            {
                'from': 0,
                'to': 1
            },
            {
                'from': 0,
                'to': 2
            },
            {
                'from': 2,
                'to': 3
            },
            {
                'from': 1,
                'to': 3
            },
            {
                'from': 1,
                'to': 4
            }
        ]
    } );
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="branch-tree">
            <h2>Branches</h2>
            <TreeRenderer prefix="branches" :tech-tree="techTree" />
        </div>
    </PopupElement>
</template>

<style lang="scss" scoped>
.branch-tree {
    width: 80vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>

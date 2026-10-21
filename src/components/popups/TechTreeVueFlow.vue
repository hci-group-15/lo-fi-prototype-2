<script setup lang="ts">
    import {
        type Edge,
        type Node,
        VueFlow,
        useVueFlow
    } from '@vue-flow/core';
    import {
        type Ref,
        nextTick,
        ref
    } from 'vue';
    import {
        useLayout
    } from '@/ts/graph';

    const nodes: Ref<Node[]> = ref( [
        {
            'id': '1',
            'position': {
                'x': 0,
                'y': 0
            },
            'data': {
                'label': 'Node 1'
            }
        },
        {
            'id': '2',
            'position': {
                'x': 0,
                'y': 0
            },
            'data': {
                'label': 'Node 2'
            }
        },
        {
            'id': '3',
            'position': {
                'x': 0,
                'y': 0
            },
            'data': {
                'label': 'Node 3'
            }
        }
    ] );
    const edges: Ref<Edge[]> = ref( [
        {
            'id': 'e1->3',
            'source': '1',
            'target': '3'
        },
        {
            'id': 'e1->2',
            'source': '1',
            'target': '2'
        }
    ] );
    const {
        layout
    } = useLayout();
    const {
        fitView
    } = useVueFlow();

    async function layoutGraph ( direction: 'LR' | 'TD' ) {
        nodes.value = layout( nodes.value, edges.value, direction );

        nextTick( () => {
            fitView();
        } );
    }
</script>

<template>
    <div class="tech-tree">
        <VueFlow :nodes="nodes" :edges="edges" @nodes-initialized="layoutGraph( 'TD' )" />
    </div>
</template>

<style lang="scss">
.tech-tree {
    width: 100vw;
    height: 100vh
}
@import '@vue-flow/core/dist/style.css';
</style>

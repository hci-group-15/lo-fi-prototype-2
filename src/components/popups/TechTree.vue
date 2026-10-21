<script setup lang="ts">
    import {
        type Ref,
        computed,
        onMounted,
        ref
    } from 'vue';
    import type {
        TechTree
    } from '@/ts/techtree';

    const props = defineProps<{
        'prefix': string
    }>();
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
    const containerCentreHorizontal = ref( window.innerWidth / 2 );
    const nodeHeight = 30; // This will remain a fixed value in high-fidelity prototype (but computed from the first node automatically)
    const nodeWidth = 200; // in high fidelity prototype, this will be computed automatically ofc
    const topOffset = 50; // This could also be controller automatically in the future

    onMounted( () => {
        containerCentreHorizontal.value = document.getElementById( props.prefix )!.getBoundingClientRect().width / 2;
    } );

    const edgeStyle = computed( () => {
        return ( idx: number ) => {
            const node1 = techTree.value.nodes[techTree.value.edges[idx]!.from]!;
            const node2 = techTree.value.nodes[techTree.value.edges[idx]!.to]!;
            const x = node1.x + containerCentreHorizontal.value;
            const y = nodeHeight + node1.y + topOffset;
            const x2 = node2.x + containerCentreHorizontal.value;
            const y2 = node2.y + topOffset;
            const width = Math.sqrt( Math.pow( x - x2, 2 ) + Math.pow( y - y2, 2 ) );
            const angle = Math.acos( -( x - x2 ) / width );

            return `top: ${ y }px; left: ${ x + ( x > x2 ? ( x2 - x ) : 0 ) }px; transform: rotate(${ angle }rad); width: ${ width }px`;
        };
    } );
</script>

<template>
    <div :id="props.prefix" class="tech-tree-container">
        <div
            v-for="(edge, idx) in techTree.edges"
            :id="props.prefix + '-edge-' + edge.from + '-' + edge.to"
            :key="idx"
            :style="edgeStyle( idx )"
            class="tree-edge"
        >
        </div>
        <div
            v-for="(node, idx) in techTree.nodes"
            :id="props.prefix + '-node-' + idx"
            :key="idx"
            :style="`top: ${node.y + topOffset}px; left: ${node.x + containerCentreHorizontal - (nodeWidth / 2)}px;
            width: ${nodeWidth}px; height: ${nodeHeight}`"
            class="tree-node"
        >
            {{ node.name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/components/tech-tree.scss';
</style>

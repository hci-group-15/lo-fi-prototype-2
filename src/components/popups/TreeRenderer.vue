<script setup lang="ts">
    import {
        computed,
        onMounted,
        onUnmounted,
        ref
    } from 'vue';
    import type {
        TechTree
    } from '@/ts/techtree';

    const props = defineProps<{
        'prefix': string,
        'techTree': TechTree,
        'nodeClickAction'?: ( id: number ) => void
    }>();
    const currentTopicName = 'Topic 3';
    // let's highlight the current topic in a different colour to help navigation
    const containerCentreHorizontal = ref( window.innerWidth / 2 );
    const nodeHeight = 35; // This will remain a fixed value in high-fidelity prototype (but computed from the first node automatically)
    const nodeWidth = 200; // in high fidelity prototype, this will be computed automatically ofc
    const topOffset = 50; // This could also be controller automatically in the future

    const computeSizing = () => {
        containerCentreHorizontal.value = document.getElementById( props.prefix )!.getBoundingClientRect().width / 2;
    };

    onMounted( () => {
        computeSizing();
        document.addEventListener( 'tree:redraw', computeSizing );
    } );

    onUnmounted( () => {
        document.removeEventListener( 'tree:redraw', computeSizing );
    } );

    const edgeStyle = computed( () => {
        return ( idx: number ) => {
            const node1 = props.techTree.nodes[props.techTree.edges[idx]!.from]!;
            const node2 = props.techTree.nodes[props.techTree.edges[idx]!.to]!;
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
            width: ${nodeWidth}px; height: ${nodeHeight}px`"
            :class="{
                'current-topic': node.name === currentTopicName,
                'completed': node.completed
            }"
            class="tree-node"
            @click="() => props.nodeClickAction ? props.nodeClickAction( idx ) : undefined"
        >
            {{ node.name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/components/tech-tree.scss';
</style>

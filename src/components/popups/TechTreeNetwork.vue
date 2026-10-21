<script setup lang="ts">
    import * as vis from 'vis-network';
    import {
        onMounted
    } from 'vue';

    // create an array with nodes
    const nodes: vis.Node[] = [
        {
            'id': 1,
            'label': 'Node 1'
        },
        {
            'id': 2,
            'label': 'Node 2'
        },
        {
            'id': 3,
            'label': 'Node 3'
        },
        {
            'id': 4,
            'label': 'Node 4'
        },
        {
            'id': 5,
            'label': 'Node 5',
            'chosen': true
        }
    ];
    // create an array with edges
    const edges: vis.Edge[] = [
        {
            'from': 1,
            'to': 2
        },
        {
            'from': 1,
            'to': 3
        },
        {
            'from': 1,
            'to': 5
        },
        {
            'from': 2,
            'to': 4
        },
        {
            'from': 3,
            'to': 5
        },
        {
            'from': 4,
            'to': 5
        }
    ];

    onMounted( () => {
        // create a network
        const container = document.getElementById( 'container' )!;
        const data: vis.Data = {
            'nodes': nodes,
            'edges': edges
        };
        const options: vis.Options = {
            'edges': {
                'arrows': {
                    'to': true
                }
            },
            'layout': {
                'randomSeed': 0
            }
        };
        const network = new vis.Network( container, data, options );
    } );
</script>

<template>
    <div id="container" class="tech-tree">
    </div>
</template>

<style lang="scss">
.tech-tree {
    width: 100vw;
    height: 100vh;
}
</style>

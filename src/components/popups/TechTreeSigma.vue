<script setup lang="ts">
    // Using https://github.com/jacomyal/sigma.js
    import Graph from 'graphology';
    import Sigma from 'sigma';
    import {
        onMounted
    } from 'vue';
    import {
        sdfSquare
    } from 'sigma/rendering';

    const graph = new Graph();

    graph.addNode( '1', {
        'label': 'Node 1',
        'x': 1,
        'y': 10
    } );
    graph.addNode( '2', {
        'label': 'Node 2',
        'x': 1,
        'y': 0
    } );
    graph.addNode( '3', {
        'label': 'Node 3',
        'x': 1,
        'y': -5
    } );
    graph.addEdge( '1', '2', {
        'size': 0.01,
        'color': 'purple'
    } );

    onMounted( () => {
        const sigmaInstance = new Sigma( graph, document.getElementById( 'container' )!, {
            'primitives': {
                'nodes': {
                    'shapes': [ sdfSquare() ]
                }
            },
            'styles': {
                'nodes': [ {
                    'shape': 'square',
                    'color': {
                        'attribute': 'color'
                    },
                    'size': {
                        'attribute': 'size'
                    }
                } ]
            }
        } );
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

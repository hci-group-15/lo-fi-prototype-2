<!-- note to self: this is the old nested topic structure with colour gradients. The new tech tree is in popups -->
<script setup lang="ts">
    import type {
        Topic
    } from '@/ts/types';
    import {
        gradientCols
    } from '@/ts/theme';

    const props = defineProps<{
        'topics': Topic[]
    }>();

</script>

<template>
    <div class="tree-container">
        <div v-for="(topic, idx) in props.topics" :key="idx" class="tree-element">
            <svg width="50" height="20">
                <line
                    x1="0"
                    y1="10"
                    x2="50"
                    y2="10"
                    stroke="black"
                />
                <line
                    x1="40"
                    y1="5"
                    x2="50"
                    y2="10"
                    stroke="black"
                />
                <line
                    x1="40"
                    y1="15"
                    x2="50"
                    y2="10"
                    stroke="black"
                />
            </svg>
            <p
                :style="`background: linear-gradient(90deg, ${gradientCols.start} ${topic.completion * 100}%,
                ${gradientCols.end} ${Math.max(topic.completion * 100 + 10, 100)}%);`"
            >
                {{ topic.name }}
            </p>

            <TreeRenderer :topics="topic.topics" />
        </div>
    </div>
</template>

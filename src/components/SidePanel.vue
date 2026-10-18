<script setup lang="ts">
    import {
        type Ref,
        ref
    } from 'vue';
    import type {
        Topic
    } from '@/ts/types';
    import TreeRenderer from './TreeRenderer.vue';
    import {
        showAssetManger
    } from '@/ts/state';

    const openAssetManager = () => {
        showAssetManger.value = true;
    };

    // Define subjects to render
    const subjects: Ref<Topic[]> = ref( [ {
        'name': 'Analysis',
        'completion': 0.5,
        'topics': [
            {

                'name': 'ODEs',
                'completion': 1,
                'topics': []
            },
            {

                'name': 'Differentiation',
                'completion': 1,
                'topics': []
            },
            {

                'name': 'Integration',
                'completion': 0.5,
                'topics': [ {
                    'name': 'Line Integral',
                    'completion': 0.7,
                    'topics': []
                } ]
            }
        ]
    } ] );
</script>

<template>
    <div class="side-panel">
        <button id="asset-manager" @click="openAssetManager">
            <i class="fa-solid fa-file-pen"></i>
        </button>
        <div v-for="(subject, subjectIdx) in subjects" :key="subjectIdx" class="subject">
            <p
                :style="`background: linear-gradient(90deg, #3FD421 ${subject.completion * 100}%,
                    #ffffff ${Math.max(subject.completion * 100 + 10, 100)}%);`"
            >
                {{ subject.name }}
            </p>
            <span></span>

            <div v-for="(topic, topicIdx) in subject.topics" :key="topicIdx" class="topic">
                <p
                    :style="`background: linear-gradient(90deg, #3FD421 ${topic.completion * 100}%,
                    #ffffff ${Math.max(topic.completion * 100 + 10, 100)}%);`"
                >
                    {{ topic.name }}
                </p>
                <!-- Render any extra topics in top-down tree graph -->
                <TreeRenderer :topics="topic.topics" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '@/scss/sidepanel/main.scss';
</style>

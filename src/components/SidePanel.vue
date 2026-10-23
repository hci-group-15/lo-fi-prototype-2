<script setup lang="ts">
    import {
        type Ref,
        ref
    } from 'vue';
    import {
        showAssetManger,
        showBranchView
    } from '@/ts/state';
    import type {
        Topic
    } from '@/ts/types';
    import TreeRenderer from './TreeRenderer.vue';
    import {
        gradientCols
    } from '@/ts/theme';
    import router from '@/router';

    const openAssetManager = () => {
        showAssetManger.value = true;
    };

    const openBranchView = () => {
        showBranchView.value = true;
    };

    const backToOverview = () => {
        router.push( '/' );
    };

    // Define subjects to render
    const subjects: Ref<Topic[]> = ref( [ {
        'name': 'Analysis',
        'completion': 0.5,
        'id': 'ea6db2d2-7ce0-4874-a3e9-c875aa0d3e21',
        'modified': new Date(),
        'topics': [
            {
                'name': 'ODEs',
                'completion': 1,
                'id': '6847829b-a76a-4108-bd72-d884d53231a1',
                'modified': new Date(),
                'topics': []
            },
            {
                'name': 'Differentiation',
                'completion': 1,
                'id': 'ffd0d1e2-d786-4a35-aae1-27ebc4846e48',
                'modified': new Date(),
                'topics': []
            },
            {
                'name': 'Integration',
                'completion': 0.5,
                'id': 'uuid',
                'modified': new Date(),
                'topics': [ {
                    'name': 'Line Integral',
                    'completion': 0.7,
                    'id': '08952403-459f-47c5-9896-7a09a2e771a6',
                    'modified': new Date(),
                    'topics': []
                } ]
            }
        ]
    } ] );
</script>

<template>
    <div class="side-panel">
        <button id="asset-manager" @click="backToOverview">
            <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button id="asset-manager" @click="openAssetManager">
            <i class="fa-solid fa-file-pen"></i>
        </button>
        <button id="asset-manager" @click="openBranchView">
            <i class="fa-solid fa-code-branch"></i>
        </button>
        <div v-for="(subject, subjectIdx) in subjects" :key="subjectIdx" class="subject">
            <p
                :style="`background: linear-gradient(90deg, ${gradientCols.start} ${subject.completion * 100}%,
                ${gradientCols.end} ${Math.max(subject.completion * 100 + 10, 100)}%);`"
            >
                {{ subject.name }}
            </p>
            <span></span>

            <div v-for="(topic, topicIdx) in subject.topics" :key="topicIdx" class="topic">
                <p
                    :style="`background: linear-gradient(90deg, ${gradientCols.start} ${topic.completion * 100}%,
                    ${gradientCols.end} ${Math.max(topic.completion * 100 + 10, 100)}%);`"
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

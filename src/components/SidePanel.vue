<script setup lang="ts">
    import {
        type Ref, ref
    } from 'vue';
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import FlashCards from '@/components/flashcards/FlashCards.vue';
    import FlashCardsManager from './flashcards/FlashCardsManager.vue';
    import type {
        TechTree
    } from '@/ts/techtree';
    import TreeRenderer from '@/components/popups/TreeRenderer.vue';
    import router from '@/router';
    import {
        showSearchView
    } from '@/ts/state';

    type SidePanelView = 'assets' | 'branches' | 'flashcards-manager' | null;
    const activePanel = defineModel<SidePanelView>( {
        'required': true
    } );
    const emit = defineEmits<{
        'resize': [ delta: number ]
    }>();

    const togglePanel = ( panel: Exclude<SidePanelView, null> ) => {
        activePanel.value = activePanel.value === panel ? null : panel;
    };

    const backToOverview = () => {
        router.push( '/' );
    };

    const showFlashcards = ref( false );

    const openFlashcards = () => {
        showFlashcards.value = true;
    };

    let lastPointerX = 0;
    let isResizing = false;

    const startResize = ( event: PointerEvent ) => {
        if ( event.button !== 0 )
            return;

        lastPointerX = event.clientX;
        isResizing = true;

        if ( event.currentTarget instanceof HTMLElement )
            event.currentTarget.setPointerCapture( event.pointerId );
    };

    const resize = ( event: PointerEvent ) => {
        if ( !isResizing )
            return;

        const delta = event.clientX - lastPointerX;

        lastPointerX = event.clientX;

        if ( delta !== 0 )
            emit( 'resize', delta );
    };

    const stopResize = () => {
        isResizing = false;
    };

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

    const openSearch = () => {
        showSearchView.value = true;
    };
</script>

<template>
    <div class="side-panel">
        <nav class="sidepanel-rail" aria-label="Sidebar">
            <button
                class="sidepanel-nav-button"
                aria-label="Back to overview"
                @click="backToOverview"
            >
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button
                class="sidepanel-nav-button"
                aria-label="Asset manager"
                :aria-pressed="activePanel === 'assets'"
                @click="togglePanel('assets')"
            >
                <i class="fa-solid fa-file-pen"></i>
            </button>
            <button
                class="sidepanel-nav-button"
                aria-label="Branches"
                :aria-pressed="activePanel === 'branches'"
                @click="togglePanel('branches')"
            >
                <i class="fa-solid fa-code-branch"></i>
            </button>
            <button
                class="sidepanel-nav-button"
                aria-label="Flashcard manager"
                :aria-pressed="activePanel === 'flashcards-manager'"
                @click="togglePanel('flashcards-manager')"
            >
                <img class="sidepanel-icon" src="/flashcards2.svg" alt="">
            </button>
            <button
                class="sidepanel-nav-button"
                aria-label="Search"
                @click="openSearch"
            >
                <i class="fa-solid fa-search"></i>
            </button>
        </nav>

        <aside v-if="activePanel" class="sidepanel-content">
            <button
                class="sidepanel-close"
                aria-label="Close sidepanel"
                @click="activePanel = null"
            >
                X
            </button>
            <AssetManager v-if="activePanel === 'assets'" />
            <template v-else-if="activePanel === 'flashcards-manager'">
                <FlashCardsManager />
                <button
                    class="open-flashcards"
                    @click="openFlashcards"
                >
                    Start review!
                </button>
            </template>
            <template v-else-if="activePanel === 'branches'">
                <h2>Branches</h2>
                <TreeRenderer prefix="branches" :tech-tree="techTree" />
                <button
                    class="open-flashcards"
                    @click="openFlashcards"
                >
                    Start review!
                </button>
            </template>
        </aside>

        <FlashCards v-model="showFlashcards" />

        <div
            v-if="activePanel"
            class="sidepanel-resize-handle"
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize sidepanel"
            @pointerdown="startResize"
            @pointermove="resize"
            @pointerup="stopResize"
            @pointercancel="stopResize"
            @lostpointercapture="stopResize"
        ></div>
    </div>
</template>

<style lang="scss">
    @use '@/scss/sidepanel/main.scss';
</style>

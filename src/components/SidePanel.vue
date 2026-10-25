<script setup lang="ts">
    import AssetManager from '@/components/assetManager/AssetManager.vue';
    import TreeRenderer from '@/components/popups/TreeRenderer.vue';
    import router from '@/router';

    type SidePanelView = 'assets' | 'branches' | null;
    const activePanel = defineModel<SidePanelView>( {
        'required': true
    } );
    const emit = defineEmits<{
        resize: [ delta: number ]
    }>();

    const togglePanel = ( panel: Exclude<SidePanelView, null> ) => {
        activePanel.value = activePanel.value === panel ? null : panel;
    };

    const backToOverview = () => {
        router.push( '/' );
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
            <template v-else>
                <h2>Branches</h2>
                <TreeRenderer prefix="branches" />
            </template>
        </aside>
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

<script setup lang="ts">
    import {
        type Ref,
        onMounted,
        onUnmounted,
        ref
    } from 'vue';
    import ChatAddBranch from '@/components/branches/ChatAddBranch.vue';
    import ChatBranches from '@/components/branches/ChatBranches.vue';
    import type {
        ChatMessagePair
    } from '@/ts/types';
    import ChatRenderer from '@/components/branches/ChatRenderer.vue';
    import SidePanel from '@/components/SidePanel.vue';
    import {
        showChatBranches
    } from '@/ts/state';
    type SidePanelView = 'assets' | 'branches' | 'flashcards-manager' | null;
    const activeSidePanel = ref<SidePanelView>( null );
    const sidePanelWidth = ref( 250 );
    const minSidePanelWidth = 220;
    const maxSidePanelWidth = 600;
    const showAddBranch = ref( false );

    const openAddBranchPopup = () => {
        showAddBranch.value = true;
    };

    const showBranches = () => {
        showChatBranches.value = true;
    };

    
    const resizeSidePanel = ( delta: number ) => {
        sidePanelWidth.value = Math.min(
            maxSidePanelWidth,
            Math.max( minSidePanelWidth, sidePanelWidth.value + delta )
        );
    };

    const msgs: Ref<ChatMessagePair> = ref(
        {
            'question': 'Give me a summary of this one topic por favor',
            'response': `Sure! here is a summary of ...
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            'summary': '',
            'branches': [],
            'child': {
                'question': 'What does ... mean?',
                'response': '...'
            }
        }
    );

    onMounted( () => {
        document.addEventListener( 'branch:add:start', openAddBranchPopup );
        document.addEventListener( 'branch:overview:open', openAddBranchPopup );
    } );

    onUnmounted( () => {
        try {
            document.removeEventListener( 'branch:add:start', showBranches );
        } catch { /* empty */ }

        try {
            document.removeEventListener( 'branch:overview:open', showBranches );
        } catch { /* empty */ }
    } );
</script>

<template>
    <div
        class="chat-positioner"
        :class="{ 'sidepanel-open': activeSidePanel !== null }"
        :style="{ '--sidepanel-width': `${sidePanelWidth}px` }"
    >
        <ChatBranches v-model="showChatBranches" />
        <ChatAddBranch v-model="showAddBranch" />
        <div class="sidepanel-wrapper">
            <SidePanel v-model="activeSidePanel" @resize="resizeSidePanel" />
        </div>
        <div class="main-wrapper">
            <ChatRenderer :message="msgs" />
            <div class="chat-input-wrapper">
                <i class="fa-solid fa-plus" title="Attach files"></i>
                <input
                    type="text"
                    class="chat-input"
                    placeholder="Ask Anything"
                >
                <i class="fa-solid fa-arrow-up" title="Send message"></i>
                <i class="fa-solid fa-code-branch" title="Branches" @click="showBranches"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use "@/scss/pages/chat.scss";
</style>

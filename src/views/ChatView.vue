<script setup lang="ts">
    import { ref } from 'vue';
    import SidePanel from '@/components/SidePanel.vue';
    type SidePanelView = 'assets' | 'branches' | null;
    const activeSidePanel = ref<SidePanelView>( null );
</script>

<template>
    <div
        class="chat-positioner"
        :class="{ 'sidepanel-open': activeSidePanel !== null }"
    >
        <div class="sidepanel-wrapper">
            <SidePanel v-model="activeSidePanel" />
        </div>
        <div class="main-wrapper">
            <div class="chat-messages-wrapper">
                <p class="chat-messages-human">
                    Give me a summary of this one topic por favor
                </p>
                <p class="chat-messages-bot">
                    Sure! here is a summary of ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <input type="text" class="chat-input" placeholder="Ask Anything">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "@/scss/pages/chat.scss";
</style>

<script setup lang="ts">
    import PopupElement from '../PopupElement.vue';
    import type {
        TechTree
    } from '@/ts/techtree';
    import TreeRenderer from '../popups/TreeRenderer.vue';

    const branchesGraph: TechTree = {
        'edges': [],
        'nodes': []
    };
    const show = defineModel<boolean>( {
        'required': true
    } );
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="branches-wrapper">
            <h2>Branches in this Chat</h2>
            <TreeRenderer prefix="chat-branches" :tech-tree="branchesGraph" />
        </div>
    </PopupElement>
</template>

<style lang="scss" scoped>
.branches-wrapper {
    width: 70vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>

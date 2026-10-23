<script setup lang="ts">
    import PopupElement from '../PopupElement.vue';
    import TreeRenderer from './TreeRenderer.vue';

    const show = defineModel<boolean>( {
        'required': true
    } );
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="branch-tree">
            <h2>Branches</h2>
            <TreeRenderer prefix="branches" />
        </div>
    </PopupElement>
</template>

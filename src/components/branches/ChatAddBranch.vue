<script setup lang="ts">
    import PopupElement from '../PopupElement.vue';

    const show = defineModel<boolean>( {
        'required': true
    } );

    const createBranch = () => {
        show.value = false;
    };
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="chat-add-branch">
            <h2>Create Branch</h2>
            <input type="text" placeholder="Branch name">
            <button @click="createBranch">
                Add
            </button>
        </div>
    </PopupElement>
</template>

<style lang="scss" scoped>
.chat-add-branch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >input {
        padding: 5px;
        font-size: 1rem;
        background-color: transparent;
        color: var(--theme-on-app);
        border: solid 1px var(--theme-on-app);
        border-radius: 10px;
        margin-bottom: 10px;
        outline: none;
    }
}
</style>

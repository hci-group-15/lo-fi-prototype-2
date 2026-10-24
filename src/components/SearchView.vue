<script setup lang="ts">
    import {
        onMounted,
        onUnmounted,
        ref,
        useTemplateRef
    } from 'vue';

    const isOpen = ref( false );
    const searchBox = useTemplateRef( 'search-box' );
    const cmd = ref( '' );

    const keyHandler = ( ev: KeyboardEvent ) => {
        if ( ev.ctrlKey && ev.key === ' ' ) {
            isOpen.value = !isOpen.value;

            if ( isOpen.value ) {
                searchBox.value?.focus();
            }
        }
    };

    const inputKeyHandler = ( ev: KeyboardEvent ) => {
        if ( ev.key === 'Escape' ) {
            if ( cmd.value.length > 0 )
                cmd.value = '';
            else
                isOpen.value = false;
        }
    };

    onMounted( () => {
        document.addEventListener( 'keydown', keyHandler );
        searchBox.value?.addEventListener( 'keydown', inputKeyHandler );
    } );

    onUnmounted( () => {
        try {
            document.removeEventListener( 'keydown', keyHandler );
        } catch { /* empty */ }

        try {
            searchBox.value?.removeEventListener( 'keydown', inputKeyHandler );
        } catch { /* empty */ }
    } );
</script>

<template>
    <div :class="['search', isOpen ? undefined : 'hidden' ]">
        <div class="search-backdrop"></div>
        <div class="search-main">
            <input
                ref="search-box"
                v-model="cmd"
                type="text"
                placeholder="Search subjects, chats, open panels, execute operations, ..."
            >
            <div class="results">
                <p>Subject 1</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/scss/components/search.scss';
</style>

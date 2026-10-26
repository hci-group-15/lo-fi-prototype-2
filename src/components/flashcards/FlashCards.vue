<script setup lang="ts">
    import PopupElement from '../PopupElement.vue';
    import {
        ref
    } from 'vue';

    const show = defineModel<boolean>( {
        'required': true
    } );
    const showHint = ref( false );

    const check = () => {
        showHint.value = true;
    };
</script>

<template>
    <PopupElement v-model="show" :show-close="true">
        <div class="flash-cards-content">
            <h2>Revise Content</h2>
            <div class="question">
                <p>Explain how you would go about solving a Linear ODE with constant coefficients</p>
            </div>
            <textarea placeholder="Your answer"></textarea>
            <button @click="check">
                Check
            </button>

            <div v-if="showHint" class="hint">
                Not quite correct. Hint: Remember the characteristic polynomial?
            </div>
        </div>
    </PopupElement>
</template>

<style lang="scss" scoped>
    @use '@/scss/components/flash-cards.scss';
</style>

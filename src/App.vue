<script setup lang="ts">
    import { ref } from 'vue';
import MainView from './views/MainView.vue';

    const names = ["one", "two"]
    let name2: string = ""

    const func = ( param: Map<string, string> ) => {}

    interface MyInterface {
        funct: ( param: Map<string, string> ) => void
    }

    const obj: MyInterface = {
        "funct": func
    }

    const clicked = ref( false );
</script>

<template>
    <div class="grid">
        <div class="side">
            <p>Subject</p>
        </div>
        <div class="main">
            <p>chat</p>
        </div>
    </div>
    <i class="fa-solid fa-circle"></i>
    <MainView :test="clicked" v-model="clicked"></MainView>
    <div class="my-class">
        <p @click="() => func">Integration</p>
        <div v-for="(item, index) in names" :key="index">
            <p v-if="item === 'one'">Hello World</p>
            {{ item }}
        </div>
        <div :class="[ clicked ? 'test' : undefined ]">
            <p>Line Integral</p>
            <p>Riemann Integral</p>
        </div>
    </div>
    <h1 id="title">You did it!</h1>
    <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
    </p>
</template>

<style lang="scss">
    @use "@/scss/main.scss";
</style>

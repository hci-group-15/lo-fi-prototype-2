<script setup lang="ts">
    import router from '@/router';

    const toChat = () => {
        router.push( '/chat' );
    };
</script>

<template>
    <div class="home-positioner">
        <button @click="toChat">
            To Chat
        </button>
    </div>
</template>

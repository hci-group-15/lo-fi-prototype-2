<script setup lang="ts">
    import type {
        Topic
    } from '@/ts/types';


    const props = defineProps<{
        'folder': Topic
    }>();
</script>

<template>
    <i class="fa-solid fa-folder"></i>
    <div>
        <h3>{{ props.folder.name }}</h3>
        <div>
            <p>{{ props.folder.modified.toDateString() }}</p>
            <p class="last">
                {{ props.folder.topics.length }}
            </p>
        </div>
    </div>
</template>

<!-- Style is managed in scss/asset-manager.scss -->

<script setup lang="ts">
    import type {
        Folder
    } from '@/ts/types';

    const props = defineProps<{
        'folder': Folder
    }>();
</script>

<template>
    <i class="fa-solid fa-folder"></i>
    <div>
        <h3>{{ props.folder.name }}</h3>
        <div>
            <p>{{ props.folder.modified.toDateString() }}</p>
            <p class="last">
                {{ props.folder.items }}
            </p>
        </div>
    </div>
</template>

<!-- Style is managed in scss/asset-manager.scss -->

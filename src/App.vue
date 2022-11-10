<script setup lang="ts">
const count = ref(5)

const create = () => {
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: count.value } }, '*')
}

const cancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
</script>

<template>
    <h2 class="color-red">Rectangle Creator</h2>
    <p class="p-10px">Count: <input v-model="count" /></p>
    <button @click="create">Create</button>
    <button @click="cancel">Cancel</button>
</template>

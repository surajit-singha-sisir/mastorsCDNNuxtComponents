<!-- components/Card.vue -->
<template>
    <div :class="['card', { 'card--shadow': shadow }]" :style="{ backgroundColor: bgColor }">
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    shadow?: boolean;
    bgColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
    shadow: true,
    bgColor: '#ffffff',
});
</script>

<style scoped>
.card {
    padding: 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.card--shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
<!-- App.vue -->
<template>
    <div>
        <h1>My Vue App</h1>
        <Card>
            <p>This is a default card with shadow.</p>
        </Card>
        <Card :shadow="false" bg-color="#e0f7fa">
            <p>This card has no shadow and a custom background.</p>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card } from '~/lib/index.ts';
</script>
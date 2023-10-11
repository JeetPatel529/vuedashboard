<template>
    <div class="block w-full">
        <p class="text-md font-semibold mb-3.5">{{ section_title }}</p>
        <ul class="space-y-3">
            <component v-for="item in items" :key="item.id" :is="component" :item="item" />
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            section_title: String,
            component: String,
            items: {
                type: Array,
                required: true
            },
            created() {
                console.log('Items received in child component:', this.items);
            }
        },
    };
</script>
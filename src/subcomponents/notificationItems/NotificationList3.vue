<script>
    export default {
        props: {
            contact: {
                type: Object,
                required: true
            }
        }
    };
</script>


<template>




    <li class="flex  items-center space-x-3">
        <img :src="contact.avatar" class="w-8 h-8 rounded-full  object-cover">
        <p class="line-clamp-1">{{contact.name}}</p>
    </li>




</template>
<script>
    export default {
        props: {
            activitie: {
                type: Object,
                required: true
            }
        }
    };
</script>


<template>




    <li class="flex  items-start space-x-3">


        <img :src="activitie.avatar" class="w-7 h-7 rounded-full mt-1.5 object-cover">
        <div class="">
            <p class="line-clamp-1">{{activitie.message}}</p>
            <small class="block color-black3 color-white2">{{activitie.time}}</small>
        </div>


    </li>


</template>
<script>
    import { RouterLink, RouterView } from 'vue-router'
    import LeftSidebar from "../components/LeftSidebar.vue";
    import MainHeader from "../components/MainHeader.vue";
    import RightSidebar from "../components/RightSidebar.vue";

    export default {
        components: {
            LeftSidebar,
            MainHeader,
            RightSidebar
        }
    }
</script>

<template>
    <main class="w-full flex h-auto  items-stretch bg-white dark:bg-[#1C1C1C]">
        <LeftSidebar />
        <section class="w-full main_Content">
            <MainHeader />
            <RouterView />
        </section>
        <RightSidebar />
    </main>
</template>
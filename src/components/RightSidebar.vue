<template>
    <aside class="sidebars rightSideBar rightSideBar_active">


        <!-- <div class="space-y-6 block">

            <NotificationSection section_title="Notifications" :items="notifications" component="NotificationList1" />

            <NotificationSection section_title="Activities" :items="Activities" component="NotificationList2" />

            <NotificationSection section_title="Contacts" :items="Contacts" component="NotificationList3" />

        </div> -->





        <div class="space-y-6 block">

            <div class="block w-full">

                <p class="text-md font-semibold mb-3.5">Notifications</p>

                <ul class="space-y-3">
                    <NotificationList1 v-for="notification in notifications" :key="notification.id"
                        :notification="notification" />
                </ul>

            </div>

            <div class="block w-full">

                <p class="text-md font-semibold mb-3.5">Activities</p>

                <ul class="space-y-3">
                    <NotificationList2 v-for="activitie in Activities" :key="activitie.id" :activitie="activitie" />
                </ul>

            </div>

            <div class="block w-full">

                <p class="text-md font-semibold mb-3.5">Contacts</p>

                <ul class="space-y-3">
                    <NotificationList3 v-for="contact in Contacts" :key="contact.id" :contact="contact" />
                </ul>

            </div>

        </div>

    </aside>
</template>









<script>
    import NotificationSection from '../subcomponents/notificationItems/NotificationSection.vue';
    import NotificationList1 from '../subcomponents/notificationItems/NotificationList1.vue';
    import NotificationList2 from '../subcomponents/notificationItems/NotificationList2.vue';
    import NotificationList3 from '../subcomponents/notificationItems/NotificationList3.vue';


    export default {
        components: {
            NotificationSection,
            NotificationList1,
            NotificationList2,
            NotificationList3,
        },
        data() {
            return {
                notifications: [
                    {
                        message: 'You have a new message.',
                        time: '10 minutes ago'
                    },
                    {
                        message: 'A new friend request.',
                        time: '1 hour ago'
                    },
                ],
                Activities: [
                    {
                        avatar: 'https://images.unsplash.com/photo-1695783455299-5f031bce65e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                        message: 'You have a new message.',
                        time: '10 minutes ago'
                    },
                    {
                        avatar: 'https://images.unsplash.com/photo-1695642579321-fcb1fc79b976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
                        message: 'A new friend request.',
                        time: '1 hour ago'
                    },
                ],
                Contacts: [
                    {
                        avatar: 'https://images.unsplash.com/photo-1553524082-82690780f842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80',
                        name: 'Reo Messi',
                    },
                ]
            };
        }
    }
</script>
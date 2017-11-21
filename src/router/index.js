import Vue from 'vue';
import Router from 'vue-router';

import About from '@/components/About';
import Quests from '@/components/Quests';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Quests,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
    ],
});

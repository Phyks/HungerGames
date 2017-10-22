import Vue from 'vue';
import Router from 'vue-router';
import About from '@/views/About';
import Quest from '@/views/Quest';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Quest,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
    ],
});

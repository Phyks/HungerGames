import Vue from 'vue';
import Router from 'vue-router';
import Quest from '@/views/Quest';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Quest',
            component: Quest,
        },
    ],
});

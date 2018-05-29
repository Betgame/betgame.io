import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import NewsItem from '@/components/layouts/news/NewsItem';

Vue.use(Router)

export default new Router({
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
	mode: 'history',
	routes: [{
		path: '/',
		name: 'Index',
		component: Index
	}, {
		path: '/news/:id',
    	name: 'NewsItem',
    	component: NewsItem
    }]
})

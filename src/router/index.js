import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
	
		// {
		// 	path: '/projectsD',
		// 	name: 'ProjectDetails',
		// 	component: () => import('../views/ProjectDetailsModal.vue'),
		// 	props: true
		// }
	
	],
})

export default router
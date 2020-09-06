import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import all from '@/components/typeDetail/all'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
		{
			path: '/',
			redirect: '/home'
		},
    	{
    	  	path: '/home',
    	  	name: 'home',
			component: home,
			redirect: '/home/all',
    	  	children: [
				  {
					  path: 'all',
					  component: all
				  }
			  ]
    	}
  	]
})

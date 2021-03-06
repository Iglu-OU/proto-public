import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import sample from './directives/ig-codesample';
import TableSort from './directives/ig-tablesort';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.directive('sample', sample);
//TODO: add codesamples, maybe using webpack

Vue.directive('tablesort', TableSort);


let objectFitImages = require('object-fit-images');


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(ElementUI);

let routesGen = []; //generated by route-loader

//autogenerated
//autogenerated end

let routes = [
	{name: 'home', path: '/', component: home},
	{ path: '*', redirect: '/' },
];

routes = routesGen.concat(routes);

const router = new VueRouter({
	routes, // short for routes: routes
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
});

router.afterEach(function (transition) {
	objectFitImages();
  // ga('send', {
  //   hitType: 'pageview',
  //   page: transition.to.path
  // })
});



const app = new Vue({
	router,
	render: h => h(App),
}).$mount('#app');

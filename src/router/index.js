import {createRouter, createWebHistory} from 'vue-router'

import {
	  HomeOne,
	  HomeTwo, 
	  HomeThree, 
	  About,
	  Services,
	  Team,
	  Price,
	  Faq,
	  ServiceDetails,
	  ProjectStandard,
	  ProjectMetro,
	  ProjectGrid,
	  ProjectList,    
	  ProjectMasonry,
	  ProjectSlider,
	  ProjectDetailsLeft,
	  ProjectDetailsRight,
	  ProjectDetailsGallery,
	  Product,
	  Blog,
	  BlogDetails,
	  Contact,

  } from "../views";



const routes = [
	{
		path: "/",
		name: "home",
		component: HomeOne,
	},

	{
		path: "/product",
		name: "product",
		component: Product,
	},
	{
		path: "/about",
		name: "O nama",
		component: About,
	},

	{
		path: "/home-2",
		name: "home2",
		component: HomeTwo,
	},

	{
		path: "/home-3",
		name: "home3",
		component: HomeThree,
	},
	{
		path: "/about",
		name: "about",
		component: About,
	},	
	{
		path: "/team",
		name: "team",
		component: Team,
	},
	{
		path: "/price",
		name: "price",
		component: Price,
	},
	{
		path: "/faq",
		name: "faq",
		component: Faq,
	},
	{
		path: "/services",
		name: "services",
		component: Services,
	},
	{
		path: "/service-details",
		name: "service-details",
		component: ServiceDetails,
	},
	{
		path: "/project-standard",
		name: "project-standard",
		component: ProjectStandard,
	},
	{
		path: "/project-metro",
		name: "project-metro",
		component: ProjectMetro,
	},
	{
		path: "/project-grid",
		name: "project-grid",
		component: ProjectGrid,
	},
	{
		path: "/project-list",
		name: "project-list",
		component: ProjectList,
	},
	{
		path: "/project-masonry",
		name: "project-masonry",
		component: ProjectMasonry,
	},
	{
		path: "/project-slider",
		name: "project-slider",
		component: ProjectSlider,
	},
	{
		path: "/project-details-left",
		name: "project-details-left",
		component: ProjectDetailsLeft,
	},
	{
		path: "/project-details-right",
		name: "project-details-right",
		component: ProjectDetailsRight,
	},
	{
		path: "/project-details-gallery",
		name: "project-details-gallery",
		component: ProjectDetailsGallery,
	},
	{
		path: "/blog",
		name: "blog",
		component: Blog,
	},
	{
		path: "/blog-details",
		name: "blog-details",
		component: BlogDetails,
	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},


		
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
	  if (savedPosition) {
		return savedPosition;
	  } else {
		return { top: 0, left: 0 };
	  }
	},
  });

export default router

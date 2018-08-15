import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import HelloWorld from '@/components/HelloWorld'
import Maps from '@/components/Maps'
import Maps2 from '@/components/Maps2'
import Maps3 from '@/components/Maps3'
import Maps4 from '@/components/Maps4'
import Maps5 from '@/components/Maps5'
import Home from '@/components/Home'
import Front from '@/components/Front'
import Fillers from '@/components/Fillers'
import Fillers2 from '@/components/Fillers2'
import Page10 from '@/components/Page10'
import Page20 from '@/components/Page20'
import Page30 from '@/components/Page30'
import Page301 from '@/components/Page301'
import Page40 from '@/components/Page40'

// import Page from '../../index2.html' need a specific loader


Vue.use(Router)

Vue.use(Auth, {
  issuer: 'https://dev-976497.oktapreview.com/oauth2/default',
  client_id: '0oafrh5d1oj9JY1ct0h7',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/Maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/Fillers',
      name: 'Fillers',
      component: Fillers
    },
    {
        path: '/Fillers2',
        name: 'Fillers2',
        component: Fillers2
    },
    {
      path: '/Maps2',
      name: 'Maps2',
      component: Maps2
    },
    {
      path: '/Maps3',
      name: 'Maps3',
      component: Maps3
    },{
      path: '/Maps4',
      name: 'Maps4',
      component: Maps4
    },
    {
      path: '/Maps5',
      name: 'Maps5',
      component: Maps5
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Page10',
      name: 'Page10',
      component: Page10
    },
    {
      path: '/Page20',
      name: 'Page20',
      component: Page20
    },
    {
      path: '/Page30',
      name: 'Page30',
      component: Page30
    },
    {
      path: '/Page301',
      name: 'Page301',
      component: Page301
    },
    {
      path: '/Page40',
      name: 'Page40',
      component: Page40
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/implicit/callback',
      component:Auth.handleCallback()

    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta:{
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router;

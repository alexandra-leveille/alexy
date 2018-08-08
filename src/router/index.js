import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import HelloWorld from '@/components/HelloWorld'
import Maps from '@/components/Maps'
import Home from '@/components/Home'
import Front from '@/components/Front'
import Page10 from '@/components/Page10'
import Page20 from '@/components/Page20'
import Page30 from '@/components/Page30'
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

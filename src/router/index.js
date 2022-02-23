import { createRouter, createWebHistory } from 'vue-router';

import store from '@/store/index';
import Home from '@/views/Home.vue';
import Error from '@/views/Error.vue';
import Songs from '@/views/Songs.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import ViewSong from '@/views/ViewSong.vue';
import EditSong from '@/views/EditSong.vue';
import CreateSong from '@/views/CreateSong.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      middleware: 'protectedRoute',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: 'protectedRoute',
    },
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs,
  },
  {
    path: '/songs/create',
    name: 'CreateSong',
    component: CreateSong,
    meta: {
      middleware: 'auth',
    },
  },
  {
    path: '/songs/:id',
    name: 'ViewSong',
    component: ViewSong,
  },
  {
    path: '/songs/:id/edit',
    name: 'EditSong',
    component: EditSong,
    meta: {
      middleware: 'auth',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = require(`../middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = require(`../middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

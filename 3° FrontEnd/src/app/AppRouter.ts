import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './views/HomeScreen/HomeComponent.vue'
import GameComponent from './views/GameScreen/GameComponent.vue';
import AboutComponent from './views/AboutScreen/AboutComponent.vue';
import UserComponent from './views/UserScreen/UserComponent.vue';
import SignInComponent from './views/SignInScreen/SignInComponent.vue';
import SignUpComponent from './views/SignUpScreen/SignUpComponent.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/game',
    name: 'game',
    component: GameComponent
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComponent
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInComponent
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpComponent
  },
  {
    path: '/users',
    name: 'users',
    component: UserComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router

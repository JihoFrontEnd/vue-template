/**
 * @Author jihogrammer@gmail.com
 */
import { RouteRecordRaw } from 'vue-router';

enum PATH {
  HOME = '/',
  ABOUT = '/about',
}

enum ROUTE {
  HOME = 'Home',
  ABOUT = 'About',
}

function asyncView(route: ROUTE) {
  return () => import('@/views/' + route + '.vue');
}

const routes: Array<RouteRecordRaw> = [
  {
    path: PATH.HOME,
    name: ROUTE.HOME,
    component: asyncView(ROUTE.HOME),
  },
  {
    path: PATH.ABOUT,
    name: ROUTE.ABOUT,
    component: asyncView(ROUTE.ABOUT),
  },
];

export { routes, PATH, ROUTE };

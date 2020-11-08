import Home from './pages/home'
import Archives from './pages/archives'
import Post from './templates/post'
export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/archives',
    exact: true,
    component: Archives
  },
  {
    path: '/*',
    component: Post
  }
]

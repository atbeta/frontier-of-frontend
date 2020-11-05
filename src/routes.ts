import Home from './pages/home'
import Post from './templates/post'
export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/*',
    component: Post
  }
]

import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const Post = (props) => {
  const match = useRouteMatch({
    path: '/:slug/',
    strict: true,
    sensitive: true
  })
  console.log(match)
  return <div>Hello Post!</div>
}

export default Post

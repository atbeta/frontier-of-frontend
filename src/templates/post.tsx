import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const query = gql`
  query GetPost($url: String!) {
    posts(where: { url: $url }) {
      title
      url
      content
    }
  }
`

export interface SlugRouteParams {
  slug: string
}

const Image = (props) => {
  return <img alt="" {...props} style={{ maxWidth: '100%' }} />
}

const Post = (props) => {
  const match = useRouteMatch<SlugRouteParams>({
    path: '/:slug',
    strict: true,
    sensitive: true
  })
  const slug = match?.params.slug
  const { data, loading, error } = useQuery(query, {
    variables: {
      url: slug
    }
  })
  if (loading) {
    return <div>Loading</div>
  }
  const post = data.posts[0]
  if (!post) {
    return <div>404</div>
  }
  const { title, content } = post
  return (
    <div>
      <div>{title}</div>
      <ReactMarkdown source={content} renderers={{ image: Image }} />
    </div>
  )
  // const post = data.posts[0]
}

export default Post

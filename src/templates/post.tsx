import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

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
  return <div>hello</div>
}

export default Post

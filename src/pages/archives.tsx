import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { useThemeUI } from 'theme-ui'
import { Container } from 'theme-ui'
import PostCard from '../components/post-card'

const archivesQuery = gql`
  query GetPosts($sort: String!) {
    posts(sort: $sort) {
      title
      cover {
        url
      }
      excerpt
      url
      id
      tags {
        name
        slug
      }
    }
  }
`

const Archives = () => {
  const context = useThemeUI()
  const { data, loading, error } = useQuery(archivesQuery, {
    variables: {
      sort: 'id:desc'
    }
  })
  if (loading) {
    return <div>Loading</div>
  }
  const { posts } = data
  return (
    <div>
      <Container variant="center">
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </Container>
    </div>
  )
}

export default Archives

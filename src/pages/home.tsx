import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { useThemeUI } from 'theme-ui'
import { Container } from 'theme-ui'
import PostCard from '../components/post-card'

const query = gql`
  query GetPosts($sort: String!, $start: Int!, $limit: Int!) {
    posts(sort: $sort, start: $start, limit: $limit) {
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

const Home = () => {
  const context = useThemeUI()
  const { data, loading, error } = useQuery(query, {
    variables: {
      sort: 'id:desc',
      start: 0,
      limit: 5
    }
  })
  if (loading) {
    return <div>Loading</div>
  }
  console.log(data)
  const { posts } = data
  return (
    <div>
      <Container variant="center">
        {posts.map((post) => (
          // <div key={post.id}>{post.title}</div>
          <PostCard key={post.id} {...post} />
        ))}
      </Container>
    </div>
  )
}

export default Home

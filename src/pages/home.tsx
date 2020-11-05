import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const query = gql`
  query GetPosts($sort: String!, $start: Int!, $limit: Int!) {
    posts(sort: $sort, start: $start, limit: $limit) {
      title
      url
      id
    }
  }
`

const Home = () => {
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
  const { posts } = data
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default Home

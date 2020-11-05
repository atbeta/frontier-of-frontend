import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image, Text } from 'theme-ui'

// todo 封面图在 graphql 服务器，暂写死待处理
const host = 'http://212.129.144.48:1337'

const PostCard: React.FC<any> = (props) => {
  const { url, cover, title, excerpt, tags } = props
  return (
    <div>
      <Image src={host + cover.url} variant="cover" alt="" />
      <div>
        {tags.map((tag) => {
          return <div key={tag.slug}>{tag.name}</div>
        })}
      </div>
      <Text
        sx={{
          fontSize: 5,
          fontWeight: 'bold'
        }}
      >
        <Link to={url}>{title}</Link>
      </Text>
      <div>{excerpt}</div>
    </div>
  )
}

PostCard.propTypes = {
  url: PropTypes.string,
  cover: PropTypes.object,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object)
}

export default PostCard

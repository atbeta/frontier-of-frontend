/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { jsx, Image, Text } from 'theme-ui'

// todo 封面图在 graphql 服务器，暂写死待处理
const host = 'http://212.129.144.48:1337'

const tagStyle = {
  marginRight: 2,
  fontSize: 1,
  color: 'gray',
  backgroundColor: 'muted',
  px: 2,
  py: 1,
  // custom style
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '15px',
  transition: 'border-color 0.2s ease-in',
  '&:hover': {
    color: 'blue',
    backgroundColor: 'transparent',
    borderColor: 'blue'
  }
}

const PostCard: React.FC<any> = (props) => {
  const { url, cover, title, excerpt, tags } = props
  return (
    <div>
      <Link to={url}>
        <Image src={host + cover.url} variant="cover" alt="" />
      </Link>
      <div>
        {tags.map((tag) => {
          return (
            <div key={tag.slug} sx={{ display: 'flex' }}>
              <span sx={tagStyle}>{tag.name}</span>
            </div>
          )
        })}
      </div>
      <Text
        sx={{
          fontSize: 5,
          fontWeight: 'bold'
        }}
      >
        <Link to={url} sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'blue' } }}>
          {title}
        </Link>
      </Text>
      <div sx={{ color: 'gray' }}>{excerpt}</div>
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

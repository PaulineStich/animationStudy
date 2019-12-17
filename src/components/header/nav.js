import React from "react"
import { Link } from "gatsby"
import usePosts from "../../hooks/use-posts"

export const SideNav = props => {
  const posts = usePosts()
  return (
    <div className="sideNav">
      <ul>
        {posts.map(post => {
          return post.subtitle !== null ? (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ) : null
        })}
      </ul>
    </div>
  )
}

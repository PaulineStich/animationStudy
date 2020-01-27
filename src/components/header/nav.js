import React from "react"
import { Link } from "gatsby"
import usePosts from "../../hooks/use-posts"

export const SideNav = () => {
  const posts = usePosts()
  return (
    <div className="sideNav">
      <ul>
        <li><Link to="/">Home</Link></li>
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

export const SideAbout = () => {
  return (
    <div className="sideAbout">
      {/* <h6>About</h6> */}
      <p>
        This is an interactive guidebook for an animation study, made by{" "}
        <a href="http://www.popo.works">Pauline Stichelbaut</a> at the{" "}
        <a href="https://www.gobelins.fr">Gobelins</a>.
      </p>
      <p>
        Special thanks to{" "}
        <a href="https://twitter.com/pppunky">Rachel Donnat</a>, Thierry Audoux,{" "}
        <a href="http://www.bruno-simon.com">Bruno Simon</a>, Françoise
        Fronty-Gilles,{" "}
        <a href="https://twitter.com/jonasnaimark">Jonas Naimark</a>,{" "}
        <a href="http://www.arnaudroutaboul.com">Arnaud Routaboul</a>,{" "}
        Stephen Farrugia.
      </p>
    </div>
  )
}

import React from "react"
import { Link } from "gatsby"

export const SideNav = props => {
  return (
    <div className="sideNav">
      <ul>
        <li>
          <Link to="/">link 1</Link>
        </li>
        <li>
          <Link to="/">link 2</Link>
        </li>
        <li>
          <Link to="/">link 3</Link>
        </li>
      </ul>
    </div>
  )
}

import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { IconButton } from "./IconButton"
import { SideNav } from "./nav"

const Header = ({ siteTitle, next, previous }) => {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <div>
          <IconButton menu click={() => setOpen(!open)} open={open} />
          {previous === null | undefined ? null : (
            <>
              <Link to={previous} className="headerArrow">
                <IconButton arrowLeft />
              </Link>
            </>
          )}
          {next === null | undefined ? null : (
            <>
              {next && (
                <Link to={next} className="headerArrow">
                  <IconButton arrowRight />
                </Link>
              )}
            </>
          )}
          <h3>
            <Link to="/">{siteTitle}</Link>
          </h3>
        </div>
        <IconButton dots />
      </nav>
      {open && <SideNav />}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  next: PropTypes.string,
  previous: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

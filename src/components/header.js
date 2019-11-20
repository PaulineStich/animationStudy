import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { IconButton } from "./IconButton"
import { SideNav } from "./nav"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <IconButton menu click={() => setOpen(!open)} open={open}/>
        <IconButton arrowLeft />
        <IconButton arrowRight />
        <h3>
          <Link to="/">{siteTitle}</Link>
        </h3>
        <IconButton dots />
      </nav>
      {open && <SideNav />}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

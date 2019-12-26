import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import { IconButton } from "./IconButton"
import { SideNav, SideAbout } from "./nav"

const Header = ({ siteTitle, next, previous }) => {
  const [openNav, setOpenNav] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)

  const array = [
    {
      state: openNav,
      component: <SideNav />,
    },
    {
      state: openAbout,
      component: <SideAbout />,
    },
  ]

  return (
    <header>
      <nav>
        <div>
          <IconButton menu click={() => setOpenNav(!openNav)} open={openNav} />
          {(previous === null) | undefined ? null : (
            <>
              <Link to={previous} className="headerArrow">
                <IconButton arrowLeft />
              </Link>
            </>
          )}
          {(next === null) | undefined ? null : (
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
        <IconButton
          dots
          click={() => setOpenAbout(!openAbout)}
          open={openAbout}
        />
      </nav>
      {array.map(el => (
        <CSSTransition
          in={el.state}
          timeout={250}
          classNames="opacityFade"
          unmountOnExit
        >
          {el.component}
        </CSSTransition>
      ))}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  next: PropTypes.string,
  previous: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#353434`,
      height: 46
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.8rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0, fontSize: '12px' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

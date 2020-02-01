import React from "react"
import { Button } from "../components/buttons"

const Footer = ({ next, previous }) => {
  return (
    <footer>
      {previous === false ? null : (
        <>
          {previous && (
            <Button
              title={previous.frontmatter.title}
              linkTo={previous.frontmatter.slug}
              previous
            />
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Button
              title={next.frontmatter.title}
              linkTo={next.frontmatter.slug}
              next
            />
          )}
        </>
      )}
    </footer>
  )
}

export default Footer

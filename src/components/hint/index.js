import React from "react"
import { animated, useSpring, config } from "react-spring"

import useModal from "../../hooks/useModal"
import useHover from "../../hooks/useHover"
import Modal from "./modal"
import Button from "./button"
import Birdie from "./birdie"

const Hint = ({ children }) => {
  const { isShowing, toggle } = useModal()
  const [hoverRef, isHovered] = useHover()

  const fadeInOut = useSpring({
    config: config.stiff,
    from: { opacity: isShowing ? 1 : 0 },
    to: { opacity: isShowing ? 0 : 1 },
  })

  return (
    <div className="hint">
      <animated.div
        className="container"
        ref={hoverRef}
        style={{ ...fadeInOut }}
      >
        {!isShowing && <Birdie isShowing={isShowing} isHovered={isHovered} />}
        <Button isHovered={isHovered} hide={toggle} />
      </animated.div>
      <Modal isShowing={isShowing} hide={toggle}>
        {children}
      </Modal>
    </div>
  )
}

export default Hint

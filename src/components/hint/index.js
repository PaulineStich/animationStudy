import React from "react"

import useModal from "../../hooks/useModal"
import useHover from "../../hooks/useHover"
import Modal from "./modal"
import Button from "./button"
import Birdie from "./birdie"

const Hint = ({ children }) => {
  const { isShowing, toggle } = useModal()
  const [hoverRef, isHovered] = useHover()

  return (
    <div className="hint">
      <div className="container">
        {!isShowing && <Birdie isShowing={isShowing} isHovered={isHovered} />}
        <Button isShowing={isShowing} hide={toggle} ref={hoverRef} />
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        {children}
      </Modal>
    </div>
  )
}

export default Hint

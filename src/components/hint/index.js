import React from "react"

import useModal from "../../hooks/useModal"
import Modal from "./modal"
import Button from "./button"
import Birdie from "./birdie"

const Hint = ({ children }) => {
  const { isShowing, toggle } = useModal()

  return (
    <div className="hint">
      <div className="container">
        <Birdie isShowing={isShowing} />
        <Button isShowing={isShowing} hide={toggle} />
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        {children}
      </Modal>
    </div>
  )
}

export default Hint

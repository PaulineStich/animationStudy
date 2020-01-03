import React, { useRef } from "react"
import ReactDOM from "react-dom"
import {
  animated,
  useTransition,
  config,
  useSpring,
  useChain,
} from "react-spring"

const Modal = ({ isShowing, hide, children }) => {
  const widthRef = useRef()
  const { width, height, opacity, ...rest } = useSpring({
    ref: widthRef,
    config: config.stiff,
    from: { width: "40%", height: "0%" },
    to: {
      width: isShowing ? "100%" : "0%",
      height: isShowing ? "18.6%" : "0%",
    },
  })

  const transitionRef = useRef()
  const transition = useTransition(isShowing, null, {
    ref: transitionRef,
    from: { opacity: 0, top: 15 },
    enter: { opacity: 1, top: 0 },
    leave: { opacity: 0, top: 15 },
    config: config.stiff,
  })

  useChain(isShowing ? [widthRef, transitionRef] : [transitionRef, widthRef], [
    0,
    isShowing ? 0.2 : 0.6,
  ])

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <animated.div
              className="modal"
              style={{ ...rest, width: width, height: height }}
            >
              {transition.map(
                ({ item, key, props }) =>
                  item && (
                    <div key={key}>
                      <animated.div
                        style={{ ...props }}
                        className="modal-header"
                      >
                        <button
                          type="button"
                          className="modal-close-button"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={hide}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </animated.div>
                      <animated.p style={{ ...props }}>{children}</animated.p>
                    </div>
                  )
              )}
            </animated.div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export default Modal

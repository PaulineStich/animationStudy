import React from "react"
import { animated, useSpring } from "react-spring"

const Button = ({ isShowing, hide }) => {
  const props = useSpring({
    x: isShowing ? 0 : 125,
    rotation: isShowing ? "rotate(0deg)" : "rotate(90deg)",
    from: { x: 125, rotation: "rotate(90deg)" },
  })

  return (
    <button className="button-default" onClick={hide}>
      <>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="20"
            stroke="#CCCCCC"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
          <animated.rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="20"
            stroke="#CCCCCC"
            strokeWidth="2"
            strokeOpacity="0.6"
            className="square-hover"
            strokeDashoffset={props.x}
          />
        </svg>
        <animated.svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          style={{ transform: props.rotation }}
        >
          <path
            id="arrow"
            d="M17.5898 26.59L22.1698 22L17.5898 17.41L18.9998 16L24.9998 22L18.9998 28L17.5898 26.59Z"
            fill="#CCCCCC"
          />
        </animated.svg>
      </>
    </button>
  )
}

export default Button

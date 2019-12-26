import React, { Component } from "react"
import Engine from "./Engine"

export default class WebGL extends Component {
  // componentDidMount depreacted in favor of react hooks 
  componentDidMount = () => {
    this.initWebGL()
    this.addListeners()
    this.animate()
    this.resize()
  }
  
  initWebGL() {
    this.webgl = new Engine(this.canvas)
  }

  addListeners() {
    this.handlerAnimate = this.animate.bind(this)

    window.addEventListener("resize", this.resize.bind(this))
  }

  resize() {
    if (this.webgl) this.webgl.resize()
  }

  animate() {
    if (this.webgl) this.webgl.update()

    requestAnimationFrame(this.handlerAnimate)
  }
  
  render() {
    return (
      <canvas ref={element => (this.canvas = element)} id="canvas" />
    )
  }
}

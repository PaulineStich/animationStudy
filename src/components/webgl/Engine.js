import * as THREE from "three"
import Particles from "./particles/Particles"

export default class Engine {
  constructor(canvas) {
    this.samples = ["svg/pattern.svg"]
    this.headerSize = 46

    this.initThree(canvas)
    this.initGeom()
  }

  initThree(canvas) {
    const { innerWidth: width, innerHeight: height } = window

    // scene
    this.scene = new THREE.Scene()

    // camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      width / (height - this.headerSize),
      10,
      1000
    )
    this.camera.position.set(0, 0, 400)

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    const pixelRatio = Math.max(2, window.devicePixelRatio)
    this.renderer.setPixelRatio(pixelRatio)
    this.renderer.setSize(width, height - this.headerSize)

    // clock
    this.clock = new THREE.Clock(true)
  }

  initGeom = () => {
    return new Promise(resolve => {
      this.particles = new Particles(this)
      this.particles.init(this.samples[0])
      this.scene.add(this.particles.container)
      resolve()
    })
  }

  update() {
    const delta = this.clock.getDelta()

    if (this.particles) this.particles.update(delta)

    this.renderer.render(this.scene, this.camera)
  }

  resize() {
    if (!this.renderer) return
    this.camera.aspect =
      window.innerWidth / (window.innerHeight - this.headerSize)
    this.camera.updateProjectionMatrix()

    this.fovHeight =
      2 *
      Math.tan((this.camera.fov * Math.PI) / 180 / 2) *
      this.camera.position.z

    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight - this.headerSize
    )

    if (this.particles) this.particles.resize()
  }
}

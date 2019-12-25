/* inspired from great article on particles with buffergeometries from brunoimbrizi on codrops */
import * as THREE from "three"
import { TweenLite, Quad } from "gsap"

const glslify = require("glslify")

export default class Particles {
  constructor(webgl) {
    this.webgl = webgl
    this.container = new THREE.Object3D()
  }

  init(src) {
    const loader = new THREE.TextureLoader()

    loader.load(src, texture => {
      this.texture = texture
      this.texture.minFilter = THREE.LinearFilter
      this.texture.magFilter = THREE.LinearFilter
      this.texture.format = THREE.RGBFormat

      this.width = texture.image.width
      this.height = texture.image.height
      this.numPoints = this.width * this.height

      this.initPoints()
      this.resize()
      this.show()
    })
  }

  initPoints() {
    // texture
    let numVisible = 0
    let threshold = 34

    // discard pixels darker than threshold #22
    const img = this.texture.image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    canvas.width = this.width
    canvas.height = this.height
    ctx.scale(1, -1)
    ctx.drawImage(img, 0, 0, this.width, this.height * -1)

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let originalColors = Float32Array.from(imgData.data)

    for (let i = 0; i < this.numPoints; i++) {
      if (originalColors[i * 4 + 0] > threshold) numVisible++
    }

    // shaders
    const uniforms = {
      uTime: { value: 0 },
      uRandom: { value: 1.0 },
      uDepth: { value: 2.0 },
      uSize: { value: 0.0 },
      uTextureSize: { value: new THREE.Vector2(this.width, this.height) },
      uTexture: { value: this.texture },
      uTouch: { value: null },
    }

    const material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader: glslify(require("../shaders/particle.vert")),
      fragmentShader: glslify(require("../shaders/particle.frag")),
      depthTest: false,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    // instances
    const geometry = new THREE.InstancedBufferGeometry()

    // positions
    const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3)
    positions.setXYZ(0, -0.5, 0.5, 0.0)
    positions.setXYZ(1, 0.5, 0.5, 0.0)
    positions.setXYZ(2, -0.5, -0.5, 0.0)
    positions.setXYZ(3, 0.5, -0.5, 0.0)
    geometry.setAttribute("position", positions)

    // uvs
    const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2)
    uvs.setXYZ(0, 0.0, 0.0)
    uvs.setXYZ(1, 1.0, 0.0)
    uvs.setXYZ(2, 0.0, 1.0)
    uvs.setXYZ(3, 1.0, 1.0)
    geometry.setAttribute("uv", uvs)

    // index
    geometry.setIndex(
      new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
    )

    // attributes
    const indices = new Uint16Array(numVisible)
    const offsets = new Float32Array(numVisible * 3)
    const angles = new Float32Array(numVisible)

    for (let i = 0, j = 0; i < this.numPoints; i++) {
      if (originalColors[i * 4 + 0] <= threshold) continue

      offsets[j * 3 + 0] = i % this.width
      offsets[j * 3 + 1] = Math.floor(i / this.width)

      indices[j] = i

      angles[j] = Math.random() * Math.PI

      j++
    }

    geometry.setAttribute(
      "pindex",
      new THREE.InstancedBufferAttribute(indices, 1, false)
    )
    geometry.setAttribute(
      "offset",
      new THREE.InstancedBufferAttribute(offsets, 3, false)
    )
    geometry.setAttribute(
      "angle",
      new THREE.InstancedBufferAttribute(angles, 1, false)
    )

    this.finalObject = new THREE.Mesh(geometry, material)
    this.container.add(this.finalObject)
  }

  update(delta) {
    if (!this.finalObject) return

    this.finalObject.material.uniforms.uTime.value += delta
  }

  show() {
    // reset
    TweenLite.fromTo(
      this.finalObject.material.uniforms.uSize,
      0.88,
      { value: 0.25 },
      { value: 0.75 }
    )
    TweenLite.to(this.finalObject.material.uniforms.uRandom, 0.8, {
      value: 0.5,
    })
    TweenLite.fromTo(
      this.finalObject.material.uniforms.uDepth,
      1.5,
      { value: 40.0 },
      { value: 3.0 }
    )
  }

  resize() {
    if (!this.finalObject) return

    const scale = this.webgl.fovHeight / this.height
    this.finalObject.scale.set(scale, scale, 1)
  }
}

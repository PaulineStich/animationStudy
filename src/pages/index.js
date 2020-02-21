import React, { Suspense } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReadTheFirstArticle } from "../components/buttons"
import Title from "../components/title"

import "../utils/scss/index.scss"

const WebGL = React.lazy(() => import("../components/webgl/index"))

const content = [
  { title: "How to use animation to solve problems?" },
  { title: "How to use animation for the power of good?" },
  { title: "How to find a place for animation in a design process?" },
  { title: "How to animate responsibly? " },
  { title: "How to give more personality and bring digital interfaces to life with subtile animation?",},
  { title: "How to use interactive animation to tell a story?" },
]

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="home">
          <section className="head grid">
            <Suspense fallback={<div> . </div>}>
              <WebGL />
            </Suspense>
            <div>
              <Title
                first="Bringing digital intefaces"
                second="to life with animation"
              />
            </div>
          </section>
          <section className="body">
            <div className="grid flex-end ">
              <ReadTheFirstArticle />
            </div>
            <div className="description">
              <div className="grid">
                <h4>
                  And how to be an animation <br /> superhero
                </h4>
                <div className="line" />
                <ul>
                  {content.map(el => {
                    return (
                      <li key={el.title}>
                        <p>{el.title}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

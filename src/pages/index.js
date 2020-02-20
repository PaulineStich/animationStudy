import React, {Suspense} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReadTheFirstArticle } from "../components/buttons"
import Title from "../components/title"

import "../utils/scss/index.scss"

const WebGL = React.lazy(() => import ('../components/webgl/index'))

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="home">
          <section className="head">
            <Suspense fallback={<div>..</div>}>
              <WebGL />
            </Suspense>
          </section>
          <section className="body">
            <div className="home-title">
              <Title
                first="Bringing digital intefaces"
                second="to life with animation"
              />
            </div>
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
                  <li>
                    <p>How to use animation to solve problems ? </p>
                  </li>
                  <li>
                    <p>How to use animation for the power of good ? </p>
                  </li>
                  <li>
                    <p>
                      How to find a place for animation in a design process ?{" "}
                    </p>
                  </li>
                  <li>
                    <p>How to animate responsibly ? </p>
                  </li>
                  <li>
                    <p>
                      How to give more personality and bring digital interfaces
                      to life with subtile animation ?{" "}
                    </p>
                  </li>
                  <li>
                    <p>How to use interactive animation to tell a story ? </p>
                  </li>
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

import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { Link } from "gatsby"

export default () => (
  <Fragment>
    This is where <Styled.a href="http://example.com/resume">your name</Styled.a>
    {` `}
    goes.
      <Link to="resume">some</Link>
    <br />
    Or whatever, you make the rules.
  </Fragment>
)

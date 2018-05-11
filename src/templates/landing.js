import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'
import Banner from '../components/Banner'

export const LandingTemplate = ({ content, description, title }) => (
  <article>
    <Helmet>
      <title children={title} />
      <meta name="description" content={description} />
    </Helmet>
    <Banner heading={title} />
    <Container className="PW-Content">
      <Row className="justify-content-md-center">
        <Col md="10" lg="8" dangerouslySetInnerHTML={{ __html: content }} />
      </Row>
    </Container>
  </article>
)

LandingTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
}

const Landing = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <LandingTemplate
      content={post.html}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

Landing.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Landing

export const pageQuery = graphql`
  query LandingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

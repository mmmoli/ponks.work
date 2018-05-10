import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import { Container } from 'reactstrap'
import Banner from '../components/Banner'

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <article>
      <Helmet>
        <title children={title} />
        <meta name="description" content={description} />
      </Helmet>
      <Banner heading={title} />
      <Container>
        <p>{description}</p>
        <PostContent content={content} />
      </Container>
    </article>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProjectTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

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

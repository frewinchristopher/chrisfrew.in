import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Disqus } from 'gatsby-plugin-disqus'


class BlogPost extends React.Component {
  componentDidMount() {
    const footnotes = document.getElementsByClassName('footnote-ref');
    Array.prototype.forEach.call(footnotes, function(footnote) {
      console.log(footnote.getAttribute("href").replace("#", ""));
      footnote.addEventListener("click", function(e) {
        e.preventDefault();
        // The href value IS the id of the dif
        const footnoteDiv = document.getElementById(footnote.getAttribute("href").replace("#", ""));
        footnoteDiv.classList.add("highlight");
        setTimeout(() => footnoteDiv.classList.remove("highlight"), 2000);
      });
  });
    
  }
  render() {
    const post = this.props.data.markdownRemark
    const title = post.frontmatter.title
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const disqusConfig = {
      url: `${this.props.data.site.siteMetadata.siteUrl+this.props.location.pathname}`,
      identifier: post.id,
      title: title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                fontStyle: 'italic',
              }}
            >
              Posted on {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Disqus config={disqusConfig} />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

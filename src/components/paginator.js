/**
 * Paginator component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const constants = require('../constants/constants.json')

const Paginator = ({ path }) => {
    const data = useStaticQuery(graphql`
        query PaginatorQuery {
            allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        excerpt
                        fields {
                            slug
                        }
                        frontmatter {
                            date(formatString: "MMMM D, YYYY")
                            title
                            description
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMdx.edges
    const postCount = posts.length
    let paginations = []
    let pageCount = 1
    if (typeof window !== "undefined") {
        for (let i = 1; i < postCount; i += constants.postsPerPage) {
            let isActive = false
            let pathName
            if (i !== 1) {
                pathName = "/blog-page-" + pageCount
            } else {
                pathName = "/"
            }

            // removes trailing slash if there is one
            const pathnameWithoutTrailingSlashes = window.location.pathname.replace(
                /\/+$/,
                ""
            )

            // set is active to true if we are on this nth page (or homepage)
            if (
                (i === 1 && pathnameWithoutTrailingSlashes === "") ||
                pathnameWithoutTrailingSlashes === pathName
            ) {
                isActive = true
            }
            const text = i.toString() + "-" + (i + 5).toString()
            paginations.push({
                pathName: pathName,
                text: text,
                isActive: isActive,
            })
            pageCount = pageCount + 1
        }
    }
    return (
        <div style={{ marginTop: "2rem" }}>
            <p>More posts:</p>
            <div className="pagination">
                {paginations.map(pagination => {
                    if (pagination.isActive) {
                        return (
                            <button key={pagination.text}>
                                {pagination.text}
                            </button>
                        )
                    } else {
                        return (
                            <a key={pagination.text} href={pagination.pathName}>
                                {pagination.text}
                            </a>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Paginator

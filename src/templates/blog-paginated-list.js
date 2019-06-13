import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Posts } from '../components/Posts'
import { Pagination } from '../components/Pagination'
import { CenterContent, SectionTitle } from '../components/atoms/index'

export default ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <CenterContent>
            <SectionTitle>Articles</SectionTitle>
            <Posts posts={data.allMarkdownRemark.edges} />
            <Pagination
                current={data.allMarkdownRemark.pageInfo.currentPage}
                total={data.allMarkdownRemark.pageInfo.pageCount}
            />
        </CenterContent>
    </Layout>
)

export const query = graphql`
    query($limit: Int!, $skip: Int!) {
        allMarkdownRemark(limit: $limit, skip: $skip, sort: { fields: frontmatter___date, order: DESC }) {
            pageInfo {
                pageCount
                currentPage
            }
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MM/DD/YYYY")
                        coverImageOrientation
                        cover {
                            childImageSharp {
                                fluid(maxWidth: 400, quality: 60) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                    timeToRead
                }
            }
        }
    }
`

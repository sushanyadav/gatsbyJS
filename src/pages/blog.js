import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from '../components/layout'
import styles from './blog.module.scss'
import Head from '../components/Head'
const BlogPage = () => {

  const data = useStaticQuery(graphql`
  query{
  allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
    edges {
      node {
        id
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        slug
      }
    }
  }
}

`)


  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>

      <ol className={styles.posts}>
        {
          data.allContentfulBlogPost.edges.map((edge, i) => (


            <li key={i} className={styles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2> {edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>


          ))
        }
      </ol>


    </Layout>
  )
}

export default BlogPage
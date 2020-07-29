const path = require('path')


exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "react-dom": "@hot-loader/react-dom",
                },
            },
        })
    }
}

// exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')


//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// }

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     const blogTemplate = path.resolve("./src/templates/Blog.js")

//     const res = await graphql(`
//     query {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields{
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)

//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }

//         })
//     })

// }


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve("./src/templates/Blog.js")

    const res = await graphql(`
    {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
      
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }

        })
    })

}
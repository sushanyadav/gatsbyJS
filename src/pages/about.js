import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/Head'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I currently learning Gatsby.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage
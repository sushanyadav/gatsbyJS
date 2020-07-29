import React from 'react'

import Head from '../components/Head'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello.</h1>
            <h2>I'm Sushan, a full-stack developer living in beautiful Nepal.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
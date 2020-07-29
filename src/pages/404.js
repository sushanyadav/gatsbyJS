import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/Head'
const NotFound = () => {
    return (
        <Layout>
            <Head title="Not Found" />
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>
                <Link to='/'>Head Home</Link>
            </p>

        </Layout>
    )
}

export default NotFound

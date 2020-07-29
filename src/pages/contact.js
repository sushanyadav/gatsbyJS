import React from 'react'
import Head from '../components/Head'
import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>
                The best way to reach me is via <a href="https://instagram.com/wurstbehav" rel="noreferrer" target="_blank">@wurstbehav</a> on Twitter!
            </p>
        </Layout>
    )
}

export default ContactPage
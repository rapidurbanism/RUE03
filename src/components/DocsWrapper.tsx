import React from 'react'
import { Helmet } from 'react-helmet'
import { Image, Divider } from 'antd'
import logo from 'src/assets/logo.jpg'

const Banner = () => (
  <section style={{textAlign: 'center'}}>
    <Image src={logo} />
  </section>
)

export default ({ component, pageTitle=null }) => {
  const mainStyle: React.CSSProperties = {
    padding: "3em 20%",
    height: "100vh",
    overflowY: "auto"
  }
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <main style={mainStyle}>
        <Banner />
        <Divider />
        {component}
      </main>
    </>
  )
}
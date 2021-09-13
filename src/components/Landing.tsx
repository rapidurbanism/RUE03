import React from "react";
import { Image, Divider, Checkbox, Button, Typography, Space } from 'antd';
import logo from 'src/assets/logo.jpg'
import About from 'src/components/landing/About'
import TermsCondition from "@components/landing/TermsCondition";
import { TitleWrapper } from "./landing/TextWrappers";

const Banner = () => (
  <section>
    <div style={{textAlign: 'center'}}>
      <Image src={logo} />
    </div>
    <About />
  </section>
)
const TandC = ({ authTrigger }) => {
  const [ accepted, setAccepted ] = React.useState<boolean>(false)
  const sectionStyle: React.CSSProperties = {
    height: "40vh",
    overflowY: "auto",
    paddingRight: "1em"
  }

  const AgreementCheckbox = ({ acceptedState }) => {
    const [ accepted, setAccepted ] = acceptedState
    const handleCheck = e => { setAccepted(s => !s)}
  
    return (
      <div onClick={handleCheck} style={{cursor:"pointer"}}>
        <Space>
          <Checkbox checked={accepted} />
          <Typography.Text>
            <em>
            I certify that I have read and accept the above Terms of Use.
            </em>
          </Typography.Text>
        </Space>
      </div>
    )
  }
  return (
    <>
    <TitleWrapper>Terms and Conditions</TitleWrapper>
    <section style={sectionStyle}>
      <TermsCondition />
      <AgreementCheckbox acceptedState={[ accepted, setAccepted ]}/>
    </section>
    <Divider />
    <Button 
      onClick={authTrigger}
      disabled={!accepted} 
      type="primary">Start</Button>
    </>
  )
}

const Landing = ({ authTrigger }) => {
  const mainStyle: React.CSSProperties = {
    padding: "3em 20%",
    height: "100vh",
    overflowY: "auto"
  }
  return (
    <main style={mainStyle}>
      <Banner />
      <Divider />
      <TandC authTrigger={authTrigger}/>
    </main>
  )
}

export default Landing

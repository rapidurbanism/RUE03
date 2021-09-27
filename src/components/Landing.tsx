import React from "react";
import { Divider, Checkbox, Button, Typography, Space } from 'antd';
import DocsWrapper from "./DocsWrapper";
import TermsConds from "./preprocessed/TermsConds";

const TandC = ({ authTrigger }) => {
  const [ accepted, setAccepted ] = React.useState<boolean>(false)

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
    <TermsConds />
    <AgreementCheckbox acceptedState={[ accepted, setAccepted ]}/>
    <Divider />
    <Button 
      onClick={authTrigger}
      disabled={!accepted} 
      type="primary">Start</Button>
    </>
  )
}

const Landing = ({ authTrigger }) => (
  <DocsWrapper component={<TandC authTrigger={authTrigger}/>} />
)

export default Landing

import React from 'react';
import { Typography, } from "antd";

const paragraphStyle: React.CSSProperties = {
  textAlign: "justify",
  textJustify: "inter-word"
}

export const TitleWrapper = ({children}) => (
  <Typography.Title level={3}>{children}</Typography.Title>
)
export const SubtitleWrapper = ({children}) => (
  <Typography.Title level={4}>{children}</Typography.Title>
)

export const LinkWrapper = ({link, linkText=null}) => (
  <Typography.Link target="_blank" href={link}> {linkText ? linkText : link} </Typography.Link>
)

export const ParagraphWrapper = ({children, title=null}) => (
  <>
  {title ? <SubtitleWrapper>{title}</SubtitleWrapper> : null}
  <Typography.Paragraph style={paragraphStyle}>{children}</Typography.Paragraph>
  </>
)

export const ListWrapper = ({list, ordered=false}) => {
  const content = list.map(
    (listItem, index) => (
      <li key={index}>
        { listItem.title ? <em> {listItem.title} </em> : null }
        { listItem.content }
      </li>
    )
  )
  return ordered ? <ol>{content}</ol> : <ul>{content}</ul>
}
import React from 'react'

interface PageTitleProps {
  text: String
}

export const PageTitle = (props: PageTitleProps): JSX.Element => {
  return <h3>{props.text}</h3>
}

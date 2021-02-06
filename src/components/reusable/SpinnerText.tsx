import React, { Fragment } from 'react'
import useLayout from '../../hooks/useLayout'

export const SpinnerText = (): JSX.Element|null => {
  const [layout] = useLayout()

  if (layout.spinners.length) {
    return (
      <Fragment>
        {layout.spinners.map((txt: any): any => {
          return (<p>{layout.texts.templates.dataTypesLoading.replace('__dateTypes__', txt)}</p>)
        })}
      </Fragment>
    )
  }

  return null
}

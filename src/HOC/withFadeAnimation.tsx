import React from 'react';
import Fade from '@material-ui/core/Fade';

export const withFadeAnimation = (component: JSX.Element, isDisplayed: boolean): JSX.Element => {
  return (
    <Fade in={isDisplayed}>
      {component}
    </Fade >
  )
}

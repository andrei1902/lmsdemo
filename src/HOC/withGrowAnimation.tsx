import React from 'react';
import Grow from '@material-ui/core/Grow';

export const withGrowAnimation = (component: JSX.Element, isDisplayed: boolean): JSX.Element => {
  return (
    <Grow in={isDisplayed}>
      {component}
    </Grow>
  )
}

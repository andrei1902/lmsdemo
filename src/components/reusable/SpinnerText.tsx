import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useLayout from '../../hooks/useLayout';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  }
}));

export const SpinnerText = (): JSX.Element|null => {
  const [layout] = useLayout();
  const classes = useStyles();

  if (layout.spinners.length) {
    return (
      <Fragment>
        <div className={classes.root}>
          {layout.spinners.map((txt: any): any => {
            return (
              <Typography variant="body2" component="p" align="center">
                {layout.texts.templates.dataTypesLoading.replace('__dateTypes__', txt)}
              </Typography>
            )
          })}
          <CircularProgress />
        </div>
      </Fragment>
    )
  }

  return null
}

import Course from '../../models/Course';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

interface CourseListItemProps {
  course: Course
}

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export const CourseListItem = (props: CourseListItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.course.name}
        subheader={props.course.createdAt}
      />
      <CardMedia
        className={classes.media}
        image={props.course.image}
        title={props.course.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.course.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

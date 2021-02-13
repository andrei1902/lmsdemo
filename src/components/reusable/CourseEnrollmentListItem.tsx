import React from 'react'
import moment from 'moment';
// Remeber to import locales as you need them
// import 'moment/locale/fr';
import { withGrowAnimation } from '../../HOC/withGrowAnimation'
import DisplayedEnrollment from '../../models/DisplayedEnrollment'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

interface CourseEnrollmentListItemProps {
  enrollment: DisplayedEnrollment,
  locale: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10px',
  },
}));

export const CourseEnrollmentListItem = (props: CourseEnrollmentListItemProps): JSX.Element => {
  const classes = useStyles();

  return withGrowAnimation((
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={props.enrollment.user.avatar}>
          </Avatar>
        }
        title={`${props.enrollment.user.name} - ${props.enrollment.course.name}`}
        subheader={moment(props.enrollment.createdAt).locale(props.locale).format('LLLL')}
      />
    </Card>
  ), true);
}

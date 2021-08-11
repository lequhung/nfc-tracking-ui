import * as React from 'react';
import * as styles from './tracking-info.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import CommuteIcon from '@material-ui/icons/Commute';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HomeIcon from '@material-ui/icons/Home';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TimerIcon from '@material-ui/icons/Timer';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  paper: {
    padding: '6px 16px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white'
  },
  green: {
    backgroundColor: 'green'
  },
  yellow: {
    backgroundColor: '#ffbf00'
  },
  red: {
    backgroundColor: '#ff0000'
  },
  blue: {
    backgroundColor: '#0066cc'
  },
  orange: {
    backgroundColor: '#ff6600'
  },
  date: {
    color: '#d9d9d9'
  }
}));

const TrackingInfo = ({ orderNumber }) => {
  const classes = useStyles();

  return (
    <>
      <h1 className={styles.heading}>Order # {orderNumber}</h1>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2">
              <span className={classes.date}>07/08/2021 9:30am</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <ReceiptIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Received
              </Typography>
              <Typography>We have received your package</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              <span className={classes.date}>07/08/2021 11:30am</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.yellow}>
              <MoveToInboxIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Preparing shipment
              </Typography>
              <Typography>Your package is being prepared for shipment</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              <span className={classes.date}>07/08/2021 1:00pm</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.red}>
              <CommuteIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                On the way
              </Typography>
              <Typography>Your package is on the way to the carrier</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              <span className={classes.date}>07/08/2021 3:15pm</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.blue}>
              <TimerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Received by the carrier
              </Typography>
              <Typography>Your package is with the carrier</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              <span className={classes.date}>07/08/2021 3:45pm</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.orange}>
              <LocalShippingIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Onboard for delivery
              </Typography>
              <Typography>Your package will be delivered today</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              <span className={classes.date}>07/08/2021 4:15pm</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.green}>
              <HomeIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Delivered
              </Typography>
              <Typography>Your package was left at a safe place</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

TrackingInfo.propTypes = {
  orderNumber: PropTypes.string
};

TrackingInfo.defaultProps = {
  orderNumber: ''
};

export default TrackingInfo;

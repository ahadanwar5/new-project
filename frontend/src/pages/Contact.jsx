import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapComponent from '../components/MapComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  deliveryContainer: {
    padding: theme.spacing(5)
  },
  image: {
    width: '100%',
    maxWidth: '200px',
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  deliveryTitle: {
    marginBottom: theme.spacing(4)
  }
}));

export default function Delivery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Navbar/>
      <Container className={classes.deliveryContainer}>
        <Typography variant="h4" align="center" gutterBottom className={classes.deliveryTitle}>
          Contact Us
        </Typography>

        <Typography variant="body1" align="left" paragraph>
            We love hearing from our customers! Feel free to contact us or visit our pharmacy in person to get all your healthcare
            needs sorted.
        </Typography>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <img src={'images/about/phone.png'} className={classes.image} alt="Truck"/>
              <Typography variant="h6" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body2" gutterBottom>
              Get in touch with our representative.
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Link href="tel:+923494328407">+92 349 4328407</Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <img src={'images/about/email.png'} className={classes.image} alt="Check"/>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body2" gutterBottom>
              Send us an email and we will get back to you within 24hrs.
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Link href="mailto:support@paradocs.com">support@paradocs.com</Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <img src={'images/about/location.png'} className={classes.image} alt="Clock"/>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Typography variant="body2" gutterBottom>
              1.5 KM Defence Rd، off Raiwand Road, Lda Avenue Phase 1 Lda Avenue, Lahore, Punjab 54000
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <MapComponent/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}



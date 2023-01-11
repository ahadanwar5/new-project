import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
          Delivery Information
        </Typography>

        <Typography variant="body1" align="left" paragraph>
            At Paradocs, we are on a mission to make quality healthcare effortless, reliable and affordable. 
            We are digital healthcare innovators, dedicated towards improving your access to healthcare by blending technology
            and innovation to solve problems associated with modern day pharmacies. We guarantee 100% authenticity of medicines, 
            an efficient customer support system for your convenience. We want to enable you to live your best life. Live a 
            healthy life, every day.
        </Typography>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <img src={'images/delivery/clock.png'} className={classes.image} alt="Truck"/>
              <Typography variant="h6" gutterBottom>
                Fast Shipping
              </Typography>
              <Typography variant="body2" gutterBottom>
                Enjoy fast and reliable shipping on all orders from our store.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <img src={'images/delivery/check.png'} className={classes.image} alt="Check"/>
              <Typography variant="h6" gutterBottom>
                Quality Check
              </Typography>
              <Typography variant="body2" gutterBottom>
                We take quality control seriously, each and every product is checked by our team before shipping.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <img src={'images/delivery/time.png'} className={classes.image} alt="Clock"/>
              <Typography variant="h6" gutterBottom>
                On-time Delivery
              </Typography>
              <Typography variant="body2" gutterBottom>
              We understand the importance of timely delivery, our team works hard to ensure on-time delivery of your order.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="body2" gutterBottom>
              Delivery charges for orders above 500 PKR is 99 PKR. For anything else, shipment charges are 200 PKR. <br/>
              Delivery will be attempted in the shortest possible time.
              </Typography>
              <Typography variant="body2" gutterBottom>
              <br/> For international orders, please contact us at support@paradocs.com for a shipping quote.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer/>
    </div>
  );
}



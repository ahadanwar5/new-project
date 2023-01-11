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
      <Container className={classes.deliveryContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>

            <Typography variant="h6" gutterBottom align='left'>
                Paradocs
            </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              Paradocs is Pakistan’s leading digital healthcare platform that brings you complete health facilities right to your doorstep. Order medicines online with our e-pharmacy or consult top doctors online in Pakistan from our App right from the comfort of your home. Paradocs Pakistan is the first-ever internationally certified and registered healthcare merchant (LegitScript Certified). We pride ourselves in providing our users with authentic medicines, medical equipment and health supplements in Pakistan.
              </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              Moreover, you can opt to get to avail at-home care services such as home nursing services or book lab tests online. Over the years we have built trust by offering our users the utmost convenience to buy medicines. Get your prescriptions online and get monthly refill facilities with Paradocs Asaan orders. You can also get information about your medicines and learn its uses with our official medical content that will help you make better health choices.
              </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              You can order online medicines, health products, lab test services, online doctor consultations from anywhere in Pakistan with ease (Karachi, Islamabad, Lahore, Rawalpindi & more) by using our fast medicine delivery service . In Karachi, you can get your selected medicines within 60 minutes of your order confirmation with dShops. Our mobile application is available on iOS and android.
              </Typography>


              <Typography variant="h6" gutterBottom align='left'>
                Online Pharmacy
              </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              Paradocs is an online pharmacy that sells genuine medicines at a discounted rate. We offer the lowest medicine price in Pakistan while offering several bank discounts and promo codes with Paradocs discounts. The process works by uploading a prescription that our pharmacists will verify, and create an order for you. We offer medicines from reputable brands such as Pfizer, GSK, Getz Pharma, and more.
              </Typography>

              <Typography variant="h6" gutterBottom align='left'>
                Doctor's Consultation
              </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              Paradocs’ Online Doctor consultation service is safe and easy. We offer free live chat with doctors and paid video consultations with doctors through easy online appointments. We have a multi-disciplinary team of highly qualified doctors from leading General Physicians, Gynaecologists, Chest Specialists, Dermatologists, Nutritionists to Cardiologists in Pakistan, etc that prioritize patient confidentiality.
              </Typography>

              <Typography variant="h6" gutterBottom align='left'>
                Lab Tests & Checkups
              </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              Book lab tests online at discounted rates anywhere in Pakistan on the Paradocs website and app. Get your urgent health check-ups and popular health tests such as COVID-19 IgG Antibody test, Blood tests, HbA1c test and more done right from your home. We provide online patient reports and lab packages from Chughtai Labs, Essa Lab and Pro-Lab.
              </Typography>

              <Typography variant="h6" gutterBottom align='left'>
                Health Packages & Programs
              </Typography>

              <Typography variant="body2" gutterBottom align='left'>
              Do you struggle to meet your health goals and maintain a healthy lifestyle? Worry not, Paradocs has introduced various health packages and programs with which you can stick to a healthier routine and lifestyle along with earning medicine coverages, free doctor consultation vouchers, and rewards. Paradocs offers Diabetes Care Program and Obesity Care Program that you can subscribe to at nominal rates.
              </Typography>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar/>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We are a medical ecommerce store that specializes in providing customers with high-quality, reliable products. Our team of experts has years of experience in the medical industry and is committed to helping customers find the products they need.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We understand the importance of convenience when it comes to purchasing medical products. That's why we have made it easy to browse and purchase products on our website. Our user-friendly website and fast shipping options allow customers to get the products they need quickly and efficiently.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          At our store, we believe in the importance of transparency. That's why we make sure to provide customers with detailed information about our products and services. We want customers to be informed about their purchase decisions and to feel confident about the products they are buying from us.
        </Typography>
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Have any questions? Contact us at
            {' '}
            <Link href="mailto:support@paradocs.com">support@paradocs.com</Link>
          </Typography>
        </Container>
      </footer>

      <Footer/>
    </div>
  );
}


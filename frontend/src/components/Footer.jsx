import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[200],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  linksContainer: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  email: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
  paymentContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  paymentIcon: {
    marginRight: theme.spacing(1),
    fontSize: '2rem',
    color: theme.palette.text.secondary,
  },
  divider: {
    width: '100%',
    margin: theme.spacing(5, 0),
    backgroundColor: theme.palette.divider,
  },
  footerColumn: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  footerRow: {
    margin: theme.spacing(1),
  },
  footerLink: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    margin: theme.spacing(1)
  },
  copyright: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
  },
  footerColumnTitle: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`
  },
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container className={classes.footerRow}>
          <Grid item xs={12} sm={4} className={classes.footerColumn}>
            <List component="nav" className={classes.linksContainer}>
              <ListItem component="a" href="#" className={classes.link}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component="a" href="#" className={classes.link}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem component="a" href="#" className={classes.link}>
                <ListItemText primary="Delivery" />
              </ListItem>
              <ListItem component="a" href="#" className={classes.link}>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerColumn}>
            <Typography variant="subtitle1" className={classes.email}>
              support@paradocs.com
            </Typography>
            <Link href="#" className={classes.footerLink}>Contact Us</Link>
            <Link href="#" className={classes.footerLink}>FAQ</Link>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerColumn}>
            <Box className={classes.paymentContainer}>
              <PaymentIcon className={classes.paymentIcon} />
              <FontAwesomeIcon icon={faCcVisa} className={classes.paymentIcon} />
              <FontAwesomeIcon
                icon={faCcMastercard}
                className={classes.paymentIcon}
              />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="caption" className={classes.copyright}>
          Copyright © Paradocs {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}

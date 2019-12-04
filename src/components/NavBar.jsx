import React from 'react';
import { Navbar, Icon, NavItem, Chip } from 'react-materialize';
import logo from '../assets/images/logo.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  logo: {
    width: '30px',
    marginLeft: '10%',
    marginTop: '15px',
  },
  navitem: {
    font: 'Roboto',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    '&:hover': {
      background: 'transparent',
      color: '#99999A',
    },
    '&:hover .chip': {
      background: '#99999A',
    },
  },
  navbar: {
    background: 'transparent',
  },
  chip: {
    fontSize: '10px',
    lineHeight: '25px',
    height: '25px',
    width: '60px',
    marginRight: '0px',
    color: 'white',
  },
  signup: {
    backgroundColor: '#99999A',
    backgroundColor: 'rgba(191, 191, 191, 0.5)',
  },
  login: {
    backgroundColor: 'transparent',
    border: '1px solid',
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <Navbar
      alignLinks="right"
      brand={<img src={logo} className={classes.logo} />}
      menuIcon={<Icon>menu</Icon>}
      className={classes.navbar}
    >
      <NavItem className={classes.navitem} href="">
        Products
      </NavItem>
      <NavItem className={classes.navitem}>Industries</NavItem>
      <NavItem className={classes.navitem}>Research</NavItem>
      <NavItem className={classes.navitem}>About</NavItem>
      <NavItem className={classes.navitem}>
        <Chip className={[classes.chip, classes.login]}>Log in</Chip>
      </NavItem>
      <NavItem className={classes.navitem}>
        <Chip className={[classes.chip, classes.signup]}>Sign up</Chip>
      </NavItem>
    </Navbar>
  );
}

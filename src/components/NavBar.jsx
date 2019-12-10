import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import logo from '../assets/images/logo.png';
import { makeStyles } from '@material-ui/styles';
import data from '../assets/data/content.json';
import { constructNavBar } from './constructUtils';

const useStyles = makeStyles({
  logo: {
    width: '35px',
    marginTop: '12.5px',
  },
  navitem: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: '14px',
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
    fontSize: '12px',
    fontFamily: 'Roboto',
    lineHeight: '25px',
    height: '25px',
    width: '70px',
    textAlign: 'center',
    marginRight: '0px',
    color: 'white',
  },
  signup: {
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
      brand={
        <img src={logo} className={classes.logo} alt="Gro Intelligence Logo" />
      }
      menuIcon={<Icon>menu</Icon>}
      className={classes.navbar}
    >
      {constructNavBar(data, classes)}
    </Navbar>
  );
}

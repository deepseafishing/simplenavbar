import React from 'react';
import { Row, NavItem } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';
import { constructItems } from './constructUtils';

const useStyles = makeStyles({
  dropdown: {
    display: 'flex',
    '&:hover > div:nth-child(2)': {
      display: 'flex',
    },
    '&:hover > a::after': {
      content: '""',
      borderBottomColor: 'white',
    },
  },
  submenu: {
    display: 'flex',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      bottom: '-3px',
      left: '40%',
      height: '0',
      width: '0',
      border: '9px solid transparent',
      zIndex: '2',
    },
  },
  preview: {
    display: 'none',
    position: 'absolute',
    top: '66px',
    left: '0',
    right: '0',
    backgroundColor: 'white',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '-9999px',
      right: '0',
      borderLeft: '9999px solid white',
      boxShadow: '9999px 0 0 white',
    },
  },
  list: {
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '0px',
  },
});

export default function NavDropDown({ data, className }) {
  const classes = useStyles();

  return (
    <div className={classes.dropdown}>
      <NavItem className={`${className} ${classes.submenu}`}>
        {data.label}
      </NavItem>
      <div className={classes.preview}>
        <Row className={classes.list}>{constructItems(data)}</Row>
      </div>
    </div>
  );
}

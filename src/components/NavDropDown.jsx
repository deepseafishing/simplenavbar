import React from 'react';
import { Row, Col, NavItem } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  dropdown: {
    display: 'flex',
  },
  submenu: {
    display: 'flex',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      bottom: '-2px',
      left: '40%',
      height: '0',
      width: '0',
      border: '9px solid transparent',
      zIndex: '2',
    },
    '&:hover::after': {
      content: '""',
      borderBottomColor: 'white',
    },
    '&:hover + div': {
      display: 'flex',
    },
  },
  preview: {
    display: 'none',
    position: 'absolute',
    top: '66px',
    left: '0',
    right: '0',
    marginBottom: '30px',
    backgroundColor: 'white',
  },
  list: {
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '0',
  },
  listItem: {
    flex: '0 0 25%',
  },
});
export default function NavDropDown({ name, kind, className }) {
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <NavItem className={`${className} ${classes.submenu}`}>{name}</NavItem>
      <div className={classes.preview}>
        <Row className={classes.list}>
          <Col className={classes.listItem} s={1}>
            1
          </Col>
          <Col className={classes.listItem} s={1}>
            2
          </Col>
          <Col className={classes.listItem} s={1}>
            3
          </Col>
          <Col className={classes.listItem} s={1}>
            4
          </Col>
          <Col className={classes.listItem} s={1}>
            5
          </Col>
          <Col className={classes.listItem} s={1}>
            6
          </Col>
          <Col className={classes.listItem} s={1}>
            7
          </Col>
          <Col className={classes.listItem} s={1}>
            8
          </Col>
          <Col className={classes.listItem} s={1}>
            9
          </Col>
          <Col className={classes.listItem} s={1}>
            10
          </Col>
          <Col className={classes.listItem} s={1}>
            11
          </Col>
          <Col className={classes.listItem} s={1}>
            12
          </Col>
        </Row>
      </div>
    </div>
  );
}

import React from 'react';
import { Row, Col, NavItem } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';
import IndustryItem from './IndustryItem.jsx';

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
      bottom: '-2px',
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
  listItem: {
    marginLeft: '0px',
    color: 'white',
    marginTop: '20px',
    marginBottom: '20px',
    height: '128px',
  },
});

const constructIndustryItems = (subnavList, { listItem }) => {
  return subnavList.reduce((acc, curr) => {
    console.log(acc);
    acc.push(
      <Col className={listItem} s={3}>
        <IndustryItem img={curr.img} label={curr.label} />
      </Col>
    );
    return acc;
  }, []);
};

const constructProductItems = (subnavList, { listItem }) => {};

export default function NavDropDown({ data, className }) {
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <NavItem className={`${className} ${classes.submenu}`}>
        {data.label}
      </NavItem>
      <div className={classes.preview}>
        <Row className={classes.list}>
          {data.label === 'Products'
            ? constructProductItems(data.subnavList, classes)
            : constructIndustryItems(data.subnavList, classes)}
        </Row>
      </div>
    </div>
  );
}

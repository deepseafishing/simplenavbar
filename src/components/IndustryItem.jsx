import React from 'react';
import { Chip, Col, Row } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from 'react-use-media-query-hook';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    height: '128px',
    borderRadius: '12px',
    overflow: 'hidden',
    '&:hover img': {
      transform: 'scale(1.1)',
      opacity: '0.8',
    },
  },
  img: {
    height: '142px',
    transition: 'all .3s ease',
    transform: 'scale(1.05)',
  },
  chip: {
    zIndex: '100',
    position: 'absolute',
    cursor: 'pointer',
    fontSize: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
  },
  col: {
    fontFamily: 'Roboto',
    margin: '20px 0px',
  },
});

export default function IndustryItem({ img, label, href }) {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const contents = (
    <div className={classes.container}>
      <Chip className={classes.chip}>{label}</Chip>
      <img
        alt={label}
        src={require(`../assets/images/industries/${img}`)}
        className={classes.img}
      />
    </div>
  );
  return isDesktop ? (
    <Col className={classes.col} s={3}>
      {contents}
    </Col>
  ) : (
    <Row className={classes.col}>{contents} </Row>
  );
}

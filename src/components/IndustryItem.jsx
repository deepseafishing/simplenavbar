import React from 'react';
import { Chip, Col } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    height: '128px',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all .8s ease',
    '&:hover img': {
      transform: 'scale(1.05)',
      opacity: '0.8',
    },
  },
  img: {
    backgroundSize: 'cover',
    width: '208 px',
    height: '128px',
    transition: 'all .8s ease',
  },
  chip: {
    zIndex: '100',
    position: 'absolute',
    cursor: 'pointer',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
  },
  col: {
    marginLeft: '0px',
    color: 'white',
    marginTop: '20px',
    marginBottom: '20px',
    height: '128px',
  },
});

export default function IndustryItem({ img, label, href }) {
  const classes = useStyles();

  return (
    <Col className={classes.col} s={3}>
      <div className={classes.container}>
        <Chip className={classes.chip}>{label}</Chip>
        <img
          alt={label}
          src={require(`../assets/images/industries/${img}`)}
          className={classes.img}
        />
      </div>
    </Col>
  );
}

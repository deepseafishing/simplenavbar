import React from 'react';
import { Col, Chip } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: 'auto',
  },
  img: {
    width: '65px',
    left: '50%',
    position: 'relative',
    transform: 'translate(-50%, 0)',
  },
  col: {
    marginLeft: '0px',
    color: 'black',
    marginTop: '20px',
    marginBottom: '20px',
    borderRight: '1px solid lightgrey',
    '&:last-child': {
      border: 'none',
    },
  },
  label: {
    textAlign: 'center',
    marginTop: '-15px',
    marginBottom: '12px',
  },
  description: {
    fontSize: '10px',
    color: 'grey',
    lineHeight: 'normal',
    textAlign: 'center',
    margin: '0 20px',
  },
  chip: {
    left: '50%',
    position: 'relative',
    transform: 'translate(-50%, 0)',
    cursor: 'pointer',
    fontSize: '9px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#E0213D',
    },
  },
  linkList: {
    marginTop: '10px',
    marginLeft: '2.5em',
    '& > li': {
      fontSize: '11px',
      lineHeight: '2em',
      heigh: 'auto',
      margin: '0 auto',
      cursor: 'pointer',
      color: '#ABABAE',
      textAlign: 'center',
      '& > span:first-child': {
        fontStyle: 'bold',
        color: 'black',
      },
      '&:hover': {
        color: 'white',
        backgroundColor: '#E0213D',
      },
    },
  },
});

const constructLinks = (links, { linkList }) => {
  let ret = [];
  let children = [];
  links.forEach((el, idx) => {
    children.push(
      <li key={idx}>
        <span key={'title-' + idx}>{el.title}</span>{' '}
        <span key={'subtitle-' + idx}>{el.subtitle}</span>
        <span key={'arrow-icon-' + idx} className="icon-chevron-right1" />
      </li>
    );
  });
  ret.push(
    <ul key={'links-list'} className={linkList}>
      {children}
    </ul>
  );
  return ret;
};

export default function ProductItem({ label, href, description, img, links }) {
  const classes = useStyles();

  return (
    <Col className={classes.col} s={3}>
      <div className={classes.container}>
        <img
          src={require(`../assets/images/products/${img}`)}
          className={classes.img}
          alt={label}
        />
        <h6 className={classes.label}>{label}</h6>
        <p className={classes.description}>{description}</p>
        {links ? constructLinks(links, classes) : ''}
        <Chip className={classes.chip}>
          Learn More <span className="icon-chevron-right1" />
        </Chip>
      </div>
    </Col>
  );
}

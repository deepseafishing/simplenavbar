import React from 'react';
import { NavItem, Col, Chip } from 'react-materialize';
import IndustryItem from './IndustryItem.jsx';
import ProductItem from './ProductItem.jsx';
import NavDropDown from './NavDropDown';

export const constructNavBar = (data, styles) => {
  const ret = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].subnavList && data[i].subnavList.length) {
      ret.push(
        <NavDropDown
          key={data[i].label + '-' + i}
          className={styles.navitem}
          data={data[i]}
        />
      );
    } else if (data[i].label === 'Login') {
      ret.push(
        <NavItem key={data[i].label + '-' + i} className={styles.navitem}>
          <Chip className={`${styles.chip} ${styles.login}`}>
            {data[i].label}
          </Chip>
        </NavItem>
      );
    } else if (data[i].label === 'Sign up') {
      ret.push(
        <NavItem key={data[i].label + '-' + i} className={styles.navitem}>
          <Chip className={`${styles.chip} ${styles.signup}`}>
            {data[i].label}
          </Chip>
        </NavItem>
      );
    } else {
      ret.push(
        <NavItem key={data[i].label + '-' + i} className={styles.navitem}>
          {data[i].label}
        </NavItem>
      );
    }
  }
  return ret;
};

export const constructItems = ({ label, subnavList }) => {
  const ret =
    label === 'Products'
      ? subnavList.reduce((acc, curr, idx) => {
          acc.push(
            <ProductItem
              key={idx}
              label={curr.label}
              img={curr.img}
              description={curr.description}
              href={curr.href}
              links={curr.links}
            />
          );
          return acc;
        }, [])
      : subnavList.reduce((acc, curr, idx) => {
          acc.push(
            <IndustryItem
              key={idx}
              img={curr.img}
              label={curr.label}
              href={curr.href}
            />
          );
          return acc;
        }, []);
  if (subnavList.length % 4 !== 0) {
    for (let i = 4; i > subnavList.length % 4; i--) {
      ret.push(<Col s={3} />);
    }
  }

  return ret;
};

export const constructLinks = (links, { linkList }) => {
  const ret = [];
  const children = [];
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

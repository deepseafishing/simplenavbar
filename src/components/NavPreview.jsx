import React from 'react';
import {
  Row,
  Col,
  Navbar,
  NavItem,
  Dropdown,
  Button,
  Icon,
  Chip
} from 'react-materialize';
import logo from '../assets/images/logo.png';
import '../assets/styles/navbar.css';
export default class NavPreview extends React.Component {
  render() {
    return (
      <NavItem href="">
        Products
        <ul class="sub">
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
        </ul>
      </NavItem>
    );
  }
}

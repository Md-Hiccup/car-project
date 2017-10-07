
import React, {Component} from "react";
import { Link } from "react-router-dom";
//import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {Button, Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link  to="/">Trippy Car</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1}><Link to="/signup"><Button bsStyle="warning">Signup</Button></Link></NavItem>
                            <NavItem eventKey={2}><Link to="/login"><Button bsStyle="primary">Login</Button></Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

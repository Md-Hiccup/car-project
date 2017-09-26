
import React, {Component} from "react";
import { Link } from "react-router-dom";
 import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

export default class Navbars extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light toggleable style={{backgroundColor : '#e3f2fd'}}>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <Link to="/signup"><Button outline color="warning" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Signup</Button></Link>{' '}
                                <Link to="/login"><Button outline color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Login</Button></Link>{'  '}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
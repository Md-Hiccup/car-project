import React , {Component} from 'react';
// import { Card, Button ,ButtonGroup, CardDeck, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, } from 'reactstrap';
import {FormGroup, Col, Row, ControlLabel, FormControl, Checkbox, Button, Form, ButtonToolbar} from 'react-bootstrap';

class Signup extends Component {
    render(){
        const containerStyle = { marginTop: "40px" };
        return (
            <div className="container" style={containerStyle}>
                <h3 className="text-center text-warning">Create New Account</h3><br/>
                <Row>
                    <Col  smOffset={1} sm={10}>
                        <hr />
                        <Form horizontal>
                            <FormGroup controlId="userName">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Name&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="Full Name" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userEmail">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="email" placeholder="Email" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userMobile">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Mobile&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="number" placeholder="Mobile No." required/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userPassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Password" required/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userRePassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Re Password" required/>
                                </Col>
                            </FormGroup><br />
                            <FormGroup>
                                <Col smOffset={3} sm={10}>
                                    <Checkbox>I have read and agreed on Terms & Conditions</Checkbox>
                                </Col>
                            </FormGroup>
                            <br/>
                            <FormGroup>
                                <Col smOffset={5} sm={2}>
                                    <Button type="submit" bsStyle="success" block>
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                            <hr />
                            <Col smOffset={3} sm={10}>
                                <ButtonToolbar>
                                    <Button bsStyle="primary"><i className="fa fa-facebook fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Sign-up with Facebook&nbsp;&nbsp;&nbsp;&nbsp;</Button>{' '}
                                    <Button bsStyle="danger"><i className="fa fa-google fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Sign-up with Google&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                                </ButtonToolbar>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Signup;
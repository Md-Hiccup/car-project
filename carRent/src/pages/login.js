import React , {Component} from 'react';
import {Link} from 'react-router-dom';
// import { Card, Button,ButtonGroup, CardDeck, CardText, Row, Col,Form, FormGroup, FormText, Label, Input, } from 'reactstrap';
import {FormGroup, Col, Row, ControlLabel, FormControl, Checkbox, Button, Form, HelpBlock, ButtonToolbar} from 'react-bootstrap';

class Login extends Component {
    render() {
    const containerStyle = { marginTop: "40px" };
        return (
            <div className="container" style={containerStyle}>
                <h3 className="text-center text-primary">LOGIN</h3><br/>
                <Row>
                    <Col  smOffset={1} sm={10}>
                        <hr />
                        <Form horizontal>
                            <FormGroup className="text-center">
                                <Col sm={12}>
                                    <HelpBlock >Please login with your existing account</HelpBlock>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userEmail">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userPassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                            </FormGroup><br />
                            <FormGroup>
                                <Col smOffset={5} sm={8}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={5} sm={2}>
                                    <Button bsStyle="primary" type="submit" block>
                                        Sign in
                                    </Button>
                                </Col>
                            </FormGroup><br />
                            <FormGroup>
                                <Col smOffset={3} sm={10}>
                                    Not a member ?<Link to="/signup">&nbsp;&nbsp;Create an account</Link>{' '}|{' '}
                                    Forgot password ?<Link to="/forgetpassword">&nbsp;&nbsp;Reset password</Link>
                                </Col>
                            </FormGroup>
                            <hr />
                            <Col smOffset={3} sm={10}>
                                <ButtonToolbar>
                                    <Button bsStyle="primary" href="/auth/facebook"><i className="fa fa-facebook fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Sign-in with Facebook&nbsp;&nbsp;&nbsp;&nbsp;</Button>{' '}
                                    <Button bsStyle="danger" href="/auth/google"><i className="fa fa-google fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Sign-in with Google&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                                </ButtonToolbar>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login;
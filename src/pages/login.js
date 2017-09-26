import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, Button,ButtonGroup, CardDeck, CardText, Row, Col,Form, FormGroup, FormText, Label, Input, } from 'reactstrap';

class Login extends Component {
    render() {
    const containerStyle = { marginTop: "40px" };
        return (
            <div className="container" style={containerStyle}>
                <h3 className="text-center text-primary">LOGIN</h3><br/>

                <Row>
                    <Col  sm={{ size: 8, push: 1, pull: 1, offset: 1 }}>
                        <CardDeck>
                            <Card block outline color="primary" >
                                <CardText>
                                    <Form>
                                        <Col sm={12}>
                                            <FormText color="muted" className="text-center">Please login with your existing account</FormText>
                                        </Col>
                                        <hr/>
                                        <FormGroup row>
                                            <Label for="userEmail" sm={3}>Email &nbsp;:</Label>
                                            <Col sm={9}>
                                                <Input type="email" name="email" id="userEmail" placeholder=" Email " required/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="userPassword" sm={3}>Password&nbsp;:</Label>
                                            <Col sm={9}>
                                                <Input type="password" name="password" id="userPassword" placeholder=" Password" required/>
                                            </Col>
                                        </FormGroup>
                                        <Col sm={{ size: 10, offset: 5 }} >
                                            <Button color="success" type="submit">LOGIN</Button><br/>
                                        </Col>
                                        <br />
                                        <FormGroup row>
                                            <Col sm={{size:6, offset:3}}>
                                                <Label>Not a member ?<Link to="/signup">&nbsp;&nbsp;Create an account</Link> </Label>
                                                {/*<Label>Forgot password ?<Link to="/forgetpassword">&nbsp;&nbsp;Reset password</Link> </Label>*/}
                                            </Col>
                                        </FormGroup>
                                        <hr />
                                        <Form inline>
                                            <FormGroup >
                                                <Col sm={{ size:5, offset:1}}>
                                                    <ButtonGroup>
                                                        <Button color="primary" block><i className="fa fa-facebook fa-lg" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            Login with Facebook&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                                                    </ButtonGroup>
                                                </Col>
                                                <Col sm={{ size:5, offset:1}}>
                                                    <ButtonGroup>
                                                        <Button color="danger" block><i className="fa fa-google fa-lg" ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            Login with Google&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                                                    </ButtonGroup>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </Form>
                                </CardText>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login;
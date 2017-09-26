import React , {Component} from 'react';
import { Card, Button,ButtonGroup, CardDeck, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, } from 'reactstrap';

class Signup extends Component {
    render(){
        const containerStyle = { marginTop: "40px" };
        return (
            <div className="container" style={containerStyle}>
                <h3 className="text-center text-warning">Create New Account</h3><br/>

                <Row>
                    <Col  sm={{ size: 8, push: 1, pull: 1, offset: 1 }}>
                        <CardDeck>
                        <Card block outline color="warning" >
                            <CardTitle className="text-center">Enter your details</CardTitle>
                            <CardText>
                                <hr />
                                <Form>
                                    <FormGroup row>
                                        <Label for="userName" sm={3}>Name &nbsp;:</Label>
                                        <Col sm={9}>
                                            <Input type="text" name="name" id="userName" placeholder="Enter Full Name" required/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="userEmail" sm={3}>Email &nbsp;:</Label>
                                        <Col sm={9}>
                                            <Input type="email" name="email" id="userEmail" placeholder="Enter Email" required/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="userMobile" sm={3}>Mobile&nbsp;:</Label>
                                        <Col sm={9}>
                                            <Input type="number" name="number" id="userMobile" placeholder="Enter Mobile No." required/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="userPassword" sm={3}>Password&nbsp;:</Label>
                                        <Col sm={9}>
                                            <Input type="password" name="password" id="userPassword" placeholder="Enter Password" required/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="userRePassword" sm={3}>Re-Password&nbsp;:</Label>
                                        <Col sm={9}>
                                            <Input type="password" name="repassword" id="userRePassword" placeholder="Enter Re-password" required/>
                                        </Col>
                                    </FormGroup><br />
                                    <FormGroup check>
                                        <Col sm={{ size: 10, offset: 3 }} >
                                            <Label check>
                                                <Input type="checkbox" />{' '}
                                                 I have read and agreed on Terms & Conditions
                                            </Label>
                                        </Col>
                                    </FormGroup>
                                    <br/>
                                    <Col sm={{ size: 10, offset: 5 }} >
                                        <Button color="success" type="submit">Submit</Button>
                                    </Col><hr/>
                                    <Form inline>
                                        <FormGroup >
                                            <Col sm={{ size:5, offset:1}}>
                                                <ButtonGroup>
                                                    <Button color="primary" block><i className="fa fa-facebook fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        Sign-up with Facebook&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                                                </ButtonGroup>
                                            </Col>
                                            <Col sm={{ size:5, offset:1}}>
                                                <ButtonGroup>
                                                    <Button color="danger" block><i className="fa fa-google fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        Sign-up with Google&nbsp;&nbsp;&nbsp;&nbsp;</Button>
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
export default Signup;
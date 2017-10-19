import React , {Component} from 'react';
import {Link} from 'react-router-dom';
// import { Card, Button,ButtonGroup, CardDeck, CardText, Row, Col,Form, FormGroup, FormText, Label, Input, } from 'reactstrap';
import {FormGroup, Col, Row, ControlLabel, FormControl, Checkbox, Button, Form, HelpBlock, ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state ={
            user: {
                email: '',
                password: '',
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();
        var userdata = this.state.user;
        try {
            await axios({
                url : '/login',
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: userdata
            }).then(res => {console.log("a",res); return res.json});
        } catch(e){
            console.log('There was an error working on this', e)
        }
        // const user = await response.json();
        // if(user){
        //     local
        // }
            // .then(res => {console.log("a",res); return res.json();})
            // .then(data => {console.log('Request succeeded with JSON response', data)});
    };
    handleOnChange(e) {
        const name = e.target.name;
        const user = this.state.user;
        user[name] = e.target.value;
        this.setState({user});
    };

    render() {
         const containerStyle = { marginTop: "40px" };
        return (
            <div className="container" style={containerStyle}>
                <h3 className="text-center text-primary">LOGIN</h3><br/>
                <Row>
                    <Col  smOffset={1} sm={10}>
                        <hr />
                        <Form horizontal onSubmit={this.handleSubmit}>
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
                                    <FormControl type="email" placeholder="Email" name="email" onChange={this.handleOnChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userPassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Password" name="password" onChange={this.handleOnChange}/>
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
import React , {Component} from 'react';
// import { Card, Button ,ButtonGroup, CardDeck, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, } from 'reactstrap';
import {FormGroup, Col, Row, ControlLabel, FormControl, Checkbox, Button, Form, ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';

class Signup extends Component {
    constructor(){
        super();
        this.state ={
            user: {
                name: '',
                email: '',
                mobile: '',
                password: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();
        var userdata = this.state.user;
        console.log('u', JSON.stringify(userdata));
        try {
            await axios({
                url: '/signup',
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(userdata),
            }).then(res => {console.log("a", res); return res.json});

        } catch (e) {
            console.log('There was an error working on this', e)
        }
        // const user = await response.json();
        // if(user){
        //     local
        // }
        // .then(res => {console.log("a",res); return res.json();})
        // .then(data => {console.log('Request succeeded with JSON response', data)});
    }
    handleOnChange(e) {
        console.log('fasdfa',e.target.name);
        console.log('dadfa', e.target.value);
        const name = e.target.name;
        const user = this.state.user;
        user[name] = e.target.value;
        this.setState({user});
        console.log('user',this.state.user);
    };
    render(){
        const containerStyle = { marginTop: "40px" };
        return (
            <div className="container" style={containerStyle}>
                <h3 className="text-center text-warning">Create New Account</h3><br/>
                <Row>
                    <Col  smOffset={1} sm={10}>
                        <hr />
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup controlId="userName">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Name&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="Full Name" name="name" onChange={this.handleOnChange} required/>
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
                            <FormGroup controlId="userMobile">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Mobile&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="number" placeholder="Mobile No." name="mobile" onChange={this.handleOnChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userPassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Password" name="password" onChange={this.handleOnChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="userRePassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Re-Password&nbsp;:
                                </Col>
                                <Col sm={6}>
                                    <FormControl type="password" placeholder="Re Password" name="repassword" onChange={this.handleOnChange}/>
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
                            {/*<Col smOffset={3} sm={10}>*/}
                                {/*<ButtonToolbar>*/}
                                    {/*<Button bsStyle="primary"><i className="fa fa-facebook fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                        {/*Sign-up with Facebook&nbsp;&nbsp;&nbsp;&nbsp;</Button>{' '}*/}
                                    {/*<Button bsStyle="danger"><i className="fa fa-google fa-lg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                        {/*Sign-up with Google&nbsp;&nbsp;&nbsp;&nbsp;</Button>*/}
                                {/*</ButtonToolbar>*/}
                            {/*</Col>*/}
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Signup;
import React ,{Component} from 'react';
import {FormGroup, Col, Row, ControlLabel, FormControl, Button, Form, Grid} from 'react-bootstrap';
import DateTime from 'react-datetime';
import moment from 'moment';
import '../css/react-datetime.css';

class FrontPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        var yesterday = DateTime.moment().subtract( 1, 'day' );
        var valid = function( current ){
            return current.isAfter( yesterday );
        };
        const containerStyle = { marginTop: "30px" };
        return (
            <div className="container" style={containerStyle}>
                <h2 className="text-capitalize text-center text-info">Rental Cars</h2>
                <hr/>
                <Grid>
                    <Row>
                        <Col  smOffset={1} sm={10}>
                            <Form horizontal>
                                <FormGroup controlId="pickUpLocation">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Pick-Up Location&nbsp;:
                                    </Col>
                                    <Col sm={6}>
                                        <FormControl type="text" placeholder="Choose a pick-up location" required/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="pickUpDate">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Pick-Up Date&nbsp;:
                                    </Col>
                                    <Col sm={6}>
                                        <DateTime input={true} dateFormat="DD-MM-YYYY" timeFormat={false} closeOnSelect={true} isValidDate={valid} />
                                        {/*<FormControl type="date" placeholder="date" required/>*/}
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="pickUpTime">
                                    <Col componentClass={ControlLabel} sm={3} >
                                        Pick-Up Time&nbsp;:
                                    </Col>
                                    <Col sm={6}>
                                        <DateTime dateFormat={false} timeFormat={true} input={true} closeOnSelect={true} />
                                        {/*<FormControl type="time" placeholder="time" required/>*/}
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="dropOffLocation">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Drop-Off Location&nbsp;:
                                    </Col>
                                    <Col sm={6}>
                                        <FormControl type="text" placeholder="Choose a drop-off location" required/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="dropOffDate">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Drop-Off Date&nbsp;:
                                    </Col>
                                    <Col sm={6}>
                                        <DateTime input={true} dateFormat="DD-MM-YYYY" timeFormat={false} closeOnSelect={true} isValidDate={valid}/>
                                        {/*<FormControl type="date" placeholder="date" required/>*/}
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="dropOffTime">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Drop-Off Time&nbsp;:
                                    </Col>
                                    <Col sm={6}>
                                        <DateTime dateFormat={false} input={true} closeOnSelect={true} />
                                        {/*<FormControl type="time" placeholder="time" required/>*/}
                                    </Col>
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Col smOffset={5} sm={2}>
                                        <Button type="submit" bsStyle="success" block>
                                            Search Cars
                                        </Button>
                                    </Col>
                                </FormGroup>
                                <hr />
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default FrontPage;
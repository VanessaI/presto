import React from 'react';
import PropTypes from 'prop-types';s
import { Well } from 'react-bootstrap';
import phoneNumberPropType from 'phone-number-prop-type';
import {purple_main} from "../../resources/colors";
import { Button, FormGroup, Label, Input, Row, Col, FormFeedback, Alert } from 'reactstrap';

const SignupComponent = props => {

    const styles = {
        title:{
            marginTop: 115
        },
        well: {
            margin: '4% 20%'
        },
        row: {
            marginBottom: 10
        },
        signUp: {
            backgroundColor: purple_main,
            color:'white'
        }
    };


    return (
        <div>
            <div style={styles.title}>
                <h1 className="mainTitle">Sign Up to <span style={{ color: purple_main }}>Presto</span></h1>
                <h3 className="mainTitle">Attention foodies: try not to stay up all night on this!</h3>
            </div>

            <Well style={styles.well}  bsSize="large">
                <FormGroup>
                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="firstName"> First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                value={props.firstName}
                                placeholder="Ex: LeBron"
                                onChange={props.handleFirstNameChange}
                            />
                            <FormFeedback>First name must be more than 3 letters</FormFeedback>
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="lastName"> Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                value={props.lastName}
                                placeholder="Ex: Bryant"
                                onChange={props.handleLastNameChange}
                            />
                        </Col>
                    </Row>

                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="email"> Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={props.email}
                                placeholder="example@domain.com"
                                onChange={props.handleEmailChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>

                            <FormGroup tag="fieldset" column={"true"}>
                                <Label for="userType"> User Type </Label>
                                <Row >
                                    <Col sm={{ size: 4, offset: 1 }}>
                                        <Label check>
                                            <Input type="radio" name="userType" value="customer"
                                                   checked = {props.userType==='customer'}
                                                   onChange={props.handleUserTypeChange}/>{' '}
                                            Customer
                                        </Label>
                                    </Col>
                                    <Col sm={{ size: 4, offset: 1 }}>
                                        <Label check>
                                            <Input type="radio" name="userType" value="restaurant"
                                                   checked = {props.userType==='restaurant'}
                                                   onChange={props.handleUserTypeChange}/>{' '}
                                            Restaurant
                                        </Label>
                                    </Col>
                                </Row>
                            </FormGroup>

                        </Col>
                    </Row>

                    {props.userType === 'restaurant'
                    &&
                    <div style={styles.row}>
                        <Label for="confirmPassword">Restaurant Name</Label>
                        <Input
                            type="text"
                            name="restaurantName"
                            value={props.restaurantName}
                            placeholder="Ex: Bob's Burger"
                            onChange={props.handleRestaurantNameChange}
                        />
                    </div>}

                    <Row style={styles.row}>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={props.password}
                                placeholder="********"
                                onChange={props.handlePasswordChange}
                            />
                        </Col>
                        <Col sm={{ size: 6, offset: 1 }}>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                value={props.password2}
                                placeholder="********"
                                onChange={props.handlePassword2Change}
                            />
                        </Col>
                    </Row>

                    <div style={{ display: 'flex' }}>
                        <Button
                            onClick={props.handleSubmit}
                            style={{ ...styles.signUp, width: 150 }}
                            type="submit"
                        >
                            Sign Up
                        </Button>
                        <Button
                            onClick={props.handleCancel}
                            style={{ marginLeft: 8 }}
                        >
                            Cancel
                        </Button>
                    </div>

                </FormGroup>
                <Alert color="primary">
                    There was an error signing up. Please make sure that the name is greater than 3 characters,email greater than 12 and the password greater than 8
                </Alert>
            </Well>
        </div>
    );
};

SignupComponent.propsTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    phoneNumber: phoneNumberPropType.isRequired,
    handleFirstNameChange: PropTypes.func,
    handleLastNameChange: PropTypes.func,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleAddressChange: PropTypes.func,
    handlePostalCodeChange: PropTypes.func,
    handlePhoneNumberChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleUserTypeChange: PropTypes.func,
    handleRestaurantNameChange: PropTypes.func,
    validationState:PropTypes.func
};

export default SignupComponent;

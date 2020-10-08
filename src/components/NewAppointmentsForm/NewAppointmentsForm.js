import React from 'react';

import {TabMakeAppointConfirmContainer} from "../Tabs/TabMakeAppointConfirm";
import {TabMakeAppointInfoContainer} from "../Tabs/TabMakeAppointInfo";

import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: "100%",
        width: "100%",
        flex: "1",
        padding: "20px"
    }
}));

const StepContent = (props) => {
    switch (props.step) {
        case 0:
            return <TabMakeAppointInfoContainer handleBack={props.handleBack}
                                                handleNext={props.handleNext}/>;
        case 1:
            return <TabMakeAppointConfirmContainer handleBack={props.handleBack}
                                          handleNext={props.handleNext}/>;
        default:
            return <Redirect to="/" />;
    }
}


export const NewAppointmentsForm = (props) => {
    const classes = useStyles()

    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Paper elevation={3} className={classes.paper}>
            <Container>
                <Stepper activeStep={activeStep}>
                    {<StepContent step={activeStep}
                                  handleBack={handleBack}
                                  handleNext={handleNext}
                    />}
                </Stepper>
            </Container>
        </Paper>
    );
};


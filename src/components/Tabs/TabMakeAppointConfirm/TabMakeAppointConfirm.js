import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components"

import TextField from "@material-ui/core/TextField";
import {DatePicker} from "../TabMakeAppointInfo/DatePicker";
import {Box} from "../TabMakeAppointInfo/TabMakeAppointInfo";
import Button from "@material-ui/core/Button";
import {addAppointment, setConfirmValues} from "../../../store/appointReducer";


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
`

const TabMakeAppointConfirm = (props) => {
    const handleConfirm = () => {
        props.addAppointment(props.confirmValues)
        props.handleNext()
        console.log(props)
    }
    return (
        <Container>
            <Box>
                <TextField
                    disabled
                    name="fullName"
                    variant={"outlined"}
                    label={"Full Name"}
                    value={props?.confirmValues?.fullName}
                />
                <DatePicker value={props?.confirmValues?.date} disabled={true}/>
            </Box>

            <Box>
                <TextField
                    disabled
                    name="note"
                    variant={"filled"}
                    label={"Note"}
                    value={props?.confirmValues?.note || "Empty"}
                    fullWidth
                />
            </Box>


            <Box>
                <Button onClick={props.handleBack}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConfirm}
                    type="submit"
                >
                    Confirm
                </Button>
            </Box>
        </Container>
    );
};


const mapStateToProps = (state) => ({
    confirmValues: state.appointments.confirmValues
})

const mapDispatchToProps = {
    setConfirmValues,
    addAppointment
}


export const TabMakeAppointConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(TabMakeAppointConfirm)




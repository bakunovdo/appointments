import React from 'react';
import styled from "styled-components"

import {Controller, useForm} from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import {DatePicker} from "./DatePicker";
import {setConfirmValues} from "../../../store/appointReducer";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";


export const Box = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  width: 100%;
  input {
    height: 100%;
    margin-right: 20px;
  }
  
  form {
    width: 100%;
  }
`

export const TabMakeAppointInfo = (props) => {
    const [selectedDate, handleDateChange] = React.useState(new Date());

    const {control, handleSubmit} = useForm();

    const onSubmit = data => {
        props.handleNext()
        props.setConfirmValues({...data, date: props?.confirmValues?.date || selectedDate})
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Box>
                    <Controller
                        as={TextField}
                        name="fullName"
                        control={control}
                        defaultValue={props?.confirmValues?.fullName || ""}
                        variant={"outlined"}
                        label={"Full Name"}
                        required
                    />

                    <DatePicker value={props?.confirmValues?.date || selectedDate}
                                onChange={handleDateChange}
                                disabled={false}/>
                </Box>

                <Box>
                    <Controller
                        as={TextField}
                        control={control}
                        defaultValue={props?.confirmValues?.note || ""}
                        variant={"filled"}
                        label={"Note"}
                        name="note"
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
                        onClick={props.handleSubmit}
                        type="submit"
                    >
                        Next
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    confirmValues: state.appointments.confirmValues
})

const mapDispatchToProps = {
    setConfirmValues
}

export const TabMakeAppointInfoContainer = connect(mapStateToProps, mapDispatchToProps)(TabMakeAppointInfo)



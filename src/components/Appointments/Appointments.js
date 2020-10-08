import React from 'react';
import {connect} from 'react-redux'

import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';


import {AppointmentItem} from "./AppointmentItem";
import {deleteAppointment, toggleAppointment} from "../../store/appointReducer";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        minHeight: "100%",
        width: "100%",
        flex: "1"
    },
    emptyList: {
        padding: "40px",
        width: "100%",
        textAlign: "center"
    }
}));


const Appointments = (props) => {
    const classes = useStyles()
    return (
        <Paper elevation={3} className={classes.paper}>
            <List className={classes.root}>
                {props.list.map((item) => {
                    const labelId = `checkbox-list-label-${item.id}`;
                    return <AppointmentItem key={item.id}
                                            id={item.id}
                                            fullName={item.fullName}
                                            completed={item.completed}
                                            date={item.date}
                                            note={item.note}
                                            labelId={labelId}
                                            deleteHandler={() => props.deleteAppointment(item.id)}
                                            toggleHandler={() => props.toggleAppointment(item.id)}
                    />
                })}
            </List>

            {props.list.length === 0 &&
            <Container className={classes.emptyList}>
                <Typography variant="h3">
                    List empty
                </Typography>
            </Container>
            }

        </Paper>
    );
};

const mapStateToProps = (state) => ({
    list: state.appointments.list
})

const mapDispatchToProps = {
    deleteAppointment,
    toggleAppointment
}

export const AppointmentsContainer = connect(mapStateToProps, mapDispatchToProps)(Appointments)
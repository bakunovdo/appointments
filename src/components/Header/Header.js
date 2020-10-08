import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink, withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }
}));

const MakeAppointmentButton = () => {
    return (
        <NavLink to="/makeAppointment">
            <Button color="inherit">
                Make Appointment
            </Button>
        </NavLink>
    )
}

const Header = (props) => {
    const classes = useStyles()
    return (
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Appointments
            </Typography>
            {props.location.pathname === "/" && <MakeAppointmentButton/> }
        </Toolbar>
    );
};


export const HeaderContainer = withRouter(Header)
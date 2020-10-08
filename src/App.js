import React from 'react';
import {Route} from "react-router-dom";
import styled from "styled-components"

import AppBar from "@material-ui/core/AppBar";
import {HeaderContainer} from "./components/Header";

import {AppointmentsContainer} from "./components/Appointments";
import {NewAppointmentsForm} from "./components/NewAppointmentsForm";
import {BrowserRouter} from "react-router-dom";

const SApp = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const SContentApp = styled.div`
  margin-top: 20px;
  width: 50%;
  //min-height: 00px;
`


export function App() {
    return (
        <BrowserRouter>
            <SApp>
                <AppBar position="static">
                    <HeaderContainer/>
                </AppBar>

                <SContentApp>
                    <Route exact path="/" component={AppointmentsContainer}/>
                    <Route exact path="/makeAppointment" component={NewAppointmentsForm}/>
                </SContentApp>
            </SApp>
        </BrowserRouter>
    );
}

import React from 'react';
import {format, parseISO, formatISO} from "date-fns";

import styled from "styled-components"

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import Typography from "@material-ui/core/Typography";

const Info = styled.span`
    display:flex;
    flex-direction: column;
`

export const AppointmentItem = (props) => {
    const {date, fullName, labelId , note, completed} = props
    const confirmDialog = () => {
        const result = window.confirm("Delete appointment?")
        result && props.deleteHandler()
    }

    return (
        <ListItem role={undefined} alignItems="flex-start" button>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    onChange={props.toggleHandler}
                    checked={completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                />
            </ListItemIcon>
            <ListItemText id={labelId}
                          primary={fullName}
                          secondary={
                              <Info>
                                  <Typography
                                      component="span"
                                      variant="body2"
                                      color="textSecondary"
                                  >
                                      {/*{date}*/}
                                      {format( new Date(date), "Pp")}
                                  </Typography>
                                  <Typography
                                      component="span"
                                      variant="body2"
                                      color="textSecondary"
                                  >
                                      {note}
                                  </Typography>
                              </Info>
                          }

            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={confirmDialog}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}



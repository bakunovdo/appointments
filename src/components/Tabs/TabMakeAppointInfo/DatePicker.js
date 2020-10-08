import React from 'react';
import {DateTimePicker} from "@material-ui/pickers";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


export const DatePicker = (props) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                label="DateTimePicker"
                inputVariant="outlined"
                value={props.value}
                onChange={props.onChange}

                readOnly={props.disabled}

                variant={"inline"}
                format="yyyy/MM/dd HH:mm"
                disableToolbar={"true"}
                disablePast
                required
            />
        </MuiPickersUtilsProvider>
    );
};



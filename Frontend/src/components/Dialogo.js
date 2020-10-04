import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';


export default function FormDialog(props) {

  return (
    <div>
      <Dialog open={props.open} onClose={() => props.fun(false)} aria-labelledby="form-dialog-title">
        <form className="form" onSubmit={props.handleSubmit}>
        <DialogTitle id="form-dialog-title">Add Card</DialogTitle>
        <DialogContent>
            Description: 
            <TextField required
                id="description"
                onChange={props.handleDescriptionChange}
                value={props.state.description}> 
            </TextField> <br></br> <br></br>
            Name:
            <TextField required
                id="name"
                onChange={props.handleNameChange}
                value={props.state.name}> 
            </TextField> <br></br> <br></br>
            Email:
            <TextField required
                id="email"
                onChange={props.handleEmailChange}
                value={props.state.email}> 
            </TextField> <br></br> <br></br>
            <TextField required
                id="status"
                onChange={props.handleStatusChange}
                value={props.state.status}
                select
                label="Select"
                helperText="Please select the status"
                style = {{width: '100%'}}
              > 
                <MenuItem value="Ready">Ready</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
            </TextField>             
                  
            
            <br></br> <br></br>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker  required
                            margin="normal"
                            id="due-date"
                            label="Duedate"
                            format="dd-MM-yyyy"
                            value = {props.state.dueDate}
                            onChange={props.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </Grid>
            </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Add #{props.state.items.length + 1}
          </Button>
          <Button onClick={() => props.fun(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

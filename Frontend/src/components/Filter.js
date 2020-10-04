import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import MenuItem from '@material-ui/core/MenuItem';


export default function FormDialog(props) {
    console.log("ITEMSMASmdAMSDM");
    console.log(props.state.items);
  return (
      
    <div>
      <Dialog open={props.open} onClose={() => props.fun(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">TASK FILTERS</DialogTitle>
        <DialogContent>
                <TextField
                id="idFilterDueDate"
                onChange={props.handleDueFilter}
                value={props.state.dueFilter}
                select
                label="Duedate"
                helperText="Filter by Duedate"
                style = {{width: '100%'}}
              > 
               {props.showDuedates().map((dueDate, i) => (
                    <MenuItem key={dueDate + i} value={dueDate}>
                        {dueDate}
                    </MenuItem>
                ))}
            </TextField>  
            <TextField
                id="idFilterEmail"
                onChange={props.handleEmailFilter}
                value={props.state.emailFilter}
                select
                label="Responsible (email)"
                helperText="Filter by email"
                style = {{width: '100%'}}
              > 
                {props.showEmails().map((email, i) => (
                    <MenuItem key={email + i} value={email}>
                        {email}
                    </MenuItem>
                ))}
            </TextField>      

            <TextField
                id="idFilterStatus"
                onChange={props.handleStatusFilter}
                value={props.state.statusFilter}
                select
                label="Status"
                helperText="Filter by status"
                style = {{width: '100%'}}
            > 
               <MenuItem value="Ready">Ready</MenuItem>
               <MenuItem value="In Progress">In Progress</MenuItem>
               <MenuItem value="Done">Done</MenuItem>
            </TextField>    
        </DialogContent>
        <DialogActions>
          <Button onClick = {props.handleFilter} color="primary">
            Add Filter
          </Button>
          <Button onClick={() => props.fun(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


export default function CardLab (props) {
    
    const useStyles = makeStyles({
        root: {
            width: '100%',            
            background: '#606060',
            margin: 'auto',
            borderRadius: '5px'
        }, 
        contenido: {
            color: 'white',
        },
    
    });
    const classes = useStyles();
    

    const myList = [
        {"key": "Description", "value": props.description}, 
        {"key": "Name", "value": props.name}, 
        {"key": "Email", "value": props.email}, 
        {"key": "Status", "value": props.status}, 
        {"key": "Duedate", "value": props.dueDate}];
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardContent className={classes.contenido} style = {{fontFamily: "'Roboto Slab', 'serif'"}}>
                    {myList.map((item) =>
                            <div key = {item.key + "_" + item.value}>                                 
                                <h2 style = {{display: 'inline-block'}}> {item.key}: </h2> {item.value} 
                            </div>
                    )}                
                </CardContent>
            </CardActionArea>
        </Card>
    );
    
}
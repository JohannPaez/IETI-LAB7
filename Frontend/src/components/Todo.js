import React from 'react';
import CardLab from './CardLab'

export class Todo extends React.Component {

    render() {
        return (       
            <div>
                <CardLab 
                    description = {this.props.description}
                    name = {this.props.name}
                    email = {this.props.email}
                    status = {this.props.status}
                    dueDate = {this.props.dueDate.toString()}
                >
                </CardLab>
                <br />
            </div>
        );
    }
    
}

import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    componentDidMount() {
        fetch('https://serene-earth-78588.herokuapp.com/users')
            .then(response => response.json())
            .then(data => {                
                this.setState({userList: data});
            })
            .catch(e => alert("Ha ocurrido un error!"));
    }

    render() {
        console.log(this.state.userList);
        var res = "There is " + this.state.userList.length + " user in total.";
        if (this.state.userList.length > 1 || this.state.userList.length === 0) {
            res = "There are " + this.state.userList.length + " users in total";
        }

        
        return (
            <div>
               <h1> List of Users </h1>
               <h3> {res} </h3>
               {JSON.stringify(this.state.userList)}
               <br></br>
               <br></br>
               <Button
                    type="submit"                                
                    variant="contained"
                    color="primary"
                    className="submit"
                    href = "/"                               
                >
                    HOME
                </Button>
            </div>
        );
    }
}

export default User;
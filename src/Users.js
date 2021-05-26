import React, {Component} from 'react';
import './Users.css';

import UsersList from './UsersList';

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    addUser = (event) => {
        event.preventDefault();
        // console.log(this._inputName.value);

        let newUser = {
            id: Date.now(),
            name: this._inputName.value
        }

        console.log(newUser);

        this.setState((state) => {
            return({
                users: state.users.concat(newUser)
            });
        })

        this._inputName.value = '';
    }

    removeUser = (userID) => {
        // console.log(userID);
        this.setState(state => {
            return({
                // users: state.users.filter((user) => {return(user.id !== userID)})
                users: state.users.filter(user => user.id !== userID)
                //to nowo powstałej tablicy przechodzą wszyscy użytkownicy którzy nie zostali skasowani 
                //(przy każdej iteracji jeden user id nie przechodzi)
            });
        });
    }

    render() {
        return(
            <div className="users-main">
                <h1>Users List</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(element) => {this._inputName = element;}} type="text" placeholder="Enter name"/>
                    <button type="submit">Add user</button>
                </form>
                {/* <UsersList usersList1={[{id: 123, name: 'Hans'}, {id: 97, name: 'Julia'}]}/> */}
                <UsersList usersList1={this.state.users} removeUserMethod={this.removeUser}/>
            </div>
        );
    }
}

export default Users;
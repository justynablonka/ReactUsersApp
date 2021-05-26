import React from 'react';
import './UsersList.css';

function UsersList(props) {

    let usersList = props.usersList1;
    let usersLiElements = usersList.map(user => 
    <li key={user.id}>{user.name} <span onClick={() => props.removeUserMethod(user.id)}>X</span></li>);

    return (
        <ul className="users-list">
            {usersLiElements}
        </ul>
    );
}

export default UsersList;
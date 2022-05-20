import React from "react";

import Card from '../UI/Card';
import Clases from './UsersList.module.css';

const UserList = props => {
return ( 
<Card className = {Clases.users}>
    <ul>
        {props.users.map(user => (
            <li key={user.id}> 
            { user.name} ({user.age} years old)
            </li>
        ))}
    </ul>
</Card>
);
};

export default UserList;
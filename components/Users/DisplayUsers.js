import React from 'react';
import styles from './DisplayUsers.module.css';
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal';
const DisplayUsers = ({users,validUser,error,handleError}) => {
    // render List of Users or Error Modal if User is not valid
    return (
        <Card className = {styles.users}> 
            <ul>
            {validUser ? users.map((user,i) => (
            <li key = {i}>
              {`Username: ${user.username}, Age: ${user.age}`}
            </li> 
            )): <ErrorModal handleError = {handleError} title={error.title} message={error.message}/>
            }
            </ul>
        </Card>
    )

}


export default DisplayUsers;


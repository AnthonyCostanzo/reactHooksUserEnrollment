import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = ({addUser}) => {
    let [username,setUsername] = useState("");
    let [age,setAge] = useState();

    let inputHandler = (e) => {
        e.target.name === 'username' ? setUsername(e.target.value) : setAge(e.target.value);
    }
    
    let addUserHandler = (e) => {
        e.preventDefault();
        let user = {username,age};
        addUser(user);
        setUsername("");
        setAge();

    }

    return (
        <Card className={styles.input}>
        <form onSubmit = {addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input value={username} onChange = {inputHandler} id = 'username' type = 'text' name='username'/>
            <label htmlFor='age'>Age</label>
            <input value= {age ? age : ""} onChange = {inputHandler} id ='age' type = 'number' min='1' max ='100' name='age'/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
    )
    
}


export default AddUser;
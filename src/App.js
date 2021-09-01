import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import DisplayUsers from './components/Users/DisplayUsers'
function App() {
  let [users,setUsers] = useState([])
  let [validUser,setValidUser] = useState(true);
  let [error,setError] = useState();

  let addUser = (user) => {
    // Ensure username and password fields are not empty 
    if(user.username.length === 0 || !user.age ) {
       setValidUser(false);
       setError({
         title:'Invalid Attempt',
         message:'Username & Age Field Cannot Be Left Blank'
       })
       return;
    }
    // add user to users array
    setUsers([...users,user]);
    setValidUser(true);
  }

  const handleError = () => {
    setError(null);
    setValidUser(true);
  }

  return (
    <div>
      <AddUser addUser = {addUser}/>
      {/* Display list of users as long as users isn't empty */}
     <DisplayUsers handleError = {handleError} error = {error} users={users} validUser={validUser}/>
  
    </div>
  )

}

export default App;


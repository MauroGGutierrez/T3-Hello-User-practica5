import React, { useEffect, useState } from 'react';
import './hello-user.css';

function HelloUser() {
const [user, setUser] = useState("");
const [welcome, setWelcome] = useState("");

useEffect(() => {
  if (welcome){
    alert(`Thank you for visiting me 🤓`)
  }
}, [welcome]);

  return (
    <div className="container">
       <h1>Hello User App</h1>
       <form className='myForm' >
       <input type="text" placeholder='Enter Your Name' value={user} onChange={(e) => setUser(e.target.value)}/>
       <button type='button' onClick={() =>setWelcome(`¡Welcome ${user}! 🤗`)}>¡Greet Me!</button>
       </form>
       <p>{welcome ? welcome : "Pleace Enter Your Name 🙏"}</p>
    </div>
  );
}
export default HelloUser;

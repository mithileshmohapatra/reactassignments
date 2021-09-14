
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React,{ useState, useEffect  } from "react";
import axios from 'axios';
const Login = ()=> {

    const [name, setName] = useState(); 
    const [password, setPassword] = useState();
    
    
   useEffect(() => {
     
       getData();
   
   },[]);

   async function getData() {
     
    const response = await axios.get(`https://reqres.in/api/users/2 `);
    if(name==response.data.data.first_name && password==response.data.data.last_name)
    {
      sessionStorage.setItem('first_name', name);
      sessionStorage.setItem('last_name', password);
      
      window.location.href='./Home';
    }else{
      alert('Wrong Credential');
    }
   
}
  return (
    <div>
       <div className="imgcontainer">
       <Avatar className="av" icon={<UserOutlined />} />
        </div>
       
        <div className="container form1">
        
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" onChange={(e)=>setName(e.target.value)} name="uname" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}name="psw" required />
          <button className="btn2"type="submit" onClick={getData}>Login</button>
         
        </div>
       
      </div>
  );
}

export default Login;

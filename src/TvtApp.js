
import './App.css';
import TvtListUsers from './components/TvtListUsers';
import axios from './api/TvtApi'
import { useEffect, useState } from 'react';
function TvtApp() {
  const [tvtListUsers,setTvtListUsers] = useState([]);
  const TvtGetAllUsers = async()=>{
    const TvtResponse = await axios.get("TvtUsers");
    console.log("Api Data:",TvtResponse.data);
  }

  useEffect(()=>{
    TvtGetAllUsers();
    console.log("State Data:",TvtListUsers);
},[])
  return (
    <div className="container border my-3">
      <h1>lam viec voi mockapi</h1>
      <hr/>
      <TvtListUsers renderTvtListUsers={tvtListUsers}/>
    </div>
  );
}

export default TvtApp;

import React, { useState, useEffect } from 'react';
import UserPage from './UserPage';
import MeasurePage from './MeasurePage';
import { useUsers } from '../context/UserProvider';
import {useMeasures} from '../context/MeasureProvider'

const Dashboard = () => {

  const {users, loadUsers} = useUsers();
  const {measures} = useMeasures();

      useEffect(()=>{  
          loadUsers();
      },[])

  return (

    <div className="flex h-screen">
      <div className="flex-1 px-2">
        <h2>Pacientes</h2>
        <UserPage users={users}/>
      </div>
      <div className="flex-1 px-2">
        <h2>Medidas</h2>
        <MeasurePage measures={measures} />
      </div>
    </div>
  );
  
};

export default Dashboard
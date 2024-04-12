import { useState } from 'react';
import Form from './components/Form.jsx';
import UserInfo from './components/Info.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [userData, setUserData] = useState(null);
  
  return (
    <>
      {userData ? (
        <UserInfo userData={userData}/>
      ) : (
        <Form setUserData={setUserData} />
      )}
    </>
  )
}

export default App

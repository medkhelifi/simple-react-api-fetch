import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useDataService from './services/DataService';
import UserDataHeader from './components/UserDataHeader';

function App() {
  const [count, setCount] = useState(0)
  const {
    userData,
    loading,
  } = useDataService(12)

  return (
    <>
      {loading ? (
        <div>LOADING ....</div>
      ) : (
        <>
          <h1>Ceci est un example simple API</h1>
          <div className="card">
            <UserDataHeader userData={userData}></UserDataHeader>
          </div>
        </>
      )}
    </>
  )
}

export default App

import { useState, useEffect } from 'react';
import { ApiService } from './ApiService';
const useDataData = (userId) => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {

    //ici peut être mettre le test pour savoir api ou mock
    // si api initialiser ApiService si mock MockService
    const service = new ApiService()

    const getUserData = async () => {
        try {
          const data = await service.getUserData(userId)
          setUserData(data)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }

      const fetchData = async () => {
        setLoading(true)
        await Promise.all([
            getUserData(),
        ]);
        setLoading(false);
      }
  
      fetchData()
  
      return () => {
        setUserData(null)
        //completer avec les reste des services.
      }
  
  
    }, [userId])
  
    return {
      userData,
      loading,
  }
  }
  
  export default useDataData
  
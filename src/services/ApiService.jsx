export class ApiService  {
    // Récuperrer les données depui l'API
    async getUserData(userId) {
        const response = (await fetch(`http://localhost:3000/user/${userId}`));
        const userData = await response.json();
        console.log(userData.data);
      return userData.data;
    }
  
  }
  
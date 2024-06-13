// eslint-disable-next-line react/prop-types
const UserDataHeader = ({ userData} ) =>{
  let userDataModeler = userData;
    return (
        <h1>Bonjour {userDataModeler.userInfos.firstName}</h1>
      )
    
}

export default UserDataHeader
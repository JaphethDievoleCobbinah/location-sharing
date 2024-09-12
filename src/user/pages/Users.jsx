import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1', 
        name: 'Japheth Dievole Cobbinah', 
        image: 'https://media.licdn.com/dms/image/D5603AQFG-o1Gm0neMQ/profile-displayphoto-shrink_200_200/0/1665698983579?e=2147483647&v=beta&t=-bEnh7tUbO_h08fha6ehuufYR97_8SiX8wqQlEZFzbw',
         places: 3
        }];
    
  return <UsersList items={USERS}/>
}

export default Users;

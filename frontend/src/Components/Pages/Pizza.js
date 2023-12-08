import { getAuthenticatedUser } from '../../utils/auth';

const testPizza = async() => {
    const authenticatedUser=getAuthenticatedUser();
    console.log(authenticatedUser.token);
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authenticatedUser.token,
        },
        
      };
    const reponse= await fetch('http://localhost:3000/pizzas',options);
    console.log(reponse.status);
  };
 const  Pizza = () => {
  testPizza();
};
export default Pizza;
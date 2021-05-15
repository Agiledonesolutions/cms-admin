
   export const setUserDetails = (userId) => {
    localStorage.setItem('userId', userId);
  }
  export const removeUserDetails=()=>
  {
    localStorage.removeItem('userId')
  }
  export const getUSerDetails = () =>{
    return localStorage.getItem('userId')
  }

   export const setAuthToken= (token) => {
    localStorage.setItem('token', token);
  }
  export const getAuthToken = () => {
    return localStorage.getItem('token') || null;
  }
  export const removeAuthToken = () => {
    return localStorage.removeItem('token') 
  }


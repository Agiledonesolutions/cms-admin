export const setProductDetails = (productId) => {
    localStorage.setItem('productId', productId);
  }
  export const setCartDetails = (cartId) => {
    localStorage.setItem('cartId', cartId);
  }
  export const getProductDetails = () => {
   return localStorage.getItem('productId');
  }
  export const getCartDetails = () => {
   return localStorage.getItem('cartId');
  }
  export const removeCartDetails=()=>
  {
    localStorage.removeItem('cartId')
  }
  export const getUserDetails = () => {
    return localStorage.getItem('userId');
   }
   export const setUserDetails = (userId) => {
    localStorage.setItem('userId', userId);
  }
  export const removeUserDetails=()=>
  {
    localStorage.removeItem('userId')
  }
  export const setUserCredentials = (email,password) => {
    
    localStorage.setItem('userCredentials', JSON.stringify({email,password}));
  }
  export const removeUserCredentials=()=>
  {
    localStorage.removeItem('userCredentials')
  }
  export const getUserCredentials = () => {
    
    return JSON.parse(localStorage.getItem('userCredentials'));
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
  export const setUserEmail= (email) => {
    localStorage.setItem('email', email);
  }
  export const getUserEmail = () => {
    return localStorage.getItem('email') || null;
  }
  export const removeUserEmail = () => {
    return localStorage.removeItem('email') 
  }
  export const setUserName= (email) => {
    localStorage.setItem('name', email);
  }
  export const getUserName = () => {
    return localStorage.getItem('name') || null;
  }
  export const removeUserName = () => {
    return localStorage.removeItem('name') 
  }
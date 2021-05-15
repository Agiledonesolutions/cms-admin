// return the user data from the session storage
export const getUser = () => {
  return sessionStorage.getItem('user')
}

export const setUser = (id) =>{
  return sessionStorage.setItem('user', id)
}
export const removeUSer = () =>{
  sessionStorage.removeItem('user')
}
// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
}
 
// set the token and user from the session storage
export const setUserSession = (token) => {
  sessionStorage.setItem('token', token);
}
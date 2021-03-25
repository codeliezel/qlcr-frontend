export const saveToken = (token) => window.localStorage.setItem('QLCRtoken', token);
  
export const getToken = () => window.localStorage.getItem('QLCRtoken') || '';
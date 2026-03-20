import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt'));
  const [favs, setFavs] = useState([]);

  return <Context.Provider value={{
    jwt,
    setJwt,
    favs,
    setFavs
  }}>
    {children}
  </Context.Provider>
}

export default Context
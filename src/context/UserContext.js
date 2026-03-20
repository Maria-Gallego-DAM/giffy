import React, { useEffect, useState } from 'react'
import getFavs from '../services/getFavs';

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt'));
  const [favs, setFavs] = useState([]);

    useEffect(()=>{
      if(!jwt) return setFavs([]);
      getFavs({ jwt }).then(favs => setFavs(favs));
    }, [jwt]);

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
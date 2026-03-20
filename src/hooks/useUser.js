import React, {useState, useCallback, useContext } from 'react'
import Context from '../context/UserContext'
import loginService from '../services/login';
import addFavService from '../services/addFav';

export default function useUser() {
    const {favs, setFavs, jwt, setJwt} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false});

    const login = useCallback(({username, password})=>{
        setState({loading: true, error: false});
        loginService({username, password})
            .then(token => {
                console.log('token recibido:',token)
                window.sessionStorage.setItem('jwt', token);
                setState({loading: false, error: false});
                setJwt(token);
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt');
                setState({loading: false, error: true});
                console.error(err);
            })

    }, [setJwt]);

    const fav = useCallback(({id}) =>{
        console.log('jwt en fav:',jwt)
        addFavService({id, jwt})
            .then(setFavs)
            .catch(err => console.error(err))
    }, [jwt, setFavs]);

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt');
        setJwt(null)
    }, [setJwt]);

    return {
        fav,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}
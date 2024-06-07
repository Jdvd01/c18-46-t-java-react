import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  setAuthDataFromLocalStorage,
  logOut,
  partialReset,
  logIn,
  register,
} from "../redux/reducers/auth/authSlice";
import { useEffect } from "react";
const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // dispatch wrappers
  const dispatchSetAuthDataFromLocalStorage = () =>
    dispatch(setAuthDataFromLocalStorage());
  const dispatchReset = () => dispatch(reset());
  const dispatchPartialReset = () => dispatch(partialReset());
  const dispatchLogin = (email, password) =>
    dispatch(logIn({ email, password }));
  const dispatchLogout = () => dispatch(logOut());
  const dispatchRegister = (email, password, firstName, lastName, role) =>
    dispatch(register({ email, password, firstName, lastName, role }));

  // siempre verifica si hay sesion en local, y si la hay, la pasa al estado global
  useEffect(() => {
    console.log('useEffect useAuth')
    dispatchSetAuthDataFromLocalStorage();
  }, []);

  return {
    ...auth, // todo el estado de auth (isError, isLoading, token, etc...)
    // Dispatchers
    dispatchReset,
    dispatchPartialReset,
    dispatchLogin,
    dispatchRegister,
    dispatchLogout,
    dispatchSetAuthDataFromLocalStorage,
  };
};

export default useAuth;

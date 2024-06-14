import { Field } from "./Field";

// Assets
import { EyeSVG } from "../../assets/svg/EyeSVG";
import { useEffect, useState } from "react";

// Utils
import validation from "../../utils/auth/login/validations";

// React Router
import { useNavigate } from "react-router-dom";

// Redux auth state
import useAuth from "../../hooks/useAuth";

export const Login = () => {
  // input hooks
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation hooks
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

	// Redux auth state/dispatchers
  const {
    isError,
    isSuccess,
    isLoading,
    message,
    token,
    dispatchPartialReset,
    dispatchSetAuthDataFromLocalStorage,
    dispatchLogin,
  } = useAuth();

  // react router
  const navigate = useNavigate();

  // manejar redireccion cuando haya token
  useEffect(() => {
    // si hay datos de sesion en local, entonces van a state.auth
    //dispatch(setAuthDataFromLocalStorage());
    dispatchSetAuthDataFromLocalStorage();
    if (!token) return;
    clearFields();
    const timeoutID = setTimeout(() => {
      //dispatch(partialReset());
      dispatchPartialReset();
      navigate("/");
    }, 2000);
    return () => clearTimeout(timeoutID);
  }, [
    token,
    navigate,
    dispatchPartialReset,
    dispatchSetAuthDataFromLocalStorage,
  ]);

  // credenciales incorrectas
  useEffect(() => {
    if (!message) return;
    const timeoutID = setTimeout(() => {
      
      dispatchPartialReset();
    }, 3000);
    return () => {
      
      clearTimeout(timeoutID);
    };
  }, [message, dispatchPartialReset]);

  // handlers
  const handleLogin = (email, password) => {
    // Validations
    const emailValid = validation.isValidEmail(email);
    const passwordValid = validation.isValidPassword(password);

    setInvalidEmail(!emailValid);
    setInvalidPassword(!passwordValid);

    if (!emailValid || !passwordValid) return;

    
    dispatchLogin(email, password);
  };
	// utils
  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {isError && (
        <p className="text-red-600 p-5 bg-red-100">Error: {message}</p>
      )}
      {isSuccess && (
        <p className="text-green-600 p-5 bg-green-100">Login success!!!</p>
      )}
      {isLoading && (
        <p className="text-secondary-800 p-5 bg-secondary-100">Loading...</p>
      )}
      <p className="text-body-1 font-inter py-6">Log in to your account</p>
      <div className="flex flex-col gap-8">
        <Field
          htmlFor={"email"}
          id={"email"}
          labelText={"Email"}
          placeholder={"Enter your email address"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          isInvalid={invalidEmail}
          invalidMessage="Please enter a valid email address"
        />
        <Field
          htmlFor={"password"}
          type={showPassword ? "text" : "password"}
          id={"password"}
          labelText={"Password"}
          placeholder={"Enter your password"}
          icon={<EyeSVG height={"24"} width={"24"} color={"#000000"} />}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={invalidPassword}
          invalidMessage="Please enter a password with a minimum of 8 characters and a maximum of 20 characters."
        />

        <div className="flex justify-between text-body-3 font-inter">
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="pl-2">
              Remember me
            </label>
          </div>
          <p className="text-primary-500">I forgot my password 😢</p>
        </div>
        <button
          onClick={() => handleLogin(email, password)}
          className="bg-primary-500 h-14 text-white text-body-1 font-inter rounded-[4px]"
          disabled={isLoading}
        >
          Log in
        </button>

        <p className="text-body-3 font-inter text-center">
          By log in you are agree to the{" "}
          <span className="text-primary-500">Terms of Service</span>
        </p>
      </div>
    </>
  );
};

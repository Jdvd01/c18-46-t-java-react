import { Field } from "./Field";

// Assets
import { EyeSVG } from "../../assets/svg/EyeSVG";
import { useState } from "react";
import { ExpandMoreSVG } from "../../assets/svg/ExpandMoreSVG";

import { useEffect } from "react";

// utils
import validation from "../../utils/auth/register/validations";
import useAuth from "../../hooks/useAuth";

// React Router
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // input hooks
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  // validation hooks
  const [invalidName, setInvalidName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidUserRole, setInvalidUserRole] = useState(false);

  // react router hooks
  const navigate = useNavigate();

  // Redux state/dispatchers
  const {
    isError,
    isSuccess,
    isLoading,
    message,
    token,
    dispatchPartialReset,
    dispatchSetAuthDataFromLocalStorage,
    dispatchRegister,
  } = useAuth();

  // useEffects
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

  //handlers
  const handleRegistration = (name, lastName, email, password, userRole) => {
    // Validations
    const nameValid = validation.isValidName(name);
    const lastNameValid = validation.isValidLastName(lastName);
    const emailValid = validation.isValidEmail(email);
    const passwordValid = validation.isValidPassword(password);
    const userRoleValid = validation.isValidRole(userRole);

    setInvalidName(!nameValid);
    setInvalidLastName(!lastNameValid);
    setInvalidEmail(!emailValid);
    setInvalidPassword(!passwordValid);
    setInvalidUserRole(!userRoleValid);

    if (
      !nameValid ||
      !lastNameValid ||
      !emailValid ||
      !passwordValid ||
      !userRoleValid
    )
      return;

    dispatchRegister(email, password, name, lastName, userRole);
  };

  //utils
  const clearFields = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setUserRole("");
  };
  return (
    <>
      {isError && (
        <p className="text-red-600 p-5 bg-red-100">Error: {message}</p>
      )}
      {isSuccess && (
        <p className="text-green-600 p-5 bg-green-100">
          Successful registration!!!
        </p>
      )}
      {isLoading && (
        <p className="text-secondary-800 p-5 bg-secondary-100">Loading...</p>
      )}
      <p className="text-body-1 font-inter py-6">
        Register and get your favorite books
      </p>
      <div className="flex flex-col gap-8">
        <Field
          htmlFor={"name"}
          id={"name"}
          labelText={"Name"}
          placeholder={"Enter your name"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          isInvalid={invalidName}
          invalidMessage="Please enter your name"
        />
        <Field
          htmlFor={"lastname"}
          id={"lastname"}
          labelText={"Last name"}
          placeholder={"Enter your last name"}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          isInvalid={invalidLastName}
          invalidMessage="Please enter your last name"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="select">Choose one</label>
          <div className="flex flex-col justify-center relative">
            <select
              id="select"
              className={`border-[1px] ${
                invalidUserRole ? "border-red-500" : "border-text-100"
              } rounded-lg h-[52px] px-[10px] appearance-none`}
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option className="w-full" value="" disabled>
                I want to ...
              </option>
              <option className="w-full" value="CUSTOMER">
                buy books
              </option>
              <option className="w-full" value="SALESMAN">
                sell books
              </option>
            </select>
            <span className="absolute right-[10px]">
              <ExpandMoreSVG
                height={"24"}
                width={"24"}
                color={`${invalidUserRole ? "#FF3236" : "#000000"}`}
              />
            </span>
          </div>
          {invalidUserRole && (
            <p className="text-red-500 text-body-3 font-inter desktop:w-[398]">
              Please select a role
            </p>
          )}
        </div>
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
          placeholder={"Must be 8 or more characters"}
          icon={<EyeSVG height={"24"} width={"24"} color={"#000000"} />}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isInvalid={invalidPassword}
          invalidMessage="Please enter a password with 6 or more characters"
        />

        <button
          onClick={() =>
            handleRegistration(name, lastName, email, password, userRole)
          }
          className="bg-primary-500 h-14 text-white text-body-1 font-inter rounded-[4px]"
          disabled={isLoading}
        >
          Register me now
        </button>

        <p className="text-body-3 font-inter text-center">
          By log in you are agree to the{" "}
          <span className="text-primary-500">Terms of Service</span>
        </p>
      </div>
    </>
  );
};

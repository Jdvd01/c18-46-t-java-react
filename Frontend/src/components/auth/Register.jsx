import { Field } from "./Field";

// Assets
import { EyeSVG } from "../../assets/svg/EyeSVG";
import { useState } from "react";
import { ExpandMoreSVG } from "../../assets/svg/ExpandMoreSVG";

// utils

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  return (
    <>
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
        />
        <Field
          htmlFor={"lastname"}
          id={"lastname"}
          labelText={"Last name"}
          placeholder={"Enter your last name"}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="select">Choose one</label>
          <div className="flex flex-col justify-center relative">
            <select
              id="select"
              className="border-[1px] border-text-100 rounded-lg h-[52px] px-[10px] appearance-none"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option className="w-full" value="" disabled>
                I want to ...
              </option>
              <option className="w-full" value="CUSTOMER">
                CUSTOMER
              </option>
              <option className="w-full" value="SALESMAN">
                SALESMAN
              </option>
            </select>
            <span className="absolute right-[10px]">
              <ExpandMoreSVG height={"24"} width={"24"} color={"#000000"} />
            </span>
          </div>
        </div>
        <Field
          htmlFor={"email"}
          id={"email"}
          labelText={"Email"}
          placeholder={"Enter your email address"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        />

        <button
          onClick={() =>
            console.log(name, lastName, email, password, userRole)
          }
          className="bg-primary-500 h-14 text-white text-body-1 font-inter rounded-[4px]"
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

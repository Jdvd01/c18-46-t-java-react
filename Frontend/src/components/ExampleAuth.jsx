import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const ExampleAuth = () => {
  const navigate = useNavigate();

  // Usamos el hook personalizado (useAuth) para traer dispatchers y utilidades
  // para consumir/actualizar estado de la sesion del usuario
  const {
    isError,
    isSuccess,
    isLoading,
    message,
    token,
    email,
    role,
    dispatchLogout,
    dispatchSetAuthDataFromLocalStorage,
    dispatchReset,
    dispatchPartialReset,
    dispatchLogin,
    dispatchRegister,
  } = useAuth();
  // al usar el hook se ejecuta un effect que
  // verifica si hay session guardada en el local Storage,
  // si la hay, la pasa al estado del redux (solo ocurre en el primer render)

  // si quieres triggear este comportamiento puedes usar el dispatcher
  // dispatchSetAuthDataFromLocalStorage

  return (
    <div className="flex items-center justify-center pt-10 min-h-screen bg-gray-100">
      <button
        className="p-4 text-body-1 rounded-lg bg-red-500 text-white mt-4 hover:bg-red-300 active:bg-red-600 position absolute bottom-10 left-10"
        onClick={() => navigate("/")}
      >
        go home
      </button>
      <div className="max-w-sm rounded w-full overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl">Bienvenido a BookLyn</div>

          {/* USO VARIABLES DEL ESTADO auth REDUX */}
          <p className="text-gray-700 text-base mt-1">correo: {email}</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-center">
          <span
            className={`inline-block ${
              email ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            email: {email ? email.slice(0, 9) + "..." : ""}
          </span>
          <span
            className={`inline-block ${
              role ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            role: {role && role[0] + role.slice(1).toLowerCase()}
          </span>
          <span
            className={`inline-block ${
              token ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            token: {token && token.slice(0, 7) + "..."}
          </span>
          <span
            className={`inline-block ${
              isError ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            isError: {isError ? "true" : "false"}
          </span>
          <span
            className={`inline-block ${
              isSuccess ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            isSuccess: {isSuccess ? "true" : "false"}
          </span>
          <span
            className={`inline-block ${
              message ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            message: {message ? "true" : "false"}
          </span>
          <span
            className={`inline-block ${
              isLoading ? "bg-green-200" : "bg-gray-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            isLoading: {isLoading ? "true" : "false"}
          </span>

          {/* USO DE DISPATCH PARA DESLOGUEAR AL USUARIO (BORRA LA SESSION DEL localStorage y resetea token, email y role DEL ESTADO auth global) */}
          <button
            onClick={token ? () => dispatchLogout() : () => navigate("/auth")}
            className="rounded-lg p-2 bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600"
          >
            {token ? "Logout" : "Go to auth"}
          </button>
          {/* USO DISPATCHER PARA setear la local session en el auth global si la hay  */}
          <button
            onClick={() => dispatchSetAuthDataFromLocalStorage()}
            className="rounded-lg m-3 p-2 bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600"
          >
            Set local session to auth state
          </button>

          {/* USO DISPATCHER PARA RESETEAR COMPLETAMENTE EL ESTADO GLOBAL de auth
          isError, isSuccess, isLoading, token, message, email, role */}
          <button
            onClick={() => dispatchReset()}
            className="rounded-lg m-3 p-2 bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600"
          >
            Reset Whole auth state
          </button>
          {/* USO DISPATCHER PARA RESETEAR parcialmente EL ESTADO GLOBAL de auth */}
          <button
            onClick={() => dispatchPartialReset()}
            className="rounded-lg m-3 p-2 bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600"
          >
            Reset partially auth stateReset
          </button>
          {/* USO DISPATCHER PARA intentar logearse */}
          <button
            onClick={() =>
              dispatchLogin("example@email.com", "examplepassword123")
            }
            className="rounded-lg m-3 p-2 bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600"
          >
            try to login
          </button>
          {/* USO DISPATCHER PARA intentar registrar un usuario */}
          <button
            onClick={() =>
              dispatchRegister(
                `example${Math.floor(Math.random() * 1000) + 1}@email.com`,
                "examplepassword123",
                "firstName",
                "lastName",
                "CUSTOMER"
              )
            }
            className="rounded-lg m-3 p-2 bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600"
          >
            register random user
          </button>
        </div>
      </div>
    </div>
  );
};

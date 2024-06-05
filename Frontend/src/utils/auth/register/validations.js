// Funcion para validar el nombre
const isValidName = (name) => name.length > 0;

// Funcion para validar el apellido
const isValidLastName = (lastName) => lastName.length > 0;

// Función para validar el formato del email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar la longitud de la contraseña
const isValidPassword = (password) => {
  return password.length >= 6;
};
const isValidRole = (role) => {
  const roles = Object.freeze(["CUSTOMER", "SALESMAN"]);
  return roles.some((item) => role === item);
};
export default {
  isValidName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
  isValidRole,
};

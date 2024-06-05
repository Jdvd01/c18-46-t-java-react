// Función para validar el formato del email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar la longitud de la contraseña
const isValidPassword = (password) => {
  return password.length >= 8 && password.length <= 20;
};
export default { isValidEmail, isValidPassword };

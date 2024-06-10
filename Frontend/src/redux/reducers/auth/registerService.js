const register = async (data) => {
  console.log("Data desde mi service register", data);

  const response = await fetch("http://localhost:8080/auth/register", {
    method: "POST", // Cambia el método a 'POST'
    headers: {
      "Content-Type": "application/json", // Indica el tipo de contenido del cuerpo de la solicitud
      // Puedes incluir cualquier otra cabecera que necesites aquí (jwt
      //pero aun no tenemos eso
    },
    body: JSON.stringify(data), // Convierte los datos a formato JSON y los pasa como cuerpo de la solicitud
  });
  if (response.status === 400 ) 
    throw new Error("Missing Fields or Wrong Format...");
  
  const results = await response.json();

  return results;
};
const registerService = {
  register,
};
export default registerService;

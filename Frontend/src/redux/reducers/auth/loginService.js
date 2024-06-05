const logIn = async (data) => {
  console.log("Data desde mi service logIn", data);
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST", // Cambia el método a 'POST'
    headers: {
      "Content-Type": "application/json", // Indica el tipo de contenido del cuerpo de la solicitud
      // Puedes incluir cualquier otra cabecera que necesites aquí
    },
    body: JSON.stringify(data), // Convierte los datos a formato JSON y los pasa como cuerpo de la solicitud
  });
  
  if (response.status === 400 ) 
    throw new Error("Missing Fields or Wrong Format...");
  if (response.status === 401 ) 
    throw new Error("Wrong Credentials...");
  
  const results = await response.json();

  return results;
};

const loginService = {
  logIn,
};

export default loginService;

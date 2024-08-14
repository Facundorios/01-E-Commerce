export const handleDBErrors = (error) => {
  if (error === 11000) {
    return {
      statusCode: 400,
      status: "Bad Request",
      message: "Ya existe un registro con ese valor",
    };
  }

  return {
    statusCode: 500,
    status: "Internal Server Error",
    message: "Ha ocurrido un error en el sistema",
  };
};

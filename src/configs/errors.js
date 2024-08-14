export const handleDBerror = (error, res) => {
  return res.error.json({
    message: error.message || "Error retrieving products",
    status: error.status,
  });
};

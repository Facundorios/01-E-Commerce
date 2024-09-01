export const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No estas autenticado." });
  }
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No estas autenticado." });
  }

  next();
};

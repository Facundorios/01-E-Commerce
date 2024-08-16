import productsServices from "../services/product.services.js";

export const seed = async (req, res) => {
  try {
    const products = await productsServices.seed();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error retrieving products",
      status: error.status,
    });
  }
};
export const get = async (req, res) => {
  try {
    const products = await productsServices.find();

    if (!products) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado productos",
      };
    }

    return res.json(products);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error retrieving products",
      status: error.status,
    });
  }
};
export const getById = async (req, res) => {
  try {
    const product = await productsServices.findById(req.params.id);
    if (!product) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "Producto no encontrado",
      };
    }
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error retrieving products",
      status: error.status,
    });
  }
};
export const create = async (req, res) => {
  try {
    const product = await productsServices.create(req.body);
    return res.json({ product });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Ha habido un error en el sistema.",
      status: error.status,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const product = await productsServices.delete(req.params.id);
    if (!product) throw { statusCode: 404, message: "Producto no encontrado" };
    return res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Ha habido un error en el sistema.",
      status: error.status,
    });
  }
};

// export const updateProduct = (req, res) => {
//   return res.json({ message: "Update Product" });
// };

import ProductsServices from "../services/products.services.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductsServices.findAll();

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
      statud: error.status,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await ProductsServices.create(req.body);
    return res.json({ product });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error retrieving products",
      statud: error.status,
    });
  }
};

// export const getProductById = (req, res) => {
//   try {
//   } catch (error) {}
// };

// export const updateProduct = (req, res) => {
//   return res.json({ message: "Update Product" });
// };

// export const deleteProduct = async (req, res) => {
//   return res.json({ message: "Producto Eliminado" });
// };

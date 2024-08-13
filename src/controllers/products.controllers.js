import { ProductService } from "../services/products.services.js";
const productService = new ProductService();
export const getProductsCtrl = async (req, res) => {
  try {
    const products = await productService.findAllProductsSvc();

    if (!products) {
      return res.status(404).json({ message: "Products not found" });
    }

    return res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

export const createProductCtrl = async (req, res) => {
  try {
    await productsServices.createProductSvc(req.body);
    return res.json({ message: "Product created" });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

export const getProductCtrl = (req, res) => {
  try {
  } catch (error) {}
};

export const updateProductCtrl = (req, res) => {
  return res.json({ message: "Update Product" });
};

//Dependencies
import express from "express";
import morgan from "morgan";
import cors from "cors";

//Configs

import { PORT } from "./src/configs/env/config.js";
import { databaseConnection } from "./src/database/connection.js";

//Routes
import productsRoutes from "./src/routes/product.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import cartRoutes from "./src/routes/cart.routes.js";

//Main class
class Server {
  constructor() {
    this.app = express();
    this.port = PORT;

    this.database();

    this.middlewares();
    this.routes();
  }

  async database() {
    await databaseConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/api/product", productsRoutes);
    this.app.use("/api/auth", userRoutes);
    this.app.use("/api/cart", cartRoutes);
  }

  initialization() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;

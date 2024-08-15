import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./src/configs/config.js";
import { databaseConnection } from "./src/database/connection.js";
import productsRoutes from "./src/routes/products.routes.js";
import userRoutes from "./src/routes/users.routes.js";
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
    this.app.use("/api", productsRoutes);
    this.app.use("/api", userRoutes);
  }

  initialization() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;

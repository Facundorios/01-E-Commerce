import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "../configs/config.js";
import productsRouter from "../routes/products.routes.js";
import { db } from "../database/connection.js";

class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.databaseConnection();
    this.middlewares();
    this.routes();
  }

  async databaseConnection() {
    await db();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/api", productsRouter);
  }

  initialization() {
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default Server;

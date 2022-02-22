import express from "express";
import cors from "cors";
import { categoriesRoutes } from './routes/categories.routes'

const app = express();

app.use(express.json());
app.use(cors())

app.use("/categories",categoriesRoutes);

app.listen(3333, () => {
    console.log("Porta 3333");
    
});
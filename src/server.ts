import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.post("/courses", (req, res) => {
    const { name } = req.body;
    return res.json({ name});

})

app.listen(3333, () => {
    console.log("Porta 3333");
    
});
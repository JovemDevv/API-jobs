import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

const router = express.Router();

router.get("/", (req, res) => res.json({ hello: "Hello" }));

app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

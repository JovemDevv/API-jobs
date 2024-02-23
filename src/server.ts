import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { Candidate } from "./models/candidate";

const app = express();

const router = express.Router();

router.get("/", (req, res) => res.json({ hello: "Hello" }));

router.get("/candidates", async (req, res) => {
  const candidates = await Candidate.findAll();
  return res.json(candidates);
});

app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

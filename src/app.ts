import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

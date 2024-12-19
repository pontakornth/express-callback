import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.use("/callback", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.use("", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(4888, () => {
  console.log("listening on port 4888");
});

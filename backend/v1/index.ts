import express, { Response } from "express";

const router = express.Router();

router.get("/", (_, res: Response) => {
  return res.status(200).json({ tesk: "Ok" });
});

export default router;

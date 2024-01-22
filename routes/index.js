import express from "express";
const router = express.Router();

/* GET home page. */
const getHome = (req, res) => {
  res.status(200).send("Welcome to the machine");
};

router.get("/", getHome);

export default router;

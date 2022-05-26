import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello endpoint");
})

router.get("/register", (req, res) => {
    res.send("hello register endpoint");
})

export default router
const express = require("express");
const { url } = require("inspector");
const router = express.Router();

const courses = [
  { name: "Machine Learning", url: "/" },
  { name: "Web Development", url: "/" },
  { name: "Cyber Security", url: "/" },
];

router.get("/", (req, res) => {
  var query = (req.query["q"] || "").toLowerCase();
  if (query) {
    return res.status(200).json(event);
  }

  return res.status(200).json(event);
});
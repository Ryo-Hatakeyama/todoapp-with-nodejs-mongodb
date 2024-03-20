// @ts-check

const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:id", getSingleTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;

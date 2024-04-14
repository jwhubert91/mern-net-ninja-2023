const express = require("express")
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController")

// local imports
const Workout = require("../models/workoutModel")

// instantiate the Express router
const router = express.Router()

// GET all workouts
router.get("/", getWorkouts)

// GET a single workout
router.get("/:id", getWorkout)

// POST a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// UPDATE a new workout
router.patch("/:id", updateWorkout)

module.exports = router

//     "_id": "661b40cf979b43c632bf334f",

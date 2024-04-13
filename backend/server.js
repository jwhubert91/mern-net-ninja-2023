require("dotenv").config()

const express = require("express")
const workoutRoutes = require("./routes/workouts")

// initializes express app
const app = express()

// middleware - app.use()
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// listen for requests
const portNumber = process.env.PORT || 5000
app.listen(portNumber, () => {
  console.log(`Listening on port ${portNumber}`)
})

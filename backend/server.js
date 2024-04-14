require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")

// initializes express app
const app = express()

// middleware - app.use()
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    const portNumber = process.env.PORT || 5000
    app.listen(portNumber, () => {
      console.log(`Connected to MongoDB and listening on port ${portNumber}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

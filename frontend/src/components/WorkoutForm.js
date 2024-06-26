import React, { useState } from "react"

const WorkoutForm = () => {
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, setError] = useState(null)

  const resetForm = () => {
    setTitle("")
    setLoad("")
    setReps("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      console.log("New workout added", json)
      resetForm()
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <div>
        <div>
          <label>Exercise Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Push ups..."
          />
        </div>
        <div>
          <label>Load (in lbs):</label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            placeholder="50"
          />
        </div>
        <div>
          <label>Reps:</label>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            placeholder="20"
          />
        </div>
        <button>Add workout</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm

import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle ] = useState('')
  const [load, setLoad ] = useState('')
  const [reps, setReps ] = useState('')
  const [error, setError] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout ={ title, load, reps }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log('new workout added')
    }
  }


  return (
    <form className="mx-10" onSubmit={handleSubmit}>
      <div className="p-1">
      <h3 className="font-lg font-bold my-4 p-1">Add a New Workout</h3>
      <label className="block">Exercise Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      </div>
      <div className="p-1">
      <label className="block">Load (in Kg):</label>
      <input 
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      </div>
      <div className="p-1">
      <label className="block">Reps: </label>
      <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      
    <button className="block my-3 rounded bg-green-400 p-1 text-white">Add Workout</button></div>
    {error && <div className="p-10 bg-red-300 border-spacing-1 border-red-500 text-white rounded-md">{error}</div>}
    </form>
  )
}

export default WorkoutForm
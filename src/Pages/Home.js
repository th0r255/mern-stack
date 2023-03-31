import { useEffect, useState } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// import WorkoutDetails.js into home page
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts ] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="p-2">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}  />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
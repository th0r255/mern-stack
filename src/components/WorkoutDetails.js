const WorkoutDetails = ({ workout }) => {


  return (
  <div className="p-2">
    <div className="bg-white rounded my-auto p-5 relative shadow">
      <h4 className="text-2xl text-green-500 font-sans">{workout.title}</h4>
        <p><strong>Load (kg):</strong> {workout.load} </p> 
        <p><strong>Reps:</strong> {workout.reps} </p>
        <p> {workout.createdAt} </p>
    </div>
  </div>
  )
}

export default WorkoutDetails
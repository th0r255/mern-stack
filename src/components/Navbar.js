import { Link } from 'react-router-dom'

const Navbar = () => {

  return(
    <header>
      <div className="max-width mx-7 p-10 flex align-center justify-between text-gray-400"> 
        <Link to="/">
          <h1 className="font-bold text-3xl">Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
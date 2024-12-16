import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 dark:bg-gray-900  text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <Link to="/" > 
          <li className="hover:bg-blue-500 dark:hover:bg-gray-700 p-2 rounded">Home </li>
          </Link>
          <Link to="/analytics" >
          <li className="hover:bg-blue-500 dark:hover:bg-gray-700 p-2 rounded"> Analytics </li>
          </Link>
          <Link to="/settings" >
          <li className="hover:bg-blue-500 dark:hover:bg-gray-700 p-2 rounded"> Settings </li>
          </Link>
          <Link to='/profile' >
          <li className="hover:bg-blue-500 dark:hover:bg-gray-700 p-2 rounded"> Profile </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar


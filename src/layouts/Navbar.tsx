import React from 'react'
import '../styles/globals.scss'

const Navbar: React.FC = () => {
  return (
    <aside>
      <div className="nav">
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Navbar

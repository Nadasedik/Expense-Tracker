import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">Expense Tracker</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className={`nav-link ${location.pathname === '/' ? 'active' :''}`} aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/add-expense'} className={`nav-link ${location.pathname === '/add-expense' ? 'active' :''}`}>Add New Expense</Link>
        </li>
        <li className="nav-item">
          <Link to={'/set-income'}className={`nav-link ${location.pathname === '/set-income' ? 'active' :''}`}>Set Your Income</Link>
        </li>
        <li className="nav-item">
          <Link to={'/view'} className={`nav-link ${location.pathname === '/view' ? 'active' :''}`}>View</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar

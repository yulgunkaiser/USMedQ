import { NavLink } from 'react-router-dom'

export default function Nav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded hover:text-blue-600 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`

  return (
    <nav className="flex gap-4">
      <NavLink to="/" className={linkClass} end>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
    </nav>
  )
}

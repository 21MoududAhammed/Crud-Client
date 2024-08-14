
import { NavLink } from "react-router-dom";

export default function Nav() {
  
  return (
    <nav className="h-14 border border-b-2 flex justify-center items-center mb-8">
      <ul className="flex justify-center items-center gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-bold" : "text-black font-semibold"
            }
          >
            Insert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/display"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-bold" : "text-black font-semibold"
            }
          >
            Display
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

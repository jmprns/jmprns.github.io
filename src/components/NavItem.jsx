import { Link, NavLink } from "react-router-dom";
import cn from 'classnames'

const NavItem = ({text, href}) => {

  const active = "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 transition-all font-semibold text-gray-200"
  const dactive = "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 transition-all font-normal text-gray-400"

  return (
    <NavLink to={href} className={({ isActive }) => isActive ? active : dactive}>
      {text}
    </NavLink>
  );
};

export default NavItem;
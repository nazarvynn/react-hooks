import { NavLink } from 'react-router-dom';

export interface NavigationItem {
  label: string;
  path: string;
}
const NAVIGATION: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'useState',
    path: '/use-state',
  },
  {
    label: 'useEffect',
    path: '/use-effect',
  },
  {
    label: 'useContext',
    path: '/use-context',
  },
  {
    label: 'useReducer',
    path: '/use-reducer',
  },
];

export default function Navigation() {
  return (
    <ul className="nav nav-pills justify-content-center m-4">
      {NAVIGATION.map(({ label, path }: NavigationItem, index) => (
        <li className="nav-item" key={index}>
          <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} to={path}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
//

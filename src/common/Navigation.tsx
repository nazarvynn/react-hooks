import { NavLink } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

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
    label: 'ToDo',
    path: '/todo',
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
  const { pathname } = useLocation();
  return (
    <nav>
      <div className="nav-wrapper">
        <ul>
          {NAVIGATION.map(({ label, path }: NavigationItem, index) => (
            <li key={index} className={matchPath(`/${path}/*`, pathname) ? 'active' : ''}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

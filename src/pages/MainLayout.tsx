import { NavLink, Outlet } from 'react-router-dom';

function MainLayout() {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/todo', label: 'ToDo' },
    { link: '/form-page', label: 'Form Page' },
    { link: '/use-memo', label: 'useMemo' },
    { link: '/use-callback', label: 'useCallback' },
    { link: '/use-ref', label: 'useRef' },
    { link: '/page-a', label: 'Page A' },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <header>
        {links.map(({ link, label }, index) => (
          <NavLink key={index} to={link} style={{ display: 'inline-block', margin: '0 20px' }}>
            {label}
          </NavLink>
        ))}
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default MainLayout;

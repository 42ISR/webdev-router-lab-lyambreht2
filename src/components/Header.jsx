import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.search.value.trim();
    if (!value) return;

    navigate(`/search?q=${encodeURIComponent(value)}`);
    event.target.reset();
  }

  function navClass({ isActive }) {
    return 'nav-item' + (isActive ? ' active' : '');
  }

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end className={navClass}>Главная</NavLink>
          <NavLink to="/movies" className={navClass}>Фильмы</NavLink>
          <NavLink to="/about" className={navClass}>О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            name="search"
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
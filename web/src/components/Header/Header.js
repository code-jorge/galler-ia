import { Link } from 'react-router-dom'
import css from './Header.module.css'

const Header = ()=> (
  <header className={css.header}>
    <Link className={css.link} to='/'>
      <h1 className={css.title}>
        Galler-ia
      </h1>
    </Link>
    <p className={css.subtitle}>An unusual gallery of images drawn by artificial intelligence</p>
    <div className={css.separator}>
      <hr className={css.line} />
    </div>
  </header>
)

export default Header
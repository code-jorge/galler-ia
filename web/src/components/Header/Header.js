import css from './Header.module.css'

const Header = ()=> (
  <header className={css.header}>
    <h1 className={css.title}>Galler-ia</h1>
    <p className={css.subtitle}>An unusual gallery of images drawn by artificial intelligence</p>
  </header>
)

export default Header
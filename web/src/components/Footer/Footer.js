import css from './Footer.module.css'

const Footer = ()=> (
  <footer className={css.footer}>
    <p className={css.footerContent}>
      Made with 🤍 using{' '}
      <a href="https://openai.com/dall-e-2/" target="_blank" rel="noopener noreferrer">DALL-E</a>
      {' '}by{' '}
      <a href="https://jorge.aguirre.sexy" target="_blank" rel="noopener noreferrer">Jorge</a>
    </p>
  </footer>
)

export default Footer
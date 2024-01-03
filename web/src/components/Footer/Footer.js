import css from './Footer.module.css'

const SourceLink = ({ source })=> {

  if (source === 'DALL-E') return (
    <a href='https://openai.com/dall-e-2/' target="_blank" rel="noopener noreferrer">{source}</a>
  )

  if (source === 'Chat GPT') return (
    <a href='https://chat.openai.com/' target="_blank" rel="noopener noreferrer">{source}</a>
  )

  // This should not happen
  return null
}

const Footer = ({ source })=> (
  <footer className={css.footer}>
    <p className={css.footerContent}>
      Made with 🤍
      {source && (
        <>
          {' '}using{' '}
          <SourceLink source={source} />
        </>
      )}
      {' '}by{' '}
      <a href="https://jorge.aguirre.sexy" target="_blank" rel="noopener noreferrer">Jorge</a>
    </p>
  </footer>
)

export default Footer
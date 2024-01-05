import css from './Introduction.module.css'

const Description = ({ content }) => {
  if (content === 'DALL-E') return (  
    <p className={css.content}>
      The images below were generated using DALL-E v2. 
      <br />
      <br />
      With the arrival of ChatGPT v4 and its ability to generate images, this became obsolete, as it uses DALL-E v3.
    </p>
  )
  
  if (content === 'Chat GPT') return (  
    <p className={css.content}>
      The images below were generated interacting with Chat GPT v4. 
      <br />
      <br />
      The model generates an image that best matches the given context using DALL-E v3.
    </p>
  )
  
  if (content === 'Wizard Cat Society') return (  
    <p className={css.content}>
      The cats below were generated interacting with Chat GPT v4. 
      <br />
      <br />
      The have formed a society and will soon take over the world.
    </p>
  )

  if (content === 'Not Found') return (
    <p className={css.notFound}>
      I'm not sure what you're looking for ...
      <br />
      <br />
      ... but it's not here.
    </p>
  
  )

  return null
}

const Introduction = ({ content }) => (
  <div className={css.introduction}>
    <Description content={content} />
  </div>
)

export default Introduction
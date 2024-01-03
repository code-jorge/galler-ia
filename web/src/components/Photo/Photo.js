import css from './Photo.module.css'

const Photo = ({ name, source, path })=> (
  <div className={css.photo}>
    <a 
      rel="noopener noreferrer"
      href={`https://cdn.jorgeaguirre.es/Galer-ia/${source}/${path}-original.png`} 
      target="_blank" 
      download 
      className={css.photoContainer} 
    >
      <img
        loading="lazy"
        srcSet={`
          https://cdn.jorgeaguirre.es/Galer-ia/${source}/${path}-cover.webp 256w,
          https://cdn.jorgeaguirre.es/Galer-ia/${source}/${path}-small.webp 512w,
          https://cdn.jorgeaguirre.es/Galer-ia/${source}/${path}.webp 1024w
        `}
        sizes="250px"
        src={`https://cdn.jorgeaguirre.es/Galer-ia/${source}/${path}.webp`}
        alt={name}
        className={css.image}
      />
      <div className={css.caption}>{name}</div>
    </a>
  </div>
)

export default Photo
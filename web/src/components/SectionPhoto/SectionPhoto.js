import { Link } from 'react-router-dom'
import css from './SectionPhoto.module.css'

const SectionPhoto = ({ name, source, link })=> (
  <div className={css.photo}>
    <Link 
      rel="noopener noreferrer"
      to={link} 
      className={css.photoContainer} 
    >
      <img
        loading="lazy"
        src={`https://cdn.jorgeaguirre.es/Galer-ia/Secciones/${source}-cover.webp`}
        alt={name}
        className={css.image}
      />
      <div className={css.caption}>{name}</div>
    </Link>
  </div>
)

export default SectionPhoto
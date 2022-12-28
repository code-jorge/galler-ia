import Photo from '../Photo/Photo'
import css from './Gallery.module.css'

const Gallery = ({ photos })=> (
  <div className={css.gallery}>
    {photos.map(({ name, path })=> (
      <Photo
        key={path}
        name={name}
        path={path}
      />
    ))}
  </div>
)

export default Gallery


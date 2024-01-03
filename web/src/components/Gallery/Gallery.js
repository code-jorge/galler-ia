import Photo from '../Photo/Photo'
import css from './Gallery.module.css'

const Gallery = ({ photos, source })=> (
  <div className={css.gallery}>
    {photos.map(({ name, path })=> (
      <Photo
        key={path}
        source={source}
        name={name}
        path={path}
      />
    ))}
  </div>
)

export default Gallery


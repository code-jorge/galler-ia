import SectionPhoto from '../SectionPhoto/SectionPhoto'
import css from './SectionGallery.module.css'

const SectionGallery = ({ links })=> (
  <div className={css.gallery}>
    {links.map(({ name, source, link })=> (
      <SectionPhoto
        key={link}
        source={source}
        name={name}
        link={link}
      />
    ))}
  </div>
)

export default SectionGallery
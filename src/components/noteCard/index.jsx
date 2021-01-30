/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Label from '../../src/components/label'

const NoteCard = ({ title, labels, img, slug }) => {
  return (
      <div key={title} sx={{width: '33%', p: 2}}>
        <Link key={slug} href="/notes/[slug]" as={`/notes/${slug}`}>
          <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
            <div sx={{variant: 'containers.card',}}>
            <strong>{title}</strong>
            <img src={img} alt={ alt } />
              {labels?.length && labels?.map(label => <Label labelText={ label } />)}
            </div>
          </a>
        </Link>
      </div>
  )
}

export default NoteCard;
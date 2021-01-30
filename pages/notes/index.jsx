import { useEffect, useState } from 'react'
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Label from '../../src/components/label'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Notes = () => {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allNotes = await fetchEntries()
      setNotes([...allNotes])
    }
    getPosts()
  }, [])

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        {notes?.length > 0 && notes.map((note) => (
          <div key={note?.fields?.slug} sx={{width: '33%', p: 2}}>
            <Link href="/notes/[id]" as={`/notes/${note.fields.slug}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.fields.title}</strong>
                  <img sx={{maxWidth: '200px'}} src={note.fields.img} alt={ note.fields.alt } />
                  {note?.fields?.labels?.length && note?.fields?.labels?.map(label => <Label key={label} labelText={ label } />)}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes;
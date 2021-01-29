/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Label from '../../src/components/label'

const Note = () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
      <Label labelText="coding" />
    </div>
  )
}

export default Note;
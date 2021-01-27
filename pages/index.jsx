/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Page = () => {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))

  return (
      <div sx={{ height: `calc(100vh - 600px)`}}>
        <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
          <h1 sx={{fontSize: 8, my: 0}}>Note Next</h1>
        </div>
      </div> 
  )
}

export default Page;

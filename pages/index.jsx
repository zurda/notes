/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Page = () => {
  return (
      <div sx={{ height: `calc(100vh - 600px)`}}>
        <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
          <h1 sx={{fontSize: 8, my: 0}}>Note Next</h1>
        </div>
      </div> 
  )
}

export default Page;

/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Label = ({ labelText }) => (
  <p sx={{variant: 'containers.label',}}>{ labelText }</p>
)

export default Label
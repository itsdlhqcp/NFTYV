import { FunctionComponent, ReactNode } from 'react'
 
type Props = {
  children: ReactNode | ReactNode[]
}
 
const BaseLayout: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>
}
export default BaseLayout
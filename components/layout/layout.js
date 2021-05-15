import MainNavigation from './main-navigation'
import { GlobalStyle } from '../styles/GlobalStyle'

const Layout = (props) => {
  return (
    <>  
      <GlobalStyle />
      <MainNavigation />
      <main>{ props.children }</main>
    </>
  )
}

export default Layout
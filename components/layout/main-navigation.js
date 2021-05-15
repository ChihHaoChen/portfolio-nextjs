import Link from 'next/link'

import Logo from './logo'
import classes from './main-navigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/projects'>PROJECTS</Link>
          </li>
          <li>
            <Link href='/resume'>MY_RESUME</Link>
          </li>
          <li>
            <Link href='/contact'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation